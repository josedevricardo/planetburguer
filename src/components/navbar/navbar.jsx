import React, { useState, useEffect, useContext  } from "react";
import "./navbar.css";
import logo from "../../assets/mascote.png";
import bag from "../../assets/bag.png";
import menuIcon from "../../assets/icone-menu.png";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";
import { CartContext } from "../../constexts/cart-context";

function Navbar(props) {
  const [isSticky, setSticky] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { totalCart } = useContext(CartContext);

  const openSidebar = () => {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? "navbar sticky" : "navbar"}>
      <Link to="/" className="home-link">
        <img src={logo} className="logotipo" alt="logotipo" />
      </Link>
      {props.showMenu && (
        <div className="menu">
          <div className="menu-item" onClick={toggleSubMenu}>
          <img src={menuIcon} className="menu-icon" alt="menu icon" />

            <span>Menu</span>
            {showSubMenu && (
              <div className="submenu">
                <Link to="/produto2">Lanches</Link>
                <Link to="/omeletes">Omeletes</Link>
                <Link to="/lanches">Artesanal</Link>
                <Link to="/bebidas">Bebidas</Link>
                <Link to="/sucos">Sucos</Link>
                <Link to="/acrescimo">Acréscimos</Link>
              </div>
            )}
          </div>
          <Link to="/" className="home-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="home-icon">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            Home
          </Link>
          <button onClick={openSidebar} className="btn btn-red">
            <img src={bag} className="icon" alt="bag" />
            Sacola {totalCart.toFixed(2)} {/* Exibe o total do carrinho no botão Sacola */}
          </button>
        </div>
      )}

      <Cart id="cart" />

    </div>
  );
}

export default Navbar;
