import React from 'react';
import Logo from '../../assets/img/reactvision_logo.png';
import Button from '../Button';
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo}  alt="ReactVition Logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;