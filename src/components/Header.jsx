import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="h_name">Hello Shahrukh 👋🏼,</div>
      <div className="search">
      <input className="input-field" type="text" placeholder='&#61442; Search'/>
      </div>
    </div>
    
  );
};

export default Header;