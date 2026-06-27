export default function MesafeliSatisPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl mb-8">Mesafeli Satış Sözleşmesi</h1>
      <div className="space-y-6 text-ink/80 leading-relaxed text-sm">
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 1 — Taraflar</h2>
          <p>
            <strong>SATICI:</strong><br />
            Unvan: [DOLDURULACAK — Şirket/İşletme Unvanı]<br />
            Adres: [DOLDURULACAK]<br />
            Vergi Dairesi / No: [DOLDURULACAK]<br />
            E-posta: [DOLDURULACAK]<br />
            Telefon: [DOLDURULACAK]
          </p>
          <p className="mt-2">
            <strong>ALICI:</strong> Sipariş formunda belirttiği ad, adres ve iletişim
            bilgileri ile işbu sözleşmeyi onaylayan tüketici.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 2 — Sözleşmenin Konusu</h2>
          <p>
            İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait internet sitesi üzerinden
            elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış fiyatı
            belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı
            Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği
            hükümleri gereğince tarafların hak ve yükümlülüklerinin belirlenmesidir.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 3 — Sözleşme Konusu Ürün/Ödeme/Teslimat Bilgileri</h2>
          <p>
            Ürünün cinsi, miktarı, marka/modeli, satış fiyatı, ödeme şekli ve teslimat
            bilgileri, sipariş sırasında ALICI'ya gösterilen sipariş özeti sayfasında
            ve sipariş onay e-postasında belirtilen şekildedir.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 4 — Teslimat</h2>
          <p>
            Ürün, stok durumuna göre sipariş onayından itibaren en geç 30 gün içinde
            ALICI'nın belirttiği adrese kargo ile teslim edilir. Teslimat süresi ürün
            sayfasında ayrıca belirtilebilir.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 5 — Cayma Hakkı</h2>
          <p>
            ALICI, ürünün kendisine veya gösterdiği adresteki k�şiye tesliminden itibaren
            14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin
            sözleşmeden cayma hakkına sahiptir. Detaylar için{" "}
            <a href="/sayfa/iade-degisim" className="underline">
              İade ve Değişim Şartları
            </a>{" "}
            sayfamızı inceleyebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 6 — Genel Hükümler</h2>
          <p>
            ALICI, internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış
            fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi
            sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul eder.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 7 — Uyuşmazlıkların Çözümü</h2>
          <p>
            İşbu sözleşmeden kaynaklanan uyuşmazlıklarda, Ticaret Bakanlığı'nca her yıl
            ilan edilen değere kadar Tüketici Hakem Heyetleri, aşan değerlerde ise
            Tüketici Mahkemeleri yetkilidir.
          </p>
        </section>

        <p className="text-ink/50 pt-4">
          İşbu sözleşme, ALICI tarafından elektronik ortamda onaylanmasıyla yürürlluȀqe
          girer.
        </p>
      </div>
    </div>
  );
}
