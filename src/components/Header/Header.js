import React from 'react';
import './Header.css'

const Header = () => {
    const teamStyle = {
        backgroundImage:`url(/background.jpg)`,
      }
    return (
        <div style={teamStyle} className="banner-area">
            <h1>League of Legends</h1>
        </div>
    );
};

export default Header;