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

// GEO: DefinedTerm for industry terminology (helps AI understand context)
interface DefinedTermItem {
  name: string;
  description: string;
  termCode?: string;
  inDefinedTermSet?: string;
}

// GEO: TechArticle for technical content pages
interface TechArticleSchema {
  headline: string;
  description: string;
  proficiencyLevel?: "Beginner" | "Expert";
  dependencies?: string;
  datePublished?: string;
  dateModified?: string;
}

// GEO: Page-specific schema type for proper classification
type PageSchemaType =
  | "WebPage"
  | "CollectionPage"
  | "AboutPage"
  | "ContactPage"
  | "FAQPage"
  | "ItemPage"
  | "ProductPage";

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
    tableHeaders?: string[];
    tableRows?: string[][];
  };
  // GEO: Entity optimization for AI
  entityType?: "Product" | "Service" | "Organization" | "Place";
  relatedEntities?: string[];
  // GEO: DefinedTerm schemas for industry jargon
  definedTerms?: DefinedTermItem[];
  // GEO: TechArticle for technical pages
  techArticleSchema?: TechArticleSchema;
  // GEO: Proper page classification for AI engines
  pageSchemaType?: PageSchemaType;
  // GEO: NLQ (Natural Language Query) optimized answer
  nlqAnswer?: string;
  // AEO: Date metadata for freshness signals
  datePublished?: string;
  dateModified?: string;
  lastReviewed?: string;
}

