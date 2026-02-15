import { useSEO } from "@/hooks/use-seo";
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
      areaServed?: string | string[];
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {sectionHeader.heading}
          </h1>
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              {solutionsSection.heading}
            </h1>

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
