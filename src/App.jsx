import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'; // ← NEW imports
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // State that needs to survive across pages stays here, unchanged.
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [booking, setBooking] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults, 0 Children',
    room: null,
  });
  const [confirmation, setConfirmation] = useState(null);

  // Scroll to top on every URL change (was: on every currentPage change)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // ← CHANGED: location.pathname instead of currentPage

  return (
    <div style={{ minHeight: '100vh', background: '#070c1a', color: '#f1f5f9' }}>
      {/* currentPage is now derived from the URL, e.g. '/rooms' → 'rooms' */}
      <Header
        currentPage={location.pathname}
        navigate={navigate}
      />

      <main>
        <Routes>
          <Route path="/"            element={<HomePage navigate={navigate} setBooking={setBooking} />} />
          <Route path="/rooms"       element={<RoomsPage navigate={navigate} setSelectedRoom={setSelectedRoom} setBooking={setBooking} />} />
          <Route path="/room-detail" element={
            // Guard: if someone lands on /room-detail with no room selected, send them to /rooms
            selectedRoom
              ? <RoomDetailPage room={selectedRoom} navigate={navigate} booking={booking} setBooking={setBooking} />
              : <Navigate to="/rooms" replace />
          } />
          <Route path="/checkout"    element={<CheckoutPage booking={booking} navigate={navigate} setConfirmation={setConfirmation} />} />
          <Route path="/confirmation" element={
            // Guard: if someone lands on /confirmation with no booking, send them home
            confirmation
              ? <ConfirmationPage confirmation={confirmation} navigate={navigate} />
              : <Navigate to="/" replace />
          } />
          {/* Catch-all: any unknown URL goes home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default App;