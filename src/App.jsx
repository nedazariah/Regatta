import { useState, useEffect, useRef } from "react";

// ─── RESPONSIVE HOOK ─────────────────────────────────────────────────────────
const useWindowSize = () => {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const fn = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return size;
};

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const LOGO_URL = "https://www.regattasuites.com.my/wp-content/uploads/2024/09/cropped-cropped-1727524546571-e1727526943510.png";
const HOTEL_INFO = {
  address: "Unit G-31, Ground Floor, LD Legenda, Jalan Tun Abang Haji Openg, 93000 Kuching, Sarawak",
  phone1: "+60 82-230099",
  phone2: "+60 82-231999",
  whatsapp: "+60169200847",
  checkIn: "14:00",
  checkOut: "12:00 (Noon)",
};

const ROOMS = [
  {
    id:1, name:"Kozi Twin", price:128, currency:"RM", rating:4.5, reviews:128,
    badge:"AVAILABLE", badgeColor:"#22c55e",
    description:"Two premium Slumberland twin beds with city views. Fashionable interiors designed with relaxation in mind.",
    longDescription:"The Kozi Twin room features fashionable interiors designed with relaxation in mind. Two premium Slumberland twin beds dressed in fresh linen offer a restful night's sleep, while city-facing windows let natural light fill the 24 m² space. Ideal for friends, colleagues, or guests who prefer separate sleeping arrangements.",
    amenities:["Free Wireless Internet","Sharp Aquos LED TV (40\")","Mini Fridge","In-room Safe Deposit Box","Cable TV","Independent A/C Controls","Electric Water Boiler","Slumberland Mattress","Hair Dryer","Daily Housekeeping"],
    bedInfo:"Twin Beds – W107cm × L191cm × H28cm × 2",
    images:["https://www.regattasuites.com.my/wp-content/uploads/2020/02/Deluxe-Twin-Bed-2.jpg","https://www.regattasuites.com.my/wp-content/uploads/2020/02/Deluxe-Twin-Bed-3.jpg","https://www.regattasuites.com.my/wp-content/uploads/2024/05/Deluxe-Twin-Bed.jpg"],
    category:"Twin Rooms", checkIn:"14:00", checkOut:"12:00 (Noon)", maxGuests:"2 Adults", size:"24 m²", totalRooms:71,
    note:"Max 2 guests. Extra bed not available.",
  },
  {
    id:2, name:"Kozi Queen", price:148, currency:"RM", rating:4.6, reviews:214,
    badge:"POPULAR", badgeColor:"#3b82f6",
    description:"Cosy retreat for couples with a plush Slumberland queen bed and city skyline views.",
    longDescription:"The Kozi Queen room blends fashionable interior design with everyday comfort. The centrepiece is a Slumberland queen-sized bed delivering a luxuriously restful sleep. The 24 m² room is bright and well-equipped, making it the ideal base for exploring Kuching.",
    amenities:["Free Wireless Internet","Sharp Aquos LED TV (40\")","Mini Fridge","In-room Safe Deposit Box","Cable TV","Independent A/C Controls","Electric Water Boiler","Slumberland Mattress","Hair Dryer","Daily Housekeeping"],
    bedInfo:"Queen Bed – W153cm × L191cm × H28cm",
    images:["https://www.regattasuites.com.my/wp-content/uploads/2024/05/Deluxe-Queen-Bed.jpg","https://www.regattasuites.com.my/wp-content/uploads/2020/02/Kozi-Queen-1.jpg","https://www.regattasuites.com.my/wp-content/uploads/2020/02/Kozi-Queen-3.jpg"],
    category:"Queen Rooms", checkIn:"14:00", checkOut:"12:00 (Noon)", maxGuests:"2 Adults", size:"24 m²", totalRooms:71,
    note:"Max 2 guests. Extra bed not available.",
  },
  {
    id:3, name:"Balcony Suites", price:188, currency:"RM", rating:4.8, reviews:89,
    badge:"BEST VALUE", badgeColor:"#D4A017",
    description:"Private balcony with city views, king/queen bed, sofa bed and premium Slumberland comfort.",
    longDescription:"The Balcony Suites King Bedroom offers fashionable décor with a private balcony overlooking the Kuching cityscape. Enjoy the added luxury of a sofa bed for extra guests and all the premium in-room conveniences that make Regatta Stay a true home away from home.",
    amenities:["Private Balcony with City View","Free Wireless Internet","Sharp Aquos LED TV (40\")","Mini Fridge","In-room Safe Deposit Box","Cable TV","Independent A/C Controls","Electric Water Boiler","Slumberland Mattress","Sofa Bed","Hair Dryer","Daily Housekeeping"],
    bedInfo:"King/Queen Bed + Sofa Bed",
    images:["https://www.regattasuites.com.my/wp-content/uploads/2024/05/Balcony-King.jpg","https://www.regattasuites.com.my/wp-content/uploads/2020/02/King-Bed-6.jpg","https://www.regattasuites.com.my/wp-content/uploads/2020/02/King-Bed-3.jpg"],
    category:"Suites", checkIn:"14:00", checkOut:"12:00 (Noon)", maxGuests:"3 Adults", size:"24 m²", totalRooms:"Select",
    note:"Max 3 guests. Extra bed not available.",
  },
  {
    id:4, name:"Rentap Family", price:238, currency:"RM", rating:4.7, reviews:176,
    badge:"FAMILY", badgeColor:"#8b5cf6",
    description:"Rentap-themed family room with a fun bunk bed slide — the ultimate choice for families with children.",
    longDescription:"The Rentap Family room is uniquely designed around the Rentap warrior theme — loaded with homely comfort and a playful spirit. The signature bunk bed with an attached fun slide that children love. The layout comfortably sleeps up to 6 guests.",
    amenities:["Fun Bunk Bed with Slide","Free Wireless Internet","Sharp Aquos LED TV (40\")","Mini Fridge","In-room Safe Deposit Box","Cable TV","Independent A/C Controls","Electric Water Boiler","Slumberland Mattress","Hair Dryer","Daily Housekeeping"],
    bedInfo:"Queen + Queen + Twin Bunk Beds",
    images:["https://www.regattasuites.com.my/wp-content/uploads/2024/05/Rentap-Family-Room.jpg","https://www.regattasuites.com.my/wp-content/uploads/2020/02/Rentap-Family-Room-2.jpg","https://www.regattasuites.com.my/wp-content/uploads/2020/02/Rentap-Family-Room-4.jpg"],
    category:"Family Rooms", checkIn:"14:00", checkOut:"12:00 (Noon)", maxGuests:"6 Adults", size:"24 m²", totalRooms:24,
    note:"Max 6 guests. Extra bed not available.",
  },
];

const EXPERIENCES = [
  { id:1, category:"LEISURE", title:"Infinity Pool", description:"Rooftop infinity pool with panoramic city views. Open daily 7:00 AM – 10:00 PM.", image:"https://www.regattasuites.com.my/wp-content/uploads/2020/04/pool.png" },
  { id:2, category:"FITNESS", title:"Sky Gym", description:"Fully equipped Sky Gym with modern exercise equipment and stunning city views.", image:"https://www.regattasuites.com.my/wp-content/uploads/2020/04/gym.png" },
  { id:3, category:"DINING", title:"Theatre Restaurant", description:"Savour Chinese, Malaysian and local Sarawakian cuisine. Serving breakfast, lunch and dinner.", image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size=18, color="currentColor" }) => {
  const icons = {
    wifi:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>),
    tv:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>),
    thermometer:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>),
    glass:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M8 2h8l-1 10H9L8 2z"/><path d="M9 12c0 3 1.5 6 3 8"/></svg>),
    star:(<svg width={size} height={size} fill={color} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
    search:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>),
    calendar:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>),
    users:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    arrow:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>),
    check:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>),
    card:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>),
    lock:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
    user:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
    shield:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    download:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>),
    home:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
    map:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>),
    phone:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>),
    globe:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    mail:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>),
    bed:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>),
    menu:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>),
    x:(<svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>),
  };
  return icons[name] || null;
};

