
import React from 'react';

interface GuideCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay: number;
}

const GuideCard: React.FC<GuideCardProps> = ({ icon, title, items, delay }) => {
  return (
    <div 
      className="guide-card animate-on-scroll" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4 text-netcore-blue">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const BangkokGuideSection = () => {
  const guideCategories = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "🏯 Attractions",
      items: [
        "Grand Palace & Wat Phra Kaew",
        "Wat Pho (Reclining Buddha)",
        "Chinatown & Flower Market"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
          <path d="M7 2v20"/>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
        </svg>
      ),
      title: "🍜 Street Food & Dining",
      items: [
        "Jay Fai (Michelin star)",
        "Thong Smith Boat Noodles",
        "Or Tor Kor Market"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      title: "🛍️ Shopping",
      items: [
        "Chatuchak Weekend Market",
        "Siam Paragon Mall",
        "Terminal 21 Shopping Center"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 20h12M8 20v-7.5M16 20v-7.5M3 4h18M3 8h18M12 12v8"/>
        </svg>
      ),
      title: "🍸 Nightlife",
      items: [
        "Sky Bar at Lebua",
        "Alfresco 64",
        "BKK Social Club"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leafy-green">
          <path d="M2 22c1.25-1.67 3.67-2 5-2"/>
          <path d="M14 22c-1.25-1.67-3.67-2-5-2"/>
          <path d="M10.67 10a5.2 5.2 0 0 0 3.33-5c0-3.33-2-5-3-5"/>
          <path d="M9.83 14S8 12 8 10c0-4.33 5.33 0 6 5"/>
          <path d="M14 19c-1 0-3-1-3.5-4q-.05-.33-.08-.66"/>
          <path d="M4 15s2 .5 6 .5q.75 0 1.46-.08"/>
          <path d="M13 12a9.1 9.1 0 0 0-1.5-3"/>
        </svg>
      ),
      title: "🌿 Green Escapes",
      items: [
        "Lumpini Park",
        "Bang Krachao (The Green Lung)",
        "Ancient City Park"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6H4V4h16v2ZM20 12H4v-2h16v2ZM20 18H4v-2h16v2Z"/>
        </svg>
      ),
      title: "🚖 Local Tips",
      items: [
        "Use Grab App for taxis",
        "Agree on tuk-tuk fare before rides",
        "Prefer Skytrain/MRT in peak hours"
      ]
    }
  ];

  return (
    <section id="guide" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-netcore-blue text-center mb-4 animate-on-scroll">
          Bangkok Insider Guide
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12 animate-on-scroll">
          Explore the best of Bangkok during your stay with our curated recommendations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideCategories.map((category, index) => (
            <GuideCard
              key={index}
              icon={category.icon}
              title={category.title}
              items={category.items}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BangkokGuideSection;
