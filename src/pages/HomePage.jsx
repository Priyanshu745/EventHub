import { useState } from 'react'
import { Link } from 'react-router-dom'
import { events, categories } from '../data/events'
import './HomePage.css'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === '' || event.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Amazing Events</h1>
          <p>Find and book tickets for the best events happening around you</p>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search events..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="btn btn-primary"
              onClick={() => {
                const eventsSection = document.getElementById('events');
                if (eventsSection) {
                  eventsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="categories-section" id="categories">
        <h2>Browse by Category</h2>
        <div className="categories-container">
          <div 
            className={`category-item ${selectedCategory === '' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('')}
          >
            <span className="category-icon">🌟</span>
            <span className="category-name">All</span>
          </div>
          
          {categories.map(category => (
            <div 
              key={category.id} 
              className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Events Section */}
      <section className="events-section" id="events">
        <h2>Upcoming Events</h2>
        {filteredEvents.length === 0 ? (
          <p className="no-events">No events found matching your criteria.</p>
        ) : (
          <div className="events-grid">
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-category">{event.category}</div>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-info">
                    <p><i className="far fa-calendar"></i> {event.date}</p>
                    <p><i className="far fa-clock"></i> {event.time}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                  </div>
                  <p className="event-price">₹{event.price.toLocaleString()}</p>
                  <Link to={`/event/${event.id}`} className="btn btn-primary book-btn">
                    Book Event
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      
      {/* Featured Section */}
      <section className="featured-section" id="featured">
        <h2>Why Choose Us</h2>
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">🎟️</div>
            <h3>Easy Booking</h3>
            <p>Book tickets in just a few clicks with our user-friendly platform.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔍</div>
            <h3>Discover Events</h3>
            <p>Find events that match your interests from our curated selection.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Secure Checkout</h3>
            <p>Your payment information is always protected with our secure system.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage