import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/servizi-prezzi.css";

const ServiziPrezziPage = () => {

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
      description:
        "Una sezione dedicata alle comunicazioni del matrimonio, utile per pubblicare novità, promemoria o informazioni importanti per gli invitati.",
      includes: [
        "Pubblicazione di aggiornamenti e comunicazioni",
        "Titolo, testo e immagine per ogni aggiornamento",
        "Possibilità di aggiungere un pulsante con link",
        "Gestione degli aggiornamenti dall'area admin",
      ],
    },
    {
      title: "Tavoli",
      price: "+50 €",
      description:
        "Una funzione pensata per il giorno del matrimonio: ogni invitato può cercare il proprio nome e scoprire subito il tavolo assegnato.",
      includes: [
        "Ricerca dell'invitato per nome",
        "Visualizzazione immediata del tavolo assegnato",
        "Gestione dei tavoli dall'area admin",
        "Aggiornamento semplice delle assegnazioni",
      ],
    },
    {
      title: "Indicazioni alimentari",
      price: "+50 €",
      description:
        "Un questionario dedicato per raccogliere in modo ordinato allergie, intolleranze, esigenze alimentari e diete particolari.",
      includes: [
        "Modulo dedicato agli invitati",
        "Raccolta di allergie e intolleranze",
        "Gestione di diete e richieste particolari",
        "Consultazione delle risposte dall'area admin",
      ],
    },
    {
      title: "Rullino fotografico",
      price: "+100 €",
      description:
        "Uno spazio condiviso dove gli invitati possono caricare le fotografie scattate durante il matrimonio, creando un album digitale della giornata.",
      includes: [
        "Caricamento delle foto da parte degli invitati",
        "Galleria dedicata alle immagini del matrimonio",
        "Gestione e moderazione delle foto dall'area admin",
        "Possibilità di scegliere quali immagini rendere visibili",
      ],
    },
    {
      title: "Bomboniere",
      price: "+50 €",
      description:
        "Una sezione personalizzata per gestire comunicazioni o richieste legate alle bomboniere in base alle esigenze specifiche del matrimonio.",
      includes: [
        "Pagina dedicata e personalizzabile",
        "Testi e indicazioni definiti insieme agli sposi",
        "Eventuali scelte o richieste da parte degli invitati",
        "Raccolta delle informazioni nell'area admin",
      ],
    },
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
              {extras.map((extra) => (
                <Reveal key={extra.title}>
                  <article className="prices-extra-card">
                    <div className="prices-extra-top">
                      <h3>{extra.title}</h3>
                      <strong>{extra.price}</strong>
                    </div>

                    <p className="prices-extra-description">
                      {extra.description}
                    </p>

                    <ul className="prices-extra-list">
                      {extra.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
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
