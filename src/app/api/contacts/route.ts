import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      subject,
      message,
      department
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, email e mensagem' },
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

    // Create or find user
    let user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      user = await db.user.create({
        data: {
          email,
          name,
          phone
        }
      });
    } else {
      // Update existing user info
      user = await db.user.update({
        where: { email },
        data: {
          name: name || user.name,
          phone: phone || user.phone
        }
      });
    }

    // Create contact
    const contact = await db.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
        department,
        userId: user.id
      },
      include: {
        user: true
      }
    });

    // Send notification using Z-AI SDK
    try {
      const zai = await ZAI.create();
      
      const notification = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente de suporte ao cliente para uma empresa de serviços. Gere uma notificação profissional sobre novo contato recebido.'
          },
          {
            role: 'user',
            content: `Novo contato recebido:
            
            Nome: ${name}
            Email: ${email}
            Telefone: ${phone || 'Não informado'}
            Assunto: ${subject || 'Não especificado'}
            Departamento: ${department || 'Geral'}
            Mensagem: ${message}
            
            Por favor, gere uma mensagem de notificação para a equipe de suporte.`
          }
        ]
      });

      console.log('Contact notification generated:', notification.choices[0]?.message?.content);
    } catch (aiError) {
      console.error('Error generating AI notification:', aiError);
      // Don't fail the request if AI notification fails
    }

    return NextResponse.json({
      message: 'Mensagem enviada com sucesso!',
      contact: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        status: contact.status,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      { error: 'Erro ao processar mensagem' },
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
    const department = searchParams.get('department');

    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status;
    if (department) where.department = department;

    const [contacts, total] = await Promise.all([
      db.contact.findMany({
        where,
        include: {
          user: true
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit
      }),
      db.contact.count({ where })
    ]);

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar contatos' },
      { status: 500 }
    );
  }
}