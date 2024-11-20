import "./Menu.css";
// import ButtonMenu from "./ButtonMenu/ButtonMenu";
import Favorite from "./Favorite/Favorite";
import PlayList from "./PlayList/PlayList";
import Subscribe from "./Subscribe/Subscribe";

interface MenuProps {
  isHidden: boolean;
}

function Menu({ isHidden }: MenuProps) {
  return (
    <>
      <aside className={`menu ${isHidden ? "menu-hidden" : "menu-show"}`}>
        <section className="interaction">
          <PlayList />
          <Favorite />
          <Subscribe />
        </section>
      </aside>
    </>
  );
}

export default Menu;
