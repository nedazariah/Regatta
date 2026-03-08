import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Icon from '../components/Icon';
import Stars from '../components/Stars';

const AMENITY_ICONS = {
  'Free Wireless Internet': 'wifi',
  'Sharp Aquos LED TV (40")': 'tv',
  'Independent A/C Controls': 'thermometer',
  'Mini Fridge': 'glass',
};

// Booking panel is used in both layouts (inline on mobile, sidebar on desktop)
const BookingPanel = ({ room, checkIn, checkOut, setCheckIn, setCheckOut, onBook, isMobile }) => (
  <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: isMobile ? 20 : 24, marginBottom: 16 }}>
    <p style={{ color: '#64748b', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 8 }}>TOTAL ESTIMATE</p>
    <div style={{ marginBottom: 16 }}>
      <span style={{ color: '#f1f5f9', fontSize: isMobile ? 30 : 38, fontWeight: 700 }}>{room.currency} {room.price}</span>
      <span style={{ color: '#64748b', fontSize: 14 }}> /night</span>
    </div>

    <div style={{ borderTop: '1px solid #1e293b', paddingTop: 14, marginBottom: 14 }}>
      {[['Check-in', room.checkIn], ['Check-out', room.checkOut], ['Max Guests', room.maxGuests]].map(([l, v]) => (
        <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ color: '#64748b', fontSize: 13 }}>{l}</span>
          <span style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 600 }}>{v}</span>
        </div>
      ))}
    </div>

    {[['Check-in Date', checkIn, setCheckIn], ['Check-out Date', checkOut, setCheckOut]].map(([label, val, set]) => (
      <div key={label} style={{ marginBottom: 10 }}>
        <label style={{ color: '#64748b', fontSize: 11, display: 'block', marginBottom: 4 }}>{label}</label>
        <input type="date" value={val} onChange={e => set(e.target.value)} style={{
          width: '100%', background: '#070c1a', border: '1px solid #1e293b', borderRadius: 8,
          padding: '10px 12px', color: '#e2e8f0', fontSize: 14, outline: 'none',
          boxSizing: 'border-box', fontFamily: 'inherit', colorScheme: 'dark',
        }} />
      </div>
    ))}

    <button onClick={onBook} style={{
      width: '100%', padding: 14, background: '#2563eb', color: '#fff', border: 'none',
      borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      marginTop: 12, transition: 'background 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
      onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
    >
      Book This Room <Icon name="arrow" size={16} color="#fff" />
    </button>
    <p style={{ color: '#475569', fontSize: 11, textAlign: 'center', marginTop: 10 }}>FREE CANCELLATION ON SELECTED RATES</p>
  </div>
);

const RoomDetailPage = ({ room, navigate, booking, setBooking }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet  = w >= 768 && w < 1024;
  const px = isMobile ? '20px' : isTablet ? '32px' : '40px';

  const [mainImg,  setMainImg]  = useState(0);
  const [checkIn,  setCheckIn]  = useState(booking.checkIn  || '');
  const [checkOut, setCheckOut] = useState(booking.checkOut || '');

  const handleBook = () => {
    setBooking(p => ({ ...p, room, checkIn, checkOut }));
    navigate('checkout');
  };

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64, paddingBottom: isMobile ? 80 : 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: `28px ${px} 80px` }}>

        <button onClick={() => navigate('rooms')} style={{
          background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer',
          fontSize: 14, display: 'flex', alignItems: 'center', gap: 8,
          marginBottom: 20, fontFamily: 'inherit', padding: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#D4A017'}
          onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
        >← Back to Rooms</button>

        {/* Two-column on desktop/tablet, single column on mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 360px', gap: 28, alignItems: 'start' }}>

          {/* ── Left: room content ─────────────────────────────────────── */}
          <div>
            {/* Main image */}
            <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', height: isMobile ? 240 : 360, marginBottom: 10 }}>
              <img src={room.images[mainImg]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMobile ? '20px 18px' : '28px 24px', background: 'linear-gradient(to top,rgba(0,0,0,0.85),transparent)' }}>
                <h1 style={{ color: '#fff', fontSize: isMobile ? 22 : 30, fontWeight: 700, fontFamily: "'Playfair Display',Georgia,serif", marginBottom: 4 }}>{room.name}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ color: '#D4A017', fontSize: isMobile ? 18 : 22, fontWeight: 700 }}>{room.currency} {room.price}</span>
                  <span style={{ color: '#94a3b8', fontSize: 13 }}>/night</span>
                  <Stars rating={room.rating} />
                  <span style={{ color: '#94a3b8', fontSize: 11 }}>({room.reviews})</span>
                </div>
              </div>
            </div>

            {/* Thumbnails — scrollable row */}
            <div style={{ display: 'flex', gap: 8, marginBottom: isMobile ? 24 : 32, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              {room.images.map((img, i) => (
                <div key={i} onClick={() => setMainImg(i)} style={{
                  borderRadius: 8, overflow: 'hidden',
                  height: isMobile ? 56 : 72,
                  minWidth: isMobile ? 80 : 120,
                  flex: isMobile ? '0 0 80px' : 1,
                  cursor: 'pointer',
                  border: `2px solid ${mainImg === i ? '#D4A017' : 'transparent'}`,
                  transition: 'border-color 0.2s',
                }}>
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 28, height: 2, background: '#2563eb' }} />
                <h2 style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em' }}>ROOM OVERVIEW</h2>
              </div>
              <p style={{ color: '#94a3b8', fontSize: isMobile ? 13 : 15, lineHeight: 1.85 }}>{room.longDescription}</p>
            </div>

            {/* Quick specs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 24 }}>
              {[['Room Size', room.size], ['Max Guests', room.maxGuests], ['Check-in', room.checkIn], ['Check-out', room.checkOut]].map(([l, v]) => (
                <div key={l} style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 10, padding: '12px 14px', textAlign: 'center' }}>
                  <div style={{ color: '#D4A017', fontSize: 13, fontWeight: 700 }}>{v}</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Bed info */}
            <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 10, padding: '12px 16px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon name="bed" size={16} color="#D4A017" />
              <span style={{ color: '#94a3b8', fontSize: 13 }}><strong style={{ color: '#e2e8f0' }}>Beds:</strong> {room.bedInfo}</span>
            </div>

            {/* Amenity icon tiles */}
            <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 14, fontFamily: "'Playfair Display',Georgia,serif" }}>Room Amenities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8, marginBottom: 16 }}>
              {room.amenities.slice(0, 4).map(a => (
                <div key={a} style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 10, padding: '14px 10px', textAlign: 'center' }}>
                  <Icon name={AMENITY_ICONS[a] || 'check'} size={20} color="#2563eb" />
                  <div style={{ color: '#94a3b8', fontSize: 9, fontWeight: 700, letterSpacing: '0.05em', marginTop: 6, lineHeight: 1.4 }}>{a.toUpperCase()}</div>
                </div>
              ))}
            </div>

            {/* Full amenity checklist — 1 col mobile, 2 col desktop */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: 8, marginBottom: 24 }}>
              {room.amenities.map(a => (
                <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: 13 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="check" size={10} color="#2563eb" />
                  </div>
                  {a}
                </div>
              ))}
            </div>

            {room.note && (
              <div style={{ background: 'rgba(212,160,23,0.06)', border: '1px solid rgba(212,160,23,0.2)', borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
                <p style={{ color: '#94a3b8', fontSize: 12 }}>⚠️ {room.note} Fees on certain amenities may apply.</p>
              </div>
            )}

            {/* On mobile the booking panel lives inline here */}
            {isMobile && (
              <div style={{ marginTop: 24 }}>
                <BookingPanel room={room} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} onBook={handleBook} isMobile={isMobile} />
              </div>
            )}
          </div>

          {/* ── Right: sticky sidebar (desktop/tablet only) ────────────── */}
          {!isMobile && (
            <div style={{ position: 'sticky', top: 80, alignSelf: 'start' }}>
              <BookingPanel room={room} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} onBook={handleBook} isMobile={false} />

              {/* Quick stats */}
              <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 14, padding: 18, marginBottom: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[[room.size, 'Room Size'], [`${room.rating}★`, `${room.reviews} reviews`], [room.totalRooms, 'Units'], [`${room.currency} ${room.price}`, 'Per Night']].map(([v, l]) => (
                    <div key={l} style={{ textAlign: 'center', padding: '8px 0' }}>
                      <div style={{ color: '#D4A017', fontSize: 14, fontWeight: 700 }}>{v}</div>
                      <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 14, padding: 18 }}>
                <p style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>NEED HELP?</p>
                <a href="tel:+6082230099" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#94a3b8', fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>
                  <Icon name="phone" size={14} color="#D4A017" /> +60 82-230099
                </a>
                <a href="https://wa.me/60169200847" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#22c55e', fontSize: 13, textDecoration: 'none' }}>
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: fixed bottom bar — always visible price + book button */}
      {isMobile && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 900,
          background: 'rgba(10,15,30,0.97)', backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(212,160,23,0.2)',
          padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#D4A017', fontSize: 20, fontWeight: 700 }}>{room.currency} {room.price}</div>
            <div style={{ color: '#64748b', fontSize: 11 }}>per night</div>
          </div>
          <button onClick={handleBook} style={{
            flex: 2, padding: '13px', background: '#2563eb', color: '#fff',
            border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit',
          }}>Book Now</button>
        </div>
      )}
    </div>
  );
};

export default RoomDetailPage;
