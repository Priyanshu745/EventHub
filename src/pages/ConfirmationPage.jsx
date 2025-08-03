import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './ConfirmationPage.css'

const ConfirmationPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const confirmationData = location.state
  
  // If we don't have confirmation data, redirect to home
  useEffect(() => {
    if (!confirmationData) {
      navigate('/')
    }
  }, [confirmationData, navigate])
  
  if (!confirmationData) return null
  
  const { event, ticket, quantity, total, customerName } = confirmationData
  
  // Generate a random confirmation number
  const confirmationNumber = `EH-${Math.floor(100000 + Math.random() * 900000)}`
  
  return (
    <div className="confirmation-page">
      <div className="confirmation-card card">
        <div className="confirmation-header">
          <div className="confirmation-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p>Thank you for your purchase, {customerName}.</p>
        </div>
        
        <div className="confirmation-number">
          Confirmation #: {confirmationNumber}
        </div>
        
        <div className="confirmation-details">
          <h2>Event Details</h2>
          <div className="detail-row">
            <span className="detail-label">Event:</span>
            <span>{event.title}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date:</span>
            <span>{event.date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Time:</span>
            <span>{event.time}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Location:</span>
            <span>{event.location}</span>
          </div>
          
          <h2>Ticket Information</h2>
          <div className="detail-row">
            <span className="detail-label">Ticket Type:</span>
            <span>{ticket.type}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Quantity:</span>
            <span>{quantity}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Price per Ticket:</span>
            <span>₹{ticket.price.toLocaleString()}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Total Amount:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="confirmation-actions">
          <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
          <button className="btn btn-secondary" onClick={() => window.print()}>Print Receipt</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage

// When displaying prices in the ConfirmationPage.jsx, make sure to update the format
// Example of how to display the price with ₹ symbol:
// <span className="price">₹ {location.state.totalPrice.toLocaleString()}</span>
