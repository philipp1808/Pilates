'use client';

import { Minus, Plus, ShoppingBag } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { exclusivePackages, plans } from '@/app/site-data';

type PricingSectionProps = {
  className?: string;
  onSelectPackage?: (name: string) => void;
};

function PackageAction({
  name,
  onSelectPackage,
}: {
  name: string;
  onSelectPackage?: (name: string) => void;
}) {
  if (onSelectPackage) {
    return (
      <button type="button" onClick={() => onSelectPackage(name)}>
        Auswählen <ShoppingBag />
      </button>
    );
  }

  return (
    <a href="/login">
      Auswählen <ShoppingBag />
    </a>
  );
}

export default function PricingSection({ className = '', onSelectPackage }: PricingSectionProps) {
  return (
    <section className={`prices ${className}`.trim()}>
      <div className="prices-head">
        <p className="eyebrow">Dein Rhythmus</p>
        <h2>New here.<br /><em>Want more.</em><br />Exclusive.</h2>
        <p>Öffne eine Kategorie, vergleiche alle Optionen und wähle das Paket, das zu dir passt.</p>
      </div>

      <Accordion className="pricing-accordion">
        {plans.map((plan, index) => (
          <AccordionItem value={plan.value} key={plan.value} className="pricing-item">
            <AccordionTrigger className="pricing-trigger">
              <span className="plan-count">0{index + 1}</span>
              <span><small>{plan.kicker}</small>{plan.name}</span>
              <span className="plan-symbol"><Plus className="plus" /><Minus className="minus" /></span>
            </AccordionTrigger>
            <AccordionContent className="pricing-content">
              <p className="plan-description">{plan.description}</p>

              {plan.value === 'exclusive' ? (
                <div className="exclusive-package-grid">
                  {exclusivePackages.map(group => (
                    <section className="exclusive-package" key={group.name}>
                      <div className="exclusive-package-head">
                        <p>{group.kicker}</p>
                        <h3>{group.name}</h3>
                      </div>
                      <div className="price-option-list">
                        {group.offers.map(offer => (
                          <article className="price-option-row compact" key={`${group.name}-${offer.title}`}>
                            <div><h4>{offer.title}</h4><p>{offer.validity}</p></div>
                            <strong>{offer.price}</strong>
                            <PackageAction name={`${group.name} · ${offer.title}`} onSelectPackage={onSelectPackage} />
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="price-option-list">
                  {plan.offers.map(offer => (
                    <article className="price-option-row" key={offer.title}>
                      <div className="price-option-name"><p>Eora Move Pass</p><h3>{offer.title}</h3></div>
                      <dl><div><dt>Einheiten</dt><dd>{offer.sessions}</dd></div><div><dt>Gültigkeit</dt><dd>{offer.validity}</dd></div></dl>
                      <strong>{offer.price}</strong>
                      <PackageAction name={offer.title} onSelectPackage={onSelectPackage} />
                    </article>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
