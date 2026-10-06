import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali.";

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="header-brand-wrapper">
            <Link
              to="/"
              className="header-logo"
              aria-label="Nozze Digitali - Homepage"
            >
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
          </div>

          <nav className="header-nav" aria-label="Navigazione principale">
            <Link to="/#come-funziona">Come funziona</Link>

            <Link to="/partecipazioni-digitali">Partecipazioni</Link>

            <Link to="/#prezzi">Servizi e prezzi</Link>

            <a
              href="https://martaesimone.fun/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Esempio
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn header-cta"
          >
            Richiedi informazioni
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
