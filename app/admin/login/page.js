"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Giriş başarısız.");
      return;
    }
    router.push("/admin");
  }

  return (
    <div className="max-w-sm mx-auto px-6 py-24">
      <h1 className="font-display text-2xl mb-6">Yönetim Paneli Girişi</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required type="email" placeholder="E-posta" className="w-full border border-ink/20 px-3 py-2"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input required type="password" placeholder="Şifre" className="w-full border border-ink/20 px-3 py-2"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="btn-primary w-full">Giriş Yap</button>
      </form>
      <p className="text-xs text-ink/40 mt-6">
        Demo giriş: admin@canta.com / admin123 (ilk seed sonrası değiştirilmeli)
      </p>
    </div>
  );
}
