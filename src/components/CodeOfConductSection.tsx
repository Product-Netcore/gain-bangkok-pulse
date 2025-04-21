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
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Check className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Things to Do</h4>
              </div>
              {[
                {
                  icon: "🏢",
                  title: "Represent Netcore Positively",
                  description: "Be a proud ambassador of our brand—your actions reflect all of us."
                },
                {
                  icon: "👔👗",
                  title: "Dress Appropriately",
                  description: "Smart casual is the way to go—look sharp, feel sharp."
                },
                {
                  icon: "🙏😊",
                  title: "Be Polite and Respectful",
                  description: "Treat colleagues, partners, and locals with kindness and respect."
                },
                {
                  icon: "⏰🪪",
                  title: "Be Punctual and Wear Your Badge",
                  description: "Time matters—arrive on time and always wear your ID with pride."
                },
                {
                  icon: "📝📅",
                  title: "Attend All Planned Sessions",
                  description: "Every session counts—be present, engaged, and curious."
                },
                {
                  icon: "🏨📍",
                  title: "Carry a Hotel Card or Google Maps Pin",
                  description: "In case of language barriers with drivers, showing the hotel info helps."
                },
                {
                  icon: "🍷✔️",
                  title: "Drink Responsibly in Designated Venues",
                  description: "If you choose to drink, do so responsibly and only where permitted."
                },
                {
                  icon: "🛏️🧹",
                  title: "Treat Hotel Property with Care",
                  description: "Respect your space—handle hotel property like it's your own."
                },
                {
                  icon: "💧🌞",
                  title: "Stay Hydrated and Use Sunscreen",
                  description: "Bangkok can be humid and hot—stay cool and comfortable."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl" role="img" aria-label={item.title}>{item.icon}</span>
                    <div>
                      <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Things to Avoid */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <X className="w-6 h-6 text-red-400" />
                <h4 className="text-lg font-semibold text-white">Things to Avoid</h4>
              </div>
              {[
                {
                  icon: "🛑🤐",
                  title: "Avoid Offensive or Discriminatory Behavior",
                  description: "Inclusion is our core—keep your words and actions considerate."
                },
                {
                  icon: "🍻🚫",
                  title: "Misconduct Due to Intoxication Won't Be Tolerated",
                  description: "Stay in control—intoxication is never an excuse for poor behavior."
                },
                {
                  icon: "🧱💸",
                  title: "Any Damages Are the Individual Responsibility",
                  description: "You break it, you fix it—personal accountability applies."
                },
                {
                  icon: "🔇🏨",
                  title: "Avoid Excessive Noise in Your Hotel",
                  description: "Keep it down—let's be good neighbors to fellow guests."
                },
                {
                  icon: "🚯🚭",
                  title: "Don't Litter or Smoke in Restricted Areas",
                  description: "Fines can be steep. Look for designated areas."
                },
                {
                  icon: "📵📲",
                  title: "Avoid Negative Social Posts",
                  description: "Share the good vibes—skip posts that reflect poorly on anyone."
                },
                {
                  icon: "🤐🔐",
                  title: "Don't Share Confidential Info with Strangers",
                  description: "Keep it tight—confidential info stays within trusted circles."
                },
                {
                  icon: "😡❌",
                  title: "Don't Raise Your Voice or Lose Temper in Public",
                  description: "Losing face is frowned upon—calm communication is preferred."
                },
                {
                  icon: "🏷️💬",
                  title: "Use Event Hashtags Responsibly",
                  description: "Post smart—represent the brand well with every hashtag."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl" role="img" aria-label={item.title}>{item.icon}</span>
                    <div>
                      <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
