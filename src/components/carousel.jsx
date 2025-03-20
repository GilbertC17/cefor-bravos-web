import '../App.js';
import '../bootstrap/css/bootstrap.min.css';
import '../bootstrap/js/bootstrap.min.js';
import '../App.css';

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
      <div className="title-carousel"><h1>DA EL SALTO Y CONVIÉRTETE EN UN FUTBOLISTA DE ALTO RENDIMIENTO CON NOSOTROS</h1></div>
        <div className="carousel-item active">
          <img src={require('../img/entrenamiento2.jpg')} className="d-block w-100" alt="Entrenamiento 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Entrenamiento De Alto Nivel</h5>
            <p>Únete a nuestros entrenamientos y mejora tus habilidades futbolísticas.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require('../img/entrenamiento3.jpg')} className="d-block w-100" alt="Entrenamiento 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Equipo Competitivo</h5>
            <p>Forma parte de nuestros equipos y compite en torneos locales y nacionales.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require('../img/entrenamiento4.jpg')} className="d-block w-100" alt="Entrenamiento 4" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Desarrollo Integral</h5>
            <p>Desarrolla tus habilidades técnicas, tácticas y físicas con nuestros programas.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;