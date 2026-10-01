import React, { useState } from 'react'
import { BookOpen, Users, Briefcase, Award, Download, Search, Filter } from 'lucide-react'
import './CareerResources.css'

const CareerResources = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const resources = [
    {
      id: 1,
      title: 'Resume Building Guide',
      category: 'resume',
      type: 'PDF',
      description: 'Comprehensive guide to creating a professional resume that stands out to employers.',
      downloads: 2543,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Interview Preparation Handbook',
      category: 'interview',
      type: 'PDF',
      description: 'Master the art of interviews with our complete preparation handbook.',
      downloads: 1893,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Salary Negotiation Strategies',
      category: 'salary',
      type: 'Article',
      description: 'Learn effective strategies to negotiate your salary and benefits package.',
      downloads: 1245,
      rating: 4.7
    },
    {
      id: 4,
      title: 'LinkedIn Profile Optimization',
      category: 'networking',
      type: 'Video',
      description: 'Step-by-step guide to creating and optimizing your LinkedIn profile.',
      downloads: 3421,
      rating: 4.9
    },
    {
      id: 5,
      title: 'Cover Letter Templates',
      category: 'resume',
      type: 'Templates',
      description: 'Collection of professionally designed cover letter templates for various industries.',
      downloads: 2876,
      rating: 4.6
    },
    {
      id: 6,
      title: 'Professional Etiquette Guide',
      category: 'professional',
      type: 'Guide',
      description: 'Essential guide to workplace professionalism and business etiquette.',
      downloads: 1567,
      rating: 4.5
    },
    {
      id: 7,
      title: 'Industry Insights: Tech Careers',
      category: 'industry',
      type: 'Article',
      description: 'Deep dive into tech career paths, requirements, and future trends.',
      downloads: 2234,
      rating: 4.8
    },
    {
      id: 8,
      title: 'Skill Development Roadmap',
      category: 'skills',
      type: 'PDF',
      description: 'Personalized roadmap for developing in-demand skills in your field.',
      downloads: 1934,
      rating: 4.7
    },
  ]

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'resume', label: 'Resume', icon: Briefcase },
    { id: 'interview', label: 'Interview Prep', icon: Award },
    { id: 'networking', label: 'Networking', icon: Users },
    { id: 'salary', label: 'Salary', icon: Download },
    { id: 'professional', label: 'Professional Dev', icon: BookOpen },
    { id: 'industry', label: 'Industry Insights', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
  ]

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getTypeColor = (type) => {
    const colors = {
      'PDF': '#3b82f6',
      'Article': '#10b981',
      'Video': '#f59e0b',
      'Templates': '#8b5cf6',
      'Guide': '#ef4444'
    }
    return colors[type] || '#6366f1'
  }

  return (
    <div className="career-resources-page">
      {/* Hero */}
      <section className="resources-hero">
        <div className="container">
          <h1>Career Resources</h1>
          <p>Access comprehensive guides, templates, and tools to advance your career</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="search-section">
        <div className="container">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section">
        <div className="container">
          <div className="category-filter">
            <div className="filter-header">
              <Filter size={20} />
              <span>Filter by Category</span>
            </div>
            <div className="category-buttons">
              {categories.map(category => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <Icon size={18} />
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="resources-grid">
            {filteredResources.length > 0 ? (
              filteredResources.map(resource => (
                <div key={resource.id} className="resource-card card">
                  <div className="resource-header">
                    <span
                      className="resource-type"
                      style={{ backgroundColor: getTypeColor(resource.type) }}
                    >
                      {resource.type}
                    </span>
                    <div className="resource-rating">
                      <span className="stars">★</span>
                      {resource.rating}
                    </div>
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="resource-meta">
                    <span className="downloads">
                      <Download size={16} />
                      {resource.downloads} downloads
                    </span>
                  </div>
                  <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                    Access Resource
                  </button>
                </div>
              ))
            ) : (
              <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                <div className="empty-state-icon">📚</div>
                <h3>No resources found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Featured Resource Categories</h2>
          <div className="featured-categories">
            <div className="featured-card card">
              <div className="featured-icon" style={{ color: '#0066cc' }}>
                <Briefcase size={40} />
              </div>
              <h3>Resume & Cover Letters</h3>
              <p>Professional templates and guides to create impactful resume and cover letters that get noticed by recruiters.</p>
              <button className="btn btn-outline btn-sm">Explore</button>
            </div>
            <div className="featured-card card">
              <div className="featured-icon" style={{ color: '#10b981' }}>
                <Award size={40} />
              </div>
              <h3>Interview Preparation</h3>
              <p>Master interview techniques, practice questions, and strategies to ace your next job interview.</p>
              <button className="btn btn-outline btn-sm">Explore</button>
            </div>
            <div className="featured-card card">
              <div className="featured-icon" style={{ color: '#f59e0b' }}>
                <Users size={40} />
              </div>
              <h3>Networking & LinkedIn</h3>
              <p>Build your professional network and optimize your online presence for career advancement.</p>
              <button className="btn btn-outline btn-sm">Explore</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareerResources
