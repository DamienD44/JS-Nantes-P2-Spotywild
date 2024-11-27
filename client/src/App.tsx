import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ButtonMenu from "./components/menuComponent/ButtonMenu/ButtonMenu";
import Menu from "./components/menuComponent/Menu";
import "./Globals.css";

import { SearchProvider } from "./contexts/SearchContexts";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const menuState = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <SearchProvider>
      <Header />
      <main className="the-main">
        <section className="section-outlet">
          <Outlet />
        </section>

        <section className="menu-container">
          <ButtonMenu isHidden={isHidden} menuState={menuState} />
          <section
            className={`column-menu ${isHidden ? "background-hidden" : "background-visible"}`}
          >
            <Menu isHidden={isHidden} />
          </section>
        </section>
      </main>
      <Footer />
    </SearchProvider>
  );
}

export default App;
