import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavBar from '../components/AdminNavBar';

function ControlPanelAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, redirecting to sign-in');
      navigate('/sign-in');
    } else {
      axios.get('http://localhost:3001/api/admin/control-panel-admin', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('Access granted:', response.data);
      })
      .catch(error => {
        console.error('Access denied:', error);
        navigate('/sign-in');
      });
    }
  }, [navigate]);

  return (
    <div className="d-flex">
      <AdminNavBar />
      <div className="flex-grow-1 p-3">
        <h1>Panel de Control del Administrador</h1>
        <p>Bienvenido al panel de control del administrador.</p>
      </div>
    </div>
  );
}

export default ControlPanelAdmin;