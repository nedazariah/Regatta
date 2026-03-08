import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';

const App = () => {
  const [page,         setPage]         = useState('home');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [booking,      setBooking]      = useState({ checkIn: '', checkOut: '', guests: '2 Adults', room: null });
  const [confirmation, setConfirmation] = useState(null);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: '#070c1a', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        input[type=date]::-webkit-calendar-picker-indicator { filter: invert(0.5) sepia(1) saturate(2) hue-rotate(10deg); cursor: pointer; }
        select option { background: #0d1424; color: #e2e8f0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #070c1a; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
        ::-webkit-scrollbar-horizontal { height: 0; }
        @media (max-width: 768px) { input[type=date] { font-size: 12px !important; } }
      `}</style>

      <Header currentPage={page} navigate={navigate} />

      {page === 'home'         && <HomePage         navigate={navigate} setBooking={setBooking} />}
      {page === 'rooms'        && <RoomsPage         navigate={navigate} setSelectedRoom={setSelectedRoom} />}
      {page === 'room-detail'  && selectedRoom && <RoomDetailPage  room={selectedRoom} navigate={navigate} booking={booking} setBooking={setBooking} />}
      {page === 'checkout'     && <CheckoutPage      booking={booking}   navigate={navigate} setConfirmation={setConfirmation} />}
      {page === 'confirmation' && confirmation  && <ConfirmationPage confirmation={confirmation} navigate={navigate} />}

      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
