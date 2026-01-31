// components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-6">
              About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Committed to Your Health & Wellness
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dr. Dalisay's Clinic provides exceptional healthcare services to
              the Iloilo community. With years of experience and a patient-first
              approach, we deliver medical care you can trust.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in preventive care, accurate diagnosis, and
              compassionate treatment. Our modern facility and personalized
              service ensure you receive the best possible care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                15+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl mt-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">5k+</div>
              <div className="text-gray-600 font-medium">Patients Served</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Dedicated Care</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl mt-8">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
