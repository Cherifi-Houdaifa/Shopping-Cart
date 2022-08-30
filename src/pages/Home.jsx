import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="content">
            <div className="home">
                <h1>Welcome</h1>
                <h2>Buy The Worst Things From The Best Stores</h2>
                <Link to="/products">Shop Now</Link>
            </div>
        </div>
    );
}
