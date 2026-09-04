'use client';

import { useEffect, useState } from 'react';

const INTRO_KEY = 'eora-intro-seen';

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'playing' | 'leaving' | 'hidden'>('playing');

  useEffect(() => {
    let alreadySeen = false;

    try {
      alreadySeen = window.sessionStorage.getItem(INTRO_KEY) === 'true';
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      setPhase('hidden');
      return;
    }

    document.body.classList.add('intro-is-playing');

    const leaveTimer = window.setTimeout(() => setPhase('leaving'), 2350);
    const hideTimer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(INTRO_KEY, 'true');
      } catch {
        // The intro still works when browser storage is unavailable.
      }
      document.body.classList.remove('intro-is-playing');
      setPhase('hidden');
    }, 3100);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.body.classList.remove('intro-is-playing');
    };
  }, []);

  function skipIntro() {
    try {
      window.sessionStorage.setItem(INTRO_KEY, 'true');
    } catch {
      // Continue without persistence when storage is unavailable.
    }
    document.body.classList.remove('intro-is-playing');
    setPhase('hidden');
  }

  if (phase === 'hidden') return null;

  return (
    <div
      className={`eora-intro${phase === 'leaving' ? ' is-leaving' : ''}`}
      role="status"
      aria-label="Eora Move wird geladen"
    >
      <div className="eora-intro-stage" aria-hidden="true">
        <span className="eora-intro-ring" />
        <img className="eora-intro-cherry" src="/eora-logo.png" alt="" />
        <img className="eora-intro-logo" src="/eora-logo.png" alt="" />
        <span className="eora-intro-line" />
        <span className="eora-intro-claim">Move with intention.</span>
      </div>
      <button className="eora-intro-skip" type="button" onClick={skipIntro}>
        Überspringen
      </button>
    </div>
  );
}
