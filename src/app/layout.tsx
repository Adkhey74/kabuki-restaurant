import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kabuki - Restaurant Japonais Authentique",
  description: "Découvrez l'authenticité de la cuisine japonaise au restaurant Kabuki. Sushi, ramen, tempura et bien plus encore dans un cadre traditionnel.",
  keywords: "restaurant japonais, sushi, ramen, tempura, cuisine japonaise, Kabuki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="kabuki">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
