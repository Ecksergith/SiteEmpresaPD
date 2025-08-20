import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const active = searchParams.get('active');
    const priority = searchParams.get('priority');
    const limit = parseInt(searchParams.get('limit') || '50');

    const where: any = {};
    
    if (category) {
      where.category = category;
    }
    
    if (active !== null) {
      where.active = active === 'true';
    }
    
    if (priority) {
      where.priority = priority;
    }

    const faqs = await db.fAQ.findMany({
      where,
      orderBy: [
        { priority: 'desc' },
        { order: 'asc' },
        { createdAt: 'desc' }
      ],
      take: limit
    });

    return NextResponse.json({
      faqs
    });

  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar FAQs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      question,
      answer,
      category,
      tags,
      priority,
      order
    } = body;

    // Validate required fields
    if (!question || !answer) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: pergunta e resposta' },
        { status: 400 }
      );
    }

    // Create FAQ
    const faq = await db.fAQ.create({
      data: {
        question,
        answer,
        category,
        tags,
        priority: priority || 'medium',
        order: order || 0
      }
    });

    return NextResponse.json({
      message: 'FAQ criado com sucesso!',
      faq
    });

  } catch (error) {
    console.error('Error creating FAQ:', error);
    return NextResponse.json(
      { error: 'Erro ao criar FAQ' },
      { status: 500 }
    );
  }
}