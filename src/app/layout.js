import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Wedding Advertising to Grow Your Business | WeddingPro",
  description: "Best Wedding Advertising to Grow Your Business | WeddingPro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
