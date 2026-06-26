import { prisma } from "../../../lib/db";
import { verifyAdminToken } from "../../../lib/auth";
import { NextResponse } from "next/server";

function checkAuth(req) {
  const token = req.cookies.get("admin_token")?.value;
  return token && verifyAdminToken(token);
}

export async function GET(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }
  const orders = await prisma.order.findMany({
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(orders);
}

export async function PATCH(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }
  const { id, status } = await req.json();
  const order = await prisma.order.update({ where: { id }, data: { status } });
  return NextResponse.json(order);
}
