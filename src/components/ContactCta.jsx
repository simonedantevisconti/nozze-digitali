import Reveal from "./Reveal";
import "../styles/contact-cta.css";

const ContactCta = () => {
  const whatsappLink =
    "https://wa.me/393451287102?text=Ciao%2C%20vorrei%20ricevere%20maggiori%20informazioni%20su%20Nozze%20Digitali.";

  return (
    <section className="contact-cta">
      <div className="container">
        <Reveal>
          <div className="contact-cta-box">
            <p className="contact-cta-eyebrow">PARLIAMONE INSIEME</p>

            <h2>Vuoi saperne di più?</h2>

            <p className="contact-cta-text">
              Raccontateci come immaginate il vostro matrimonio e scopriamo insieme
              quali soluzioni possono essere più adatte alle vostre esigenze.
            </p>

            <div className="contact-cta-actions">
              <a
                href="https://calendly.com/simone-visconti4/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-custom"
              >
                Prenota una call
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-custom"
              >
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactCta;
