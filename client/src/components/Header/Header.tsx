import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Search from "../Search/Search";
import Menumob from "../menu-mobil/Menumob";
import "../menu-mobil/menu.css";

function Header() {
  return (
    <>
      <header>
        <nav className="header-container">
          <section className="nav-section">
            <Menumob />

            <img
              src="/images/logo-spotywild.png"
              alt="Logo du site de SpotyWild"
            />
          </section>
          <Link to="searchpage">
            <Search />
          </Link>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="albums">Albums</NavLink>
            </li>
            <li>
              <NavLink to="titles">Titres</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
