import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Search from "../Search/Search";
import MenuMob from "../menu-mobil/Menumob";
import "../menu-mobil/menu.css";

function Header() {
  return (
    <>
      <header>
        <nav className="header-container">
          <section className="nav-section">
            <MenuMob />

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
              <NavLink to="titles">Artistes</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
