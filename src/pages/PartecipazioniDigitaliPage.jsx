import SeoPage from "../components/SeoPage";
import "../styles/partecipazioni-digitali.css";

const PartecipazioniDigitaliPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  return (
    <>
      <SeoPage
        title="Partecipazioni Digitali per Matrimonio | Nozze Digitali"
        description="Crea partecipazioni digitali per il tuo matrimonio e raccogli in un unico sito invito, informazioni, RSVP, esigenze alimentari e aggiornamenti per gli invitati."
        canonical="https://nozzedigitali.site/partecipazioni-digitali"
        breadcrumbName="Partecipazioni digitali"
      />

      <main className="digital-invitations-page">
        <nav className="digital-invitations-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Partecipazioni digitali</span>
          </div>
        </nav>

        <section className="digital-invitations-hero">
          <div className="container">
            <p className="digital-invitations-eyebrow">
              PARTECIPAZIONI DIGITALI
            </p>

            <h1>
              Partecipazioni digitali per un matrimonio semplice e moderno
            </h1>

            <p className="digital-invitations-intro">
              Un invito digitale elegante e personalizzato che permette ai
              vostri ospiti di accedere facilmente a tutte le informazioni del
              matrimonio e confermare la propria partecipazione.
            </p>
          </div>
        </section>

        <section className="digital-invitations-section">
          <div className="container digital-invitations-content">
            <h2>Molto più di un semplice invito</h2>

            <p>
              Le partecipazioni digitali permettono di condividere il vostro
              matrimonio in modo pratico e immediato. Gli invitati possono
              consultare tutte le informazioni aggiornate attraverso uno spazio
              creato appositamente per il vostro evento.
            </p>

            <div className="digital-invitations-grid">
              <article className="digital-invitations-card">
                <h3>Invito personalizzato</h3>

                <p>
                  Colori, testi e stile possono essere personalizzati per
                  rispecchiare l&apos;identità del vostro matrimonio.
                </p>
              </article>

              <article className="digital-invitations-card">
                <h3>Accesso semplice</h3>

                <p>
                  Gli invitati possono raggiungere il vostro spazio digitale
                  direttamente da smartphone, tablet o computer.
                </p>
              </article>

              <article className="digital-invitations-card">
                <h3>Conferme RSVP</h3>

                <p>
                  La partecipazione può essere confermata direttamente online,
                  semplificando la gestione degli invitati.
                </p>
              </article>

              <article className="digital-invitations-card">
                <h3>Informazioni sempre aggiornate</h3>

                <p>
                  Location, orari, indicazioni e aggiornamenti rimangono sempre
                  disponibili in un unico posto.
                </p>
              </article>

              <article className="digital-invitations-card">
                <h3>Esigenze alimentari</h3>

                <p>
                  Gli ospiti possono comunicare allergie, intolleranze o altre
                  esigenze direttamente attraverso il sito.
                </p>
              </article>

              <article className="digital-invitations-card">
                <h3>Meno carta, più semplicità</h3>

                <p>
                  Un&apos;alternativa pratica alla partecipazione tradizionale,
                  senza rinunciare alla cura e all&apos;eleganza
                  dell&apos;invito.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="digital-invitations-how">
          <div className="container digital-invitations-how-content">
            <p className="digital-invitations-eyebrow">COME FUNZIONA</p>

            <h2>Dal vostro invito alla conferma degli invitati</h2>

            <div className="digital-invitations-steps">
              <article>
                <span>01</span>
                <h3>Personalizziamo</h3>
                <p>
                  Creiamo uno spazio digitale in linea con lo stile del vostro
                  matrimonio.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Condividete</h3>
                <p>
                  Inviate il collegamento della partecipazione ai vostri
                  invitati.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Ricevete le conferme</h3>
                <p>
                  Gli invitati rispondono online e voi potete gestire tutto in
                  modo organizzato.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="digital-invitations-cta">
          <div className="container">
            <div className="digital-invitations-cta-box">
              <p className="digital-invitations-eyebrow">
                IL VOSTRO INVITO DIGITALE
              </p>

              <h2>
                Volete creare una partecipazione digitale per il vostro
                matrimonio?
              </h2>

              <p>
                Raccontateci il vostro progetto e scopriamo insieme come creare
                uno spazio personalizzato per voi e i vostri invitati.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="digital-invitations-cta-button"
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

export default PartecipazioniDigitaliPage;
