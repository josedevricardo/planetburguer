import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/mascote.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isSticky, setSticky] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToCart = () => {
    const cartElement = document.getElementById("cart");
    if (cartElement) {
      cartElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={isSticky ? "navbar sticky" : "navbar"}>
      <Link to="/" className="home-link">
        <img src={logo} className="logotipo" alt="logotipo" />
      </Link>
      {props.showMenu && (
        <div className="menu">
          <div className="menu-item" onClick={toggleSubMenu}>
            <span>Categoria</span>
            {showSubMenu && (
              <div className="submenu">
                <Link to="/produto2">Lanches</Link>
                <Link to="/omeletes">Omeletes</Link>
                <Link to="/lanches">Especiais</Link>
                <Link to="/bebidas">Bebidas</Link>
                <Link to="/sucos">Sucos</Link>
                <Link to="/acrescimo">Acréscimos</Link>
                {/* Adicione mais links para seus submenus conforme necessário */}
              </div>
            )}
          </div>
          <Link to="/">Cardápio</Link>
          <button onClick={openSidebar} className="btn btn-red">
            <img src={bag} className="icon" alt="bag" />
            Sacola
          </button>
        </div>
      )}

      <Cart id="cart" />

      {isSticky && (
        <button onClick={scrollToTop} className="scroll-to-top">
          Topo
        </button>
      )}
    </div>
  );
}

export default Navbar;
