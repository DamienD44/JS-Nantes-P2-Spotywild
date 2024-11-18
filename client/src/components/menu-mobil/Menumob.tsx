import "./menu.css";
import { useState } from "react";

export default function Menumob() {
  const [Shoumodel, setShoumodel] = useState(false);

  return (
    <header className="ccontainer  flex">
      <button
        className="menus"
        type="button"
        onClick={() => {
          setShoumodel(true);
        }}
      >
        <img
          className="burgurm"
          src="../images/Logo-footer-menu/Logo_voir_menu-compacter.png"
          alt=""
        />
      </button>
      <div> </div>
      <nav className="dispart">
        <ul className="flex">
          <li>
            <a href={"./Home"}>Accueil</a>
          </li>
          <li>
            <a href={"/"}>Albums</a>
          </li>
          <li>
            <a href={"./Accueil"}>Titres</a>
          </li>
        </ul>
      </nav>

      {Shoumodel && (
        <div className=" fixed">
          <ul className=" model ">
            <li className="close">
              <button
                type="button"
                onClick={() => {
                  setShoumodel(false);
                }}
              >
                X
              </button>
            </li>
            <li>
              <a href={"./Home"}>Accueil</a>
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
