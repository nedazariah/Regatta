import Icon from '../components/Icon';
import useWindowSize from '../hooks/useWindowSize';

const ConfirmationPage = ({ confirmation, navigate }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;

  const { room, total, ref, card } = confirmation;

  const handleDownload = () => {
    const content = `
REGATTA SUITES KUCHING – BOOKING CONFIRMATION
==============================================
Ref: #${ref}
Room: ${room.name}
Check-in:  (After 2:00 PM)
Check-out: (Before 12:00 Noon)

PAYMENT DETAILS
Room Rate ....... RM ${room.price}.00/night
Total Paid ...... RM ${total || room.price * 2 + 90}.00
Card ending in: •••• ${card}

Thank you for staying with Regatta Suites Kuching!
Unit G-31, Ground Floor, LD Legenda,
Jalan Tun Abang Haji Openg, 93000 Kuching, Sarawak.
Tel: +60 82-230099 | +60 82-231999
    `.trim();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `RegattaSuites_${ref}.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  const grandTotal = total || (room.price * 2 + 90);
  const serviceFee = 45;
  const taxes = 45;
  const nightly = grandTotal - serviceFee - taxes;

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64 }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: isMobile ? '36px 20px 60px' : '60px 40px' }}>

        {/* Success Icon */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: isMobile ? 60 : 72, height: isMobile ? 60 : 72, borderRadius: '50%',
            background: 'rgba(212,160,23,0.15)', border: '2px solid #D4A017',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
          }}>
            <Icon name="check" size={isMobile ? 26 : 32} color="#D4A017" />
          </div>
          <h1 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 700, color: '#f1f5f9', fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 12 }}>
            Booking Confirmed!
          </h1>
          <p style={{ color: '#94a3b8', fontSize: isMobile ? 14 : 15, lineHeight: 1.7 }}>
            Your stay at Regatta Suites Kuching is all set.{isMobile ? ' ' : <br />}A confirmation email has been sent to your inbox.
          </p>
        </div>

        {/* Confirmation Card */}
        <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 20, overflow: 'hidden' }}>
          {/* Room Banner */}
          <div style={{ position: 'relative', height: isMobile ? 160 : 200 }}>
            <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,20,36,0.9) 0%, transparent 50%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
              <span style={{ background: '#D4A017', color: '#000', fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 6, letterSpacing: '0.08em' }}>CONFIRMED</span>
              <h2 style={{ color: '#fff', fontSize: isMobile ? 18 : 24, fontWeight: 700, marginTop: 8, fontFamily: "'Playfair Display', Georgia, serif" }}>{room.name}</h2>
            </div>
          </div>

          {/* Inner grid — stacked on mobile, side-by-side on desktop */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0 }}>
            {/* Reservation Summary */}
            <div style={{ padding: isMobile ? 20 : 28, borderRight: isMobile ? 'none' : '1px solid #1e293b', borderBottom: isMobile ? '1px solid #1e293b' : 'none' }}>
              <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 12 }}>RESERVATION SUMMARY</p>
              <p style={{ color: '#f1f5f9', fontSize: isMobile ? 18 : 22, fontWeight: 700, marginBottom: 24, fontFamily: "'Playfair Display', Georgia, serif" }}>Ref: #{ref}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                <div>
                  <p style={{ color: '#64748b', fontSize: 11, marginBottom: 4 }}>Check-in</p>
                  <p style={{ color: '#f1f5f9', fontSize: 16, fontWeight: 700 }}>—</p>
                  <p style={{ color: '#64748b', fontSize: 11 }}>After 2:00 PM</p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: 11, marginBottom: 4 }}>Check-out</p>
                  <p style={{ color: '#f1f5f9', fontSize: 16, fontWeight: 700 }}>—</p>
                  <p style={{ color: '#64748b', fontSize: 11 }}>Before 12:00 Noon</p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #1e293b', paddingTop: 20 }}>
                {[
                  { icon: 'bed', label: 'Room Type', val: room.name },
                  { icon: 'users', label: 'Max Guests', val: room.maxGuests },
                  { icon: 'map', label: 'Property', val: 'Regatta Suites Kuching' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <Icon name={row.icon} size={16} color="#D4A017" />
                    <div>
                      <p style={{ color: '#64748b', fontSize: 11 }}>{row.label}</p>
                      <p style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600 }}>{row.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Details */}
            <div style={{ padding: isMobile ? 20 : 28 }}>
              <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 20 }}>PAYMENT DETAILS</p>
              {[
                { label: `Nightly Rate × 2 Nights`, val: `RM ${nightly}.00` },
                { label: 'Service Fee', val: `RM ${serviceFee}.00` },
                { label: 'Taxes & Fees', val: `RM ${taxes}.00` },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ color: '#64748b', fontSize: isMobile ? 13 : 14 }}>{row.label}</span>
                  <span style={{ color: '#94a3b8', fontSize: isMobile ? 13 : 14 }}>{row.val}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #1e293b', paddingTop: 16, marginTop: 8, marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#f1f5f9', fontSize: isMobile ? 15 : 16, fontWeight: 700 }}>Total Paid</span>
                  <span style={{ color: '#D4A017', fontSize: isMobile ? 18 : 22, fontWeight: 700 }}>RM {grandTotal}.00</span>
                </div>
                <p style={{ color: '#475569', fontSize: 12, marginTop: 4 }}>Charged to Card ending in •••• {card || '4412'}</p>
              </div>

              <button
                onClick={handleDownload}
                style={{
                  width: '100%', padding: '13px', background: '#D4A017',
                  color: '#000', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700,
                  cursor: 'pointer', fontFamily: 'inherit', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#b8860b'}
                onMouseLeave={e => e.currentTarget.style.background = '#D4A017'}
              >
                <Icon name="download" size={16} color="#000" /> Download Receipt
              </button>

              <button
                onClick={() => navigate('home')}
                style={{
                  width: '100%', padding: '13px', background: 'none',
                  color: '#94a3b8', border: '1px solid #1e293b', borderRadius: 12,
                  fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#D4A017'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1e293b'}
              >
                <Icon name="home" size={16} color="currentColor" /> Back to Home
              </button>
            </div>
          </div>

          {/* Perks Bar */}
          <div style={{ borderTop: '1px solid #1e293b', padding: isMobile ? '14px 20px' : '16px 28px', display: 'flex', justifyContent: 'center', gap: isMobile ? 16 : 40, flexWrap: 'wrap' }}>
            {['📶 Complimentary High-Speed WiFi', '🏊 Infinity Pool Access', '💪 Sky Gym Access'].map(perk => (
              <span key={perk} style={{ color: '#64748b', fontSize: isMobile ? 12 : 13 }}>{perk}</span>
            ))}
          </div>
        </div>

        {/* Address + Contact — stacked on mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20, marginTop: 24 }}>
          <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: isMobile ? 20 : 24 }}>
            <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 10 }}>HOTEL ADDRESS</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <Icon name="map" size={18} color="#D4A017" />
              <div>
                <p style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Regatta Suites Kuching</p>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>
                  Unit G-31, Ground Floor, LD Legenda,<br />
                  Jalan Tun Abang Haji Openg,<br />
                  93000 Kuching, Sarawak, Malaysia.
                </p>
              </div>
            </div>
          </div>
          <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: isMobile ? 20 : 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ color: '#D4A017', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 10 }}>NEED ASSISTANCE?</p>
            <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
              Our team is available to assist you with your arrival.
            </p>
            <a href="tel:+6082230099" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#D4A017', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 8 }}>
              <Icon name="phone" size={15} color="#D4A017" /> +60 82-230099
            </a>
            <a href="https://wa.me/60169200847" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#22c55e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: '#334155', fontSize: 13, marginTop: 40 }}>
          © 2024 Regatta Suites Kuching. Owned by Kozi Square Sdn Bhd.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
