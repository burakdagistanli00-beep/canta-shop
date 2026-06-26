import { prisma } from "../lib/db";
import ProductCard from "../components/ProductCard";

export const dynamic = "force-dynamic";

export default async function HomePage({ searchParams }) {
  const kategoriSlug = searchParams?.kategori;

  const where = { active: true };
  if (kategoriSlug) {
    where.category = { slug: kategoriSlug };
  }

  const products = await prisma.product.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  const categories = await prisma.category.findMany();

  return (
    <div>
      <section className="bg-ink text-sand">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-sand/70 mb-4">El işçiliği · Hakiki deri</p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Her gün taşıdığın çanta, hikayeni de taşır.
            </h1>
            <p className="text-sand/80 mb-8 max-w-md">
              Atölyemizde tek tek dikilen çantalarımız; sırt, el, omuz ve seyahat
              koleksiyonlarıyla her ana eşlik eder.
            </p>
            <a href="#koleksiyon" className="btn-primary inline-block">
              Koleksiyonu Gör
            </a>
          </div>
          <div className="aspect-square bg-leather/30 rounded-sm flex items-center justify-center">
            <img src="/images/placeholder-bag-1.svg" alt="Atölye Çanta" className="max-h-80" />
          </div>
        </div>
      </section>

      <section id="koleksiyon" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="/"
            className={`px-4 py-2 text-sm border ${!kategoriSlug ? "border-leather text-leather" : "border-ink/20"}`}
          >
            Tümü
          </a>
          {categories.map((c) => (
            <a
              key={c.id}
              href={`/?kategori=${c.slug}`}
              className={`px-4 py-2 text-sm border ${kategoriSlug === c.slug ? "border-leather text-leather" : "border-ink/20"}`}
            >
              {c.name}
            </a>
          ))}
        </div>

        {products.length === 0 ? (
          <p className="text-ink/60">Bu kategoride henüz ürün yok.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
