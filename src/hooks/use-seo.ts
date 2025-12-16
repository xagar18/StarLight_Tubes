import { useEffect } from "react";
import { useLocation } from "react-router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const useSEO = ({
  title = "Starlight Tubes - Premium Stainless Steel Pipes, Tubes & Nickel Alloys Supplier",
  description = "Leading manufacturer and supplier of stainless steel pipes, tubes, inconel alloys, carbon steel pipes, and nickel alloys. ISO certified with global delivery.",
  keywords = "stainless steel pipe, stainless steel tube, inconel pipe, nickel alloy, carbon steel pipe, 304 stainless steel, 316 stainless steel",
  image = "https://www.starlighttubes.com/StarlightLogo.png",
  url = "https://www.starlighttubes.com",
  type = "website",
}: SEOProps = {}) => {
  const location = useLocation();

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

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", `${url}${location.pathname}`, true);
    updateMetaTag("og:type", type, true);

    // Twitter tags
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", image, true);
    updateMetaTag("twitter:url", `${url}${location.pathname}`, true);

    // Update canonical link
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = `${url}${location.pathname}`;
  }, [title, description, keywords, image, url, type, location.pathname]);
};

export default useSEO;
