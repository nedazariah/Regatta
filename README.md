# Regatta Stay – Luxury Hotel Booking Website

A fully functional React hotel booking website with 5 pages:

- **Home** – Hero section, experience cards, stats
- **Rooms & Suites** – Filterable room grid
- **Room Detail** – Gallery, amenities, booking sidebar
- **Checkout** – Payment form with validation
- **Booking Confirmed** – Receipt + concierge section

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

The app opens at **http://localhost:3000**

## Project Structure

```
src/
├── App.jsx                  # Root component + page router
├── index.js                 # React entry point
├── components/
│   ├── Header.jsx           # Persistent top nav
│   ├── Footer.jsx           # Persistent footer
│   ├── Icon.jsx             # SVG icon library
│   └── Stars.jsx            # Star rating component
├── pages/
│   ├── HomePage.jsx
│   ├── RoomsPage.jsx
│   ├── RoomDetailPage.jsx
│   ├── CheckoutPage.jsx
│   └── ConfirmationPage.jsx
└── data/
    └── rooms.js             # ← Swap this with your API/DB calls
public/
├── index.html
└── logo.png                 # Hotel logo
```

## Connecting to a Database

All room data lives in `src/data/rooms.js`. To use dynamic data:

```js
// In any page component, replace the static import with:
const [rooms, setRooms] = useState([]);

useEffect(() => {
  fetch('/api/rooms')
    .then(r => r.json())
    .then(setRooms);
}, []);
```

The component structure is already built to accept dynamic arrays — no other changes needed.

## Tech Stack

- React 18
- No external UI libraries (pure inline styles)
- Google Fonts: Playfair Display + Inter
- Images: Unsplash (swap with your own)
