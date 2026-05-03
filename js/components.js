/* ============================================
   COMPONENTS - HEADER & FOOTER
   Dynamisch eingefügt für Konsistenz
   ============================================ */

const headerHTML = `
<header class="header">
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-content">
        <div class="top-bar-info">
          <a href="tel:+4922179003773" class="top-bar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +49 221 79003773
          </a>
          <a href="mailto:koeln@vital-krankenfahrdienst.de" class="top-bar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            koeln@vital-krankenfahrdienst.de
          </a>
          <span class="top-bar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            24/7 Erreichbar
          </span>
        </div>
        <div class="top-bar-cta">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Direkte Kassenabrechnung
        </div>
      </div>
    </div>
  </div>
  
  <nav class="container nav">
    <a href="index.html" class="logo" aria-label="Zur Startseite">
      <img src="assets/logo.svg" alt="Vital Krankenfahrdienst Logo" class="logo-img">
      <div class="logo-text">
        <span class="logo-name">Vital</span>
        <span class="logo-tagline">Krankenfahrdienst</span>
      </div>
    </a>
    
    <ul class="nav-menu">
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li class="dropdown">
        <a href="dienstleistungen.html" class="nav-link dropdown-toggle">Dienstleistungen</a>
        <div class="dropdown-menu">
          <a href="dialysefahrten.html" class="dropdown-item">
            <span class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="m4.93 10.93 4.24 4.24"/><path d="M2 18h12"/><path d="M19.07 10.93 14.83 15.17"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>
            </span>
            Dialysefahrten
          </a>
          <a href="krankenhausfahrten.html" class="dropdown-item">
            <span class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/></svg>
            </span>
            Krankenhausfahrten
          </a>
          <a href="arztfahrten.html" class="dropdown-item">
            <span class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
            </span>
            Arztfahrten
          </a>
          <a href="rollstuhlfahrten.html" class="dropdown-item">
            <span class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="6" r="2"/><path d="M9 8v4l4 4h2"/><circle cx="11" cy="18" r="4"/><path d="m15 14 3 3"/></svg>
            </span>
            Rollstuhlfahrten
          </a>
          <a href="therapiefahrten.html" class="dropdown-item">
            <span class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </span>
            Therapiefahrten
          </a>
          <a href="rehafahrten.html" class="dropdown-item">
            <span class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
            </span>
            Rehafahrten
          </a>
        </div>
      </li>
      <li><a href="ueber-uns.html" class="nav-link">Über Uns</a></li>
      <li><a href="kontakt.html" class="nav-link nav-cta">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Kontakt
      </a></li>
    </ul>
    
    <div class="menu-toggle" aria-label="Menü öffnen">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</header>
`;

const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="assets/logo-white.svg" alt="Vital Krankenfahrdienst">
          <div class="footer-logo-text">
            <strong>Vital</strong>
            <span>Krankenfahrdienst GmbH</span>
          </div>
        </div>
        <p>Ihr zuverlässiger Partner für sichere und komfortable Krankenfahrten in Köln und Umgebung. Wir verbinden Wissen mit Empathie für höchste Patientenzufriedenheit.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
      
      <div class="footer-col">
        <h5>Navigation</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="dienstleistungen.html">Dienstleistungen</a></li>
          <li><a href="ueber-uns.html">Über Uns</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h5>Leistungen</h5>
        <ul>
          <li><a href="dialysefahrten.html">Dialysefahrten</a></li>
          <li><a href="krankenhausfahrten.html">Krankenhausfahrten</a></li>
          <li><a href="arztfahrten.html">Arztfahrten</a></li>
          <li><a href="rollstuhlfahrten.html">Rollstuhlfahrten</a></li>
          <li><a href="therapiefahrten.html">Therapiefahrten</a></li>
          <li><a href="rehafahrten.html">Rehafahrten</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h5>Kontakt</h5>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Kratzweg 20<br>51109 Köln</span>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <a href="tel:+4922179003773">+49 221 79003773</a>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:koeln@vital-krankenfahrdienst.de">koeln@vital-krankenfahrdienst.de</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2025 Vital Krankenfahrdienst GmbH · Alle Rechte vorbehalten</p>
      <div class="footer-bottom-links">
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="nutzungsbedingungen.html">Nutzungsbedingungen</a>
      </div>
    </div>
  </div>
</footer>

<a href="tel:+4922179003773" class="floating-cta" aria-label="Sofort anrufen">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
</a>
`;

// Insert components on page load
document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  
  if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
});
