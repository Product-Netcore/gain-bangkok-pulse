interface Coordinates {
  lat: number;
  lng: number;
}

export const generateGoogleMapsLink = (coordinates: Coordinates, name: string): string => {
  const baseUrl = 'https://www.google.com/maps/embed/v1/place';
  const query = encodeURIComponent(name);
  return `${baseUrl}?key=AIzaSyAKzuxjJpbSE_U5EqygjhNN83AKKntRASE&q=${query}&center=${coordinates.lat},${coordinates.lng}&zoom=15`;
};

export const generateGoogleMapsDirectionsLink = (coordinates: Coordinates, name: string): string => {
  const baseUrl = 'https://www.google.com/maps/dir//';
  const destination = `${coordinates.lat},${coordinates.lng}`;
  return `${baseUrl}${destination}/${encodeURIComponent(name)}`;
};

// Bangkok attraction coordinates
export const attractionCoordinates: Record<string, Coordinates> = {
  "Grand Palace & Wat Phra Kaew": { lat: 13.7500, lng: 100.4913 },
  "Wat Pho": { lat: 13.7465, lng: 100.4933 },
  "Chinatown (Yaowarat)": { lat: 13.7422, lng: 100.5130 },
  "Pak Klong Talad Flower Market": { lat: 13.7419, lng: 100.4957 },
  "Khlong Toei Market": { lat: 13.7072, lng: 100.5862 },
  "Jay Fai": { lat: 13.7533, lng: 100.5042 },
  "Thong Smith Central Embassy": { lat: 13.7440, lng: 100.5431 },
  "Or Tor Kor Market": { lat: 13.7984, lng: 100.5447 },
  "Lumpini Park": { lat: 13.7318, lng: 100.5416 },
  "Bang Krachao": { lat: 13.6824, lng: 100.5705 },
  "BKK Social Club": { lat: 13.7268, lng: 100.5159 },
  "Sky Bar at Lebua Hotel": { lat: 13.7219, lng: 100.5147 },
  "Alfresco 64": { lat: 13.7245, lng: 100.5289 },
  "Chatuchak Weekend Market": { lat: 13.7999, lng: 100.5502 },
  "Siam Paragon": { lat: 13.7466, lng: 100.5347 }
}; 