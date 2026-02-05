import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      {/* Hero Section with Photo */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">ABOUT COACH KELLO</h1>
          
          {/* Photo Section - Optimized */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg p-1 shadow-2xl">
              <div className="w-[280px] h-[380px] md:w-[320px] md:h-[420px] rounded overflow-hidden bg-slate-800">
                <img 
                  src="/coach-photo-about.jpg" 
                  alt="Coach Kello - NASM Certified Personal Trainer" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8">
            <p className="text-lg leading-relaxed text-gray-200">
              Kello W is a NASM Certified Personal Trainer dedicated to engineering transformational wellness journeys that honor the complete human experience—physical, mental, and spiritual. With a deep commitment to holistic health, Coach Kello combines science-backed fitness training with the healing principles of Plant-Based Alkaline Dr. Sebi Electric Nutritional Lifestyle to help clients achieve sustainable, life-changing results. His approach goes beyond traditional personal training; he offers personalized 1:1 coaching programs tailored to individual goals, comprehensive transformational journeys that address body, mind, and spirit, and expert guidance in alkaline nutrition and natural healing protocols. Understanding that financial barriers should never prevent transformation, Coach Kello provides sliding scale sessions to make wellness accessible to all income levels. He also believes in the power of community, leading free fitness classes in the park twice monthly and organizing non-profit hiking adventures that combine outdoor fitness with meaningful community service. Whether you're seeking to build strength, lose weight, heal through nutrition, find mental clarity, or connect with a supportive wellness community, Coach Kello creates a safe, empowering space where your unique journey is honored and your goals become achievable realities.
            </p>
          </div>

          {/* Credentials & Certifications */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-green-400">NASM Certified</h3>
              <p className="text-gray-300 text-sm">National Academy of Sports Medicine Certified Personal Trainer</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-bold mb-2 text-green-400">Nutrition Expert</h3>
              <p className="text-gray-300 text-sm">Plant-Based Alkaline Dr. Sebi Electric Nutritional Lifestyle Specialist</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🧘</div>
              <h3 className="text-xl font-bold mb-2 text-green-400">Holistic Coach</h3>
              <p className="text-gray-300 text-sm">Physical, Mental, and Spiritual Transformation Guide</p>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-400/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Services Offered</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-200">1:1 Personalized Training & Online Coaching</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-200">Transformational Journey Programs</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-200">Plant-Based Alkaline Nutrition Guidance</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-200">Sliding Scale Accessible Sessions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-200">Free Community Fitness Classes</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-gray-200">Non-Profit Hiking & Community Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Take the first step toward your transformation. Let's work together to achieve your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quiz"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              TAKE ASSESSMENT
            </a>
            <a
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
