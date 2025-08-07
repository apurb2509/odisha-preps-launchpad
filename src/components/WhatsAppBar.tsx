import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppBar = () => {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (without + and spaces)
    const phoneNumber = "919876543210"; // Example number
    const message = "Hi! I'm interested in OPSC preparation courses from Odisha Preps.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-green-600 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MessageCircle className="w-6 h-6" />
          <span className="text-lg font-medium">
            Any thing in mind? Chat with us
          </span>
        </div>
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-2"
        >
          Start Chat
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppBar;