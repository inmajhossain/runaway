import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "@/components/layout-components/HeaderTop";
import Header from "@/components/layout-components/header/Header";
import Footer from "@/components/layout-components/footer/Footer";

const inter = localFont({
  src: "../fonts/InterFont.ttf",
  // Weight: "400, 500, 600, 700, 800",
});

const manrope = localFont({
  src: "../fonts/ManropeFont.ttf",
  // Weight: "400, 500, 600, 700, 800",
  variable: "--font-manrope",
});

const lobster = localFont({
  src: "../fonts/Lobster.ttf",
  // Weight: "400, 500, 600, 700, 800",
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "Runaway",
  description: "Clothing E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.className} ${lobster.variable} antialiased`}
      >
        <HeaderTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
