
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ContinentGrid from '@/components/ContinentGrid';
import AfroFinTechPreview from '@/components/AfroFinTechPreview';
import AfroAIPreview from '@/components/AfroAIPreview';
import GlobalShopPreview from '@/components/GlobalShopPreview';
import EventsLearning from '@/components/EventsLearning';
import CommunityVoices from '@/components/CommunityVoices';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContinentGrid />
      <AfroFinTechPreview />
      <AfroAIPreview />
      <GlobalShopPreview />
      <EventsLearning />
      <CommunityVoices />
      <Footer />
    </div>
  );
};

export default Index;
