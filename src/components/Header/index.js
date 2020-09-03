import React from 'react';
import './styles.scss';
import MenuBar from '../Menu';

function Header() {

    return (
       <div className="header">
           <div className="header__brand">WriteUp</div>
           <div className="header__profile">
               <MenuBar></MenuBar>
           </div>
       </div>
    );
}

export default Header;
