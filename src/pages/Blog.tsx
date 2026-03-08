import { useSEO } from "@/hooks/use-seo";
import { Link } from "react-router";
import Footer from "../components/main components/Fotter";
import { NavbarDemo } from "../components/main components/Navbar";
import blogData from "../data/blogData.json";

const Blog = () => {
  useSEO({
    title: "Blog | Starlight Tubes — Steel Pipe Industry Insights",
    description:
      "Expert articles on stainless steel, carbon steel, nickel alloy pipes — material comparisons, specifications, manufacturing processes, and technical guides by Starlight Tubes.",
    keywords:
      "steel pipe blog, stainless steel guide, pipe material comparison, carbon steel specifications, pipe fittings guide, mill test certificate, industrial pipe articles, steel manufacturing blog",
    url: "https://www.starlighttubes.com/blog",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Blog", url: "https://www.starlighttubes.com/blog" },
    ],
    speakableContent: {
      headline: "Starlight Tubes Blog — Steel Pipe Industry Insights",
      summary:
        "Expert articles covering material comparisons, pipe specifications, manufacturing processes, and technical guides for stainless steel, carbon steel, nickel alloy, copper, and aluminium pipes.",
    },
  });

  const categories = [...new Set(blogData.map((post) => post.category))];

  // Featured post (latest by date)
  const sortedPosts = [...blogData].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <NavbarDemo />

      {/* Hero Section */}
      <div className="relative pt-28 pb-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
            Starlight Tubes Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Industry Insights &<br />
            Technical Guides
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Expert articles on pipe materials, specifications, and manufacturing
            — helping engineers and procurement professionals make informed
            decisions.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-gray-200"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Link
          to={`/blog/${featuredPost.slug}`}
          className="group block relative rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition-all duration-500"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                loading="eager"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium border border-amber-200">
                  Featured
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-gray-400 text-xs">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                {featuredPost.description}
              </p>
              <div className="flex items-center justify-between">
                <time
                  dateTime={featuredPost.datePublished}
                  className="text-gray-400 text-sm"
                >
                  {new Date(featuredPost.datePublished).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                </time>
                <span className="text-amber-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Article
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* All Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <time dateTime={post.datePublished} className="text-gray-600">
                    {new Date(post.datePublished).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-amber-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 blur-3xl opacity-15" />
          <div className="relative bg-gray-900 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need the Right Pipe Material?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our technical team can help you select the right material, grade,
              and specification for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/product"
                className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
