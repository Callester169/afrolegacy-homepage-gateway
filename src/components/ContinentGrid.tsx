
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const continents = [
  {
    name: 'Africa',
    emoji: '🌍',
    description: 'The motherland - cradle of civilization and rich cultural heritage',
    color: 'from-afro-gold to-afro-gold-dark',
    highlights: ['Ancient Kingdoms', 'Traditional Arts', 'Modern Innovation']
  },
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
            Each region holds unique treasures of culture, history, and modern achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {continents.map((continent, index) => (
            <Card 
              key={continent.name}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in border-2 border-afro-gold-light overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-32 bg-gradient-to-br ${continent.color} flex items-center justify-center`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {continent.emoji}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-afro-black mb-3 group-hover:text-afro-gold transition-colors">
                    {continent.name}
                  </h3>
                  <p className="text-afro-brown mb-4 leading-relaxed">
                    {continent.description}
                  </p>
                  
                  <div className="space-y-2">
                    {continent.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-afro-green">
                        <span className="w-2 h-2 bg-afro-gold rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
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
