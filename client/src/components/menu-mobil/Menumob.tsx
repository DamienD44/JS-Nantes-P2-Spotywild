import { useState } from "react";
import "./menu.css";

export default function Menumob() {
  const [showModel, setShowModel] = useState(false);

  return (
    <header className="flex">
      <button
        type="button"
        onClick={() => setShowModel(true)}
        className="menus"
      >
        <img
          src="images/Logo-footer-menu/Logo_cacher_menu-compacter.png"
          alt="Menu Icon"
          className="logo-imag"
        />
      </button>
      <div />

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                type="button"
                onClick={() => setShowModel(false)}
                className="close-btn"
              >
                X
              </button>
            </li>
            <li>
              <link rel="icon" href="favicon.ico" />
              About
            </li>
            <li>
              Articles
              <link rel="icon" href="favicon.ico" />
            </li>
            <li>
              Projects
              <link rel="icon" href="favicon.ico" />
            </li>
            <li>
              Speaking
              <link rel="icon" href="favicon.ico" />
            </li>
            <li>
              User
              <link rel="icon" href="favicon.ico" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
