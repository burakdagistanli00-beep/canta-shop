"use client";
import { useEffect, useState } from "react";
import { formatPrice } from "../../../lib/format";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "", description: "", price: "", stock: "", color: "", material: "", categoryId: "",
  });
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/products");
    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    load();
    fetch("/api/categories").then((r) => r.json()).then(setCategories).catch(() => {});
  }, []);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Ürün eklenemedi.");
      return;
    }
    setForm({ name: "", description: "", price: "", stock: "", color: "", material: "", categoryId: "" });
    load();
  }

  async function handleDelete(id) {
    if (!confirm("Bu ürünü silmek istediğine emin misin?")) return;
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-display text-2xl mb-8">Ürün Yönetimi</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 mb-12 border border-ink/10 p-6">
        <input required placeholder="Ürün Adı" className="border border-ink/20 px-3 py-2"
          value={form.name} onChange={(e) => update("name", e.target.value)} />
        <select required className="border border-ink/20 px-3 py-2"
          value={form.categoryId} onChange={(e) => update("categoryId", e.target.value)}>
          <option value="">Kategori Seç</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <input required type="number" step="0.01" placeholder="Fiyat (TL)" className="border border-ink/20 px-3 py-2"
          value={form.price} onChange={(e) => update("price", e.target.value)} />
        <input required type="number" placeholder="Stok Adedi" className="border border-ink/20 px-3 py-2"
          value={form.stock} onChange={(e) => update("stock", e.target.value)} />
        <input placeholder="Renk" className="border border-ink/20 px-3 py-2"
          value={form.color} onChange={(e) => update("color", e.target.value)} />
        <input placeholder="Materyal" className="border border-ink/20 px-3 py-2"
          value={form.material} onChange={(e) => update("material", e.target.value)} />
        <textarea required placeholder="Açıklama" className="border border-ink/20 px-3 py-2 md:col-span-2"
          value={form.description} onChange={(e) => update("description", e.target.value)} />
        {error && <p className="text-red-600 text-sm md:col-span-2">{error}</p>}
        <button className="btn-primary md:col-span-2">Ürün Ekle</button>
      </form>

      {!products && <p>Yükleniyor...</p>}
      {products && (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-ink/10 text-ink/50">
              <th className="py-2">Ürün</th>
              <th>Fiyat</th>
              <th>Stok</th>
              <th>Kategori</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-ink/5">
                <td className="py-3">{p.name}</td>
                <td>{formatPrice(p.price)}</td>
                <td>{p.stock}</td>
                <td>{p.category.name}</td>
                <td>
                  <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline">
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
