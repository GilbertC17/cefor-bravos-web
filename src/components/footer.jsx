import React from 'react';
import '../footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 CEFOR Bravos. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/about">Sobre nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/privacy">Política de privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;