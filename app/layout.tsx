import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie listing",
  description: "Created by Oscar Nguyen",
  authors: { name: "Oscar Nguyen", url: "https://github.com/uwerrrr" },
  openGraph: {
    title: "Movie listing",
    description:
      "A movie listing website using TMDB API built with Next.js and TypeScript.",
    emails: "van.lenguyen@outlook.com",
    url: "https://github.com/uwerrrr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
