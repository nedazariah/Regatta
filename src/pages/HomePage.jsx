import { useState } from 'react';
import Icon from '../components/Icon';
import useWindowSize from '../hooks/useWindowSize';
import { EXPERIENCES, HOTEL_INFO } from '../data/rooms';

const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const HomePage = ({ navigate, setBooking }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const px = isMobile ? '20px' : isTablet ? '40px' : '80px';

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Adults, 0 Children');

  const handleSearch = () => {
    setBooking(prev => ({ ...prev, checkIn, checkOut, guests }));
    navigate('/rooms');
  };

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #050a1a 0%, #0a1628 40%, #0d1f35 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: isMobile ? '88px 0 48px' : '0',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://www.regattasuites.com.my/wp-content/uploads/2024/05/Deluxe-Queen-Bed.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18,
        }} />

        <div style={{
          position: 'relative', zIndex: 1, textAlign: 'center',
          width: '100%', maxWidth: 680, padding: isMobile ? '0 20px' : '0 24px',
        }}>
          <div style={{
            display: 'inline-block', border: '1px solid rgba(212,160,23,0.4)',
            borderRadius: 20, padding: '5px 16px', marginBottom: isMobile ? 14 : 20,
            color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
          }}>
            URBAN LIVING REDEFINED
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(26px, 8vw, 36px)' : 'clamp(28px, 5vw, 54px)',
            fontWeight: 700, lineHeight: 1.15,
            color: '#fff', marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            Your Home Away From<br />
            <span style={{ fontStyle: 'italic', color: '#D4A017' }}>Home in Kuching</span>
          </h1>

          <p style={{
            color: '#94a3b8', fontSize: isMobile ? 13 : 15, lineHeight: 1.7,
            marginBottom: isMobile ? 24 : 36, marginTop: 8,
            padding: isMobile ? '0 4px' : 0,
          }}>
            {isMobile
              ? '144 modern rooms in the heart of Kuching city.'
              : <>144 modern rooms in the heart of the city, steps from Sarawak General Hospital,<br />AEON Mall, and Kuching's best dining and attractions.</>
            }
          </p>

          {/* ── SEARCH CARD ──────────────────────────────────── */}
          <div style={{
            background: 'rgba(13, 20, 36, 0.92)', backdropFilter: 'blur(16px)',
            borderRadius: isMobile ? 16 : 20,
            padding: isMobile ? '20px 16px 18px' : '28px 28px 24px',
            border: '1px solid rgba(212,160,23,0.18)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          }}>
            {isMobile ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                {[['CHECK-IN', checkIn, setCheckIn], ['CHECK-OUT', checkOut, setCheckOut]].map(([label, val, set]) => (
                  <div key={label}>
                    <label style={{ display: 'block', color: '#D4A017', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 6 }}>{label}</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Icon name="calendar" size={13} color="#64748b" />
                      <input type="date" value={val} onChange={e => set(e.target.value)}
                        style={{ background: 'none', border: 'none', color: val ? '#e2e8f0' : '#475569', fontSize: 12, outline: 'none', fontFamily: 'inherit', width: '100%', colorScheme: 'dark' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 0, marginBottom: 16 }}>
                {[
                  { label: 'CHECK-IN', val: checkIn, set: setCheckIn },
                  { label: 'CHECK-OUT', val: checkOut, set: setCheckOut },
                ].map(({ label, val, set }, idx) => (
                  <>
                    <div key={label} style={{ padding: idx === 1 ? '0 0 0 20px' : '0 20px 0 0' }}>
                      <label style={{ display: 'block', color: '#D4A017', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 8 }}>
                        {label}
                      </label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Icon name="calendar" size={16} color="#64748b" />
                        <input
                          type="date" value={val} onChange={e => set(e.target.value)}
                          style={{
                            background: 'none', border: 'none', color: val ? '#e2e8f0' : '#475569',
                            fontSize: 15, fontWeight: 500, outline: 'none',
                            fontFamily: 'inherit', width: '100%', colorScheme: 'dark', cursor: 'pointer',
                          }}
                        />
                      </div>
                    </div>
                    {idx === 0 && (
                      <div key="divider-v" style={{ background: 'rgba(255,255,255,0.08)', width: 1, margin: '0 0' }} />
                    )}
                  </>
                ))}
              </div>
            )}

            <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: isMobile ? 12 : 16 }} />

            <div style={{ marginBottom: isMobile ? 14 : 20 }}>
              <label style={{ display: 'block', color: '#D4A017', fontSize: isMobile ? 9 : 10, fontWeight: 700, letterSpacing: '0.12em', marginBottom: isMobile ? 6 : 8 }}>
                GUESTS
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="users" size={isMobile ? 13 : 16} color="#64748b" />
                <select
                  value={guests} onChange={e => setGuests(e.target.value)}
                  style={{
                    background: 'rgba(13, 20, 36, 0.92)', border: 'none', color: '#e2e8f0',
                    fontSize: isMobile ? 13 : 15, fontWeight: 500, outline: 'none',
                    fontFamily: 'inherit', cursor: 'pointer', colorScheme: 'dark', width: '100%',
                  }}
                >
                  <option value="1 Adult, 0 Children">1 Adult</option>
                  <option value="2 Adults, 0 Children">2 Adults</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                  <option value="3 Adults, 0 Children">3 Adults</option>
                  <option value="4 Adults, 0 Children">4–6 Guests (Family Room)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              style={{
                width: '100%', padding: isMobile ? '13px 0' : '15px 0',
                background: '#2563eb', color: '#fff',
                border: 'none', borderRadius: 12, fontSize: isMobile ? 14 : 15, fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, fontFamily: 'inherit', letterSpacing: '0.03em',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Icon name="search" size={isMobile ? 16 : 18} color="#fff" />
              Search Availability
            </button>

            <p style={{ color: '#334155', fontSize: 11, textAlign: 'center', marginTop: 12 }}>
              Free cancellation available on selected rates
            </p>
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: 'absolute', bottom: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#475569', fontSize: 10, letterSpacing: '0.12em' }}>
            <span>DISCOVER MORE</span>
            <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #475569, transparent)' }} />
          </div>
        )}
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section style={{ background: '#070c1a', padding: isMobile ? '52px 24px 40px' : `80px ${px} 64px` }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 14 }}>ABOUT REGATTA SUITES</p>
          <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.25, fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 20 }}>
            Where Comfort Meets<br />Convenience in Kuching
          </h2>
          <p style={{ color: '#64748b', fontSize: isMobile ? 14 : 15, lineHeight: 1.8 }}>{HOTEL_INFO.description}</p>
        </div>
      </section>

      {/* ── EXPERIENCES ──────────────────────────────────────── */}
      <section style={{ background: '#070c1a', padding: isMobile ? '0 24px 64px' : `0 ${px} 96px` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: isMobile ? 24 : 40, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 12 }}>HOTEL FACILITIES</p>
            <h2 style={{ fontSize: isMobile ? 24 : 38, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.2, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Everything You Need,<br />Under One Roof
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? 16 : 24 }}>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} style={{ borderRadius: 16, overflow: 'hidden', background: '#0d1424', border: '1px solid #1e293b', transition: 'transform 0.25s, border-color 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1e293b'; }}
            >
              <div style={{ height: isMobile ? 160 : 200, overflow: 'hidden', background: '#0a1628' }}>
                <img
                  src={exp.image} alt={exp.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: isMobile ? '16px 18px' : '20px 22px' }}>
                <p style={{ color: '#D4A017', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 8 }}>{exp.icon} {exp.category}</p>
                <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 17 : 19, fontWeight: 700, marginBottom: 10, fontFamily: "'Playfair Display', Georgia, serif" }}>{exp.title}</h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ background: '#050a18', padding: isMobile ? '40px 24px' : `64px ${px}`, borderTop: '1px solid rgba(212,160,23,0.1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 28 : 40, textAlign: 'center' }}>
          {[
            { number: '144', label: 'Modern Rooms' },
            { number: '4', label: 'Room Categories' },
            { number: '4.6★', label: 'Average Guest Rating' },
            { number: '100%', label: 'Non-Smoking Rooms' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: isMobile ? 32 : 40, fontWeight: 700, color: '#D4A017', fontFamily: "'Playfair Display', Georgia, serif" }}>{stat.number}</div>
              <div style={{ color: '#64748b', fontSize: isMobile ? 12 : 14, marginTop: 8 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATION STRIP ───────────────────────────────────── */}
      <section style={{ background: '#070c1a', padding: isMobile ? '28px 24px' : `40px ${px}`, borderTop: '1px solid #0f172a' }}>
        <div style={{
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap', gap: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <Icon name="map" size={20} color="#D4A017" />
            <div>
              <p style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600 }}>Regatta Suites Kuching</p>
              <p style={{ color: '#64748b', fontSize: isMobile ? 12 : 13, lineHeight: 1.5 }}>{HOTEL_INFO.address}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? 20 : 32, flexWrap: 'wrap' }}>
            {[
              { label: '8 min walk', desc: 'Sarawak General Hospital' },
              { label: '1.6 km', desc: 'AEON Mall Kuching Central' },
              { label: '15 min drive', desc: 'Kuching International Airport' },
            ].map(item => (
              <div key={item.desc} style={{ textAlign: 'center' }}>
                <div style={{ color: '#D4A017', fontSize: 13, fontWeight: 700 }}>{item.label}</div>
                <div style={{ color: '#64748b', fontSize: 11 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;