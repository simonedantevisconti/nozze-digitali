import SeoPage from "../components/SeoPage";
import Reveal from "../components/Reveal";

import "../styles/sito-matrimonio.css";

const SitoMatrimonioPage = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20sul%20sito%20per%20il%20mio%20matrimonio.";

  const extras = [
    [
      "Aggiornamenti",
      "Pubblicate comunicazioni e novità dedicate agli invitati.",
    ],
    [
      "Tavoli",
      "Gli invitati possono cercare il proprio nome e scoprire il tavolo assegnato.",
    ],
    [
      "Indicazioni alimentari",
      "Raccogliete allergie, intolleranze e diete particolari tramite un questionario.",
    ],
    [
      "Rullino fotografico",
      "Gli invitati possono caricare le fotografie del matrimonio in uno spazio dedicato.",
    ],
    [
      "Bomboniere",
      "Una sezione personalizzata per eventuali indicazioni relative alle bomboniere.",
    ],
  ];

  return (
    <>
      <SeoPage
        title="Sito Web per Matrimonio Personalizzato | Nozze Digitali"
        description="Un sito personalizzato per il matrimonio con informazioni su data, location, Google Maps, conferme online e servizi aggiuntivi."
        canonical="https://nozzedigitali.site/sito-matrimonio"
        breadcrumbName="Sito matrimonio"
      />

      <main className="wedding-site-page">
        <section className="wedding-site-hero">
          <div className="container">
            <Reveal>
              <div className="wedding-site-hero-content">
                <p className="wedding-site-eyebrow">SITO MATRIMONIO</p>

                <h1>Tutto il vostro matrimonio in un unico spazio digitale</h1>

                <p className="wedding-site-intro">
                  Creiamo un sito personalizzato dove gli invitati trovano le
                  informazioni importanti e possono accedere alle funzioni che
                  avete scelto per il vostro matrimonio.
                </p>

                <div className="wedding-site-hero-actions">
                  <a href="#il-vostro-sito" className="btn btn-primary-custom">
                    Scopri il sito
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

        <section id="il-vostro-sito" className="wedding-site-information">
          <div className="container">
            <Reveal>
              <div className="wedding-site-heading">
                <p className="wedding-site-eyebrow">IL VOSTRO SITO</p>

                <h2>Le informazioni del matrimonio in un unico posto</h2>

                <p>
                  Oltre alla conferma di partecipazione, gli invitati trovano
                  una homepage personalizzata con tutto ciò che serve per
                  raggiungervi e vivere il vostro grande giorno.
                </p>
              </div>
            </Reveal>

            <div className="wedding-site-information-grid">
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
              ].map(([title, text], index) => (
                <Reveal key={title} delay={index * 70}>
                  <article>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="wedding-site-extras">
          <div className="container">
            <Reveal>
              <div className="wedding-site-heading">
                <p className="wedding-site-eyebrow">AGGIUNTE POSSIBILI</p>

                <h2>Il sito può crescere in base alle vostre esigenze</h2>

                <p>
                  Le funzioni aggiuntive sono facoltative e possono essere
                  inserite solo se utili per il vostro matrimonio.
                </p>
              </div>
            </Reveal>

            <div className="wedding-site-extras-grid">
              {extras.map(([title, description], index) => (
                <Reveal key={title} delay={index * 60}>
                  <article className="wedding-site-extra-card">
                    <div>
                      <h3>{title}</h3>
                    </div>
                    <p>{description}</p>
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

export default SitoMatrimonioPage;
