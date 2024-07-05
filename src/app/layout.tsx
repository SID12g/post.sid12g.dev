import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
