import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Checkout from "./pages/checkout/checkout.jsx";
import Lanches from "./pages/lanches/lanches.jsx";
import Produto2 from "./pages/produto2/produto2.jsx";
import Omeletes from "./pages/omeletes/omeletes.jsx";
import Bebidas from "./pages/bebidas/bebidas.jsx";
import Sucos from "./pages/sucos/sucos.jsx";
import Acrescimo from "./pages/acrescimo/acrescimo.jsx";

function Rotas (){
    return <BrowserRouter>
     <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/lanches" element={<Lanches />} />
        <Route path="/produto2" element={<Produto2 />} />
        <Route path="/omeletes" element={<Omeletes />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/sucos" element={<Sucos />} />
        <Route path="/acrescimo" element={<Acrescimo />} />
        <Route path="*" element={<h1>Not Found Pag</h1>} />
     </Routes>

     
    
    </BrowserRouter>
}

export default Rotas;
