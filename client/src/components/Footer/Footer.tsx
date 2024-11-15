import { Link } from "react-router-dom";
import "./Footer.css";
import LanguageChoice from "../LanguageChoice/LanguageChoice";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <LanguageChoice />
      </div>
      <div className="Mentions">
        <p>© 2024 Tous droits réservés, SpotyWild®</p>
        <p>
          <Link className="politique" to="/Politique de confidentialité">
            Politique de confidentialité
          </Link>
          <span>|</span>
          <Link className="condition" to="/Conditions générales">
            Conditions générales
          </Link>
        </p>
      </div>

      {/* Section Réseaux Sociaux */}
      <section className="icone">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="Icones/Twitter.png" alt="twitter" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Icones/facebook.png" alt="Facebook" />
        </a>
        <a
          className="spoty"
          href="https://spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Icones/spotify.png" alt="Spotify" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="Icones/youtube.png" alt="YouTube" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Icones/Instagram.png" alt="Instagram" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
