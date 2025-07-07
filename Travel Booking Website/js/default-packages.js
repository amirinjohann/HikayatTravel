// Default travel packages for Hikayat Travels
const defaultPackages = [
  {
    id: 1,
    title: "Hanoi Explorer",
    description: "Discover the vibrant culture and history of Hanoi, Vietnam's capital city.",
    duration: 5,
    price: 1800,
    availability: "available",
    location: "Hanoi, Vietnam",
    highlights: "Old Quarter, Hoan Kiem Lake, Street Food, Temples",
    image: "images/hanoi.jpg",
    createdAt: new Date().toISOString(),
    rating: 3.9
  },
  {
    id: 2,
    title: "Bangkok Adventure",
    description: "Experience the bustling city life, temples, and markets of Bangkok.",
    duration: 4,
    price: 1600,
    availability: "available",
    location: "Bangkok, Thailand",
    highlights: "Grand Palace, Floating Market, Nightlife, Street Food",
    image: "images/bangkok.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Istanbul Explorer",
    description: "Discover the rich history and vibrant culture of Istanbul, the city that bridges Europe and Asia.",
    duration: 7,
    price: 4200,
    availability: "available",
    location: "Istanbul, Turkey",
    highlights: "Hagia Sophia, Blue Mosque, Grand Bazaar, Bosphorus Cruise",
    image: "images/istanbul.jpg",
    createdAt: new Date().toISOString(),
    rating: 3.2
  },
  {
    id: 4,
    title: "Paris Romance",
    description: "Enjoy the city of lights, love, and art in beautiful Paris.",
    duration: 5,
    price: 7500,
    availability: "available",
    location: "Paris, France",
    highlights: "Eiffel Tower, Louvre, Seine River, Cafés",
    image: "images/paris.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    title: "Hanoi Heritage",
    description: "Experience the charm of Vietnam's capital with its centuries-old architecture and rich culture.",
    duration: 5,
    price: 2100,
    availability: "available",
    location: "Hanoi, Vietnam",
    highlights: "Old Quarter, Hoan Kiem Lake, Temple of Literature, Street Food",
    image: "images/hanoi.jpg",
    createdAt: new Date().toISOString(),
    rating: 3.9
  },
  {
    id: 6,
    title: "Dubai Luxury",
    description: "Indulge in luxury shopping, modern architecture, and desert adventures in Dubai.",
    duration: 4,
    price: 3500,
    availability: "available",
    location: "Dubai, UAE",
    highlights: "Burj Khalifa, Desert Safari, Shopping Malls, Beaches",
    image: "images/dubai.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 7,
    title: "Jakarta City Break",
    description: "Experience the vibrant city life and culture of Jakarta.",
    duration: 3,
    price: 1400,
    availability: "available",
    location: "Jakarta, Indonesia",
    highlights: "National Monument, Old Town, Shopping, Cuisine",
    image: "images/jakarta.jpg",
    createdAt: new Date().toISOString(),
    rating: 2.9
  },
  {
    id: 8,
    title: "Umrah Pilgrimage",
    description: "A spiritual journey to the holy cities of Mecca and Medina.",
    duration: 10,
    price: 5000,
    availability: "available",
    location: "Mecca & Medina, Saudi Arabia",
    highlights: "Masjid al-Haram, Masjid an-Nabawi, Religious Sites",
    image: "images/umrah.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 9,
    title: "Bali Paradise",
    description: "Relax on the beaches and explore the culture of Bali.",
    duration: 6,
    price: 3200,
    availability: "available",
    location: "Bali, Indonesia",
    highlights: "Beaches, Temples, Rice Terraces, Waterfalls",
    image: "images/bali.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 10,
    title: "Tokyo City Tour",
    description: "Explore the vibrant city of Tokyo with its mix of modern and traditional elements.",
    duration: 5,
    price: 4000,
    availability: "available",
    location: "Tokyo, Japan",
    highlights: "Tokyo Tower, Senso-ji Temple, Shibuya Crossing, Shinjuku Gyoen",
    image: "images/tokyo.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 11,
    title: "Osaka Food & Culture Tour",
    description: "Immerse yourself in Osaka's vibrant food scene and rich cultural heritage.",
    duration: 4,
    price: 4300,
    availability: "available",
    location: "Osaka, Japan",
    highlights: "Dotonbori Food Street, Osaka Castle, Universal Studios Japan, Kuromon Market",
    image: "images/osaka.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 12,
    title: "Hokkaido Winter Wonderland",
    description: "Experience the magical winter landscapes and hot springs of Japan's northern island.",
    duration: 7,
    price: 5600,
    availability: "available",
    location: "Hokkaido, Japan",
    highlights: "Sapporo Snow Festival, Niseko Ski Resort, Noboribetsu Hot Springs, Otaru Canal",
    image: "images/hokkaido.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 13,
    title: "Seoul Adventure",
    description: "Discover the dynamic city of Seoul with its blend of ancient traditions and modern innovations.",
    duration: 4,
    price: 2800,
    availability: "available",
    location: "Seoul, South Korea",
    highlights: "Gyeongbokgung Palace, N Seoul Tower, Myeongdong Shopping, Korean BBQ",
    image: "images/seoul.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 14,
    title: "Busan Coastal Escape",
    description: "Experience the coastal beauty and vibrant culture of Busan, South Korea's second-largest city.",
    duration: 5,
    price: 3100,
    availability: "available",
    location: "Busan, South Korea",
    highlights: "Gamcheon Culture Village, Haedong Yonggungsa Temple, Haeundae Beach, Jagalchi Fish Market",
    image: "images/busan.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 15,
    title: "Jeju Island Paradise",
    description: "Explore the natural wonders and volcanic landscapes of Korea's most beautiful island.",
    duration: 6,
    price: 4000,
    availability: "available",
    location: "Jeju Island, South Korea",
    highlights: "Hallasan Mountain, Seongsan Ilchulbong, Manjanggul Cave, Cheonjeyeon Falls",
    image: "images/jeju.jpg",
    createdAt: new Date().toISOString()
  },
  {
    id: 16,
    title: "London Discovery",
    description: "Visit iconic landmarks and experience the charm of London.",
    duration: 9,
    price: 13000,
    availability: "available",
    location: "London, United Kingdom",
    highlights: "Big Ben, Buckingham Palace, Museums, Parks",
    image: "images/london.jpg",
    createdAt: new Date().toISOString(),
    rating: 4.5
  }
];

// Initialize localStorage with default packages if not already set
function initializeDefaultPackages() {
  if (!localStorage.getItem('packages')) {
    localStorage.setItem('packages', JSON.stringify(defaultPackages));
  }
}

// Call this function on page load (in your main JS file)
// initializeDefaultPackages(); 