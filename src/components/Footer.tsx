import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

// NOTE: Ensure these asset paths are correct relative to your component's location.
import logo from '../assets/logo.png';
import whatsappIcon from '../assets/whatsapp.png';
import telegramIcon from '../assets/telegram.png';
import youtubeIcon from '../assets/youtube-icon.png';
import gmailIcon from '../assets/gmail-logo.png';
import phoneIcon from '../assets/phone.png';

// --- Footer Component ---
const Footer = () => {
  const contactLinks = [
    { name: "WhatsApp", icon: whatsappIcon, url: "https://wa.me/916372611728" },
    { name: "Telegram", icon: telegramIcon, url: "https://t.me/odishapreps" },
    { name: "YouTube", icon: youtubeIcon, url: "https://youtube.com/@odishapreps" },
    { name: "Gmail", icon: gmailIcon, url: "mailto:odishaprepsofficial@gmail.com" },
    { name: "Phone", icon: phoneIcon, url: "tel:+916372611728" },
  ];

  return (
    // The background color is now solid to ensure it matches the header exactly.
    <footer id="footer" className="bg-[#0e1628] text-white border-t border-slate-700/50 backdrop-blur-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="Odisha Preps Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">Odisha Preps</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Your trusted partner for OPSC examination preparation. We provide comprehensive study materials, expert guidance, and proven strategies to help you succeed.
          </p>

          {/* Contact & Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {contactLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-yellow-300 hover:border-yellow-300/50 transition-all duration-300 transform hover:scale-110"
                aria-label={link.name}
              >
                <img src={link.icon} alt={link.name} className="w-8 h-8" />
              </a>
            ))}
          </div>
          
          {/* Address and Hours */}
          <div className="text-gray-400 text-sm mb-8">
            <p className="mb-2">Radha Krishna Nagar, 776/2440, Garage Chhack, Bhubaneswar, Odisha 751002</p>
            <div className="flex justify-center items-center space-x-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Odisha Preps. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
            <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
