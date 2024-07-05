import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "sead post",
  description: "Welcome to sead post.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
