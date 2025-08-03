import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { events } from '../data/events'
import './EventDetailsPage.css'

const EventDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const event = events.find(e => e.id === parseInt(id))
  
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [quantity, setQuantity] = useState(1)
  
  if (!event) {
    return (
      <div className="not-found">
        <h2>Event Not Found</h2>
        <p>The event you're looking for doesn't exist or has been removed.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }
  
  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket)
    setQuantity(1)
  }
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 0 && selectedTicket && value <= selectedTicket.available) {
      setQuantity(value)
    }
  }
  
  const handleCheckout = () => {
    if (selectedTicket) {
      navigate(`/checkout/${event.id}`, { 
        state: { 
          event, 
          ticket: selectedTicket, 
          quantity 
        } 
      })
    }
  }
  
  return (
    <div className="event-details-page">
      <div className="event-header">
        <div className="event-header-image">
          <img src={event.image} alt={event.title} />
        </div>
        <div className="event-header-overlay">
          <div className="event-header-content">
            <span className="event-category">{event.category}</span>
            <h1>{event.title}</h1>
            <div className="event-meta">
              <p><i className="far fa-calendar"></i> {event.date}</p>
              <p><i className="far fa-clock"></i> {event.time}</p>
              <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="event-content">
        <div className="event-description">
          <h2>About This Event</h2>
          <p>{event.description}</p>
          
          <div className="event-location">
            <h2>Location</h2>
            <p>{event.location}</p>
            <div className="map-placeholder">
              {/* In a real app, you would integrate with Google Maps or similar */}
              <div className="map-overlay">Map view is not available in this demo</div>
            </div>
          </div>
        </div>
        
        <div className="event-booking">
          <div className="booking-card card">
            <h2>Get Tickets</h2>
            <div className="ticket-options">
              {event.tickets.map((ticket, index) => (
                <div 
                  key={index} 
                  className={`ticket-option ${selectedTicket === ticket ? 'selected' : ''}`}
                  onClick={() => handleTicketSelect(ticket)}
                >
                  <div className="ticket-info">
                    <h3>{ticket.type}</h3>
                    <p className="ticket-availability">{ticket.available} tickets left</p>
                  </div>
                  <span className="price">₹{ticket.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            
            {selectedTicket && (
              <div className="ticket-quantity">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-control">
                  <button 
                    className="quantity-btn"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    id="quantity" 
                    min="1" 
                    max={selectedTicket.available}
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <button 
                    className="quantity-btn"
                    onClick={() => quantity < selectedTicket.available && setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            
            {selectedTicket && (
              <div className="booking-summary">
                <div className="summary-row">
                  <span>Price per ticket:</span>
                  <span>₹{selectedTicket.price.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Quantity:</span>
                  <span>{quantity}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>₹{(selectedTicket.price * quantity).toLocaleString()}</span>
                </div>
              </div>
            )}
            
            <button 
              className="btn btn-primary book-btn"
              disabled={!selectedTicket}
              onClick={handleCheckout}
            >
              {selectedTicket ? 'Proceed to Checkout' : 'Select a Ticket'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetailsPage