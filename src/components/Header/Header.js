import React from 'react';

const Header = () => {
    const teamStyle = {
        backgroundImage:`url(/background.jpg)`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize:'cover',
        height:'300px',
        textAlign:'center',
        paddingTop:'130px',
        color:'#fff',
      }
    return (
        <div style={teamStyle} className="banner-area">
            <h1>League of Legends</h1>
        </div>
    );
};

export default Header;