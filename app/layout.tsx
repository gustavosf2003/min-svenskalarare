import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Providers from "./providers";
import Meta from "../components/Meta";
import "react-loading-skeleton/dist/skeleton.css";

const publicSans = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
      <body className={publicSans.className}>
        <Providers>
          <div className="relative flex flex-col w-full min-h-screen text-primaryWhite">
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  );
}
