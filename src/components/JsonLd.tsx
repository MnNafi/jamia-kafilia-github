export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Jamia Kafilia Sunnia Model Madrasa & Orphanage",
    "url": "https://jamiakafilia.com",
    "logo": "https://jamiakafilia.com/logo.png", // Placeholder
    "description": "Sherpur's largest Sunni institution, providing excellence in Madrasa education.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vatshala",
      "addressLocality": "Sherpur Sadar",
      "addressRegion": "Sherpur",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880 1810-423231",
      "contactType": "customer service"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
