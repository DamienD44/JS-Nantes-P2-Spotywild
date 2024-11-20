import "./Menu.css";
import { useState } from "react";

export default function MenuMob() {
  const [Showmodel, setShowmodel] = useState(false);

  return (
    <header className="container flex">
      <button
        className="menus"
        type="button"
        onClick={() => {
          setShowmodel(true);
        }}
      >
        <img
          className="burgur-menu"
          src="../images/Logo-footer-menu/Logo_voir_menu-compacter.png"
          alt="Logo"
        />
      </button>

      {Showmodel && (
        <div className=" fixed">
          <ul className=" model ">
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
              <a href={"/Home"}>Accueil</a>
            </li>
            <li>
              <a href={"/"}>Albums</a>
            </li>
            <li>
              <a href={"/"}>Titres</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
