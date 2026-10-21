import { useEffect, useState } from "react";

import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/partecipazioni-digitali.css";

const PartecipazioniDigitaliPage = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [fullscreenExample, setFullscreenExample] = useState(null);

  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sulle%20partecipazioni%20digitali%20di%20Nozze%20Digitali.";

  const examples = [
    "/partecipazione-1.png",
    "/partecipazione-2.png",
    "/partecipazione-3.png",
    "/partecipazione-4.png",
    "/partecipazione-5.png",
  ];

  const showPreviousExample = () => {
    setActiveExample((current) =>
      current === 0 ? examples.length - 1 : current - 1,
    );
  };

  const showNextExample = () => {
    setActiveExample((current) =>
      current === examples.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (!fullscreenExample) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setFullscreenExample(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenExample]);

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

            <Reveal delay={100}>
              <div className="digital-invitations-carousel">
                <button
                  type="button"
                  className="digital-invitations-carousel-arrow digital-invitations-carousel-arrow-left"
                  onClick={showPreviousExample}
                  aria-label="Partecipazione precedente"
                >
                  ‹
                </button>

                <button
                  type="button"
                  className="digital-invitations-carousel-image-button"
                  onClick={() => setFullscreenExample(examples[activeExample])}
                  aria-label={`Apri a tutto schermo la partecipazione ${activeExample + 1}`}
                >
                  <img
                    src={examples[activeExample]}
                    alt={`Esempio di partecipazione digitale ${activeExample + 1}`}
                    className="digital-invitations-carousel-image"
                  />
                </button>

                <button
                  type="button"
                  className="digital-invitations-carousel-arrow digital-invitations-carousel-arrow-right"
                  onClick={showNextExample}
                  aria-label="Partecipazione successiva"
                >
                  ›
                </button>
              </div>

              <div className="digital-invitations-carousel-dots">
                {examples.map((example, index) => (
                  <button
                    type="button"
                    key={example}
                    className={`digital-invitations-carousel-dot${
                      index === activeExample
                        ? " digital-invitations-carousel-dot-active"
                        : ""
                    }`}
                    onClick={() => setActiveExample(index)}
                    aria-label={`Mostra partecipazione ${index + 1}`}
                    aria-current={index === activeExample ? "true" : undefined}
                  />
                ))}
              </div>

              <p className="digital-invitations-carousel-hint">
                Clicca sulla partecipazione per visualizzarla a tutto schermo.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="digital-invitations-code-section">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-heading digital-invitations-code-heading">
                <p className="digital-invitations-eyebrow">CODICE PERSONALE</p>

                <h2>Un codice univoco collega ogni invito alla sua risposta</h2>

                <p>
                  Ogni partecipazione viene associata a un codice personale.
                  L&apos;invitato lo utilizza sul sito e la risposta viene
                  registrata automaticamente nell&apos;area riservata agli sposi.
                </p>
              </div>
            </Reveal>

            <div className="digital-invitations-code-flow">
              <Reveal>
                <article className="digital-invitations-code-step">
                  <div className="digital-invitations-code-step-copy">
                    <span className="digital-invitations-code-step-number">
                      01
                    </span>

                    <p className="digital-invitations-code-step-eyebrow">
                      PER GLI INVITATI
                    </p>

                    <h3>Inseriscono il codice ricevuto</h3>

                    <p>
                      Nella partecipazione ogni invitato trova il proprio codice
                      univoco. Basta inserirlo nella sezione dedicata del sito
                      per accedere alla conferma e comunicare se parteciperà al
                      matrimonio.
                    </p>
                  </div>

                  <div className="digital-invitations-code-step-visual">
                    <img
                      src="/inserisci-codice.png"
                      alt="Schermata in cui l'invitato inserisce il codice personale"
                    />
                  </div>
                </article>
              </Reveal>

              <Reveal delay={120}>
                <article className="digital-invitations-code-step digital-invitations-code-step-reverse">
                  <div className="digital-invitations-code-step-copy">
                    <span className="digital-invitations-code-step-number">
                      02
                    </span>

                    <p className="digital-invitations-code-step-eyebrow">
                      PER GLI SPOSI
                    </p>

                    <h3>Le conferme arrivano nell&apos;area riservata</h3>

                    <p>
                      La risposta viene associata automaticamente alla
                      partecipazione corretta. Dalla sezione admin gli sposi
                      possono controllare in qualsiasi momento chi ha
                      confermato, chi non parteciperà e chi deve ancora
                      rispondere.
                    </p>
                  </div>

                  <div className="digital-invitations-code-step-visual">
                    <img
                      src="/admin-sposi.png"
                      alt="Area admin degli sposi con il monitoraggio delle conferme"
                    />
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {fullscreenExample && (
        <div
          className="digital-invitations-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Anteprima partecipazione"
          onClick={() => setFullscreenExample(null)}
        >
          <button
            type="button"
            className="digital-invitations-lightbox-close"
            onClick={() => setFullscreenExample(null)}
            aria-label="Chiudi anteprima"
          >
            ×
          </button>

          <img
            src={fullscreenExample}
            alt="Partecipazione digitale a tutto schermo"
            className="digital-invitations-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PartecipazioniDigitaliPage;
