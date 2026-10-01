import React, { useState } from 'react'
import { Star, Briefcase, MapPin, Linkedin, Mail, MessageCircle } from 'lucide-react'
import './Alumni.css'

const Alumni = () => {
  const [filterRole, setFilterRole] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const alumni = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      batch: '2019',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      bio: 'Passionate about building scalable systems and mentoring junior engineers.',
      mentor: true,
      connections: 324
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      batch: '2018',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      bio: 'Focused on product strategy and user experience in cloud computing.',
      mentor: true,
      connections: 412
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Data Scientist',
      company: 'Amazon',
      location: 'Seattle, WA',
      batch: '2020',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      bio: 'Specializing in machine learning and predictive analytics.',
      mentor: true,
      connections: 287
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'UX Designer',
      company: 'Apple',
      location: 'Cupertino, CA',
      batch: '2019',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      bio: 'Creating intuitive interfaces and exceptional user experiences.',
      mentor: false,
      connections: 198
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'HR Director',
      company: 'Tesla',
      location: 'Austin, TX',
      batch: '2017',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      bio: 'Building amazing teams and company culture.',
      mentor: true,
      connections: 356
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Senior Developer',
      company: 'Facebook',
      location: 'Menlo Park, CA',
      batch: '2016',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      bio: 'Expert in full-stack development and system architecture.',
      mentor: true,
      connections: 523
    },
    {
      id: 7,
      name: 'Rachel Kim',
      role: 'Marketing Manager',
      company: 'Netflix',
      location: 'Los Gatos, CA',
      batch: '2021',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      bio: 'Driving growth through strategic marketing initiatives.',
      mentor: false,
      connections: 245
    },
    {
      id: 8,
      name: 'Robert Smith',
      role: 'Startup Founder',
      company: 'TechVenture Labs',
      location: 'San Francisco, CA',
      batch: '2015',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      bio: 'Building innovative solutions and investing in early-stage startups.',
      mentor: true,
      connections: 678
    },
  ]

  const roles = [
    { id: 'all', label: 'All Roles' },
    { id: 'mentor', label: 'Available for Mentoring' },
    { id: 'engineer', label: 'Engineers' },
    { id: 'manager', label: 'Managers' },
  ]

  const filteredAlumni = alumni.filter(person => {
    const matchesRole = filterRole === 'all' || 
                       (filterRole === 'mentor' && person.mentor) ||
                       (filterRole === 'engineer' && person.role.includes('Engineer'))
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.company.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesRole && matchesSearch
  })

  const handleConnect = (name) => {
    alert(`Connection request sent to ${name}`)
  }

  const handleMessage = (name) => {
    alert(`Opening message with ${name}`)
  }

  return (
    <div className="alumni-page">
      {/* Hero */}
      <section className="alumni-hero">
        <div className="container">
          <h1>Alumni Network</h1>
          <p>Connect with successful alumni and build valuable professional relationships</p>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1,000+</div>
              <p>Active Alumni</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <p>Fortune 500 Employees</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <p>Available Mentors</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section">
        <div className="container">
          <div className="alumni-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by name or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              {roles.map(role => (
                <button
                  key={role.id}
                  className={`filter-btn ${filterRole === role.id ? 'active' : ''}`}
                  onClick={() => setFilterRole(role.id)}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Alumni Grid */}
          <div className="alumni-grid">
            {filteredAlumni.length > 0 ? (
              filteredAlumni.map(person => (
                <div key={person.id} className="alumni-card card">
                  <div className="alumni-header">
                    <img src={person.image} alt={person.name} className="alumni-image" />
                    {person.mentor && (
                      <span className="mentor-badge">
                        <Star size={16} />
                        Mentor
                      </span>
                    )}
                  </div>

                  <div className="alumni-body">
                    <h3>{person.name}</h3>
                    <p className="role">{person.role}</p>
                    <p className="company">
                      <Briefcase size={16} />
                      {person.company}
                    </p>
                    <p className="location">
                      <MapPin size={16} />
                      {person.location}
                    </p>
                    <p className="batch">Class of {person.batch}</p>
                    <p className="bio">{person.bio}</p>
                    <p className="connections">
                      <span className="connection-count">{person.connections}</span>
                      connections
                    </p>
                  </div>

                  <div className="alumni-actions">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleConnect(person.name)}
                    >
                      <Linkedin size={16} />
                      Connect
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleMessage(person.name)}
                    >
                      <MessageCircle size={16} />
                      Message
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                <div className="empty-state-icon">👥</div>
                <h3>No alumni found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Alumni Network Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card card">
              <div className="benefit-icon">🤝</div>
              <h3>Professional Networking</h3>
              <p>Build meaningful connections with successful professionals in your field.</p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">📚</div>
              <h3>Career Guidance</h3>
              <p>Get mentorship and advice from experienced alumni in various industries.</p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">💼</div>
              <h3>Job Opportunities</h3>
              <p>Access exclusive job openings shared by alumni at top companies.</p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🎓</div>
              <h3>Skill Development</h3>
              <p>Learn from alumni experiences and stay updated with industry trends.</p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Community</h3>
              <p>Connect with alumni working across the globe and expand your network.</p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🚀</div>
              <h3>Career Growth</h3>
              <p>Accelerate your career through networking and mentorship opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Alumni
