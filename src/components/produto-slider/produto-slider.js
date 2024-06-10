import React, { useContext, useState, useRef } from "react";
import './produto-slider.css';
import { CartContext } from "../../constexts/cart-context";

const ProdutoSlider = ({ produtos }) => {
  const { AddItemCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);
  const scrollRef = useRef(null);

  const handleClick = (produto) => {
    AddItemCart({
      id: produto.id,
      foto: produto.foto,
      nome: produto.nome,
      preco: produto.preco,
      qtd: 1
    });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = currentScroll - 200; // Defina a quantidade de rolagem desejada
      scrollToSmoothly(scrollRef.current, currentScroll, newScroll, 400); // 400 é a duração da animação em milissegundos
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = currentScroll + 200; // Defina a quantidade de rolagem desejada
      scrollToSmoothly(scrollRef.current, currentScroll, newScroll, 400); // 400 é a duração da animação em milissegundos
    }
  };

  const scrollToSmoothly = (element, from, to, duration) => {
    if (duration <= 0) return;
    const difference = to - from;
    const perTick = difference / duration * 10;

    setTimeout(() => {
      element.scrollLeft = element.scrollLeft + perTick;
      if (element.scrollLeft === to) return;
      scrollToSmoothly(element, from, to, duration - 10);
    }, 10);
  };

  return (
    <div className="produto-slider-container">
      <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
      <div className="produto-slider" ref={scrollRef}>
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <img src={produto.foto} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p className="tex-decricao">{produto.descricao}</p>
            <p className="prod-vitrine-preco">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(produto.preco)}
            </p>
            <button onClick={() => handleClick(produto)}>Adicionar à Sacola</button>
            
          </div>
        ))}
        {showMessage && <div className="message-hover-slide">Adicionado à sacola</div>}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
    </div>
  );
};

export default ProdutoSlider;
