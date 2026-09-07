import "../styles/header.css";

const Header = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Nozze%20Digitali%20e%20richiedere%20un%20preventivo.";

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="header-logo" aria-label="Nozze Digitali">
            <img src="/favicon-nozze-naked.png" alt="Logo Nozze Digitali" />
          </a>

          <a href="/" className="header-brand">
            Nozze Digitali
          </a>

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
