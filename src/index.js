import React from 'react';
import ReactDOM from 'react-dom/client';import "./style/global.css";
import Rotas from "./rotas.js";
import { CartProvider } from './constexts/cart-context.jsx';
<a href="[![Netlify Status](https://api.netlify.com/api/v1/badges/f361336b-89fd-4865-8a36-ceb1d6eb8422/deploy-status)](https://app.netlify.com/sites/papaya-sundae-9004bb/deploys)">Link para seu site</a>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartProvider>

<Rotas/>
</CartProvider>



);

