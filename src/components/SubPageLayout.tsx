import subPagesData from "@/data/subPagesData.json";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "react-router";
import { CardHoverEffectDemo } from "./main components/CoatingImgCard";
import Footer from "./main components/Fotter";
import StatsGrid from "./main components/HomeStats";
import { NavbarDemo } from "./main components/Navbar";
import { PageHero } from "./main components/PageHero";
import { BottomCTA } from "./sub components/BottomCTA";
import { CommonCTA } from "./sub components/CommonCTA";

export interface SubPageData {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    url: string;
    breadcrumbs: Array<{ name: string; url: string }>;
    productSchema: {
      name: string;
      description: string;
      category?: string;
      material?: string;
      brand?: string;
      image?: string;
      offers?: {
        priceCurrency?: string;
        lowPrice?: string;
        highPrice?: string;
        availability?: string;
      };
    };
    speakableContent?: {
      headline: string;
      summary: string;
    };
    entityType?: string;
    relatedEntities?: string[];
    faqSchema?: Array<{ question: string; answer: string }>;
    featuredSnippet?: {
      type: "paragraph" | "list" | "table";
      content: string;
      listItems?: string[];
    };
    qaSchema?: Array<{
      question: string;
      answer: string;
      upvoteCount?: number;
    }>;
    serviceSchema?: {
      name: string;
      description: string;
      provider?: string;
      serviceType?: string;
      areaServed?: string[];
    };
    howToSchema?: {
      name: string;
      description: string;
      steps: Array<{ name: string; text: string }>;
    };
    articleSchema?: {
      headline: string;
      description: string;
      datePublished: string;
      dateModified?: string;
      author?: string;
    };
  };
  pageHero: {
    title: string;
    subtitle: string;
  };
  sectionHeader: {
    badgeColor: string;
    heading: string;
    description: string;
  };
  ctaData: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    specifications: Array<{ label: string; value: string }>;
  };
  solutionsSection: {
    badgeColor: string;
    heading: string;
    description: string;
  };
  projects: Array<{ title: string; img: string }>;
  bottomCtaData: {
    title: string;
    description: string;
    features: string[];
  };
}

// Dynamic Tailwind badge color classes mapping
// These are defined explicitly so Tailwind can detect them during build
const badgeColorMap: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    darkBg?: string;
    darkBorder?: string;
  }
> = {
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    text: "text-teal-600 dark:text-teal-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-600 dark:text-amber-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    text: "text-orange-600 dark:text-orange-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    text: "text-green-600 dark:text-green-400",
    darkBg: "dark:bg-green-500/20",
    darkBorder: "dark:border-green-500/30",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
  },
};

interface SubPageLayoutProps {
  data: SubPageData;
}

// Build category groups from breadcrumbs for related products
const categoryGroups = new Map<string, SubPageData[]>();
for (const page of subPagesData as SubPageData[]) {
  const crumbs = page.seo.breadcrumbs;
  if (crumbs.length >= 2) {
    const parent = crumbs[1].name;
    if (!categoryGroups.has(parent)) {
      categoryGroups.set(parent, []);
    }
    categoryGroups.get(parent)!.push(page);
  }
}

function getRelatedProducts(
  currentSlug: string,
  currentData: SubPageData,
): SubPageData[] {
  const crumbs = currentData.seo.breadcrumbs;
  if (crumbs.length < 2) return [];
  const parent = crumbs[1].name;
  const siblings = categoryGroups.get(parent) || [];
  // Filter out current product, take up to 4
  const related = siblings.filter((p) => p.slug !== currentSlug);
  // Shuffle deterministically based on slug to vary per page
  const hash = currentSlug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  related.sort((a, b) => {
    const ha = a.slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const hb = b.slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return ((ha + hash) % 97) - ((hb + hash) % 97);
  });
  return related.slice(0, 4);
}

const SubPageLayout = ({ data }: SubPageLayoutProps) => {
  const {
    seo,
    pageHero,
    sectionHeader,
    ctaData,
    solutionsSection,
    projects,
    bottomCtaData,
  } = data;

  useSEO({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    url: seo.url,
    breadcrumbs: seo.breadcrumbs,
    productSchema: seo.productSchema,
    speakableContent: seo.speakableContent,
    entityType: seo.entityType as
      | "Product"
      | "Service"
      | "Organization"
      | "Place"
      | undefined,
    relatedEntities: seo.relatedEntities,
    faqSchema: seo.faqSchema,
    featuredSnippet: seo.featuredSnippet,
    qaSchema: seo.qaSchema,
    serviceSchema: seo.serviceSchema,
    howToSchema: seo.howToSchema,
    articleSchema: seo.articleSchema,
  });

  const sectionBadge =
    badgeColorMap[sectionHeader.badgeColor] || badgeColorMap.teal;
  const solutionsBadge =
    badgeColorMap[solutionsSection.badgeColor] || badgeColorMap.green;

  const relatedProducts = getRelatedProducts(data.slug, data);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title={pageHero.title}
            subtitle={pageHero.subtitle}
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div
            className={`inline-block px-4 py-2 mb-6 rounded-full ${sectionBadge.bg} ${sectionBadge.border} ${sectionBadge.darkBg || ""} ${sectionBadge.darkBorder || ""}`}
          >
            <span className={`${sectionBadge.text} text-sm font-semibold`}>
              Product Overview
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {sectionHeader.heading}
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            {sectionHeader.description}
          </p>
        </div>

        {/* Common CTA Section */}
        <div className="w-full h-fit flex justify-center mb-16 px-4">
          <CommonCTA
            title={ctaData.title}
            paragraph1={ctaData.paragraph1}
            paragraph2={ctaData.paragraph2}
            specifications={ctaData.specifications}
          />
        </div>

        {/* Exporter Section */}
        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div
              className={`inline-block px-4 py-2 mb-6 rounded-full ${solutionsBadge.bg} ${solutionsBadge.border} ${solutionsBadge.darkBg || ""} ${solutionsBadge.darkBorder || ""}`}
            >
              <span className={`${solutionsBadge.text} text-sm font-semibold`}>
                Our Solutions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              {solutionsSection.heading}
            </h2>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              {solutionsSection.description}
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

        {/* Bottom CTA Section */}
        <BottomCTA
          title={bottomCtaData.title}
          description={bottomCtaData.description}
          features={bottomCtaData.features}
        />

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="w-full max-w-6xl mx-auto mt-20 mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/${product.slug}`}
                  className="group block rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 transition-all duration-300 hover:shadow-lg hover:border-teal-500/50 hover:-translate-y-1"
                >
                  {product.projects?.[0]?.img && (
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
                      <img
                        src={product.projects[0].img}
                        alt={product.pageHero.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {product.pageHero.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {product.pageHero.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Stats Grid Section */}
        <div>
          <StatsGrid />
        </div>
        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default SubPageLayout;
