'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { ArrowUpRight, AtSign, Menu, X } from 'lucide-react';

const navItems = [
  ['Angebot', '/angebot'], ['Preise', '/preise'], ['FAQ', '/faq'],
  ['Über uns', '/ueber-uns'], ['Shop', '/shop'], ['Login', '/login'],
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  useEffect(() => setCookieOpen(window.localStorage.getItem('eora-consent') === null), []);
  const saveConsent = (value: 'all' | 'essential') => {
    window.localStorage.setItem('eora-consent', value);
    setCookieOpen(false);
  };

  return (
    <main>
      <header className="site-header subpage-header">
        <a className="brand-logo-link" href="/" aria-label="Eora Move Startseite"><img className="brand-logo-image" src="/eora-logo.png" alt="Eora Move" /></a>
        <nav aria-label="Hauptnavigation">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <a className="header-book" href="/login">Jetzt buchen <ArrowUpRight /></a>
        <button className="menu-button" aria-label="Menü öffnen" onClick={() => setMenuOpen(true)}><Menu /></button>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button className="menu-close" aria-label="Menü schließen" onClick={() => setMenuOpen(false)}><X /></button>
        <a className="mobile-brand-logo" href="/" aria-label="Eora Move Startseite"><img className="brand-logo-image" src="/eora-logo.png" alt="Eora Move" /></a>
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </div>
      {children}
      <footer>
        <div className="footer-brand"><a className="footer-logo-link" href="/" aria-label="Eora Move Startseite"><img className="footer-logo-image" src="/eora-logo.png" alt="Eora Move" /></a><p>Move with intention.</p></div>
        <div className="footer-links">
          <div><p>Explore</p><a href="/angebot">Angebot</a><a href="/preise">Preise</a><a href="/ueber-uns">Über uns</a><a href="/shop">Shop</a></div>
          <div><p>Connect</p><a href="/faq">FAQ</a><a href="/login">Login</a><a href="#" aria-label="Eora Move auf Instagram">Instagram <AtSign /></a></div>
          <div id="legal"><p>Legal</p><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">AGB</a><button onClick={() => setCookieOpen(true)}>Cookie-Einstellungen</button></div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Eora Move · Made for mindful movement</p>
      </footer>
      {cookieOpen && <aside className="cookie-banner" aria-label="Cookie-Einstellungen"><div><p className="eyebrow">Deine Privatsphäre</p><h2>Cookies, aber bewusst.</h2><p>Wir verwenden notwendige Cookies für die Funktion der Seite. Zusätzliche Dienste aktivieren wir nur mit deiner Zustimmung.</p><a href="#legal">Mehr erfahren</a></div><div className="cookie-actions"><button onClick={() => saveConsent('essential')}>Nur notwendige</button><button className="button button-cookie" onClick={() => saveConsent('all')}>Alle akzeptieren</button></div></aside>}
    </main>
  );
}

export function PageHero({ index, eyebrow, title, text }: { index: string; eyebrow: string; title: ReactNode; text: string }) {
  return <section className="page-hero"><div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" /><p className="section-index">{index}</p><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}
