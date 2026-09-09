import "../styles/home.css";
import Reveal from "../components/Reveal";

const HomePage = () => {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="home-hero-content">
                <p className="home-eyebrow">NOZZE DIGITALI</p>

                <h1>
                  Il sito web per il vostro matrimonio, tutto in un unico spazio
                  digitale
                </h1>

                <p className="home-hero-text">
                  Un unico spazio digitale personalizzato, dove creare le
                  partecipazioni, gestire le conferme, organizzare i tavoli e
                  molto altro ancora.
                </p>

                <div className="home-hero-actions">
                  <a href="#come-funziona" className="btn btn-primary-custom">
                    Scopri come funziona
                  </a>

                  <a
                    href="https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-custom"
                  >
                    Richiedi informazioni
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-card hero-card-confirm">
                  <span>✓</span>
                  Conferme
                </div>

                <div className="hero-card hero-card-tables">
                  <span>♡</span>
                  Tavoli
                </div>

                <div className="hero-device">
                  <div className="hero-device-top">
                    <span></span>
                  </div>

                  <div className="hero-device-content">
                    <p className="hero-device-eyebrow">IL NOSTRO MATRIMONIO</p>

                    <h2>Sposa &amp; Sposo</h2>

                    <p>Il nostro giorno speciale</p>

                    <div className="hero-device-line"></div>

                    <div className="hero-device-actions">
                      <span>Conferma partecipazione</span>
                      <span>Informazioni</span>
                    </div>
                  </div>
                </div>

                <div className="hero-card hero-card-food">
                  <span>✦</span>
                  Foto
                </div>

                <div className="hero-card hero-card-photos">
                  <span>◌</span>
                  Esigenze alimentari
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro-section">
        <div className="container">
          <div className="home-intro-content">
            <h2>Un sito web personalizzato per il vostro matrimonio</h2>

            <p>
              Nozze Digitali vi permette di raccogliere tutto ciò che riguarda
              il vostro matrimonio in un unico sito web personalizzato. Gli
              invitati possono consultare le informazioni dell'evento,
              confermare la propria partecipazione, comunicare allergie o
              esigenze alimentari e condividere fotografie, mentre voi potete
              gestire tutto da un'area riservata.
            </p>
          </div>
        </div>
      </section>

      <section id="come-funziona" className="home-video-section">
        <div className="container">
          <Reveal>
            <div className="home-video-heading">
              <p className="home-section-eyebrow">SCOPRI COME FUNZIONA</p>

              <h2>Tutto il matrimonio, in un unico spazio</h2>

              <p>
                Guarda una panoramica di Nozze Digitali e scopri quanto è
                semplice organizzare il vostro matrimonio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="home-video-wrapper">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/xpvonnf1ALY"
                  title="Scopri Nozze Digitali"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-benefits-section">
        <div className="container">
          <Reveal>
            <div className="home-benefits-heading">
              <p className="home-section-eyebrow">TUTTO SOTTO CONTROLLO</p>

              <h2>Più ordine per voi, più semplicità per i vostri invitati</h2>

              <p>
                Nozze Digitali raccoglie in un unico spazio tutto ciò che serve
                per il vostro grande giorno, dall'organizzazione dei tavoli alle
                esigenze alimentari dei vostri ospiti.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">✓</div>

                  <h3>Conferme di partecipazione</h3>

                  <p>
                    Gli invitati possono confermare la propria presenza
                    direttamente online, in modo semplice e veloce.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">♡</div>

                  <h3>Tavoli</h3>

                  <p>
                    Organizzate i tavoli e permettete agli invitati di trovare
                    facilmente il proprio posto.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">✉</div>

                  <h3>Partecipazioni digitali</h3>

                  <p>
                    Create partecipazioni personalizzate da condividere con i
                    vostri invitati in modo pratico ed elegante.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">✦</div>

                  <h3>Esigenze alimentari</h3>

                  <p>
                    Raccogliete allergie, intolleranze e preferenze alimentari
                    senza perdere informazioni importanti.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">•</div>

                  <h3>Aggiornamenti</h3>

                  <p>
                    Comunicate facilmente variazioni, novità e informazioni
                    utili a tutti gli invitati.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">⌖</div>

                  <h3>Informazioni utili</h3>

                  <p>
                    Luogo, orari, indicazioni e dettagli del matrimonio sempre
                    disponibili in un unico posto.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">◌</div>

                  <h3>Rullino fotografico</h3>

                  <p>
                    Raccogliete in un unico spazio le fotografie condivise dagli
                    invitati durante il matrimonio.
                  </p>
                </article>
              </div>

              <div className="col-md-6 col-lg-3">
                <article className="benefit-card h-100">
                  <div className="benefit-icon">◎</div>

                  <h3>Area sposi</h3>

                  <p>
                    Gestite contenuti, invitati e personalizzazioni attraverso
                    un'area riservata semplice da utilizzare.
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
