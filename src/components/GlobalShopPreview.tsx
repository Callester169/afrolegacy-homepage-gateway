
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const shopItems = [
  {
    continent: 'Africa',
    name: 'Kente Cloth Scarf',
    price: '$45',
    image: '🏺',
    description: 'Traditional Ghanaian handwoven textile'
  },
  {
    continent: 'North America',
    name: 'Jazz History Book',
    price: '$25',
    image: '📚',
    description: 'The story of African American music innovation'
  },
  {
    continent: 'South America',
    name: 'Capoeira Accessories',
    price: '$35',
    image: '🥊',
    description: 'Traditional Brazilian martial arts gear'
  },
  {
    continent: 'Europe',
    name: 'Afro-Caribbean Art',
    price: '$120',
    image: '🎨',
    description: 'Contemporary diaspora artwork from London'
  },
  {
    continent: 'Asia',
    name: 'Fusion Jewelry',
    price: '$65',
    image: '💍',
    description: 'African-inspired designs from Asian artisans'
  },
  {
    continent: 'Australia',
    name: 'Indigenous Collaboration',
    price: '$80',
    image: '🪃',
    description: 'Cross-cultural artistic exchange pieces'
  }
];

const GlobalShopPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shopItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = shopItems[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-afro-green to-afro-gold">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Global Marketplace
          </h2>
          <p className="text-xl text-afro-cream max-w-3xl mx-auto">
            Shop authentic products from Black creators, artisans, and businesses 
            across all continents. Every purchase supports community empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-afro-cream border-2 border-afro-gold shadow-2xl transform transition-all duration-500 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-8xl mb-6 animate-pulse-gold">
                {currentItem.image}
              </div>
              <div className="mb-4">
                <span className="bg-afro-gold text-afro-black px-3 py-1 rounded-full text-sm font-semibold">
                  {currentItem.continent}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-afro-black mb-3">
                {currentItem.name}
              </h3>
              <p className="text-afro-brown mb-4 leading-relaxed">
                {currentItem.description}
              </p>
              <div className="text-3xl font-bold text-afro-green mb-6">
                {currentItem.price}
              </div>
              <Button 
                className="bg-afro-gold hover:bg-afro-gold-dark text-afro-black font-semibold px-6 py-3 transition-all duration-300 transform hover:scale-105"
              >
                🛒 Add to Cart
              </Button>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Featured Categories
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['🎨 Artwork', '👕 Fashion', '📚 Books', '🎵 Music', '🏺 Crafts', '💍 Jewelry'].map((category, index) => (
                <Card key={index} className="bg-afro-cream border-afro-gold hover:bg-afro-gold-light transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-semibold text-afro-black">
                      {category}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-afro-cream hover:bg-white text-afro-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                🌍 Visit Global Marketplace
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalShopPreview;
