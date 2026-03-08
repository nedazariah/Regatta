import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Icon from './Icon';

const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const NAV_LINKS = [
  ['Home', 'home'],
  ['Rooms', 'rooms'],
  ['Facilities', 'home'],
  ['Contact', 'home'],
];

const Header = ({ currentPage, navigate }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 64,
        background: 'rgba(10,15,30,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212,160,23,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 40px',
      }}>
        {/* Logo */}
        <div onClick={() => handleNav('home')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img src={LOGO_URL} alt="Regatta Suites" style={{ height: isMobile ? 34 : 40, objectFit: 'contain' }} />
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: 32 }}>
            {NAV_LINKS.map(([label, page]) => (
              <button key={label} onClick={() => navigate(page)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: currentPage === page && page === 'rooms' ? '#D4A017' : '#cbd5e1',
                fontSize: 14, fontWeight: 500, fontFamily: 'inherit', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#D4A017'}
                onMouseLeave={e => e.target.style.color = (currentPage === page && page === 'rooms') ? '#D4A017' : '#cbd5e1'}
              >{label}</button>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <button onClick={() => navigate('rooms')} style={{
            background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8,
            padding: '9px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
            onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
          >Book Now</button>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            display: 'flex', alignItems: 'center',
          }}>
            <Icon name={menuOpen ? 'x' : 'menu'} size={24} color="#e2e8f0" />
          </button>
        )}
      </header>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
          background: 'rgba(10,15,30,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(212,160,23,0.15)',
          padding: '20px 24px 28px',
        }}>
          {NAV_LINKS.map(([label, page]) => (
            <button key={label} onClick={() => handleNav(page)} style={{
              display: 'block', width: '100%', background: 'none', border: 'none',
              cursor: 'pointer', color: '#e2e8f0', fontSize: 16, fontWeight: 500,
              fontFamily: 'inherit', textAlign: 'left',
              padding: '13px 0', borderBottom: '1px solid #0f172a',
            }}>{label}</button>
          ))}
          <button onClick={() => handleNav('rooms')} style={{
            marginTop: 20, width: '100%', padding: '13px',
            background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10,
            fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          }}>Book Now</button>
        </div>
      )}
    </>
  );
};

export default Header;
