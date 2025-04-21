import React, { useState, useMemo, useCallback, lazy, Suspense } from 'react';
import { Landmark, Utensils, TreePine, Moon, ShoppingBag, Search, MapPin, Clock, DollarSign, Share2, Bookmark } from 'lucide-react';
import { attractionCoordinates, generateGoogleMapsDirectionsLink } from '@/utils/maps';

// Lazy load the map modal component
const MapModal = lazy(() => import('./MapModal'));

const TopAttractionsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const attractions = useMemo(() => [
    {
      category: "Top Attractions",
      icon: <Landmark className="w-6 h-6" />,
      items: [
        {
          title: "Grand Palace & Wat Phra Kaew",
          description: "Explore Bangkok's most iconic landmarks, showcasing stunning Thai architecture and rich history.",
          duration: "2-3 hours",
          price: "500 THB"
        },
        {
          title: "Wat Pho",
          description: "Home to the famous Reclining Buddha and traditional Thai massage school.",
          duration: "1-2 hours",
          price: "200 THB"
        },
        {
          title: "Chinatown (Yaowarat)",
          description: "A bustling area filled with street food stalls, gold shops, and vibrant markets.",
          duration: "2-3 hours",
          price: "Free"
        },
        {
          title: "Pak Klong Talad Flower Market",
          description: "Visit early in the morning to see a colorful array of fresh flowers.",
          duration: "1 hour",
          price: "Free"
        },
        {
          title: "Khlong Toei Market",
          description: "Experience Bangkok's largest fresh market, offering a variety of local produce and street food.",
          duration: "1-2 hours",
          price: "Free"
        }
      ]
    },
    {
      category: "Dining & Street Food",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        {
          title: "Jay Fai",
          description: "A Michelin-starred street food vendor known for her crab omelets and drunken noodles.",
          duration: "1-2 hours",
          price: "1000+ THB"
        },
        {
          title: "Thong Smith Central Embassy",
          description: "Famous for its Thai boat noodles.",
          duration: "1 hour",
          price: "200-300 THB"
        },
        {
          title: "Or Tor Kor Market",
          description: "Offers a diverse array of food vendors, perfect for sampling local delicacies.",
          duration: "1-2 hours",
          price: "100-200 THB"
        }
      ]
    },
    {
      category: "Green Spaces",
      icon: <TreePine className="w-6 h-6" />,
      items: [
        {
          title: "Lumpini Park",
          description: "A serene escape in the city, ideal for morning walks or paddle boating.",
          duration: "1-2 hours",
          price: "Free"
        },
        {
          title: "Bang Krachao (The Green Lung)",
          description: "A vast green space perfect for cycling and enjoying nature.",
          duration: "3-4 hours",
          price: "Free"
        }
      ]
    },
    {
      category: "Nightlife & Bars",
      icon: <Moon className="w-6 h-6" />,
      items: [
        {
          title: "BKK Social Club",
          description: "An award-winning bar offering creative cocktails and a chic ambiance.",
          duration: "2-3 hours",
          price: "500+ THB"
        },
        {
          title: "Sky Bar at Lebua Hotel",
          description: "One of the world's highest rooftop bars, offering panoramic views of the city.",
          duration: "2-3 hours",
          price: "1000+ THB"
        },
        {
          title: "Alfresco 64",
          description: "The world's tallest open-air whisky bar, located at the Banyan Tree Hotel.",
          duration: "2-3 hours",
          price: "1000+ THB"
        }
      ]
    },
    {
      category: "Shopping",
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        {
          title: "Chatuchak Weekend Market",
          description: "A massive market with thousands of stalls selling everything from clothes to antiques.",
          duration: "3-4 hours",
          price: "Free entry"
        },
        {
          title: "Siam Paragon",
          description: "A luxury shopping mall offering high-end brands and a vast food court.",
          duration: "2-3 hours",
          price: "Free entry"
        }
      ]
    }
  ], []);

  const toggleSave = useCallback((title: string) => {
    setSavedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  }, []);

  const filteredAttractions = useMemo(() => 
    attractions.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.items.length > 0)
  , [attractions, searchQuery]);

  const handleLocationClick = useCallback((title: string) => {
    if (attractionCoordinates[title]) {
      window.open(generateGoogleMapsDirectionsLink(attractionCoordinates[title], title), '_blank');
    }
  }, []);

  return (
    <section id="top-attractions" className="py-12 md:py-16 bg-[#181426]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            🌟 Top Attractions in Bangkok 🌟
          </h2>
          <p className="text-gray-300 text-lg mb-6">Discover the best places to visit during your stay</p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search attractions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-netcore-blue"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="text-netcore-blue mr-2">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white flex-grow">{item.title}</h4>
                      <button
                        onClick={() => toggleSave(item.title)}
                        className="text-gray-400 hover:text-netcore-blue transition-colors"
                        aria-label={savedItems.includes(item.title) ? "Remove from saved" : "Save location"}
                      >
                        <Bookmark 
                          className="w-5 h-5" 
                          fill={savedItems.includes(item.title) ? "currentColor" : "none"}
                        />
                      </button>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <button
                        onClick={() => handleLocationClick(item.title)}
                        className="flex items-center space-x-1 hover:text-netcore-blue transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Directions</span>
                      </button>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Modal */}
      <Suspense fallback={<div>Loading map...</div>}>
        {selectedLocation && (
          <MapModal
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </Suspense>
    </section>
  );
};

export default TopAttractionsSection; 