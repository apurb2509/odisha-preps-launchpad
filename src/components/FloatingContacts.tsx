import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContacts = () => {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Show WhatsApp popup after 5 seconds if not shown before
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowWhatsAppPopup(true);
        setHasShownPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasShownPopup]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "916372611728"; // Updated to match your number
    const message = "Hi! I'm interested in OPSC preparation courses from Odisha Preps.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppPopup(false);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+916372611728"; // Updated to match your number
  };

  const handleTelegramClick = () => {
    const telegramUsername = "odishapreps"; // Replace with your Telegram username
    const telegramUrl = `https://t.me/${telegramUsername}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <>
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>

        {/* Phone Button */}
        <Button
          onClick={handlePhoneClick}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
        </Button>

        {/* Telegram Button */}
        <Button
          onClick={handleTelegramClick}
          className="w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          title="Chat on Telegram"
        >
          <Send className="w-6 h-6" />
        </Button>
      </div>

      {/* WhatsApp Popup Message */}
      {showWhatsAppPopup && (
        <div className="fixed bottom-32 right-6 z-50 max-w-sm">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 relative animate-fade-in">
            <button
              onClick={() => setShowWhatsAppPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Have questions about our OPSC courses? Chat with our experts now!
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2"
                >
                  Start WhatsApp Chat
                </Button>
              </div>
            </div>
            
            {/* Chat bubble tail */}
            <div className="absolute bottom-0 right-8 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContacts;