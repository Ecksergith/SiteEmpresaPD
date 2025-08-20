import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      content,
      rating,
      email
    } = body;

    // Validate required fields
    if (!name || !content) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome e conteúdo' },
        { status: 400 }
      );
    }

    // Validate rating
    if (rating && (rating < 1 || rating > 5)) {
      return NextResponse.json(
        { error: 'Avaliação deve ser entre 1 e 5' },
        { status: 400 }
      );
    }

    // Find user by email if provided
    let user = null;
    if (email) {
      user = await db.user.findUnique({
        where: { email }
      });
    }

    // Create testimonial
    const testimonial = await db.testimonial.create({
      data: {
        name,
        content,
        rating: rating || 5,
        userId: user?.id
      },
      include: {
        user: true
      }
    });

    return NextResponse.json({
      message: 'Depoimento enviado com sucesso! Aguardando aprovação.',
      testimonial: {
        id: testimonial.id,
        name: testimonial.name,
        rating: testimonial.rating,
        approved: testimonial.approved,
        createdAt: testimonial.createdAt
      }
    });

  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { error: 'Erro ao processar depoimento' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const approved = searchParams.get('approved');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '50');

    const where: any = {};
    
    if (approved !== null) {
      where.approved = approved === 'true';
    }
    
    if (featured === 'true') {
      // Add featured logic if needed
    }

    const testimonials = await db.testimonial.findMany({
      where,
      include: {
        user: true
      },
      orderBy: [
        { approved: 'desc' },
        { createdAt: 'desc' }
      ],
      take: limit
    });

    return NextResponse.json({
      testimonials
    });

  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar depoimentos' },
      { status: 500 }
    );
  }
}