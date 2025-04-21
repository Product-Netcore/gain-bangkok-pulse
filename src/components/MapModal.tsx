import React from 'react';
import { X } from 'lucide-react';
import { attractionCoordinates, generateGoogleMapsLink } from '@/utils/maps';

interface MapModalProps {
  location: string;
  onClose: () => void;
}

const MapModal: React.FC<MapModalProps> = ({ location, onClose }) => {
  const coordinates = attractionCoordinates[location];
  if (!coordinates) return null;

  const mapUrl = generateGoogleMapsLink(coordinates, location);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-[#181426] rounded-2xl w-full max-w-4xl overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h3 className="text-xl font-semibold text-white">{location}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={mapUrl}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing location of ${location}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MapModal; 