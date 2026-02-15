import type { SubPageData } from "@/components/SubPageLayout";
import SubPageLayout from "@/components/SubPageLayout";
import subPagesData from "@/data/subPagesData.json";
import { lazy, Suspense } from "react";
import { useParams } from "react-router";

// Lazy load PageNotFound so it's only loaded when needed
const PageNotFound = lazy(() => import("./PageNotFound"));

// Build a lookup map from slug to page data for O(1) access
const pageDataMap = new Map<string, SubPageData>();
for (const page of subPagesData as SubPageData[]) {
  pageDataMap.set(page.slug, page);
}

const DynamicSubPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <Suspense fallback={null}>
        <PageNotFound />
      </Suspense>
    );
  }

  const pageData = pageDataMap.get(slug);

  if (!pageData) {
    return (
      <Suspense fallback={null}>
        <PageNotFound />
      </Suspense>
    );
  }

  return <SubPageLayout key={slug} data={pageData} />;
};

export default DynamicSubPage;
