import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of these channels:</p>

              <div className="contact-details">
                <div className="contact-detail-card">
                  <div className="contact-detail-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@campuscareeros.edu</p>
                    <p className="text-small">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-detail-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                    <p className="text-small">Mon-Fri 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-detail-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>123 University Avenue</p>
                    <p className="text-small">City, State 12345, USA</p>
                  </div>
                </div>
              </div>

              <div className="quick-response">
                <h3>Quick Response</h3>
                <p>We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>

              {submitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <div className="form-error">
                      <AlertCircle size={16} />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <div className="form-error">
                        <AlertCircle size={16} />
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                  />
                  {errors.subject && (
                    <div className="form-error">
                      <AlertCircle size={16} />
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <div className="form-error">
                      <AlertCircle size={16} />
                      {errors.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card card">
              <h4>What is Campus CareerOS?</h4>
              <p>Campus CareerOS is a comprehensive career development platform designed to help college students launch and accelerate their careers through mentorship, resources, networking, and opportunities.</p>
            </div>
            <div className="faq-card card">
              <h4>How do I register?</h4>
              <p>Visit our registration page and provide your basic information. You'll gain immediate access to all career resources, events, and networking opportunities available on our platform.</p>
            </div>
            <div className="faq-card card">
              <h4>Is there a fee to use Campus CareerOS?</h4>
              <p>Most features are available for free to all registered students. Some premium workshops and certifications may have optional fees.</p>
            </div>
            <div className="faq-card card">
              <h4>How often are new events added?</h4>
              <p>We regularly add new events and workshops. Check back weekly or subscribe to our newsletter to stay updated on the latest opportunities.</p>
            </div>
            <div className="faq-card card">
              <h4>Can alumni join?</h4>
              <p>Absolutely! Our alumni network section is specifically designed for graduates. Alumni can mentor students, share experiences, and maintain professional connections.</p>
            </div>
            <div className="faq-card card">
              <h4>How can I report a problem?</h4>
              <p>Use the contact form on this page or email us directly at support@campuscareeros.edu. We'll address your concerns promptly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