const Stars = ({ rating }) => (
  <span style={{ display:"inline-flex", gap:2 }}>
    {[1,2,3,4,5].map(i => (
      <Icon key={i} name="star" size={12} color={i <= Math.round(rating) ? "#D4A017" : "#334155"} />
    ))}
  </span>
);

// ─── HEADER ──────────────────────────────────────────────────────────────────
const Header = ({ currentPage, navigate }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        position:"fixed",top:0,left:0,right:0,zIndex:1000,
        background:"rgba(10,15,30,0.97)",backdropFilter:"blur(12px)",
        borderBottom:"1px solid rgba(212,160,23,0.15)",
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding: isMobile ? "0 20px" : "0 40px", height:64,
      }}>
        <div onClick={() => { navigate("home"); setMenuOpen(false); }} style={{ display:"flex",alignItems:"center",cursor:"pointer" }}>
          <img src={LOGO_URL} alt="Regatta Suites" style={{ height: isMobile ? 34 : 40, objectFit:"contain" }} />
        </div>

        {isMobile ? (
          <button onClick={() => setMenuOpen(o => !o)} style={{ background:"none",border:"none",cursor:"pointer",padding:4,display:"flex",alignItems:"center" }}>
            <Icon name={menuOpen ? "x" : "menu"} size={24} color="#e2e8f0" />
          </button>
        ) : (
          <nav style={{ display:"flex", gap:32 }}>
            {[["Home","home"],["Rooms","rooms"],["Facilities","home"],["Contact","home"]].map(([label,page]) => (
              <button key={label} onClick={() => navigate(page)} style={{
                background:"none",border:"none",cursor:"pointer",padding:0,
                color: currentPage===page && page==="rooms" ? "#D4A017" : "#cbd5e1",
                fontSize:14,fontWeight:500,fontFamily:"inherit",transition:"color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color="#D4A017"}
                onMouseLeave={e => e.target.style.color=(currentPage===page&&page==="rooms")?"#D4A017":"#cbd5e1"}
              >{label}</button>
            ))}
          </nav>
        )}

        {!isMobile && (
          <button onClick={() => navigate("rooms")} style={{
            background:"#2563eb",color:"#fff",border:"none",borderRadius:8,
            padding:"9px 20px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",
          }}
            onMouseEnter={e => e.currentTarget.style.background="#1d4ed8"}
            onMouseLeave={e => e.currentTarget.style.background="#2563eb"}
          >Book Now</button>
        )}
      </header>

      {/* Mobile Drawer */}
      {isMobile && menuOpen && (
        <div style={{
          position:"fixed",top:64,left:0,right:0,zIndex:999,
          background:"rgba(10,15,30,0.98)",backdropFilter:"blur(12px)",
          borderBottom:"1px solid rgba(212,160,23,0.15)",
          padding:"20px 24px 24px",
        }}>
          {[["Home","home"],["Rooms","rooms"],["Facilities","home"],["Contact","home"]].map(([label,page]) => (
            <button key={label} onClick={() => { navigate(page); setMenuOpen(false); }} style={{
              display:"block",width:"100%",background:"none",border:"none",cursor:"pointer",
              color:"#e2e8f0",fontSize:16,fontWeight:500,fontFamily:"inherit",
              textAlign:"left",padding:"12px 0",borderBottom:"1px solid #0f172a",
            }}>{label}</button>
          ))}
          <button onClick={() => { navigate("rooms"); setMenuOpen(false); }} style={{
            marginTop:16,width:"100%",padding:"13px",background:"#2563eb",color:"#fff",
            border:"none",borderRadius:10,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",
          }}>Book Now</button>
        </div>
      )}
    </>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = ({ navigate }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;

  return (
    <footer style={{ background:"#070b18",borderTop:"1px solid rgba(212,160,23,0.12)",padding: isMobile ? "40px 24px 24px" : "56px 80px 24px" }}>
      <div style={{
        display:"grid",
        gridTemplateColumns: isMobile ? "1fr" : w < 1024 ? "1fr 1fr" : "1.6fr 1fr 1fr 1.3fr",
        gap: isMobile ? 32 : 48,
        marginBottom:40,
      }}>
        <div>
          <div onClick={() => navigate("home")} style={{ cursor:"pointer",marginBottom:14 }}>
            <img src={LOGO_URL} alt="Regatta Suites" style={{ height:40,objectFit:"contain" }} />
          </div>
          <p style={{ color:"#64748b",fontSize:13,lineHeight:1.7,maxWidth:260 }}>
            Urban living redefined. A cosy home away from home in the heart of Kuching city, Sarawak.
          </p>
        </div>
        {!isMobile && (
          <div>
            <h4 style={{ color:"#f1f5f9",fontSize:14,fontWeight:600,marginBottom:16 }}>Quick Links</h4>
            {["About Us","Our Rooms","Facilities","Dining","Promotions","Gallery"].map(l => (
              <div key={l} style={{ color:"#64748b",fontSize:13,marginBottom:10,cursor:"pointer" }}
                onMouseEnter={e => e.target.style.color="#D4A017"}
                onMouseLeave={e => e.target.style.color="#64748b"}
              >{l}</div>
            ))}
          </div>
        )}
        {!isMobile && (
          <div>
            <h4 style={{ color:"#f1f5f9",fontSize:14,fontWeight:600,marginBottom:16 }}>Services</h4>
            {["Infinity Pool","Sky Gym","Theatre Restaurant","Meetings & Banquet","MICE Events"].map(l => (
              <div key={l} style={{ color:"#64748b",fontSize:13,marginBottom:10,cursor:"pointer" }}
                onMouseEnter={e => e.target.style.color="#D4A017"}
                onMouseLeave={e => e.target.style.color="#64748b"}
              >{l}</div>
            ))}
          </div>
        )}
        <div>
          <h4 style={{ color:"#f1f5f9",fontSize:14,fontWeight:600,marginBottom:14 }}>Contact Us</h4>
          <div style={{ color:"#64748b",fontSize:13,lineHeight:2 }}>
            <div style={{ marginBottom:4 }}>📍 {HOTEL_INFO.address}</div>
            <div>📞 {HOTEL_INFO.phone1}</div>
            <div>📞 {HOTEL_INFO.phone2}</div>
            <a href={`https://wa.me/${HOTEL_INFO.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" style={{ color:"#22c55e",textDecoration:"none" }}>💬 WhatsApp Us</a>
            <div style={{ marginTop:8,fontSize:12,color:"#475569" }}>Check-in: {HOTEL_INFO.checkIn} | Check-out: {HOTEL_INFO.checkOut}</div>
          </div>
        </div>
      </div>
      <div style={{ borderTop:"1px solid #0f172a",paddingTop:20 }}>
        <p style={{ color:"#475569",fontSize:12,textAlign: isMobile ? "center" : "left" }}>© 2024 Regatta Suites Kuching. Owned by Kozi Square Sdn Bhd. All rights reserved.</p>
      </div>
    </footer>
  );
};

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
const HomePage = ({ navigate, setBooking }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const px = isMobile ? "20px" : isTablet ? "40px" : "80px";

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight:"100vh",
        background:"linear-gradient(160deg,#050a1a 0%,#0a1628 40%,#0d1f35 100%)",
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
        position:"relative",overflow:"hidden",padding: isMobile ? "80px 0 40px" : "0",
      }}>
        <div style={{ position:"absolute",inset:0,backgroundImage:"url(https://www.regattasuites.com.my/wp-content/uploads/2024/05/Deluxe-Queen-Bed.jpg)",backgroundSize:"cover",backgroundPosition:"center",opacity:0.18 }} />

        <div style={{ position:"relative",zIndex:1,textAlign:"center",width:"100%",maxWidth: isMobile ? "100%" : 660,padding: isMobile ? "0 20px" : "0 24px" }}>
          <img src={LOGO_URL} alt="Regatta Suites" style={{ height: isMobile ? 48 : 60,objectFit:"contain",marginBottom: isMobile ? 18 : 24 }} />

          <div style={{ display:"inline-block",border:"1px solid rgba(212,160,23,0.4)",borderRadius:20,padding:"5px 16px",marginBottom: isMobile ? 14 : 18,color:"#D4A017",fontSize:10,fontWeight:700,letterSpacing:"0.12em" }}>
            URBAN LIVING REDEFINED
          </div>

          <h1 style={{ fontSize: isMobile ? 30 : "clamp(26px,4.5vw,48px)",fontWeight:700,lineHeight:1.2,color:"#fff",marginBottom:10,fontFamily:"'Playfair Display',Georgia,serif" }}>
            Your Home Away From<br />
            <span style={{ fontStyle:"italic",color:"#D4A017" }}>Home in Kuching</span>
          </h1>

          <p style={{ color:"#94a3b8",fontSize: isMobile ? 13 : 14,lineHeight:1.7,marginBottom: isMobile ? 24 : 32,padding: isMobile ? "0 8px" : 0 }}>
            {isMobile
              ? "144 modern rooms at the heart of Kuching city."
              : "144 modern rooms at the heart of Kuching city — steps from AEON Mall, Sarawak General Hospital, and Kuching's best dining."}
          </p>

          {/* Search Card */}
          <div style={{
            background:"rgba(13,20,36,0.94)",backdropFilter:"blur(16px)",
            borderRadius: isMobile ? 16 : 20,padding: isMobile ? "20px 16px 18px" : "28px 28px 22px",
            border:"1px solid rgba(212,160,23,0.2)",boxShadow:"0 24px 64px rgba(0,0,0,0.55)",
            margin: isMobile ? "0 4px" : 0,
          }}>
            {/* Check-in & Check-out */}
            {isMobile ? (
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14 }}>
                {[["CHECK-IN",checkIn,setCheckIn],["CHECK-OUT",checkOut,setCheckOut]].map(([label,val,set]) => (
                  <div key={label}>
                    <label style={{ display:"block",color:"#D4A017",fontSize:9,fontWeight:700,letterSpacing:"0.12em",marginBottom:6 }}>{label}</label>
                    <div style={{ display:"flex",alignItems:"center",gap:6 }}>
                      <Icon name="calendar" size={13} color="#64748b" />
                      <input type="date" value={val} onChange={e => set(e.target.value)} style={{ background:"none",border:"none",color:val?"#e2e8f0":"#475569",fontSize:12,outline:"none",fontFamily:"inherit",width:"100%",colorScheme:"dark" }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1px 1fr",alignItems:"start",marginBottom:16 }}>
                <div style={{ paddingRight:20 }}>
                  <label style={{ display:"block",color:"#D4A017",fontSize:10,fontWeight:700,letterSpacing:"0.12em",marginBottom:8 }}>CHECK-IN</label>
                  <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                    <Icon name="calendar" size={15} color="#64748b" />
                    <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} style={{ background:"none",border:"none",color:checkIn?"#e2e8f0":"#475569",fontSize:14,fontWeight:500,outline:"none",fontFamily:"inherit",width:"100%",colorScheme:"dark",cursor:"pointer" }} />
                  </div>
                </div>
                <div style={{ background:"rgba(255,255,255,0.08)",width:1,alignSelf:"stretch" }} />
                <div style={{ paddingLeft:20 }}>
                  <label style={{ display:"block",color:"#D4A017",fontSize:10,fontWeight:700,letterSpacing:"0.12em",marginBottom:8 }}>CHECK-OUT</label>
                  <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                    <Icon name="calendar" size={15} color="#64748b" />
                    <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} style={{ background:"none",border:"none",color:checkOut?"#e2e8f0":"#475569",fontSize:14,fontWeight:500,outline:"none",fontFamily:"inherit",width:"100%",colorScheme:"dark",cursor:"pointer" }} />
                  </div>
                </div>
              </div>
            )}

            <div style={{ height:1,background:"rgba(255,255,255,0.07)",marginBottom: isMobile ? 12 : 16 }} />

            {/* Guests */}
            <div style={{ marginBottom: isMobile ? 14 : 20 }}>
              <label style={{ display:"block",color:"#D4A017",fontSize: isMobile ? 9 : 10,fontWeight:700,letterSpacing:"0.12em",marginBottom: isMobile ? 6 : 8 }}>GUESTS</label>
              <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                <Icon name="users" size={isMobile ? 13 : 15} color="#64748b" />
                <select value={guests} onChange={e => setGuests(e.target.value)} style={{ background:"none",border:"none",color:"#e2e8f0",fontSize: isMobile ? 13 : 14,fontWeight:500,outline:"none",fontFamily:"inherit",cursor:"pointer",colorScheme:"dark",width:"100%" }}>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                  <option>3 Adults</option>
                  <option>4–6 Guests (Family Room)</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => { setBooking(p => ({ ...p,checkIn,checkOut,guests })); navigate("rooms"); }}
              style={{ width:"100%",padding: isMobile ? "13px 0" : "15px 0",background:"#2563eb",color:"#fff",border:"none",borderRadius:12,fontSize: isMobile ? 14 : 15,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontFamily:"inherit",transition:"background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background="#1d4ed8"}
              onMouseLeave={e => e.currentTarget.style.background="#2563eb"}
            >
              <Icon name="search" size={17} color="#fff" /> Search Availability
            </button>
            <p style={{ color:"#334155",fontSize:11,textAlign:"center",marginTop:10 }}>Free cancellation available on selected rates</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background:"#070c1a",padding: isMobile ? "52px 24px 40px" : `80px ${px} 56px` }}>
        <div style={{ maxWidth:660,margin:"0 auto",textAlign:"center" }}>
          <p style={{ color:"#D4A017",fontSize:11,fontWeight:700,letterSpacing:"0.15em",marginBottom:14 }}>ABOUT REGATTA SUITES</p>
          <h2 style={{ fontSize: isMobile ? 26 : 36,fontWeight:700,color:"#f1f5f9",lineHeight:1.25,fontFamily:"'Playfair Display',Georgia,serif",marginBottom:16 }}>
            Where Comfort Meets<br />Convenience in Kuching
          </h2>
          <p style={{ color:"#64748b",fontSize: isMobile ? 14 : 15,lineHeight:1.8 }}>
            Regatta Stay is a new landmark strategically located at the heart of Kuching city. Offering a cosy home away from home, our mission is to ensure that our valued guests have a safe, comfortable and enjoyable stay. Each of our 144 rooms are furnished with guests' comfort and needs in mind, with free Wi-Fi available everywhere.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section style={{ background:"#070c1a",padding: isMobile ? "0 24px 64px" : `0 ${px} 96px` }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:32,flexWrap:"wrap",gap:12 }}>
          <div>
            <p style={{ color:"#D4A017",fontSize:11,fontWeight:700,letterSpacing:"0.15em",marginBottom:10 }}>HOTEL FACILITIES</p>
            <h2 style={{ fontSize: isMobile ? 24 : 36,fontWeight:700,color:"#f1f5f9",fontFamily:"'Playfair Display',Georgia,serif" }}>
              {isMobile ? "Everything Under One Roof" : "Everything You Need,\nUnder One Roof"}
            </h2>
          </div>
          <button onClick={() => navigate("rooms")} style={{ background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",gap:8,fontFamily:"inherit" }}>
            View All Rooms <Icon name="arrow" size={16} color="#94a3b8" />
          </button>
        </div>
        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)",gap: isMobile ? 16 : 24 }}>
          {EXPERIENCES.map(exp => (
            <div key={exp.id} style={{ borderRadius:16,overflow:"hidden",background:"#0d1424",border:"1px solid #1e293b",transition:"transform 0.25s,border-color 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.borderColor="rgba(212,160,23,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor="#1e293b"; }}
            >
              <div style={{ height: isMobile ? 160 : 200,overflow:"hidden" }}>
                <img src={exp.image} alt={exp.title} style={{ width:"100%",height:"100%",objectFit:"cover" }} />
              </div>
              <div style={{ padding: isMobile ? "16px 18px" : "20px 22px" }}>
                <p style={{ color:"#D4A017",fontSize:10,fontWeight:700,letterSpacing:"0.14em",marginBottom:8 }}>{exp.category}</p>
                <h3 style={{ color:"#f1f5f9",fontSize: isMobile ? 17 : 19,fontWeight:700,marginBottom:8,fontFamily:"'Playfair Display',Georgia,serif" }}>{exp.title}</h3>
                <p style={{ color:"#64748b",fontSize:13,lineHeight:1.7 }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:"#050a18",padding: isMobile ? "40px 24px" : `56px ${px}`,borderTop:"1px solid rgba(212,160,23,0.1)" }}>
        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",gap: isMobile ? 24 : 40,textAlign:"center" }}>
          {[["144","Modern Rooms"],["4","Room Categories"],["4.6★","Average Guest Rating"],["100%","Non-Smoking"]].map(([num,lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: isMobile ? 32 : 40,fontWeight:700,color:"#D4A017",fontFamily:"'Playfair Display',Georgia,serif" }}>{num}</div>
              <div style={{ color:"#64748b",fontSize: isMobile ? 12 : 14,marginTop:6 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Strip */}
      <section style={{ background:"#070c1a",padding: isMobile ? "28px 24px" : `28px ${px}`,borderTop:"1px solid #0f172a" }}>
        <div style={{ display:"flex",alignItems: isMobile ? "flex-start" : "center",justifyContent:"space-between",flexDirection: isMobile ? "column" : "row",gap: isMobile ? 20 : 0 }}>
          <div style={{ display:"flex",alignItems:"flex-start",gap:12 }}>
            <Icon name="map" size={18} color="#D4A017" />
            <div>
              <p style={{ color:"#f1f5f9",fontSize:14,fontWeight:600 }}>Regatta Suites Kuching</p>
              <p style={{ color:"#64748b",fontSize:12,lineHeight:1.6 }}>{HOTEL_INFO.address}</p>
            </div>
          </div>
          <div style={{ display:"flex",gap: isMobile ? 20 : 32,flexWrap:"wrap" }}>
            {[["8 min walk","Sarawak General Hospital"],["1.6 km","AEON Mall"],["15 min","KCH Airport"]].map(([d,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ color:"#D4A017",fontSize:12,fontWeight:700 }}>{d}</div>
                <div style={{ color:"#64748b",fontSize:11 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── ROOMS PAGE ──────────────────────────────────────────────────────────────
const RoomsPage = ({ navigate, setSelectedRoom }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const px = isMobile ? "20px" : isTablet ? "32px" : "80px";

  const [activeFilter, setActiveFilter] = useState("All Rooms");
  const filters = ["All Rooms","Twin Rooms","Queen Rooms","Suites","Family Rooms"];
  const filtered = activeFilter === "All Rooms" ? ROOMS : ROOMS.filter(r => r.category === activeFilter);

  return (
    <div style={{ background:"#070c1a",minHeight:"100vh",paddingTop:64 }}>
      <div style={{ padding:`12px ${px}`,background:"#050a18",borderBottom:"1px solid #0f172a" }}>
        <span style={{ color:"#64748b",fontSize:13 }}>
          <span style={{ cursor:"pointer" }} onClick={() => navigate("home")} onMouseEnter={e=>e.target.style.color="#D4A017"} onMouseLeave={e=>e.target.style.color="#64748b"}>Home</span>
          <span style={{ color:"#334155",margin:"0 8px" }}>›</span>
          <span style={{ color:"#D4A017" }}>Rooms</span>
        </span>
      </div>
      <div style={{ padding: isMobile ? "32px 20px 60px" : `48px ${px} 80px` }}>
        <h1 style={{ fontSize: isMobile ? 28 : 40,fontWeight:700,color:"#f1f5f9",fontFamily:"'Playfair Display',Georgia,serif",marginBottom:8 }}>
          Our Rooms <span style={{ color:"#D4A017" }}>&</span> Suites
        </h1>
        <p style={{ color:"#64748b",fontSize: isMobile ? 13 : 15,marginBottom:28,lineHeight:1.6 }}>
          144 rooms designed for your relaxation, with Slumberland mattresses and modern amenities.
        </p>

        {/* Filter tabs — horizontal scroll on mobile */}
        <div style={{ display:"flex",gap:8,marginBottom:32,overflowX:"auto",paddingBottom:4,WebkitOverflowScrolling:"touch",scrollbarWidth:"none" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              padding: isMobile ? "8px 14px" : "9px 18px",borderRadius:8,border:"1px solid",
              borderColor:activeFilter===f?"#2563eb":"#1e293b",
              background:activeFilter===f?"#2563eb":"transparent",
              color:activeFilter===f?"#fff":"#94a3b8",
              fontSize: isMobile ? 12 : 13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",
              whiteSpace:"nowrap",flexShrink:0,transition:"all 0.2s",
            }}>{f}</button>
          ))}
        </div>

        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(auto-fill,minmax(340px,1fr))",gap: isMobile ? 16 : 24 }}>
          {filtered.map(room => (
            <div key={room.id} style={{ background:"#0d1424",borderRadius:16,overflow:"hidden",border:"1px solid #1e293b",transition:"transform 0.25s,border-color 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.borderColor="rgba(212,160,23,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor="#1e293b"; }}
            >
              <div style={{ position:"relative",height: isMobile ? 180 : 210,overflow:"hidden" }}>
                <img src={room.images[0]} alt={room.name} style={{ width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s" }}
                  onMouseEnter={e => e.target.style.transform="scale(1.04)"}
                  onMouseLeave={e => e.target.style.transform="scale(1)"}
                />
                <div style={{ position:"absolute",top:12,right:12,background:room.badgeColor,color:"#fff",fontSize:10,fontWeight:700,letterSpacing:"0.08em",padding:"4px 10px",borderRadius:6 }}>
                  {room.badge}
                </div>
              </div>
              <div style={{ padding: isMobile ? "16px 18px 18px" : "20px 22px 22px" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6 }}>
                  <h3 style={{ color:"#f1f5f9",fontSize: isMobile ? 16 : 18,fontWeight:700,fontFamily:"'Playfair Display',Georgia,serif" }}>{room.name}</h3>
                  <div style={{ textAlign:"right",flexShrink:0,marginLeft:8 }}>
                    <span style={{ color:"#D4A017",fontSize: isMobile ? 17 : 20,fontWeight:700 }}>{room.currency} {room.price}</span>
                    <div style={{ color:"#64748b",fontSize:10 }}>per night</div>
                  </div>
                </div>
                <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:6 }}>
                  <Stars rating={room.rating} />
                  <span style={{ color:"#64748b",fontSize:11 }}>({room.rating}) · {room.reviews} reviews</span>
                </div>
                <div style={{ display:"flex",gap:12,marginBottom:10 }}>
                  <span style={{ color:"#475569",fontSize:11 }}>📐 {room.size}</span>
                  <span style={{ color:"#475569",fontSize:11 }}>👤 {room.maxGuests}</span>
                </div>
                <p style={{ color:"#64748b",fontSize: isMobile ? 12 : 13,lineHeight:1.6,marginBottom:16 }}>{room.description}</p>
                <button
                  onClick={() => { setSelectedRoom(room); navigate("room-detail"); }}
                  style={{ width:"100%",padding: isMobile ? "10px" : "11px",background:"#1e3a6e",color:"#60a5fa",border:"none",borderRadius:10,fontSize: isMobile ? 13 : 14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background="#2563eb"}
                  onMouseLeave={e => e.currentTarget.style.background="#1e3a6e"}
                >
                  View Details <Icon name="arrow" size={14} color="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── ROOM DETAIL PAGE ────────────────────────────────────────────────────────
const AMENITY_ICONS = { "Free Wireless Internet":"wifi","Sharp Aquos LED TV (40\")":"tv","Independent A/C Controls":"thermometer","Mini Fridge":"glass" };

const RoomDetailPage = ({ room, navigate, booking, setBooking }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const px = isMobile ? "20px" : isTablet ? "32px" : "40px";

  const [checkIn, setCheckIn] = useState(booking.checkIn || "");
  const [checkOut, setCheckOut] = useState(booking.checkOut || "");
  const [mainImg, setMainImg] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  const BookingPanel = () => (
    <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:16,padding: isMobile ? 20 : 24,marginBottom:16 }}>
      <p style={{ color:"#64748b",fontSize:10,fontWeight:700,letterSpacing:"0.12em",marginBottom:8 }}>TOTAL ESTIMATE</p>
      <div style={{ marginBottom:16 }}>
        <span style={{ color:"#f1f5f9",fontSize: isMobile ? 30 : 38,fontWeight:700 }}>{room.currency} {room.price}</span>
        <span style={{ color:"#64748b",fontSize:14 }}> /night</span>
      </div>
      <div style={{ borderTop:"1px solid #1e293b",paddingTop:14,marginBottom:14 }}>
        {[["Check-in",room.checkIn],["Check-out",room.checkOut],["Max Guests",room.maxGuests]].map(([l,v]) => (
          <div key={l} style={{ display:"flex",justifyContent:"space-between",marginBottom:10 }}>
            <span style={{ color:"#64748b",fontSize:13 }}>{l}</span>
            <span style={{ color:"#f1f5f9",fontSize:13,fontWeight:600 }}>{v}</span>
          </div>
        ))}
      </div>
      {[["Check-in Date",checkIn,setCheckIn],["Check-out Date",checkOut,setCheckOut]].map(([label,val,set]) => (
        <div key={label} style={{ marginBottom:10 }}>
          <label style={{ color:"#64748b",fontSize:11,display:"block",marginBottom:4 }}>{label}</label>
          <input type="date" value={val} onChange={e => set(e.target.value)} style={{ width:"100%",background:"#070c1a",border:"1px solid #1e293b",borderRadius:8,padding:"10px 12px",color:"#e2e8f0",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",colorScheme:"dark" }} />
        </div>
      ))}
      <button
        onClick={() => { setBooking(p => ({ ...p,room,checkIn,checkOut })); navigate("checkout"); }}
        style={{ width:"100%",padding:14,background:"#2563eb",color:"#fff",border:"none",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:12,transition:"background 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.background="#1d4ed8"}
        onMouseLeave={e => e.currentTarget.style.background="#2563eb"}
      >
        Book This Room <Icon name="arrow" size={16} color="#fff" />
      </button>
      <p style={{ color:"#475569",fontSize:11,textAlign:"center",marginTop:10 }}>FREE CANCELLATION ON SELECTED RATES</p>
    </div>
  );

  return (
    <div style={{ background:"#070c1a",minHeight:"100vh",paddingTop:64, paddingBottom: isMobile ? 80 : 0 }}>
      <div style={{ maxWidth:1200,margin:"0 auto",padding: `28px ${px} 80px` }}>
        <button onClick={() => navigate("rooms")} style={{ background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",gap:8,marginBottom:20,fontFamily:"inherit",padding:0 }}
          onMouseEnter={e => e.currentTarget.style.color="#D4A017"}
          onMouseLeave={e => e.currentTarget.style.color="#94a3b8"}
        >← Back to Rooms</button>

        {/* Desktop/Tablet: side-by-side | Mobile: stacked */}
        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 360px",gap:28,alignItems:"start" }}>

          {/* LEFT */}
          <div>
            <div style={{ borderRadius:14,overflow:"hidden",position:"relative",height: isMobile ? 240 : 360,marginBottom:10 }}>
              <img src={room.images[mainImg]} alt={room.name} style={{ width:"100%",height:"100%",objectFit:"cover" }} />
              <div style={{ position:"absolute",bottom:0,left:0,right:0,padding: isMobile ? "20px 18px" : "28px 24px",background:"linear-gradient(to top,rgba(0,0,0,0.85),transparent)" }}>
                <h1 style={{ color:"#fff",fontSize: isMobile ? 22 : 30,fontWeight:700,fontFamily:"'Playfair Display',Georgia,serif",marginBottom:4 }}>{room.name}</h1>
                <div style={{ display:"flex",alignItems:"center",gap:10,flexWrap:"wrap" }}>
                  <span style={{ color:"#D4A017",fontSize: isMobile ? 18 : 22,fontWeight:700 }}>{room.currency} {room.price}</span>
                  <span style={{ color:"#94a3b8",fontSize:13 }}>/night</span>
                  <Stars rating={room.rating} />
                  <span style={{ color:"#94a3b8",fontSize:11 }}>({room.reviews})</span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display:"flex",gap:8,marginBottom: isMobile ? 24 : 32,overflowX:"auto",WebkitOverflowScrolling:"touch" }}>
              {room.images.map((img,i) => (
                <div key={i} onClick={() => setMainImg(i)} style={{ borderRadius:8,overflow:"hidden",height: isMobile ? 56 : 72,minWidth: isMobile ? 80 : 120,flex: isMobile ? "0 0 80px" : 1,cursor:"pointer",border:`2px solid ${mainImg===i?"#D4A017":"transparent"}`,transition:"border-color 0.2s" }}>
                  <img src={img} alt="" style={{ width:"100%",height:"100%",objectFit:"cover" }} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom:24 }}>
              <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:12 }}>
                <div style={{ width:28,height:2,background:"#2563eb" }} />
                <h2 style={{ color:"#94a3b8",fontSize:11,fontWeight:700,letterSpacing:"0.14em" }}>ROOM OVERVIEW</h2>
              </div>
              <p style={{ color:"#94a3b8",fontSize: isMobile ? 13 : 15,lineHeight:1.85 }}>{room.longDescription}</p>
            </div>

            {/* Specs grid */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:24 }}>
              {[["Room Size",room.size],["Max Guests",room.maxGuests],["Check-in",room.checkIn],["Check-out",room.checkOut]].map(([l,v]) => (
                <div key={l} style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:10,padding:"12px 14px",textAlign:"center" }}>
                  <div style={{ color:"#D4A017",fontSize:13,fontWeight:700 }}>{v}</div>
                  <div style={{ color:"#64748b",fontSize:11,marginTop:3 }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:10,padding:"12px 16px",marginBottom:24,display:"flex",alignItems:"center",gap:10 }}>
              <Icon name="bed" size={16} color="#D4A017" />
              <span style={{ color:"#94a3b8",fontSize:13 }}><strong style={{ color:"#e2e8f0" }}>Beds:</strong> {room.bedInfo}</span>
            </div>

            <h3 style={{ color:"#f1f5f9",fontSize: isMobile ? 16 : 18,fontWeight:700,marginBottom:14,fontFamily:"'Playfair Display',Georgia,serif" }}>Room Amenities</h3>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,marginBottom:16 }}>
              {room.amenities.slice(0,4).map(a => (
                <div key={a} style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:10,padding:"14px 10px",textAlign:"center" }}>
                  <Icon name={AMENITY_ICONS[a]||"check"} size={20} color="#2563eb" />
                  <div style={{ color:"#94a3b8",fontSize:9,fontWeight:700,letterSpacing:"0.05em",marginTop:6,lineHeight:1.4 }}>{a.toUpperCase()}</div>
                </div>
              ))}
            </div>
            <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",gap:8,marginBottom:24 }}>
              {room.amenities.map(a => (
                <div key={a} style={{ display:"flex",alignItems:"center",gap:8,color:"#94a3b8",fontSize:13 }}>
                  <div style={{ width:18,height:18,borderRadius:"50%",background:"rgba(37,99,235,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <Icon name="check" size={10} color="#2563eb" />
                  </div>
                  {a}
                </div>
              ))}
            </div>

            {room.note && (
              <div style={{ background:"rgba(212,160,23,0.06)",border:"1px solid rgba(212,160,23,0.2)",borderRadius:10,padding:"12px 14px",marginBottom:16 }}>
                <p style={{ color:"#94a3b8",fontSize:12 }}>⚠️ {room.note} Fees on certain amenities may apply.</p>
              </div>
            )}

            {/* On mobile, render the booking panel here (in-flow) */}
            {isMobile && (
              <div style={{ marginTop:24 }}>
                <BookingPanel />
              </div>
            )}
          </div>

          {/* RIGHT: sticky sidebar (desktop/tablet only) */}
          {!isMobile && (
            <div style={{ position:"sticky",top:80,alignSelf:"start" }}>
              <BookingPanel />
              <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:14,padding:18,marginBottom:16 }}>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  {[[room.size,"Room Size"],[`${room.rating}★`,`${room.reviews} reviews`],[room.totalRooms,"Units"],[`${room.currency} ${room.price}`,"Per Night"]].map(([v,l]) => (
                    <div key={l} style={{ textAlign:"center",padding:"8px 0" }}>
                      <div style={{ color:"#D4A017",fontSize:14,fontWeight:700 }}>{v}</div>
                      <div style={{ color:"#64748b",fontSize:11,marginTop:2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:14,padding:18 }}>
                <p style={{ color:"#64748b",fontSize:11,fontWeight:700,letterSpacing:"0.1em",marginBottom:12 }}>NEED HELP?</p>
                <a href="tel:+6082230099" style={{ display:"flex",alignItems:"center",gap:10,color:"#94a3b8",fontSize:13,textDecoration:"none",marginBottom:8 }}>
                  <Icon name="phone" size={14} color="#D4A017" /> +60 82-230099
                </a>
                <a href="https://wa.me/60169200847" target="_blank" rel="noreferrer" style={{ display:"flex",alignItems:"center",gap:10,color:"#22c55e",fontSize:13,textDecoration:"none" }}>
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: sticky bottom CTA bar */}
      {isMobile && (
        <div style={{ position:"fixed",bottom:0,left:0,right:0,zIndex:900,background:"rgba(10,15,30,0.97)",borderTop:"1px solid rgba(212,160,23,0.2)",padding:"12px 20px",display:"flex",alignItems:"center",gap:12 }}>
          <div style={{ flex:1 }}>
            <div style={{ color:"#D4A017",fontSize:20,fontWeight:700 }}>{room.currency} {room.price}</div>
            <div style={{ color:"#64748b",fontSize:11 }}>per night</div>
          </div>
          <button
            onClick={() => { setBooking(p => ({ ...p,room,checkIn,checkOut })); navigate("checkout"); }}
            style={{ flex:2,padding:"13px",background:"#2563eb",color:"#fff",border:"none",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit" }}
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

// ─── CHECKOUT PAGE ───────────────────────────────────────────────────────────
const CheckoutPage = ({ booking, navigate, setConfirmation }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;

  const room = booking.room || ROOMS[1];
  const nights = 2;
  const nightly = room.price * nights;
  const serviceFee = 45, taxes = 45;
  const total = nightly + serviceFee + taxes;

  const [form, setForm] = useState({ name:"",card:"",expiry:"",cvv:"" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Cardholder name is required";
    if (form.card.replace(/\s/g,"").length < 16) e.card = "Enter a valid 16-digit card number";
    if (form.expiry.length < 5) e.expiry = "Enter a valid expiry date";
    if (form.cvv.length < 3) e.cvv = "Enter a valid CVV";
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handlePay = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmation({ room, total, ref:`RS-${Math.floor(Math.random()*90000+10000)}`, card:form.card.replace(/\s/g,"").slice(-4) });
      navigate("confirmation");
    }, 1800);
  };

  const formatCard = v => v.replace(/\D/g,"").replace(/(.{4})/g,"$1 ").trim().slice(0,19);
  const formatExpiry = v => { const d=v.replace(/\D/g,"").slice(0,4); return d.length>=3?`${d.slice(0,2)}/${d.slice(2)}`:d; };

  return (
    <div style={{ background:"#070c1a",minHeight:"100vh",paddingTop:64 }}>
      <div style={{ maxWidth:1100,margin:"0 auto",padding: isMobile ? "28px 20px 60px" : "48px 40px" }}>
        <button onClick={() => navigate("room-detail")} style={{ background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",gap:8,marginBottom:20,fontFamily:"inherit",padding:0 }}>← Back</button>
        <h1 style={{ fontSize: isMobile ? 26 : 36,fontWeight:700,color:"#f1f5f9",fontFamily:"'Playfair Display',Georgia,serif",marginBottom:6 }}>Complete Your Booking</h1>
        <p style={{ color:"#64748b",marginBottom:28,fontSize: isMobile ? 13 : 14 }}>Secure your stay at Regatta Suites Kuching</p>

        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 1.3fr",gap: isMobile ? 20 : 28 }}>
          {/* Summary */}
          <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:16,padding: isMobile ? 20 : 28 }}>
            <h2 style={{ color:"#f1f5f9",fontSize: isMobile ? 16 : 18,fontWeight:700,fontFamily:"'Playfair Display',Georgia,serif",marginBottom:16 }}>Booking Summary</h2>
            <div style={{ borderRadius:12,overflow:"hidden",marginBottom:16,height: isMobile ? 160 : 200 }}>
              <img src={room.images[0]} alt={room.name} style={{ width:"100%",height:"100%",objectFit:"cover" }} />
            </div>
            <h3 style={{ color:"#f1f5f9",fontSize: isMobile ? 16 : 18,fontWeight:700,marginBottom:4,fontFamily:"'Playfair Display',Georgia,serif" }}>{room.name}</h3>
            <p style={{ color:"#D4A017",fontSize:12,marginBottom:16 }}>Regatta Suites Kuching</p>

            {[["Stay Dates", booking.checkIn&&booking.checkOut?`${booking.checkIn} → ${booking.checkOut}`:"—","calendar"],["Duration",`${nights} Nights · ${booking.guests||"2 Adults"}`,"bed"]].map(([l,v,i]) => (
              <div key={l} style={{ display:"flex",alignItems:"center",gap:10,marginBottom:12 }}>
                <Icon name={i} size={15} color="#D4A017" />
                <span style={{ color:"#64748b",fontSize:12,flex:1 }}>{l}</span>
                <span style={{ color:"#f1f5f9",fontSize:12,fontWeight:600 }}>{v}</span>
              </div>
            ))}

            <div style={{ borderTop:"1px solid #1e293b",paddingTop:16,marginTop:4 }}>
              {[[`Rate × ${nights} nights`,`RM ${room.price} × ${nights}`],["Service Fee",`RM ${serviceFee}`],["Taxes",`RM ${taxes}`]].map(([l,v]) => (
                <div key={l} style={{ display:"flex",justifyContent:"space-between",marginBottom:10 }}>
                  <span style={{ color:"#64748b",fontSize:13 }}>{l}</span>
                  <span style={{ color:"#94a3b8",fontSize:13 }}>{v}</span>
                </div>
              ))}
              <div style={{ display:"flex",justifyContent:"space-between",paddingTop:12,borderTop:"1px solid #1e293b" }}>
                <span style={{ color:"#f1f5f9",fontSize: isMobile ? 15 : 16,fontWeight:700 }}>Total</span>
                <span style={{ color:"#D4A017",fontSize: isMobile ? 18 : 22,fontWeight:700 }}>RM {total}</span>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div style={{ background:"#0d1424",border:"2px solid rgba(212,160,23,0.25)",borderRadius:16,padding: isMobile ? 20 : 32 }}>
            <h2 style={{ color:"#f1f5f9",fontSize: isMobile ? 18 : 22,fontWeight:700,fontFamily:"'Playfair Display',Georgia,serif",marginBottom:24 }}>Payment Information</h2>

            {[["CARDHOLDER NAME","name","text","Johnathan Doe","user"],["CARD NUMBER","card","text","0000 0000 0000 0000","card"]].map(([label,field,type,ph,icon]) => (
              <div key={field} style={{ marginBottom:18 }}>
                <label style={{ color:"#64748b",fontSize:10,fontWeight:600,letterSpacing:"0.1em",display:"block",marginBottom:7 }}>{label}</label>
                <div style={{ display:"flex",alignItems:"center",gap:12,background:"#070c1a",border:`1px solid ${errors[field]?"#ef4444":"#1e293b"}`,borderRadius:10,padding:"13px 14px" }}>
                  <Icon name={icon} size={15} color="#475569" />
                  <input type={type} value={form[field]}
                    onChange={e => setForm(p => ({ ...p,[field]:field==="card"?formatCard(e.target.value):e.target.value }))}
                    placeholder={ph} maxLength={field==="card"?19:undefined}
                    style={{ background:"none",border:"none",color:"#e2e8f0",fontSize: isMobile ? 14 : 15,outline:"none",fontFamily:"inherit",flex:1 }}
                  />
                </div>
                {errors[field] && <p style={{ color:"#ef4444",fontSize:11,marginTop:4 }}>{errors[field]}</p>}
              </div>
            ))}

            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:22 }}>
              {[["EXPIRY","expiry","MM / YY","calendar"],["CVV","cvv","123","lock"]].map(([label,field,ph,icon]) => (
                <div key={field}>
                  <label style={{ color:"#64748b",fontSize:10,fontWeight:600,letterSpacing:"0.1em",display:"block",marginBottom:7 }}>{label}</label>
                  <div style={{ display:"flex",alignItems:"center",gap:8,background:"#070c1a",border:`1px solid ${errors[field]?"#ef4444":"#1e293b"}`,borderRadius:10,padding:"13px 12px" }}>
                    <Icon name={icon} size={15} color="#475569" />
                    <input type={field==="cvv"?"password":"text"} value={form[field]}
                      onChange={e => setForm(p => ({ ...p,[field]:field==="expiry"?formatExpiry(e.target.value):e.target.value.replace(/\D/g,"").slice(0,3) }))}
                      placeholder={ph} maxLength={field==="expiry"?5:3}
                      style={{ background:"none",border:"none",color:"#e2e8f0",fontSize:14,outline:"none",fontFamily:"inherit",flex:1 }}
                    />
                  </div>
                  {errors[field] && <p style={{ color:"#ef4444",fontSize:11,marginTop:4 }}>{errors[field]}</p>}
                </div>
              ))}
            </div>

            <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:20,padding:"12px 14px",background:"rgba(37,99,235,0.08)",borderRadius:10,border:"1px solid rgba(37,99,235,0.2)" }}>
              <Icon name="shield" size={16} color="#2563eb" />
              <p style={{ color:"#64748b",fontSize:12 }}>256-bit SSL encryption. You will be charged <strong style={{ color:"#94a3b8" }}>RM {total}</strong>. Free cancellation until check-in.</p>
            </div>

            <button onClick={handlePay} disabled={loading} style={{ width:"100%",padding: isMobile ? 14 : 16,background:loading?"#92400e":"#D4A017",color:"#000",border:"none",borderRadius:12,fontSize: isMobile ? 14 : 15,fontWeight:800,cursor:loading?"wait":"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,letterSpacing:"0.04em",transition:"all 0.2s" }}>
              {loading ? "⏳ PROCESSING..." : (<><span>COMPLETE PAYMENT</span><Icon name="arrow" size={16} color="#000" /></>)}
            </button>

            <div style={{ display:"flex",justifyContent:"center",gap:10,marginTop:16,opacity:0.5 }}>
              {["VISA","MC","AMEX","FPX"].map(c => (
                <div key={c} style={{ background:"#1e293b",borderRadius:4,padding:"4px 8px",color:"#64748b",fontSize:10,fontWeight:700 }}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── CONFIRMATION PAGE ───────────────────────────────────────────────────────
const ConfirmationPage = ({ confirmation, navigate }) => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const { room, total, ref, card } = confirmation;
  const serviceFee = 45, taxes = 45;
  const nightly = total - serviceFee - taxes;

  const handleDownload = () => {
    const content = `REGATTA SUITES KUCHING – BOOKING CONFIRMATION\nRef: #${ref}\nRoom: ${room.name}\nTotal Paid: RM ${total}\nCard: •••• ${card}\n\nUnit G-31, LD Legenda, Jalan Tun Abang Haji Openg, 93000 Kuching, Sarawak\nTel: +60 82-230099`.trim();
    const blob = new Blob([content],{type:"text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url; a.download=`RegattaSuites_${ref}.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ background:"#070c1a",minHeight:"100vh",paddingTop:64 }}>
      <div style={{ maxWidth:860,margin:"0 auto",padding: isMobile ? "40px 20px 60px" : "60px 40px" }}>
        <div style={{ textAlign:"center",marginBottom:28 }}>
          <div style={{ width:64,height:64,borderRadius:"50%",background:"rgba(212,160,23,0.15)",border:"2px solid #D4A017",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px" }}>
            <Icon name="check" size={28} color="#D4A017" />
          </div>
          <h1 style={{ fontSize: isMobile ? 28 : 40,fontWeight:700,color:"#f1f5f9",fontFamily:"'Playfair Display',Georgia,serif",marginBottom:10 }}>Booking Confirmed!</h1>
          <p style={{ color:"#94a3b8",fontSize: isMobile ? 13 : 15,lineHeight:1.7 }}>Your stay at Regatta Suites Kuching is all set.</p>
        </div>

        <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:20,overflow:"hidden" }}>
          <div style={{ position:"relative",height: isMobile ? 160 : 200 }}>
            <img src={room.images[0]} alt={room.name} style={{ width:"100%",height:"100%",objectFit:"cover" }} />
            <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(13,20,36,0.9),transparent)" }} />
            <div style={{ position:"absolute",bottom:16,left:20 }}>
              <span style={{ background:"#D4A017",color:"#000",fontSize:10,fontWeight:800,padding:"4px 10px",borderRadius:6 }}>CONFIRMED</span>
              <h2 style={{ color:"#fff",fontSize: isMobile ? 18 : 24,fontWeight:700,marginTop:6,fontFamily:"'Playfair Display',Georgia,serif" }}>{room.name}</h2>
            </div>
          </div>

          <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
            {/* Reservation */}
            <div style={{ padding: isMobile ? 20 : 28,borderRight: isMobile ? "none" : "1px solid #1e293b",borderBottom: isMobile ? "1px solid #1e293b" : "none" }}>
              <p style={{ color:"#D4A017",fontSize:11,fontWeight:700,letterSpacing:"0.12em",marginBottom:10 }}>RESERVATION SUMMARY</p>
              <p style={{ color:"#f1f5f9",fontSize: isMobile ? 18 : 22,fontWeight:700,marginBottom:20,fontFamily:"'Playfair Display',Georgia,serif" }}>Ref: #{ref}</p>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20 }}>
                {[["Check-in","—","After 2:00 PM"],["Check-out","—","Before 12:00 Noon"]].map(([t,d,sub]) => (
                  <div key={t}>
                    <p style={{ color:"#64748b",fontSize:11,marginBottom:3 }}>{t}</p>
                    <p style={{ color:"#f1f5f9",fontSize: isMobile ? 14 : 16,fontWeight:700 }}>{d}</p>
                    <p style={{ color:"#64748b",fontSize:10 }}>{sub}</p>
                  </div>
                ))}
              </div>
              {[["bed","Room",room.name],["users","Guests",room.maxGuests],["map","Property","Regatta Suites Kuching"]].map(([icon,l,v]) => (
                <div key={l} style={{ display:"flex",alignItems:"center",gap:10,marginBottom:12 }}>
                  <Icon name={icon} size={14} color="#D4A017" />
                  <div><p style={{ color:"#64748b",fontSize:10 }}>{l}</p><p style={{ color:"#f1f5f9",fontSize:13,fontWeight:600 }}>{v}</p></div>
                </div>
              ))}
            </div>

            {/* Payment */}
            <div style={{ padding: isMobile ? 20 : 28 }}>
              <p style={{ color:"#D4A017",fontSize:11,fontWeight:700,letterSpacing:"0.12em",marginBottom:16 }}>PAYMENT DETAILS</p>
              {[[`Rate × 2 nights`,`RM ${nightly}`],["Service Fee",`RM ${serviceFee}`],["Taxes",`RM ${taxes}`]].map(([l,v]) => (
                <div key={l} style={{ display:"flex",justifyContent:"space-between",marginBottom:10 }}>
                  <span style={{ color:"#64748b",fontSize:13 }}>{l}</span>
                  <span style={{ color:"#94a3b8",fontSize:13 }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop:"1px solid #1e293b",paddingTop:14,marginBottom:20 }}>
                <div style={{ display:"flex",justifyContent:"space-between" }}>
                  <span style={{ color:"#f1f5f9",fontSize: isMobile ? 14 : 16,fontWeight:700 }}>Total Paid</span>
                  <span style={{ color:"#D4A017",fontSize: isMobile ? 18 : 22,fontWeight:700 }}>RM {total}</span>
                </div>
                <p style={{ color:"#475569",fontSize:11,marginTop:4 }}>Card ending •••• {card||"4412"}</p>
              </div>

              <button onClick={handleDownload} style={{ width:"100%",padding:12,background:"#D4A017",color:"#000",border:"none",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:10,transition:"background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background="#b8860b"} onMouseLeave={e => e.currentTarget.style.background="#D4A017"}>
                <Icon name="download" size={15} color="#000" /> Download Receipt
              </button>
              <button onClick={() => navigate("home")} style={{ width:"100%",padding:12,background:"none",color:"#94a3b8",border:"1px solid #1e293b",borderRadius:10,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor="#D4A017"} onMouseLeave={e => e.currentTarget.style.borderColor="#1e293b"}>
                <Icon name="home" size={15} color="currentColor" /> Back to Home
              </button>
            </div>
          </div>

          <div style={{ borderTop:"1px solid #1e293b",padding:"14px 20px",display:"flex",justifyContent:"center",gap: isMobile ? 16 : 40,flexWrap:"wrap" }}>
            {["📶 Free WiFi","🏊 Infinity Pool","💪 Sky Gym"].map(p => (
              <span key={p} style={{ color:"#64748b",fontSize: isMobile ? 12 : 13 }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Address + Contact */}
        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",gap:16,marginTop:20 }}>
          <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:14,padding: isMobile ? 18 : 22 }}>
            <p style={{ color:"#D4A017",fontSize:11,fontWeight:700,letterSpacing:"0.1em",marginBottom:10 }}>HOTEL ADDRESS</p>
            <div style={{ display:"flex",gap:10 }}>
              <Icon name="map" size={16} color="#D4A017" />
              <div>
                <p style={{ color:"#f1f5f9",fontSize:13,fontWeight:600,marginBottom:4 }}>Regatta Suites Kuching</p>
                <p style={{ color:"#64748b",fontSize:12,lineHeight:1.7 }}>Unit G-31, Ground Floor, LD Legenda,<br />Jalan Tun Abang Haji Openg,<br />93000 Kuching, Sarawak.</p>
              </div>
            </div>
          </div>
          <div style={{ background:"#0d1424",border:"1px solid #1e293b",borderRadius:14,padding: isMobile ? 18 : 22 }}>
            <p style={{ color:"#D4A017",fontSize:11,fontWeight:700,letterSpacing:"0.1em",marginBottom:10 }}>ASSISTANCE</p>
            <a href="tel:+6082230099" style={{ display:"flex",alignItems:"center",gap:8,color:"#D4A017",fontSize:13,fontWeight:600,textDecoration:"none",marginBottom:10 }}>
              <Icon name="phone" size={14} color="#D4A017" /> +60 82-230099
            </a>
            <a href="https://wa.me/60169200847" target="_blank" rel="noreferrer" style={{ display:"flex",alignItems:"center",gap:8,color:"#22c55e",fontSize:13,fontWeight:600,textDecoration:"none" }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <p style={{ textAlign:"center",color:"#334155",fontSize:12,marginTop:32 }}>© 2024 Regatta Suites Kuching. Owned by Kozi Square Sdn Bhd.</p>
      </div>
    </div>
  );
};

// ─── APP ROOT ────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [booking, setBooking] = useState({ checkIn:"",checkOut:"",guests:"2 Adults",room:null });
  const [confirmation, setConfirmation] = useState(null);

  const navigate = p => { setPage(p); window.scrollTo({top:0,behavior:"smooth"}); };

  return (
    <div style={{ fontFamily:"'Inter',system-ui,sans-serif",background:"#070c1a",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        input[type=date]::-webkit-calendar-picker-indicator { filter:invert(0.5) sepia(1) saturate(2) hue-rotate(10deg); cursor:pointer; }
        select option { background:#0d1424; color:#e2e8f0; }
        ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:#070c1a; } ::-webkit-scrollbar-thumb { background:#1e293b; border-radius:3px; }
        ::-webkit-scrollbar-horizontal { height:0px; }
        @media (max-width:768px) { input[type=date] { font-size:12px !important; } }
      `}</style>
      <Header currentPage={page} navigate={navigate} />
      {page==="home" && <HomePage navigate={navigate} setBooking={setBooking} />}
      {page==="rooms" && <RoomsPage navigate={navigate} setSelectedRoom={setSelectedRoom} />}
      {page==="room-detail" && selectedRoom && <RoomDetailPage room={selectedRoom} navigate={navigate} booking={booking} setBooking={setBooking} />}
      {page==="checkout" && <CheckoutPage booking={booking} navigate={navigate} setConfirmation={setConfirmation} />}
      {page==="confirmation" && confirmation && <ConfirmationPage confirmation={confirmation} navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  );
}
