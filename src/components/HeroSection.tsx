import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { X } from 'lucide-react';

// Import all necessary assets using relative paths
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

// --- Floating Contacts Component (Integrated) ---
const FloatingContacts = () => {
  // State for the popup is no longer needed for rendering, but the logic can remain if you plan to re-enable it.
  // const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  // const [hasShownPopup, setHasShownPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!hasShownPopup) {
  //       setShowWhatsAppPopup(true);
  //       setHasShownPopup(true);
  //     }
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [hasShownPopup]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "916372611728";
    const message = "Hi! I'm interested in OPSC preparation courses from Odisha Preps.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    // setShowWhatsAppPopup(false);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+916372611728";
  };

  const handleTelegramClick = () => {
    const telegramUrl = `https://t.me/odishapreps`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-center items-center animate-pulse"
          title="Chat on WhatsApp"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-9 h-9" />
        </button>
        <button
          onClick={handlePhoneClick}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-center items-center"
          title="Call Us"
        >
          <img src={phoneIcon} alt="Phone" className="w-8 h-8" />
        </button>
        <button
          onClick={handleTelegramClick}
          className="w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-center items-center"
          title="Join on Telegram"
        >
          <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />
        </button>
      </div>

      {/* The WhatsApp Popup has been removed from rendering */}
      {/* {showWhatsAppPopup && (
        <div className="fixed bottom-24 right-6 sm:bottom-6 sm:right-24 z-50 max-w-xs w-full sm:w-auto">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 relative animate-fade-in font-sans">
            <button
              onClick={() => setShowWhatsAppPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-md">Have a Question?</h4>
                <p className="text-sm text-gray-600 my-2">
                  Connect with our academic counselors for guidance on OPSC courses.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
            <div className="absolute bottom-[-8px] right-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white hidden sm:block"></div>
          </div>
        </div>
      )} 
      */}
    </>
  );
};

