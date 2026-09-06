import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {currentYear} Nozze Digitali. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
