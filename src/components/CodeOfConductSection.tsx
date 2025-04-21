import React from 'react';
import { CheckCircle2, AlertCircle, Info, Phone, Mail } from 'lucide-react';

const CodeOfConductSection = () => {
  return (
    <section id="conduct" className="py-16 md:py-24 bg-[#181426]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Code of Conduct
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            "This isn't just a trip. It's a reflection of who we are. Let's make it safe, professional, and unforgettable — together."
          </p>
        </div>

        {/* Core Purpose */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Core Purpose</h3>
          <p className="text-gray-300">
            To ensure a safe, respectful, and professional experience for all Netcorians traveling to Bangkok, Thailand for the Sales Kick-off (April 24–26, 2025).
          </p>
        </div>

        {/* Golden Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
              title: "Respect Everyone",
              description: "Treat all colleagues, hotel staff, locals, and vendors with dignity and kindness."
            },
            {
              icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
              title: "Attend All Sessions",
              description: "Be punctual. Respect the effort behind every session and the people hosting it."
            },
            {
              icon: <AlertCircle className="w-6 h-6 text-red-400" />,
              title: "Zero Tolerance for Misconduct",
              description: "Any form of misconduct, harassment, or disruptive behavior is unacceptable."
            },
            {
              icon: <Info className="w-6 h-6 text-yellow-400" />,
              title: "Drink Responsibly",
              description: "Enjoy yourself, but not at the cost of safety, decorum, or company representation."
            },
            {
              icon: <Info className="w-6 h-6 text-yellow-400" />,
              title: "Follow Local Laws & Customs",
              description: "You're an ambassador of Netcore — be culturally aware and responsible."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-start space-x-3">
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: "Currency Exchange",
              items: [
                "Carry Thai Baht (THB). Exchange at your home airport or Bangkok airport.",
                "Max $3,000 allowed without customs declaration."
              ]
            },
            {
              title: "Mobile Connectivity",
              items: [
                "Activate international roaming.",
                "Prepaid? Recharge a roaming pack.",
                "Postpaid? Confirm your plan covers international use.",
                "Note: Roaming packs will not be reimbursed."
              ]
            },
            {
              title: "Weather Advisory",
              items: [
                "Bangkok in April = very hot and humid (35–40°C+).",
                "Pack: light, breathable clothes, sunscreen, sunglasses, and stay hydrated."
              ]
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
              <ul className="space-y-2">
                {item.items.map((point, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Guide */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Know Before You Go</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Respect religious spaces — dress modestly",
              "Always agree on tuk-tuk fare before the ride",
              "Avoid tap water — stick to bottled",
              "Check group messages for hotel/transport updates",
              "Use Grab App for local rides"
            ].map((tip, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-300">
                <span className="text-yellow-400">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">In Case of Questions or Issues</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Manisha Thakore", phone: "9821186031" },
              { name: "Imran Mansuri", phone: "9892044378" },
              { name: "Devendra Thakur", phone: "9870545052" }
            ].map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-netcore-blue" />
                <div>
                  <p className="text-white font-medium">{contact.name}</p>
                  <p className="text-gray-300">{contact.phone}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-3">
            <Mail className="w-5 h-5 text-netcore-blue" />
            <a href="mailto:sko-committee@netcorecloud.com" className="text-white hover:text-netcore-blue">
              sko-committee@netcorecloud.com
            </a>
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Final Acknowledgment</h3>
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="acknowledgment"
              className="mt-1 h-5 w-5 rounded border-gray-300 text-netcore-blue focus:ring-netcore-blue"
            />
            <label htmlFor="acknowledgment" className="text-gray-300">
              "I understand the Code of Conduct and commit to following it throughout the duration of the Sales Kick-off."
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConductSection;
