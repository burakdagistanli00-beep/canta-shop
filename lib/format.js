function formatPrice(kurus) {
  return (kurus / 100).toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
}

module.exports = { formatPrice };
