export default function SSSPage() {
  const sorular = [
    {
      soru: "Siparişim ne zaman kargoya verilir?",
      cevap:
        "Siparişiniz, ödemeniz onaylandıktan sonra 1-3 iş günü içinde hazırlanıp kargoya teslim edilir. Hazırlanma süresi ürünün stok durumuna göre değişebilir.",
    },
    {
      soru: "Kargo takibimi nasıl yapabilirim?",
      cevap:
        'Sipariş numaranızla "Sipariş Takip" sayfasından kargo durumunuzu ve takip numaranızı görebilirsiniz.',
    },
    {
      soru: "Hangi ödeme yöntemlerini kullanabilirim?",
      cevap:
        "Kredi kartı ve banka kartı ile güvenli ödeme yapabilirsiniz. Ödemeleriniz iyzico güvencesiyle işlenir.",
    },
    {
      soru: "Ürünü iade edebilir miyim?",
      cevap:
        "Evet, ürünü teslim aldıktan sonra 14 gün içinde, kullanılmamış ve orijinal ambalajında olmak kaydıyla iade edebilirsiniz. Detaylar için İade ve Değişim Şartları sayfamızı inceleyebilirsiniz.",
    },
    {
      soru: "Yanlış veya hasarlı ürün gönderilirse ne olur?",
      cevap:
        "Yanlış veya hasarlı ürün teslim alınması durumunda, ürünü teslim aldığınız tarihten itibaren 14 gün içinde bizimle iletişime geçmeniz halinde ücretsiz değişim veya iade sağlanır.",
    },
    {
      soru: "Üye olmadan sipariş verebilir miyim?",
      cevap:
        "Evet, üye olmadan da sipariş verebilirsiniz. Sipariş numaranızla sipariş durumunuzu takip edebilirsiniz.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl mb-8">Sıkça Sorulan Sorular</h1>
      <div className="space-y-8">
        {sorular.map((s, i) => (
          <div key={i} className="border-b border-ink/10 pb-6">
            <h2 className="font-medium mb-2">{s.soru}</h2>
            <p className="text-ink/70 leading-relaxed">{s.cevap}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
