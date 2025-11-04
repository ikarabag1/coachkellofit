import { Link } from 'wouter'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
          @coachkellofit
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-white hover:text-green-400 transition-colors font-semibold">
            Home
          </Link>
          <Link to="/programs" className="text-white hover:text-green-400 transition-colors font-semibold">
            Programs
          </Link>
          <Link to="/quiz" className="text-white hover:text-green-400 transition-colors font-semibold">
            Assessment
          </Link>
          <Link to="/contact" className="text-white hover:text-green-400 transition-colors font-semibold">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/quiz"
          className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors"
        >
          START NOW
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-green-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-white/10 py-4 px-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-green-400 transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/programs"
            className="block text-white hover:text-green-400 transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Programs
          </Link>
          <Link
            to="/quiz"
            className="block text-white hover:text-green-400 transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Assessment
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-green-400 transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/quiz"
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            START NOW
          </Link>
        </div>
      )}
    </nav>
  )
}
