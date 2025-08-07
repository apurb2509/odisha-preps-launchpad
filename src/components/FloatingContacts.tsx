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
  //   const timer = setTimeout(() => {
  //     if (!hasShownPopup) {
  //       setShowWhatsAppPopup(true);
  //       setHasShownPopup(true);
  //     }
  //   }, 5000);
  //   return () => clearTimeout(timer);
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
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-center items-center animate-pulse transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-9 h-9" />
        </button>
        <button
          onClick={handlePhoneClick}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-center items-center transform hover:scale-110"
          title="Call Us"
        >
          <img src={phoneIcon} alt="Phone" className="w-8 h-8" />
        </button>
        <button
          onClick={handleTelegramClick}
          className="w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-center items-center transform hover:scale-110"
          title="Join on Telegram"
        >
          <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />
        </button>
      </div>

      {/* The WhatsApp Popup has been removed from rendering */}
      {/* {showWhatsAppPopup && ( ...popup code... )} */}
    </>
  );
};

// --- Main Hero Section Component ---
const HeroSection = () => {
    // --- Refs and Animation Logic Commented Out ---
    // const mountRef = useRef(null);
    // useEffect(() => {
    //     if (typeof window === 'undefined') return;
    //     const currentMount = mountRef.current;
    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    //     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //     renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     currentMount.appendChild(renderer.domElement);
    //     camera.position.z = 50;
    //     const particleCount = 5000;
    //     const positions = new Float32Array(particleCount * 3);
    //     const colors = new Float32Array(particleCount * 3);
    //     const color1 = new THREE.Color("#0047AB");
    //     const color3 = new THREE.Color("#87CEEB");
    //     for (let i = 0; i < particleCount; i++) {
    //         positions[i * 3] = (Math.random() - 0.5) * 150;
    //         positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
    //         positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    //         const randomColor = new THREE.Color().lerpColors(color1, color3, Math.random());
    //         colors[i * 3] = randomColor.r;
    //         colors[i * 3 + 1] = randomColor.g;
    //         colors[i * 3 + 2] = randomColor.b;
    //     }
    //     const geometry = new THREE.BufferGeometry();
    //     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    //     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    //     const material = new THREE.PointsMaterial({
    //         size: 0.15,
    //         vertexColors: true,
    //         transparent: true,
    //         opacity: 0.8,
    //         blending: THREE.AdditiveBlending,
    //     });
    //     const particles = new THREE.Points(geometry, material);
    //     scene.add(particles);
    //     const mouse = new THREE.Vector2();
    //     const handleMouseMove = (event) => {
    //         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);
    //     let animationFrameId;
    //     const clock = new THREE.Clock();
    //     const animate = () => {
    //         const elapsedTime = clock.getElapsedTime();
    //         particles.rotation.y = elapsedTime * 0.05;
    //         particles.rotation.x = elapsedTime * 0.02;
    //         camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
    //         camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.05;
    //         camera.lookAt(scene.position);
    //         renderer.render(scene, camera);
    //         animationFrameId = requestAnimationFrame(animate);
    //     };
    //     animate();
    //     const handleResize = () => {
    //         camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
    //         camera.updateProjectionMatrix();
    //         renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    //     };
    //     window.addEventListener('resize', handleResize);
        
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //         window.removeEventListener('mousemove', handleMouseMove);
    //         cancelAnimationFrame(animationFrameId);
    //         if (currentMount && currentMount.contains(renderer.domElement)) {
    //             currentMount.removeChild(renderer.domElement);
    //         }
    //     };
    // }, []);

  // --- Click Handlers Commented Out ---
  // const handleWhatsAppClick = () => { ... };
  // const handlePhoneClick = () => { ... };
  // const handleTelegramClick = () => { ... };

  return (
    <>
      {/* The entire visual section of the Hero is commented out below */}
      {/* <section className="relative min-h-screen text-white overflow-hidden font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div
          ref={mountRef}
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{ backgroundColor: '#020617' }}
        />
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center py-12 md:py-20">
          ... All Hero Section content was here ...
        </div>
      </section> 
      */}
      
      {/* THIS IS NO LONGER NEEDED HERE BECAUSE IT'S CALLED IN YOUR MAIN PAGE (e.g., Index.tsx) */}
      {/* <FloatingContacts /> */}
    </>
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
