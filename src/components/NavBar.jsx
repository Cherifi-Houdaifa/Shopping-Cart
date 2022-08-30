import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cart from '../assets/cart.svg';
import '../styles/NavBar.css';

export default function NavBar({ cartItems }) {
    const navigate = useNavigate();
    return (
        <nav>
            <h1 onClick={() => {navigate('/')}}>
                Worst <span style={{ color: '#007EA7' }}>Buy</span>
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Shop</Link>
                <Link to="/cart">
                    <img src={cart} alt="Cart Here" />
                    <div>{cartItems}</div>
                </Link>
            </div>
        </nav>
    );
}
