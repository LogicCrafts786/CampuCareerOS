import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Campus CareerOS</h3>
            <p>Empowering students with career development tools and resources through innovative technology.</p>
            <div className="footer-socials">
              <a href="#" aria-label="GitHub" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/career-resources">Career Resources</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/alumni">Alumni Network</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <span>info@campuscareeros.edu</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>123 University Ave, City, State</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} Campus CareerOS. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
