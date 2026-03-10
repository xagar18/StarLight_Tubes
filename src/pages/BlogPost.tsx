import { useSEO } from "@/hooks/use-seo";
import { Link, Navigate, useParams } from "react-router";
import Footer from "../components/main components/Fotter";
import { NavbarDemo } from "../components/main components/Navbar";
import blogData from "../data/blogData.json";

/** Renders markdown-like content: **bold**, • bullets, | tables, and newlines */
function RenderContent({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  const formatLine = (line: string) => {
    // Split by **bold** markers
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const flushTable = () => {
    if (tableRows.length < 2) return;
    const headers = tableRows[0];
    // skip separator row (index 1)
    const dataRows = tableRows.slice(2);
    elements.push(
      <div key={`tbl-${elements.length}`} className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-semibold border border-gray-700"
                >
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-4 py-3 border border-gray-200 text-gray-700"
                  >
                    {formatLine(cell.trim())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
    tableRows = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table row detection
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      if (!inTable) inTable = true;
      const cells = line.split("|").filter((c) => c.trim() !== "");
      tableRows.push(cells);
      continue;
    }

    // End of table
    if (inTable) {
      inTable = false;
      flushTable();
    }

    const trimmed = line.trim();

    // Empty line = paragraph break
    if (trimmed === "") {
      elements.push(<div key={`br-${i}`} className="h-3" />);
      continue;
    }

    // Bullet points (• or -)
    if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
      const bulletText = trimmed.startsWith("•")
        ? trimmed.slice(1).trim()
        : trimmed.slice(2).trim();
      elements.push(
        <div key={`li-${i}`} className="flex gap-3 py-1 pl-1">
          <span className="text-amber-500 mt-0.5 shrink-0">•</span>
          <span>{formatLine(bulletText)}</span>
        </div>,
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${i}`} className="leading-relaxed">
        {formatLine(trimmed)}
      </p>,
    );
  }

  // Flush remaining table
  if (inTable) flushTable();

  return <>{elements}</>;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogData
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough same-category posts, fill from other categories
  if (relatedPosts.length < 3) {
    const remaining = blogData
      .filter(
        (p) =>
          p.slug !== post.slug && !relatedPosts.some((r) => r.slug === p.slug),
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...remaining);
  }

  useSEO({
    title: `${post.title} | Starlight Tubes Blog`,
    description: post.description,
    keywords: post.keywords,
    url: `https://www.starlighttubes.com/blog/${post.slug}`,
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Blog", url: "https://www.starlighttubes.com/blog" },
      {
        name: post.title,
        url: `https://www.starlighttubes.com/blog/${post.slug}`,
      },
    ],
    articleSchema: {
      headline: post.title,
      description: post.description,
      author: post.author,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
    },
    faqSchema: post.faqSchema,
    speakableContent: {
      headline: post.title,
      summary: post.description,
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <NavbarDemo />

      {/* Hero */}
      <div className="relative pt-28 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-amber-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-amber-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-500 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-200">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-6">
            {post.description}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-amber-700 text-xs font-bold">ST</span>
              </div>
              {post.author}
            </span>
            <span className="text-gray-300">•</span>
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Two-column layout: TOC sidebar + content */}
          <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-10">
            {/* Sticky Table of Contents */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Contents
                </h2>
                <ul className="space-y-2.5">
                  {post.sections.map((section, idx) => (
                    <li key={idx}>
                      <a
                        href={`#section-${idx}`}
                        className="text-gray-500 hover:text-amber-600 transition-colors text-sm leading-snug block"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  {post.faqSchema.length > 0 && (
                    <li>
                      <a
                        href="#faq"
                        className="text-gray-500 hover:text-amber-600 transition-colors text-sm"
                      >
                        FAQ
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </aside>

            {/* Mobile TOC */}
            <nav className="lg:hidden bg-gray-50 rounded-xl p-5 mb-10 border border-gray-200">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Table of Contents
              </h2>
              <ul className="space-y-2 columns-2">
                {post.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="text-amber-600 hover:text-amber-700 text-sm"
                    >
                      {idx + 1}. {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Main content */}
            <div>
              {/* Content sections */}
              {post.sections.map((section, idx) => (
                <section
                  key={idx}
                  id={`section-${idx}`}
                  className="mb-12 scroll-mt-28"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                    <span className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
                    {section.heading}
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-1">
                    <RenderContent text={section.content} />
                  </div>
                </section>
              ))}

              {/* FAQ Section */}
              {post.faqSchema.length > 0 && (
                <section id="faq" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {post.faqSchema.map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex gap-3">
                          <span className="text-amber-600 shrink-0">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-7">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Products */}
              {post.relatedProducts && post.relatedProducts.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-amber-500 rounded-full shrink-0" />
                    Related Products
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {post.relatedProducts.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/${product.slug}`}
                        className="px-5 py-2.5 bg-amber-50 text-amber-700 rounded-lg font-medium hover:bg-amber-100 transition-colors border border-amber-200"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <section className="relative rounded-2xl overflow-hidden">
                <div className="relative bg-gray-900 rounded-2xl p-8 sm:p-10 text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Get Factory-Direct Prices Today
                  </h2>
                  <p className="text-gray-400 mb-2 max-w-lg mx-auto">
                    We manufacture and export these exact products — ISO 9001
                    certified, with mill test certificates and competitive
                    bulk pricing.
                  </p>
                  <p className="text-amber-400 text-sm font-medium mb-6">
                    ✓ Same-day quote &nbsp;&nbsp; ✓ Custom sizes &nbsp;&nbsp; ✓ 60+ countries served
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/contact"
                      className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
                    >
                      Request a Quote
                    </Link>
                    <Link
                      to="/product"
                      className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                    >
                      View Full Catalog
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {related.category}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 mt-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="text-amber-600 font-semibold hover:text-amber-700 transition-colors inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              View All Articles
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
