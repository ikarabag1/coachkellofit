import { useState } from 'react'
import { Link } from 'wouter'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 md:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-green-400 text-sm font-semibold mb-2">ENGINEERED BY OKELLO</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              DISCOVER YOUR <span className="text-green-400">TRANSFORMATION</span>
              <br />
              PHYSICAL, MENTAL, SPIRITUAL
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Change your course of wellness and engineer a plan that is directly tailored to your holistic health goals. Okello W, NASM Certified Personal Trainer, combines science-backed training with a Plant-Based Alkaline Dr. Sebi Electric Nutritional Lifestyle.
            </p>
            <Link
              to="/quiz"
              className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded transition-colors duration-300"
            >
              START YOUR JOURNEY
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg p-1">
              <img 
                src="/coach-photo.jpg" 
                alt="Coach Okello - NASM Certified Personal Trainer"
                className="rounded w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">ELITE PROGRAMS</h2>
          <p className="text-gray-300 text-center mb-12">Choose your path to transformation</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Program Card 1 */}
            <div
              className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8 hover:border-green-400 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-2xl font-bold mb-4">1:1 Personalized Training</h3>
              <p className="text-gray-300 mb-6">
                Custom-built programs designed specifically for your goals. Get expert guidance on fitness, nutrition, and lifestyle changes.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✓ Personalized workout plans</li>
                <li>✓ Online coaching support</li>
                <li>✓ Nutrition guidance</li>
                <li>✓ Progress tracking</li>
              </ul>
              <Link
                to="/programs"
                className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2"
              >
                Learn More →
              </Link>
            </div>

            {/* Program Card 2 */}
            <div
              className="bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-2xl font-bold mb-4">Transformational Journey</h3>
              <p className="text-gray-300 mb-6">
                A holistic, 360-degree approach to wellness. Transform your physical body, mental clarity, and spiritual alignment.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✓ Physical transformation</li>
                <li>✓ Mental wellness coaching</li>
                <li>✓ Spiritual alignment</li>
                <li>✓ Holistic lifestyle design</li>
              </ul>
              <Link
                to="/programs"
                className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">COMMUNITY & ACCESSIBILITY</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Community Card 1 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Sliding Scale Sessions</h3>
              <p className="text-gray-300 mb-4">
                Accessible 1:1 coaching for all income levels. Your financial situation should never be a barrier to transformation.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Community Card 2 */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-lg p-6 hover:border-orange-400 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Park Fitness Classes</h3>
              <p className="text-gray-300 mb-4">
                Free community fitness classes held twice monthly. Connect with others while getting fit in nature.
              </p>
              <Link to="/contact" className="text-orange-400 hover:text-orange-300 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Community Card 3 */}
            <div className="bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-500/30 rounded-lg p-6 hover:border-amber-400 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Non-Profit Hiking</h3>
              <p className="text-gray-300 mb-4">
                Community work and outdoor adventures. Build strength while giving back to the community.
              </p>
              <Link to="/contact" className="text-amber-400 hover:text-amber-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-lg mb-8 text-white/90">
            Take our personalized assessment to discover the perfect program for your goals.
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-white text-green-600 font-bold py-3 px-10 rounded hover:bg-gray-100 transition-colors duration-300"
          >
            START THE ASSESSMENT
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
