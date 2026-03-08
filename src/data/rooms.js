export const HOTEL_INFO = {
  name:        'Regatta Suites Kuching',
  company:     'Kozi Square Sdn Bhd',
  address:     'Unit G-31, Ground Floor, LD Legenda, Jalan Tun Abang Haji Openg, 93000 Kuching, Sarawak',
  phone1:      '+60 82-230099',
  phone2:      '+60 82-231999',
  whatsapp:    '+60169200847',
  checkIn:     '14:00',
  checkOut:    '12:00 (Noon)',
  totalRooms:  144,
  description: 'Regatta Suites Kuching is a modern apartment hotel in the heart of Kuching city. Strategically located within walking distance to Sarawak General Hospital, Normah Medical Specialist Centre, and minutes from AEON Mall Kuching Central. Whether you\'re here for work or leisure, our 144 rooms offer a comfortable, home-like experience in Sarawak\'s vibrant capital.',
};

const BASE = 'https://www.regattasuites.com.my/wp-content/uploads/';

export const ROOMS = [
  {
    id: 1, name: 'Kozi Twin Room', currency: 'RM', price: 128,
    category: 'Twin Rooms', badge: 'AVAILABLE', badgeColor: '#2563eb',
    size: '24m² / 255ft²', maxGuests: '2 Adults', totalRooms: 71,
    rating: 4.5, reviews: 182,
    checkIn: '14:00', checkOut: '12:00 (Noon)',
    bedInfo: 'Twin single beds with premium Slumberland mattresses',
    description: 'Comfortable twin room with two single beds, ideal for travelling colleagues or friends.',
    longDescription: 'The Kozi Twin Room offers a fresh and relaxing retreat with two single beds fitted with premium Slumberland mattresses. Located in the urban centre of Kuching, this room is ideal for business travellers and colleagues looking for comfort and convenience.',
    amenities: ['Free Wireless Internet', 'Sharp Aquos LED TV (40")', 'Independent A/C Controls', 'Mini Fridge', 'Safe Deposit Box', 'Cable TV', 'Electric Water Boiler', 'Non-Smoking Room'],
    images: [`${BASE}2024/05/Deluxe-Twin-Bed-2.jpg`, `${BASE}2024/05/Deluxe-Twin-Bed-3.jpg`, `${BASE}2024/05/Deluxe-Twin-Bed.jpg`],
  },
  {
    id: 2, name: 'Kozi Queen Room', currency: 'RM', price: 148,
    category: 'Queen Rooms', badge: 'POPULAR', badgeColor: '#059669',
    size: '24m² / 255ft²', maxGuests: '2 Adults', totalRooms: 71,
    rating: 4.6, reviews: 247,
    checkIn: '14:00', checkOut: '12:00 (Noon)',
    bedInfo: 'Queen-sized Slumberland mattress',
    description: 'Our most popular choice — a cosy queen room with premium sleep comfort.',
    longDescription: 'The Kozi Queen Room is Regatta Suites\' most popular room type, featuring a plush queen-sized Slumberland mattress for an exceptional night\'s rest. Modern interiors and a full suite of amenities make it the perfect base for exploring Kuching.',
    amenities: ['Free Wireless Internet', 'Sharp Aquos LED TV (40")', 'Independent A/C Controls', 'Mini Fridge', 'Safe Deposit Box', 'Cable TV', 'Electric Water Boiler', 'Non-Smoking Room'],
    images: [`${BASE}2024/05/Deluxe-Queen-Bed.jpg`, `${BASE}2024/05/Kozi-Queen-1.jpg`, `${BASE}2024/05/Kozi-Queen-3.jpg`],
  },
  {
    id: 3, name: 'Balcony Suites', currency: 'RM', price: 188,
    category: 'Suites', badge: 'BEST VALUE', badgeColor: '#7c3aed',
    size: '24m² / 255ft²', maxGuests: '3 Adults', totalRooms: null,
    rating: 4.8, reviews: 134,
    checkIn: '14:00', checkOut: '12:00 (Noon)',
    bedInfo: 'King-sized bed + Sofa bed',
    description: 'Private balcony with city views, sofa bed included — ideal for a romantic getaway.',
    longDescription: 'Step out onto your own private balcony and soak in the Kuching city skyline. The Balcony Suite features a king-sized bed with a premium Slumberland mattress, a comfortable sofa bed, and a spacious layout that blends modern design with resort-style comfort.',
    amenities: ['Private Balcony', 'Free Wireless Internet', 'Sharp Aquos LED TV (40")', 'Independent A/C Controls', 'Mini Fridge', 'Sofa Bed', 'Safe Deposit Box', 'Cable TV', 'Electric Water Boiler', 'Non-Smoking Room'],
    images: [`${BASE}2024/05/Balcony-King.jpg`, `${BASE}2024/05/King-Bed-6.jpg`, `${BASE}2024/05/King-Bed-3.jpg`],
    note: 'City view subject to floor and availability.',
  },
  {
    id: 4, name: 'Rentap Family Room', currency: 'RM', price: 238,
    category: 'Family Rooms', badge: 'FAMILY', badgeColor: '#d97706',
    size: '24m² / 255ft²', maxGuests: '6 Adults', totalRooms: 24,
    rating: 4.9, reviews: 98,
    checkIn: '14:00', checkOut: '12:00 (Noon)',
    bedInfo: 'Fun bunk bed with slide + additional beds',
    description: 'Kids will love the bunk bed with slide! Themed after the legendary Sarawak warrior Rentap.',
    longDescription: 'Named after the legendary Iban warrior Rentap, this one-of-a-kind family suite is Kuching\'s most unique hotel room. The fun bunk bed with slide makes it a hit with kids, while parents enjoy all the comforts of a modern hotel room. Accommodates up to 6 guests.',
    amenities: ['Fun Bunk Bed with Slide', 'Free Wireless Internet', 'Sharp Aquos LED TV (40")', 'Independent A/C Controls', 'Mini Fridge', 'Safe Deposit Box', 'Cable TV', 'Electric Water Boiler', 'Non-Smoking Room'],
    images: [`${BASE}2024/05/Rentap-Family-Room.jpg`, `${BASE}2024/05/Rentap-Family-Room-2.jpg`, `${BASE}2024/05/Rentap-Family-Room-4.jpg`],
  },
];

export const EXPERIENCES = [
  {
    id: 1, category: 'POOL', title: 'Infinity Pool', description: 'Take a dip in our rooftop infinity pool overlooking the Kuching skyline. Open daily for all hotel guests.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
  },
  {
    id: 2, category: 'FITNESS', title: 'Sky Gym', description: 'Stay fit with panoramic city views at our modern sky gym, equipped with cardio machines and free weights.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    id: 3, category: 'DINING', title: 'Tabas', description: 'Chill out at Tabas Lounge by Regatta Suites with cozy vibe.',
    image: 'https://scontent.fkch2-1.fna.fbcdn.net/v/t39.30808-6/480515649_1060633199412399_6521182119698362404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=_R5ARJPgfk0Q7kNvwFEgDjN&_nc_oc=AdkPbPH5jn18d8AAS0Tyf5iYcfzEN2sgfWERyeXWK0pGycNfeN0e0hCZp1tD8wxNj3K6Ggv64lOZxDjHj90PMlMU&_nc_zt=23&_nc_ht=scontent.fkch2-1.fna&_nc_gid=iYUoFHHgG7eiRuQhmAdqjA&_nc_ss=8&oh=00_AfygpitD4WvJNc3fZMF_crHnfCYK3UjbPQpmBlHLoL0ioQ&oe=69B3A8BC',
  },
];
