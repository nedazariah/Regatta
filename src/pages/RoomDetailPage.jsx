import { useState } from 'react';
import Icon from '../components/Icon';
import Stars from '../components/Stars';
import useWindowSize from '../hooks/useWindowSize';

const AMENITY_ICONS = {
  'Free Wireless Internet': 'wifi',
  'Sharp Aquos LED TV (40")': 'tv',
  'Independent A/C Controls': 'thermometer',
  'Mini Fridge': 'glass',
};

const BookingPanel = ({ room, checkIn, checkOut, setCheckIn, setCheckOut, onBook }) => (
  <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: 24, marginBottom: 16 }}>
    <p style={{ color: '#64748b', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 8 }}>TOTAL ESTIMATE</p>
    <div style={{ marginBottom: 20 }}>
      <span style={{ color: '#f1f5f9', fontSize: 38, fontWeight: 700 }}>{room.currency} {room.price}</span>
      <span style={{ color: '#64748b', fontSize: 14 }}> /night</span>
    </div>

    <div style={{ borderTop: '1px solid #1e293b', paddingTop: 16, marginBottom: 16 }}>
      {[
        { label: 'Check-in Time', val: room.checkIn },
        { label: 'Check-out Time', val: room.checkOut },
        { label: 'Max Guests', val: room.maxGuests },
      ].map(row => (
        <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ color: '#64748b', fontSize: 13 }}>{row.label}</span>
          <span style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 600 }}>{row.val}</span>
        </div>
      ))}
    </div>

    {[
      { label: 'Check-in Date', val: checkIn, set: setCheckIn },
      { label: 'Check-out Date', val: checkOut, set: setCheckOut },
    ].map(({ label, val, set }) => (
      <div key={label} style={{ marginBottom: 10 }}>
        <label style={{ color: '#64748b', fontSize: 11, display: 'block', marginBottom: 4 }}>{label}</label>
        <input
          type="date" value={val} min={new Date().toISOString().split('T')[0]} onChange={e => set(e.target.value)}
          style={{
            width: '100%', background: '#070c1a', border: '1px solid #1e293b',
            borderRadius: 8, padding: '10px 12px', color: '#e2e8f0', fontSize: 14,
            outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', colorScheme: 'dark',
          }}
        />
      </div>
    ))}

    <button
      onClick={onBook}
      style={{
        width: '100%', padding: '14px', background: '#2563eb', color: '#fff',
        border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer',
        fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 8, marginTop: 14, transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
      onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
    >
      Book This Room <Icon name="arrow" size={16} color="#fff" />
    </button>
    <p style={{ color: '#475569', fontSize: 11, textAlign: 'center', marginTop: 10, letterSpacing: '0.04em' }}>
      FREE CANCELLATION ON SELECTED RATES
    </p>
  </div>
);

const RoomDetailPage = ({ room, navigate, booking, setBooking }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const px = isMobile ? '20px' : isTablet ? '32px' : '40px';

  const [checkIn, setCheckIn]   = useState(booking.checkIn  || '');
  const [checkOut, setCheckOut] = useState(booking.checkOut || '');
  const [mainImg, setMainImg]   = useState(0);

  const handleBook = () => {
    setBooking(prev => ({ ...prev, room, checkIn, checkOut }));
    navigate('/checkout');
  };

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64, paddingBottom: isMobile ? 80 : 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: `36px ${px} 80px` }}>

        <button
          onClick={() => navigate('/rooms')}
          style={{
            background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer',
            fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28,
            fontFamily: 'inherit', padding: 0, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#D4A017'}
          onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
        >
          ← Back to Rooms
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 360px',
          gap: 32,
          alignItems: 'start',
        }}>

          {/* ── LEFT ─────────────────────────────────────────── */}
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: isMobile ? 240 : 360, marginBottom: 12 }}>
              <img
                src={room.images[mainImg]}
                alt={room.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMobile ? '20px 18px' : '28px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
                <h1 style={{ color: '#fff', fontSize: isMobile ? 22 : 30, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 4 }}>{room.name}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ color: '#D4A017', fontSize: isMobile ? 18 : 22, fontWeight: 700 }}>{room.currency} {room.price}</span>
                  <span style={{ color: '#94a3b8', fontSize: 14 }}>/ night</span>
                  <div style={{ marginLeft: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Stars rating={room.rating} />
                    <span style={{ color: '#94a3b8', fontSize: 12 }}>({room.reviews})</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginBottom: isMobile ? 24 : 32, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              {room.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImg(i)}
                  style={{
                    borderRadius: 10, overflow: 'hidden',
                    height: isMobile ? 56 : 72,
                    minWidth: isMobile ? 80 : undefined,
                    flex: isMobile ? '0 0 80px' : 1,
                    cursor: 'pointer',
                    border: `2px solid ${mainImg === i ? '#D4A017' : 'transparent'}`,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 32, height: 2, background: '#2563eb' }} />
                <h2 style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em' }}>ROOM OVERVIEW</h2>
              </div>
              <p style={{ color: '#94a3b8', fontSize: isMobile ? 13 : 15, lineHeight: 1.85 }}>{room.longDescription}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
              {[
                { label: 'Room Size', val: room.size },
                { label: 'Max Guests', val: room.maxGuests },
                { label: 'Check-in', val: room.checkIn },
                { label: 'Check-out', val: room.checkOut },
              ].map(item => (
                <div key={item.label} style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
                  <div style={{ color: '#D4A017', fontSize: isMobile ? 12 : 14, fontWeight: 700 }}>{item.val}</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginTop: 4 }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 12, padding: '14px 20px', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Icon name="bed" size={18} color="#D4A017" />
              <span style={{ color: '#94a3b8', fontSize: isMobile ? 13 : 14 }}><strong style={{ color: '#e2e8f0' }}>Bed Configuration:</strong> {room.bedInfo}</span>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 16, fontFamily: "'Playfair Display', Georgia, serif" }}>Room Amenities</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
                {room.amenities.slice(0, 4).map(amenity => (
                  <div key={amenity} style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 12, padding: isMobile ? '12px 8px' : '16px 12px', textAlign: 'center' }}>
                    <Icon name={AMENITY_ICONS[amenity] || 'check'} size={isMobile ? 18 : 22} color="#2563eb" />
                    <div style={{ color: '#94a3b8', fontSize: 9, fontWeight: 700, letterSpacing: '0.05em', marginTop: 8, lineHeight: 1.4 }}>
                      {amenity.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 10 }}>
                {room.amenities.map(a => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#94a3b8', fontSize: isMobile ? 13 : 14 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="check" size={11} color="#2563eb" />
                    </div>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {room.note && (
              <div style={{ background: 'rgba(212,160,23,0.06)', border: '1px solid rgba(212,160,23,0.2)', borderRadius: 10, padding: '12px 16px' }}>
                <p style={{ color: '#94a3b8', fontSize: 13 }}>⚠️ {room.note} Fees on certain amenities/services may apply. Actual room design may vary.</p>
              </div>
            )}

            {isMobile && (
              <div style={{ marginTop: 28 }}>
                <BookingPanel
                  room={room}
                  checkIn={checkIn} checkOut={checkOut}
                  setCheckIn={setCheckIn} setCheckOut={setCheckOut}
                  onBook={handleBook}
                />
              </div>
            )}
          </div>

          {/* ── RIGHT – Sticky Sidebar (desktop/tablet only) ── */}
          {!isMobile && (
            <div style={{ position: 'sticky', top: 80, alignSelf: 'start' }}>
              <BookingPanel
                room={room}
                checkIn={checkIn} checkOut={checkOut}
                setCheckIn={setCheckIn} setCheckOut={setCheckOut}
                onBook={handleBook}
              />

              <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 14, padding: 18, marginBottom: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { val: room.size, label: 'Room Size' },
                    { val: `${room.rating}★`, label: `${room.reviews} reviews` },
                    { val: room.totalRooms, label: 'Available Units' },
                    { val: room.currency + room.price, label: 'Per Night' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: '8px 0' }}>
                      <div style={{ color: '#D4A017', fontSize: 15, fontWeight: 700 }}>{s.val}</div>
                      <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 14, padding: 18 }}>
                <p style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>NEED HELP?</p>
                <a href="tel:+6082230099" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#94a3b8', fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>
                  <Icon name="phone" size={14} color="#D4A017" /> +60 82-230099
                </a>
                <a href="https://wa.me/60169200847" target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#22c55e', fontSize: 13, textDecoration: 'none' }}>
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed bottom bar — mobile only */}
      {isMobile && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 900,
          background: 'rgba(10, 15, 30, 0.97)', backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(212, 160, 23, 0.2)',
          padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#D4A017', fontSize: 20, fontWeight: 700 }}>{room.currency} {room.price}</div>
            <div style={{ color: '#64748b', fontSize: 11 }}>per night</div>
          </div>
          <button
            onClick={handleBook}
            style={{
              flex: 2, padding: '13px', background: '#2563eb', color: '#fff',
              border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomDetailPage;