import { Link } from "react-router-dom";
import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/rsvp-matrimonio.css";

const RsvpMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sul%20sistema%20di%20conferma%20degli%20invitati%20di%20Nozze%20Digitali.";

  return (
    <>
      <SeoPage
        title="RSVP Matrimonio Online | Conferme Invitati | Nozze Digitali"
        description="Raccogli online le conferme di partecipazione al matrimonio tramite un codice personale. Controlla confermati, assenti e invitati in attesa da un'area riservata."
        canonical="https://nozzedigitali.site/rsvp-matrimonio"
        breadcrumbName="RSVP matrimonio"
      />

      <main className="rsvp-page">
        <section className="rsvp-hero">
          <div className="container">
            <Reveal>
              <div className="rsvp-hero-content">
                <p className="rsvp-eyebrow">CONFERME DI PARTECIPAZIONE</p>

                <h1>Sapete sempre chi parteciperà al vostro matrimonio</h1>

                <p className="rsvp-intro">
                  Ogni invitato utilizza il codice ricevuto con la propria
                  partecipazione per comunicare online se sarà presente. Tutte
                  le risposte vengono raccolte automaticamente nella vostra area
                  riservata.
                </p>

                <div className="rsvp-hero-actions">
                  <a href="#come-funziona" className="btn btn-primary-custom">
                    Scopri come funziona
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
            </Reveal>
          </div>
        </section>

        <section id="come-funziona" className="rsvp-how">
          <div className="container">
            <Reveal>
              <div className="rsvp-heading">
                <p className="rsvp-eyebrow">COME FUNZIONA</p>

                <h2>Dalla partecipazione alla conferma in pochi passaggi</h2>

                <p>
                  Nessuna registrazione e nessuna procedura complicata per gli
                  invitati.
                </p>
              </div>
            </Reveal>

            <div className="rsvp-steps">
              <Reveal>
                <article>
                  <span>01</span>

                  <h3>Riceve la partecipazione</h3>

                  <p>
                    L'invitato riceve la vostra partecipazione digitale con il
                    proprio codice personale.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article>
                  <span>02</span>

                  <h3>Accede al sito</h3>

                  <p>
                    Entra nel sito dedicato al matrimonio da smartphone, tablet
                    o computer.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={160}>
                <article>
                  <span>03</span>

                  <h3>Inserisce il codice</h3>

                  <p>
                    Il codice permette di riconoscere l'invitato o il nucleo
                    familiare associato alla partecipazione.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={240}>
                <article>
                  <span>04</span>

                  <h3>Comunica la presenza</h3>

                  <p>
                    Conferma se parteciperà oppure comunica che non potrà essere
                    presente.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="rsvp-code">
          <div className="container">
            <div className="rsvp-code-grid">
              <Reveal>
                <div>
                  <p className="rsvp-eyebrow">CODICE PERSONALE</p>

                  <h2>Una risposta collegata all'invitato corretto</h2>

                  <p>
                    Il codice univoco permette al sistema di sapere a quale
                    partecipazione appartiene la risposta ricevuta.
                  </p>

                  <p>
                    In questo modo non dovete ricostruire manualmente chi ha
                    scritto, chi ha telefonato o chi deve ancora rispondere.
                  </p>

                  <Link
                    to="/partecipazioni-digitali"
                    className="rsvp-text-link"
                  >
                    Scopri come funzionano le partecipazioni
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rsvp-code-demo">
                  <p>Conferma la tua partecipazione</p>

                  <span>INSERISCI IL TUO CODICE</span>

                  <div className="rsvp-code-value">ND2407</div>

                  <div className="rsvp-code-button">Continua</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="rsvp-admin">
          <div className="container">
            <Reveal>
              <div className="rsvp-heading">
                <p className="rsvp-eyebrow">AREA RISERVATA</p>

                <h2>Tutte le risposte in un unico posto</h2>

                <p>
                  Mentre gli invitati rispondono, la situazione viene aggiornata
                  nella vostra area riservata.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rsvp-admin-panel">
                <div className="rsvp-admin-top">
                  <span>Partecipazioni</span>
                  <span>Situazione aggiornata</span>
                </div>

                <div className="rsvp-admin-stats">
                  <article>
                    <strong>87</strong>
                    <span>Confermati</span>
                  </article>

                  <article>
                    <strong>12</strong>
                    <span>Non partecipano</span>
                  </article>

                  <article>
                    <strong>34</strong>
                    <span>In attesa</span>
                  </article>
                </div>

                <div className="rsvp-admin-row">
                  <span>Giulia Bianchi</span>
                  <strong>Confermato</strong>
                </div>

                <div className="rsvp-admin-row">
                  <span>Marco Rossi</span>
                  <strong>In attesa</strong>
                </div>

                <div className="rsvp-admin-row">
                  <span>Famiglia Verdi</span>
                  <strong>Confermato</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="rsvp-benefits">
          <div className="container">
            <Reveal>
              <div className="rsvp-heading">
                <p className="rsvp-eyebrow">MENO CONFUSIONE</p>

                <h2>Niente più conferme sparse tra messaggi e telefonate</h2>
              </div>
            </Reveal>

            <div className="rsvp-benefits-grid">
              {[
                [
                  "Risposte centralizzate",
                  "Tutte le conferme vengono raccolte nello stesso spazio.",
                ],
                [
                  "Situazione aggiornata",
                  "Vedete immediatamente chi ha risposto e chi è ancora in attesa.",
                ],
                [
                  "Conteggi più semplici",
                  "Avete sempre una visione chiara del numero dei partecipanti.",
                ],
                [
                  "Lista esportabile",
                  "La lista aggiornata degli invitati può essere scaricata in PDF.",
                ],
              ].map(([title, text]) => (
                <Reveal key={title}>
                  <article>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="rsvp-package">
          <div className="container">
            <Reveal>
              <div className="rsvp-package-box">
                <div>
                  <p className="rsvp-eyebrow">GIÀ INCLUSO</p>

                  <h2>
                    La gestione delle conferme fa parte del pacchetto base
                  </h2>

                  <p>
                    Non è un servizio extra: partecipazioni digitali, codice
                    personale, conferme online e area riservata sono già
                    comprese nei 300 €.
                  </p>
                </div>

                <strong>300 €</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="rsvp-related">
          <div className="container">
            <Reveal>
              <div className="rsvp-related-box">
                <div>
                  <p className="rsvp-eyebrow">DALLE CONFERME ALLA LISTA</p>

                  <h2>Gestite tutti gli invitati da un unico spazio</h2>

                  <p>
                    Scoprite come le conferme ricevute diventano una lista
                    organizzata e sempre aggiornata.
                  </p>
                </div>

                <Link
                  to="/gestione-invitati-matrimonio"
                  className="btn btn-outline-custom"
                >
                  Gestione invitati
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="rsvp-cta">
          <div className="container">
            <Reveal>
              <div className="rsvp-cta-box">
                <p className="rsvp-eyebrow">CONFERME SENZA CONFUSIONE</p>

                <h2>Semplificate la gestione delle partecipazioni</h2>

                <p>
                  Create le vostre partecipazioni digitali e lasciate che Nozze
                  Digitali organizzi automaticamente le risposte dei vostri
                  invitati.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rsvp-cta-button"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default RsvpMatrimonioPage;
