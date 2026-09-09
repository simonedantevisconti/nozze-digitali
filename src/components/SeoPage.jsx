import { useEffect } from "react";

const SeoPage = ({ title, description, canonical, breadcrumbName }) => {
  useEffect(() => {
    const homepageTitle =
      "Nozze Digitali | Sito Web per Matrimonio e Partecipazioni Digitali";

    const homepageDescription =
      "Crea il sito web del tuo matrimonio con partecipazioni digitali, conferme RSVP, gestione invitati, tavoli, foto, esigenze alimentari e tutte le informazioni del grande giorno.";

    const homepageCanonical = "https://nozzedigitali.site/";

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", canonical);

    const structuredDataId = "seo-page-structured-data";

    document.getElementById(structuredDataId)?.remove();

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          url: canonical,
          name: title,
          description,
          isPartOf: {
            "@id": "https://nozzedigitali.site/#website",
          },
          breadcrumb: {
            "@id": `${canonical}#breadcrumb`,
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonical}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://nozzedigitali.site/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: breadcrumbName,
              item: canonical,
            },
          ],
        },
      ],
    };

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.id = structuredDataId;
    script.textContent = JSON.stringify(structuredData);

    document.head.appendChild(script);

    return () => {
      document.title = homepageTitle;

      metaDescription?.setAttribute("content", homepageDescription);

      canonicalLink?.setAttribute("href", homepageCanonical);

      document.getElementById(structuredDataId)?.remove();
    };
  }, [title, description, canonical, breadcrumbName]);

  return null;
};

export default SeoPage;
