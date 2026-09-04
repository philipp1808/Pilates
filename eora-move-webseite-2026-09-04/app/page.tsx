'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, AtSign, Check, LockKeyhole, Menu, Sparkles, UserRound, X } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetTitle } from '@/components/ui/sheet';
import HomeCoursesCarousel from '@/app/components/home-courses-carousel';
import PricingSection from '@/app/components/PricingSection';

const navItems = [
  ['Angebot', '/angebot'], ['Preise', '/preise'], ['FAQ', '/faq'],
  ['Über uns', '/ueber-uns'], ['Shop', '/shop'], ['Login', '/login'],
];

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingLabel, setBookingLabel] = useState('Kursplan');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  useEffect(() => setCookieOpen(window.localStorage.getItem('eora-consent') === null), []);
  const openBooking = (label: string) => { setBookingLabel(label); setBookingOpen(true); };
  const saveConsent = (value: 'all' | 'essential') => { window.localStorage.setItem('eora-consent', value); setCookieOpen(false); };

  return <main>
    <header className="site-header">
      <a className="brand-logo-link" href="/" aria-label="Eora Move Startseite"><img className="brand-logo-image" src="/eora-logo.png" alt="Eora Move" /></a>
      <nav aria-label="Hauptnavigation">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
      <button className="header-book" onClick={() => openBooking('Kursplan')}>Jetzt buchen <ArrowUpRight /></button>
      <button className="menu-button" aria-label="Menü öffnen" onClick={() => setMenuOpen(true)}><Menu /></button>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
      <button className="menu-close" aria-label="Menü schließen" onClick={() => setMenuOpen(false)}><X /></button>
      <a className="mobile-brand-logo" href="/" aria-label="Eora Move Startseite"><img className="brand-logo-image" src="/eora-logo.png" alt="Eora Move" /></a>
      {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
    </div>

    <section className="hero" id="home">
      <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
      <div className="hero-copy"><p className="eyebrow">Reformer Pilates · Barre · Mobility</p><h1>Move with<br/><em>intention.</em></h1><p className="hero-text">Ein Raum für Kraft, Leichtigkeit und echte Verbindung zu deinem Körper.</p><div className="hero-actions"><button className="button button-primary" onClick={() => openBooking('Kursplan')}>Kurs buchen <ArrowUpRight /></button><a className="text-link" href="/angebot">Kurse entdecken <ArrowDown /></a></div></div>
      <p className="hero-note">Small groups<br/>Personal attention<br/>Mindful movement</p>
    </section>

    <section className="home-manifesto">
      <p className="section-index">01 / Eora Move</p>
      <div><p className="eyebrow">Movement, made personal</p><h2>Training, das dich fordert.<br/><em>Und bei dir bleibt.</em></h2></div>
      <div className="home-manifesto-copy"><p>Kleine Gruppen, präzises Coaching und Bewegung mit Intention. Bei Eora geht es nicht darum, mehr zu leisten – sondern dich besser zu bewegen.</p><a className="dark-link" href="/ueber-uns">Das Eora Feeling <ArrowUpRight /></a></div>
    </section>

    <section className="home-classes">
      <div className="home-section-head"><div><p className="section-index">02 / Classes</p><h2>Find your<br/><em>movement.</em></h2></div><p>Von kraftvoll bis regenerativ. Entdecke die Class, die zu deinem heutigen Körpergefühl passt.</p></div>
      <HomeCoursesCarousel />
      <a className="button home-outline-button" href="/angebot">Alle Kurse ansehen <ArrowUpRight /></a>
    </section>

    <PricingSection className="home-prices" onSelectPackage={openBooking} />

    <section className="booking-flow home-booking-flow">
      <p className="section-index">So einfach geht’s</p><h2>Four steps.<br/>One good decision.</h2><ol>{['Termin auswählen','Paket wählen','Einloggen','Buchung abschließen'].map((step,index)=><li key={step}><span>0{index+1}</span><p>{step}</p>{index<3&&<ArrowRight/>}</li>)}</ol><button className="button button-primary" onClick={() => openBooking('Kursplan')}>Zum Kurskalender <ArrowUpRight/></button>
    </section>

    <section className="home-help">
      <Sparkles /><div><p className="eyebrow">First time?</p><h2>Alles für deinen ersten Besuch.</h2><p>Was du mitbringen solltest, wann du ankommst und welche Class zu dir passt.</p></div><a className="button button-outline" href="/faq">Zum FAQ <ArrowUpRight /></a>
    </section>

    <section className="login-band home-final-cta">
      <UserRound/><div><p className="eyebrow">Ready when you are</p><h2>Dein nächster Move<br/>beginnt hier.</h2></div><button className="button button-outline" onClick={() => openBooking('Kursplan')}>Jetzt buchen <ArrowUpRight /></button>
    </section>

    <footer><div className="footer-brand"><a className="footer-logo-link" href="/" aria-label="Eora Move Startseite"><img className="footer-logo-image" src="/eora-logo.png" alt="Eora Move" /></a><p>Move with intention.</p></div><div className="footer-links"><div><p>Explore</p><a href="/angebot">Angebot</a><a href="/preise">Preise</a><a href="/ueber-uns">Über uns</a><a href="/shop">Shop</a></div><div><p>Connect</p><a href="/faq">FAQ</a><a href="/login">Login</a><a href="#" aria-label="Eora Move auf Instagram">Instagram <AtSign /></a></div><div id="legal"><p>Legal</p><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">AGB</a><button onClick={() => setCookieOpen(true)}>Cookie-Einstellungen</button></div></div><p className="copyright">© {new Date().getFullYear()} Eora Move · Made for mindful movement</p></footer>

    <Sheet open={bookingOpen} onOpenChange={setBookingOpen}><SheetContent className="booking-sheet"><div className="booking-sheet-head"><div className="wordmark booking-wordmark"><span>EŌRA</span><small>MOVE</small></div><SheetTitle>{bookingLabel}</SheetTitle><SheetDescription>Sichere Übergabe an bsport</SheetDescription></div><div className="booking-sheet-body"><p className="sheet-kicker">Du bist fast da</p><h2>Ready to move?</h2><p>{bookingLabel} ist ausgewählt. Im nächsten Schritt öffnet sich der passende Bereich in bsport.</p><div className="secure-note"><LockKeyhole/><span>Der Buchungs- und Bezahlprozess wird sicher durch bsport durchgeführt.</span></div><ol className="mini-steps"><li className="active"><Check/> Auswahl</li><li>02 Paket</li><li>03 Daten</li><li>04 Fertig</li></ol><button className="button button-sheet" onClick={() => setBookingOpen(false)}>bsport-Verknüpfung einsetzen <ArrowUpRight/></button><small className="integration-note">Platzhalter für den kundenspezifischen bsport-Link bzw. das Widget.</small></div></SheetContent></Sheet>

    {cookieOpen && <aside className="cookie-banner" aria-label="Cookie-Einstellungen"><div><p className="eyebrow">Deine Privatsphäre</p><h2>Cookies, aber bewusst.</h2><p>Wir verwenden notwendige Cookies für die Funktion der Seite. Zusätzliche Dienste aktivieren wir nur mit deiner Zustimmung.</p><a href="#legal">Mehr erfahren</a></div><div className="cookie-actions"><button onClick={() => saveConsent('essential')}>Nur notwendige</button><button className="button button-cookie" onClick={() => saveConsent('all')}>Alle akzeptieren</button></div></aside>}
  </main>;
}
