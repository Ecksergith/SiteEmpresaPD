import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

// Schema para validação dos dados do post do blog
const blogPostSchema = z.object({
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres"),
  content: z.string().min(10, "Conteúdo deve ter pelo menos 10 caracteres"),
  excerpt: z.string().min(5, "Resumo deve ter pelo menos 5 caracteres"),
  slug: z.string().min(3, "Slug deve ter pelo menos 3 caracteres"),
  image: z.string().optional(),
  published: z.boolean().default(false),
  author: z.string().optional(),
  tags: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const published = searchParams.get("published");
    const search = searchParams.get("search");
    const tag = searchParams.get("tag");

    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (published === "true") {
      where.published = true;
    } else if (published === "false") {
      where.published = false;
    }
    
    if (search) {
      where.OR = [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          excerpt: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }
    
    if (tag) {
      where.tags = {
        contains: tag,
        mode: "insensitive",
      };
    }

    const [blogPosts, total] = await Promise.all([
      db.blogPost.findMany({
        where,
        orderBy: [
          { published: "desc" },
          { createdAt: "desc" },
        ],
        skip,
        take: limit,
      }),
      db.blogPost.count({ where }),
    ]);

    return NextResponse.json({
      blogPosts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Erro ao buscar posts do blog:", error);
    return NextResponse.json(
      { error: "Erro ao buscar posts do blog" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar os dados
    const validatedData = blogPostSchema.parse(body);

    // Verificar se o slug já existe
    const existingPost = await db.blogPost.findUnique({
      where: { slug: validatedData.slug },
    });

    if (existingPost) {
      return NextResponse.json(
        { error: "Já existe um post com este slug" },
        { status: 400 }
      );
    }

    // Criar o post do blog
    const blogPost = await db.blogPost.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        message: "Post do blog criado com sucesso",
        blogPost,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar post do blog:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Dados inválidos",
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erro ao criar post do blog" },
      { status: 500 }
    );
  }
}