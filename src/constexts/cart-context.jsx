import { createContext, useState } from "react";
import Decimal from "decimal.js"; // Importe a biblioteca Decimal

const CartContext = createContext();

function CartProvider(props) {
    const [cartItems, setCarItems] = useState([]);
    const [totalCart, setTotalCart] = useState(new Decimal(0)); // Inicialize o totalCart como um Decimal

    function AddItemCart(item) {
        let cartItemsNovo = [];
        let findItem = false;

        for (var prod of cartItems) {
            if (prod.id === item.id) {
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItemsNovo.push(item);
            } else {
                cartItemsNovo.push(prod);
            }
        }

        if (!findItem || cartItems.length === 0) {
            cartItemsNovo.push(item);
        }

        setCarItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);
    }

    function RemoveItemCart(id) {
        let cartItemsNovo = [];

        for (var prod of cartItems) {
            if (prod.id === id) {
                prod.qtd = prod.qtd - 1;
            }
            cartItemsNovo.push(prod);
        }

        cartItemsNovo = cartItemsNovo.filter(function (item) {
            return item.qtd > 0;
        });

        setCarItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);
    }

    function CalcTotal(items) {
        let tot = new Decimal(0); // Inicialize o total como um Decimal

        for (var item of items) {
            let preco = new Decimal(item.preco);
            let quantidade = new Decimal(item.qtd);
            tot = tot.plus(preco.times(quantidade)); // Use métodos do Decimal para operações aritméticas
        }

        setTotalCart(tot);
    }

    return (
        <CartContext.Provider
            value={{ cartItems, setCarItems, AddItemCart, RemoveItemCart, totalCart }}
            
            
        >
        
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
