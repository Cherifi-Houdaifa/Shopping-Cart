import React, { useEffect, useState } from 'react';
import '../styles/Products.css';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const products = await data.json();
        return products.products;
    };

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(products.concat(data));
        });
    }, []);

    return (
        <div className="products">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard
                            name={product.title}
                            price={product.price}
                            image={product.images[0]}
                            id={product.id}
                        />
                    </div>
                );
            })}
        </div>
    );
}
