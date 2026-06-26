export default function OrderSuccessPage({ searchParams }) {
  const orderNo = searchParams?.orderNo;
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-3xl mb-4">Siparişin Alındı 🎉</h1>
      <p className="text-ink/70 mb-2">Sipariş numaran:</p>
      <p className="text-xl font-medium mb-8">{orderNo}</p>
      <p className="text-ink/60 mb-8">
        Sipariş detaylarını e-posta adresine gönderdik. Hazırlık ve kargo süreciyle ilgili
        bilgilendirmeleri aynı adresten alacaksın.
      </p>
      <div className="flex gap-3 justify-center">
        <a href="/" className="btn-primary inline-block">Koleksiyona Dön</a>
        <a href={`/siparis-takip?orderNo=${orderNo}`} className="border border-ink/20 px-6 py-3 inline-block hover:border-leather">
          Siparişimi Takip Et
        </a>
      </div>
    </div>
  );
}
