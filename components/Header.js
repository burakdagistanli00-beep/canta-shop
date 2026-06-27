"use client";
import Link from "next/link";
import { useCart } from "../lib/cart-context";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-ink">
          Atölye Çanta
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-body text-ink/80">
          <Link href="/" className="hover:text-leather transition-colors">Koleksiyon</Link>
          <Link href="/?kategori=sirt-cantasi" className="hover:text-leather transition-colors">Sırt Çantası</Link>
          <Link href="/?kategori=el-cantasi" className="hover:text-leather transition-colors">El Çantası</Link>
          <Link href="/?kategori=seyahat-cantasi" className="hover:text-leather transition-colors">Seyahat</Link>
          <Link href="/siparis-takip" className="hover:text-leather transition-colors">Sipariş Takip</Link>
        </nav>
        <Link href="/sepet" className="relative font-body text-sm bg-ink text-white px-4 py-2 rounded hover:opacity-90 transition-opacity">
          Sepet
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-leather text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
