import { prisma } from "../../../lib/db";
import { createPayment } from "../../../lib/iyzico";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { customerName, email, phone, address, city, items, total } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Sepet boş." }, { status: 400 });
    }

    // Stok kontrolü
    for (const item of items) {
      const product = await prisma.product.findUnique({ where: { id: item.id } });
      if (!product || product.stock < item.qty) {
        return NextResponse.json(
          { error: `${item.name} için yeterli stok yok.` },
          { status: 400 }
        );
      }
    }

    const orderNo = "AC" + Date.now().toString().slice(-8);

    const order = await prisma.order.create({
      data: {
        orderNo,
        customerName,
        email,
        phone,
        address,
        city,
        totalAmount: total,
        items: {
          create: items.map((i) => ({
            productId: i.id,
            quantity: i.qty,
            price: i.price,
          })),
        },
      },
    });

    const payment = await createPayment({
      order,
      cardHolderName: body.cardHolderName,
      cardNumber: body.cardNumber,
      expireMonth: body.expireMonth,
      expireYear: body.expireYear,
      cvc: body.cvc,
    });

    if (!payment.success) {
      await prisma.order.update({ where: { id: order.id }, data: { status: "IPTAL" } });
      return NextResponse.json({ error: "Ödeme başarısız oldu." }, { status: 400 });
    }

    await prisma.order.update({
      where: { id: order.id },
      data: { status: "ODENDI", paymentRef: payment.paymentRef },
    });

    // Stok düşümü
    for (const item of items) {
      await prisma.product.update({
        where: { id: item.id },
        data: { stock: { decrement: item.qty } },
      });
    }

    return NextResponse.json({ orderNo: order.orderNo });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}
