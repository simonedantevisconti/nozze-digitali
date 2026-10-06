import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import "../styles/home.css";

const HomePage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali.";

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="home-hero-content">
                <p className="home-eyebrow">NOZZE DIGITALI</p>

                <h1>Le vostre partecipazioni, finalmente digitali.</h1>

                <p className="home-hero-text">
                  Partecipazioni personalizzate, conferme online e un sito
                  dedicato al vostro matrimonio. Ogni invito ha un codice
                  personale e voi tenete tutto sotto controllo da un&apos;area
                  riservata.
                </p>

                <div className="home-hero-actions">
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

                <p className="home-hero-price">
                  Pacchetto base completo <strong>300 €</strong>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-card hero-card-confirm">
                  <span>✓</span>
                  Confermato
                </div>

                <div className="hero-card hero-card-tables">
                  <span>#</span>
                  Codice personale
                </div>

                <div className="hero-device">
                  <div className="hero-device-top">
                    <span></span>
                  </div>

                  <div className="hero-device-content">
                    <p className="hero-device-eyebrow">
                      PARTECIPAZIONE DIGITALE
                    </p>

                    <h2>Marta &amp; Simone</h2>
                    <p>12 settembre 2027 · ore 15:30</p>

                    <div className="hero-device-line"></div>

                    <div className="hero-device-code">
                      <small>IL TUO CODICE</small>
                      <strong>MS2407</strong>
                    </div>

                    <div className="hero-device-actions">
                      <span>Conferma partecipazione</span>
                      <span>Informazioni sul matrimonio</span>
                    </div>
                  </div>
                </div>

                <div className="hero-card hero-card-food">
                  <span>87</span>
                  Partecipanti
                </div>

                <div className="hero-card hero-card-photos">
                  <span>PDF</span>
                  Lista aggiornata
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="come-funziona" className="home-flow-section">
        <div className="container">
          <Reveal>
            <div className="home-section-heading">
              <p className="home-section-eyebrow">COME FUNZIONA</p>

              <h2>Dalla partecipazione alla conferma, senza complicazioni</h2>

              <p>
                Ogni invitato riceve una partecipazione personalizzata con un
                codice. Voi vedete tutte le risposte in un unico posto.
              </p>
            </div>
          </Reveal>

          <div className="home-steps-grid">
            {[
              [
                "01",
                "Creiamo le partecipazioni",
                "Scegliete stile, colori, testi, fotografie e font in linea con il vostro matrimonio.",
              ],
              [
                "02",
                "Assegniamo un codice",
                "Ogni partecipazione riceve un codice univoco associato all'invitato o al nucleo familiare.",
              ],
              [
                "03",
                "L'invitato risponde",
                "Dal sito dedicato inserisce il codice e comunica se parteciperà al matrimonio.",
              ],
              [
                "04",
                "Controllate le conferme",
                "Dall'area riservata vedete chi ha confermato, chi non parteciperà e chi deve ancora rispondere.",
              ],
              [
                "05",
                "Scaricate la lista",
                "La lista invitati rimane sempre aggiornata e può essere scaricata in formato PDF.",
              ],
            ].map(([number, title, text]) => (
              <Reveal key={number}>
                <article className="home-step-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-control-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal>
                <p className="home-section-eyebrow">AREA RISERVATA</p>
                <h2>Tutte le conferme sempre sotto controllo</h2>

                <p className="home-control-copy">
                  Niente fogli sparsi, chat da ricontrollare o risposte da
                  ricordare. L&apos;area riservata raccoglie i dati delle vostre
                  partecipazioni e vi mostra la situazione aggiornata.
                </p>

                <ul className="home-check-list">
                  <li>Invitati confermati</li>
                  <li>Invitati che non parteciperanno</li>
                  <li>Invitati ancora in attesa</li>
                  <li>Lista aggiornata scaricabile in PDF</li>
                </ul>
              </Reveal>
            </div>

            <div className="col-lg-6">
              <Reveal delay={120}>
                <div className="home-admin-mockup">
                  <div className="home-admin-top">
                    <span>Area sposi</span>
                    <span>Il nostro matrimonio</span>
                  </div>

                  <div className="home-admin-stats">
                    <div>
                      <strong>87</strong>
                      <span>Confermati</span>
                    </div>

                    <div>
                      <strong>12</strong>
                      <span>Non partecipano</span>
                    </div>

                    <div>
                      <strong>34</strong>
                      <span>In attesa</span>
                    </div>
                  </div>

                  <div className="home-admin-list">
                    <div>
                      <span>Giulia Bianchi</span>
                      <b>Confermato</b>
                    </div>

                    <div>
                      <span>Marco Rossi</span>
                      <b>In attesa</b>
                    </div>

                    <div>
                      <span>Famiglia Verdi</span>
                      <b>Confermato</b>
                    </div>
                  </div>

                  <span className="home-admin-download">Scarica lista PDF</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="home-site-section">
        <div className="container">
          <Reveal>
            <div className="home-section-heading">
              <p className="home-section-eyebrow">IL VOSTRO SITO</p>

              <h2>Le informazioni del matrimonio in un unico posto</h2>

              <p>
                Oltre alla conferma di partecipazione, gli invitati trovano una
                homepage personalizzata con tutto ciò che serve per raggiungervi
                e vivere il vostro grande giorno.
              </p>
            </div>
          </Reveal>

          <div className="row g-4">
            {[
              [
                "Data e ora",
                "Il giorno e gli orari del matrimonio sempre chiari e disponibili.",
              ],
              [
                "Location",
                "Cerimonia e ricevimento con tutte le informazioni necessarie.",
              ],
              [
                "Google Maps",
                "Indicazioni immediate per raggiungere facilmente la location.",
              ],
              [
                "Stile personalizzato",
                "Foto, colori, testi e font scelti insieme a voi.",
              ],
            ].map(([title, text]) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <article className="benefit-card h-100">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prezzi" className="home-pricing-section">
        <div className="container">
          <Reveal>
            <div className="home-section-heading">
              <p className="home-section-eyebrow">PACCHETTO BASE</p>

              <h2>Il necessario per partire, a 300 €</h2>

              <p>
                Un prezzo chiaro per avere partecipazioni digitali, sito
                personalizzato e gestione delle conferme.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="home-base-package">
              <div className="home-base-package-price">
                <span>Pacchetto base</span>
                <strong>300 €</strong>
              </div>

              <div className="home-base-package-grid">
                {[
                  "Partecipazioni digitali personalizzate",
                  "Codice univoco per ogni partecipazione",
                  "Conferma o rifiuto della partecipazione online",
                  "Sito personalizzato del matrimonio",
                  "Data, ora, location e Google Maps",
                  "Area riservata per gli sposi",
                  "Lista invitati sempre aggiornata",
                  "Esportazione della lista in PDF",
                  "Dominio personalizzato",
                  "Personalizzazione di foto, colori, testi e font",
                ].map((item) => (
                  <div className="home-package-item" key={item}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-extras-section">
        <div className="container">
          <Reveal>
            <div className="home-section-heading">
              <p className="home-section-eyebrow">SERVIZI EXTRA</p>

              <h2>Aggiungete solo ciò che vi serve</h2>

              <p>
                Il sito può crescere insieme alle vostre esigenze. Ogni sezione
                extra viene integrata nello stesso spazio digitale.
              </p>
            </div>
          </Reveal>

          <div className="home-extras-grid">
            {[
              [
                "Aggiornamenti",
                "Pubblicate comunicazioni e novità per tenere gli invitati sempre aggiornati.",
                "+50 €",
              ],
              [
                "Tavoli",
                "Gli invitati cercano il proprio nome e scoprono subito il tavolo assegnato.",
                "+50 €",
              ],
              [
                "Indicazioni alimentari",
                "Raccogliete allergie, intolleranze e diete particolari con un questionario dedicato.",
                "+50 €",
              ],
              [
                "Rullino fotografico",
                "Gli invitati caricano le foto del matrimonio e voi scegliete quali mostrare nella pagina dedicata.",
                "+100 €",
              ],
              [
                "Bomboniere",
                "Una sezione su misura per comunicare indicazioni o esigenze particolari legate alle bomboniere.",
                "+50 €",
              ],
            ].map(([title, text, price]) => (
              <Reveal key={title}>
                <article className="home-extra-card">
                  <div className="home-extra-card-top">
                    <h3>{title}</h3>
                    <strong>{price}</strong>
                  </div>

                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-example-section">
        <div className="container">
          <Reveal>
            <div className="home-example-card">
              <div>
                <p className="home-section-eyebrow">UN ESEMPIO REALE</p>

                <h2>Marta &amp; Simone</h2>

                <p>
                  Guardate un sito matrimonio già realizzato per capire come
                  informazioni, conferme e servizi possono convivere nello
                  stesso spazio.
                </p>
              </div>

              <a
                href="https://martaesimone.fun/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-custom"
              >
                Visita il sito di esempio
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-video-section">
        <div className="container">
          <Reveal>
            <div className="home-video-heading">
              <p className="home-section-eyebrow">GUARDA COME FUNZIONA</p>

              <h2>Scoprite Nozze Digitali in pochi minuti</h2>

              <p>
                Nel video tutorial potete vedere il funzionamento del sito e
                delle principali funzioni dedicate agli sposi e agli invitati.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="home-video-wrapper">
              <div className="ratio ratio-16x9">
                {videoLoaded ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/xpvonnf1ALY?autoplay=1"
                    title="Scopri Nozze Digitali"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <button
                    type="button"
                    className="home-video-placeholder"
                    onClick={() => setVideoLoaded(true)}
                    aria-label="Riproduci il video di presentazione di Nozze Digitali"
                  >
                    <span className="home-video-play" aria-hidden="true">
                      ▶
                    </span>

                    <span className="home-video-placeholder-text">
                      Guarda come funziona Nozze Digitali
                    </span>
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-faq-section">
        <div className="container">
          <Reveal>
            <div className="home-faq-heading">
              <p className="home-section-eyebrow">DOMANDE FREQUENTI</p>

              <h2>Le risposte prima di iniziare</h2>

              <p>
                Le informazioni più importanti sul funzionamento delle
                partecipazioni digitali e del vostro sito.
              </p>
            </div>
          </Reveal>

          <div className="home-faq-list">
            {[
              [
                "Come ricevono la partecipazione gli invitati?",
                "La partecipazione digitale può essere inviata direttamente agli invitati, ad esempio tramite WhatsApp. Ogni partecipazione contiene il codice necessario per comunicare la propria presenza.",
              ],
              [
                "Gli invitati devono registrarsi?",
                "No. Per confermare la partecipazione è sufficiente utilizzare il codice associato alla partecipazione ricevuta.",
              ],
              [
                "Posso vedere chi non ha ancora risposto?",
                "Sì. Dall'area riservata potete controllare confermati, assenti e invitati ancora in attesa.",
              ],
              [
                "Posso scaricare la lista degli invitati?",
                "Sì. La lista aggiornata delle partecipazioni può essere scaricata in formato PDF.",
              ],
              [
                "Il sito è personalizzato?",
                "Sì. Dominio, fotografie, colori, testi e font vengono personalizzati in base allo stile scelto per il vostro matrimonio.",
              ],
              [
                "Quanto costa il servizio?",
                "Il pacchetto base costa 300 €. Le sezioni aggiuntive sono facoltative e hanno un prezzo separato, indicato sul sito.",
              ],
              [
                "Posso aggiungere altri servizi?",
                "Sì. Aggiornamenti, tavoli, indicazioni alimentari, rullino fotografico e una sezione dedicata alle bomboniere possono essere aggiunti al pacchetto base.",
              ],
            ].map(([question, answer]) => (
              <details className="home-faq-item" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="container">
          <Reveal>
            <div className="home-final-cta-box">
              <p className="home-section-eyebrow">IL VOSTRO MATRIMONIO</p>

              <h2>Costruiamo insieme le vostre partecipazioni digitali</h2>

              <p>
                Raccontateci come immaginate il vostro giorno e prepariamo uno
                spazio semplice, personale e utile per voi e per i vostri
                invitati.
              </p>

              <div className="home-final-cta-actions">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-custom"
                >
                  Scrivici su WhatsApp
                </a>

                <Link
                  to="/partecipazioni-digitali"
                  className="btn btn-outline-custom"
                >
                  Scopri le partecipazioni
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
