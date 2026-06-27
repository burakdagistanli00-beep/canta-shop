export default function GizlilikPolitikasiPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl mb-8">Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>
      <div className="space-y-6 text-ink/80 leading-relaxed text-sm">
        <section>
          <h2 className="font-medium text-base mb-2 text-ink">1. Veri Sorumlusu</h2>
          <p>
            6698 saxılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, veri
            sorumlusu sıfatıyla [DOLDURULACAK — Şirket/İşletme Unvanı] ("biz") olarak,
            kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmek isteriz.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">2. İşlenen Kişisel Veriler</h2>
          <p>
            Sipariş sürecinde ad-soyad, e-posta adresi, telefon numarası, teslimat
            adresi gibi bilgileriniz; ödeme sürecinde ise ödeme sağlayıcımız (iyzico)
            üzerinden işlenen kart bilgileriniz (bu bilgiler bizde saklanmaz, doğrudan
            ödeme sağlayıcısı tarafından işlenir) toplanmaktadır.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">3. Kişisel Verilerin İşlenme Amacı</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Siparişlerinizin alınması, hazırlanması ve teslim edilmesi</li>
            <li>Kargo ve teslimat süreçlerinin yürütülmesi</li>
            <li>Müşteri hizmetleri ve destek taleplerinin karşılanması</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi (fatura, muhasebe kayıtları vb.)</li>
            <li>İzin verdiğiniz takdirde kampanya ve bülten bilgilendirmeleri</li>
          </ul>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz; siparişinizin teslimi için kargo firmalarına, ödeme
            işlemlerinin gerçekleştirilmesi için ödeme altyapı sağlayıcımıza (iyzico) ve
            yasal zorunluluklar kapsamında yetkili kamu kurum ve kuruluşlarına
            aktarılabilir.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">5. Veri Sahibinin Hakları</h2>
          <p>
            KVKK'nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini
            öğrenme, işlenmise buna ilişkin bilgi talep etme, işlenme amacına uygun
            kullanılıp kullanılmadığını öğrenme, düzetilmesini veya silinmesini talep
            etme haklarına sahipsiniz. Bu haklarınızı kullanmak için [DOLDURULACAK —
            e-posta adresi] üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">6. Çerezler (Cookies)</h2>
          <p>
            Sitemiz, deneyiminizi iyileştirmek amacıyla çerezler kullanabilir. Tarayıcı
            ayarlarınızdan çerezleri yönetebilir veya devre dışı bırakabilirsiniz.
        </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2 text-ink">7. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari
            tedbirler alınmaktadır. Ödeme bilgileriniz hiçbir zaman sunucularımızda
            saklanmaz; bu bilgiler doğrudan PCI-DSS uyumlu ödeme altyapımız üzerinden
            islenir.
          </p>
        </section>

        <p className="text-ink/50 pt-4">
          Bu metin, gerekli görüldükçe güncellenebilir. Güncel sürüm her zaman bu
          sayfada yayınlanır.
        </p>
      </div>
    </div>
  );
}
