import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

export default function App() {
    const [cart, setCart] = useState([]);
    const addToCart = (id) => {
        setCart(cart.concat(id));
    };
    const checkoutHandler = () => {
        setCart([]);
    };
    return (
        <>
            <BrowserRouter basename={"https://cherifi-houdaifa.github.io/Shopping-Cart" + "/"}>
                <NavBar cartItems={cart.length} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cart"
                        element={
                            <Cart cart={cart} checkout={checkoutHandler} />
                        }
                    />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:id"
                        element={<Product clickHandler={addToCart} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
