import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header-logo" aria-label="Nozze Digitali">
            <img
              src="/logo-nozze.webp"
              alt="Logo Nozze Digitali"
              width="52"
              height="52"
            />
          </Link>

          <Link to="/" className="header-brand">
            Nozze Digitali
          </Link>

          <nav className="header-nav" aria-label="Navigazione principale">
            <Link to="/sito-matrimonio">Sito matrimonio</Link>
            <Link to="/partecipazioni-digitali">Partecipazioni digitali</Link>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn header-cta"
          >
            Richiedi preventivo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
