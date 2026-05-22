import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-thai"
});

export const metadata: Metadata = {
  title: "Sakon Custom Web | รับทำเว็บไซต์ขายของออนไลน์",
  description:
    "บริการรับทำเว็บไซต์ขายของออนไลน์ รองรับมือถือ แท็บเล็ต คอมพิวเตอร์ และเชื่อมต่อ LINE OA."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${notoSansThai.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
