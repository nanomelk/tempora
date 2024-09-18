import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <img 
                src="${process.env.PUBLIC_URL}/images/tempora-logo.png" 
                alt="Tempora Logo" 
                className="header-logo"
            />
        </header>
    );
};

export default Header;
