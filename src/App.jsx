import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [booking, setBooking] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults, 0 Children',
    room: null,
  });
  const [confirmation, setConfirmation] = useState(null);

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigate = (page) => setCurrentPage(page);

  return (
    <div style={{ minHeight: '100vh', background: '#070c1a', color: '#f1f5f9' }}>
      <Header currentPage={currentPage} navigate={navigate} />

      <main>
        {currentPage === 'home' && (
          <HomePage navigate={navigate} setBooking={setBooking} />
        )}
        {currentPage === 'rooms' && (
          <RoomsPage navigate={navigate} setSelectedRoom={setSelectedRoom} setBooking={setBooking} />
        )}
        {currentPage === 'room-detail' && selectedRoom && (
          <RoomDetailPage
            room={selectedRoom}
            navigate={navigate}
            booking={booking}
            setBooking={setBooking}
          />
        )}
        {currentPage === 'checkout' && (
          <CheckoutPage
            booking={booking}
            navigate={navigate}
            setConfirmation={setConfirmation}
          />
        )}
        {currentPage === 'confirmation' && confirmation && (
          <ConfirmationPage confirmation={confirmation} navigate={navigate} />
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
