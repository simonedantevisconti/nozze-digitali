import { Link } from "react-router-dom";
import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/sito-matrimonio.css";

const SitoMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sul%20sito%20per%20il%20mio%20matrimonio.";

  return (
    <>
      <SeoPage
        title="Sito Web per Matrimonio Personalizzato | Nozze Digitali"
        description="Un sito personalizzato per il matrimonio con partecipazioni digitali, conferme online, informazioni su data e location e area riservata per gli sposi."
        canonical="https://nozzedigitali.site/sito-matrimonio"
        breadcrumbName="Sito matrimonio"
      />

      <main className="wedding-site-page">
        <section className="wedding-site-hero">
          <div className="container">
            <Reveal>
              <div className="wedding-site-hero-content">
                <p className="wedding-site-eyebrow">SITO WEB PER MATRIMONIO</p>

                <h1>Il vostro matrimonio ha il suo spazio digitale</h1>

                <p className="wedding-site-intro">
                  Un sito personalizzato dove i vostri invitati possono trovare
                  le informazioni del grande giorno, utilizzare il proprio
                  codice per confermare la presenza e accedere agli eventuali
                  servizi che avete scelto.
                </p>

                <div className="wedding-site-hero-actions">
                  <a href="#incluso" className="btn btn-primary-custom">
                    Scopri cosa comprende
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

        <section className="wedding-site-information">
          <div className="container">
            <Reveal>
              <div className="wedding-site-heading">
                <p className="wedding-site-eyebrow">IL PUNTO DI RIFERIMENTO</p>

                <h2>Tutte le informazioni importanti sempre disponibili</h2>

                <p>
                  Gli invitati non devono cercare informazioni tra messaggi,
                  partecipazioni e conversazioni diverse. Il sito diventa il
                  punto di riferimento per il vostro matrimonio.
                </p>
              </div>
            </Reveal>

            <div className="wedding-site-information-grid">
              <Reveal>
                <article>
                  <span>01</span>
                  <h3>Data</h3>
                  <p>
                    Il giorno del matrimonio sempre ben visibile e facilmente
                    consultabile.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article>
                  <span>02</span>
                  <h3>Ora</h3>
                  <p>
                    Gli invitati trovano subito gli orari necessari per
                    organizzarsi.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={160}>
                <article>
                  <span>03</span>
                  <h3>Location</h3>
                  <p>
                    Tutte le informazioni relative al luogo della cerimonia e
                    del ricevimento.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={240}>
                <article>
                  <span>04</span>
                  <h3>Google Maps</h3>
                  <p>
                    Un collegamento diretto alle indicazioni per raggiungere
                    facilmente la location.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="wedding-site-confirmation">
          <div className="container">
            <div className="wedding-site-confirmation-grid">
              <Reveal>
                <div>
                  <p className="wedding-site-eyebrow">
                    CONFERMA DI PARTECIPAZIONE
                  </p>

                  <h2>Dalla partecipazione alla risposta dell'invitato</h2>

                  <p>
                    Ogni partecipazione digitale viene associata a un codice
                    personale. L'invitato entra nel vostro sito, inserisce il
                    codice ricevuto e comunica se parteciperà oppure no.
                  </p>

                  <Link
                    to="/partecipazioni-digitali"
                    className="wedding-site-text-link"
                  >
                    Scopri le partecipazioni digitali
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="wedding-site-confirmation-demo">
                  <p>Conferma la tua partecipazione</p>

                  <span className="wedding-site-confirmation-label">
                    CODICE PERSONALE
                  </span>

                  <div className="wedding-site-confirmation-code">ND2407</div>

                  <span className="wedding-site-confirmation-button">
                    Continua
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="wedding-site-admin">
          <div className="container">
            <Reveal>
              <div className="wedding-site-heading">
                <p className="wedding-site-eyebrow">AREA RISERVATA</p>

                <h2>Il sito è per gli invitati. Il controllo rimane a voi.</h2>

                <p>
                  Gli sposi dispongono di un'area riservata dove controllare le
                  risposte ricevute e avere sempre una situazione aggiornata
                  degli invitati.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="wedding-site-admin-panel">
                <div className="wedding-site-admin-header">
                  <span>Area sposi</span>
                  <span>Partecipazioni</span>
                </div>

                <div className="wedding-site-admin-stats">
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

                <div className="wedding-site-admin-bottom">
                  <span>Lista invitati aggiornata</span>
                  <strong>Scarica PDF</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="incluso" className="wedding-site-package">
          <div className="container">
            <Reveal>
              <div className="wedding-site-heading">
                <p className="wedding-site-eyebrow">PACCHETTO BASE</p>

                <h2>Cosa comprende il servizio da 300 €</h2>

                <p>
                  Il pacchetto base contiene tutto il necessario per creare le
                  partecipazioni, raccogliere le conferme e mettere online il
                  vostro sito.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="wedding-site-package-box">
                <div className="wedding-site-package-price">
                  <div>
                    <span>Pacchetto base</span>
                    <p>Il cuore di Nozze Digitali</p>
                  </div>

                  <strong>300 €</strong>
                </div>

                <div className="wedding-site-package-grid">
                  {[
                    "Partecipazioni digitali personalizzate",
                    "Codice univoco per ogni partecipazione",
                    "Conferma o rifiuto della presenza online",
                    "Sito personalizzato del matrimonio",
                    "Data, ora, location e Google Maps",
                    "Area riservata per gli sposi",
                    "Lista invitati sempre aggiornata",
                    "Esportazione della lista in PDF",
                    "Dominio personalizzato",
                    "Personalizzazione di foto, colori, testi e font",
                  ].map((item) => (
                    <div key={item}>
                      <span>✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="wedding-site-extras">
          <div className="container">
            <Reveal>
              <div className="wedding-site-heading">
                <p className="wedding-site-eyebrow">
                  PERSONALIZZATE IL SERVIZIO
                </p>

                <h2>Aggiungete solo le sezioni che vi servono</h2>

                <p>
                  Le funzioni aggiuntive non sono obbligatorie. Potete costruire
                  il vostro sito partendo dal pacchetto base e aggiungendo solo
                  ciò che è utile per il vostro matrimonio.
                </p>
              </div>
            </Reveal>

            <div className="wedding-site-extras-grid">
              {[
                [
                  "Aggiornamenti",
                  "Pubblicate comunicazioni e novità dedicate agli invitati.",
                  "+50 €",
                ],
                [
                  "Tavoli",
                  "Gli invitati possono cercare il proprio nome e scoprire il tavolo assegnato.",
                  "+50 €",
                ],
                [
                  "Indicazioni alimentari",
                  "Raccogliete allergie, intolleranze e diete particolari tramite un questionario.",
                  "+50 €",
                ],
                [
                  "Rullino fotografico",
                  "Gli invitati caricano le foto del matrimonio e voi approvate quelle da mostrare.",
                  "+100 €",
                ],
                [
                  "Bomboniere",
                  "Una sezione personalizzata per eventuali indicazioni relative alle bomboniere.",
                  "+50 €",
                ],
              ].map(([title, description, price]) => (
                <Reveal key={title}>
                  <article className="wedding-site-extra-card">
                    <div>
                      <h3>{title}</h3>
                      <strong>{price}</strong>
                    </div>

                    <p>{description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="wedding-site-personalization">
          <div className="container">
            <div className="wedding-site-personalization-grid">
              <Reveal>
                <div>
                  <p className="wedding-site-eyebrow">UN SITO DAVVERO VOSTRO</p>

                  <h2>Non un template uguale per tutti</h2>

                  <p>
                    Il sito viene adattato allo stile del vostro matrimonio.
                    Fotografie, palette, font e testi vengono scelti insieme per
                    creare uno spazio coerente con le vostre partecipazioni.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="wedding-site-personalization-list">
                  <div>
                    <span>01</span>
                    <p>Fotografie</p>
                  </div>

                  <div>
                    <span>02</span>
                    <p>Colori</p>
                  </div>

                  <div>
                    <span>03</span>
                    <p>Font</p>
                  </div>

                  <div>
                    <span>04</span>
                    <p>Testi</p>
                  </div>

                  <div>
                    <span>05</span>
                    <p>Dominio personalizzato</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="wedding-site-example">
          <div className="container">
            <Reveal>
              <div className="wedding-site-example-box">
                <div>
                  <p className="wedding-site-eyebrow">ESEMPIO REALE</p>

                  <h2>Marta &amp; Simone</h2>

                  <p>
                    Visitate un sito reale per vedere come può presentarsi Nozze
                    Digitali agli invitati.
                  </p>
                </div>

                <a
                  href="https://martaesimone.fun/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-custom"
                >
                  Visita il sito
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="wedding-site-cta">
          <div className="container">
            <Reveal>
              <div className="wedding-site-cta-box">
                <p className="wedding-site-eyebrow">
                  IL VOSTRO SPAZIO DIGITALE
                </p>

                <h2>Creiamo il sito del vostro matrimonio</h2>

                <p>
                  Raccontateci il vostro progetto e lo stile che avete scelto.
                  Partiremo dalle vostre partecipazioni per costruire uno spazio
                  digitale coordinato e semplice da usare.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wedding-site-cta-button"
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

export default SitoMatrimonioPage;
