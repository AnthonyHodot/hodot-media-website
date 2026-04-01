import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <div className="space-y-12 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG:</h2>
          <p>
            Hodot Media<br />
            Anthony Hodot<br />
            Im Schilling 15<br />
            69181 Leimen
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kontakt:</h2>
          <p>
            Telefon: 01573 4470430<br />
            E-Mail: anthonyhodot4@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Umsatzsteuer-ID:</h2>
          <p>
            Nicht vorhanden
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
          <p>
            Anthony Hodot
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Haftung für Links</h2>
          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
