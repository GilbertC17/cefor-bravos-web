import React from 'react';
import Carousel from '../components/carousel.jsx';
import '../bootstrap/css/bootstrap.min.css';
import '../blog.css';
import logoTehuacan from '../img/logo_tehuacan.png';
import logoFemenil from '../img/logo_femenil.png';
import logoPuebla from '../img/logo_puebla.png';
import logoTepanco from '../img/logo_tepanco.png';
import imagenHome1 from '../img/imagen-home1.jpg';
import imagenPost1 from '../img/imagen-post1.jpg';
import imagenPost2 from '../img/imagen-post2.jpg';
import notice1 from '../img/notice-1.jpg';
import notice2 from '../img/notice-2.jpg';
import notice3 from '../img/notice-3.jpg';
import Animated from '../components/Animated';

export default function Home() {
    return (
        <main className="container">
            <div className="home-container">
                <Animated animation="animate__backInDown" delay="0.5s">
                    <h2 className="home-Title">¡BIENVENIDOS A LA PÁGINA OFICIAL DE FILIALES DE FC BRAVOS!</h2>
                </Animated>
                <Carousel />
            </div>

            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis second-container-home">
                <div className="col-lg-6 px-0">
                    <Animated animation="animate__fadeInLeft">
                        <h1 className="display-4">Descubre Nuestro Programa de Formación</h1>
                    </Animated>
                    <Animated animation="animate__fadeInUp" delay="0.5s">
                        <p className="lead my-3">En el centro de filiales de FC Bravos Juárez, nos dedicamos a formar a los futuros talentos del fútbol mexicano dentro de Tehuacán, Tepanco y Puebla, con la oportunidad de expandirnos alrededor de la zona. Manteniendo un enfoque integral que combina entrenamiento de alta calidad, educación, valores y trascendencia al primer equipo.</p>
                    </Animated>
                    <Animated animation="animate__fadeInUp" delay="1s">
                        <button type="button" className="btn btn-danger">Seguir Leyendo</button>
                    </Animated>
                </div>
                <div className="image-container-div">
                    <Animated animation="animate__zoomIn" delay="1.5s">
                        <img src={imagenHome1} className="d-block w-100 image-zoom" alt="Imagen" />
                    </Animated>
                </div>
            </div>

            <div className="row mb-2">
                {[{
                    category: "Noticias",
                    title: "Visita al Tercer Congreso",
                    date: "Mar 14",
                    description: "Se realizó el tercer congreso de centros de formación del club FC Bravos Juárez.",
                    categoryClass: "text-primary-emphasis",
                    image: imagenPost1
                }, {
                    category: "Eventos",
                    title: "Torneo de Filiales",
                    date: "Sep 25",
                    description: "Prepárate para el próximo torneo de filiales oficiales del club que se celebrará en septiembre de este año, en Ciudad Juárez, Chihuahua.",
                    categoryClass: "text-success-emphasis",
                    image: imagenPost2
                }].map((post, index) => (
                    <div className="col-md-6" key={index}>
                        <Animated animation="animate__fadeInLeft" delay={`${index * 0.5}s`}>
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className={`title-one-notice d-inline-block mb-2 ${post.categoryClass}`}>{post.category}</strong>
                                    <h3 className="mb-0">{post.title}</h3>
                                    <div className="mb-1 text-body-secondary">{post.date}</div>
                                    <p className="card-text mb-auto">{post.description}</p>
                                    <button type="button" className="btn btn-primary btn-sm">Conocer Más</button>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img src={post.image} className="bd-placeholder-img image-zoom" width="200" height="250" alt="Thumbnail" />
                                </div>
                            </div>
                        </Animated>
                    </div>
                ))}
            </div>

            <div className="row g-5">
                <div className="col-md-8">
                    <h3 className=" mb-4 fst-italic border-green">Últimas Publicaciones</h3>
                    {[{
                        title: "Entrenamiento de Alto Rendimiento",
                        date: "Marzo 15, 2025",
                        author: "Gilberto Garza",
                        content: "Nuestro programa de entrenamiento de alto rendimiento está diseñado para llevar a los jugadores al siguiente nivel, combinando técnicas avanzadas y un enfoque personalizado."
                    }, {
                        title: "Importancia de la Nutrición en el Fútbol",
                        date: "Febrero 20, 2025",
                        author: "Jaime Librado",
                        content: "La nutrición juega un papel crucial en el rendimiento de los jugadores. Descubre cómo una dieta equilibrada puede mejorar tu juego y mantenerte en la mejor forma."
                    }].map((blog, index) => (
                        <article className="blog-post" key={index}>
                            <Animated animation="animate__fadeInUp" delay={`${index * 0.3}s`}>
                                <h2 className="display-5 link-body-emphasis mb-1 title-blog">{blog.title}</h2>
                                <p className="blog-post-meta">{blog.date} por <a href="#">{blog.author}</a></p>
                                <p className="blog-text">{blog.content}</p>
                            </Animated>
                        </article>
                    ))}
                </div>
                <div className="col-md-4">
                    <div className="position-sticky" style={{ top: "2rem" }}>
                        <Animated animation="animate__fadeInRight" delay="0.5s">
                            <div className="p-4 mb-3 bg-body-tertiary rounded p-about">
                                <h4 className="fst-italic">Sobre Nosotros</h4>
                                <p className="mb-0">En FC Bravos, nos dedicamos a la formación integral de jóvenes futbolistas, combinando entrenamiento de alta calidad con educación y valores.</p>
                                <button type="button" className="btn btn-danger">Conocer Más</button>
                            </div>
                        </Animated>

                        <div>
                            <h4 className="fst-italic border-red">Noticias Recientes</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none" href="#">
                                        <img src={notice1} className="bd-placeholder-img" width="100%" height="96" alt="Notice 1" />
                                        <div className="col-lg-8">
                                            <h6 className="mb-0">Visita al Tercer Congreso</h6>
                                            <small className="text-body-secondary">Marzo 14, 2025</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <img src={notice2} className="bd-placeholder-img" width="100%" height="96" alt="Notice 1" />
                                        <div className="col-lg-8">
                                            <h6 className="mb-0">Nuevas Instalaciones</h6>
                                            <small className="text-body-secondary">Enero 21, 2025</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <img src={notice3} className="bd-placeholder-img" width="100%" height="96" alt="Notice 1" />
                                        <div className="col-lg-8">
                                            <h6 className="mb-0">Nueva Filial: Tepanco</h6>
                                            <small className="text-body-secondary">Enero 13, 2025</small>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <Animated animation="animate__fadeInRight" delay="1s">
                                <h4 className="fst-italic border-red">Publicaciones Recientes</h4>
                                <ul className="list-unstyled">
                                    <li><a className="links-pubs" href="#">Entrenamiento de Alto Rendimiento</a></li>
                                    <li><a className="links-pubs" href="#">Importancia de la Nutrición en el Fútbol</a></li>
                                    <li><a className="links-pubs" href="#">Torneo de Verano</a></li>
                                </ul>
                            </Animated>
                        </div>
                        <div className="p-4 filiales-container">
                            <h4 className="fst-italic filiales border-green">Filiales Oficiales</h4>
                            <ul className="list-unstyled">
                                <Animated animation="animate__rotateInDownRight" delay="1s">
                                    <li><a href="#"><img src={logoTehuacan} className="img-thumbnail" alt="Logo"></img></a></li>
                                </Animated>
                                <Animated animation="animate__rotateInDownRight" delay="1.3s">
                                    <li><a href="#"><img src={logoFemenil} className="img-thumbnail" alt="Logo"></img></a></li>
                                </Animated>
                                <Animated animation="animate__rotateInDownRight" delay="1.5s">
                                    <li><a href="#"><img src={logoPuebla} className="img-thumbnail" alt="Logo"></img></a></li>
                                </Animated>
                                <Animated animation="animate__rotateInDownRight" delay="1.7s">
                                    <li><a href="#"><img src={logoTepanco} className="img-thumbnail" alt="Logo"></img></a></li>
                                </Animated>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}