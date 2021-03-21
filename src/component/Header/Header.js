import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="container mt-2 d-flex justify-content-between align-items-center">
            <div className="title">
                <h3>Travel Mania</h3>
            </div>
            <div className="nav-style">
                <a href="/">Home</a>
                <Link to="/destination"><a href="">Destination</a></Link>
                <a href="/">Blog</a>
                <Link to="/login"><a href="">Login</a></Link>
            </div>
        </div>
    );
};

export default Header;