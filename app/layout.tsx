import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import Meta from "../components/Meta";
import Script from "next/script";
import Providers from "./providers";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Meta />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_KEY}`}
        id="google-analytics"
      />

      <Script strategy="lazyOnload" id="google-analytics-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS_KEY}', {
            page_path: window.location.pathname,
          });
          `}
      </Script>
      <Providers>
        <body className={publicSans.className}>
          <div className="flex flex-col relative w-full min-h-screen text-[#ECECEC]">
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
