import { useEffect } from "react";

const SeoPage = ({ title, description, canonical, breadcrumbName }) => {
  useEffect(() => {
    const homepageTitle =
      "Nozze Digitali | Sito Web per Matrimonio e Partecipazioni Digitali";

    const homepageDescription =
      "Crea il sito web del tuo matrimonio con partecipazioni digitali, conferme RSVP, gestione invitati, tavoli, foto, esigenze alimentari e tutte le informazioni del grande giorno.";

    const homepageCanonical = "https://nozzedigitali.site/";

    const homepageSocialTitle =
      "Nozze Digitali | Il tuo matrimonio in un unico spazio digitale";

    const homepageSocialDescription =
      "Partecipazioni digitali, conferme RSVP, invitati, tavoli, foto e informazioni del matrimonio in un unico sito personalizzato.";

    document.title = title;

    const setMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");

        const [name, content] = attribute;

        element.setAttribute(name, content);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);

      return element;
    };

    const metaDescription = setMeta(
      'meta[name="description"]',
      ["name", "description"],
      description,
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", canonical);

    const ogTitle = setMeta(
      'meta[property="og:title"]',
      ["property", "og:title"],
      title,
    );

    const ogDescription = setMeta(
      'meta[property="og:description"]',
      ["property", "og:description"],
      description,
    );

    const ogUrl = setMeta(
      'meta[property="og:url"]',
      ["property", "og:url"],
      canonical,
    );

    setMeta('meta[property="og:type"]', ["property", "og:type"], "website");

    setMeta('meta[property="og:locale"]', ["property", "og:locale"], "it_IT");

    setMeta(
      'meta[property="og:site_name"]',
      ["property", "og:site_name"],
      "Nozze Digitali",
    );

    const twitterCard = setMeta(
      'meta[name="twitter:card"]',
      ["name", "twitter:card"],
      "summary",
    );

    const twitterTitle = setMeta(
      'meta[name="twitter:title"]',
      ["name", "twitter:title"],
      title,
    );

    const twitterDescription = setMeta(
      'meta[name="twitter:description"]',
      ["name", "twitter:description"],
      description,
    );

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

      ogTitle?.setAttribute("content", homepageSocialTitle);

      ogDescription?.setAttribute("content", homepageSocialDescription);

      ogUrl?.setAttribute("content", homepageCanonical);

      twitterCard?.setAttribute("content", "summary");

      twitterTitle?.setAttribute("content", homepageSocialTitle);

      twitterDescription?.setAttribute("content", homepageSocialDescription);

      document.getElementById(structuredDataId)?.remove();
    };
  }, [title, description, canonical, breadcrumbName]);

  return null;
};

export default SeoPage;
