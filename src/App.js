import logo from './img/Logo_tehuacan.png';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './bootstrap/js/bootstrap.min.js';
import Carousel from './carousel.js';

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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Equipo
          </a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Categorías</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Sub-15</a></li>
            <li><a class="dropdown-item" href="#">Sub-17</a></li>

          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Noticias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Inclusivo</a>
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
  <hr class="hr-green"></hr>
</nav>
  );
  
}

export default App;
