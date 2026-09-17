import SeoPage from "../components/SeoPage";
import "../styles/rsvp-matrimonio.css";

const RsvpMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  return (
    <>
      <SeoPage
        title="RSVP Matrimonio Online | Conferme Invitati | Nozze Digitali"
        description="Gestisci le conferme RSVP del matrimonio online. Gli invitati possono confermare la presenza e comunicare esigenze alimentari direttamente dal sito."
        canonical="https://nozzedigitali.site/rsvp-matrimonio"
        breadcrumbName="RSVP matrimonio"
      />

      <main className="rsvp-page">
        <nav className="rsvp-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>RSVP matrimonio</span>
          </div>
        </nav>

        <section className="rsvp-hero">
          <div className="container">
            <p className="rsvp-eyebrow">RSVP MATRIMONIO ONLINE</p>

            <h1>
              Gestite le conferme degli invitati in modo semplice e organizzato
            </h1>

            <p className="rsvp-intro">
              Con Nozze Digitali gli invitati possono confermare la propria
              partecipazione direttamente online, mentre voi avete tutte le
              risposte raccolte in un unico spazio.
            </p>
          </div>
        </section>

        <section className="rsvp-section">
          <div className="container rsvp-content">
            <h2>Meno messaggi, più chiarezza</h2>

            <p>
              Gestire le conferme del matrimonio via chat, telefonate e fogli
              sparsi può diventare complicato. Con un sistema RSVP online ogni
              invitato risponde direttamente dal sito e le informazioni restano
              organizzate.
            </p>

            <div className="rsvp-grid">
              <article className="rsvp-card">
                <h3>Conferma presenza</h3>
                <p>
                  Ogni invitato può indicare in modo semplice se parteciperà al
                  matrimonio.
                </p>
              </article>

              <article className="rsvp-card">
                <h3>Risposte centralizzate</h3>
                <p>
                  Tutte le conferme vengono raccolte in un unico spazio,
                  evitando messaggi dispersi.
                </p>

                <a
                  href="/gestione-invitati-matrimonio"
                  className="rsvp-related-link"
                >
                  Scopri come organizzare gli invitati
                </a>
              </article>

              <article className="rsvp-card">
                <h3>Esigenze alimentari</h3>
                <p>
                  Allergie, intolleranze o necessità particolari possono essere
                  comunicate direttamente dagli invitati.
                </p>
              </article>

              <article className="rsvp-card">
                <h3>Gestione per persona</h3>
                <p>
                  Le conferme possono essere gestite anche per singolo invitato
                  all&apos;interno dello stesso nucleo.
                </p>
              </article>

              <article className="rsvp-card">
                <h3>Aggiornamenti più semplici</h3>
                <p>
                  Avete sempre una situazione chiara delle presenze senza dover
                  ricostruire le risposte manualmente.
                </p>
              </article>

              <article className="rsvp-card">
                <h3>Integrato nel sito matrimonio</h3>
                <p>
                  RSVP, partecipazioni digitali e informazioni dell&apos;evento
                  convivono nello stesso spazio.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="rsvp-how">
          <div className="container rsvp-how-content">
            <p className="rsvp-eyebrow">COME FUNZIONA</p>

            <h2>Dall&apos;invito alla conferma in pochi passaggi</h2>

            <div className="rsvp-steps">
              <article>
                <span>01</span>
                <h3>L&apos;invitato accede</h3>
                <p>
                  Riceve il collegamento alla partecipazione digitale e apre il
                  sito del matrimonio.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Conferma la presenza</h3>
                <p>
                  Indica chi parteciperà e comunica eventuali informazioni
                  richieste dagli sposi.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Voi gestite tutto</h3>
                <p>
                  Le risposte vengono raccolte e organizzate in modo semplice
                  nell&apos;area dedicata.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="rsvp-info">
          <div className="container rsvp-info-content">
            <p className="rsvp-eyebrow">COSA RACCOGLIERE</p>

            <h2>Quali informazioni chiedere con un RSVP matrimonio online?</h2>

            <p className="rsvp-info-intro">
              Un RSVP online può raccogliere in modo ordinato tutte le
              informazioni necessarie per organizzare il matrimonio, evitando di
              doverle recuperare successivamente attraverso messaggi e
              telefonate.
            </p>

            <div className="rsvp-info-grid">
              <article>
                <h3>Conferma della presenza</h3>

                <p>
                  Ogni invitato può indicare se parteciperà oppure no al
                  matrimonio.
                </p>
              </article>

              <article>
                <h3>Persone partecipanti</h3>

                <p>
                  Quando l&apos;invito comprende più persone, potete sapere
                  esattamente chi sarà presente.
                </p>
              </article>

              <article>
                <h3>Allergie e intolleranze</h3>

                <p>
                  Gli invitati possono comunicare eventuali allergie,
                  intolleranze o esigenze alimentari.
                </p>
              </article>

              <article>
                <h3>Esigenze particolari</h3>

                <p>
                  Potete raccogliere altre informazioni utili per organizzare al
                  meglio l&apos;accoglienza degli ospiti.
                </p>
              </article>
            </div>

            <div className="rsvp-info-link">
              <a href="/gestione-invitati-matrimonio">
                Scopri come organizzare tutte le informazioni degli invitati
              </a>
            </div>
          </div>
        </section>

        <section className="rsvp-related">
          <div className="container rsvp-related-content">
            <h2>RSVP e partecipazioni digitali lavorano insieme</h2>

            <p>
              La conferma online diventa ancora più utile quando è integrata
              direttamente nella partecipazione digitale del matrimonio.
            </p>

            <a href="/partecipazioni-digitali" className="rsvp-related-link">
              Scopri le partecipazioni digitali
            </a>
          </div>
        </section>

        <section className="rsvp-cta">
          <div className="container">
            <div className="rsvp-cta-box">
              <p className="rsvp-eyebrow">CONFERME SENZA STRESS</p>

              <h2>Volete gestire gli RSVP direttamente dal vostro sito?</h2>

              <p>
                Raccontateci come state organizzando il matrimonio e scopriamo
                insieme la soluzione più adatta.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rsvp-cta-button"
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

export default RsvpMatrimonioPage;
