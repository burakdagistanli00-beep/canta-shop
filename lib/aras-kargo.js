// Aras Kargo entegrasyonu.
//
// Şu an bu fonksiyon GERÇEK bir kargo gönderisi oluşturmuyor — Aras Kargo ile
// gönderici sözleşmeni imzaladığında onlardan alacağın API kullanıcı adı,
// şifre ve müşteri kodunu .env dosyana ekleyip aşağıdaki yorum satırındaki
// gerçek SOAP/API çağrısını aktif etmen yeterli.
//
// .env dosyana eklemen gerekenler:
// ARAS_KARGO_USERNAME=...
// ARAS_KARGO_PASSWORD=...
// ARAS_KARGO_MUSTERI_KODU=...
// ARAS_KARGO_API_URL=https://customerservices.araskargo.com.tr/...  (Aras size verecek)
//
// Aras Kargo, entegrasyon için genellikle bir SOAP web servisi (WSDL) sağlar.
// Sözleşme imzaladığında Aras'tan "Entegrasyon Kılavuzu" istemen yeterli,
// bu dosyadaki createShipment fonksiyonunu o kılavuza göre dolduracağız.

async function createShipment({ order }) {
  const username = process.env.ARAS_KARGO_USERNAME;
  const password = process.env.ARAS_KARGO_PASSWORD;
  const musteriKodu = process.env.ARAS_KARGO_MUSTERI_KODU;

  if (!username || !password || !musteriKodu) {
    // API bilgileri henüz tanımlı değil -> geliştirme modu.
    // Gerçek bir kargo oluşturmadan, simüle edilmiş bir takip numarası döner.
    console.warn(
      "[Aras Kargo] API bilgileri .env dosyasında tanımlı değil. Geliştirme modunda simüle edilmiş takip numarası dönülüyor."
    );
    const simulatedTrackingNo = "ARS" + Date.now().toString().slice(-10);
    return {
      success: true,
      simulated: true,
      takipNo: simulatedTrackingNo,
      trackingUrl: `https://kargotakip.araskargo.com.tr/CargoTracking.aspx?code=${simulatedTrackingNo}`,
    };
  }

  // Gerçek entegrasyon (Aras Kargo'dan WSDL/API dokümanı geldiğinde doldurulacak):
  //
  // Aras Kargo genellikle aşağıdaki SOAP metodunu kullanır (kılavuzdan teyit edilmeli):
  // - SetOrder / SetDispatch gibi bir metotla gönderi bilgisi (alıcı adı, adres,
  //   telefon, sipariş no, ağırlık vs.) Aras sistemine kaydedilir.
  // - Karşılığında bir "kargo takip numarası" (cargoKey) döner.
  //
  // const soapClient = await createArasSoapClient(process.env.ARAS_KARGO_API_URL);
  // const result = await soapClient.SetDispatchAsync({
  //   USERNAME: username,
  //   PASSWORD: password,
  //   MUSTERI_KODU: musteriKodu,
  //   INVOICE_KEY: order.orderNo,
  //   RECEIVER_NAME: order.customerName,
  //   RECEIVER_ADDRESS: order.address,
  //   RECEIVER_CITY: order.city,
  //   RECEIVER_PHONE1: order.phone,
  //   // ... Aras'ın kılavuzunda istenen diğer alanlar
  // });
  //
  // return {
  //   success: true,
  //   takipNo: result.cargoKey,
  //   trackingUrl: `https://kargotakip.araskargo.com.tr/CargoTracking.aspx?code=${result.cargoKey}`,
  // };

  throw new Error(
    "Aras Kargo API entegrasyonu henüz tamamlanmadı. Aras'tan API dokümanını aldığında bu fonksiyonu birlikte dolduracağız."
  );
}

function getTrackingUrl(takipNo) {
  if (!takipNo) return null;
  return `https://kargotakip.araskargo.com.tr/CargoTracking.aspx?code=${takipNo}`;
}

module.exports = { createShipment, getTrackingUrl };
