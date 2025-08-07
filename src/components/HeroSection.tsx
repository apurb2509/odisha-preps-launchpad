import React from 'react';

// Import all the necessary assets from your 'src/assets' folder using relative paths
import opscEmblem from '../assets/opsc-emblem.png';
import opscEmblemBack from '../assets/opsc-emblem-back.png';
import giftIcon from '../assets/gift-icon.png';
import androidIcon from '../assets/android-icon.png';
import iosIcon from '../assets/ios-icon.png';
import windowsIcon from '../assets/windows-icon.png';
import macIcon from '../assets/mac-icon.png';
import whatsappIcon from '../assets/whatsapp.png';
import phoneIcon from '../assets/phone.png';
import telegramIcon from '../assets/telegram.png';

const HeroSection = () => {
  // --- CLICK HANDLERS (No changes here) ---
  const handleWhatsAppClick = () => {
    const phoneNumber = "916372611728";
    const message = "Hi! I'm interested in OPSC preparation courses from Odisha Preps.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+916372611728";
  };

  const handleTelegramClick = () => {
    const telegramUrl = `https://t.me/odishapreps`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <section 
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden py-12 md:py-20"
      style={{ backgroundColor: '#0a192f' }} 
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

      {/* --- Content Container --- */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

        {/* 1. Enlarged Layered OPSC Emblem (Logo Removed) */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mb-12 mt-14 animate-fade-in">
          <img 
            src={opscEmblemBack} 
            alt="OPSC Emblem Background" 
            className="absolute w-full h-full animate-spin-slow" // Spinning background
          />
          <img 
            src={opscEmblem} 
            alt="OPSC Emblem" 
            className="relative w-10/11 h-10/11 mt-6" // Emblem on top
          />
        </div>

        {/* 2. Main Heading & Subheading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 animate-fade-in">
          Welcome to Odisha Preps
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-semibold mb-6 animate-fade-in">
          Odisha's #1 Destination for Civil Services Aspirants!
        </p>

        {/* 3. Description */}
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in">
          The platform that has become the one stop solution for mastering the evolving demands of the OPSC OCS exam with deep, analytical insights. Backed by supreme content, we’re the most comprehensive and affordable platform aiming to transform way to prepare for Odisha civil service examination.
        </p>

        {/* 4. Contact Section */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-2xl mb-10 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-6">
            For Any Enquiry or Doubt, Reach us !!
          </h2>
          
          <div className="flex flex-col space-y-4">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white h-14 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-start px-4 sm:px-6 space-x-4 text-base sm:text-lg font-medium"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 flex-shrink-0" />
              <span className="truncate">Anything in mind? Chat with Us</span>
            </button>

            {/* Phone Button */}
            <button
              onClick={handlePhoneClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-start px-4 sm:px-6 space-x-4 text-base sm:text-lg font-medium"
            >
              <img src={phoneIcon} alt="Phone" className="w-8 h-8 flex-shrink-0" />
              <span className="truncate">Call us Directly (+91 6372611728)</span>
            </button>

            {/* Telegram Button */}
            <button
              onClick={handleTelegramClick}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white h-14 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-all duration-300 flex items-center justify-start px-4 sm:px-6 space-x-4 text-base sm:text-lg font-medium"
            >
              <img src={telegramIcon} alt="Telegram" className="w-8 h-8 flex-shrink-0" />
              <span className="truncate">Join Telegram Group for Updates</span>
            </button>
          </div>
        </div>

        {/* 5. Platform Availability Section */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 w-full max-w-2xl mb-10 animate-fade-in">
          <h3 className="text-lg md:text-xl font-bold text-white mb-6">
            We are available on all Platforms
          </h3>
          <div className="flex justify-around items-center flex-wrap gap-4">
            {/* Android */}
            <div className="flex flex-col items-center space-y-2 text-center w-16">
              <img src={androidIcon} alt="Android" className="w-12 h-12" />
              <span className="text-sm text-gray-300">Android</span>
            </div>
            {/* iOS */}
            <div className="flex flex-col items-center space-y-2 text-center w-16">
              <img src={iosIcon} alt="iOS" className="w-12 h-12" />
              <span className="text-sm text-gray-300">iOS</span>
            </div>
            {/* Mac (Resized) */}
            <div className="flex flex-col items-center space-y-2 text-center w-16">
              <img src={macIcon} alt="Mac" className="w-14 h-14" />
              <span className="text-sm text-gray-300">Mac</span>
            </div>
            {/* Windows */}
            <div className="flex flex-col items-center space-y-2 text-center w-16">
              <img src={windowsIcon} alt="Windows" className="w-12 h-12" />
              <span className="text-sm text-gray-300">Windows</span>
            </div>
          </div>
        </div>

        {/* 6. Free Resources Section */}
        <div 
          className="flex flex-col items-center animate-fade-in cursor-pointer group" 
          onClick={() => alert('Navigate to Free Resources page!')}
        >
          <img src={giftIcon} alt="Free Resources" className="w-20 h-20 md:w-24 md:h-24 mb-2 transform group-hover:scale-110 transition-transform duration-300" />
          <p className="text-lg font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
            Download Free OPSC Resources
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

// You might want to add this to your global CSS file (e.g., globals.css) 
// for the spinning animation and fade-in effect.
/*
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
*/
