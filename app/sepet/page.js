"use client";
import Link from "next/link";
import { useCart } from "../../lib/cart-context";
import { formatPrice } from "../../lib/format";

export default function CartPage() {
  const { items, removeItem, updateQty, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="font-display text-2xl mb-4">Sepetin boş</h1>
        <p className="text-ink/60 mb-6">Koleksiyona göz atıp beğendiğin çantaları ekleyebilirsin.</p>
        <Link href="/" className="btn-primary inline-block">Koleksiyona Dön</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-2xl mb-8">Sepetim</h1>
      <div className="divide-y divide-ink/10 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-5">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover border border-ink/10" />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-ink/60">{formatPrice(item.price)}</p>
            </div>
            <div className="flex items-center border border-ink/20">
              <button className="px-3 py-1" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
              <span className="px-3">{item.qty}</span>
              <button className="px-3 py-1" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
            <p className="w-24 text-right font-medium">{formatPrice(item.price * item.qty)}</p>
            <button onClick={() => removeItem(item.id)} className="text-ink/40 hover:text-leather text-sm">
              Kaldır
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-8">
        <span className="text-lg">Toplam</span>
        <span className="text-xl font-medium">{formatPrice(total)}</span>
      </div>
      <Link href="/odeme" className="btn-primary block text-center">
        Ödemeye Geç
      </Link>
    </div>
  );
}
