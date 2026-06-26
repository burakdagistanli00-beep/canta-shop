import { prisma } from "../../../lib/db";
import { getTrackingUrl } from "../../../lib/aras-kargo";
import { NextResponse } from "next/server";

export async function GET(req) {
  const orderNo = req.nextUrl.searchParams.get("orderNo");
  if (!orderNo) {
    return NextResponse.json({ error: "Sipariş numarası gerekli." }, { status: 400 });
  }

  const order = await prisma.order.findUnique({
    where: { orderNo },
    include: { items: { include: { product: true } } },
  });

  if (!order) {
    return NextResponse.json({ error: "Sipariş bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({
    orderNo: order.orderNo,
    status: order.status,
    cargoFirma: order.cargoFirma,
    takipNo: order.takipNo,
    kargoDurumu: order.kargoDurumu,
    trackingUrl: getTrackingUrl(order.takipNo),
    items: order.items.map((i) => ({ name: i.product.name, quantity: i.quantity })),
    createdAt: order.createdAt,
  });
}
