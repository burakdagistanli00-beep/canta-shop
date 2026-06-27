"use client";
import Link from "next/link";
import { useCart } from "../lib/cart-context";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="bg-sand sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide text-ink">
          Atölye <span className="text-leather italic">Çanta</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-body text-ink/80">
          <Link href="/" className="hover:text-leather transition-colors">Koleksiyon</Link>
          <Link href="/?kategori=sirt-cantasi" className="hover:text-leather transition-colors">Sırt Çantası</Link>
          <Link href="/?kategori=el-cantasi" className="hover:text-leather transition-colors">El Çantası</Link>
          <Link href="/?kategori=seyahat-cantasi" className="hover:text-leather transition-colors">Seyahat</Link>
          <Link href="/siparis-takip" className="hover:text-leather transition-colors">Sipariş Takip</Link>
        </nav>
        <Link href="/sepet" className="relative font-body text-sm border border-ink/15 px-4 py-2 hover:border-leather transition-colors">
          Sepet
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-leather text-white text-xs w-5 h-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </div>
      <div className="stitch-divider" />
    </header>
  );
}
