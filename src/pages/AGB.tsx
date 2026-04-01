import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function AGB() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <div className="space-y-12 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle Verträge zwischen Hodot Media (Anthony Hodot) und seinen Kunden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Leistungen</h2>
          <p>
            Der Anbieter erbringt Dienstleistungen im Bereich Webdesign, Webentwicklung und digitale Lösungen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Vertragsschluss</h2>
          <p>
            Ein Vertrag kommt durch Angebot und Annahme zustande. Angebote sind freibleibend und unverbindlich.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Preise und Zahlung</h2>
          <p>
            Alle Preise verstehen sich in Euro. Die Zahlung erfolgt gemäß individueller Vereinbarung. Der Anbieter behält sich vor, Vorauszahlungen zu verlangen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Leistungszeit</h2>
          <p>
            Die Dauer der Leistungserbringung hängt vom jeweiligen Projektumfang ab. Verzögerungen durch fehlende Mitwirkung des Kunden gehen nicht zu Lasten des Anbieters.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Mitwirkungspflicht des Kunden</h2>
          <p>
            Der Kunde verpflichtet sich, alle notwendigen Inhalte (Texte, Bilder etc.) rechtzeitig bereitzustellen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Haftung</h2>
          <p>
            Der Anbieter haftet nur für Vorsatz und grobe Fahrlässigkeit. Für Datenverluste haftet der Anbieter nur bei nachgewiesener grober Fahrlässigkeit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Urheberrecht und Nutzungsrechte</h2>
          <p>
            Alle erstellten Inhalte bleiben bis zur vollständigen Bezahlung Eigentum des Anbieters. Nach Zahlung erhält der Kunde ein einfaches Nutzungsrecht.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
