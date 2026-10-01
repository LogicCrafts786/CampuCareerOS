import React, { useState } from 'react'
import { Calendar, MapPin, Users, Clock, Share2, Bookmark, ArrowRight } from 'lucide-react'
import './Events.css'

const Events = () => {
  const [filter, setFilter] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    {
      id: 1,
      title: 'Tech Career Summit 2024',
      date: '2024-11-15',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Auditorium',
      category: 'seminar',
      type: 'In-Person',
      description: 'Join us for an exclusive tech career summit featuring industry leaders, career panels, and networking opportunities.',
      attendees: 245,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      speakers: ['Sarah Chen - Google', 'Michael Park - Microsoft', 'Emma Davis - Amazon']
    },
    {
      id: 2,
      title: 'Resume Building Workshop',
      date: '2024-11-08',
      time: '2:00 PM - 4:00 PM',
      location: 'Career Center, Room 101',
      category: 'workshop',
      type: 'In-Person',
      description: 'Learn how to craft a compelling resume that gets noticed by top employers. Includes one-on-one review sessions.',
      attendees: 42,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      speakers: ['Dr. Rachel Johnson - Career Advisor']
    },
    {
      id: 3,
      title: 'Interview Preparation Session',
      date: '2024-11-22',
      time: '3:00 PM - 5:00 PM',
      location: 'Virtual - Zoom',
      category: 'workshop',
      type: 'Virtual',
      description: 'Master the art of interviews with practice questions, tips from HR professionals, and real-world scenarios.',
      attendees: 87,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      speakers: ['Tom Wilson - Recruitment Manager', 'Lisa Anderson - HR Director']
    },
    {
      id: 4,
      title: 'LinkedIn Optimization Webinar',
      date: '2024-11-10',
      time: '6:00 PM - 7:00 PM',
      location: 'Virtual - Teams',
      category: 'webinar',
      type: 'Virtual',
      description: 'Optimize your LinkedIn profile to attract recruiters and stand out in your industry.',
      attendees: 156,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      speakers: ['Marcus Green - LinkedIn Strategist']
    },
    {
      id: 5,
      title: 'Networking Mixer - Tech Edition',
      date: '2024-11-20',
      time: '5:00 PM - 8:00 PM',
      location: 'Downtown Hotel, Ballroom A',
      category: 'networking',
      type: 'In-Person',
      description: 'Connect with tech professionals, recruiters, and fellow students in a casual networking environment.',
      attendees: 320,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      speakers: ['Multiple Companies']
    },
    {
      id: 6,
      title: 'Career Mentorship Program Launch',
      date: '2024-11-25',
      time: '11:00 AM - 12:00 PM',
      location: 'Virtual - Zoom',
      category: 'seminar',
      type: 'Virtual',
      description: 'Learn about our new mentorship program connecting students with industry professionals for guidance.',
      attendees: 203,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      speakers: ['Dr. Robert Smith - Program Director']
    },
  ]

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'seminar', label: 'Seminars' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'webinar', label: 'Webinars' },
    { id: 'networking', label: 'Networking' },
  ]

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.category === filter)

  const handleRegister = (event) => {
    alert(`You have successfully registered for: ${event.title}`)
  }

  return (
    <div className="events-page">
      {/* Hero */}
      <section className="events-hero">
        <div className="container">
          <h1>Events & Workshops</h1>
          <p>Join our community events and accelerate your career growth</p>
        </div>
      </section>

      {/* Filter */}
      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section">
        <div className="container">
          {filteredEvents.length > 0 ? (
            <div className="events-list">
              {filteredEvents.map(event => (
                <div key={event.id} className="event-item">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <span className="event-type-badge">{event.type}</span>
                    <span className="event-category-badge">{event.category.toUpperCase()}</span>
                  </div>

                  <div className="event-content">
                    <h3>{event.title}</h3>

                    <div className="event-details">
                      <div className="detail">
                        <Calendar size={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className="detail">
                        <Clock size={18} />
                        <span>{event.time}</span>
                      </div>
                      <div className="detail">
                        <MapPin size={18} />
                        <span>{event.location}</span>
                      </div>
                      <div className="detail">
                        <Users size={18} />
                        <span>{event.attendees} registered</span>
                      </div>
                    </div>

                    <p className="event-description">{event.description}</p>

                    <div className="speakers-section">
                      <strong>Featured Speakers:</strong>
                      <div className="speakers-list">
                        {event.speakers.map((speaker, idx) => (
                          <span key={idx} className="speaker-badge">{speaker}</span>
                        ))}
                      </div>
                    </div>

                    <div className="event-actions">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleRegister(event)}
                      >
                        Register Now
                        <ArrowRight size={18} />
                      </button>
                      <button className="btn btn-secondary">
                        <Bookmark size={18} />
                        Save Event
                      </button>
                      <button className="btn btn-secondary">
                        <Share2 size={18} />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📅</div>
              <h3>No events found</h3>
              <p>Check back soon for more events!</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Calendar */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Calendar Overview</h2>
          <div className="calendar-info">
            <div className="calendar-card">
              <div className="calendar-number">6</div>
              <p>Total Events</p>
            </div>
            <div className="calendar-card">
              <div className="calendar-number">4</div>
              <p>In-Person Events</p>
            </div>
            <div className="calendar-card">
              <div className="calendar-number">2</div>
              <p>Virtual Events</p>
            </div>
            <div className="calendar-card">
              <div className="calendar-number">1,013</div>
              <p>Total Registrations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
