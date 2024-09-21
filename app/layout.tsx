import "./globals.css";
import { Header } from "@/components";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "MIDZY",
  description: "ITZY를 믿는 MIDZY의 공간",
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

        <main className="container pt-14">{children}</main>
      </body>
    </html>
  );
}
