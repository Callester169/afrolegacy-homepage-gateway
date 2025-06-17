
import React from 'react';
import MapContinent from './MapContinent';

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
        
        <MapContinent />
      </div>
    </section>
  );
};

export default ContinentGrid;
