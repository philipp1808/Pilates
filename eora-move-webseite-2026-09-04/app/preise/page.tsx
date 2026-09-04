import { ArrowUpRight } from 'lucide-react';
import { PageHero, SiteShell } from '@/app/components/SiteShell';
import PricingSection from '@/app/components/PricingSection';

export default function PreisePage() { return <SiteShell>
  <PageHero index="02 / Preise" eyebrow="Choose your movement" title={<>Einfach wählen.<br/><em>Direkt loslegen.</em></>} text="Alle Pakete klar im Vergleich und für die sichere Übergabe an bsport vorbereitet." />
  <PricingSection className="standalone-prices" />
  <section className="booking-flow"><p className="section-index">So einfach geht’s</p><h2>Four steps.<br/>One good decision.</h2><ol>{['Termin auswählen','Paket wählen','Einloggen','Buchung abschließen'].map((step,index)=><li key={step}><span>0{index+1}</span><p>{step}</p>{index<3&&<ArrowUpRight/>}</li>)}</ol><a className="button button-primary" href="/login">Zu bsport <ArrowUpRight/></a></section>
  </SiteShell>; }
