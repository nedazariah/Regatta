import useWindowSize from '../hooks/useWindowSize';

const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const QUICK_LINKS = ['About Us', 'Our Rooms', 'Facilities', 'Dining', 'Promotions', 'Gallery'];
const SERVICES    = ['Infinity Pool', 'Sky Gym', 'Theatre Restaurant', 'Meetings & Banquet', 'MICE Events'];

const Footer = ({ navigate }) => {
  const { w } = useWindowSize();
  const isMobile  = w < 768;
  const isTablet  = w >= 768 && w < 1024;

  const gridCols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.6fr 1fr 1fr 1.3fr';

  return (
    <footer style={{
      background: '#070b18',
      borderTop: '1px solid rgba(212,160,23,0.12)',
      padding: isMobile ? '40px 24px 24px' : '56px 80px 24px',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: isMobile ? 32 : 48, marginBottom: 40 }}>

        {/* Brand */}
        <div>
          <div onClick={() => navigate('home')} style={{ cursor: 'pointer', marginBottom: 14 }}>
            <img src={LOGO_URL} alt="Regatta Suites" style={{ height: 40, objectFit: 'contain' }} />
          </div>
          <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>
            Urban living redefined. A cosy home away from home in the heart of Kuching city, Sarawak.
          </p>
        </div>

        {/* Quick Links — hidden on mobile to keep footer lean */}
        {!isMobile && (
          <div>
            <h4 style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Quick Links</h4>
            {QUICK_LINKS.map(l => (
              <div key={l} style={{ color: '#64748b', fontSize: 13, marginBottom: 10, cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.color = '#D4A017'}
                onMouseLeave={e => e.target.style.color = '#64748b'}
              >{l}</div>
            ))}
          </div>
        )}

        {/* Services — hidden on mobile */}
        {!isMobile && (
          <div>
            <h4 style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Services</h4>
            {SERVICES.map(l => (
              <div key={l} style={{ color: '#64748b', fontSize: 13, marginBottom: 10, cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.color = '#D4A017'}
                onMouseLeave={e => e.target.style.color = '#64748b'}
              >{l}</div>
            ))}
          </div>
        )}

        {/* Contact — always shown */}
        <div>
          <h4 style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Contact Us</h4>
          <div style={{ color: '#64748b', fontSize: 13, lineHeight: 2 }}>
            <div style={{ marginBottom: 4 }}>📍 Unit G-31, Ground Floor, LD Legenda, Jalan Tun Abang Haji Openg, 93000 Kuching, Sarawak</div>
            <div>📞 +60 82-230099</div>
            <div>📞 +60 82-231999</div>
            <a href="https://wa.me/60169200847" target="_blank" rel="noreferrer"
              style={{ color: '#22c55e', textDecoration: 'none' }}>💬 WhatsApp Us</a>
            <div style={{ marginTop: 8, fontSize: 12, color: '#475569' }}>
              Check-in: 14:00 &nbsp;|&nbsp; Check-out: 12:00 (Noon)
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #0f172a', paddingTop: 20 }}>
        <p style={{ color: '#475569', fontSize: 12, textAlign: isMobile ? 'center' : 'left' }}>
          © 2024 Regatta Suites Kuching. Owned by Kozi Square Sdn Bhd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
