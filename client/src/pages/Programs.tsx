import { Link } from 'wouter'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: '1:1 Personalized Training & Online Coaching',
      description: 'Get custom-built programs designed specifically for your goals with expert guidance.',
      features: [
        'Personalized workout plans',
        'Online coaching support',
        'Nutrition guidance',
        'Progress tracking',
        'Weekly check-ins',
        'Flexible scheduling',
      ],
      color: 'from-green-500 to-emerald-600',
      icon: '💪',
    },
    {
      id: 2,
      title: 'Transformational Journey: Physical, Mental, Spiritual',
      description: 'A holistic, 360-degree approach to complete wellness transformation.',
      features: [
        'Physical body transformation',
        'Mental clarity coaching',
        'Spiritual alignment practices',
        'Holistic lifestyle design',
        'Mindfulness training',
        'Energy optimization',
      ],
      color: 'from-white/10 to-white/5',
      icon: '🌟',
    },
    {
      id: 3,
      title: 'Plant-Based Alkaline Dr. Sebi Electric Nutrition',
      description: 'Natural healing through electric foods and alkaline lifestyle principles.',
      features: [
        'Nutritional assessment',
        'Meal planning',
        'Supplement guidance',
        'Alkaline food education',
        'Detox protocols',
        'Lifestyle integration',
      ],
      color: 'from-green-500 to-emerald-600',
      icon: '🌱',
    },
    {
      id: 4,
      title: 'Sliding Scale 1:1 Sessions',
      description: 'Accessible coaching for all income levels. Your financial situation should never be a barrier.',
      features: [
        'Flexible pricing',
        'Personalized plans',
        'Ongoing support',
        'Progress monitoring',
        'Community connection',
        'Affordable access',
      ],
      color: 'from-white/10 to-white/5',
      icon: '🤝',
    },
    {
      id: 5,
      title: 'Fitness Classes in the Park (Twice Monthly)',
      description: 'Free community fitness sessions. Connect with others while getting fit in nature.',
      features: [
        'Free community classes',
        'Outdoor fitness',
        'Group motivation',
        'Nature connection',
        'Social community',
        'Flexible attendance',
      ],
      color: 'from-orange-500 to-red-500',
      icon: '🏞️',
    },
    {
      id: 6,
      title: 'Community Work & Non-Profit Hiking',
      description: 'Build strength while giving back. Community work and outdoor adventures combined.',
      features: [
        'Community service',
        'Outdoor hiking',
        'Social impact',
        'Strength building',
        'Mental wellness',
        'Purpose-driven fitness',
      ],
      color: 'from-orange-500 to-red-500',
      icon: '🥾',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR PROGRAMS</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Choose the program that aligns with your transformation goals. Each program is designed to deliver results while honoring your unique journey.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <div
                key={program.id}
                className={`bg-white/10 backdrop-blur-sm border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  program.id === 1 ? 'border-green-500/50 hover:border-green-400' :
                  program.id === 3 ? 'border-green-500/50 hover:border-green-400' :
                  program.id === 5 ? 'border-orange-500/50 hover:border-orange-400' :
                  program.id === 6 ? 'border-orange-500/50 hover:border-orange-400' :
                  'border-white/20 hover:border-white/40'
                }`}
              >
                {/* Header with icon */}
                <div className="bg-white/5 p-6 text-center border-b border-white/10">
                  <div className="text-5xl mb-2">{program.icon}</div>
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{program.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to="/quiz"
                    className="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Coach Kello?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'NASM Certified', description: 'Professional credentials and expertise' },
              { title: 'Holistic Approach', description: 'Physical, mental, and spiritual wellness' },
              { title: 'Accessible Pricing', description: 'Sliding scale options for everyone' },
              { title: 'Community Focused', description: 'Building stronger communities together' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Take our personalized assessment to find the perfect program for your goals.
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg transition-colors duration-300"
          >
            START ASSESSMENT
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
