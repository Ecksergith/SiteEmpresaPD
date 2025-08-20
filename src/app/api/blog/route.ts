import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import ZAI from 'z-ai-web-dev-sdk';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const featured = searchParams.get('featured');
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (published !== null) {
      where.published = published === 'true';
    }
    
    if (featured === 'true') {
      where.featured = true;
    }
    
    if (category) {
      where.category = category;
    }

    const [posts, total] = await Promise.all([
      db.blogPost.findMany({
        where,
        orderBy: [
          { featured: 'desc' },
          { createdAt: 'desc' }
        ],
        skip,
        take: limit
      }),
      db.blogPost.count({ where })
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      title,
      content,
      excerpt,
      slug,
      published,
      featured,
      author,
      tags,
      readTime,
      category
    } = body;

    // Validate required fields
    if (!title || !content || !excerpt || !slug) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: título, conteúdo, resumo e slug' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingPost = await db.blogPost.findUnique({
      where: { slug }
    });

    if (existingPost) {
      return NextResponse.json(
        { error: 'Slug já existe' },
        { status: 400 }
      );
    }

    // Generate excerpt with AI if not provided
    let finalExcerpt = excerpt;
    if (!excerpt && content) {
      try {
        const zai = await ZAI.create();
        
        const aiResponse = await zai.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: 'Você é um assistente especializado em criar resumos concisos e atrativos para posts de blog.'
            },
            {
              role: 'user',
              content: `Por favor, gere um resumo conciso e atrativo (máximo 160 caracteres) para o seguinte post de blog:
              
              Título: ${title}
              Conteúdo: ${content.substring(0, 1000)}...
              
              O resumo deve ser em português e deve despertar o interesse do leitor.`
            }
          ]
        });

        finalExcerpt = aiResponse.choices[0]?.message?.content?.trim() || excerpt;
      } catch (aiError) {
        console.error('Error generating excerpt:', aiError);
        // Use original excerpt if AI generation fails
      }
    }

    // Calculate read time if not provided
    let finalReadTime = readTime;
    if (!readTime && content) {
      // Average reading speed: 200 words per minute
      const words = content.split(/\s+/).length;
      finalReadTime = Math.ceil(words / 200);
    }

    // Create blog post
    const post = await db.blogPost.create({
      data: {
        title,
        content,
        excerpt: finalExcerpt,
        slug,
        published: published || false,
        featured: featured || false,
        author,
        tags,
        readTime: finalReadTime,
        category
      }
    });

    return NextResponse.json({
      message: 'Post criado com sucesso!',
      post
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Erro ao criar post' },
      { status: 500 }
    );
  }
}