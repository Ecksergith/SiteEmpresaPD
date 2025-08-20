import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { ZAI } from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      serviceId,
      description,
      budget,
      urgency,
      address,
      city,
      state
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, email, telefone e descrição' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validate phone format (Brazilian format)
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Telefone inválido. Use o formato (11) 9999-9999' },
        { status: 400 }
      );
    }

    // Create or find user
    let user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      user = await db.user.create({
        data: {
          email,
          name,
          phone,
          address,
          city,
          state
        }
      });
    } else {
      // Update existing user info
      user = await db.user.update({
        where: { email },
        data: {
          name: name || user.name,
          phone: phone || user.phone,
          address: address || user.address,
          city: city || user.city,
          state: state || user.state
        }
      });
    }

    // Create quote
    const quote = await db.quote.create({
      data: {
        name,
        email,
        phone,
        serviceId,
        description,
        budget,
        urgency,
        address,
        city,
        state,
        userId: user.id
      },
      include: {
        user: true,
        service: true
      }
    });

    // Send notification using Z-AI SDK
    try {
      const zai = await ZAI.create();
      
      const notification = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente de CRM para uma empresa de serviços. Gere uma notificação profissional sobre nova solicitação de orçamento.'
          },
          {
            role: 'user',
            content: `Nova solicitação de orçamento recebida:
            
            Cliente: ${name}
            Email: ${email}
            Telefone: ${phone}
            Serviço: ${serviceId || 'Não especificado'}
            Descrição: ${description}
            Orçamento: ${budget || 'Não informado'}
            Urgência: ${urgency || 'Normal'}
            Cidade: ${city || 'Não informada'}
            
            Por favor, gere uma mensagem de notificação para a equipe de vendas.`
          }
        ]
      });

      console.log('Notification generated:', notification.choices[0]?.message?.content);
    } catch (aiError) {
      console.error('Error generating AI notification:', aiError);
      // Don't fail the request if AI notification fails
    }

    return NextResponse.json({
      message: 'Orçamento solicitado com sucesso!',
      quote: {
        id: quote.id,
        name: quote.name,
        email: quote.email,
        status: quote.status,
        createdAt: quote.createdAt
      }
    });

  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json(
      { error: 'Erro ao processar solicitação' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');

    const skip = (page - 1) * limit;

    const where = status ? { status } : {};

    const [quotes, total] = await Promise.all([
      db.quote.findMany({
        where,
        include: {
          user: true,
          service: true
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit
      }),
      db.quote.count({ where })
    ]);

    return NextResponse.json({
      quotes,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar orçamentos' },
      { status: 500 }
    );
  }
}