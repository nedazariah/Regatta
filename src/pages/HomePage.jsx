import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Icon from '../components/Icon';
import { EXPERIENCES } from '../data/rooms';

const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const HomePage = ({ navigate, setBooking }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet  = w >= 768 && w < 1024;
  const px = isMobile ? '20px' : isTablet ? '40px' : '80px';

  const [checkIn,  setCheckIn]  = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests,   setGuests]   = useState('2 Adults');

  const handleSearch = () => {
    setBooking(p => ({ ...p, checkIn, checkOut, guests }));
    navigate('rooms');
  };

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg,#050a1a 0%,#0a1628 40%,#0d1f35 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: isMobile ? '80px 0 48px' : '0',
      }}>
        {/* bg image overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://www.regattasuites.com.my/wp-content/uploads/2024/05/Deluxe-Queen-Bed.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18,
        }} />

        <div style={{
          position: 'relative', zIndex: 1, textAlign: 'center',
          width: '100%', maxWidth: isMobile ? '100%' : 660,
          padding: isMobile ? '0 20px' : '0 24px',
        }}>
          <div style={{
            display: 'inline-block', border: '1px solid rgba(212,160,23,0.4)', borderRadius: 20,
            padding: '5px 16px', marginBottom: isMobile ? 14 : 18,
            color: '#D4A017', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
          }}>URBAN LIVING REDEFINED</div>

          <h1 style={{
            fontSize: isMobile ? 30 : 'clamp(26px,4.5vw,48px)', fontWeight: 700, lineHeight: 1.2,
            color: '#fff', marginBottom: 10, fontFamily: "'Playfair Display',Georgia,serif",
          }}>
            Your Home Away From<br />
            <span style={{ fontStyle: 'italic', color: '#D4A017' }}>Home in Kuching</span>
          </h1>

          <p style={{
            color: '#94a3b8', fontSize: isMobile ? 13 : 14, lineHeight: 1.7,
            marginBottom: isMobile ? 24 : 32, padding: isMobile ? '0 8px' : 0,
          }}>
            {isMobile
              ? '144 modern rooms at the heart of Kuching city.'
              : "144 modern rooms at the heart of Kuching city — steps from AEON Mall, Sarawak General Hospital, and Kuching's best dining."}
          </p>

          {/* Search card */}
          <div style={{
            background: 'rgba(13,20,36,0.94)', backdropFilter: 'blur(16px)',
            borderRadius: isMobile ? 16 : 20,
            padding: isMobile ? '20px 16px 18px' : '28px 28px 22px',
            border: '1px solid rgba(212,160,23,0.2)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
          }}>
            {/* Check-in / Check-out */}
            {isMobile ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                {[['CHECK-IN', checkIn, setCheckIn], ['CHECK-OUT', checkOut, setCheckOut]].map(([label, val, set]) => (
                  <div key={label}>
                    <label style={{ display: 'block', color: '#D4A017', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 6 }}>{label}</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Icon name="calendar" size={13} color="#64748b" />
                      <input type="date" value={val} onChange={e => set(e.target.value)}
                        style={{ background: 'none', border: 'none', color: val ? '#e2e8f0' : '#475569', fontSize: 12, outline: 'none', fontFamily: 'inherit', width: '100%', colorScheme: 'dark' }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', alignItems: 'start', marginBottom: 16 }}>
                <div style={{ paddingRight: 20 }}>
                  <label style={{ display: 'block', color: '#D4A017', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 8 }}>CHECK-IN</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon name="calendar" size={15} color="#64748b" />
                    <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
                      style={{ background: 'none', border: 'none', color: checkIn ? '#e2e8f0' : '#475569', fontSize: 14, fontWeight: 500, outline: 'none', fontFamily: 'inherit', width: '100%', colorScheme: 'dark', cursor: 'pointer' }} />
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', width: 1, alignSelf: 'stretch' }} />
                <div style={{ paddingLeft: 20 }}>
                  <label style={{ display: 'block', color: '#D4A017', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 8 }}>CHECK-OUT</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon name="calendar" size={15} color="#64748b" />
                    <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
                      style={{ background: 'none', border: 'none', color: checkOut ? '#e2e8f0' : '#475569', fontSize: 14, fontWeight: 500, outline: 'none', fontFamily: 'inherit', width: '100%', colorScheme: 'dark', cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            )}

            <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: isMobile ? 12 : 16 }} />

            {/* Guests */}
            <div style={{ marginBottom: isMobile ? 14 : 20 }}>
              <label style={{ display: 'block', color: '#D4A017', fontSize: isMobile ? 9 : 10, fontWeight: 700, letterSpacing: '0.12em', marginBottom: isMobile ? 6 : 8 }}>GUESTS</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="users" size={isMobile ? 13 : 15} color="#64748b" />
                <select value={guests} onChange={e => setGuests(e.target.value)}
                  style={{ background: 'rgba(13,20,36,0.94)', border: 'none', color: '#e2e8f0', fontSize: isMobile ? 13 : 14, fontWeight: 500, outline: 'none', fontFamily: 'inherit', cursor: 'pointer', colorScheme: 'dark', width: '100%' }}>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                  <option>3 Adults</option>
                  <option>4–6 Guests (Family Room)</option>
                </select>
              </div>
            </div>

            <button onClick={handleSearch} style={{
              width: '100%', padding: isMobile ? '13px 0' : '15px 0',
              background: '#2563eb', color: '#fff', border: 'none', borderRadius: 12,
              fontSize: isMobile ? 14 : 15, fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              fontFamily: 'inherit', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
              onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
            >
              <Icon name="search" size={17} color="#fff" /> Search Availability
            </button>
            <p style={{ color: '#334155', fontSize: 11, textAlign: 'center', marginTop: 10 }}>
              Free cancellation available on selected rates
            </p>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#070c1a', padding: isMobile ? '52px 24px 40px' : `80px ${px} 56px` }}>
        <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 14 }}>
            ABOUT REGATTA SUITES
          </p>
          <h2 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.25, fontFamily: "'Playfair Display',Georgia,serif", marginBottom: 16 }}>
            Where Comfort Meets<br />Convenience in Kuching
          </h2>
          <p style={{ color: '#64748b', fontSize: isMobile ? 14 : 15, lineHeight: 1.8 }}>
            Regatta Stay is a new landmark strategically located at the heart of Kuching city. Offering a cosy home away from home,
            our mission is to ensure that our valued guests have a safe, comfortable and enjoyable stay. Each of our 144 rooms are
            furnished with guests' comfort and needs in mind, with free Wi-Fi available everywhere.
          </p>
        </div>
      </section>

      {/* ── Facilities ───────────────────────────────────────────────────── */}
      <section style={{ background: '#070c1a', padding: isMobile ? '0 24px 64px' : `0 ${px} 96px` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 10 }}>HOTEL FACILITIES</p>
            <h2 style={{ fontSize: isMobile ? 24 : 36, fontWeight: 700, color: '#f1f5f9', fontFamily: "'Playfair Display',Georgia,serif" }}>
              Everything You Need,<br />Under One Roof
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3,1fr)', gap: isMobile ? 16 : 24 }}>
          {EXPERIENCES.map(exp => (
            <div key={exp.id} style={{ borderRadius: 16, overflow: 'hidden', background: '#0d1424', border: '1px solid #1e293b', transition: 'transform 0.25s,border-color 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1e293b'; }}
            >
              <div style={{ height: isMobile ? 160 : 200, overflow: 'hidden' }}>
                <img src={exp.image} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: isMobile ? '16px 18px' : '20px 22px' }}>
                <p style={{ color: '#D4A017', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 8 }}>{exp.category}</p>
                <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 17 : 19, fontWeight: 700, marginBottom: 8, fontFamily: "'Playfair Display',Georgia,serif" }}>{exp.title}</h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#050a18', padding: isMobile ? '40px 24px' : `56px ${px}`, borderTop: '1px solid rgba(212,160,23,0.1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 24 : 40, textAlign: 'center' }}>
          {[['144', 'Modern Rooms'], ['4', 'Room Categories'], ['4.6★', 'Average Guest Rating'], ['100%', 'Non-Smoking']].map(([num, lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: isMobile ? 32 : 40, fontWeight: 700, color: '#D4A017', fontFamily: "'Playfair Display',Georgia,serif" }}>{num}</div>
              <div style={{ color: '#64748b', fontSize: isMobile ? 12 : 14, marginTop: 6 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Location strip ───────────────────────────────────────────────── */}
      <section style={{ background: '#070c1a', padding: isMobile ? '28px 24px' : `28px ${px}`, borderTop: '1px solid #0f172a' }}>
        <div style={{
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 20 : 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <Icon name="map" size={18} color="#D4A017" />
            <div>
              <p style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600 }}>Regatta Suites Kuching</p>
              <p style={{ color: '#64748b', fontSize: 12, lineHeight: 1.6 }}>
                Unit G-31, Ground Floor, LD Legenda, Jalan Tun Abang Haji Openg, 93000 Kuching, Sarawak
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? 20 : 32, flexWrap: 'wrap' }}>
            {[['8 min walk', 'Sarawak General Hospital'], ['1.6 km', 'AEON Mall'], ['15 min', 'KCH Airport']].map(([d, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ color: '#D4A017', fontSize: 12, fontWeight: 700 }}>{d}</div>
                <div style={{ color: '#64748b', fontSize: 11 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
