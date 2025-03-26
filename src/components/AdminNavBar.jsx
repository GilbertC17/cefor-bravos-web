import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../bootstrap/css/bootstrap.min.css';
import '../App.css';

const AdminNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');
    // Redirigir al usuario al inicio de sesión
    navigate('/sign-in');
  };

  return (
    <div className="admin-navbar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/control-panel-admin">Panel Principal</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin-pages/notices-admin">Noticias</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-link nav-link text-danger" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavBar;