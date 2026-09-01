export const courses = [
  { number: '01', name: 'Reformer Flow', strap: 'Strong & Fluid', description: 'Kontrollierte Sequenzen am Reformer, die Kraft, Stabilität und fließende Bewegung verbinden.', intensity: 4, level: 'All Levels', tone: 'course-visual wine-visual' },
  { number: '02', name: 'Barre Sculpt', strap: 'Pulse & Burn', description: 'Präzise, kleine Bewegungen an der Barre. Für Haltung, Ausdauer und den schönsten Shake.', intensity: 5, level: 'Intermediate', tone: 'course-visual blush-visual' },
  { number: '03', name: 'Mobility Reset', strap: 'Open & Restore', description: 'Sanfte Mobilisation, bewusste Atmung und Release-Techniken für mehr Raum im Körper.', intensity: 2, level: 'All Levels', tone: 'course-visual ivory-visual' },
  { number: '04', name: 'Red Light', strap: 'Slow & Deep', description: 'Atmosphärisches Full-Body-Training mit bewusster Spannung und regenerativem Cool-down.', intensity: 3, level: 'Experienced', tone: 'course-visual red-visual' },
];

export const plans = [
  { value: 'new', kicker: 'Dein Start', name: 'New here', description: 'Zum Kennenlernen – gültig für Reformer, Barre und Mobility.', offers: [
    { title: 'First Move', sessions: '1 Training', validity: '14 Tage', price: '19 €' },
    { title: 'Welcome Trio', sessions: '3 Trainings', validity: '30 Tage', price: '49 €' },
  ] },
  { value: 'more', kicker: 'Deine Routine', name: 'Want more', description: 'Flexibel trainieren und deinen Rhythmus finden.', offers: [
    { title: 'Move 5', sessions: '5 Trainings', validity: '8 Wochen', price: '109 €' },
    { title: 'Move 10', sessions: '10 Trainings', validity: '12 Wochen', price: '199 €' },
  ] },
  { value: 'exclusive', kicker: 'Dein Commitment', name: 'Exclusive', description: 'Intensiv begleitet für spürbare, nachhaltige Veränderung.', offers: [
    { title: 'Unlimited Month', sessions: 'Unbegrenzte Trainings', validity: '30 Tage', price: '229 €' },
    { title: 'Private Session', sessions: '1:1 Training', validity: '30 Tage', price: '89 €' },
  ] },
];

export const faqs = [
  ['Ich bin zum ersten Mal da. Welcher Kurs passt?', 'Für deinen Einstieg empfehlen wir Reformer Flow oder Mobility Reset. Beide Classes sind für alle Levels geeignet; deine Trainerin erklärt das Equipment und bietet passende Optionen.'],
  ['Wann soll ich ankommen?', 'Bitte sei bei deinem ersten Besuch 10 Minuten vor Kursbeginn da. So bleibt genug Zeit für Check-in, Fragen und eine ruhige Einführung.'],
  ['Was soll ich mitbringen?', 'Bequeme, enganliegende Kleidung und Grip Socks. Wasser und alles Weitere findest du im Studio.'],
  ['Wie funktioniert die Stornierung?', 'Du kannst deinen Kurs bis 12 Stunden vor Beginn kostenfrei über dein bsport-Konto stornieren. Danach wird die Einheit berechnet.'],
  ['Kann ich während der Schwangerschaft teilnehmen?', 'Sprich bitte vorab mit deiner Ärztin oder deinem Arzt und gib uns vor dem Training Bescheid. Wir beraten dich gern zu einer passenden Class.'],
];
