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
          <footer className="border-t border-ink/10 mt-16 py-10 text-center text-sm text-ink/60">
            © {new Date().getFullYear()} Atölye Çanta. Tüm hakları saklıdır.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
