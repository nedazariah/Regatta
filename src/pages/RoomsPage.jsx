import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Icon from '../components/Icon';
import Stars from '../components/Stars';
import { ROOMS } from '../data/rooms';

const FILTERS = ['All Rooms', 'Twin Rooms', 'Queen Rooms', 'Suites', 'Family Rooms'];

const RoomsPage = ({ navigate, setSelectedRoom }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet  = w >= 768 && w < 1024;
  const px = isMobile ? '20px' : isTablet ? '32px' : '80px';

  const [activeFilter, setActiveFilter] = useState('All Rooms');
  const filtered = activeFilter === 'All Rooms' ? ROOMS : ROOMS.filter(r => r.category === activeFilter);

  const handleViewRoom = (room) => {
    setSelectedRoom(room);
    navigate('room-detail');
  };

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64 }}>
      {/* Breadcrumb */}
      <div style={{ padding: `12px ${px}`, background: '#050a18', borderBottom: '1px solid #0f172a' }}>
        <span style={{ color: '#64748b', fontSize: 13 }}>
          <span style={{ cursor: 'pointer' }}
            onClick={() => navigate('home')}
            onMouseEnter={e => e.target.style.color = '#D4A017'}
            onMouseLeave={e => e.target.style.color = '#64748b'}
          >Home</span>
          <span style={{ color: '#334155', margin: '0 8px' }}>›</span>
          <span style={{ color: '#D4A017' }}>Rooms</span>
        </span>
      </div>

      <div style={{ padding: isMobile ? '32px 20px 60px' : `48px ${px} 80px` }}>
        <h1 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 700, color: '#f1f5f9', fontFamily: "'Playfair Display',Georgia,serif", marginBottom: 8 }}>
          Our Rooms <span style={{ color: '#D4A017' }}>&</span> Suites
        </h1>
        <p style={{ color: '#64748b', fontSize: isMobile ? 13 : 15, marginBottom: 28, lineHeight: 1.6 }}>
          144 rooms designed for your relaxation, with Slumberland mattresses and modern amenities.
        </p>

        {/* Filter tabs — scroll horizontally on mobile so none are cut off */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, overflowX: 'auto', paddingBottom: 4, WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              padding: isMobile ? '8px 14px' : '9px 18px', borderRadius: 8, border: '1px solid',
              borderColor: activeFilter === f ? '#2563eb' : '#1e293b',
              background: activeFilter === f ? '#2563eb' : 'transparent',
              color: activeFilter === f ? '#fff' : '#94a3b8',
              fontSize: isMobile ? 12 : 13, fontWeight: 500, cursor: 'pointer',
              fontFamily: 'inherit', whiteSpace: 'nowrap', flexShrink: 0, transition: 'all 0.2s',
            }}>{f}</button>
          ))}
        </div>

        {/* Room grid: 1 col mobile, 2 col tablet, auto-fill desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(auto-fill,minmax(340px,1fr))', gap: isMobile ? 16 : 24 }}>
          {filtered.map(room => (
            <div key={room.id} style={{ background: '#0d1424', borderRadius: 16, overflow: 'hidden', border: '1px solid #1e293b', transition: 'transform 0.25s,border-color 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1e293b'; }}
            >
              <div style={{ position: 'relative', height: isMobile ? 180 : 210, overflow: 'hidden' }}>
                <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', top: 12, right: 12, background: room.badgeColor, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 6 }}>
                  {room.badge}
                </div>
              </div>

              <div style={{ padding: isMobile ? '16px 18px 18px' : '20px 22px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                  <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 16 : 18, fontWeight: 700, fontFamily: "'Playfair Display',Georgia,serif" }}>{room.name}</h3>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 8 }}>
                    <span style={{ color: '#D4A017', fontSize: isMobile ? 17 : 20, fontWeight: 700 }}>{room.currency} {room.price}</span>
                    <div style={{ color: '#64748b', fontSize: 10 }}>per night</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Stars rating={room.rating} />
                  <span style={{ color: '#64748b', fontSize: 11 }}>({room.rating}) · {room.reviews} reviews</span>
                </div>

                <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                  <span style={{ color: '#475569', fontSize: 11 }}>📐 {room.size}</span>
                  <span style={{ color: '#475569', fontSize: 11 }}>👤 {room.maxGuests}</span>
                </div>

                <p style={{ color: '#64748b', fontSize: isMobile ? 12 : 13, lineHeight: 1.6, marginBottom: 16 }}>{room.description}</p>

                <button onClick={() => handleViewRoom(room)} style={{
                  width: '100%', padding: isMobile ? '10px' : '11px',
                  background: '#1e3a6e', color: '#60a5fa', border: 'none', borderRadius: 10,
                  fontSize: isMobile ? 13 : 14, fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#2563eb'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1e3a6e'}
                >
                  View Details <Icon name="arrow" size={14} color="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
