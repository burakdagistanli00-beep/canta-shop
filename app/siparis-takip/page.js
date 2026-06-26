"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const STATUS_LABELS = {
  BEKLEMEDE: "Beklemede",
  ODENDI: "Ödendi, hazırlanıyor",
  HAZIRLANIYOR: "Hazırlanıyor",
  KARGODA: "Kargoda",
  TESLIM_EDILDI: "Teslim Edildi",
  IPTAL: "İptal Edildi",
};

export default function SiparisTakipPage() {
  return (
    <Suspense fallback={null}>
      <SiparisTakipIcerik />
    </Suspense>
  );
}

function SiparisTakipIcerik() {
  const searchParams = useSearchParams();
  const [orderNo, setOrderNo] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fromUrl = searchParams?.get("orderNo");
    if (fromUrl) setOrderNo(fromUrl);
  }, [searchParams]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/siparis-takip?orderNo=${encodeURIComponent(orderNo)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Sipariş bulunamadı.");
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="font-display text-2xl mb-2">Sipariş Takip</h1>
      <p className="text-ink/60 mb-8">
        Sipariş numaranı gir, kargo durumunu görelim.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-10">
        <input
          required
          placeholder="Örn. AC12345678"
          className="flex-1 border border-ink/20 px-3 py-2"
          value={orderNo}
          onChange={(e) => setOrderNo(e.target.value)}
        />
        <button className="btn-primary" disabled={loading}>
          {loading ? "Aranıyor..." : "Sorgula"}
        </button>
      </form>

      {error && <p className="text-red-600 mb-6">{error}</p>}

      {result && (
        <div className="border border-ink/10 p-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-ink/60">Sipariş No</span>
            <span className="font-medium">{result.orderNo}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink/60">Durum</span>
            <span className="font-medium">{STATUS_LABELS[result.status] || result.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink/60">Tarih</span>
            <span className="font-medium">
              {new Date(result.createdAt).toLocaleDateString("tr-TR")}
            </span>
          </div>

          {result.takipNo ? (
            <div className="pt-4 border-t border-ink/10">
              <p className="eyebrow mb-2">{result.cargoFirma}</p>
              <p className="mb-3">
                Takip No: <span className="font-medium">{result.takipNo}</span>
              </p>
              {result.trackingUrl && (
                
                  <a href={result.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Kargo Takip Sayfasını Aç
                </a>
              )}
            </div>
          ) : (
            <p className="pt-4 border-t border-ink/10 text-ink/50 italic">
              Siparişin henüz kargoya verilmedi.
            </p>
          )}

          <div className="pt-4 border-t border-ink/10">
            <p className="eyebrow mb-2">Ürünler</p>
            <ul className="text-sm text-ink/70 space-y-1">
              {result.items.map((item, i) => (
                <li key={i}>
                  {item.quantity} x {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
