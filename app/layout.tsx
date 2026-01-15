import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
// Onest font configuration

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maksim Alesiayuk - Full-Stack Developer",
  description: "Portfolio website of Maksim Alesiayuk, Full-Stack Developer from Poland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
