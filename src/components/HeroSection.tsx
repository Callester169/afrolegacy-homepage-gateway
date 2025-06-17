
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-afro-gold via-afro-brown to-afro-green overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 afro-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-afro-gold rounded-full opacity-20 animate-pulse-gold"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-afro-cream rounded-full opacity-30 animate-pulse-gold delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-afro-red rounded-full opacity-20 animate-bounce"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Unifying Black Stories,
          <br />
          <span className="text-afro-gold">Wealth & Wisdom</span>
          <br />
          Across Continents
        </h1>
        
        <p className="text-xl md:text-2xl text-afro-cream mb-10 max-w-3xl mx-auto animate-slide-in-left">
          Explore history, empower communities, and unlock global Black excellence through heritage, fintech, and AI-powered tools.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-afro-gold hover:bg-afro-gold-dark text-afro-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            🌍 Explore by Continent
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-afro-cream text-afro-cream hover:bg-afro-cream hover:text-afro-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            🤖 Ask AfroAI
          </Button>
          
          <Button 
            size="lg" 
            className="bg-afro-green hover:bg-afro-green-dark text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            📱 Download App - Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
