export default function ContactForm() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:px-24">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 mix-blend-overlay" />

          {/* Animated background circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-green-400 text-sm font-semibold">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Request a Quote
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Share your project details and we'll provide a competitive quote
                with technical specifications
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name Field */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Phone Field */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Subject/Product Field */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Product Interest
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm transition-all duration-300"
                  >
                    <option value="" className="bg-gray-900">
                      Select a product
                    </option>
                    <option value="stainless-steel" className="bg-gray-900">
                      Stainless Steel
                    </option>
                    <option value="nickel-alloy" className="bg-gray-900">
                      Nickel Alloy
                    </option>
                    <option value="carbon-steel" className="bg-gray-900">
                      Carbon Steel
                    </option>
                    <option value="coated-pipes" className="bg-gray-900">
                      Coated Pipes
                    </option>
                    <option value="other" className="bg-gray-900">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements, quantity needed, delivery location..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105"
                >
                  Send Message
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-semibold rounded-xl text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us Directly
                </a>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                  24h
                </div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                  400+
                </div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                  5+
                </div>
                <div className="text-gray-400 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                  5+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
