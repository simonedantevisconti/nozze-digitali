import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali.";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <Link to="/" className="footer-brand">
              Nozze Digitali
            </Link>

            <p className="footer-description">
              Partecipazioni digitali personalizzate, sito del matrimonio e
              gestione delle conferme in un unico spazio semplice da utilizzare.
            </p>
          </div>

          <div className="footer-column">
            <h2>Scopri</h2>

            <nav aria-label="Pagine principali">
              <Link to="/">Home</Link>

              <Link to="/partecipazioni-digitali">Partecipazioni digitali</Link>

              <Link to="/sito-matrimonio">Sito matrimonio</Link>

              <Link to="/servizi-prezzi">Servizi e prezzi</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h2>Organizzazione</h2>

            <nav aria-label="Gestione matrimonio">
              <Link to="/rsvp-matrimonio">Conferme invitati</Link>

              <Link to="/gestione-invitati-matrimonio">Gestione invitati</Link>

              <a
                href="https://martaesimone.fun/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sito di esempio
              </a>
            </nav>
          </div>

          <div className="footer-column">
            <h2>Contatti</h2>

            <nav aria-label="Contatti">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>

              <a
                href="https://calendly.com/simone-visconti4/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prenota una chiamata
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
