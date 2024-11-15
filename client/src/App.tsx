import { Outlet } from "react-router-dom";
import "./Globals.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ButtonMenu from "./components/menuComponent/ButtonMenu/ButtonMenu";
import Menu from "./components/menuComponent/Menu";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const menuState = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <main className="the-main">
        <Outlet />

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
    </>
  );
}

export default App;
