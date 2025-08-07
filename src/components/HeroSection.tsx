import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Send, Award } from 'lucide-react';
import govtEmblem from '@/assets/govt-emblem.png';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "916372611728"; // From your reference image
    const message = "Hi! I'm interested in OPSC preparation courses from Odisha Preps.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+916372611728";
  };

  const handleTelegramClick = () => {
    const telegramUsername = "odishapreps";
    const telegramUrl = `https://t.me/${telegramUsername}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0 bg-pattern-overlay"></div>
        <div className="absolute inset-0">
          {/* Subtle geometric patterns */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-hero-glow/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-32 bg-primary/20 rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-primary/20 rotate-12"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Government Emblem */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <img 
                src={govtEmblem} 
                alt="Government of Odisha Emblem" 
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-glow/20 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Welcome to Odisha Preps
            <span className="block text-2xl md:text-3xl text-transparent bg-gradient-to-r from-primary to-hero-glow bg-clip-text mt-2">
              Odisha's #1 Destination for Civil Services Aspirants!
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            The platform that has become the one stop solution for mastering the evolving demands of 
            the OPSC OCS exam with deep, analytical insights. Backed by supreme content, we're the 
            most comprehensive and affordable platform aiming to transform way to prepare for Odisha 
            civil service examination
          </p>

          {/* Contact Section */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8">
              For Any Enquiry or Doubt, Reach us !!
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white h-16 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Any thing in mind ? Chat with Us</span>
              </Button>

              {/* Phone Button */}
              <Button
                onClick={handlePhoneClick}
                className="bg-blue-600 hover:bg-blue-700 text-white h-16 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold"
              >
                <Phone className="w-6 h-6" />
                <span>Call us Directly (+91 6372611728)</span>
              </Button>

              {/* Telegram Button */}
              <Button
                onClick={handleTelegramClick}
                className="bg-sky-500 hover:bg-sky-600 text-white h-16 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold"
              >
                <Send className="w-6 h-6" />
                <span>Join Telegram Group for Updates</span>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/70">Practice Tests</div>
            </div>
            
            <div className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <div className="text-3xl font-bold text-primary-foreground mb-2">50K+</div>
              <div className="text-primary-foreground/70">Active Students</div>
            </div>
            
            <div className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
              <div className="text-primary-foreground/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;