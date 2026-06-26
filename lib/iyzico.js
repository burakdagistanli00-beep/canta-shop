// iyzico ödeme entegrasyonu.
//
// Şu an bu fonksiyon GERÇEK bir ödeme almıyor — iyzico hesabını açtığında
// API_KEY ve SECRET_KEY'i .env dosyana ekleyip aşağıdaki yorum satırındaki
// gerçek çağrıyı aktif etmen yeterli. iyzico'nun resmi Node.js SDK'sını
// kullanman önerilir: npm install iyzipay
//
// .env dosyana eklemen gerekenler:
// IYZICO_API_KEY=...
// IYZICO_SECRET_KEY=...
// IYZICO_BASE_URL=https://sandbox-api.iyzipay.com   (canlıya geçince https://api.iyzipay.com)

async function createPayment({ order, cardHolderName, cardNumber, expireMonth, expireYear, cvc }) {
  const apiKey = process.env.IYZICO_API_KEY;
  const secretKey = process.env.IYZICO_SECRET_KEY;

  if (!apiKey || !secretKey) {
    // API anahtarları henüz tanımlı değil -> geliştirme modu.
    // Siparişi "ÖDENDİ" gibi işaretlemeden, simüle edilmiş başarılı yanıt döner.
    console.warn(
      "[iyzico] API anahtarları .env dosyasında tanımlı değil. Geliştirme modunda simüle edilmiş ödeme dönülüyor."
    );
    return {
      success: true,
      simulated: true,
      paymentRef: "SIMULATED-" + Date.now(),
    };
  }

  // Gerçek entegrasyon (iyzipay paketini kurduğunda aktif et):
  //
  // const Iyzipay = require("iyzipay");
  // const iyzipay = new Iyzipay({
  //   apiKey,
  //   secretKey,
  //   uri: process.env.IYZICO_BASE_URL || "https://sandbox-api.iyzipay.com",
  // });
  //
  // return new Promise((resolve, reject) => {
  //   const request = {
  //     locale: "tr",
  //     conversationId: order.orderNo,
  //     price: (order.totalAmount / 100).toFixed(2),
  //     paidPrice: (order.totalAmount / 100).toFixed(2),
  //     currency: "TRY",
  //     basketId: order.orderNo,
  //     paymentCard: {
  //       cardHolderName,
  //       cardNumber,
  //       expireMonth,
  //       expireYear,
  //       cvc,
  //     },
  //     buyer: { id: order.id, name: order.customerName, email: order.email, /* ... */ },
  //     // shippingAddress, billingAddress, basketItems eklenmeli
  //   };
  //   iyzipay.payment.create(request, (err, result) => {
  //     if (err) return reject(err);
  //     resolve({ success: result.status === "success", paymentRef: result.paymentId, raw: result });
  //   });
  // });

  throw new Error("iyzico SDK kurulmadı. 'npm install iyzipay' çalıştırıp yukarıdaki kodu aç.");
}

module.exports = { createPayment };
