import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/ProductCard.css';

export default function ProductCard({ id, name, price, image }) {
    const navigate = useNavigate()
    
    return (
        <div className="product-card" onClick={() => {navigate(`/products/${id}`)}} >
            <div>
                <img src={image} alt="Product Image" />
            </div>
            <h1>{name}</h1>
            <h3>${price}</h3>
        </div>
    );
}
