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
    ["Aggiornamenti", "+50 €"],
    ["Tavoli", "+50 €"],
    ["Indicazioni alimentari", "+50 €"],
    ["Rullino fotografico", "+100 €"],
    ["Bomboniere", "+50 €"],
  ];

  return (
    <>
      <SeoPage
        title="Prezzi | Nozze Digitali"
        description="Scopri i prezzi di Nozze Digitali: pacchetto base da 300 € e servizi aggiuntivi per personalizzare il sito del matrimonio."
        canonical="https://nozzedigitali.site/servizi-prezzi"
        breadcrumbName="Prezzi"
      />

      <main className="prices-page">
        <section className="prices-hero">
          <div className="container">
            <Reveal>
              <div className="prices-hero-content">
                <p className="prices-eyebrow">PREZZI</p>
                <h1>Un prezzo chiaro, con extra solo se vi servono</h1>
                <p className="prices-intro">
                  Partite dal pacchetto base e aggiungete soltanto le funzioni
                  che volete utilizzare.
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
                <h2>Partecipazioni e sito matrimonio</h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="prices-base-card">
                <div className="prices-base-top">
                  <div>
                    <span>Pacchetto base</span>
                    <p>Tutto il necessario per partire</p>
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
              </div>
            </Reveal>

            <div className="prices-extras-grid">
              {extras.map(([title, price]) => (
                <Reveal key={title}>
                  <article className="prices-extra-card">
                    <div className="prices-extra-top">
                      <h3>{title}</h3>
                      <strong>{price}</strong>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiziPrezziPage;
