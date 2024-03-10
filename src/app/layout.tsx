import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { URL } from "url";

export const metadata: Metadata = {
  title: "sid12g's blog",
  description: "조성민의 블로그에 오신 것을 환영합니다.",
  formatDetection: { telephone: false },
  metadataBase: new URL("https://post.sid12g.dev"),
  openGraph: {
    title: "sid12g's blog",
    description: "조성민의 블로그에 오신 것을 환영합니다.",
    url: "https://post.sid12g.dev",
    images: [{ url: "https://post.sid12g.dev/images/blog_image.png" }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
