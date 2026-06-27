import "./globals.css";
import { CartProvider } from "../lib/cart-context";
import Header from "../components/Header";

export const metadata = {
  title: "Atölye Çanta — El Yapımı Deri Çantalar",
  description: "Hakiki deri ve özenli işçilikle üretilen sırt, el, omuz ve seyahat çantaları.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="font-body min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-ink/10 mt-16 py-10 text-sm text-ink/60">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
              <nav className="flex flex-wrap gap-4 justify-center">
                <a href="/sayfa/sss" className="hover:text-leather">Sıkça Sorulan Sorular</a>
                <a href="/sayfa/iade-degisim" className="hover:text-leather">İade ve Değişim Şartları</a>
                <a href="/sayfa/mesafeli-satis-sozlesmesi" className="hover:text-leather">Mesafeli Satış Sözleşmesi</a>
                <a href="/sayfa/gizlilik-politikasi" className="hover:text-leather">Gizlilik Politikası</a>
                <a href="/siparis-takip" className="hover:text-leather">Sipariş Takip</a>
              </nav>
              <p>© {new Date().getFullYear()} Atölye Çanta. Tüm hakları saklıdır.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
