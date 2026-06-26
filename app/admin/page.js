"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatPrice } from "../../lib/format";

const STATUS_LABELS = {
  BEKLEMEDE: "Beklemede",
  ODENDI: "Ödendi",
  HAZIRLANIYOR: "Hazırlanıyor",
  KARGODA: "Kargoda",
  TESLIM_EDILDI: "Teslim Edildi",
  IPTAL: "İptal",
};

export default function AdminDashboard() {
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/orders")
      .then(async (res) => {
        if (res.status === 401) {
          window.location.href = "/admin/login";
          return;
        }
        const data = await res.json();
        setOrders(data);
      })
      .catch(() => setError("Siparişler yüklenemedi."));
  }, []);

  async function updateStatus(id, status) {
    await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display text-2xl">Yönetim Paneli</h1>
        <Link href="/admin/urunler" className="btn-primary">Ürünleri Yönet</Link>
      </div>

      {error && <p className="text-red-600">{error}</p>}
      {!orders && !error && <p>Yükleniyor...</p>}
      {orders && orders.length === 0 && <p className="text-ink/60">Henüz sipariş yok.</p>}

      {orders && orders.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-ink/10 text-ink/50">
                <th className="py-2">Sipariş No</th>
                <th>Müşteri</th>
                <th>Tutar</th>
                <th>Durum</th>
                <th>Tarih</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-ink/5">
                  <td className="py-3">{o.orderNo}</td>
                  <td>{o.customerName}<br /><span className="text-ink/40">{o.email}</span></td>
                  <td>{formatPrice(o.totalAmount)}</td>
                  <td>
                    <select
                      value={o.status}
                      onChange={(e) => updateStatus(o.id, e.target.value)}
                      className="border border-ink/20 px-2 py-1"
                    >
                      {Object.entries(STATUS_LABELS).map(([k, v]) => (
                        <option key={k} value={k}>{v}</option>
                      ))}
                    </select>
                  </td>
                  <td>{new Date(o.createdAt).toLocaleDateString("tr-TR")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
