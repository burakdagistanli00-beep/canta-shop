import Link from "next/link";
import { formatPrice } from "../lib/format";

export default function ProductCard({ product }) {
  const images = JSON.parse(product.images);
  return (
    <Link href={`/urun/${product.slug}`} className="group block">
      <div className="aspect-[4/5] bg-[#FAF8F6] rounded-lg border border-ink/5 overflow-hidden mb-3 flex items-center justify-center">
        <img
          src={images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-xs text-smoke mb-1">{product.color}</p>
      <h3 className="font-display text-base font-medium leading-snug text-ink">{product.name}</h3>
      <p className="font-body text-sm mt-1 font-semibold text-leather">{formatPrice(product.price)}</p>
    </Link>
  );
}
