import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle smooth scrolling for hash links
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Event<span className="logo-highlight">Hub</span></span>
        </Link>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/#events" 
              className="nav-link" 
              onClick={() => scrollToSection('events')}
            >
              <i className="fas fa-calendar-alt"></i> Events
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/#categories" 
              className="nav-link" 
              onClick={() => scrollToSection('categories')}
            >
              <i className="fas fa-th-large"></i> Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/#featured" 
              className="nav-link" 
              onClick={() => scrollToSection('featured')}
            >
              <i className="fas fa-star"></i> Featured
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar