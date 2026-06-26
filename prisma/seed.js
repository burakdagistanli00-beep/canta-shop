const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  const kategoriler = [
    { name: "Sırt Çantası", slug: "sirt-cantasi" },
    { name: "El Çantası", slug: "el-cantasi" },
    { name: "Omuz Çantası", slug: "omuz-cantasi" },
    { name: "Seyahat Çantası", slug: "seyahat-cantasi" },
  ];

  for (const k of kategoriler) {
    await prisma.category.upsert({
      where: { slug: k.slug },
      update: {},
      create: k,
    });
  }

  const sirt = await prisma.category.findUnique({ where: { slug: "sirt-cantasi" } });
  const el = await prisma.category.findUnique({ where: { slug: "el-cantasi" } });
  const omuz = await prisma.category.findUnique({ where: { slug: "omuz-cantasi" } });
  const seyahat = await prisma.category.findUnique({ where: { slug: "seyahat-cantasi" } });

  const urunler = [
    {
      name: "Atlas Deri Sırt Çantası",
      slug: "atlas-deri-sirt-cantasi",
      description: "Hakiki deriden üretilmiş, laptop bölmeli, günlük kullanıma uygun şık sırt çantası.",
      price: 189900,
      stock: 24,
      images: JSON.stringify(["/images/placeholder-bag-1.svg"]),
      color: "Kahverengi",
      material: "Hakiki Deri",
      featured: true,
      categoryId: sirt.id,
    },
    {
      name: "Nova Mini El Çantası",
      slug: "nova-mini-el-cantasi",
      description: "Akşam davetleri için kompakt, zincir askılı, kadife dokulu mini el çantası.",
      price: 74900,
      stock: 40,
      images: JSON.stringify(["/images/placeholder-bag-2.svg"]),
      color: "Siyah",
      material: "Kadife",
      featured: true,
      categoryId: el.id,
    },
    {
      name: "Luna Omuz Çantası",
      slug: "luna-omuz-cantasi",
      description: "Geniş iç hacimli, ayarlanabilir askılı, günlük kombinlere uyumlu omuz çantası.",
      price: 99900,
      stock: 30,
      images: JSON.stringify(["/images/placeholder-bag-3.svg"]),
      color: "Bej",
      material: "Suni Deri",
      featured: true,
      categoryId: omuz.id,
    },
    {
      name: "Voyage Kabin Boy Seyahat Çantası",
      slug: "voyage-kabin-boy-seyahat-cantasi",
      description: "Uçak kabin boyutuna uygun, tekerlekli, dayanıklı seyahat çantası.",
      price: 249900,
      stock: 15,
      images: JSON.stringify(["/images/placeholder-bag-4.svg"]),
      color: "Lacivert",
      material: "Polyester",
      featured: false,
      categoryId: seyahat.id,
    },
    {
      name: "Mira Örgü Plaj Çantası",
      slug: "mira-orgu-plaj-cantasi",
      description: "Hasır dokulu, yazlık, geniş iç hacme sahip plaj ve günlük çantası.",
      price: 54900,
      stock: 50,
      images: JSON.stringify(["/images/placeholder-bag-5.svg"]),
      color: "Doğal",
      material: "Hasır",
      featured: false,
      categoryId: el.id,
    },
    {
      name: "Kadro Şehir Sırt Çantası",
      slug: "kadro-sehir-sirt-cantasi",
      description: "Su geçirmez kumaş, USB şarj çıkışlı, ofis ve şehir kullanımına uygun sırt çantası.",
      price: 129900,
      stock: 35,
      images: JSON.stringify(["/images/placeholder-bag-6.svg"]),
      color: "Gri",
      material: "Su Geçirmez Kumaş",
      featured: false,
      categoryId: sirt.id,
    },
  ];

  for (const u of urunler) {
    await prisma.product.upsert({
      where: { slug: u.slug },
      update: {},
      create: u,
    });
  }

  const passwordHash = await bcrypt.hash("admin123", 10);
  await prisma.admin.upsert({
    where: { email: "admin@canta.com" },
    update: {},
    create: { email: "admin@canta.com", password: passwordHash },
  });

  console.log("Seed tamamlandı. Admin giriş: admin@canta.com / admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
