import React, { useState, useEffect } from "react";
import './footer.css';
import Navbar from "../../components/navbar/navbar.jsx";
import BebidasVitrine from "../../components/bebidas-vitrine/bebidas-vitrine.jsx";
import { bebidas } from "../../dados.js";

function Bebidas() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Exibir o alerta ao entrar na página
    setShowAlert(true);
  }, []);

  const handleCloseAlert = () => {
    // Fechar o alerta
    setShowAlert(false);
  };

  return (
    <>
      <Navbar showMenu={true} />

      {showAlert && (
        <div className="alert">
          <p>Caso faço pedido só de bebidas é cobrado valor da entrega, se pedir juntamente com lanches bairros vitoria 1 e 2 GRÁTIS demais consultar!</p>
          <button onClick={handleCloseAlert}>Fechar</button>
        </div>
      )}

      <div className="container">
        <div className="titulo text-center">
          <h1>Bebidas Geladas</h1>
          <p className="subtitulo">
            Adicione seu pedido na sacola de comprar e ao finalizar será
            redirecionado seu pedido para whatsapp e só aguardar...
          </p>
          
        </div>
      </div>

      <div className="text-center">
        {bebidas.map(function (prod) {
          return (
            <BebidasVitrine
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              foto={prod.foto}
            />
          );
        })}
      </div>

      <footer className="footer text-center">
        <p>@Todos Direitos - Planet Burger 38-99801-7215   R. das Bromélias, 280 - Residencial Vitória 1</p>
      </footer>
    </>
  );
}

export default Bebidas;
