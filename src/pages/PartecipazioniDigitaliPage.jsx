import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/partecipazioni-digitali.css";

const PartecipazioniDigitaliPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sulle%20partecipazioni%20digitali%20di%20Nozze%20Digitali.";

  const examples = [
    {
      eyebrow: "ESSENZIALE",
      names: "Giulia & Marco",
      date: "18 settembre 2027",
      code: "GM1809",
    },
    {
      eyebrow: "ROMANTICA",
      names: "Laura & Umberto",
      date: "12 giugno 2027",
      code: "LU1206",
    },
    {
      eyebrow: "MODERNA",
      names: "Marta & Simone",
      date: "24 luglio 2027",
      code: "MS2407",
    },
  ];

  return (
    <>
      <SeoPage
        title="Partecipazioni Digitali per Matrimonio | Nozze Digitali"
        description="Partecipazioni digitali personalizzate per matrimonio con codice univoco e conferma di partecipazione online."
        canonical="https://nozzedigitali.site/partecipazioni-digitali"
        breadcrumbName="Partecipazioni digitali"
      />

      <main className="digital-invitations-page">
        <section className="digital-invitations-hero">
          <div className="container">
            <div className="digital-invitations-hero-grid">
              <div className="digital-invitations-hero-content">
                <p className="digital-invitations-eyebrow">
                  PARTECIPAZIONI DIGITALI
                </p>

                <h1>Il vostro invito, semplice da condividere e da gestire</h1>

                <p className="digital-invitations-intro">
                  Creiamo una partecipazione coordinata allo stile del vostro
                  matrimonio. Ogni invito può avere un codice personale che
                  permette agli invitati di confermare la propria presenza
                  direttamente dal vostro sito.
                </p>

                <div className="digital-invitations-hero-actions">
                  <a href="#come-funziona" className="btn btn-primary-custom">
                    Come funziona
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-custom"
                  >
                    Richiedi informazioni
                  </a>
                </div>
              </div>

              <div className="digital-invitations-preview">
                <div className="digital-invitations-paper">
                  <p>SIAMO FELICI DI INVITARVI</p>
                  <h2>Sposa &amp; Sposo</h2>
                  <div className="digital-invitations-paper-line"></div>
                  <span>Il nostro matrimonio</span>

                  <div className="digital-invitations-code">
                    <small>CODICE PERSONALE</small>
                    <strong>ND2407</strong>
                  </div>

                  <p className="digital-invitations-paper-note">
                    Utilizza il codice sul nostro sito per confermare la tua
                    partecipazione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="come-funziona" className="digital-invitations-how">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-heading">
                <p className="digital-invitations-eyebrow">COME FUNZIONA</p>
                <h2>Dalla partecipazione alla conferma</h2>
                <p>
                  Un processo semplice per voi e immediato per i vostri invitati.
                </p>
              </div>
            </Reveal>

            <div className="digital-invitations-steps">
              {[
                [
                  "01",
                  "La personalizziamo",
                  "Scegliamo insieme colori, font, fotografie e testi.",
                ],
                [
                  "02",
                  "Creiamo i codici",
                  "Ogni invitato o nucleo familiare può ricevere un codice univoco.",
                ],
                [
                  "03",
                  "La condividete",
                  "La partecipazione può essere inviata comodamente tramite WhatsApp, email o altri canali digitali.",
                ],
                [
                  "04",
                  "Ricevete le risposte",
                  "Gli invitati inseriscono il codice sul sito e confermano o rifiutano la partecipazione.",
                ],
              ].map(([number, title, text], index) => (
                <Reveal key={number} delay={index * 70}>
                  <article>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="digital-invitations-personalization">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-heading">
                <p className="digital-invitations-eyebrow">ESEMPI</p>
                <h2>Ogni partecipazione può avere uno stile diverso</h2>
                <p>
                  Questi mockup mostrano alcune possibili impostazioni. Il
                  risultato finale viene costruito sullo stile scelto da voi.
                </p>
              </div>
            </Reveal>

            <div className="digital-invitations-personalization-grid">
              {examples.map((example, index) => (
                <Reveal key={example.names} delay={index * 80}>
                  <article>
                    <span>{example.eyebrow}</span>
                    <h3>{example.names}</h3>
                    <p>{example.date}</p>
                    <p>
                      Codice invito: <strong>{example.code}</strong>
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="digital-invitations-code-section">
          <div className="container">
            <div className="digital-invitations-code-grid">
              <Reveal>
                <div className="digital-invitations-code-content">
                  <p className="digital-invitations-eyebrow">
                    CODICE PERSONALE
                  </p>

                  <h2>Le conferme vengono raccolte automaticamente</h2>

                  <p>
                    Il codice collega la risposta alla persona corretta senza
                    richiedere registrazioni. Voi potete vedere chi partecipa,
                    chi non partecipa e chi deve ancora rispondere.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="digital-invitations-code-mockup">
                  <p>Conferma la tua partecipazione</p>
                  <span className="digital-invitations-code-label">
                    CODICE PERSONALE
                  </span>
                  <div className="digital-invitations-code-input">ND2407</div>
                  <span className="digital-invitations-code-button">
                    Continua
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PartecipazioniDigitaliPage;
