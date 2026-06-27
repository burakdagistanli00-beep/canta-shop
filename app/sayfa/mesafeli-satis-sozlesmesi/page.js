export default function MesafeliSatisPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl mb-8">Mesafeli Satış Sözleşmesi</h1>
      <div className="space-y-6 text-ink/80 leading-relaxed text-sm">
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 1 — Taraflar</h2>
          <p>
            <strong>SATICI:</strong><br />
            Unvan: [DOLDURULACAK]<br />
            Adres: [DOLDURULACAK]<br />
            Vergi Dairesi / No: [DOLDURULACAK]<br />
            E-posta: [DOLDURULACAK]<br />
            Telefon: [DOLDURULACAK]
          </p>
          <p className="mt-2">
            <strong>ALICI:</strong> Sipariş formunda belirttiği bilgilerle işbu
            sözleşmeyi onaylayan tüketici.
          </p>
        </section>
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 2 — Sözleşmenin Konusu</h2>
          <p>
            İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait internet sitesi üzerinden
            elektronik ortamda verdiği siparişin satışı ve teslimi ile ilgili olarak
            6502 sayılı Tüketicinin Korunması Hakkında Kanun hükümleri gereğince
            tarafların hak ve yükümlülüklerinin belirlenmesidir.
          </p>
        </section>
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 3 — Ürün ve Ödeme Bilgileri</h2>
          <p>
            Ürünün cinsi, fiyatı, ödeme şekli ve teslimat bilgileri sipariş onay
            sayfasında ve e-postasında belirtilen şekildedir.
          </p>
        </section>
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 4 — Teslimat</h2>
          <p>
            Ürün, stok durumuna göre sipariş onayından itibaren en geç 30 gün içinde
            teslim edilir.
          </p>
        </section>
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 5 — Cayma Hakkı</h2>
          <p>
            ALICI, ürünün teslim alınmasından itibaren 14 gün içinde herhangi bir
            gerekçe göstermeksizin sözleşmeden cayma hakkına sahiptir.
          </p>
        </section>
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">Madde 6 — Uyuşmazlıkların Çözümü</h2>
          <p>
            İşbu sözleşmeden kaynaklanan uyuşmazlıklarda Tüketici Hakem Heyetleri ve
            Tüketici Mahkemeleri yetkilidir.
          </p>
        </section>
      </div>
    </div>
  );
}
