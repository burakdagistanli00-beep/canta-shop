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
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-5">El işçiliği · Hakiki Deri · 2026 Koleksiyonu</p>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] mb-7">
              Her gün taşıdığın çanta, hikayeni de taşır.
            </h1>
            <div className="stitch-divider w-24 mb-7" />
            <p className="text-sand/70 mb-9 max-w-md leading-relaxed">
              Atölyemizde tek tek dikilen çantalarımız; sırt, el, omuz ve seyahat
              koleksiyonlarıyla her ana eşlik eder.
            </p>
            <a href="#koleksiyon" className="btn-primary inline-block">
              Koleksiyonu Gör
            </a>
          </div>
          <div className="brass-corners aspect-square bg-leather/20 flex items-center justify-center p-12">
            <img src="/images/placeholder-bag-1.svg" alt="Atölye Çanta" className="max-h-80" />
          </div>
        </div>
      </section>

      <section id="koleksiyon" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-2xl">Koleksiyon</h2>
          <div className="stitch-divider flex-1" />
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="/"
            className={`px-4 py-2 text-sm border transition-colors ${!kategoriSlug ? "border-leather text-leather" : "border-ink/15 hover:border-leather/50"}`}
          >
            Tümü
          </a>
          {categories.map((c) => (

              <a
                key={c.id}
              href={`/?kategori=${c.slug}`}
              className={`px-4 py-2 text-sm border transition-colors ${kategoriSlug === c.slug ? "border-leather text-leather" : "border-ink/15 hover:border-leather/50"}`}
            >
              {c.name}
            </a>
          ))}
        </div>

        {products.length === 0 ? (
          <p className="text-smoke">Bu kategoride henüz ürün yok.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
