'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageHero, SiteShell } from '@/app/components/SiteShell';
import { faqs } from '@/app/site-data';

export default function FaqPage() { return <SiteShell><PageHero index="03 / FAQ" eyebrow="Good to know" title={<>Alles, was du<br/><em>wissen möchtest.</em></>} text="Die wichtigsten Antworten für deinen entspannten ersten und nächsten Besuch."/><section className="faq standalone-faq"><div className="faq-intro"><p className="eyebrow">Noch eine Frage?</p><h2>We’re here<br/><em>for you.</em></h2><p>Sprich uns im Studio an – wir helfen dir gern persönlich weiter.</p></div><Accordion className="faq-list">{faqs.map(([question,answer],index)=><AccordionItem value={`faq-${index}`} key={question} className="faq-item"><AccordionTrigger className="faq-trigger"><span>0{index+1}</span>{question}</AccordionTrigger><AccordionContent className="faq-content">{answer}</AccordionContent></AccordionItem>)}</Accordion></section></SiteShell>; }
