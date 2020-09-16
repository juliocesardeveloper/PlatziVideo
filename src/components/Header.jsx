/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/julioDev-logo-light.png';
import userIcon from '../assets/static/usuario.png';

const Header = () => (
  <header className='header'>
    <a href='index.html'><img className='header__img' src={logo} alt='Logo julioDev' /></a>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User' />
        <p className='texto'>Perfil</p>
        <ul>
          <li><a href='./components/login.html' target='pop-up'>Cuenta</a></li>
          <li><a href='#'>Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
