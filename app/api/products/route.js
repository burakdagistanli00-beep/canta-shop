import { prisma } from "../../../lib/db";
import { verifyAdminToken } from "../../../lib/auth";
import { NextResponse } from "next/server";

function checkAuth(req) {
  const token = req.cookies.get("admin_token")?.value;
  return token && verifyAdminToken(token);
}

export async function GET() {
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(products);
}

export async function POST(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }
  const data = await req.json();
  const slug = data.name
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const product = await prisma.product.create({
    data: {
      name: data.name,
      slug: slug + "-" + Date.now().toString().slice(-5),
      description: data.description,
      price: Math.round(parseFloat(data.price) * 100),
      stock: parseInt(data.stock, 10),
      images: JSON.stringify([data.image || "/images/placeholder-bag-1.svg"]),
      color: data.color,
      material: data.material,
      featured: !!data.featured,
      categoryId: data.categoryId,
    },
  });
  return NextResponse.json(product);
}

export async function DELETE(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }
  const { id } = await req.json();
  await prisma.product.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
