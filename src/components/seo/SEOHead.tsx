import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  type = "website",
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("JM-ELEC") ? title : `${title} | JM-ELEC 91`;
  const autoCanonical = canonical || `https://jm-elec.fr${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={autoCanonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={autoCanonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="JM-ELEC 91" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
