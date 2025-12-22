import { Link, useLocation } from "react-router";
import { Meteors } from "../ui/meteors";

interface SidebarLink {
  name: string;
  link: string;
}

interface ProductSidebarProps {
  title: string;
  links: SidebarLink[];
  accentColor?: string;
}

// Predefined link groups for different categories
export const stainlessSteelLinks: SidebarLink[] = [
  { name: "Stainless Steel Tube", link: "/stainless-steel-tube" },
  { name: "Stainless Steel Pipe", link: "/stainless-steel-pipe" },
  { name: "Stainless Steel Sheet", link: "/stainless-steel-sheet" },
  { name: "Stainless Steel Round Bar", link: "/stainless-steel-round-bar" },
  { name: "Stainless Steel Fasteners", link: "/stainless-steel-fasteners" },
  { name: "Stainless Steel Wire", link: "/stainless-steel-wire" },
  { name: "304 Stainless Steel Pipe", link: "/stainless-steel-304-pipe" },
  { name: "304 Stainless Steel Plate", link: "/stainless-steel-304-plate" },
  { name: "316 Stainless Steel Tube", link: "/stainless-steel-316-tube" },
  { name: "316 Stainless Steel Plate", link: "/stainless-steel-316-plate" },
  { name: "316L Stainless Steel Pipe", link: "/stainless-steel-316l-pipe" },
];

export const nickelAlloyLinks: SidebarLink[] = [
  { name: "Nickel Pipe", link: "/nickel-pipe" },
  { name: "Nickel Sheet", link: "/nickel-sheet" },
  { name: "Inconel Pipe", link: "/inconel-pipe" },
  { name: "Inconel Plate", link: "/inconel-plate" },
  { name: "Inconel Round Bar", link: "/inconel-round-bar" },
  { name: "Inconel Bolts", link: "/inconel-bolts" },
  { name: "Inconel 600 Plate", link: "/inconel-600-plate" },
  { name: "Inconel 600 Pipe", link: "/inconel-600-pipe" },
  { name: "Inconel 625 Tubing", link: "/inconel-625-tubing" },
  { name: "Inconel 625 Pipe", link: "/inconel-625-pipe" },
  { name: "Inconel 625 Plate", link: "/inconel-625-plate" },
];

export const carbonSteelLinks: SidebarLink[] = [
  { name: "Carbon Steel Pipe", link: "/carbon-steel-pipe" },
  { name: "ASTM A106 Pipe", link: "/astm-a106-pipe" },
  { name: "ASTM A53 Pipe", link: "/astm-a53-pipe" },
  { name: "ASTM A333 Pipe", link: "/astm-a333-pipe" },
  { name: "API 5L Grade B Pipe", link: "/api-5l-grade-b-pipe" },
  { name: "API 5L X65 Pipe", link: "/api-5l-x65-pipe" },
  { name: "API 5L X52 Pipe", link: "/api-5l-x52-pipe" },
  { name: "API 5L X42 Pipe", link: "/api-5l-x42-pipe" },
  { name: "A671 Pipe", link: "/a671-pipe" },
  { name: "A672 Pipe", link: "/a672-pipe" },
  { name: "Welded Steel Pipe", link: "/welded-steel-pipe" },
];

export const copperLinks: SidebarLink[] = [
  { name: "Copper Pipe", link: "/copper-pipe" },
  { name: "Copper Tube", link: "/copper-tube" },
  { name: "Copper Sheet", link: "/copper-sheet" },
  { name: "Copper Plate", link: "/copper-plate" },
  { name: "Copper Round Bar", link: "/copper-round-bar" },
  { name: "Copper Wire", link: "/copper-wire" },
  { name: "Copper Fittings", link: "/copper-fittings" },
  { name: "Copper Nickel Pipe", link: "/copper-nickel-pipe" },
  { name: "Copper Nickel Tube", link: "/copper-nickel-tube" },
  { name: "Cupro Nickel 90/10", link: "/cupro-nickel-90-10" },
  { name: "Cupro Nickel 70/30", link: "/cupro-nickel-70-30" },
];

