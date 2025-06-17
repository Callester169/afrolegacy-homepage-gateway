
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const continents = [
  {
    name: 'North America',
    emoji: '🗽',
    description: 'Stories of resilience, civil rights, and cultural revolution',
    color: 'from-afro-brown to-afro-brown-dark',
    highlights: ['Civil Rights Movement', 'Jazz & Blues', 'Tech Innovation'],
    position: { top: '25%', left: '20%' }
  },
  {
    name: 'South America',
    emoji: '🏛️',
    description: 'Afro-Latin heritage, music, and vibrant communities',
    color: 'from-afro-red to-afro-red-dark',
    highlights: ['Carnival Culture', 'Afro-Brazilian Arts', 'Community Leaders'],
    position: { top: '55%', left: '28%' }
  },
  {
    name: 'Europe',
    emoji: '🏰',
    description: 'Black European history, diaspora communities, and achievements',
    color: 'from-afro-green to-afro-green-dark',
    highlights: ['Historical Figures', 'Modern Diaspora', 'Cultural Exchange'],
    position: { top: '20%', left: '50%' }
  },
  {
    name: 'Africa',
    emoji: '🌍',
    description: 'The motherland - cradle of civilization and rich cultural heritage',
    color: 'from-afro-gold to-afro-gold-dark',
    highlights: ['Ancient Kingdoms', 'Traditional Arts', 'Modern Innovation'],
    position: { top: '45%', left: '52%' }
  },
  {
    name: 'Asia',
    emoji: '🏯',
    description: 'African diaspora in Asia and cross-cultural connections',
    color: 'from-afro-gold-light to-afro-brown',
    highlights: ['Trade Routes', 'Cultural Fusion', 'Modern Communities'],
    position: { top: '30%', left: '75%' }
  },
  {
    name: 'Australia',
    emoji: '🦘',
    description: 'Aboriginal connections and modern Black Australian experiences',
    color: 'from-afro-brown-light to-afro-red',
    highlights: ['Indigenous Relations', 'Migration Stories', 'Community Building'],
    position: { top: '70%', left: '80%' }
  },
  {
    name: 'Antarctica',
    emoji: '🐧',
    description: 'Black researchers and explorers in polar expeditions',
    color: 'from-slate-400 to-slate-600',
    highlights: ['Research Expeditions', 'Scientific Contributions', 'Exploration History'],
    position: { top: '85%', left: '50%' }
  }
];

const MapContinent = () => {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-blue-100 to-blue-200 rounded-2xl overflow-hidden border-4 border-afro-gold shadow-2xl">
      {/* World Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full opacity-20"
          style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
        >
          {/* Simplified world map outlines */}
          <path
            d="M150,200 Q200,180 250,200 L300,220 Q320,240 300,260 L250,280 Q200,270 150,250 Z"
            fill="#8B4513"
            opacity="0.3"
          />
          <path
            d="M200,350 Q250,330 300,350 L320,380 Q300,400 280,390 L200,380 Z"
            fill="#8B4513"
            opacity="0.3"
          />
          <path
            d="M450,150 Q500,130 550,150 L600,180 Q580,200 550,190 L450,180 Z"
            fill="#8B4513"
            opacity="0.3"
          />
          <path
            d="M480,280 Q530,260 580,280 L620,320 Q600,350 570,340 L480,320 Z"
            fill="#8B4513"
            opacity="0.3"
          />
          <path
            d="M700,200 Q750,180 800,200 L850,230 Q830,250 800,240 L700,230 Z"
            fill="#8B4513"
            opacity="0.3"
          />
          <path
            d="M750,420 Q800,400 850,420 L870,450 Q850,470 820,460 L750,450 Z"
            fill="#8B4513"
            opacity="0.3"
          />
          <path
            d="M400,450 Q500,430 600,450 L650,480 Q600,500 500,490 L400,480 Z"
            fill="#8B4513"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Continent Markers */}
      {continents.map((continent, index) => (
        <div
          key={continent.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
          style={{
            top: continent.position.top,
            left: continent.position.left,
            zIndex: hoveredContinent === continent.name ? 20 : 10,
          }}
          onMouseEnter={() => setHoveredContinent(continent.name)}
          onMouseLeave={() => setHoveredContinent(null)}
          onClick={() => setSelectedContinent(selectedContinent === continent.name ? null : continent.name)}
        >
          {/* Continent Pin */}
          <div className={`relative group`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl 
              ${hoveredContinent === continent.name ? 'scale-125 shadow-2xl' : 'scale-100 shadow-lg'}
              bg-gradient-to-br ${continent.color} border-3 border-white transition-all duration-300 animate-bounce`}
              style={{ animationDelay: `${index * 0.2}s`, animationDuration: '2s' }}
            >
              {continent.emoji}
            </div>
            
            {/* Pulsing Ring Effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-afro-gold animate-ping 
              ${hoveredContinent === continent.name ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Continent Name Label */}
          <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 text-center transition-all duration-300
            ${hoveredContinent === continent.name ? 'opacity-100 scale-110' : 'opacity-80 scale-100'}`}>
            <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-afro-black shadow-lg border border-afro-gold">
              {continent.name}
            </span>
          </div>
        </div>
      ))}

      {/* Selected Continent Details Card */}
      {selectedContinent && (
        <div className="absolute bottom-4 left-4 right-4 z-30">
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-afro-gold shadow-2xl animate-fade-in">
            <CardContent className="p-6">
              {(() => {
                const continent = continents.find(c => c.name === selectedContinent);
                if (!continent) return null;
                
                return (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{continent.emoji}</span>
                      <h3 className="text-2xl font-bold text-afro-black">{continent.name}</h3>
                      <button
                        onClick={() => setSelectedContinent(null)}
                        className="ml-auto text-afro-gold hover:text-afro-gold-dark text-xl font-bold"
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-afro-brown mb-4 leading-relaxed">{continent.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {continent.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-afro-green">
                          <span className="w-2 h-2 bg-afro-gold rounded-full mr-2"></span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-afro-gold">
        <h4 className="font-bold text-afro-black mb-2">🗺️ Interactive Map</h4>
        <p className="text-sm text-afro-brown">Click on continent pins to explore</p>
      </div>
    </div>
  );
};

export default MapContinent;
