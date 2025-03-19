import logo from './img/Logo_tehuacan.png';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './bootstrap/js/bootstrap.min.js';

function App() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid center">
    <img src={logo} className="logo-nav" alt="Logo"></img>
    <a className="navbar-brand" href="#">CENTRO DE FORMACIÓN <br /> BRAVOS TEHUACÁN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Equipo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Noticias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brimmer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Otros Centros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Iniciar Sesión</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default App;
