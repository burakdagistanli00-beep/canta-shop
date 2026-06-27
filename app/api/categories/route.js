import { prisma } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(req) {
  const { name } = await req.json();
  if (!name || !name.trim()) {
    return NextResponse.json({ error: "Kategori adı gerekli." }, { status: 400 });
  }
  const slug = name
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  try {
    const category = await prisma.category.create({
      data: { name: name.trim(), slug },
    });
    return NextResponse.json(category);
  } catch (err) {
    return NextResponse.json({ error: "Bu kategori zaten var." }, { status: 400 });
  }
}
