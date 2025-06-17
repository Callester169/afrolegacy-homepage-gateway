
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const sampleQuestions = [
  "Who was Queen Nzinga?",
  "How can I register a business in Kenya?",
  "Tell me about the Harlem Renaissance",
  "What are investment opportunities in Nigeria?",
  "Explain the significance of Juneteenth",
  "How do I start a business in Ghana?"
];

const AfroAIPreview = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(sampleQuestions[0]);

  return (
    <section className="py-20 px-6 bg-afro-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-afro-black mb-6">
              Meet AfroAI Assistant
            </h2>
            <p className="text-xl text-afro-brown mb-8 leading-relaxed">
              Your intelligent companion for exploring Black heritage, business opportunities, 
              and cultural knowledge. Ask questions and get informed, culturally-aware responses.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-afro-black">Try asking:</h3>
              <div className="grid grid-cols-1 gap-3">
                {sampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`text-left justify-start h-auto p-4 border-2 transition-all duration-300 ${
                      selectedQuestion === question
                        ? 'border-afro-gold bg-afro-gold-light text-afro-black'
                        : 'border-afro-brown-light text-afro-brown hover:border-afro-gold'
                    }`}
                    onClick={() => setSelectedQuestion(question)}
                  >
                    "❓ {question}"
                  </Button>
                ))}
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-afro-green hover:bg-afro-green-dark text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              🤖 Chat With AfroAI
            </Button>
          </div>
          
          <div>
            <Card className="bg-gradient-to-br from-afro-gold to-afro-green border-2 border-afro-gold shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-afro-black rounded-full flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                      <p className="text-afro-brown font-medium mb-2">You asked:</p>
                      <p className="text-afro-black italic">"{selectedQuestion}"</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-afro-cream rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div className="flex-1">
                    <div className="bg-afro-cream rounded-lg p-4 shadow-lg">
                      <p className="text-afro-green font-medium mb-2">AfroAI responds:</p>
                      <p className="text-afro-black leading-relaxed">
                        I'd be happy to provide detailed, culturally-informed answers about Black history, 
                        business opportunities, and heritage. My responses draw from authentic sources and 
                        respect the richness of the African diaspora experience.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfroAIPreview;
