import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Icon from '../components/Icon';
import { ROOMS } from '../data/rooms';

const CheckoutPage = ({ booking, navigate, setConfirmation }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;

  const room       = booking.room || ROOMS[1];
  const nights     = 2;
  const serviceFee = 45;
  const taxes      = 45;
  const total      = room.price * nights + serviceFee + taxes;

  const [form,    setForm]    = useState({ name: '', card: '', expiry: '', cvv: '' });
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())                          e.name   = 'Cardholder name is required';
    if (form.card.replace(/\s/g, '').length < 16)   e.card   = 'Enter a valid 16-digit card number';
    if (form.expiry.length < 5)                     e.expiry = 'Enter a valid expiry date';
    if (form.cvv.length < 3)                        e.cvv    = 'Enter a valid CVV';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmation({ room, total, ref: `RS-${Math.floor(Math.random() * 90000 + 10000)}`, card: form.card.replace(/\s/g, '').slice(-4) });
      navigate('confirmation');
    }, 1800);
  };

  const formatCard   = v => v.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
  const formatExpiry = v => { const d = v.replace(/\D/g, '').slice(0, 4); return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d; };

  return (
    <div style={{ background: '#070c1a', minHeight: '100vh', paddingTop: 64 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '28px 20px 60px' : '48px 40px' }}>

        <button onClick={() => navigate('room-detail')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontFamily: 'inherit', padding: 0 }}>← Back</button>

        <h1 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 700, color: '#f1f5f9', fontFamily: "'Playfair Display',Georgia,serif", marginBottom: 6 }}>Complete Your Booking</h1>
        <p style={{ color: '#64748b', marginBottom: 28, fontSize: isMobile ? 13 : 14 }}>Secure your stay at Regatta Suites Kuching</p>

        {/* Stacks on mobile, side-by-side on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.3fr', gap: isMobile ? 20 : 28 }}>

          {/* ── Booking summary ──────────────────────────────────────────── */}
          <div style={{ background: '#0d1424', border: '1px solid #1e293b', borderRadius: 16, padding: isMobile ? 20 : 28 }}>
            <h2 style={{ color: '#f1f5f9', fontSize: isMobile ? 16 : 18, fontWeight: 700, fontFamily: "'Playfair Display',Georgia,serif", marginBottom: 16 }}>Booking Summary</h2>

            <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 16, height: isMobile ? 160 : 200 }}>
              <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h3 style={{ color: '#f1f5f9', fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 4, fontFamily: "'Playfair Display',Georgia,serif" }}>{room.name}</h3>
            <p style={{ color: '#D4A017', fontSize: 12, marginBottom: 16 }}>Regatta Suites Kuching</p>

            {[['Stay Dates', booking.checkIn && booking.checkOut ? `${booking.checkIn} → ${booking.checkOut}` : '—', 'calendar'], ['Duration', `${nights} Nights · ${booking.guests || '2 Adults'}`, 'bed']].map(([l, v, icon]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Icon name={icon} size={15} color="#D4A017" />
                <span style={{ color: '#64748b', fontSize: 12, flex: 1 }}>{l}</span>
                <span style={{ color: '#f1f5f9', fontSize: 12, fontWeight: 600 }}>{v}</span>
              </div>
            ))}

            <div style={{ borderTop: '1px solid #1e293b', paddingTop: 16, marginTop: 4 }}>
              {[[`Rate × ${nights} nights`, `RM ${room.price} × ${nights}`], ['Service Fee', `RM ${serviceFee}`], ['Taxes', `RM ${taxes}`]].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ color: '#64748b', fontSize: 13 }}>{l}</span>
                  <span style={{ color: '#94a3b8', fontSize: 13 }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid #1e293b' }}>
                <span style={{ color: '#f1f5f9', fontSize: isMobile ? 15 : 16, fontWeight: 700 }}>Total</span>
                <span style={{ color: '#D4A017', fontSize: isMobile ? 18 : 22, fontWeight: 700 }}>RM {total}</span>
              </div>
            </div>
          </div>

          {/* ── Payment form ─────────────────────────────────────────────── */}
          <div style={{ background: '#0d1424', border: '2px solid rgba(212,160,23,0.25)', borderRadius: 16, padding: isMobile ? 20 : 32 }}>
            <h2 style={{ color: '#f1f5f9', fontSize: isMobile ? 18 : 22, fontWeight: 700, fontFamily: "'Playfair Display',Georgia,serif", marginBottom: 24 }}>Payment Information</h2>

            {[['CARDHOLDER NAME', 'name', 'text', 'John Doe', 'user'], ['CARD NUMBER', 'card', 'text', '0000 0000 0000 0000', 'card']].map(([label, field, type, ph, icon]) => (
              <div key={field} style={{ marginBottom: 18 }}>
                <label style={{ color: '#64748b', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{label}</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#070c1a', border: `1px solid ${errors[field] ? '#ef4444' : '#1e293b'}`, borderRadius: 10, padding: '13px 14px' }}>
                  <Icon name={icon} size={15} color="#475569" />
                  <input type={type} value={form[field]}
                    onChange={e => setForm(p => ({ ...p, [field]: field === 'card' ? formatCard(e.target.value) : e.target.value }))}
                    placeholder={ph} maxLength={field === 'card' ? 19 : undefined}
                    style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: isMobile ? 14 : 15, outline: 'none', fontFamily: 'inherit', flex: 1 }}
                  />
                </div>
                {errors[field] && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors[field]}</p>}
              </div>
            ))}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 22 }}>
              {[['EXPIRY', 'expiry', 'MM / YY', 'calendar'], ['CVV', 'cvv', '123', 'lock']].map(([label, field, ph, icon]) => (
                <div key={field}>
                  <label style={{ color: '#64748b', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 7 }}>{label}</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#070c1a', border: `1px solid ${errors[field] ? '#ef4444' : '#1e293b'}`, borderRadius: 10, padding: '13px 12px' }}>
                    <Icon name={icon} size={15} color="#475569" />
                    <input type={field === 'cvv' ? 'password' : 'text'} value={form[field]}
                      onChange={e => setForm(p => ({ ...p, [field]: field === 'expiry' ? formatExpiry(e.target.value) : e.target.value.replace(/\D/g, '').slice(0, 3) }))}
                      placeholder={ph} maxLength={field === 'expiry' ? 5 : 3}
                      style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: 14, outline: 'none', fontFamily: 'inherit', flex: 1 }}
                    />
                  </div>
                  {errors[field] && <p style={{ color: '#ef4444', fontSize: 11, marginTop: 4 }}>{errors[field]}</p>}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, padding: '12px 14px', background: 'rgba(37,99,235,0.08)', borderRadius: 10, border: '1px solid rgba(37,99,235,0.2)' }}>
              <Icon name="shield" size={16} color="#2563eb" />
              <p style={{ color: '#64748b', fontSize: 12 }}>
                256-bit SSL encryption. You will be charged <strong style={{ color: '#94a3b8' }}>RM {total}</strong>. Free cancellation until check-in.
              </p>
            </div>

            <button onClick={handlePay} disabled={loading} style={{
              width: '100%', padding: isMobile ? 14 : 16,
              background: loading ? '#92400e' : '#D4A017', color: '#000',
              border: 'none', borderRadius: 12, fontSize: isMobile ? 14 : 15, fontWeight: 800,
              cursor: loading ? 'wait' : 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              letterSpacing: '0.04em', transition: 'all 0.2s',
            }}>
              {loading ? '⏳ PROCESSING...' : <><span>COMPLETE PAYMENT</span><Icon name="arrow" size={16} color="#000" /></>}
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 16, opacity: 0.5 }}>
              {['VISA', 'MC', 'AMEX', 'FPX'].map(c => (
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
