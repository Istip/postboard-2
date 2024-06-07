import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const font = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PostBoard",
  description: "Never forget a post again!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${font.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
