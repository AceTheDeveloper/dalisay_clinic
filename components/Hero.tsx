// components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-emerald-50/50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-emerald-700">
              Accepting New Patients
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Quality Care,
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Trusted Service
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Comprehensive medical services in Iloilo City. Your health and
            well-being are our top priority.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-600/30"
            >
              Schedule Appointment
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-medium rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-all"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
