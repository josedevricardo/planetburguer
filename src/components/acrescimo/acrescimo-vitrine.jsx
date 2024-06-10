import React, { useEffect, useState } from "react";
import "./acrescimo-vitrine.css";
import bag from "../../assets/bag-black.png";
import { CartContext } from "../../constexts/cart-context";
import { useContext } from "react";


function AcrescimoVitrine(props) {
  const { AddItemCart } = useContext(CartContext);

  const [showMessage, setShowMessage] = useState(false); // Estado para controlar a exibição da mensagem

  useEffect(() => {
    function handleScroll() {
    
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddItemCart(item);
    setShowMessage(true); // Exibir mensagem ao clicar no botão
  }

  return (
    <div className="produto-box text-center">
     
      <img src={props.foto} alt="foto" />
      <div>
        <h2>{props.nome}</h2>
        <p className="prod-vitrine-descricao-props">{props.descricao}</p>
        <p className="prod-vitrine-preco">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>
      </div>

      <div>
        <button
          type="button"
          onClick={AddItem}
          className="btn btn-cart"
       
        >
          <img src={bag} className="icon" alt="bag" />
          Comprar
        </button>
        {showMessage && <div className="message-hover">Adicionado à sacola</div>} {/* Exibir a mensagem quando showMessage for true */}
      </div>
    </div>
  );
}

export default AcrescimoVitrine;
