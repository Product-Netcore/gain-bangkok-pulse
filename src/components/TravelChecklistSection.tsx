import React from 'react';
import { User, Plug, Sun, Plane, Phone, FileText, Bus } from 'lucide-react';

const TravelChecklistSection = () => {
  const checklistItems = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Identity",
      description: "Carry your Netcore ID + a national ID as backup for emergencies"
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: "Travel Adapter",
      description: "Thailand uses plug types A, B, C, F, and O — carry an adapter"
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Weather",
      description: "Bangkok is hot & humid—pack light, breathable clothing"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Flight Tickets",
      description: "Keep digital or printed copies of your tickets"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Emergency Contact List",
      description: "Save these numbers: Manisha Thakore (9821186031), Imran Mansuri (9892044378), Devendra Thakur (9870545052)"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Passport",
      description: "Must carry a valid passport"
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: "Transportation",
      description: "Netcore SKO committee will manage airport transfers on arrival"
    }
  ];

  return (
    <section id="travel-checklist" className="py-16 md:py-24 bg-[#181426]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🧳 Travel Checklist
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklistItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="text-netcore-blue">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelChecklistSection;
