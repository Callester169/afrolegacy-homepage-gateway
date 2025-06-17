
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "AfroLegacy helped me trace my family's journey from Nigeria to Brazil. The connections I discovered changed my life forever.",
    author: "Maria Santos",
    location: "São Paulo, Brazil",
    avatar: "👩🏾"
  },
  {
    quote: "The fintech tools here helped me start my business in Accra. The micro-grant program was exactly what I needed.",
    author: "Kwame Asante",
    location: "Accra, Ghana",
    avatar: "👨🏿"
  },
  {
    quote: "Learning about Black European history through this platform opened my eyes to stories never taught in school.",
    author: "Amara Johnson",
    location: "London, UK",
    avatar: "👩🏿"
  },
  {
    quote: "The AI assistant helped me understand my cultural heritage and connect with distant relatives across continents.",
    author: "Djimon Kebe",
    location: "Dakar, Senegal",
    avatar: "👨🏾"
  },
  {
    quote: "From Harlem to Johannesburg, this platform shows how connected our global Black community truly is.",
    author: "Zara Williams",
    location: "New York, USA",
    avatar: "👩🏽"
  }
];

const CommunityVoices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-afro-cream to-afro-gold-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-afro-black mb-4">
            Community Voices
          </h2>
          <p className="text-xl text-afro-brown max-w-3xl mx-auto">
            Real stories from our global community members who are discovering heritage, 
            building wealth, and connecting across continents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-white border-2 border-afro-gold shadow-2xl transform transition-all duration-500 hover:scale-105">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
                <div className="text-4xl text-afro-gold mb-4">❝</div>
              </div>
              
              <blockquote className="text-lg text-afro-black italic leading-relaxed mb-6 text-center">
                {currentTestimonial.quote}
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-afro-black text-lg">
                  {currentTestimonial.author}
                </div>
                <div className="text-afro-brown">
                  📍 {currentTestimonial.location}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-3xl font-bold text-afro-black mb-8">
              Share Your Story
            </h3>
            
            <div className="space-y-6 mb-8">
              <Card className="bg-afro-green-light border-afro-green">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-afro-black mb-3">
                    📖 Heritage Discovery
                  </h4>
                  <p className="text-afro-brown">
                    Share how you've connected with your roots and discovered family history.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-afro-gold-light border-afro-gold">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-afro-black mb-3">
                    💼 Business Success
                  </h4>
                  <p className="text-afro-brown">
                    Tell us about your entrepreneurial journey and community impact.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-afro-brown-light border-afro-brown">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-afro-black mb-3">
                    🌍 Cultural Connection
                  </h4>
                  <p className="text-afro-brown">
                    Share experiences of connecting across continents and cultures.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-afro-black hover:bg-gray-800 text-afro-gold font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                ✨ Share Your Story
              </Button>
            </div>
          </div>
        </div>
        
        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-afro-gold scale-125' : 'bg-afro-brown opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityVoices;
