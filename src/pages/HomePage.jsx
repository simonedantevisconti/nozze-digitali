import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import "../styles/home.css";

const HomePage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali.";

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="home-hero-content">
                <p className="home-eyebrow">NOZZE DIGITALI</p>

                <h1>Le vostre partecipazioni, finalmente digitali.</h1>

                <p className="home-hero-text">
                  Partecipazioni personalizzate e un sito dedicato al vostro
                  matrimonio, per condividere le informazioni importanti e
                  raccogliere le conferme degli invitati in modo semplice.
                </p>

                <div className="home-hero-actions">
                  <Link
                    to="/partecipazioni-digitali"
                    className="btn btn-primary-custom"
                  >
                    Scopri le partecipazioni
                  </Link>

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
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-card hero-card-confirm">
                  <span>✓</span>
                  Confermato
                </div>

                <div className="hero-card hero-card-tables">
                  <span>#</span>
                  Codice personale
                </div>

                <div className="hero-device">
                  <div className="hero-device-top">
                    <span></span>
                  </div>

                  <div className="hero-device-content">
                    <p className="hero-device-eyebrow">
                      PARTECIPAZIONE DIGITALE
                    </p>

                    <h2>Marta &amp; Simone</h2>
                    <p>12 settembre 2027 · ore 15:30</p>

                    <div className="hero-device-line"></div>

                    <div className="hero-device-code">
                      <small>IL TUO CODICE</small>
                      <strong>MS2407</strong>
                    </div>

                    <div className="hero-device-actions">
                      <span>Conferma partecipazione</span>
                      <span>Informazioni sul matrimonio</span>
                    </div>
                  </div>
                </div>

                <div className="hero-card hero-card-food">
                  <span>87</span>
                  Partecipanti
                </div>

                <div className="hero-card hero-card-photos">
                  <span>WEB</span>
                  Sito personalizzato
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-video-section">
        <div className="container">
          <Reveal>
            <div className="home-video-heading">
              <p className="home-section-eyebrow">COME FUNZIONA</p>

              <h2>Scoprite Nozze Digitali in pochi minuti</h2>

              <p>
                Nel video trovate una panoramica semplice del servizio, dalle
                partecipazioni digitali al sito del matrimonio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="home-video-wrapper">
              <div className="ratio ratio-16x9">
                {videoLoaded ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/xpvonnf1ALY?autoplay=1"
                    title="Scopri Nozze Digitali"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <button
                    type="button"
                    className="home-video-placeholder"
                    onClick={() => setVideoLoaded(true)}
                    aria-label="Riproduci il video di presentazione di Nozze Digitali"
                  >
                    <span className="home-video-play" aria-hidden="true">
                      ▶
                    </span>

                    <span className="home-video-placeholder-text">
                      Guarda come funziona Nozze Digitali
                    </span>
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
