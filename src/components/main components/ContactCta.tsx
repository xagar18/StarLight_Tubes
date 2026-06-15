import { Meteors } from "../ui/meteors";
import { Mail, Linkedin } from "lucide-react";


export function ContactCtaParent() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-linear-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
            Shop & Business Address
          </h2>

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
                <strong>International Inquiries:</strong> +91 85914 70791
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
                <strong>GSTIN:</strong> 27DMZPA1125E1Z6
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>IEC:</strong> DMZPA1125E
              </span>
            </li>
            <li className="flex items-start gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10 mt-2"></span>

  <div>
    <strong>Email:</strong>{" "}
    <a href="mailto:sales@starlighttubes.com">
      sales@starlighttubes.com
    </a>

    <div className="ml-12">
      <a href="mailto:exports@starlighttubes.com">
        exports@starlighttubes.com
      </a>
    </div>

    <div className="ml-12">
      <a href="mailto:inquiry@starlighttubes.com">
        inquiry@starlighttubes.com
      </a>
    </div>
  </div>
</li>
          </ul>

          <hr className="relative z-50 border-gray-700 my-4" />

          <h3 className="relative z-50 mb-4 text-xl font-bold text-white">
            Corporate Office
          </h3>

          <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>Address:</strong> Off.No. 504, B wing, 5th Floor,
                Meadows Tower, 10th Khetwadi Lane, Mumbai - 400004, India
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>International Inquiries:</strong> +91 85914 70791
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
          </ul>

          <hr className="relative z-50 border-gray-700 my-4" />

          <h3 className="relative z-50 mb-4 text-xl font-bold text-white">
            Business Hours
          </h3>
          <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>Open 24/7</strong> - All Day, Every Day
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>Phone Support:</strong> Available round the clock
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>Email Response:</strong> Within 2-4 hours
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
                <strong>WhatsApp:</strong> Instant response during business
                hours
              </span>
            </li>
          </ul>

         <div className="w-full flex justify-start mt-6 ml-8">
  <div className="flex gap-3">
    <a
      href="mailto:sales@starlighttubes.com"
      aria-label="Email"
      className="rounded-full bg-white/10 p-3 text-white hover:bg-teal-500 transition-colors"
    >
      <Mail size={20} />
    </a>

    <a
      href="https://www.linkedin.com/company/starlight-tubes"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="rounded-full bg-white/10 p-3 text-white hover:bg-teal-500 transition-colors"
    >
      <Linkedin size={20} />
    </a>
  </div>
</div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}
