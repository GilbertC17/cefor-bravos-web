import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo_fcjuarez.png';
import logoTehuacan from '../img/logo_tehuacan.png';
import logoFemenil from '../img/logo_femenil.png';
import logoPuebla from '../img/logo_puebla.png';
import logoTepanco from '../img/logo_tepanco.png';
import '../bootstrap/css/bootstrap.min.css';
import '../App.css';

const NavBar = () => {
  const [navbarState, setNavbarState] = useState({
    logo: logo,
    text: 'FILIALES OFICIALES<br />BRAVOS JUÁREZ'
  });

  const handleSedeChange = (sede) => {
    switch (sede) {
      case 'tehuacan':
        setNavbarState({ logo: logoTehuacan, text: 'CENTRO DE FORMACIÓN<br />BRAVOS TEHUACÁN' });
        break;
      case 'femenil':
        setNavbarState({ logo: logoFemenil, text: 'CENTRO DE FORMACIÓN<br />BRAVOS FEMENIL' });
        break;
      case 'puebla':
        setNavbarState({ logo: logoPuebla, text: 'CENTRO DE FORMACIÓN<br />BRAVOS PUEBLA' });
        break;
      case 'tepanco':
        setNavbarState({ logo: logoTepanco, text: 'CENTRO DE FORMACIÓN<br />BRAVOS TEPANCO' });
        break;
      default:
        setNavbarState({ logo: logo, text: 'FILIALES OFICIALES<br />BRAVOS JUÁREZ' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid center">
        <img src={navbarState.logo} className="logo-nav" alt="Logo" />
        <a className="navbar-brand" href="/home" dangerouslySetInnerHTML={{ __html: navbarState.text }}></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home" onClick={() => handleSedeChange('default')}>Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filiales
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/team" onClick={() => handleSedeChange('sedes')}>Sedes</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/sub-15" onClick={() => handleSedeChange('tehuacan')}>Tehuacán Varonil</Link></li>
                <li><Link className="dropdown-item" to="/sub-15" onClick={() => handleSedeChange('femenil')}>Tehuacán Femenil</Link></li>
                <li><Link className="dropdown-item" to="/sub-15" onClick={() => handleSedeChange('puebla')}>Puebla</Link></li>
                <li><Link className="dropdown-item" to="/sub-17" onClick={() => handleSedeChange('tepanco')}>Tepanco</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/notices">Noticias</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/inclusive">Inclusivo</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
          </ul>
        </div>
      </div>
      <hr className="hr-green" />
    </nav>
  );
};

export default NavBar;