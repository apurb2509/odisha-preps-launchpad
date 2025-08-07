import { Button } from '@/components/ui/button';
import { Download, Smartphone, Monitor, Apple } from 'lucide-react';

const DownloadSection = () => {
  const downloadLinks = [
    {
      platform: 'Google Play Store',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Get it on',
      url: ' https://play.google.com/store/apps/details?id=co.bran.xbkgg ', // Replace with your actual Play Store URL
      bgColor: 'bg-green-600 hover:bg-green-700',
    },
    {
      platform: 'App Store',
      icon: <Apple className="w-8 h-8" />,
      description: 'Download on the',
      url: 'https://apps.apple.com/in/app/my-coaching-by-appx/id1662307591', // Replace with your actual App Store URL
      bgColor: 'bg-gray-800 hover:bg-gray-900',
    },
    {
      platform: 'Windows',
      icon: <Monitor className="w-8 h-8" />,
      description: 'Available for',
      url: ' https://appx-content-v2.classx.co.in/windows/Odisha_Preps_Setup_0.0.2.exe', // Replace with your actual Windows app URL
      bgColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      platform: 'macOS',
      icon: <Apple className="w-8 h-8" />,
      description: 'Download for',
      url: '#', // Replace with your actual macOS app URL
      bgColor: 'bg-gray-700 hover:bg-gray-800',
    },
  ];

  const handleDownload = (url: string, platform: string) => {
    if (url === '#') {
      // For demo purposes, show an alert. Replace with actual download logic
      alert(`${platform} app download will be available soon!`);
      return;
    }
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Download Our
            <span className="block text-primary">Mobile App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take your OPSC preparation on the go. Access courses, practice tests, 
            and study materials anytime, anywhere with our mobile and desktop apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {downloadLinks.map((link) => (
            <div key={link.platform} className="group">
              <Button
                onClick={() => handleDownload(link.url, link.platform)}
                className={`${link.bgColor} text-white w-full h-20 flex items-center justify-start px-6 space-x-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex-shrink-0">
                  {link.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">{link.description}</div>
                  <div className="text-lg font-semibold">{link.platform}</div>
                </div>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Download Options */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Download className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't find your platform?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly expanding our platform support. 
              Contact us for specific platform requirements or early access.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
              >
                Request Platform
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Support
              </Button>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Offline Access</h4>
            <p className="text-muted-foreground">Download content and study without internet connection</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Cross-Platform Sync</h4>
            <p className="text-muted-foreground">Your progress syncs across all devices seamlessly</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Push Notifications</h4>
            <p className="text-muted-foreground">Stay updated with exam alerts and study reminders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;