// components/Services.jsx
export default function Services() {
  const services = [
    {
      title: "General Check-Up",
      description:
        "Comprehensive health assessments and routine physical examinations.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Medical Certifications",
      description:
        "Professional medical certificates for school, work, and travel.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fit to Work Clearance",
      description: "Medical clearances and fitness assessments for employment.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-6">
            Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Can Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
              ></div>
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 flex items-center justify-center`}
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
