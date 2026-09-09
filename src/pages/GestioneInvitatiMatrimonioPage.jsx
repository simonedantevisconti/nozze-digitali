import SeoPage from "../components/SeoPage";
import "../styles/gestione-invitati-matrimonio.css";

const GestioneInvitatiMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  return (
    <>
      <SeoPage
        title="Gestione Invitati Matrimonio | Nozze Digitali"
        description="Gestisci invitati, conferme, esigenze alimentari, tavoli e informazioni del matrimonio in un unico spazio digitale organizzato."
        canonical="https://nozzedigitali.site/gestione-invitati-matrimonio"
        breadcrumbName="Gestione invitati matrimonio"
      />

      <main className="guests-page">
        <nav className="guests-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Gestione invitati matrimonio</span>
          </div>
        </nav>

        <section className="guests-hero">
          <div className="container">
            <p className="guests-eyebrow">GESTIONE INVITATI MATRIMONIO</p>

            <h1>
              Tutti gli invitati del vostro matrimonio, organizzati in un unico
              spazio
            </h1>

            <p className="guests-intro">
              Conferme, esigenze alimentari, tavoli e informazioni utili: Nozze
              Digitali vi aiuta a mantenere tutto ordinato senza rincorrere
              messaggi, fogli e conversazioni sparse.
            </p>
          </div>
        </section>

        <section className="guests-section">
          <div className="container guests-content">
            <h2>Più ordine durante tutta l&apos;organizzazione</h2>

            <p>
              Gestire gli invitati significa raccogliere molte informazioni
              diverse. Un unico spazio digitale permette di avere una visione
              più chiara e aggiornata della situazione.
            </p>

            <div className="guests-grid">
              <article className="guests-card">
                <h3>Conferme di partecipazione</h3>
                <p>
                  Sapete chi parteciperà senza dover ricostruire le risposte da
                  chat, telefonate ed email.
                </p>

                <a href="/rsvp-matrimonio" className="guests-card-link">
                  Scopri l&apos;RSVP matrimonio
                </a>
              </article>

              <article className="guests-card">
                <h3>Esigenze alimentari</h3>
                <p>
                  Allergie, intolleranze e necessità particolari possono essere
                  raccolte direttamente dagli invitati.
                </p>
              </article>

              <article className="guests-card">
                <h3>Gestione dei nuclei</h3>
                <p>
                  Organizzate in modo chiaro le persone associate allo stesso
                  invito e le relative conferme.
                </p>
              </article>

              <article className="guests-card">
                <h3>Organizzazione dei tavoli</h3>
                <p>
                  Le informazioni raccolte aiutano a gestire con maggiore
                  semplicità la disposizione degli invitati.
                </p>
              </article>

              <article className="guests-card">
                <h3>Informazioni centralizzate</h3>
                <p>
                  Tutto ciò che riguarda gli ospiti rimane nello stesso spazio,
                  più facile da consultare e aggiornare.
                </p>
              </article>

              <article className="guests-card">
                <h3>Integrato nel sito matrimonio</h3>
                <p>
                  Gestione invitati, partecipazioni digitali e RSVP fanno parte
                  dello stesso ecosistema.
                </p>

                <a href="/sito-matrimonio" className="guests-card-link">
                  Scopri il sito matrimonio
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="guests-how">
          <div className="container guests-how-content">
            <p className="guests-eyebrow">COME FUNZIONA</p>

            <h2>Dalla lista invitati all&apos;organizzazione finale</h2>

            <div className="guests-steps">
              <article>
                <span>01</span>
                <h3>Organizzate gli invitati</h3>
                <p>
                  Ogni invito viene associato alle persone coinvolte nel
                  matrimonio.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Raccogliete le risposte</h3>
                <p>
                  Conferme ed esigenze vengono comunicate direttamente online.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Avete tutto sotto controllo</h3>
                <p>
                  Le informazioni raccolte diventano più semplici da consultare
                  e utilizzare durante l&apos;organizzazione.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="guests-cta">
          <div className="container">
            <div className="guests-cta-box">
              <p className="guests-eyebrow">INVITATI SENZA CONFUSIONE</p>

              <h2>Volete semplificare la gestione del vostro matrimonio?</h2>

              <p>
                Raccontateci come state organizzando il vostro giorno e
                scopriamo insieme come Nozze Digitali può aiutarvi.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="guests-cta-button"
              >
                Richiedi preventivo
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GestioneInvitatiMatrimonioPage;
