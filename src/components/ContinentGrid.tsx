
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const continents = [
  {
    name: 'North America',
    emoji: '🗽',
    description: 'Stories of resilience, civil rights, and cultural revolution',
    color: 'from-afro-brown to-afro-brown-dark',
    highlights: ['Civil Rights Movement', 'Jazz & Blues', 'Tech Innovation']
  },
  {
    name: 'South America',
    emoji: '🏛️',
    description: 'Afro-Latin heritage, music, and vibrant communities',
    color: 'from-afro-red to-afro-red-dark',
    highlights: ['Carnival Culture', 'Afro-Brazilian Arts', 'Community Leaders']
  },
  {
    name: 'Europe',
    emoji: '🏰',
    description: 'Black European history, diaspora communities, and achievements',
    color: 'from-afro-green to-afro-green-dark',
    highlights: ['Historical Figures', 'Modern Diaspora', 'Cultural Exchange']
  },
  {
    name: 'Africa',
    emoji: '🌍',
    description: 'The motherland - cradle of civilization and rich cultural heritage',
    color: 'from-afro-gold to-afro-gold-dark',
    highlights: ['Ancient Kingdoms', 'Traditional Arts', 'Modern Innovation']
  },
  {
    name: 'Asia',
    emoji: '🏯',
    description: 'African diaspora in Asia and cross-cultural connections',
    color: 'from-afro-gold-light to-afro-brown',
    highlights: ['Trade Routes', 'Cultural Fusion', 'Modern Communities']
  },
  {
    name: 'Australia',
    emoji: '🦘',
    description: 'Aboriginal connections and modern Black Australian experiences',
    color: 'from-afro-brown-light to-afro-red',
    highlights: ['Indigenous Relations', 'Migration Stories', 'Community Building']
  },
  {
    name: 'Antarctica',
    emoji: '🐧',
    description: 'Black researchers and explorers in polar expeditions',
    color: 'from-slate-400 to-slate-600',
    highlights: ['Research Expeditions', 'Scientific Contributions', 'Exploration History']
  }
];

const ContinentGrid = () => {
  return (
    <section className="py-20 px-6 bg-afro-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-afro-black mb-4">
            Explore by Continent
          </h2>
          <p className="text-xl text-afro-brown max-w-3xl mx-auto">
            Discover Black heritage, stories, and communities across all seven continents. 
            Click on each continent to explore unique treasures of culture, history, and modern achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {continents.map((continent, index) => (
            <Card 
              key={continent.name}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-afro-gold/20 hover:border-afro-gold overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`h-32 bg-gradient-to-br ${continent.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {continent.emoji}
                  </span>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-afro-black mb-3 group-hover:text-afro-gold transition-colors">
                    {continent.name}
                  </h3>
                  <p className="text-afro-brown text-sm mb-4 leading-relaxed">
                    {continent.description}
                  </p>
                  
                  <div className="space-y-2">
                    {continent.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-xs text-afro-green">
                        <span className="w-2 h-2 bg-afro-gold rounded-full mr-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 bg-afro-gold hover:bg-afro-gold-dark text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 transform group-hover:scale-105">
                    Explore {continent.name}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinentGrid;
