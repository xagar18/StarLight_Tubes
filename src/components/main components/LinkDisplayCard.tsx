import { Link } from "react-router";
import { Meteors } from "../ui/meteors";

export function MeteorsDemo({
  title,
  items,
  links,
}: {
  title?: string;
  items?: string[];
  links?: string[];
}) {
  return (
    <div className="w-full md:w-auto flex justify-center">
      <div className="relative w-[90%] max-w-85 md:w-80 lg:w-96">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-start overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-3 md:px-4 py-5 md:py-6 shadow-xl">
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {title || "Stainless Steel"}
          </h1>

          <ul className="relative z-50 mb-2 text-base font-normal text-slate-500 w-full">
            {items &&
              items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400 ml-4 md:ml-8"></span>
                  <Link
                    to={links?.[index] || "#"}
                    className="text-sm md:text-base text-white hover:text-teal-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
