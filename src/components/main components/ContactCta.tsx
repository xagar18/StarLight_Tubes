import { Meteors } from "../ui/meteors";

export function ContactCtaParent() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            Head Office
          </h1>

          <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>Address:</strong> Building No. 121/123, Shop No. 1,
                Nageshwar Bhuvan, 2nd Kumbharwada Lane, Mumbai, Maharashtra –
                400004, India
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>Phone:</strong> +91 98922 33118
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>Email:</strong> sales@starlighttubes.com
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>GSTIN:</strong> 27DMZPA1125E1Z6
              </span>
            </li>
          </ul>
          <hr className="relative z-50 border-gray-700 my-4" />
          <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
            Business Hours
          </h2>
          <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>Monday - Saturday - 10am to 7pm, Sunday - Closed</span>
            </li>
          </ul>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}
