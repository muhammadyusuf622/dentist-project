import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dental Map — Stomatolog xizmatlari va uchrashuv bron qilish",
    template: "%s | Dental Map",
  },
  description:
    "Zamonaviy stomatologiya: profilaktika, tiklash, kosmetik davolash, Invisalign va moslashuvchan to'lov. Yaqqin studiyani toping va onlayn bron qiling.",
  alternates: {
    canonical: "/doctor",
  },
  openGraph: {
    title: "Dental Map — Qulay va sifatli stomatologiya",
    description:
      "10 000+ ijobiy sharhlar. Sug'urta, a'zolik va bo'lib-bo'lib to'lov imkoniyatlari. Onlayn bron qiling.",
    url: "/doctor",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DoctorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dental Map",
    url: "https://dentalmap.example.com/doctor",
    description:
      "Zamonaviy stomatologiya: profilaktika, tiklash, kosmetik davolash va Invisalign.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "10000",
    },
    sameAs: ["https://t.me/stomatolog_booking_bot"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
