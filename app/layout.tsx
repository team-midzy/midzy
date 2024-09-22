import "./globals.css";
import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "TEAM MIDZY",
  description: "ITZY, MIDZY, 날자!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />

        <main className="container">{children}</main>

        <hr />
        <Footer />
      </body>
    </html>
  );
}
