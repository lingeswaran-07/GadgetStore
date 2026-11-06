import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Header.css';
import cartlogo from './7835563_1_-removebg-preview.png';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
    const CART = useSelector((state) => state.carts.CART);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const handleScrollToGadgets = () => {
        setShowDropdown(!showDropdown); // Toggle dropdown visibility
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleSignupClick = () => {
        setShowSignup(true);
    };

    const handleClose = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    return (
        <>
            <nav className="head">
                <h1>SHOPIFY</h1>
                <ul>
                    <li><a href="#banner">HOME</a></li>
                    <li onClick={handleScrollToGadgets}>
                        GADGETS
                        {showDropdown && (
                            <ul className="dropdown">
                                <li><Link to="/mobile">Mobile Phones</Link></li>
                                <li><Link to="/watches">SmartWatches</Link></li>
                                <li><Link to="/laptops">Laptops</Link></li>
                                <li><Link to="/chargers">Chargers</Link></li>
                                <li><Link to="/gaming">GamingGadgets</Link></li>
                                <li><Link to="/earbuds">Earbuds</Link></li>
                                <li><Link to="/speakers">Speakers</Link></li>

                            </ul>
                        )}
                    </li>
                    <Link to="/cart"><img src={cartlogo} width="50px" height="40px"  alt="Cart" /></Link>
                   <a> <span className="car">:0{CART.length}</span></a>&nbsp;&nbsp;&nbsp;
                    <h3 className="lo" onClick={handleLoginClick} >Login</h3>
                </ul>
            </nav>

            {showLogin && <Login onClose={handleClose} setShowSignup={setShowSignup} />}
            {showSignup && <Signup onClose={handleClose} />}
        </>
    );
};

export default Header;
