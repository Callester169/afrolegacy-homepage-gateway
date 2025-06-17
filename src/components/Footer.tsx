
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-afro-black text-afro-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile App Download Section */}
        <div className="text-center mb-16 p-8 bg-gradient-to-r from-afro-gold to-afro-green rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            📱 Download Our Application Free of Cost
          </h3>
          <p className="text-afro-cream mb-6 text-lg">
            Take AfroLegacy with you everywhere. Access all features offline and stay connected to your heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-afro-black hover:bg-gray-800 text-afro-gold font-semibold px-8 py-4 text-lg"
            >
              📱 Download for Android
            </Button>
            <Button 
              size="lg"
              className="bg-afro-black hover:bg-gray-800 text-afro-gold font-semibold px-8 py-4 text-lg"
            >
              🍎 Download for iOS
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h4 className="text-2xl font-bold text-afro-gold mb-6">AfroLegacy</h4>
            <p className="text-afro-cream leading-relaxed mb-6">
              Unifying Black stories, wealth, and wisdom across all continents. 
              Empowering communities through heritage, technology, and connection.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-afro-black font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-afro-black font-bold">📷</span>
              </div>
              <div className="w-10 h-10 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-afro-black font-bold">🎵</span>
              </div>
              <div className="w-10 h-10 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-afro-black font-bold">📺</span>
              </div>
              <div className="w-10 h-10 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-afro-black font-bold">💼</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-afro-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Privacy Policy', 
                'Terms of Use',
                'Contact Support',
                'Community Guidelines',
                'Accessibility'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-afro-cream hover:text-afro-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xl font-bold text-afro-gold mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                '🌍 All Continents',
                '💰 AfroFinTech Hub',
                '🤖 AfroAI Assistant',
                '🛍️ Global Marketplace',
                '📚 Learning Center',
                '📅 Events Calendar'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-afro-cream hover:text-afro-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold text-afro-gold mb-6">Stay Connected</h4>
            <p className="text-afro-cream mb-4">
              Get weekly updates on heritage discoveries, business opportunities, and community events.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-afro-cream text-afro-black border-afro-gold"
              />
              <Button 
                className="w-full bg-afro-gold hover:bg-afro-gold-dark text-afro-black font-semibold"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-afro-brown pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-afro-cream mb-4 md:mb-0">
              © 2024 AfroLegacy.org. All rights reserved. Empowering global Black excellence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-afro-cream hover:text-afro-gold transition-colors">
                🌍 Global Impact
              </a>
              <a href="#" className="text-afro-cream hover:text-afro-gold transition-colors">
                🤝 Partner With Us
              </a>
              <a href="#" className="text-afro-cream hover:text-afro-gold transition-colors">
                💡 Suggest Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
