
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CodeOfConductSection = () => {
  const conductPrinciples = [
    "Respect all colleagues, staff, and local culture",
    "Attend sessions on time and fully participate",
    "Avoid any form of misconduct during travel or events",
    "Follow SKO committee guidance and venue rules",
    "Be mindful of cultural norms and practices in Thailand"
  ];

  return (
    <section id="conduct" className="py-20 bg-netcore-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          Code of Conduct
        </h2>
        <p className="text-center max-w-xl mx-auto mb-12 animate-on-scroll">
          For a safe, respectful, and professional experience
        </p>
        
        <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20 max-w-3xl mx-auto animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Guidelines</CardTitle>
            <CardDescription className="text-white/80 text-center">
              All attendees are expected to follow these principles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {conductPrinciples.map((principle, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-3 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 flex-shrink-0 text-netcore-accent" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-6 border-t border-white/20 text-center font-medium animate-on-scroll">
              Stay Safe, Stay Awesome — Let's Make It Epic!
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CodeOfConductSection;
