import Icon from './Icon';
import useWindowSize from '../hooks/useWindowSize';
import { HOTEL_INFO } from '../data/rooms';

const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const Footer = ({ navigate }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;

  const gridCols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.6fr 1fr 1fr 1.3fr';

  return (
    <footer style={{ background: '#070b18', borderTop: '1px solid rgba(212,160,23,0.12)', padding: isMobile ? '40px 24px 24px' : '56px 80px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: isMobile ? 32 : 48, marginBottom: 48 }}>
        {/* Brand */}
        <div>
          <div onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', marginBottom: 16 }}>
            <img src={LOGO_URL} alt="Regatta Suites" style={{ height: 44, objectFit: 'contain' }} />
          </div>
          <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>
            Urban living redefined. A cosy home away from home in the heart of Kuching city, Sarawak.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {['globe', 'mail', 'phone'].map(icon => (
              <div key={icon} style={{
                width: 34, height: 34, borderRadius: '50%', background: '#0f172a',
                border: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}>
                <Icon name={icon} size={15} color="#64748b" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links — hidden on mobile */}
        {!isMobile && (
          <div>
            <h4 style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Quick Links</h4>
            {['About Us', 'Our Rooms', 'Facilities', 'Dining', 'Promotions', 'Gallery'].map(l => (
              <div key={l} style={{ color: '#64748b', fontSize: 13, marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#D4A017'}
                onMouseLeave={e => e.target.style.color = '#64748b'}
              >{l}</div>
            ))}
          </div>
        )}

        {/* Hotel Services — hidden on mobile */}
        {!isMobile && (
          <div>
            <h4 style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Hotel Services</h4>
            {['Infinity Pool', 'Sky Gym', 'Theatre Restaurant', 'Meetings & Banquet', 'MICE Events', 'Career'].map(l => (
              <div key={l} style={{ color: '#64748b', fontSize: 13, marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#D4A017'}
                onMouseLeave={e => e.target.style.color = '#64748b'}
              >{l}</div>
            ))}
          </div>
        )}

        {/* Contact — always shown */}
        <div>
          <h4 style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Contact Us</h4>
          <div style={{ color: '#64748b', fontSize: 13, lineHeight: 1.9 }}>
            <div style={{ marginBottom: 8 }}>📍 {HOTEL_INFO.address}</div>
            <div style={{ marginBottom: 6 }}>📞 {HOTEL_INFO.phone1}</div>
            <div style={{ marginBottom: 6 }}>📞 {HOTEL_INFO.phone2}</div>
            <div style={{ marginBottom: 6 }}>
              <a href={`https://wa.me/${HOTEL_INFO.whatsapp.replace(/\D/g,'')}`}
                style={{ color: '#22c55e', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
                target="_blank" rel="noreferrer">
                💬 WhatsApp Us
              </a>
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: '#475569' }}>
              Check-in: {HOTEL_INFO.checkIn} &nbsp;|&nbsp; Check-out: {HOTEL_INFO.checkOut}
            </div>
            <div style={{ fontSize: 12, color: '#475569', marginTop: 4 }}>
              Deposit: {HOTEL_INFO.deposit}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #0f172a', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ color: '#475569', fontSize: 13, textAlign: isMobile ? 'center' : 'left', width: isMobile ? '100%' : 'auto' }}>
          © 2024 Regatta Suites Kuching. Owned by Kozi Square Sdn Bhd. All rights reserved.
        </p>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <span key={l} style={{ color: '#475569', fontSize: 12, cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
