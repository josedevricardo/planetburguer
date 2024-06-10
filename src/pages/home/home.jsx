import React, { useState, useEffect } from "react";
import "./footer.css";
import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
import ProdutoSlider from "../../components/produto-slider/produto-slider.js"; // Importe o componente ProdutoSlider
import { produtos as produtosData } from "../../dados.js";
import SearchBar from "../../components/SearchBar/SearchBar"; // Importe o componente SearchBar
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton"; // Importe o componente ScrollToTopButton

function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [filteredProdutos, setFilteredProdutos] = useState(produtosData);

  useEffect(() => {
    // Exibir o alerta ao entrar na página
    setShowAlert(true);
  }, []);

  const handleCloseAlert = () => {
    // Fechar o alerta
    setShowAlert(false);
  };

  const handleAddToCart = (produtoId) => {
    // Lógica para adicionar o produto ao carrinho e redirecionar para a sacola de compras
    // Você pode implementar esta lógica de acordo com a estrutura da sua aplicação
    console.log("Adicionar ao carrinho:", produtoId);
    // Exemplo de redirecionamento para a sacola de compras
    // window.location.href = "/sacola";
  };

  const handleSearch = (query) => {
    const filtered = produtosData.filter((produto) =>
      produto.nome.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProdutos(filtered);
  };

  return (
    <>
      <Navbar showMenu={true} />
      {showAlert && (
        <div className="alert">
          <p>
            Todos Lanches vai milho e Salada Menos Os Mistos! Entrega Grátis
            Bairros Atendidos: Vitória 1 e Vitória 2. Demais Verificar!
          </p>
          <button onClick={handleCloseAlert}>Fechar</button>
        </div>
      )}
      <div className="container">
        <div className="titulo text-center">
          <SearchBar data={produtosData} onSearch={handleSearch} />{" "}
          {/* Adicione a barra de busca aqui */}
          <h1>Cardápio Planet Burguer</h1>
          <p className="subtitulo">
            Adicione seu pedido na sacola de comprar e ao finalizar será
            redirecionado seu pedido para whatsapp e só aguardar...
          </p>
        </div>
      </div>
      <ProdutoSlider
        produtos={filteredProdutos}
        handleClick={handleAddToCart}
      />{" "}
      {/* Adicionando o slider de produtos */}
      <div>
        <p className="text-pedidos">Lanches Mais Pedidos</p>
      </div>
      <div className="text-center">
        {filteredProdutos.map((prod) => (
          <ProdutoVitrine
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            foto={prod.foto}
          />
        ))}
      </div>
      <ScrollToTopButton /> {/* Adicionando o botão de rolar para cima */}
      <footer className="footer text-center">
        <p>
          <a
            className="direitos"
            href="https://portfoliojosericardo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Desenvolvido Por José Ricardo
          </a>
          Todos direitos Planet Burger 38-99801-7215 R. das Bromélias, 280
          Residencial Vitória 1
        </p>
      </footer>
    </>
  );
}

export default Home;
