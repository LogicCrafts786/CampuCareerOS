import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun, Github } from 'lucide-react'
import './Header.css'

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Career Resources', path: '/career-resources' },
    { label: 'Events', path: '/events' },
    { label: 'Alumni', path: '/alumni' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <Github size={28} />
            <span>Campus CareerOS</span>
          </Link>
        </div>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="btn-icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="https://github.com/LogicCrafts786/CampuCareerOS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub repository"
          >
            <Github size={20} />
          </a>
          <button
            className="btn-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
