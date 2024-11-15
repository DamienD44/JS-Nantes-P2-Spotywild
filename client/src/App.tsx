import { Outlet } from "react-router-dom";
import "./Globals.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/menuComponent/Menu";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const menuState = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <main className="the-main">
        <section className="column-2">
          <Outlet />
          <Carousel />
        </section>
        <Menu isHidden={isHidden} menuState={menuState} />
      </main>
      <Footer />
    </>
  );
}

export default App;
