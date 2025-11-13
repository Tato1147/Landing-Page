import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-section">
            <span className="logo-text">PRPL Desa</span>
          </div>
          
          <div className="desktop-menu">
            <a href="#beranda">Beranda</a>
            <a href="#layanan">Layanan</a>
            <a href="#tentang">Tentang</a>
            <a href="#kontak">Kontak</a>
            <button className="btn-portal">Log In</button>
            <button className="btn-layanan">Sign Up</button>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="menu-icon">
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#beranda">Beranda</a>
          <a href="#layanan">Layanan</a>
          <a href="#tentang">Tentang</a>
          <a href="#kontak">Kontak</a>
          <button className="btn-portal">Log In</button>
          <button className="btn-layanan">Sign Up</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;