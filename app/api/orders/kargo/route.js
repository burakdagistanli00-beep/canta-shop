import { prisma } from "../../../../lib/db";
import { verifyAdminToken } from "../../../../lib/auth";
import { createShipment } from "../../../../lib/aras-kargo";
import { NextResponse } from "next/server";

function checkAuth(req) {
  const token = req.cookies.get("admin_token")?.value;
  return token && verifyAdminToken(token);
}

export async function POST(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const { orderId } = await req.json();
  const order = await prisma.order.findUnique({ where: { id: orderId } });

  if (!order) {
    return NextResponse.json({ error: "Sipariş bulunamadı." }, { status: 404 });
  }

  try {
    const shipment = await createShipment({ order });

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: {
        takipNo: shipment.takipNo,
        kargoDurumu: "KARGOYA_VERILDI",
        status: "KARGODA",
      },
    });

    return NextResponse.json({
      ok: true,
      takipNo: shipment.takipNo,
      simulated: shipment.simulated || false,
      order: updated,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
