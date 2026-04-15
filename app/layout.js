import Header from "../app/components/Header/Header";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Script from "next/script";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  title: "Solwyz Technologies",
  description: "Solwyz Technologies",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

        {/* ✅ Google Tag Manager (Head script equivalent) */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-PGMNWSQH'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PGMNWSQH');`}
        </Script>

        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGMNWSQH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
