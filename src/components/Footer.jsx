import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <Link to="/" className="footer-brand">
              Nozze Digitali
            </Link>

            <p className="footer-description">
              Siti web personalizzati per matrimoni con partecipazioni digitali,
              RSVP, gestione invitati, tavoli, foto e informazioni utili.
            </p>
          </div>

          <div className="footer-column">
            <h2>Servizi</h2>

            <nav aria-label="Servizi">
              <Link to="/sito-matrimonio">Sito matrimonio</Link>

              <Link to="/partecipazioni-digitali">Partecipazioni digitali</Link>

              <Link to="/rsvp-matrimonio">RSVP matrimonio</Link>

              <Link to="/gestione-invitati-matrimonio">Gestione invitati</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h2>Contatti</h2>

            <nav aria-label="Contatti">
              <a href="/#come-funziona" className="footer-anchor-link">
                Come funziona
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Richiedi preventivo
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Nozze Digitali. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
