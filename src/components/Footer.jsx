import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>EventHub</h3>
          <p>Discover and book amazing events happening around you.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#events" onClick={(e) => {
                e.preventDefault()
                scrollToSection('events')
              }}>Events</Link>
            </li>
            <li>
              <Link to="/#categories" onClick={(e) => {
                e.preventDefault()
                scrollToSection('categories')
              }}>Categories</Link>
            </li>
            <li>
              <Link to="/#featured" onClick={(e) => {
                e.preventDefault()
                scrollToSection('featured')
              }}>Featured</Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><i className="fas fa-envelope"></i> info@eventhub.com</p>
          <p><i className="fas fa-phone"></i> (123) 456-7890</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Event Street, City, Country</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer