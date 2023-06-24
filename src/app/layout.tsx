import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductContextProvider } from "../context/ProductContext";
import "./globals.css";

export const metadata = {
  title: "Product Builder",
  description: "Simple Product Builder made with Next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-screen text-center overflow-x-hidden">
        <ProductContextProvider>
          <Header />
          <div className="overflow-y-scroll">{children}</div>
          <Footer />
        </ProductContextProvider>
      </body>
    </html>
  );
}
