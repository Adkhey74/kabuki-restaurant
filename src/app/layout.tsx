import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kabuki - Restaurant Japonais Authentique | Sushi, Ramen, Tempura",
  description: "Restaurant japonais Kabuki : cuisine authentique, sushi frais, ramen traditionnel, tempura croustillant. Réservez votre table pour une expérience gastronomique unique. Ouvert du lundi au samedi.",
  keywords: "restaurant japonais, sushi, ramen, tempura, cuisine japonaise, Kabuki, restaurant Paris, japonais authentique, réservation restaurant",
  authors: [{ name: "Restaurant Kabuki" }],
  creator: "Restaurant Kabuki",
  publisher: "Restaurant Kabuki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kabuki-restaurant.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kabuki - Restaurant Japonais Authentique",
    description: "Découvrez l'authenticité de la cuisine japonaise au restaurant Kabuki. Sushi, ramen, tempura et bien plus encore dans un cadre traditionnel.",
    url: 'https://kabuki-restaurant.vercel.app',
    siteName: 'Restaurant Kabuki',
    images: [
      {
        url: '/20250823_2314_Devanture Restaurant Japonais_remix_01k3cce0hrfyzvv279g3bdsg2m.png',
        width: 1200,
        height: 630,
        alt: 'Restaurant Kabuki - Devanture',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kabuki - Restaurant Japonais Authentique",
    description: "Découvrez l'authenticité de la cuisine japonaise au restaurant Kabuki.",
    images: ['/20250823_2314_Devanture Restaurant Japonais_remix_01k3cce0hrfyzvv279g3bdsg2m.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google', // À remplacer par votre code
  },
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

        {/* Schema.org Structured Data */}
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Restaurant Kabuki",
              "description": "Restaurant japonais authentique proposant sushi, ramen, tempura et cuisine traditionnelle japonaise",
              "url": "https://kabuki-restaurant.vercel.app",
              "telephone": "+33 1 23 45 67 89",
              "email": "contact@kabuki.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Rue de la Gastronomie",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.8566,
                "longitude": 2.3522
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "12:00",
                  "closes": "14:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "19:00",
                  "closes": "22:30"
                }
              ],
              "servesCuisine": ["Japanese", "Sushi", "Ramen", "Tempura"],
              "priceRange": "€€",
              "image": "https://kabuki-restaurant.vercel.app/20250823_2314_Devanture Restaurant Japonais_remix_01k3cce0hrfyzvv279g3bdsg2m.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "156"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
