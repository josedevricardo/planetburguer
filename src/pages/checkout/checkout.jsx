import React, { useContext, useEffect } from 'react';
import Navbar from "../../components/navbar/navbar.jsx";
import "./checkout.css";
import { CartContext } from '../../constexts/cart-context.jsx';

function Checkout() {
    const { totalCart, cartItems } = useContext(CartContext);

    // Função para gerar um número aleatório para identificar o pedido
    const generateOrderNumber = () => {
        return Math.floor(Math.random() * 1000000); // Gera um número aleatório de 0 a 999999
    };

    // Função para construir a mensagem do pedido para o WhatsApp
    const buildWhatsAppMessage = () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('fone').value;
        const pagamento = document.getElementById('pagamento').value;
        const bairro = document.getElementById('bairro').value;
        const numeroCasa = document.getElementById('numero').value;
        const rua = document.getElementById('rua').value;
        const informacoesAdicionais = document.getElementById('text-inform').value;

        let mensagem = `Pedido #${generateOrderNumber()}:\n`; // Adiciona o número aleatório ao pedido
        cartItems.forEach(item => {
            mensagem += `Produto: ${item.nome}\n`;
            mensagem += `Preço: ${item.preco}\n`;
            mensagem += `Quantidade: ${item.qtd}\n`;
            if (item.descricao) {
                mensagem += `Descrição: ${item.descricao}\n`;
            }
            mensagem += `\n`;
        });
        mensagem += `Total: ${totalCart}\n`;
        mensagem += `\nDados do cliente:\n`;
        mensagem += `Nome: ${nome}\n`;
        mensagem += `Email: ${email}\n`;
        mensagem += `Telefone: ${telefone}\n`;
        mensagem += `Forma de Pagamento: ${pagamento}\n`;
        mensagem += `Endereço de Entrega:\n`;
        mensagem += `Bairro: ${bairro}\n`;
        mensagem += `Número: ${numeroCasa}\n`;
        mensagem += `rua: ${rua}\n`;
        mensagem += `Informações adicionais: ${informacoesAdicionais}\n`;

        return encodeURIComponent(mensagem);
    };

    // Função para redirecionar para o WhatsApp com os dados preenchidos
    const redirectToWhatsApp = () => {
        const mensagem = buildWhatsAppMessage();
        const numeroWhatsApp = '38998017215'; // Substitua pelo seu número de WhatsApp

        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
    };
 // Scroll para o topo ao montar o componente
 useEffect(() => {
    window.scrollTo(0, 0);
}, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="titulo text-center">
                    <h1>Finalizar Pedido</h1>
                </div>

                <div className="col-3">
                    <div className="box-checkout">
                        <h3>Dados Pessoais</h3>
                        <div className="input-group">
                            <p>Nome Completo</p>
                            <input type="text" id="nome" />
                        </div>
                        <div className="input-group">
                            <p>Email 'Opcional'</p>
                            <input type="email" id="email" />
                        </div>
                        <div className="input-group">
                            <p>Telefone Contato</p>
                            <input type="text" id="fone" />
                        </div>
                        <div className="input-group">
                            <p>Forma de Pagamento</p>
                            <input type="text" id="pagamento" />
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="box-checkout">
                        <h3>Endereço de Entrega</h3>
                        <div className="input-group">
                            <p>Bairro</p>
                            <input type="text" id="bairro" />
                        </div>
                        <div className="input-group">
                            <p>Número Casa</p>
                            <input type="text" id="numero" />
                        </div>
                        <div className="input-group">
                            <p>Rua</p>
                            <input type="text" id="rua" />
                        </div>
                        <div className="input-group">
                            <p>Informe Que Retirar do Lanche</p>
                            <input type="text" id="text-inform" />
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="box-checkout">
                        <h3>Valores</h3>
                        <div className="checkout-valores">
                            <span>Total</span>
                            <span><strong>{new Intl.NumberFormat('pt-BR',
                            {style: 'currency', currency: 'BRL' }).format(totalCart)}
                            </strong></span>
                        </div>
                        <div className="checkout-button">
                            <button className="btn-checkout" onClick={redirectToWhatsApp}>Finalizar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
