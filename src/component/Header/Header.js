import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container mt-2 d-flex justify-content-between align-items-center">

            <div className="title">
                <h3>Travel Mania</h3>
            </div>

            <div className="nav-style">
                <Link to="/"><a href="">Home</a></Link>
                <Link to="/destination"><a href="">Destination</a></Link>
                <a href="/">Blog</a>
                <Link to="/login"><a href="">Login</a></Link>
                <a className="userName">{loggedInUser.name}</a>

            </div>

        </div>
    );
};

export default Header;