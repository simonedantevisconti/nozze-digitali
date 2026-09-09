import { useEffect } from "react";
import "../styles/sito-matrimonio.css";

const SitoMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  useEffect(() => {
    document.title = "Sito Web per Matrimonio Personalizzato | Nozze Digitali";

    const description =
      "Crea un sito web personalizzato per il tuo matrimonio con RSVP, partecipazioni digitali, gestione invitati, tavoli, foto e informazioni utili.";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://nozzedigitali.site/sito-matrimonio",
    );

    return () => {
      document.title =
        "Nozze Digitali | Sito Web per Matrimonio e Partecipazioni Digitali";

      metaDescription?.setAttribute(
        "content",
        "Crea il sito web del tuo matrimonio con partecipazioni digitali, conferme RSVP, gestione invitati, tavoli, foto, esigenze alimentari e tutte le informazioni del grande giorno.",
      );

      canonical?.setAttribute("href", "https://nozzedigitali.site/");
    };
  }, []);

  return (
    <main className="wedding-site-page">
      <section className="wedding-site-hero">
        <div className="container">
          <p className="wedding-site-eyebrow">SITO WEB PER MATRIMONIO</p>

          <h1>Un sito web personalizzato per il vostro matrimonio</h1>

          <p className="wedding-site-intro">
            Nozze Digitali raccoglie in un unico spazio tutte le informazioni
            importanti del vostro matrimonio, rendendo più semplice la gestione
            degli invitati e l'organizzazione del grande giorno.
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
            digitale creato appositamente per l'evento.
          </p>

          <div className="wedding-site-grid">
            <article className="wedding-site-card">
              <h3>Partecipazioni digitali</h3>
              <p>
                Condividete il vostro invito in modo semplice e moderno,
                mantenendo tutte le informazioni del matrimonio sempre
                disponibili.
              </p>
            </article>

            <article className="wedding-site-card">
              <h3>Conferme RSVP</h3>
              <p>
                Gli invitati possono confermare la propria presenza direttamente
                dal sito, rendendo più semplice la gestione delle
                partecipazioni.
              </p>
            </article>

            <article className="wedding-site-card">
              <h3>Gestione degli invitati</h3>
              <p>
                Tenete sotto controllo conferme, esigenze alimentari e altre
                informazioni utili attraverso un'unica area organizzata.
              </p>
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
              Raccontateci come immaginate il vostro giorno e costruiamo insieme
              uno spazio digitale semplice, elegante e personalizzato.
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
  );
};

export default SitoMatrimonioPage;
