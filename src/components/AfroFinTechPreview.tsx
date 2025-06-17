
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: '🏢',
    title: 'Business Directory',
    description: 'Discover and connect with Black-owned businesses worldwide'
  },
  {
    icon: '🎓',
    title: 'Micro-Grants & Scholarships',
    description: 'Access funding opportunities for education and entrepreneurship'
  },
  {
    icon: '💳',
    title: 'Digital Wallet',
    description: 'Secure financial transactions and cross-border payments'
  },
  {
    icon: '📚',
    title: 'Financial Literacy',
    description: 'Learn investing, budgeting, and wealth-building strategies'
  }
];

const AfroFinTechPreview = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-afro-black to-afro-brown">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-afro-gold mb-4">
            AfroFinTech Hub
          </h2>
          <p className="text-xl text-afro-cream max-w-3xl mx-auto">
            Empowering Black communities through innovative financial technology, 
            business opportunities, and wealth-building resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-afro-cream border-afro-gold hover:bg-afro-gold-light transition-all duration-300 transform hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-afro-black mb-3">
                  {service.title}
                </h3>
                <p className="text-afro-brown text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-afro-gold hover:bg-afro-gold-dark text-afro-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            💰 Visit AfroFinTech Hub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AfroFinTechPreview;
