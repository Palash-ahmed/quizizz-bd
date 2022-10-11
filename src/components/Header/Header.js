import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-navigation'>
            <div>
                <h1>Quizizz <span>BD</span></h1>
            </div>
            <div>
                <nav className='header-container'>
                    <Link to='/'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;