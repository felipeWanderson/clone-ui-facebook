import React from 'react';

import faceLogo from '../assets/facebook-logo.png';

function Header() {
  return (
    <header className="cabecalho">
      <img src={faceLogo} alt="facebook-logo"/>
      <nav>
        <span>Meu Perfil</span>
        <i className="material-icons large">account_circle</i>
      </nav>
    </header>
  );
}

export default Header;