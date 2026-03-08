import Icon from '../components/Icon';
import useWindowSize from '../hooks/useWindowSize';

const LOGO_URL = 'https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png';

const ConfirmationPage = ({ confirmation, navigate }) => {
  const { w }     = useWindowSize();
  const isMobile  = w < 768;
  const { room, total, ref: bookingRef, card } = confirmation;

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '32px 20px 60px' : '56px 40px' }}>

        {/* Success banner */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: isMobile ? 64 : 80, height: isMobile ? 64 : 80, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
            <Icon name="check" size={isMobile ? 28 : 36} color="#22c55e" />
          </div>
          <h1 style={{ color: '#22c55e', fontSize: isMobile ? 24 : 36, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 8 }}>Booking Confirmed!</h1>
          <p style={{ color: '#64748b', fontSize: isMobile ? 14 : 16 }}>Thank you! Your booking has been received. Check your email for confirmation.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : 28 }}>

          {/* Booking details */}
          <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: isMobile ? 20 : 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
              <div>
                <p style={{ color: '#D4A017', fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 4 }}>BOOKING REFERENCE</p>
                <h2 style={{ color: '#f1f5f9', fontSize: isMobile ? 22 : 28, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" }}>{bookingRef}</h2>
              </div>
              <div style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 8, padding: '5px 12px', color: '#22c55e', fontSize: 12, fontWeight: 700 }}>CONFIRMED</div>
            </div>

            <div style={{ borderRadius: 12, overflow: 'hidden', height: isMobile ? 160 : 200, marginBottom: 20 }}>
              <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 17 : 20, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 4 }}>{room.name}</h3>
            <p style={{ color: '#D4A017', fontSize: 12, marginBottom: 20 }}>Regatta Suites Kuching</p>

            {[
              { icon: 'calendar', label: 'Stay Duration', val: '2 Nights' },
              { icon: 'users',    label: 'Guests',        val: '2 Adults' },
              { icon: 'bed',      label: 'Room Size',     val: room.size },
              { icon: 'card',     label: 'Total Charged', val: `RM ${total}` },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 12, borderBottom: '1px solid #0f172a', marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(212,160,23,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={row.icon} size={16} color="#D4A017" />
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: 11 }}>{row.label}</div>
                  <div style={{ color: '#f1f5f9', fontSize: isMobile ? 13 : 14, fontWeight: 600 }}>{row.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Hotel info + next steps */}
          <div>
            <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: isMobile ? 20 : 28, marginBottom: 16 }}>
              <img src={LOGO_URL} alt="Regatta Suites" style={{ height: 36, objectFit: 'contain', marginBottom: 16 }} />
              <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.75, marginBottom: 14 }}>
                We look forward to welcoming you at Regatta Suites Kuching. Please keep your booking reference handy for check-in.
              </p>
              <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
                {[
                  { icon: 'calendar', l: 'Check-in',      v: 'From 14:00 (2:00 PM)' },
                  { icon: 'calendar', l: 'Check-out',     v: 'Before 12:00 (Noon)' },
                  { icon: 'map',      l: 'Location',      v: 'LD Legenda, Jalan Tun Abang Haji Openg, Kuching' },
                  { icon: 'phone',    l: 'Front Desk',    v: '+60 82-230099' },
                ].map(({ icon, l, v }) => (
                  <div key={l} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Icon name={icon} size={14} color="#D4A017" />
                    <div>
                      <div style={{ color: '#64748b', fontSize: 11 }}>{l}</div>
                      <div style={{ color: '#e2e8f0', fontSize: 13 }}>{v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 14, padding: isMobile ? 18 : 24, marginBottom: 16 }}>
              <h3 style={{ color: '#22c55e', fontSize: 16, fontWeight: 700, marginBottom: 14 }}>What Happens Next?</h3>
              {['Confirmation email will be sent within 15 minutes', 'Provide booking reference at check-in', 'Refundable deposit of RM 200 payable at check-in', 'Free cancellation — modify anytime before arrival'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="check" size={11} color="#22c55e" />
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>

            <button onClick={() => navigate('home')} style={{ width: '100%', padding: 14, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
              onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
            >
              <Icon name="home" size={16} color="#fff" /> Back to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
