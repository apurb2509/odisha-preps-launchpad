import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Test Series', href: '#tests' },
    { name: 'Current Affairs', href: '#news' },
    { name: 'Success Stories', href: '#success' },
    { name: 'Contact', href: '#contact' },
  ];

  const examCategories = [
    { name: 'OCS Prelims', href: '#ocs-prelims' },
    { name: 'OCS Mains', href: '#ocs-mains' },
    { name: 'OPSC AEE', href: '#aee' },
    { name: 'OPSC Medical Officer', href: '#medical' },
    { name: 'OPSC Assistant Professor', href: '#professor' },
    { name: 'Other OPSC Exams', href: '#others' },
  ];

  const resources = [
    { name: 'Study Materials', href: '#materials' },
    { name: 'Previous Papers', href: '#papers' },
    { name: 'Mock Tests', href: '#mocks' },
    { name: 'Video Lectures', href: '#videos' },
    { name: 'Mobile App', href: '#app' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <footer className="bg-hero-bg text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="text-2xl font-bold">Odisha Preps</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner for OPSC examination preparation. We provide comprehensive study materials, 
              expert guidance, and proven strategies to help you succeed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Exam Categories</h3>
            <ul className="space-y-3">
              {examCategories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href} 
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>support@odishapreps.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/70 text-sm">
              © 2024 Odisha Preps. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;