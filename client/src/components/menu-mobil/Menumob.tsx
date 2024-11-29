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
              <a className="link-menu" href={"/Home"}>
                Accueil
              </a>
            </li>
            <li>
              <a className="link-menu" href={"/"}>
                Albums
              </a>
            </li>
            <li>
              <a className="link-menu" href={"/"}>
                Titres
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
