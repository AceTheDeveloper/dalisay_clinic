// components/Doctors.jsx
import Image from "next/image";
import doctor from "@/assets/doctor.jpeg";
export default function Doctors() {
  return (
    <section id="doctor" className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-6">
            Our Doctor
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Dr. Pacifico Dalisay
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl transform rotate-6"></div>
                <Image
                  src={doctor}
                  alt="Dr. Pacifico Dalisay"
                  className="relative rounded-3xl w-full object-cover shadow-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Dr. Pacifico Dalisay
              </h3>
              <p className="text-emerald-600 font-semibold text-lg mb-6"></p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Board-certified surgeon with over 30 years of experience.
                Dedicated to providing comprehensive, compassionate healthcare
                services to patients of all ages.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Board Certified Surgeon</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    15+ Years Medical Experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Specialized in Thoracic Cardiovascular and General Surgery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
