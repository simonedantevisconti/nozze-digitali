import { Link } from "react-router-dom";
import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/gestione-invitati-matrimonio.css";

const GestioneInvitatiMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sulla%20gestione%20degli%20invitati%20con%20Nozze%20Digitali.";

  return (
    <>
      <SeoPage
        title="Gestione Invitati Matrimonio | Nozze Digitali"
        description="Gestisci la lista invitati del matrimonio, conferme, assenti e risposte in attesa in un'unica area riservata, con esportazione PDF."
        canonical="https://nozzedigitali.site/gestione-invitati-matrimonio"
        breadcrumbName="Gestione invitati matrimonio"
      />

      <main className="guests-page">
        <section className="guests-hero">
          <div className="container">
            <Reveal>
              <div className="guests-hero-content">
                <p className="guests-eyebrow">GESTIONE INVITATI</p>

                <h1>La lista invitati sempre aggiornata</h1>

                <p className="guests-intro">
                  Ogni conferma ricevuta attraverso le partecipazioni digitali
                  aggiorna la situazione degli invitati, così sapete sempre chi
                  sarà presente, chi non parteciperà e chi deve ancora
                  rispondere.
                </p>

                <div className="guests-hero-actions">
                  <a href="#area-riservata" className="btn btn-primary-custom">
                    Scopri l'area riservata
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

        <section className="guests-flow">
          <div className="container">
            <Reveal>
              <div className="guests-heading">
                <p className="guests-eyebrow">TUTTO COLLEGATO</p>

                <h2>Dalla partecipazione alla lista finale</h2>

                <p>
                  Le risposte degli invitati non devono essere riportate
                  manualmente: fanno parte dello stesso sistema.
                </p>
              </div>
            </Reveal>

            <div className="guests-flow-grid">
              {[
                [
                  "01",
                  "Partecipazione",
                  "Ogni invito viene associato all'invitato o al nucleo familiare.",
                ],
                [
                  "02",
                  "Codice personale",
                  "L'invitato utilizza il proprio codice per accedere alla conferma.",
                ],
                [
                  "03",
                  "Risposta",
                  "Comunica direttamente online se parteciperà oppure no.",
                ],
                [
                  "04",
                  "Lista aggiornata",
                  "La risposta viene raccolta nella vostra area riservata.",
                ],
              ].map(([number, title, text]) => (
                <Reveal key={number}>
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

        <section id="area-riservata" className="guests-admin">
          <div className="container">
            <Reveal>
              <div className="guests-heading">
                <p className="guests-eyebrow">AREA RISERVATA</p>

                <h2>Una fotografia chiara della situazione</h2>

                <p>
                  Non dovete più ricostruire le presenze da WhatsApp, telefonate
                  o fogli Excel.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="guests-admin-panel">
                <div className="guests-admin-header">
                  <div>
                    <strong>Invitati</strong>
                    <span>Situazione aggiornata</span>
                  </div>

                  <span className="guests-admin-pdf">Scarica PDF</span>
                </div>

                <div className="guests-admin-stats">
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

                <div className="guests-admin-table">
                  <div className="guests-admin-table-head">
                    <span>Invitato</span>
                    <span>Stato</span>
                  </div>

                  <div>
                    <span>Giulia Bianchi</span>
                    <strong>Confermato</strong>
                  </div>

                  <div>
                    <span>Marco Rossi</span>
                    <strong>In attesa</strong>
                  </div>

                  <div>
                    <span>Famiglia Verdi</span>
                    <strong>Confermato</strong>
                  </div>

                  <div>
                    <span>Laura Colombo</span>
                    <strong>Non partecipa</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="guests-features">
          <div className="container">
            <Reveal>
              <div className="guests-heading">
                <p className="guests-eyebrow">COSA POTETE FARE</p>

                <h2>Le informazioni essenziali sempre a portata di mano</h2>
              </div>
            </Reveal>

            <div className="guests-features-grid">
              {[
                [
                  "Controllare i confermati",
                  "Sapete immediatamente chi sarà presente al matrimonio.",
                ],
                [
                  "Controllare gli assenti",
                  "Le risposte negative rimangono registrate insieme alle altre.",
                ],
                [
                  "Vedere chi manca",
                  "Individuate rapidamente chi deve ancora comunicare la propria scelta.",
                ],
                [
                  "Scaricare la lista",
                  "Potete esportare la situazione aggiornata in formato PDF.",
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

        <section className="guests-extras">
          <div className="container">
            <Reveal>
              <div className="guests-heading">
                <p className="guests-eyebrow">SERVIZI AGGIUNTIVI</p>

                <h2>Dalla lista invitati potete gestire anche altri aspetti</h2>

                <p>
                  Se vi servono più informazioni dagli invitati potete
                  aggiungere funzioni specifiche al sito.
                </p>
              </div>
            </Reveal>

            <div className="guests-extras-grid">
              <Reveal>
                <article>
                  <div>
                    <h3>Indicazioni alimentari</h3>
                    <strong>+50 €</strong>
                  </div>

                  <p>
                    Gli invitati possono compilare un questionario per
                    comunicare allergie, intolleranze o diete particolari.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={100}>
                <article>
                  <div>
                    <h3>Tavoli</h3>
                    <strong>+50 €</strong>
                  </div>

                  <p>
                    Una volta completata la disposizione, gli invitati possono
                    cercare il proprio nome e scoprire il tavolo assegnato.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="guests-package">
          <div className="container">
            <Reveal>
              <div className="guests-package-box">
                <div>
                  <p className="guests-eyebrow">PACCHETTO BASE</p>

                  <h2>La gestione della lista è già compresa nei 300 €</h2>

                  <p>
                    Conferme, situazione aggiornata degli invitati e
                    esportazione PDF fanno parte del servizio base.
                  </p>
                </div>

                <strong>300 €</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="guests-related">
          <div className="container">
            <Reveal>
              <div className="guests-related-box">
                <div>
                  <p className="guests-eyebrow">DA DOVE ARRIVANO I DATI?</p>

                  <h2>Tutto parte dalle vostre partecipazioni digitali</h2>
                </div>

                <Link
                  to="/partecipazioni-digitali"
                  className="btn btn-outline-custom"
                >
                  Scopri le partecipazioni
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="guests-cta">
          <div className="container">
            <Reveal>
              <div className="guests-cta-box">
                <p className="guests-eyebrow">INVITATI SENZA CONFUSIONE</p>

                <h2>Organizzate le conferme in un unico posto</h2>

                <p>
                  Le partecipazioni digitali raccolgono le risposte, mentre voi
                  avete sempre una lista ordinata e aggiornata.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="guests-cta-button"
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

export default GestioneInvitatiMatrimonioPage;
