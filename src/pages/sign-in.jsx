import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import juarezbg from '../img/fc-juarez-backgreen.jpg';
import '../sign-in.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!username) {
      errors.username = 'El nombre de usuario es obligatorio';
    }
    if (!password) {
      errors.password = 'La contraseña es obligatoria';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/api/auth/signin', { username, password });
      console.log(response.data);

      localStorage.setItem('token', response.data.accessToken);

      navigate('/control-panel-admin');
    } catch (error) {
      console.error('Error signing in', error);
      setErrors({ form: 'Usuario o contraseña incorrectos' });
    }
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{ minHeight: '100vh' }}>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-info">
            <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>
            {errors.form && <div className="alert alert-danger" role="alert">{errors.form}</div>}
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="floatingInput">Usuario</label>
              {errors.username && <div className="text-danger">{errors.username}</div>}
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Contraseña</label>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Recordar en este dispositivo
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2 btn-form-sign" type="submit">Ingresar</button>
          </div>
          <div className="form-image">
            <img src={juarezbg} className="form-image" width="100%" alt="Notice 1" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignIn;