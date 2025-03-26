import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/navbar.jsx'; // Navbar público
import Footer from './components/footer.jsx';
import Home from "./pages/home.jsx";
import Team from "./pages/team.jsx";
import Notices from "./pages/notices.jsx";
import Contact from "./pages/contact.jsx";
import SignIn from "./pages/sign-in.jsx";
import ControlPanelAdmin from "./pages/control-panel-admin.jsx";
import NoticesAdmin from "./pages/admin-pages/notices-admin.jsx";
import AdminLayout from "./components/AdminLayout";
import './bootstrap/css/bootstrap.min.css';

function App() {
  const location = useLocation();

  // Determinar si estamos en una página del administrador
  const isAdminRoute = location.pathname.startsWith('/control-panel-admin') || location.pathname.startsWith('/admin-pages');

  return (
    <div className="container">
      {!isAdminRoute && <NavBar />} {/* Renderizar el navbar normal solo en rutas públicas */}
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* Rutas del administrador */}
        <Route
          path="/control-panel-admin"
          element={
            <AdminLayout>
              <ControlPanelAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-pages/notices-admin"
          element={
            <AdminLayout>
              <NoticesAdmin />
            </AdminLayout>
          }
        />
      </Routes>
      {!isAdminRoute && <Footer />} {/* Renderizar el footer solo en rutas públicas */}
    </div>
  );
}

export default App;