import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '50');

    const where: any = {};
    
    if (category) {
      where.category = {
        name: category
      };
    }
    
    if (featured === 'true') {
      where.featured = true;
    }

    const services = await db.service.findMany({
      where,
      include: {
        category: true
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ],
      take: limit
    });

    return NextResponse.json({
      services
    });

  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar serviços' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      title,
      description,
      shortDesc,
      price,
      categoryId,
      featured
    } = body;

    // Validate required fields
    if (!title || !description || !shortDesc || !categoryId) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: título, descrição, descrição curta e categoria' },
        { status: 400 }
      );
    }

    // Check if category exists
    const category = await db.serviceCategory.findUnique({
      where: { id: categoryId }
    });

    if (!category) {
      return NextResponse.json(
        { error: 'Categoria não encontrada' },
        { status: 404 }
      );
    }

    // Create service
    const service = await db.service.create({
      data: {
        title,
        description,
        shortDesc,
        price: price ? parseFloat(price) : null,
        categoryId,
        featured: featured || false
      },
      include: {
        category: true
      }
    });

    return NextResponse.json({
      message: 'Serviço criado com sucesso!',
      service
    });

  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Erro ao criar serviço' },
      { status: 500 }
    );
  }
}