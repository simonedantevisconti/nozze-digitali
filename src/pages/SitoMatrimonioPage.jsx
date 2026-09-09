import SeoPage from "../components/SeoPage";
import "../styles/sito-matrimonio.css";

const SitoMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  return (
    <>
      <SeoPage
        title="Sito Web per Matrimonio Personalizzato | Nozze Digitali"
        description="Crea un sito web personalizzato per il tuo matrimonio con RSVP, partecipazioni digitali, gestione invitati, tavoli, foto e informazioni utili."
        canonical="https://nozzedigitali.site/sito-matrimonio"
        breadcrumbName="Sito matrimonio"
      />

      <main className="wedding-site-page">
        <nav className="wedding-site-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <a href="/">Home</a>

            <span aria-hidden="true">/</span>

            <span>Sito matrimonio</span>
          </div>
        </nav>

        <section className="wedding-site-hero">
          <div className="container">
            <p className="wedding-site-eyebrow">SITO WEB PER MATRIMONIO</p>

            <h1>Un sito web personalizzato per il vostro matrimonio</h1>

            <p className="wedding-site-intro">
              Nozze Digitali raccoglie in un unico spazio tutte le informazioni
              importanti del vostro matrimonio, rendendo più semplice la
              gestione degli invitati e l&apos;organizzazione del grande giorno.
            </p>
          </div>
        </section>

        <section className="wedding-site-section">
          <div className="container wedding-site-content">
            <h2>Tutto ciò che serve, in un unico sito</h2>

            <p>
              Un sito web per matrimonio permette agli invitati di trovare
              facilmente tutte le informazioni utili, confermare la propria
              partecipazione e interagire con gli sposi attraverso uno spazio
              digitale creato appositamente per l&apos;evento.
            </p>

            <div className="wedding-site-grid">
              <article className="wedding-site-card">
                <h3>Partecipazioni digitali</h3>

                <p>
                  Condividete il vostro invito in modo semplice e moderno,
                  mantenendo tutte le informazioni del matrimonio sempre
                  disponibili.
                </p>

                <a
                  href="/partecipazioni-digitali"
                  className="wedding-site-card-link"
                >
                  Scopri le partecipazioni digitali
                </a>
              </article>

              <article className="wedding-site-card">
                <h3>Conferme RSVP</h3>

                <p>
                  Gli invitati possono confermare la propria presenza
                  direttamente dal sito, rendendo più semplice la gestione delle
                  partecipazioni.
                </p>
                <a href="/rsvp-matrimonio" className="wedding-site-card-link">
                  Scopri l&apos;RSVP matrimonio
                </a>
              </article>

              <article className="wedding-site-card">
                <h3>Gestione degli invitati</h3>

                <p>
                  Tenete sotto controllo conferme, esigenze alimentari e altre
                  informazioni utili attraverso un&apos;unica area organizzata.
                </p>

                <a
                  href="/gestione-invitati-matrimonio"
                  className="wedding-site-card-link"
                >
                  Scopri come gestire gli invitati
                </a>
              </article>

              <article className="wedding-site-card">
                <h3>Tavoli e informazioni</h3>

                <p>
                  Condividete disposizione dei tavoli, location, orari,
                  aggiornamenti e indicazioni importanti per il giorno delle
                  nozze.
                </p>
              </article>

              <article className="wedding-site-card">
                <h3>Foto del matrimonio</h3>

                <p>
                  Create uno spazio dove raccogliere e condividere i ricordi del
                  matrimonio insieme ai vostri invitati.
                </p>
              </article>

              <article className="wedding-site-card">
                <h3>Un sito davvero vostro</h3>

                <p>
                  Ogni matrimonio è diverso: il sito può essere personalizzato
                  nello stile e nei contenuti per rappresentare al meglio la
                  coppia.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="wedding-site-cta">
          <div className="container">
            <div className="wedding-site-cta-box">
              <p className="wedding-site-eyebrow">IL VOSTRO SPAZIO DIGITALE</p>

              <h2>Pronti a creare il sito del vostro matrimonio?</h2>

              <p>
                Raccontateci come immaginate il vostro giorno e costruiamo
                insieme uno spazio digitale semplice, elegante e personalizzato.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="wedding-site-cta-button"
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

export default SitoMatrimonioPage;