export const aluminiumLinks: SidebarLink[] = [
  { name: "Aluminium Pipe", link: "/aluminium-pipe" },
  { name: "Aluminium Tube", link: "/aluminium-tube" },
  { name: "Aluminium Sheet", link: "/aluminium-sheet" },
  { name: "Aluminium Plate", link: "/aluminium-plate" },
  { name: "Aluminium Round Bar", link: "/aluminium-round-bar" },
  { name: "Aluminium Wire", link: "/aluminium-wire" },
  { name: "Aluminium Coil", link: "/aluminium-coil" },
  { name: "Aluminium 6061", link: "/aluminium-6061" },
  { name: "Aluminium 6063", link: "/aluminium-6063" },
  { name: "Aluminium 5052", link: "/aluminium-5052" },
  { name: "Aluminium 7075", link: "/aluminium-7075" },
];

export const fittingsLinks: SidebarLink[] = [
  { name: "Pipe Fittings", link: "/pipe-fittings" },
  { name: "Butt Weld Fittings", link: "/butt-weld-fittings" },
  { name: "Socket Weld Fittings", link: "/socket-weld-fittings" },
  { name: "Threaded Fittings", link: "/threaded-fittings" },
  { name: "Flanges", link: "/flanges" },
  { name: "Elbow Fittings", link: "/elbow-fittings" },
  { name: "Tee Fittings", link: "/tee-fittings" },
  { name: "Reducer Fittings", link: "/reducer-fittings" },
  { name: "Cap Fittings", link: "/cap-fittings" },
  { name: "Coupling Fittings", link: "/coupling-fittings" },
  { name: "Union Fittings", link: "/union-fittings" },
];

export const ProductSidebar = ({
  title,
  links,
  accentColor = "teal",
}: ProductSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const colorClasses: Record<
    string,
    {
      bg: string;
      border: string;
      text: string;
      activeBg: string;
      hoverBg: string;
      gradientFrom: string;
      gradientTo: string;
    }
  > = {
    teal: {
      bg: "bg-teal-500/10",
      border: "border-teal-500/30",
      text: "text-teal-400",
      activeBg: "bg-teal-500 text-white",
      hoverBg: "hover:bg-teal-500/20",
      gradientFrom: "from-teal-500",
      gradientTo: "to-blue-500",
    },
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      text: "text-purple-400",
      activeBg: "bg-purple-500 text-white",
      hoverBg: "hover:bg-purple-500/20",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    },
    orange: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      text: "text-orange-400",
      activeBg: "bg-orange-500 text-white",
      hoverBg: "hover:bg-orange-500/20",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      text: "text-amber-400",
      activeBg: "bg-amber-500 text-white",
      hoverBg: "hover:bg-amber-500/20",
      gradientFrom: "from-amber-500",
      gradientTo: "to-yellow-500",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      activeBg: "bg-cyan-500 text-white",
      hoverBg: "hover:bg-cyan-500/20",
      gradientFrom: "from-cyan-500",
      gradientTo: "to-blue-500",
    },
    green: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-400",
      activeBg: "bg-green-500 text-white",
      hoverBg: "hover:bg-green-500/20",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.teal;

  return (
    <div className="hidden lg:flex w-72 shrink-0 justify-center items-start">
      <div className="w-full">
        {/* Outer glow effect container */}
        <div className="relative">
          {/* Gradient blur background - matching CTA style */}
          <div
            className={`absolute inset-0 h-full w-full scale-[0.85] transform rounded-full bg-linear-to-r ${colors.gradientFrom} ${colors.gradientTo} blur-3xl opacity-60`}
          />

          {/* Main sidebar container */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl">
            {/* Header with accent */}
            <div
              className={`px-5 py-4 border-b border-gray-800 bg-gray-900/50`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-1.5 h-8 rounded-full bg-linear-to-b ${colors.gradientFrom} ${colors.gradientTo}`}
                />
                <h3 className={`font-bold text-lg ${colors.text}`}>{title}</h3>
              </div>
            </div>

            {/* Links with scroll */}
            <div className="p-3 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <ul className="space-y-1">
                {links.map((item, index) => {
                  const isActive = currentPath === item.link;
                  return (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                          isActive
                            ? `${colors.activeBg} shadow-lg`
                            : `text-gray-300 hover:text-white ${colors.hoverBg}`
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200 ${
                            isActive
                              ? "bg-white"
                              : `bg-gray-600 group-hover:${colors.text.replace(
                                  "text-",
                                  "bg-"
                                )}`
                          }`}
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Footer CTA - matching Meteors CTA style */}
            <div className="p-4 border-t border-gray-800">
              <Link
                to="/contact"
                className={`relative block w-full text-center px-4 py-3 rounded-xl font-semibold text-white bg-linear-to-r ${colors.gradientFrom} ${colors.gradientTo} hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group`}
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>

            {/* Meteors effect */}
            <Meteors number={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
