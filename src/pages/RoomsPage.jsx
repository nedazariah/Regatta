import { useState } from 'react';
import Icon from '../components/Icon';
import Stars from '../components/Stars';
import { ROOMS } from '../data/rooms';

const RoomsPage = ({ navigate, setSelectedRoom }) => {
  const [activeFilter, setActiveFilter] = useState('All Rooms');
  const filters = ['All Rooms', 'Twin Rooms', 'Queen Rooms', 'Suites', 'Family Rooms'];
  const filtered = activeFilter === 'All Rooms' ? ROOMS : ROOMS.filter(r => r.category === activeFilter);

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64 }}>
      {/* Breadcrumb */}
      <div style={{ padding: '18px 80px', background: '#050a18', borderBottom: '1px solid #0f172a' }}>
        <span style={{ color: '#64748b', fontSize: 13 }}>
          <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}
            onClick={() => navigate('home')}
            onMouseEnter={e => e.target.style.color = '#D4A017'}
            onMouseLeave={e => e.target.style.color = '#64748b'}
          >Home</span>
          <span style={{ color: '#334155', margin: '0 8px' }}>›</span>
          <span style={{ color: '#D4A017' }}>Available Rooms</span>
        </span>
      </div>

      <div style={{ padding: '48px 80px 80px' }}>
        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#f1f5f9', fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 10 }}>
          Our Rooms <span style={{ color: '#D4A017' }}>&</span> Suites
        </h1>
        <p style={{ color: '#64748b', fontSize: 15, marginBottom: 36 }}>
          Immerse yourself in urban comfort. Each of our 144 rooms is designed for your<br />
          relaxation, with Slumberland mattresses and modern amenities throughout.
        </p>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '9px 18px', borderRadius: 8, border: '1px solid',
                borderColor: activeFilter === f ? '#2563eb' : '#1e293b',
                background: activeFilter === f ? '#2563eb' : 'transparent',
                color: activeFilter === f ? '#fff' : '#94a3b8',
                fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Room Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map(room => (
            <div
              key={room.id}
              style={{
                background: '#0d1424', borderRadius: 16, overflow: 'hidden',
                border: '1px solid #1e293b', transition: 'transform 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1e293b'; }}
            >
              <div style={{ position: 'relative', height: 210, overflow: 'hidden' }}>
                <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: room.badgeColor, color: '#fff',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                  padding: '4px 10px', borderRadius: 6,
                }}>
                  {room.badge}
                </div>
              </div>

              <div style={{ padding: '20px 22px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ color: '#f1f5f9', fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" }}>{room.name}</h3>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 10 }}>
                    <span style={{ color: '#D4A017', fontSize: 20, fontWeight: 700 }}>{room.currency} {room.price}</span>
                    <div style={{ color: '#64748b', fontSize: 11 }}>per night</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Stars rating={room.rating} />
                  <span style={{ color: '#64748b', fontSize: 12 }}>({room.rating}) · {room.reviews} reviews</span>
                </div>

                <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                  <span style={{ color: '#475569', fontSize: 12 }}>📐 {room.size}</span>
                  <span style={{ color: '#475569', fontSize: 12 }}>👤 Max {room.maxGuests}</span>
                </div>

                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, marginBottom: 18 }}>{room.description}</p>

                <button
                  onClick={() => { setSelectedRoom(room); navigate('room-detail'); }}
                  style={{
                    width: '100%', padding: '11px', background: '#1e3a6e',
                    color: '#60a5fa', border: 'none', borderRadius: 10,
                    fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#2563eb'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1e3a6e'}
                >
                  View Details <Icon name="arrow" size={15} color="currentColor" />
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
