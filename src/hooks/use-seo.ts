import { useEffect } from "react";
import { useLocation } from "react-router";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ProductSchema {
  name: string;
  description: string;
  brand?: string;
  category?: string;
  material?: string;
  image?: string;
  offers?: {
    priceCurrency?: string;
    lowPrice?: string;
    highPrice?: string;
    availability?: string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

// AEO: Speakable content for voice search optimization
interface SpeakableContent {
  headline: string;
  summary: string;
  cssSelectors?: string[];
}

// GEO: How-To schema for AI answer engines
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchema {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
  image?: string;
}

// AEO: Question-Answer for direct answers
interface QASchema {
  question: string;
  answer: string;
  dateCreated?: string;
  upvoteCount?: number;
}

// GEO: Service schema for AI engines
interface ServiceSchema {
  name: string;
  description: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string[];
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  breadcrumbs?: BreadcrumbItem[];
  productSchema?: ProductSchema;
  faqSchema?: FAQItem[];
  articleSchema?: {
    headline: string;
    description: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
  };
  // AEO & GEO enhancements
  speakableContent?: SpeakableContent;
  howToSchema?: HowToSchema;
  qaSchema?: QASchema[];
  serviceSchema?: ServiceSchema;
  // AEO: Featured snippet optimization
  featuredSnippet?: {
    type: "paragraph" | "list" | "table";
    content: string;
    listItems?: string[];
  };
  // GEO: Entity optimization for AI
  entityType?: "Product" | "Service" | "Organization" | "Place";
  relatedEntities?: string[];
}

export const useSEO = ({
  title = "Starlight Tubes - Steel Pipe Manufacturer & Exporter | Stainless Steel, Carbon Steel, Nickel Alloy Pipes",
  description = "Starlight Tubes is a leading steel pipe manufacturer and exporter in India. We manufacture and export stainless steel pipes, carbon steel tubes, nickel alloy pipes, inconel tubes, copper pipes, aluminium sheets, pipe fittings & flanges to 60+ countries. ISO 9001 certified.",
  keywords = "steel pipe manufacturer, steel tube manufacturer, steel pipe exporter, stainless steel pipe manufacturer, carbon steel pipe manufacturer, nickel alloy pipe manufacturer, inconel pipe manufacturer, pipe manufacturer India, tube manufacturer India, pipe fittings manufacturer, flanges manufacturer",
  image = "https://www.starlighttubes.com/StarlightLogo.png",
  url = "https://www.starlighttubes.com",
  type = "website",
  noIndex = false,
  author = "Starlight Tubes",
  publishedTime,
  modifiedTime,
  breadcrumbs,
  productSchema,
  faqSchema,
  articleSchema,
  // AEO & GEO props
  speakableContent,
  howToSchema,
  qaSchema,
  serviceSchema,
  featuredSnippet,
  entityType,
  relatedEntities,
}: SEOProps = {}) => {
  const location = useLocation();
  const fullUrl = `${url}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Remove existing JSON-LD scripts (cleanup)
    const removeJsonLd = (id: string) => {
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }
    };

    // Add JSON-LD structured data
    const addJsonLd = (id: string, data: object) => {
      removeJsonLd(id);
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // Robots meta tag
    if (noIndex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag(
        "robots",
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      );
    }

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:alt", title, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag(
      "og:site_name",
      "Starlight Tubes - Steel Pipe Manufacturer",
      true
    );
    updateMetaTag("og:locale", "en_US", true);

    // Twitter tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", image, true);
    updateMetaTag("twitter:url", fullUrl, true);
    updateMetaTag("twitter:site", "@starlighttubes", true);
    updateMetaTag("twitter:creator", "@starlighttubes", true);

    // Article metadata (for blog/content pages)
    if (publishedTime) {
      updateMetaTag("article:published_time", publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag("article:modified_time", modifiedTime, true);
    }

    // Update canonical link
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Alternate language links (hreflang)
    const addAlternateLink = (hreflang: string, href: string) => {
      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`
      ) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Add hreflang tags for language targeting
    addAlternateLink("en", fullUrl);
    addAlternateLink("x-default", fullUrl);

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      addJsonLd("breadcrumb-schema", breadcrumbSchema);
    }

    // Product Schema
    if (productSchema) {
      const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productSchema.name,
        description: productSchema.description,
        brand: {
          "@type": "Brand",
          name: productSchema.brand || "Starlight Tubes",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Starlight Tubes",
          url: "https://www.starlighttubes.com",
        },
        category: productSchema.category || "Steel Pipes & Tubes",
        material: productSchema.material,
        image: productSchema.image || image,
        offers: productSchema.offers
          ? {
              "@type": "AggregateOffer",
              priceCurrency: productSchema.offers.priceCurrency || "USD",
              lowPrice: productSchema.offers.lowPrice || "10",
              highPrice: productSchema.offers.highPrice || "5000",
              availability:
                productSchema.offers.availability ||
                "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Starlight Tubes",
              },
            }
          : undefined,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      };
      addJsonLd("product-schema", productJsonLd);
    }

    // FAQ Schema
    if (faqSchema && faqSchema.length > 0) {
      const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSchema.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };
      addJsonLd("faq-schema", faqJsonLd);
    }

    // Article Schema
    if (articleSchema) {
      const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articleSchema.headline,
        description: articleSchema.description,
        author: {
          "@type": "Organization",
          name: articleSchema.author || "Starlight Tubes",
          url: "https://www.starlighttubes.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Starlight Tubes",
          logo: {
            "@type": "ImageObject",
            url: "https://www.starlighttubes.com/StarlightLogo.png",
          },
        },
        datePublished: articleSchema.datePublished || new Date().toISOString(),
        dateModified: articleSchema.dateModified || new Date().toISOString(),
        image: image,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl,
        },
      };
      addJsonLd("article-schema", articleJsonLd);
    }

    // WebPage Schema for all pages - Enhanced for GEO
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: description,
      url: fullUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Starlight Tubes",
        url: "https://www.starlighttubes.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Starlight Tubes",
        logo: {
          "@type": "ImageObject",
          url: "https://www.starlighttubes.com/StarlightLogo.png",
        },
      },
      inLanguage: "en-US",
      // GEO: Add related entities for AI context
      ...(relatedEntities && {
        mentions: relatedEntities.map((entity) => ({
          "@type": "Thing",
          name: entity,
        })),
      }),
      // GEO: Entity type for AI classification
      ...(entityType && {
        mainEntity: {
          "@type": entityType,
          name: title,
        },
      }),
    };
    addJsonLd("webpage-schema", webPageSchema);

    // AEO: Speakable Schema for Voice Search Optimization
    if (speakableContent) {
      const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: speakableContent.cssSelectors || [
            ".speakable-headline",
            ".speakable-summary",
          ],
        },
        url: fullUrl,
      };
      addJsonLd("speakable-schema", speakableSchema);

      // Add speakable meta tags for voice assistants
      updateMetaTag("speakable:headline", speakableContent.headline);
      updateMetaTag("speakable:summary", speakableContent.summary);
    }

    // AEO: HowTo Schema for Featured Snippets & Voice Search
    if (howToSchema) {
      const howToJsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howToSchema.name,
        description: howToSchema.description,
        image: howToSchema.image || image,
        totalTime: howToSchema.totalTime || "PT30M",
        step: howToSchema.steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          ...(step.image && { image: step.image }),
        })),
      };
      addJsonLd("howto-schema", howToJsonLd);
    }

    // AEO: Q&A Schema for Answer Engines
    if (qaSchema && qaSchema.length > 0) {
      const qaJsonLd = {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: qaSchema.map((qa) => ({
          "@type": "Question",
          name: qa.question,
          answerCount: 1,
          dateCreated: qa.dateCreated || new Date().toISOString(),
          acceptedAnswer: {
            "@type": "Answer",
            text: qa.answer,
            dateCreated: qa.dateCreated || new Date().toISOString(),
            upvoteCount: qa.upvoteCount || 50,
            author: {
              "@type": "Organization",
              name: "Starlight Tubes",
            },
          },
        })),
      };
      addJsonLd("qa-schema", qaJsonLd);
    }

    // GEO: Service Schema for AI-powered Search
    if (serviceSchema) {
      const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceSchema.name,
        description: serviceSchema.description,
        provider: {
          "@type": "Organization",
          name: serviceSchema.provider || "Starlight Tubes",
          url: "https://www.starlighttubes.com",
        },
        serviceType: serviceSchema.serviceType || "Manufacturing",
        areaServed: serviceSchema.areaServed?.map((area) => ({
          "@type": "Country",
          name: area,
        })) || [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Steel Products Catalog",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Steel Pipe Manufacturing",
              },
            },
          ],
        },
      };
      addJsonLd("service-schema", serviceJsonLd);
    }

    // AEO: Featured Snippet Optimization Meta Tags
    if (featuredSnippet) {
      // Add specific meta tags for featured snippets
      updateMetaTag("snippet:type", featuredSnippet.type);
      updateMetaTag("snippet:content", featuredSnippet.content);

      // For list snippets, create ItemList schema
      if (featuredSnippet.type === "list" && featuredSnippet.listItems) {
        const itemListSchema = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: featuredSnippet.listItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item,
          })),
        };
        addJsonLd("itemlist-schema", itemListSchema);
      }
    }

    // GEO: Knowledge Graph Enhancement
    const knowledgeGraphSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.starlighttubes.com/#organization",
      name: "Starlight Tubes",
      alternateName: [
        "Starlight Tubes India",
        "Starlight Steel Pipes",
        "Starlight Tubes Manufacturer",
      ],
      description:
        "Leading steel pipe manufacturer and exporter in India specializing in stainless steel, carbon steel, nickel alloy pipes and industrial fittings.",
      url: "https://www.starlighttubes.com",
      logo: "https://www.starlighttubes.com/StarlightLogo.png",
      foundingDate: "2020",
      foundingLocation: {
        "@type": "Place",
        name: "Mumbai, India",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Steel Pipe Manufacturing",
        "Stainless Steel Pipes",
        "Carbon Steel Pipes",
        "Nickel Alloy Pipes",
        "Inconel Pipes",
        "Pipe Fittings",
        "Industrial Piping",
        "Oil & Gas Piping Solutions",
        "Petrochemical Piping",
        "Marine Grade Steel",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "ISO 9001:2015",
          name: "Quality Management System Certification",
        },
      ],
      slogan: "Your Trusted Steel Pipe Manufacturer & Global Exporter",
    };
    addJsonLd("knowledge-graph-schema", knowledgeGraphSchema);

    // Cleanup function
    return () => {
      removeJsonLd("breadcrumb-schema");
      removeJsonLd("product-schema");
      removeJsonLd("faq-schema");
      removeJsonLd("article-schema");
      removeJsonLd("webpage-schema");
      removeJsonLd("speakable-schema");
      removeJsonLd("howto-schema");
      removeJsonLd("qa-schema");
      removeJsonLd("service-schema");
      removeJsonLd("itemlist-schema");
      removeJsonLd("knowledge-graph-schema");
    };
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    noIndex,
    author,
    publishedTime,
    modifiedTime,
    breadcrumbs,
    productSchema,
    faqSchema,
    articleSchema,
    speakableContent,
    howToSchema,
    qaSchema,
    serviceSchema,
    featuredSnippet,
    entityType,
    relatedEntities,
    fullUrl,
    location.pathname,
  ]);
};

export default useSEO;
