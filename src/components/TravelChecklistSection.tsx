
import React from 'react';

const TravelChecklistSection = () => {
  const checklistItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-currency">
          <circle cx="12" cy="12" r="8"/>
          <path d="M8.5 10.5h7"/>
          <path d="M7 14h8"/>
          <path d="M8 7h3.5a3.5 3.5 0 1 1 0 7H8"/>
        </svg>
      ),
      title: "Currency",
      description: "Carry Thai Baht or exchange at airport for better rates"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi">
          <path d="M5 13a10 10 0 0 1 14 0"/>
          <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
          <path d="M2 8.82a15 15 0 0 1 20 0"/>
          <line x1="12" x2="12.01" y1="20" y2="20"/>
        </svg>
      ),
      title: "Mobile & Internet",
      description: "Activate international roaming or get a local SIM at the airport"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thermometer">
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
        </svg>
      ),
      title: "Weather",
      description: "Hot and humid — pack light clothes, sunscreen, and a hat"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-luggage">
          <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"/>
          <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/>
          <path d="M10 20h4"/>
          <circle cx="16" cy="16" r="1"/>
          <circle cx="8" cy="16" r="1"/>
        </svg>
      ),
      title: "Baggage",
      description: "Follow airline weight limits and pack business attire for events"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alarm-clock">
          <circle cx="12" cy="13" r="8"/>
          <path d="M12 9v4l2 2"/>
          <path d="M5 3 2 6"/>
          <path d="m22 6-3-3"/>
          <path d="M6.38 18.7 4 21"/>
          <path d="M17.64 18.67 20 21"/>
        </svg>
      ),
      title: "Emergency Contacts",
      description: "Local emergency: 191 (Police), 1669 (Medical), Group SPOC: +66-XX-XXX-XXXX"
    }
  ];

  return (
    <section id="checklist" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-netcore-blue text-center mb-4 animate-on-scroll">
          Travel Checklist
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12 animate-on-scroll">
          Essential items and information for your trip to Bangkok
        </p>
        
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-6 md:p-10 shadow-md animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklistItems.map((item, index) => (
              <div 
                key={index} 
                className="checkbox-item animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-netcore-blue mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelChecklistSection;
