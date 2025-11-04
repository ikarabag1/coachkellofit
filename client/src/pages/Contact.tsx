import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GET IN TOUCH</h1>
          <p className="text-xl text-gray-300">
            Have questions? Ready to start your transformation? Reach out and let's connect!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:coachkellofit@gmail.com" className="text-green-400 hover:text-green-300 hover:underline">
                    coachkellofit@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:+13108045901" className="text-green-400 hover:text-green-300 hover:underline">
                    (310) 804-5901
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-300">Los Angeles, CA</p>
                  <p className="text-gray-400 text-sm">Available for online coaching worldwide</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <div className="text-3xl">🌐</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Follow Me</h3>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/coachkellofit/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 hover:underline">Instagram</a>
                    <a href="https://www.linkedin.com/in/okello-w-nasm-cpt-a2b2a5170/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 p-6 bg-white/10 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/programs" className="text-green-400 hover:text-green-300">View Programs</a></li>
                <li><a href="/quiz" className="text-green-400 hover:text-green-300">Take Assessment</a></li>
                <li><a href="/" className="text-green-400 hover:text-green-300">Back to Home</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-8">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your goals and questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
