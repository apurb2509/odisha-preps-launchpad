import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Import the necessary image assets using relative paths
import logo from '../assets/logo.png';
import youtubeIcon from '../assets/youtube-icon.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#');

  // Effect to handle scroll-based header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Free Resources', href: '#free-resources' },
    { name: 'Download App', href: '#download-app' },
    { name: 'About Us', href: '#footer' },
  ];

  // Function to handle smooth scrolling and set active link
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle YouTube link
  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/@odishapreps', '_blank');
  };

  // Function to handle logo click for page reload
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = "/"; // Navigates to home and reloads
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/75 backdrop-blur-xl border-b border-slate-300/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - now clickable for reload */}
          <a href="/" onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer">
            <img src={logo} alt="Odisha Preps Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">
              Odisha Preps
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeLink === item.href ? 'text-yellow-300' : 'text-gray-300 hover:text-yellow-300'
                }`}
              >
                {item.name}
                {/* Underline for active link */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 transform transition-transform duration-300 ${
                    activeLink === item.href ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={handleYoutubeClick}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
              <span>Explore YouTube</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700/50 bg-slate-900/90 rounded-b-lg">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-3 text-center rounded-md transition-colors duration-200 ${
                    activeLink === item.href ? 'text-slate-900 bg-yellow-300' : 'text-gray-300 hover:bg-slate-800'
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <button 
                  onClick={handleYoutubeClick}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 w-full"
                >
                  <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
                  <span>Explore YouTube</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
