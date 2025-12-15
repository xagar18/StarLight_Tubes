import { Meteors } from "../ui/meteors";

interface Specification {
  label: string;
  value: string;
}

interface CommonCTAProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  specificationsTitle?: string;
  specifications: Specification[];
}

export function CommonCTA({
  title,
  paragraph1,
  paragraph2,
  specificationsTitle = "Product Specifications",
  specifications,
}: CommonCTAProps) {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="relative w-full max-w-400">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-8 py-10 shadow-xl">
          <h1 className="relative z-50 mb-6 text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="relative z-50 mb-4 text-base leading-relaxed text-slate-300">
            {paragraph1}
          </p>

          <p className="relative z-50 mb-6 text-base leading-relaxed text-slate-300">
            {paragraph2}
          </p>

          <hr className="relative z-50 border-gray-700 my-6 w-full" />

          <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
            {specificationsTitle}
          </h2>
          <ul className="relative z-50 mb-4 text-base font-normal text-slate-400 space-y-3">
            {specifications.map((spec, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
                <span>
                  <strong className="text-slate-300">{spec.label}:</strong>{" "}
                  {spec.value}
                </span>
              </li>
            ))}
          </ul>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}
