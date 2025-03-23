import React from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap/css/bootstrap.min.css';
import '../App.css';

const AdminNavBar = () => {
  return (
    <div className="admin-navbar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/admin/dashboard">Panel Principal</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/notices">Noticias</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/posts">Publicaciones</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/tryouts">Visorías</Link>
        </li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </div>
  );
};

export default AdminNavBar;