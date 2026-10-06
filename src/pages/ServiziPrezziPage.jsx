import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/servizi-prezzi.css";

const ServiziPrezziPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sui%20servizi%20e%20prezzi%20di%20Nozze%20Digitali.";

  const baseServices = [
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
  ];

  const extras = [
    {
      title: "Aggiornamenti",
      price: "+50 €",
      text: "Una sezione dove pubblicare comunicazioni, novità e informazioni utili per gli invitati.",
    },
    {
      title: "Tavoli",
      price: "+50 €",
      text: "Gli invitati possono cercare il proprio nome e visualizzare il tavolo assegnato.",
    },
    {
      title: "Indicazioni alimentari",
      price: "+50 €",
      text: "Un questionario dedicato per raccogliere allergie, intolleranze e diete particolari.",
    },
    {
      title: "Rullino fotografico",
      price: "+100 €",
      text: "Gli invitati possono caricare le fotografie del matrimonio e voi scegliete quali pubblicare.",
    },
    {
      title: "Bomboniere",
      price: "+50 €",
      text: "Una sezione personalizzata per comunicare eventuali informazioni o indicazioni relative alle bomboniere.",
    },
  ];

  return (
    <>
      <SeoPage
        title="Servizi e Prezzi | Nozze Digitali"
        description="Scopri il pacchetto base Nozze Digitali da 300 € e i servizi extra per il tuo matrimonio: tavoli, aggiornamenti, indicazioni alimentari, rullino fotografico e bomboniere."
        canonical="https://nozzedigitali.site/servizi-prezzi"
        breadcrumbName="Servizi e prezzi"
      />

      <main className="prices-page">
        <section className="prices-hero">
          <div className="container">
            <Reveal>
              <div className="prices-hero-content">
                <p className="prices-eyebrow">SERVIZI E PREZZI</p>

                <h1>Un pacchetto completo, con extra solo se vi servono</h1>

                <p className="prices-intro">
                  Partite dal servizio base da 300 € e personalizzate il vostro
                  sito aggiungendo soltanto le funzioni utili per il vostro
                  matrimonio.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="prices-base">
          <div className="container">
            <Reveal>
              <div className="prices-heading">
                <p className="prices-eyebrow">PACCHETTO BASE</p>

                <h2>Tutto il necessario per partire</h2>

                <p>
                  Partecipazioni digitali, conferme online, sito personalizzato
                  e gestione degli invitati in un unico servizio.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="prices-base-card">
                <div className="prices-base-top">
                  <div>
                    <span>Pacchetto base</span>
                    <p>Il cuore di Nozze Digitali</p>
                  </div>

                  <strong>300 €</strong>
                </div>

                <div className="prices-base-grid">
                  {baseServices.map((service) => (
                    <div key={service}>
                      <span>✓</span>
                      <p>{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="prices-extras">
          <div className="container">
            <Reveal>
              <div className="prices-heading">
                <p className="prices-eyebrow">SERVIZI EXTRA</p>

                <h2>Aggiungete solo ciò che vi serve</h2>

                <p>
                  Gli extra sono indipendenti tra loro e possono essere aggiunti
                  al pacchetto base in base alle vostre esigenze.
                </p>
              </div>
            </Reveal>

            <div className="prices-extras-grid">
              {extras.map((extra) => (
                <Reveal key={extra.title}>
                  <article className="prices-extra-card">
                    <div className="prices-extra-top">
                      <h3>{extra.title}</h3>
                      <strong>{extra.price}</strong>
                    </div>

                    <p>{extra.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="prices-example">
          <div className="container">
            <Reveal>
              <div className="prices-example-box">
                <div>
                  <p className="prices-eyebrow">UN ESEMPIO</p>

                  <h2>Come può essere composto il vostro servizio</h2>
                </div>

                <div className="prices-example-calculation">
                  <div>
                    <span>Pacchetto base</span>
                    <strong>300 €</strong>
                  </div>

                  <div>
                    <span>Tavoli</span>
                    <strong>+50 €</strong>
                  </div>

                  <div>
                    <span>Indicazioni alimentari</span>
                    <strong>+50 €</strong>
                  </div>

                  <div className="prices-example-total">
                    <span>Totale</span>
                    <strong>400 €</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="prices-note">
          <div className="container">
            <Reveal>
              <div className="prices-note-box">
                <p className="prices-eyebrow">PERSONALIZZAZIONE</p>

                <h2>Dominio e stile personalizzato sono già compresi</h2>

                <p>
                  Il servizio comprende il dominio personalizzato e la
                  personalizzazione delle pagine con fotografie, colori, testi e
                  font scelti insieme a voi.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="prices-cta">
          <div className="container">
            <Reveal>
              <div className="prices-cta-box">
                <p className="prices-eyebrow">COSTRUIAMO IL VOSTRO PACCHETTO</p>

                <h2>Scegliete solo ciò che serve al vostro matrimonio</h2>

                <p>
                  Raccontateci come state organizzando il vostro giorno e vi
                  aiutiamo a capire quali funzioni possono esservi davvero
                  utili.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prices-cta-button"
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

export default ServiziPrezziPage;
