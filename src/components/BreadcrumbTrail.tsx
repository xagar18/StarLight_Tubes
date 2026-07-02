import { Link } from "react-router";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbTrailProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbTrail({
  items,
  className = "",
}: BreadcrumbTrailProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full max-w-7xl mx-auto px-6 ${className}`.trim()}
    >
      <ol className="py-2 flex flex-wrap items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={crumb.url} className="flex items-center gap-1">
              {index > 0 && <span className="mx-1">/</span>}
              {isLast ? (
                <span className="text-gray-900 dark:text-white font-medium">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={new URL(crumb.url).pathname}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
