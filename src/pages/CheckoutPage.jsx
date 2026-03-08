import { useState } from 'react';
import Icon from '../components/Icon';
import useWindowSize from '../hooks/useWindowSize';
import { ROOMS } from '../data/rooms';

const CheckoutPage = ({ booking, navigate, setConfirmation }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;

  const room = booking.room || ROOMS[3];
  const nights = 2;
  const nightly = room.price * nights;
  const serviceFee = 45;
  const taxes = 45;
  const total = nightly + serviceFee + taxes;

  const [form, setForm] = useState({ name: '', card: '', expiry: '', cvv: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Cardholder name is required';
    if (form.card.replace(/\s/g, '').length < 16) e.card = 'Enter a valid 16-digit card number';
    if (form.expiry.length < 5) e.expiry = 'Enter a valid expiry date';
    if (form.cvv.length < 3) e.cvv = 'Enter a valid CVV';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmation({
        room,
        total,
        ref: `RS-${Math.floor(Math.random() * 90000 + 10000)}`,
        card: form.card.replace(/\s/g, '').slice(-4),
      });
      navigate('confirmation');
    }, 1800);
  };

  const formatCard = (val) => val.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    return digits.length >= 3 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  };

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '28px 20px 60px' : '48px 40px' }}>

        <button
          onClick={() => navigate('room-detail')}
          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontFamily: 'inherit', padding: 0 }}
        >
          ← Back
        </button>

        <h1 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 700, color: '#f1f5f9', fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 8 }}>
          Complete Your Booking
        </h1>
        <p style={{ color: '#64748b', marginBottom: isMobile ? 24 : 40, fontSize: isMobile ? 13 : 15 }}>Secure your luxury stay at Regatta Stay</p>

        {/* Stacked on mobile, side-by-side on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.3fr', gap: isMobile ? 20 : 28 }}>

          {/* ── Booking Summary ──────────────────────────────── */}
          <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: isMobile ? 20 : 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(212,160,23,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#D4A017', fontSize: 14 }}>ℹ</span>
              </div>
              <h2 style={{ color: '#f1f5f9', fontSize: isMobile ? 16 : 18, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" }}>Booking Summary</h2>
            </div>

            <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 20, height: isMobile ? 160 : 200 }}>
              <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 4, fontFamily: "'Playfair Display', Georgia, serif" }}>{room.name}</h3>
            <p style={{ color: '#D4A017', fontSize: 13, marginBottom: 20 }}>Regatta Stay Resort & Spa</p>

            {[
              { label: 'Stay Dates', val: booking.checkIn && booking.checkOut ? `${booking.checkIn} → ${booking.checkOut}` : 'Oct 15 – Oct 17, 2024', icon: 'calendar' },
              { label: 'Duration', val: `${nights} Nights • 2 Adults`, icon: 'bed' },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <Icon name={row.icon} size={16} color="#D4A017" />
                <span style={{ color: '#64748b', fontSize: 13, flex: 1 }}>{row.label}</span>
                <span style={{ color: '#f1f5f9', fontSize: isMobile ? 12 : 13, fontWeight: 600 }}>{row.val}</span>
              </div>
            ))}

            <div style={{ borderTop: '1px solid #1e293b', paddingTop: 20, marginTop: 8 }}>
              {[
                { label: 'Nightly Rate', val: `RM ${room.price}.00 × ${nights}` },
                { label: 'Service Fee', val: `RM ${serviceFee}.00` },
                { label: 'Occupancy Taxes', val: `RM ${taxes}.00` },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ color: '#64748b', fontSize: isMobile ? 13 : 14 }}>{row.label}</span>
                  <span style={{ color: '#94a3b8', fontSize: isMobile ? 13 : 14 }}>{row.val}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 16, borderTop: '1px solid #1e293b' }}>
                <span style={{ color: '#f1f5f9', fontSize: isMobile ? 15 : 16, fontWeight: 700 }}>Total Amount</span>
                <span style={{ color: '#D4A017', fontSize: isMobile ? 18 : 22, fontWeight: 700 }}>RM {total}.00</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, padding: '14px 16px', background: 'rgba(37,99,235,0.08)', borderRadius: 10, border: '1px solid rgba(37,99,235,0.2)' }}>
              <Icon name="shield" size={18} color="#2563eb" />
              <div>
                <div style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em' }}>SECURE TRANSACTION</div>
                <div style={{ color: '#64748b', fontSize: 11 }}>Your information is protected by 256-bit SSL encryption</div>
              </div>
            </div>
          </div>

          {/* ── Payment Form ─────────────────────────────────── */}
          <div style={{ background: '#0d1424', border: '2px solid rgba(212,160,23,0.25)', borderRadius: 16, padding: isMobile ? 20 : 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <h2 style={{ color: '#f1f5f9', fontSize: isMobile ? 18 : 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" }}>Payment Information</h2>
              {!isMobile && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <Icon name="card" size={20} color="#334155" />
                  <Icon name="lock" size={20} color="#334155" />
                </div>
              )}
            </div>

            {/* Name */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>CARDHOLDER NAME</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#070c1a', border: `1px solid ${errors.name ? '#ef4444' : '#1e293b'}`, borderRadius: 10, padding: '14px 16px' }}>
                <Icon name="user" size={16} color="#475569" />
                <input
                  type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="Johnathan Doe"
                  style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: isMobile ? 14 : 15, outline: 'none', fontFamily: 'inherit', flex: 1 }}
                />
              </div>
              {errors.name && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
            </div>

            {/* Card Number */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>CARD NUMBER</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#070c1a', border: `1px solid ${errors.card ? '#ef4444' : '#1e293b'}`, borderRadius: 10, padding: '14px 16px' }}>
                <Icon name="card" size={16} color="#475569" />
                <input
                  type="text" value={form.card} onChange={e => setForm(p => ({ ...p, card: formatCard(e.target.value) }))}
                  placeholder="0000 0000 0000 0000" maxLength={19}
                  style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: isMobile ? 14 : 15, outline: 'none', fontFamily: 'inherit', flex: 1, letterSpacing: '0.05em' }}
                />
              </div>
              {errors.card && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.card}</p>}
            </div>

            {/* Expiry + CVV */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div>
                <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>EXPIRY DATE</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#070c1a', border: `1px solid ${errors.expiry ? '#ef4444' : '#1e293b'}`, borderRadius: 10, padding: '14px 14px' }}>
                  <Icon name="calendar" size={16} color="#475569" />
                  <input
                    type="text" value={form.expiry} onChange={e => setForm(p => ({ ...p, expiry: formatExpiry(e.target.value) }))}
                    placeholder="MM / YY" maxLength={5}
                    style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: isMobile ? 13 : 15, outline: 'none', fontFamily: 'inherit', flex: 1 }}
                  />
                </div>
                {errors.expiry && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.expiry}</p>}
              </div>
              <div>
                <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>CVV / CVC</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#070c1a', border: `1px solid ${errors.cvv ? '#ef4444' : '#1e293b'}`, borderRadius: 10, padding: '14px 14px' }}>
                  <Icon name="lock" size={16} color="#475569" />
                  <input
                    type="password" value={form.cvv} onChange={e => setForm(p => ({ ...p, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) }))}
                    placeholder="123" maxLength={3}
                    style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: isMobile ? 13 : 15, outline: 'none', fontFamily: 'inherit', flex: 1 }}
                  />
                </div>
                {errors.cvv && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors.cvv}</p>}
              </div>
            </div>

            <div style={{ background: '#070c1a', border: '1px solid #1e293b', borderRadius: 10, padding: '14px 16px', marginBottom: 24 }}>
              <p style={{ color: '#475569', fontSize: 12, lineHeight: 1.6 }}>
                By clicking "Complete Payment", you agree to our Terms of Service and Privacy Policy. You will be charged{' '}
                <strong style={{ color: '#94a3b8' }}>RM {total}.00</strong> immediately. Free cancellation until check-in.
              </p>
            </div>

            <button
              onClick={handlePay}
              disabled={loading}
              style={{
                width: '100%', padding: isMobile ? '14px' : '16px',
                background: loading ? '#92400e' : '#D4A017',
                color: '#000', border: 'none', borderRadius: 12,
                fontSize: isMobile ? 13 : 14, fontWeight: 800, cursor: loading ? 'wait' : 'pointer',
                fontFamily: 'inherit', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 8, letterSpacing: '0.06em', transition: 'all 0.2s',
              }}
            >
              {loading ? '⏳ PROCESSING...' : (<><span>COMPLETE PAYMENT</span><Icon name="arrow" size={16} color="#000" /></>)}
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 20, opacity: 0.5 }}>
              {['VISA', 'MC', 'AMEX'].map(c => (
                <div key={c} style={{ background: '#1e293b', borderRadius: 4, padding: '4px 8px', color: '#64748b', fontSize: 10, fontWeight: 700 }}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
