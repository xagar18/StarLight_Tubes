export default function ContactForm() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:px-24">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-green-500/10 to-blue-500/10 mix-blend-overlay" />

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
            <form
              action={import.meta.env.VITE_FORMSPREE_API}
              method="POST"
              className="space-y-6"
            >
              {/* Hidden Fields */}
              <input
                type="hidden"
                name="_subject"
                value="New Product Inquiry - Starlight Tubes"
              />
              <input type="text" name="_gotcha" className="hidden" />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Full Name */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Email */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Phone */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Product */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Product Interest
                  </label>

                  <select
                    name="subject"
                    required
                    className="
      block w-full rounded-lg border-0
      bg-white/10 px-4 py-3
      text-gray-100
      ring-1 ring-inset ring-white/10
      focus:ring-2 focus:ring-green-500
      appearance-none
    "
                  >
                    <option
                      value=""
                      disabled
                      className="bg-gray-900 text-gray-400"
                    >
                      Select a product
                    </option>
                    <option className="bg-gray-900 text-white">
                      Stainless Steel
                    </option>
                    <option className="bg-gray-900 text-white">
                      Nickel Alloy
                    </option>
                    <option className="bg-gray-900 text-white">
                      Carbon Steel
                    </option>
                    <option className="bg-gray-900 text-white">
                      Coated Pipes
                    </option>
                    <option className="bg-gray-900 text-white">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="block w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-green-600 to-green-500 hover:scale-105 transition-all"
                >
                  Send Message →
                </button>

                <a
                  href="tel:+919892233118"
                  className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all text-center"
                >
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
