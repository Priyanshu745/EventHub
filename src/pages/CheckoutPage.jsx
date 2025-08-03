import { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { events } from '../data/events'
import './CheckoutPage.css'

const CheckoutPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  
  // If we have state from navigation, use it; otherwise, try to find the event
  const eventData = location.state?.event || events.find(e => e.id === parseInt(id))
  const ticketData = location.state?.ticket
  const quantityData = location.state?.quantity || 1
  
  // If we don't have the necessary data, redirect to event details
  if (!eventData || !ticketData) {
    navigate(`/event/${id}`)
    return null
  }
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.cardName.trim()) newErrors.cardName = 'Name on card is required'
    
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required'
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits'
    }
    
    if (!formData.expiry.trim()) {
      newErrors.expiry = 'Expiry date is required'
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = 'Expiry date must be in MM/YY format'
    }
    
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required'
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // In a real app, you would process the payment here
      // For this demo, we'll just navigate to the confirmation page
      navigate('/confirmation', {
        state: {
          event: eventData,
          ticket: ticketData,
          quantity: quantityData,
          total: ticketData.price * quantityData,
          customerName: `${formData.firstName} ${formData.lastName}`
        }
      })
    }
  }
  
  const subtotal = ticketData.price * quantityData
  const serviceFee = subtotal * 0.1 // 10% service fee
  const total = subtotal + serviceFee
  
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h2>Payment Information</h2>
              <div className="form-group">
                <label htmlFor="cardName">Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  className={errors.cardName ? 'error' : ''}
                />
                {errors.cardName && <span className="error-message">{errors.cardName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={errors.cardNumber ? 'error' : ''}
                />
                {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                    className={errors.expiry ? 'error' : ''}
                  />
                  {errors.expiry && <span className="error-message">{errors.expiry}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={errors.cvv ? 'error' : ''}
                  />
                  {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => navigate(`/event/${eventData.id}`)}>Back</button>
              <button type="submit" className="btn btn-primary">Complete Purchase</button>
            </div>
          </form>
        </div>
        
        <div className="checkout-summary">
          <div className="summary-card card">
            <h2>Order Summary</h2>
            
            <div className="event-summary">
              <img src={eventData.image} alt={eventData.title} />
              <div className="event-summary-details">
                <h3>{eventData.title}</h3>
                <p><i className="far fa-calendar"></i> {eventData.date}</p>
                <p><i className="far fa-clock"></i> {eventData.time}</p>
                <p><i className="fas fa-map-marker-alt"></i> {eventData.location}</p>
              </div>
            </div>
            
            <div className="ticket-summary">
              <div className="summary-row">
                <span>{ticketData.type} x {quantityData}</span>
                <span>₹{(ticketData.price * quantityData).toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Service Fee</span>
                <span>₹{serviceFee.toLocaleString()}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span className="price">₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage