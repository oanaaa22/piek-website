import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIEK — The Sage Companion of YEE",
  description:
    "PIEK is the sage ankylosaurus companion of YEE — an Ethereum token built for meme culture and attention rotation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
