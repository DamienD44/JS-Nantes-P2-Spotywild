import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Search from "../Search/Search";

function Header() {
  return (
    <>
      <header>
        <nav className="header-container">
          <img
            src="/images/logo-spotywild.png"
            alt="Logo du site de SpotyWild"
          />
          <Link to="searchpage">
            <Search />
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
