import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Cart.css';

export default function Cart({ cart, checkout }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProduct = async (id) => {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const productData = await data.json();
        return productData;
    };
    useEffect(() => {
        const getProducts = async () => {
            const data = await Promise.all(
                cart.map((item) => {
                    return getProduct(item);
                })
            );
            setProducts(data);
        };
        getProducts();
    }, []);
    return (
        <div className="content">
            <div className="cart">
                {products.length > 0 ? (
                    products.map((product, key) => {
                        return (
                            <div key={key}>
                                <p>{product.title}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                        );
                    })
                ) : (
                    <h1>There is nothing in your cart.</h1>
                )}
                <input type="button" value="Checkout" onClick={() => {
                    checkout();
                    navigate("/")
                }} />
            </div>
        </div>
    );
}
