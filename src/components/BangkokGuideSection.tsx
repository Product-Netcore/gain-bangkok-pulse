import React from 'react';
import { CheckCircle2, XCircle, Building2, Shirt, Smile, Clock, Calendar, MapPin, Wine, Bed, Sun, AlertCircle, Volume2, Trash2, Smartphone, Lock, MessageSquare, Hash } from 'lucide-react';

const BangkokGuideSection = () => {
  const dos = [
    { icon: <Building2 className="w-5 h-5" />, text: "Represent Netcore positively", comment: "Be a proud ambassador—your actions reflect all of us." },
    { icon: <Shirt className="w-5 h-5" />, text: "Dress appropriately", comment: "Smart casual = sharp impression." },
    { icon: <Smile className="w-5 h-5" />, text: "Be polite and respectful", comment: "Kindness goes a long way." },
    { icon: <Clock className="w-5 h-5" />, text: "Be punctual and wear your badge", comment: "Arrive on time and wear your ID proudly." },
    { icon: <Calendar className="w-5 h-5" />, text: "Attend all planned sessions", comment: "Be present, be engaged." },
    { icon: <MapPin className="w-5 h-5" />, text: "Carry hotel card/Google Maps pin", comment: "Handy for navigating language barriers." },
    { icon: <Wine className="w-5 h-5" />, text: "Drink responsibly in permitted venues", comment: "Only where allowed. Stay in control." },
    { icon: <Bed className="w-5 h-5" />, text: "Treat hotel property with care", comment: "Respect the space you stay in." },
    { icon: <Sun className="w-5 h-5" />, text: "Stay hydrated, use sunscreen", comment: "Bangkok is hot—be heat-safe." }
  ];

  const donts = [
    { icon: <AlertCircle className="w-5 h-5" />, text: "Offensive/discriminatory behavior", comment: "Not tolerated—respect always." },
    { icon: <Wine className="w-5 h-5" />, text: "Intoxicated misconduct", comment: "Never an excuse—stay accountable." },
    { icon: <AlertCircle className="w-5 h-5" />, text: "Property damage", comment: "You break it, you fix it." },
    { icon: <Volume2 className="w-5 h-5" />, text: "Excessive hotel noise", comment: "Let's be courteous neighbors." },
    { icon: <Trash2 className="w-5 h-5" />, text: "Littering/smoking in restricted areas", comment: "Check for proper zones." },
    { icon: <Smartphone className="w-5 h-5" />, text: "Negative social posts", comment: "Share positive vibes only." },
    { icon: <Lock className="w-5 h-5" />, text: "Leaking confidential info", comment: "Be mindful of what you share." },
    { icon: <Volume2 className="w-5 h-5" />, text: "Raising voice in public", comment: "Calm communication is key." },
    { icon: <Hash className="w-5 h-5" />, text: "Irresponsible hashtag use", comment: "Post smart, protect brand image." }
  ];

  return (
    <section id="bangkok-guide" className="py-12 md:py-16 bg-[#181426]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            🌟 Your Bangkok Guide: What to Know Before You Go 🌟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's Column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
              Things to Do
            </h3>
            <div className="space-y-3">
              {dos.map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <div className="flex items-start space-x-2">
                    <div className="text-green-400">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-medium">{item.text}</h4>
                      <p className="text-gray-300 text-sm mt-0.5">{item.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts Column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center">
              <XCircle className="w-5 h-5 text-red-400 mr-2" />
              Things to Avoid
            </h3>
            <div className="space-y-3">
              {donts.map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <div className="flex items-start space-x-2">
                    <div className="text-red-400">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-medium">{item.text}</h4>
                      <p className="text-gray-300 text-sm mt-0.5">{item.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BangkokGuideSection;
