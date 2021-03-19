import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container mt-2 d-flex justify-content-between align-items-center">
            <div className="title">
                <h3>Travel Mania</h3>
            </div>
            <div className="nav-style">
                <a href="/">Home</a>
                <a href="/">Destination</a>
                <a href="/">Blog</a>
                <a href="/">Login</a>
            </div>
        </div>
    );
};

export default Header;