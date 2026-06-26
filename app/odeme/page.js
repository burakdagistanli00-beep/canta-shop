"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../lib/cart-context";
import { formatPrice } from "../../lib/format";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    customerName: "", email: "", phone: "", address: "", city: "",
    cardHolderName: "", cardNumber: "", expireMonth: "", expireYear: "", cvc: "",
  });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items, total }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ödeme işlemi başarısız oldu.");
      clear();
      router.push(`/odeme/basarili?orderNo=${data.orderNo}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-ink/60">Sepetin boş, önce ürün eklemelisin.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-display text-2xl mb-8">Ödeme</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <fieldset className="space-y-3">
          <legend className="eyebrow mb-2">Teslimat Bilgileri</legend>
          <input required placeholder="Ad Soyad" className="w-full border border-ink/20 px-3 py-2"
            value={form.customerName} onChange={(e) => update("customerName", e.target.value)} />
          <input required type="email" placeholder="E-posta" className="w-full border border-ink/20 px-3 py-2"
            value={form.email} onChange={(e) => update("email", e.target.value)} />
          <input required placeholder="Telefon" className="w-full border border-ink/20 px-3 py-2"
            value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          <input required placeholder="Adres" className="w-full border border-ink/20 px-3 py-2"
            value={form.address} onChange={(e) => update("address", e.target.value)} />
          <input required placeholder="Şehir" className="w-full border border-ink/20 px-3 py-2"
            value={form.city} onChange={(e) => update("city", e.target.value)} />
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="eyebrow mb-2">Kart Bilgileri</legend>
          <input required placeholder="Kart Üzerindeki Ad" className="w-full border border-ink/20 px-3 py-2"
            value={form.cardHolderName} onChange={(e) => update("cardHolderName", e.target.value)} />
          <input required placeholder="Kart Numarası" className="w-full border border-ink/20 px-3 py-2"
            value={form.cardNumber} onChange={(e) => update("cardNumber", e.target.value)} />
          <div className="grid grid-cols-3 gap-3">
            <input required placeholder="AA" className="border border-ink/20 px-3 py-2"
              value={form.expireMonth} onChange={(e) => update("expireMonth", e.target.value)} />
            <input required placeholder="YYYY" className="border border-ink/20 px-3 py-2"
              value={form.expireYear} onChange={(e) => update("expireYear", e.target.value)} />
            <input required placeholder="CVC" className="border border-ink/20 px-3 py-2"
              value={form.cvc} onChange={(e) => update("cvc", e.target.value)} />
          </div>
          <p className="text-xs text-ink/50">
            iyzico API anahtarları eklenene kadar ödemeler geliştirme modunda simüle edilir, gerçek tahsilat yapılmaz.
          </p>
        </fieldset>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="flex justify-between items-center pt-2">
          <span>Toplam</span>
          <span className="text-xl font-medium">{formatPrice(total)}</span>
        </div>

        <button disabled={loading} className="btn-primary w-full">
          {loading ? "İşleniyor..." : "Siparişi Tamamla"}
        </button>
      </form>
    </div>
  );
}
