import { prisma } from "../../../lib/db";
import { formatPrice } from "../../../lib/format";
import AddToCartButton from "../../../components/AddToCartButton";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { category: true },
  });

  if (!product) return notFound();

  const images = JSON.parse(product.images);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      <div className="aspect-[4/5] bg-white border border-ink/10 flex items-center justify-center">
        <img src={images[0]} alt={product.name} className="max-h-[90%]" />
      </div>
      <div>
        <p className="eyebrow mb-2">{product.category.name}</p>
        <h1 className="font-display text-3xl mb-4">{product.name}</h1>
        <p className="text-xl mb-6">{formatPrice(product.price)}</p>
        <p className="text-ink/70 mb-8 leading-relaxed">{product.description}</p>

        <dl className="grid grid-cols-2 gap-4 mb-8 text-sm">
          {product.color && (
            <div>
              <dt className="text-ink/50">Renk</dt>
              <dd>{product.color}</dd>
            </div>
          )}
          {product.material && (
            <div>
              <dt className="text-ink/50">Materyal</dt>
              <dd>{product.material}</dd>
            </div>
          )}
          <div>
            <dt className="text-ink/50">Stok Durumu</dt>
            <dd>{product.stock > 0 ? `${product.stock} adet` : "Tükendi"}</dd>
          </div>
        </dl>

        {product.stock > 0 ? (
          <AddToCartButton product={product} />
        ) : (
          <p className="text-ink/50 italic">Bu ürün şu anda stokta yok.</p>
        )}
      </div>
    </div>
  );
}
