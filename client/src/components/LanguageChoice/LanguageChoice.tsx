import "./Languagechoice.css";

import { useState } from "react";
import type { ChangeEvent } from "react";

const LanguageChoice = () => {
  const [language, setLanguage] = useState("fr");

  function handleLanguageChange(e: ChangeEvent<HTMLSelectElement>) {
    setLanguage(e.target.value);
  }

  return (
    <div className="language-selector">
      <section className="langue">
        <img
          className="logo"
          src="Icones/choix_de_langue.png"
          alt="choix de langue"
        />
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="fr"> Français </option>
          <option value="en"> English </option>
          <option value="es"> Español </option>
        </select>
      </section>
    </div>
  );
};

export default LanguageChoice;
