import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div >
                <h4>The perfume Expert</h4>
            </div>
            <div>
           <a href="/home">Home</a>
           <a href="/reviews">Reviews</a>
           <a href="/blogs">Blogs</a> 
           <a href="/dashboard">Dashboard</a> 
           <a href="/about">About</a> 
           </div>
        </nav>
    );
};

export default Header;