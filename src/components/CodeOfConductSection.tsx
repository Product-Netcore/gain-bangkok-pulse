import React from 'react';
import { CheckCircle2, AlertCircle, Info, Phone, Check, X } from 'lucide-react';

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

        {/* Bangkok Guide */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
            🌟 Your Bangkok Guide: What to Know Before You Go 🌟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Things to Do */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Check className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Things to Do</h4>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Cultural Respect",
                    tips: [
                      "Dress modestly at temples",
                      "Remove shoes before entering temples",
                      "Greet with a 'wai' (prayer-like gesture)",
                      "Learn basic Thai greetings"
                    ]
                  },
                  {
                    title: "Smart Transportation",
                    tips: [
                      "Use Grab app for reliable rides",
                      "Take BTS Skytrain for quick city travel",
                      "Keep hotel address in Thai script",
                      "Pre-negotiate tuk-tuk fares"
                    ]
                  },
                  {
                    title: "Food Safety",
                    tips: [
                      "Try street food from busy stalls",
                      "Drink bottled water only",
                      "Enjoy fresh fruits (after washing)",
                      "Specify spice preferences clearly"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <h5 className="text-white font-semibold mb-2">{category.title}</h5>
                    <ul className="space-y-2">
                      {category.tips.map((tip, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Things to Avoid */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <X className="w-6 h-6 text-red-400" />
                <h4 className="text-lg font-semibold text-white">Things to Avoid</h4>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Cultural Sensitivity",
                    tips: [
                      "Don't touch anyone's head",
                      "Don't point feet at people/Buddha images",
                      "Don't disrespect royal family",
                      "Don't wear revealing clothes at temples"
                    ]
                  },
                  {
                    title: "Safety Precautions",
                    tips: [
                      "Don't leave belongings unattended",
                      "Don't walk alone in unfamiliar areas at night",
                      "Don't carry original passport (keep copy)",
                      "Don't accept drinks from strangers"
                    ]
                  },
                  {
                    title: "Common Mistakes",
                    tips: [
                      "Don't drink tap water",
                      "Don't forget to bargain at markets",
                      "Don't miss group meeting times",
                      "Don't ignore weather advisories"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <h5 className="text-white font-semibold mb-2">{category.title}</h5>
                    <ul className="space-y-2">
                      {category.tips.map((tip, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">📞 Emergency Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Manisha Thakore", phone: "9821186031" },
              { name: "Imran Mansuri", phone: "9892044378" },
              { name: "Devendra Thakur", phone: "9870545052" }
            ].map((contact, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-netcore-blue" />
                  <div>
                    <p className="text-white font-medium">{contact.name}</p>
                    <p className="text-gray-300">{contact.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConductSection;
