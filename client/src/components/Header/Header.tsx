import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Search from "../Search/Search";
import MenuMob from "../menu-mobil/Menumob";
import "../menu-mobil/menu.css";
import { useSearch } from "../../contexts/SearchContexts";

function Header() {
  const { setSearchTerm } = useSearch();
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
            <Search onSearchChange={setSearchTerm} />
          </Link>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="albums">Albums</NavLink>
            </li>
            <li>
              <NavLink to="artists">Artistes</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
