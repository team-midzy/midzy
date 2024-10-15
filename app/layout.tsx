import "./globals.css";
import { Footer, Header, NavDrawer } from "@/components";
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

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        <NavDrawer />

        <main className="container grid grid-cols-12 gap-4 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
