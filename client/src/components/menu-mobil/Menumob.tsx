import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useState } from "react";

export default function MenuMob() {
  const [Showmodel, setShowmodel] = useState(false);

  return (
    <section className="container flex">
      <button
        className="menus"
        type="button"
        onClick={() => {
          setShowmodel(true);
        }}
      >
        <img
          className="burger-menu"
          src="Icones/Menu-burger-compresser.png"
          alt="Logo"
        />
      </button>

      {Showmodel && (
        <div className="fixed">
          <ul className="model ">
            <li className="close">
              <button
                type="button"
                onClick={() => {
                  setShowmodel(false);
                }}
              >
                X
              </button>
            </li>
            <li>
              <NavLink className="link-menu" to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="link-menu" to="albums">
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink className="link-menu" to="artists">
                Artistes
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
