import { useState } from 'react'
import { Link } from 'wouter'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Quiz() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fitnessGoal: '',
    nutritionFocus: '',
    communityInterest: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const handleSelectOption = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    // Here you would typically send the data to a backend
    alert('Thank you! Your assessment has been submitted. Check your email for your custom plan!')
    window.location.href = '/'
  }

  const progressPercentage = (step / 4) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-semibold">Step {step} of 4</span>
              <span className="text-sm text-gray-400">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Fitness Goal */}
          {step === 1 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">What is your primary wellness goal?</h2>
              <div className="space-y-4">
                {[
                  { value: 'physical', label: 'Physical Transformation (Weight Loss/Muscle Gain)' },
                  { value: 'mental', label: 'Mental Clarity & Stress Reduction' },
                  { value: 'spiritual', label: 'Spiritual Alignment & Energy Flow' },
                  { value: 'holistic', label: 'Holistic Health & Longevity' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleSelectOption('fitnessGoal', option.value)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left font-semibold ${
                      formData.fitnessGoal === option.value
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Nutrition Focus */}
          {step === 2 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Are you interested in Plant-Based Alkaline Nutrition?</h2>
              <div className="space-y-4">
                {[
                  { value: 'yes', label: 'Yes, I want to learn more!' },
                  { value: 'open', label: 'I\'m open to it.' },
                  { value: 'different', label: 'I prefer a different approach.' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleSelectOption('nutritionFocus', option.value)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left font-semibold ${
                      formData.nutritionFocus === option.value
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Community Interest */}
          {step === 3 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Which community option interests you most?</h2>
              <div className="space-y-4">
                {[
                  { value: 'sliding', label: 'Sliding Scale 1:1 Sessions' },
                  { value: 'park', label: 'Fitness Classes in the Park (Twice Monthly)' },
                  { value: 'hiking', label: 'Community Work & Non-Profit Hiking' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleSelectOption('communityInterest', option.value)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left font-semibold ${
                      formData.communityInterest === option.value
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Ready to take the next step?</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 gap-4">
            <button
              onClick={handlePrevious}
              disabled={step === 1}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                step === 1
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              ← Previous
            </button>
            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={!Object.values(formData)[step - 1]}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  !Object.values(formData)[step - 1]
                    ? 'bg-green-700 text-green-400 cursor-not-allowed opacity-50'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-lg font-semibold bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
              >
                SUBMIT & GET PLAN
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