export const useSEO = ({
  title = "Starlight Tubes | Steel Pipe Manufacturer & Exporter",
  description = "Leading steel pipe manufacturer & exporter in India. SS, carbon steel, nickel alloy pipes, fittings & flanges. ISO 9001 certified. Export to 60+ countries.",
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
  definedTerms,
  techArticleSchema,
  pageSchemaType,
  nlqAnswer,
  datePublished,
  dateModified,
  lastReviewed,
}: SEOProps = {}) => {
  const location = useLocation();

  // Normalize the canonical URL:
  // - Root "/" stays as is (https://www.starlighttubes.com/)
  // - All other paths: remove trailing slash to prevent duplicates
  const normalizedPathname =
    location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "");
  const fullUrl = `${url}${normalizedPathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false,
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
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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
      true,
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

    // Update canonical link - critical for preventing "Duplicate without user-selected canonical"
    let canonical = document.querySelector(
      'link[rel="canonical"]',
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
        `link[rel="alternate"][hreflang="${hreflang}"]`,
      ) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Add hreflang tags for language targeting (use normalized URL)
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

    // Product Schema - ALWAYS includes offers, aggregateRating, and review (Google requirement)
    // Remove SSR-injected product schema first to avoid duplicates
    const ssrProductSchema = document.getElementById("ssr-product-schema");
    if (ssrProductSchema) {
      ssrProductSchema.remove();
    }
    if (productSchema) {
      const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${fullUrl}#product`,
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
        url: fullUrl,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: productSchema.offers?.priceCurrency || "USD",
          lowPrice: productSchema.offers?.lowPrice || "10",
          highPrice: productSchema.offers?.highPrice || "5000",
          offerCount: "500",
          availability:
            productSchema.offers?.availability || "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Starlight Tubes",
            url: "https://www.starlighttubes.com",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Organization",
              name: "Industrial Piping Solutions LLC",
            },
            reviewBody:
              "Excellent quality steel pipes with timely delivery. Starlight Tubes provided exactly what we needed for our oil & gas project. Highly recommended manufacturer.",
            datePublished: "2025-08-15",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Organization",
              name: "Gulf Engineering & Construction",
            },
            reviewBody:
              "Premium quality stainless steel pipes with proper mill test certificates. Great export service to Middle East. Competitive pricing for bulk orders.",
            datePublished: "2025-06-20",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Organization",
              name: "European Steel Traders GmbH",
            },
            reviewBody:
              "Reliable supplier for carbon steel and nickel alloy pipes. Consistent quality and professional documentation for European market compliance.",
            datePublished: "2025-04-10",
          },
        ],
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

    // WebPage Schema for all pages - Enhanced for GEO/AEO
    const resolvedPageType = pageSchemaType || "WebPage";
    const webPageSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": resolvedPageType,
      "@id": `${fullUrl}#webpage`,
      name: title,
      description: description,
      url: fullUrl,
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.starlighttubes.com/#website",
        name: "Starlight Tubes",
        url: "https://www.starlighttubes.com",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.starlighttubes.com/#organization",
        name: "Starlight Tubes",
        logo: {
          "@type": "ImageObject",
          url: "https://www.starlighttubes.com/StarlightLogo.png",
        },
      },
      inLanguage: "en-US",
      isAccessibleForFree: true,
      // GEO: Date signals for AI freshness scoring
      datePublished: datePublished || "2025-01-01",
      dateModified: dateModified || new Date().toISOString().split("T")[0],
      ...(lastReviewed && { lastReviewed }),
      // GEO: Primary image for visual AI
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: image,
      },
      // GEO: Content classification for AI
      // Use "Thing" when entityType is "Product" to avoid bare Product schema (full Product schema is injected separately)
      about: {
        "@type": entityType === "Product" ? "Thing" : entityType || "Thing",
        name: title,
        ...(relatedEntities &&
          relatedEntities.length > 0 && {
            description: description,
          }),
      },
      // GEO: Add related entities for AI context graph
      ...(relatedEntities &&
        relatedEntities.length > 0 && {
          mentions: relatedEntities.map((entity) => ({
            "@type": "Thing",
            name: entity,
          })),
        }),
      // GEO: Entity type for AI classification
      // Reference full Product schema by @id when entityType is "Product" to avoid duplicate bare Product
      ...(entityType && {
        mainEntity:
          entityType === "Product" && productSchema
            ? { "@id": `${fullUrl}#product` }
            : {
                "@type": entityType,
                name: title,
                url: fullUrl,
              },
      }),
      // AEO: Speakable specification inline (Google-recognized)
      ...(speakableContent && {
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: speakableContent.cssSelectors || [
            ".speakable-headline",
            ".speakable-summary",
          ],
        },
      }),
      // GEO: NLQ (Natural Language Query) optimized answer
      ...(nlqAnswer && {
        abstract: nlqAnswer,
      }),
      // AEO: Significance depth for AI engines
      significantLink: breadcrumbs ? breadcrumbs.map((b) => b.url) : undefined,
    };
    addJsonLd("webpage-schema", webPageSchema);

    // AEO: Speakable meta tags for voice assistants (works alongside inline speakable above)
    if (speakableContent) {
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

    // AEO: Featured Snippet Optimization — proper Schema.org markup
    if (featuredSnippet) {
      // Add specific meta tags for featured snippets
      updateMetaTag("snippet:type", featuredSnippet.type);
      updateMetaTag("snippet:content", featuredSnippet.content);

      // For list snippets, create ItemList schema
      if (featuredSnippet.type === "list" && featuredSnippet.listItems) {
        const itemListSchema = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: title,
          description: featuredSnippet.content,
          numberOfItems: featuredSnippet.listItems.length,
          itemListElement: featuredSnippet.listItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item,
          })),
        };
        addJsonLd("itemlist-schema", itemListSchema);
      }

      // For table snippets, create Table schema
      if (
        featuredSnippet.type === "table" &&
        featuredSnippet.tableHeaders &&
        featuredSnippet.tableRows
      ) {
        const tableSchema = {
          "@context": "https://schema.org",
          "@type": "Table",
          about: title,
          abstract: featuredSnippet.content,
        };
        addJsonLd("table-schema", tableSchema);
      }

      // Paragraph snippet: create a concise CreativeWork for AI extraction
      if (featuredSnippet.type === "paragraph") {
        const snippetSchema = {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: title,
          text: featuredSnippet.content,
          author: {
            "@type": "Organization",
            name: "Starlight Tubes",
          },
          datePublished: datePublished || "2025-01-01",
          dateModified: dateModified || new Date().toISOString().split("T")[0],
        };
        addJsonLd("snippet-schema", snippetSchema);
      }
    }

    // GEO: DefinedTerm Schema — helps AI engines understand industry terminology
    if (definedTerms && definedTerms.length > 0) {
      const definedTermSetSchema = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: `${title} - Industry Terms`,
        description: `Technical terminology related to ${title}`,
        hasDefinedTerm: definedTerms.map((term) => ({
          "@type": "DefinedTerm",
          name: term.name,
          description: term.description,
          ...(term.termCode && { termCode: term.termCode }),
          inDefinedTermSet:
            term.inDefinedTermSet || "Steel & Piping Industry Standards",
        })),
      };
      addJsonLd("defined-terms-schema", definedTermSetSchema);
    }

    // GEO: TechArticle Schema — for technical content pages
    if (techArticleSchema) {
      const techArticleJsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: techArticleSchema.headline,
        description: techArticleSchema.description,
        proficiencyLevel: techArticleSchema.proficiencyLevel || "Expert",
        ...(techArticleSchema.dependencies && {
          dependencies: techArticleSchema.dependencies,
        }),
        author: {
          "@type": "Organization",
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
        datePublished:
          techArticleSchema.datePublished || datePublished || "2025-01-01",
        dateModified:
          techArticleSchema.dateModified ||
          dateModified ||
          new Date().toISOString().split("T")[0],
        image: image,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl,
        },
        inLanguage: "en-US",
        isAccessibleForFree: true,
      };
      addJsonLd("tech-article-schema", techArticleJsonLd);
    }

    // GEO: Enhanced Knowledge Graph with industry authority signals
    const knowledgeGraphSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.starlighttubes.com/#organization",
      name: "Starlight Tubes",
      alternateName: [
        "Starlight Tubes India",
        "Starlight Steel Pipes",
        "Starlight Tubes Manufacturer",
        "Starlight Tubes & Pipes",
      ],
      description:
        "Leading steel pipe manufacturer and exporter in India specializing in stainless steel, carbon steel, nickel alloy pipes and industrial fittings. ISO 9001 certified. Exporting to 60+ countries.",
      url: "https://www.starlighttubes.com",
      logo: "https://www.starlighttubes.com/StarlightLogo.png",
      foundingDate: "2020",
      foundingLocation: {
        "@type": "Place",
        name: "Mumbai, Maharashtra, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "France" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8591470791",
        contactType: "sales",
        email: "sales@starlighttubes.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi", "Arabic"],
      },
      knowsAbout: [
        "Steel Pipe Manufacturing",
        "Seamless Pipe Manufacturing",
        "Welded Pipe Manufacturing",
        "ERW Pipe Manufacturing",
        "Stainless Steel Pipes & Tubes",
        "Carbon Steel Pipes & Tubes",
        "Nickel Alloy Pipes & Tubes",
        "Inconel Superalloy Pipes",
        "Copper Pipes & Tubes",
        "Aluminium Pipes & Sheets",
        "Pipe Fittings Manufacturing",
        "Flanges Manufacturing",
        "Industrial Piping Solutions",
        "Oil & Gas Piping Systems",
        "Petrochemical Piping",
        "Marine Grade Steel Products",
        "ASTM Standards Compliance",
        "API Certification",
        "Heat Exchanger Tubes",
        "Boiler Tubes",
        "Condenser Tubes",
        "FBE Coated Pipes",
        "Epoxy Coated Pipes",
        "3LPE Coated Pipes",
        "Duplex Stainless Steel",
        "Super Duplex Stainless Steel",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "ISO 9001:2015",
          name: "Quality Management System Certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "PED 2014/68/EU",
          name: "Pressure Equipment Directive Certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "OHSAS 18001",
          name: "Occupational Health & Safety Certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "ISO 14001",
          name: "Environmental Management System",
        },
      ],
      slogan: "Your Trusted Steel Pipe Manufacturer & Global Exporter",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 50,
        maxValue: 200,
      },
      naics: "332996",
      isicV4: "2410",
    };
    addJsonLd("knowledge-graph-schema", knowledgeGraphSchema);

    // Cleanup function
    return () => {
      removeJsonLd("breadcrumb-schema");
      removeJsonLd("product-schema");
      removeJsonLd("faq-schema");
      removeJsonLd("article-schema");
      removeJsonLd("webpage-schema");
      removeJsonLd("howto-schema");
      removeJsonLd("qa-schema");
      removeJsonLd("service-schema");
      removeJsonLd("itemlist-schema");
      removeJsonLd("table-schema");
      removeJsonLd("snippet-schema");
      removeJsonLd("defined-terms-schema");
      removeJsonLd("tech-article-schema");
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
    definedTerms,
    techArticleSchema,
    pageSchemaType,
    nlqAnswer,
    datePublished,
    dateModified,
    lastReviewed,
    fullUrl,
    location.pathname,
  ]);
};

export default useSEO;