const HeroSection = () => {
  const mountRef = useRef(null);
  const [showMacOptions, setShowMacOptions] = useState(false);
  const macOsRef = useRef(null); // Ref for the macOS dropdown container

  // Effect to handle clicking outside of the macOS dropdown
  useEffect(() => {
      const handleClickOutside = (event) => {
          if (macOsRef.current && !macOsRef.current.contains(event.target)) {
              setShowMacOptions(false);
          }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [macOsRef]);

  // Effect for Three.js background animation
  useEffect(() => {
      if (typeof window === 'undefined') return;

      const currentMount = mountRef.current;
      if (!currentMount) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);
      camera.position.z = 50;
      const particleCount = 5000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const color1 = new THREE.Color("#0047AB");
      const color3 = new THREE.Color("#87CEEB");
      for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 150;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
          const randomColor = new THREE.Color().lerpColors(color1, color3, Math.random());
          colors[i * 3] = randomColor.r;
          colors[i * 3 + 1] = randomColor.g;
          colors[i * 3 + 2] = randomColor.b;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const material = new THREE.PointsMaterial({
          size: 0.15,
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      const mouse = new THREE.Vector2();
      const handleMouseMove = (event) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);
      let animationFrameId;
      const clock = new THREE.Clock();
      const animate = () => {
          const elapsedTime = clock.getElapsedTime();
          particles.rotation.y = elapsedTime * 0.05;
          particles.rotation.x = elapsedTime * 0.02;
          camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
          camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.05;
          camera.lookAt(scene.position);
          renderer.render(scene, camera);
          animationFrameId = requestAnimationFrame(animate);
      };
      animate();
      const handleResize = () => {
          if (!currentMount) return;
          camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('mousemove', handleMouseMove);
          cancelAnimationFrame(animationFrameId);
          if (currentMount && currentMount.contains(renderer.domElement)) {
              currentMount.removeChild(renderer.domElement);
          }
      };
  }, []);

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
      <section className="relative min-h-screen text-white overflow-hidden font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div
              ref={mountRef}
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{ backgroundColor: '#020617' }}
          />
          
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center py-12 md:py-20">
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mb-8 animate-fade-in">
                  <img
                      src={opscEmblemBack}
                      alt="OPSC Emblem Background"
                      className="absolute w-full h-full mt-4 animate-spin-slow"
                  />
                  <img
                      src={opscEmblem}
                      alt="OPSC Emblem"
                      className="relative w-11/12 h-11/12 mt-14"
                  />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 animate-fade-in tracking-tight">
                  Odisha Preps
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-semibold mb-8 animate-fade-in" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                  Odisha's No. 1 Destination for Civil Services Aspirants!
              </p>

              <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in">
              The platform that has become the one stop solution for mastering the evolving demands of the OPSC OCS exam with deep, analytical insights. Backed by supreme content, we’re the most comprehensive and affordable platform aiming to transform way to prepare for Odisha civil service examination.
              </p>

              <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 sm:p-8 w-full max-w-3xl mb-12 animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
                      Guidance & Support
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button onClick={handleWhatsAppClick} className="w-full bg-green-600/90 hover:bg-green-600 text-white h-16 rounded-xl shadow-lg hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center px-4 space-x-3 text-md font-semibold hover:scale-105 transform">
                          <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 flex-shrink-0" />
                          <span>Chat With Us</span>
                      </button>
                      <button onClick={handlePhoneClick} className="w-full bg-blue-600/90 hover:bg-blue-600 text-white h-16 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center px-4 space-x-3 text-md font-semibold hover:scale-105 transform">
                          <img src={phoneIcon} alt="Phone" className="w-7 h-7 flex-shrink-0" />
                          <span>Direct Call</span>
                      </button>
                      <button onClick={handleTelegramClick} className="w-full bg-sky-500/90 hover:bg-sky-600 text-white h-16 rounded-xl shadow-lg hover:shadow-sky-500/40 transition-all duration-300 flex items-center justify-center px-4 space-x-3 text-md font-semibold hover:scale-105 transform">
                          <img src={telegramIcon} alt="Telegram" className="w-7 h-7 flex-shrink-0" />
                          <span>Join for Updates</span>
                      </button>
                  </div>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 w-full max-w-3xl mb-12 animate-fade-in">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                      Accessible Across All Your Devices
                  </h3>
                  <div className="flex justify-around items-center flex-wrap gap-4">
                      <a href="https://play.google.com/store/apps/details?id=co.bran.xbkgg " target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-center w-20 group cursor-pointer">
                          <img src={androidIcon} alt="Android" className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm text-gray-300 font-medium">Android</span>
                      </a>
                      <a href="https://apps.apple.com/in/app/my-coaching-by-appx/id1662307591" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-center w-20 group cursor-pointer">
                          <img src={iosIcon} alt="iOS" className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm text-gray-300 font-medium">iOS</span>
                      </a>
                      
                      <div ref={macOsRef} className="relative flex flex-col items-center text-center w-20">
                          {/* Clickable Icon to toggle options */}
                          <button
                              onClick={() => setShowMacOptions(!showMacOptions)}
                              className="flex flex-col items-center space-y-2 group cursor-pointer"
                          >
                              <img src={macIcon} alt="Mac" className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
                              <span className="text-sm text-gray-300 font-medium">macOS</span>
                          </button>

                          {/* Conditionally rendered download links */}
                          {showMacOptions && (
                              <div className="absolute top-full mt-2 w-max bg-slate-800 rounded-lg shadow-lg p-2 flex flex-row space-x-2 animate-fade-in z-20">
                                  <a
                                      href="https://appxcontent.kaxa.in/windows/Odisha_Preps-0.0.1-arm64.dmg"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-white bg-slate-700 hover:bg-slate-600 rounded px-3 py-2 transition-colors"
                                  >
                                      Apple Chip
                                  </a>
                                  <a
                                      href="https://appxcontent.kaxa.in/windows/Odisha_Preps-0.0.1.dmg"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-white bg-slate-700 hover:bg-slate-600 rounded px-3 py-2 transition-colors"
                                  >
                                      Intel Chip
                                  </a>
                              </div>
                          )}
                      </div>
                      
                      <a href="https://appx-content-v2.classx.co.in/windows/Odisha_Preps_Setup_0.0.2.exe" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-center w-20 group cursor-pointer">
                          <img src={windowsIcon} alt="Windows" className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm text-gray-300 font-medium">Windows</span>
                      </a>
                  </div>
              </div>

              <div className="flex flex-col items-center animate-fade-in cursor-pointer group" onClick={() => alert('Navigate to Free Resources page!')}>
                  <img src={giftIcon} alt="Free Resources" className="w-24 h-24 md:w-28 md:h-28 mb-2 transform group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      Access Free OPSC Resources
                  </p>
              </div>
          </div>
          
          <FloatingContacts />
      </section>
  );
};

export default HeroSection;

// Add this to your global CSS file (e.g., globals.css)
/*
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
*/
