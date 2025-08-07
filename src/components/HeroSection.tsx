import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const HeroSection = () => {
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
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary-foreground/80 text-sm mb-8 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            #1 Platform for OPSC Preparation
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Master Your
            <span className="block text-transparent bg-gradient-to-r from-primary to-hero-glow bg-clip-text">
              OPSC Journey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Comprehensive preparation platform for Odisha Public Service Commission exams. 
            Join thousands of successful candidates who trusted Odisha Preps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary-foreground hover:bg-primary/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Explore Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <div className="flex items-center justify-center mb-3">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/70">Practice Tests</div>
            </div>
            
            <div className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">50K+</div>
              <div className="text-primary-foreground/70">Active Students</div>
            </div>
            
            <div className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-primary" />
              </div>
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