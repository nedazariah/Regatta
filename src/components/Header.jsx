import { useState } from 'react';
import Icon from './Icon';
import useWindowSize from '../hooks/useWindowSize';

// Real transparent PNG logo from regattasuites.com.my
const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const Header = ({ currentPage, navigate }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms', page: 'rooms' },
    { label: 'Facilities', page: 'home' },
    { label: 'Contact', page: 'home' },
  ];

  const handleNav = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(10, 15, 30, 0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 40px', height: 64,
      }}>
        <div onClick={() => handleNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <img src={LOGO_URL} alt="Regatta Suites" style={{ height: isMobile ? 34 : 40, objectFit: 'contain' }} />
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: 32 }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.page)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  color: currentPage === link.page && link.page === 'rooms' ? '#D4A017' : '#cbd5e1',
                  fontSize: 14, fontWeight: 500, fontFamily: 'inherit', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#D4A017'}
                onMouseLeave={e => e.target.style.color = (currentPage === link.page && link.page === 'rooms') ? '#D4A017' : '#cbd5e1'}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Desktop right side */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={() => navigate('rooms')}
              style={{
                background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8,
                padding: '9px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
              onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
            >
              Book Now
            </button>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: '#1e293b',
              border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              <Icon name="user" size={16} color="#94a3b8" />
            </div>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center' }}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={24} color="#e2e8f0" />
          </button>
        )}
      </header>

      {/* Mobile full-screen drawer */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
          background: 'rgba(10, 15, 30, 0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
          padding: '20px 24px 28px',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.page)}
              style={{
                display: 'block', width: '100%', background: 'none', border: 'none',
                cursor: 'pointer', color: '#e2e8f0', fontSize: 16, fontWeight: 500,
                fontFamily: 'inherit', textAlign: 'left',
                padding: '13px 0', borderBottom: '1px solid #0f172a',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('rooms')}
            style={{
              marginTop: 20, width: '100%', padding: '13px',
              background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10,
              fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
