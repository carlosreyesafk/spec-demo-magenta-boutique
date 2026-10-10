import "./globals.css";

const D = {
  "slug": "spec-demo-magenta-boutique",
  "name": "Magenta Boutique RD",
  "tagline": "Moda femenina · Tienda física y online",
  "emoji": "👗",
  "accent": "#a21caf",
  "accent_dark": "#701a75",
  "accent_light": "#f5d0fe",
  "vertical": "retail",
  "address": "Santo Domingo, D.N., República Dominicana (escríbenos por WhatsApp para la ubicación exacta)",
  "address_short": "Santo Domingo",
  "address_zone": "Distrito Nacional",
  "phone_display": "(809) 852-1260",
  "phone_intl": "18098521260",
  "email": "magentaboutique2018@gmail.com",
  "hours_short": "Lun–Vie 8:30am–7pm · Sáb 9am–7pm",
  "hours_note": "",
  "hours_list": [
    [
      "Lunes – viernes",
      "8:30 a. m. – 7:00 p. m."
    ],
    [
      "Sábado",
      "9:00 a. m. – 7:00 p. m."
    ]
  ],
  "map_query": "Magenta Boutique Santo Domingo República Dominicana",
  "hero_eyebrow": "Boutique de moda femenina",
  "hero_h1a": "Viste tu mejor",
  "hero_h1b": "versión",
  "hero_lead": "Magenta Boutique RD: moda femenina con tienda física y online, envíos a todo el país. Nueva colección otoño-invierno disponible. Pide por WhatsApp.",
  "hero_cta_primary": "Ver la colección",
  "hero_card_title": "¿Te gustó algo del catálogo?",
  "hero_card_text": "Escríbenos por WhatsApp con la foto de la prenda y tu talla (S–XL): te confirmamos disponibilidad y envío.",
  "hero_card_cta": "Pedir por WhatsApp",
  "services_kicker": "Catálogo",
  "services_h2": "Nueva colección",
  "services_sub": "Tallas S–XL · Envíos nacionales.",
  "services": [
    {
      "icon": "👗",
      "title": "Vestidos",
      "text": "Para el día a día y ocasiones especiales."
    },
    {
      "icon": "👚",
      "title": "Sets",
      "text": "Conjuntos coordinados listos para usar."
    },
    {
      "icon": "👕",
      "title": "Blusas",
      "text": "Básicas y de tendencia en varias tallas."
    },
    {
      "icon": "🩳",
      "title": "Faldas",
      "text": "Cortas, midi y largas para todos los gustos."
    },
    {
      "icon": "📏",
      "title": "Guía de tallas S–XL",
      "text": "Te ayudamos a elegir tu talla ideal por WhatsApp."
    },
    {
      "icon": "🚚",
      "title": "Envíos a todo el país",
      "text": "Tienda física y online: recibe tu pedido donde estés."
    }
  ],
  "about_kicker": "Nosotros",
  "about_h2": "Moda que se mueve contigo",
  "about_paras": [
    "Magenta Boutique RD es una boutique de moda femenina en Santo Domingo con tienda física y venta online, y más de 87,000 seguidores en Instagram.",
    "Publicamos nuestra colección a diario en redes: vestidos, sets, blusas y faldas en tallas S a XL, con envíos a todo el país."
  ],
  "about_points": [
    {
      "bold": "87,000+ seguidoras",
      "text": "una comunidad que crece cada día."
    },
    {
      "bold": "Tienda física y online",
      "text": "compra como prefieras."
    },
    {
      "bold": "Pedidos por WhatsApp",
      "text": "al (809) 852-1260 con foto y talla."
    }
  ],
  "about_img_alt": "Colección de moda femenina en Magenta Boutique",
  "extra_nav": "Envíos",
  "extra_kicker": "A todo el país",
  "extra_h2": "Recibe tu pedido donde estés",
  "extra_text": "Hacemos envíos nacionales. Escríbenos por WhatsApp al (809) 852-1260 o a magentaboutique2018@gmail.com con tu pedido.",
  "extra_icon": "🚚",
  "extra_title": "Envíos nacionales",
  "extra_card_text": "Envíanos foto de la prenda, talla y tu ubicación por WhatsApp, y coordinamos tu envío a cualquier parte del país.",
  "extra_cta": "Hacer mi pedido",
  "location_arrive": "Visítanos en nuestra tienda física en Santo Domingo. Escríbenos por WhatsApp al (809) 852-1260 para la ubicación exacta y el horario.",
  "contact_h2": "Haz tu pedido hoy",
  "contact_sub": "Escríbenos por WhatsApp o envíanos un correo.",
  "contact_wa_hint": "Pide tu prenda",
  "images": {
    "hero": "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    "about": "https://images.unsplash.com/photo-1580983218765-f663bec07b37",
    "g1": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
    "g2": "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
  }
};
const SERVICES = [{"icon": "👗", "title": "Vestidos", "text": "Para el día a día y ocasiones especiales."}, {"icon": "👚", "title": "Sets", "text": "Conjuntos coordinados listos para usar."}, {"icon": "👕", "title": "Blusas", "text": "Básicas y de tendencia en varias tallas."}, {"icon": "🩳", "title": "Faldas", "text": "Cortas, midi y largas para todos los gustos."}, {"icon": "📏", "title": "Guía de tallas S–XL", "text": "Te ayudamos a elegir tu talla ideal por WhatsApp."}, {"icon": "🚚", "title": "Envíos a todo el país", "text": "Tienda física y online: recibe tu pedido donde estés."}];
const HOURS_LIST = [["Lunes – viernes", "8:30 a. m. – 7:00 p. m."], ["Sábado", "9:00 a. m. – 7:00 p. m."]];
const ABOUT_PARAS = ["Magenta Boutique RD es una boutique de moda femenina en Santo Domingo con tienda física y venta online, y más de 87,000 seguidores en Instagram.", "Publicamos nuestra colección a diario en redes: vestidos, sets, blusas y faldas en tallas S a XL, con envíos a todo el país."];
const ABOUT_POINTS = [{"bold": "87,000+ seguidoras", "text": "una comunidad que crece cada día."}, {"bold": "Tienda física y online", "text": "compra como prefieras."}, {"bold": "Pedidos por WhatsApp", "text": "al (809) 852-1260 con foto y talla."}];
const IMGS = {"hero": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80", "about": "https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=1600&q=80", "g1": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1600&q=80", "g2": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"};

const WHATSAPP = "https://wa.me/" + D.phone_intl;
const PHONE_TEL = "tel:+" + D.phone_intl;
const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(D.map_query) +
  "&output=embed";

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">{D.emoji}</span>
            <span className="brand-name">
              {D.name}
              <small>{D.tagline}</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#destacado">{D.extra_nav}</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a
              className="btn btn-primary btn-sm"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              {D.hero_cta_primary}
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${IMGS.hero})` }}
        >
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                {D.emoji} {D.hero_eyebrow}
              </span>
              <h1>
                {D.hero_h1a} <span>{D.hero_h1b}</span>
              </h1>
              <p className="lead">{D.hero_lead}</p>
              <div className="hero-ctas">
                <a
                  className="btn btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  📲 {D.hero_cta_primary}
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 {D.phone_display}
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 {D.address_short}</strong>
                  {D.address_zone}
                </div>
                <div>
                  <strong>🕘 {D.hours_short}</strong>
                  {D.hours_note}
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>{D.hero_card_title}</h2>
              <p>{D.hero_card_text}</p>
              <ul className="hours-list">
                {HOURS_LIST.map((h) => (
                  <li key={h[0]}>
                    <span>{h[0]}</span>
                    <span>{h[1]}</span>
                  </li>
                ))}
              </ul>
              <a
                className="btn btn-primary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                {D.hero_card_cta}
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{D.services_kicker}</span>
              <h2>{D.services_h2}</h2>
              <p>{D.services_sub}</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--orange-500)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                {D.about_kicker}
              </span>
              <h2>{D.about_h2}</h2>
              {ABOUT_PARAS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="about-points">
                {ABOUT_POINTS.map((pt) => (
                  <li key={pt.bold}>
                    <span className="tick">✓</span>
                    <span>
                      <strong>{pt.bold}:</strong> {pt.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-photo">
              <img src={IMGS.about} alt={D.about_img_alt} loading="lazy" />
              <div className="about-photo-strip">
                <img
                  src={IMGS.g1}
                  alt={D.name + " — galería"}
                  loading="lazy"
                />
                <img
                  src={IMGS.g2}
                  alt={D.name + " — galería"}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DESTACADO */}
        <section id="destacado" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{D.extra_kicker}</span>
              <h2>{D.extra_h2}</h2>
              <p>{D.extra_text}</p>
            </div>
            <div
              className="services-grid"
              style={{
                gridTemplateColumns: "1fr",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              <article className="service-card" style={{ textAlign: "center" }}>
                <div
                  className="service-icon"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  {D.extra_icon}
                </div>
                <h3>{D.extra_title}</h3>
                <p style={{ marginBottom: "1.4rem" }}>{D.extra_card_text}</p>
                <a
                  className="btn btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  📲 {D.extra_cta}
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{D.address}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{D.address}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>{D.hours_short}</p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>{D.location_arrive}</p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title={"Mapa — " + D.name}
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>{D.contact_h2}</h2>
              <p>{D.contact_sub}</p>
            </div>
            <div className="contact-grid">
              <a
                className="contact-card"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                <div className="label">WhatsApp</div>
                <div className="value">{D.phone_display}</div>
                <div className="hint">{D.contact_wa_hint} →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">{D.phone_display}</div>
                <div className="hint">Llámanos →</div>
              </a>
              <a className="contact-card" href={`mailto:${D.email}`}>
                <div className="label">Correo</div>
                <div
                  className="value"
                  style={{ fontSize: "0.95rem", wordBreak: "break-all" }}
                >
                  {D.email}
                </div>
                <div className="hint">Escríbenos →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>{D.name}</strong>
              {D.address}
              <br />
              Tel. {D.phone_display}
            </div>
            <div>
              <strong>Horario</strong>
              {D.hours_short}
              <br />
              <a href={`mailto:${D.email}`} style={{ color: "inherit" }}>
                {D.email}
              </a>
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por Chachi.
            La información mostrada corresponde a los datos públicos del
            negocio y puede ajustarse a su oferta real.
          </p>
        </div>
      </footer>
    </>
  );
}
