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
  const [isClosing, setIsClosing] = useState(false);

  const menuState = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsHidden(true);
      }, 1250);
    }
  };

  return (
    <SearchProvider>
      <Header />
      <main className="the-main">
        <ButtonMenu isHidden={isHidden} menuState={menuState} />

        <section
          className={`section-outlet ${isHidden ? "outlet-full" : "outlet-with-menu"}`}
        >
          <Outlet />
        </section>

        <section className={`menu-container ${!isHidden ? "visible" : ""}`}>
          <section
            className={`column-menu ${isClosing || isHidden ? "background-hidden" : "background-visible"}`}
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
