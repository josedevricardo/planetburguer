import React, { useState, useEffect } from "react";
import './footer.css';
import Navbar from "../../components/navbar/navbar.jsx";
import AcrescimoVitrine from "../../components/acrescimo/acrescimo-vitrine.jsx";
import { acrescimo } from "../../dados.js";

function Acrescimo() {
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
          <p>Todos Lanches vai milho e Salada Menos Os Mistos! Entrega Grátis Bairros Atendidos: Vitória 1 e Vitória 2. Demais Verificar!</p>
          <button onClick={handleCloseAlert}>Fechar</button>
        </div>
      )}

      <div className="container">
        <div className="titulo text-center">
          <h1>Aqui voçê pode adicionar a gosto</h1>
          <p className="subtitulo">
            Adicione seu pedido na sacola de comprar e ao finalizar será
            redirecionado seu pedido para whatsapp e só aguardar...
          </p>
          
        </div>
      </div>

      <div className="text-center">
        {acrescimo.map(function (prod) {
          return (
            <AcrescimoVitrine
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

export default Acrescimo;
