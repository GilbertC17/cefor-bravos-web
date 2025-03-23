import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import App from './App';
import NavBar from './components/navbar';

function AppWrapper() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/control-panel-admin' && <NavBar />}
      <App />
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default AppWithRouter;