import Icon from './Icon';

// Real transparent PNG logo from regattasuites.com.my
const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const Header = ({ currentPage, navigate }) => {
  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms', page: 'rooms' },
    { label: 'Facilities', page: 'home' },
    { label: 'Contact', page: 'home' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(10, 15, 30, 0.96)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: 64,
    }}>
      <div onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <img src={LOGO_URL} alt="Regatta Suites" style={{ height: 40, objectFit: 'contain' }} />
      </div>

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
    </header>
  );
};

export default Header;
