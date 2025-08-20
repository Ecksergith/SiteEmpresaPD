import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

// Schema para validação dos dados da categoria
const categorySchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  description: z.string().optional(),
  icon: z.string().optional(),
  color: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search");

    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
          },
        },
        {
          description: {
            contains: search,
          },
        },
      ];
    }

    const [categories, total] = await Promise.all([
      db.serviceCategory.findMany({
        where,
        include: {
          _count: {
            select: {
              services: true,
            },
          },
        },
        orderBy: {
          name: "asc",
        },
        skip,
        take: limit,
      }),
      db.serviceCategory.count({ where }),
    ]);

    return NextResponse.json({
      categories,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return NextResponse.json(
      { error: "Erro ao buscar categorias" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar os dados
    const validatedData = categorySchema.parse(body);

    // Verificar se já existe uma categoria com este nome
    const existingCategory = await db.serviceCategory.findFirst({
      where: {
        name: {
          equals: validatedData.name,
        },
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: "Já existe uma categoria com este nome" },
        { status: 400 }
      );
    }

    // Criar a categoria
    const category = await db.serviceCategory.create({
      data: validatedData,
      include: {
        _count: {
          select: {
            services: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Categoria criada com sucesso",
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    
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
      { error: "Erro ao criar categoria" },
      { status: 500 }
    );
  }
}