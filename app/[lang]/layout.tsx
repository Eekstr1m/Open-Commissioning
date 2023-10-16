import { ThemeChangeProvider } from "@/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import { Locale } from "@/i18n.config";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import LanguageButton from "@/components/LanguageButton/LanguageButton";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Commissioning",
  description: "Open Commissioning website",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <Script
        src="https://kit.fontawesome.com/d37f4b642f.js"
        crossOrigin="anonymous"
      ></Script>
      <body className={nunito.className}>
        <ThemeChangeProvider>
          <LanguageButton />
          <Header lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
        </ThemeChangeProvider>
      </body>
    </html>
  );
}
