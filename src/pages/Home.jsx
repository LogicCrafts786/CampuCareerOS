import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Users, BookOpen, Zap, Target, Award } from 'lucide-react'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: <Briefcase size={32} />,
      title: 'Career Guidance',
      description: 'Expert mentorship and personalized career advice from industry professionals.'
    },
    {
      icon: <Users size={32} />,
      title: 'Alumni Network',
      description: 'Connect with successful alumni and build valuable professional relationships.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Learning Resources',
      description: 'Access comprehensive career development materials and training programs.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Job Opportunities',
      description: 'Discover internships and job placements with top companies.'
    },
    {
      icon: <Target size={32} />,
      title: 'Skill Building',
      description: 'Develop in-demand skills through workshops and hands-on training.'
    },
    {
      icon: <Award size={32} />,
      title: 'Certifications',
      description: 'Earn industry-recognized certifications to boost your career prospects.'
    },
  ]

  const stats = [
    { number: '500+', label: 'Students Placed' },
    { number: '200+', label: 'Companies Partner' },
    { number: '1000+', label: 'Active Alumni' },
    { number: '50+', label: 'Career Programs' },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Career Summit 2024',
      date: 'November 15, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Auditorium',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Resume Building Workshop',
      date: 'November 8, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Career Center',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Interview Preparation Session',
      date: 'November 22, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'Virtual - Zoom',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      text: 'Campus CareerOS helped me land my dream job at Google. The mentorship and resources were invaluable!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager at Microsoft',
      text: 'The networking opportunities through the alumni network were game-changing for my career transition.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Data Scientist at Amazon',
      text: 'The skill-building workshops prepared me perfectly for technical interviews. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Launch Your Dream Career</h1>
            <p>Campus CareerOS empowers students with comprehensive career development tools, mentorship, and opportunities to succeed in their professional journey.</p>
            <div className="hero-buttons">
              <Link to="/career-resources" className="btn btn-primary btn-lg">
                Explore Resources
                <ArrowRight size={20} />
              </Link>
              <Link to="/events" className="btn btn-outline btn-lg">
                View Events
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#e6f0ff" />
                <circle cx="200" cy="150" r="80" fill="#0066cc" opacity="0.1" />
                <circle cx="150" cy="250" r="60" fill="#0066cc" opacity="0.15" />
                <circle cx="280" cy="280" r="50" fill="#0066cc" opacity="0.1" />
                <path d="M 100 150 Q 200 100 300 150" stroke="#0066cc" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M 80 250 Q 200 200 320 250" stroke="#0066cc" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Campus CareerOS?</h2>
            <p>Comprehensive tools and resources designed to accelerate your career growth</p>
          </div>
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Join our career development events and workshops</p>
          </div>
          <div className="grid grid-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-meta">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="event-meta">
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="event-meta">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <Link to="/events" className="btn btn-primary btn-sm mt-3">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/events" className="btn btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Hear from students who achieved their career goals through Campus CareerOS</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join thousands of students who are already building their professional future with Campus CareerOS</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started Today
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
