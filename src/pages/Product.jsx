import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css';

export default function Product({ clickHandler }) {
    const [product, setProduct] = useState({images: []});
    const { id } = useParams();

    const getProduct = async () => {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const productData = await data.json();
        return productData;
    };
    useEffect(() => {
        getProduct().then((data) => {
            setProduct(data);
        });
    }, []);

    return (
        <div className="content">
            <div className="product">
                <div className='image'><img src={product.images[0]} alt="Product Image" /></div>
                <div>
                    <h1>{product.title}</h1>
                    <h4>{product.description}</h4>
                    <div>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                    </div>
                    <input type="button" value="Add To Cart" onClick={() => {clickHandler(id)} }/>
                </div>
            </div>
        </div>
    );
}
