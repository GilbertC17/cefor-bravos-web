import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

function AppWrapper() {
  return <App />;
}

function AppWithRouter() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default AppWithRouter;