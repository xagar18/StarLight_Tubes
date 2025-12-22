export default function StatsGrid() {
  const stats = [
    { value: "100,000+", label: "Clients worldwide" },
    { value: "ISO ", label: "Certified quality standards" },
    { value: "99.9%", label: "On‑time delivery performance" },
    { value: "5+ Years", label: "Proven industry expertise" },
  ];

  return (
    <div className=" bg-slate-900 p-8 flex items-center justify-center border-t border-slate-700/50 flex-col max-w-7xl mx-auto my-20 rounded-2xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">
          Trusted by 100,000+ clients worldwide
        </h1>
        <p className="text-slate-400 text-lg">
          Delivering certified quality tubes with ISO standards —
          powering industries with reliability and precision.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-colors duration-300"
          >
            <div className="text-4xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
