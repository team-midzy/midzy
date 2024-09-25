import "./globals.css";
import { Footer, Header } from "@/components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import type { Metadata } from "next";
import localFont from "next/font/local";

dayjs.locale("ko");

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

        <main className="container py-6">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
