import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';

import Logo from '../../assets/img/Logo.png';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DevFlix" />
      </Link >

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
