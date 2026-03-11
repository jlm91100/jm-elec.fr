import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface JsonLdProps {
  breadcrumbs?: BreadcrumbItem[];
  localBusiness?: boolean;
  faqItems?: { question: string; answer: string }[];
}

export function JsonLd({ breadcrumbs, localBusiness, faqItems }: JsonLdProps) {
  const schemas: object[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  if (localBusiness) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Electrician",
      name: "JM-ELEC 91",
      description: "Électricien professionnel — remplacement de tableau, dépannage, mise en conformité, borne IRVE. 10 ans d'expérience.",
      url: "https://jm-elec.fr",
      telephone: "+33767973848",
      email: "contact@jm-elec.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brétigny-sur-Orge",
        postalCode: "91220",
        addressRegion: "Essonne",
        addressCountry: "FR",
      },
      priceRange: "€€",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Essonne" },
        { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
        { "@type": "AdministrativeArea", name: "Yvelines" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "87",
        reviewCount: "87",
      },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification IRVE" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Qualifelec" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "RGE" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Assurance décennale" },
      ],
      sameAs: ["https://share.google/1Y4GECfYkv4uzzoBR"],
    });
  }

  if (faqItems && faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}