import { Link } from "react-router-dom";
import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/partecipazioni-digitali.css";

const PartecipazioniDigitaliPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sulle%20partecipazioni%20digitali%20di%20Nozze%20Digitali.";

  return (
    <>
      <SeoPage
        title="Partecipazioni Digitali per Matrimonio | Nozze Digitali"
        description="Partecipazioni digitali personalizzate per matrimonio con codice univoco, conferma di partecipazione online, sito dedicato e area riservata per gli sposi."
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

                <h1>
                  Partecipazioni digitali personalizzate per il vostro
                  matrimonio
                </h1>

                <p className="digital-invitations-intro">
                  Ogni invitato riceve una partecipazione creata nello stile del
                  vostro matrimonio e un codice personale da utilizzare sul sito
                  dedicato per confermare o meno la propria presenza.
                </p>

                <div className="digital-invitations-hero-actions">
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

                <p className="digital-invitations-hero-price">
                  Incluse nel pacchetto base da <strong>300 €</strong>
                </p>
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

                <div className="digital-invitations-floating-card">
                  <span>✓</span>
                  Conferma online
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

                <h2>
                  Dalla partecipazione alla conferma in pochi semplici passaggi
                </h2>

                <p>
                  Il sistema è pensato per essere semplice sia per voi che per
                  gli invitati.
                </p>
              </div>
            </Reveal>

            <div className="digital-invitations-steps">
              <Reveal>
                <article>
                  <span>01</span>

                  <h3>Creiamo le partecipazioni</h3>

                  <p>
                    Definiamo insieme stile, colori, testi, fotografie e font
                    delle vostre partecipazioni digitali.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article>
                  <span>02</span>

                  <h3>Assegniamo un codice</h3>

                  <p>
                    A ogni partecipazione viene associato un codice univoco
                    collegato all'invitato o al nucleo familiare.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={160}>
                <article>
                  <span>03</span>

                  <h3>Condividete l'invito</h3>

                  <p>
                    Potete inviare la partecipazione direttamente ai vostri
                    invitati, ad esempio tramite WhatsApp.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={240}>
                <article>
                  <span>04</span>

                  <h3>L'invitato conferma</h3>

                  <p>
                    Sul sito del matrimonio inserisce il proprio codice e
                    comunica se parteciperà oppure no.
                  </p>
                </article>
              </Reveal>
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

                  <h2>Ogni partecipazione identifica il vostro invitato</h2>

                  <p>
                    Il codice univoco permette di collegare la risposta ricevuta
                    alla persona o al nucleo familiare corretto, senza chiedere
                    registrazioni o creare procedure complicate.
                  </p>

                  <p>
                    Gli invitati devono semplicemente inserire il codice
                    ricevuto e indicare se parteciperanno al matrimonio.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="digital-invitations-code-mockup">
                  <p>Conferma la tua partecipazione</p>

                  <label htmlFor="demo-code">Inserisci il tuo codice</label>

                  <div className="digital-invitations-code-input">ND2407</div>

                  <span className="digital-invitations-code-button">
                    Continua
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="digital-invitations-admin-section">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-heading">
                <p className="digital-invitations-eyebrow">AREA RISERVATA</p>

                <h2>Voi sapete sempre chi ha risposto</h2>

                <p>
                  Tutte le conferme vengono raccolte automaticamente nella
                  vostra area riservata.
                </p>
              </div>
            </Reveal>

            <div className="digital-invitations-admin-grid">
              <Reveal>
                <article className="digital-invitations-admin-card">
                  <strong>87</strong>

                  <span>Confermati</span>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article className="digital-invitations-admin-card">
                  <strong>12</strong>

                  <span>Non partecipano</span>
                </article>
              </Reveal>

              <Reveal delay={160}>
                <article className="digital-invitations-admin-card">
                  <strong>34</strong>

                  <span>In attesa</span>
                </article>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="digital-invitations-admin-info">
                <div>
                  <span>✓</span>

                  <p>
                    Lista degli invitati sempre aggiornata in base alle risposte
                    ricevute.
                  </p>
                </div>

                <div>
                  <span>✓</span>

                  <p>
                    Possibilità di controllare facilmente chi deve ancora
                    rispondere.
                  </p>
                </div>

                <div>
                  <span>✓</span>

                  <p>Esportazione della lista aggiornata in formato PDF.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="digital-invitations-personalization">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-heading">
                <p className="digital-invitations-eyebrow">PERSONALIZZAZIONE</p>

                <h2>Una partecipazione che rappresenta davvero voi</h2>

                <p>
                  La tecnologia rimane sullo sfondo. Davanti ci siete voi, con
                  lo stile scelto per il vostro matrimonio.
                </p>
              </div>
            </Reveal>

            <div className="digital-invitations-personalization-grid">
              <Reveal>
                <article>
                  <span>01</span>
                  <h3>Colori</h3>
                  <p>
                    Palette e tonalità coerenti con il tema del vostro
                    matrimonio.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article>
                  <span>02</span>
                  <h3>Font</h3>
                  <p>
                    Tipografia scelta per creare l'atmosfera che desiderate.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={160}>
                <article>
                  <span>03</span>
                  <h3>Fotografie</h3>
                  <p>
                    Le vostre immagini possono diventare parte della
                    partecipazione.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={240}>
                <article>
                  <span>04</span>
                  <h3>Testi</h3>
                  <p>
                    Nomi, frasi, informazioni e contenuti vengono adattati alle
                    vostre esigenze.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="digital-invitations-package">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-package-box">
                <div className="digital-invitations-package-top">
                  <div>
                    <p className="digital-invitations-eyebrow">
                      PACCHETTO BASE
                    </p>

                    <h2>Le partecipazioni sono già incluse nei 300 €</h2>
                  </div>

                  <strong>300 €</strong>
                </div>

                <div className="digital-invitations-package-grid">
                  <div>
                    <span>✓</span>
                    <p>Partecipazioni digitali personalizzate</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Codice personale per ogni partecipazione</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Conferma o rifiuto della presenza online</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Sito personalizzato del matrimonio</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Area riservata per gli sposi</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Lista aggiornata ed esportazione PDF</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Dominio personalizzato</p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>Personalizzazione di foto, colori, testi e font</p>
                  </div>
                </div>

                <Link
                  to="/#prezzi"
                  className="digital-invitations-package-link"
                >
                  Scopri tutti i servizi e gli extra
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="digital-invitations-paper-section">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-heading">
                <p className="digital-invitations-eyebrow">
                  DIGITALE E CARTACEO
                </p>

                <h2>Le due soluzioni possono anche convivere</h2>

                <p>
                  Se desiderate mantenere una partecipazione cartacea, potete
                  utilizzarla insieme al sito digitale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="digital-invitations-paper-copy">
                <p>
                  La partecipazione cartacea può restare il vostro invito
                  tradizionale, mentre il codice e il sito vengono utilizzati
                  per raccogliere le conferme e mantenere le informazioni
                  aggiornate.
                </p>

                <p>
                  In questo modo mantenete l'eleganza dell'invito fisico senza
                  rinunciare alla comodità della gestione digitale.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="digital-invitations-cta">
          <div className="container">
            <Reveal>
              <div className="digital-invitations-cta-box">
                <p className="digital-invitations-eyebrow">
                  LE VOSTRE PARTECIPAZIONI
                </p>

                <h2>
                  Creiamo insieme una partecipazione pensata per il vostro
                  matrimonio
                </h2>

                <p>
                  Raccontateci lo stile che avete scelto e scopriamo insieme
                  come trasformarlo in una partecipazione digitale semplice da
                  usare per tutti i vostri invitati.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="digital-invitations-cta-button"
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

export default PartecipazioniDigitaliPage;
