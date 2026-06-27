export default function IadeDegisimPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl mb-8">İade ve Değişim Şartları</h1>
      <div className="space-y-6 text-ink/80 leading-relaxed">
        <section>
          <h2 className="font-medium text-lg mb-2 text-ink">1. Cayma Hakkı</h2>
          <p>
            6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler
            Yönetmeliği kapsamında, ürünü teslim aldığınız tarihten itibaren 14 (on dört)
            gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin
            sözleşmeden cayma hakkınız bulunmaktadır.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-2 text-ink">2. İade Koşulları</h2>
          <p>
            İade edilecek ürünün kullanılmamış, yıpranmamış ve satışa hazır halde olması,
            tüm etiket ve aksesuarlarıyla birlikte orijinal ambalajında gönderilmesi
            gerekmektedir.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-2 text-ink">3. İade Süreci</h2>
          <p>
            İade talebinizi{" "}
            <a href="/siparis-takip" className="text-leather underline">
              Sipariş Takip
            </a>{" "}
            sayfası üzerinden veya bizimle iletişime geçerek başlatabilirsiniz. Talebiniz
            onaylandıktan sonra size bildirilen kargo firması ile ürünü ücretsiz olarak
            iade edebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-2 text-ink">4. Ücret İadesi</h2>
          <p>
            İade edilen ürün bize ulaştıktan ve incelendikten sonra, ödemeniz aynı ödeme
            yöntemiyle en geç 10 iş günü içinde hesabınıza geri aktarılır.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-2 text-ink">5. Değişim</h2>
          <p>
            Ürün değişim talepleriniz için de aynı süreç (14 gün içinde, kullanılmamış ve
            orijinal ambalajında) geçerlidir. Stok durumuna göre değişim, aynı üründe
            farklı renk/model veya tutar farkı ile başka bir ürün şeklinde yapılabilir.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-2 text-ink">6. İstisnalar</h2>
          <p>
            Niteliği itibarıyla iade edilemeyecek ürünler (örn. kişiye özel üretilen,
            hijyen kuralları sebebiyle ambalajı açılmış kişisel kullanım ürünleri) cayma
            hakkı kapsamı dışındadır.
          </p>
        </section>

        <p className="text-sm text-ink/50 pt-4">
          Sorularınız için iletişim sayfamızdan bize ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}
