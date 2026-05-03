# Vital Krankenfahrdienst – Website

Eine vollständige, mehrseitige Unternehmenswebsite für die **Vital Krankenfahrdienst GmbH** in Köln. Statisches HTML, CSS und JavaScript – ohne Build-Prozess, ohne Abhängigkeiten, sofort einsatzbereit.

---

## 📁 Projektstruktur

```
vital-krankenfahrdienst/
│
├── index.html                  → Startseite
├── ueber-uns.html              → Über das Unternehmen
├── dienstleistungen.html       → Übersicht aller Leistungen
│
├── dialysefahrten.html         → Detailseite: Dialysefahrten
├── krankenhausfahrten.html     → Detailseite: Krankenhausfahrten
├── arztfahrten.html            → Detailseite: Arztfahrten
├── rollstuhlfahrten.html       → Detailseite: Rollstuhlfahrten
├── therapiefahrten.html        → Detailseite: Therapiefahrten
├── rehafahrten.html            → Detailseite: Rehafahrten
│
├── kontakt.html                → Kontaktseite mit Formular und Karte
│
├── impressum.html              → Impressum (TMG)
├── datenschutz.html            → Datenschutzerklärung (DSGVO)
├── nutzungsbedingungen.html    → AGB / Nutzungsbedingungen
│
├── css/
│   └── style.css               → Globales Stylesheet (Design-System)
│
├── js/
│   ├── components.js           → Header- & Footer-Injektion
│   └── script.js               → Interaktion (Mobile Menu, FAQ, Scroll-Effekte)
│
└── assets/
    ├── logo.svg                → Hauptlogo (Header)
    └── logo-white.svg          → Logo-Variante für dunklen Hintergrund
```

---

## ✨ Features

- **Mehrseitig:** 13 vollständige HTML-Seiten mit konsistenter Navigation
- **Responsive Design:** Mobile-first, Breakpoints bei 1024px / 768px / 480px
- **Design-System:** CSS Custom Properties für Farben, Typografie, Abstände
- **Premium-Optik:** Cormorant Garamond (Display) + Manrope (Text)
- **Wartbar:** Header & Footer sind in `js/components.js` zentralisiert – Änderungen wirken sofort auf allen Seiten
- **DSGVO-konform:** Datenschutz, Impressum und AGB als Vorlagen enthalten
- **Barrierefrei:** Semantisches HTML5, sinnvolle ARIA-Strukturen, Keyboard-Navigation
- **SEO-ready:** Meta-Tags, sprechende URLs, strukturierte Inhalte
- **Performance:** Keine externen Frameworks, keine Build-Tools, keine Tracker

---

## 🚀 Inbetriebnahme

### Lokal testen

Einfach `index.html` im Browser öffnen – fertig. Für korrekte Funktion der dynamischen Komponenten (Header/Footer-Injection) sollte ein lokaler Webserver verwendet werden:

```bash
# Mit Python
python3 -m http.server 8000

# Mit Node.js (npx serve)
npx serve

# Dann im Browser öffnen
http://localhost:8000
```

### Deployment

Alle Dateien einfach auf den Webserver hochladen (FTP, SFTP, Git-Push). Es ist **kein Build-Schritt erforderlich**.

Die Seite läuft auf jedem Standard-Webhosting (Apache, Nginx, GitHub Pages, Netlify, Vercel, etc.).

---

## 🎨 Design-System

Die Farben und Typografie können zentral in `css/style.css` über CSS Custom Properties angepasst werden:

```css
:root {
  --primary: #0a4d8c;        /* Medizinisches Blau */
  --accent: #d4a574;         /* Premium Gold */
  --text-primary: #0f1e2e;
  --bg: #ffffff;
  ...
}
```

---

## ⚠️ Wichtige Hinweise vor Veröffentlichung

Folgende Inhalte sind **Platzhalter** und müssen vor Live-Schaltung individuell ergänzt werden:

### `impressum.html`
- Name des Geschäftsführers
- Handelsregisternummer (HRB)
- Umsatzsteuer-ID
- Angaben zur Berufshaftpflichtversicherung

### `datenschutz.html`
- Sollte vor Veröffentlichung durch einen Datenschutz­beauftragten oder Rechtsanwalt geprüft werden, insbesondere wenn zusätzliche Tracking-/Analyse-Tools eingesetzt werden.

### `nutzungsbedingungen.html`
- Vorlage – sollte rechtlich geprüft und an den konkreten Geschäftsbetrieb angepasst werden.

### `kontakt.html`
- Das Kontaktformular ist derzeit clientseitig (JavaScript-Simulation). Für den Produktiveinsatz muss ein Backend-Endpoint angebunden werden (z. B. Formspree, Netlify Forms, eigener PHP-Mailer).

---

## 📞 Unternehmensdaten (im Code hinterlegt)

- **Telefon:** +49 221 79003773
- **E-Mail:** koeln@vital-krankenfahrdienst.de
- **Adresse:** Kratzweg 20, 51109 Köln

---

## 🛠 Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Inline-SVG-Icons (lucide.dev)
- OpenStreetMap (Karten-Embed, ohne Tracking)

**Keine Frameworks, keine Tracker, keine Cookies.**

---

## 📄 Lizenz

Dieses Projekt wurde auftragsbezogen erstellt. Alle Rechte am Code liegen beim Auftraggeber.
