import "./ButtonMenu.css";
import { useState } from "react";

interface buttonState {
  isHidden: boolean;
  menuState: () => void;
}

function ButtonMenu({ isHidden, menuState }: buttonState) {
  const [showImage, setShowImage] = useState(false);

  const handleMenuStateChange = () => {
    menuState();
    setShowImage(false);
    setTimeout(() => {
      setShowImage(true);
    }, 1500);
  };

  return (
    <>
      <button
        type="button"
        className={`button-title ${isHidden ? "button-collapsed" : "button-expanded"}`}
        onClick={handleMenuStateChange}
      >
        {isHidden ? (
          showImage ? (
            <img
              src="images/Logo-footer-menu/Logo_voir_menu-compacter.png"
              alt="Afficher le menu"
              className="icon show-image"
            />
          ) : (
            "User Name"
          )
        ) : (
          "User Name"
        )}
      </button>
    </>
  );
}

export default ButtonMenu;
