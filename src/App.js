import { Routes, Route } from "react-router-dom";
import Footer from './components/footer.jsx';
import Home from "./pages/home.jsx";
import Team from "./pages/team.jsx";
import Notices from "./pages/notices.jsx";
import Contact from "./pages/contact.jsx";
import ControlPanelAdmin from "./pages/control-panel-admin.jsx";
import Varonil from "./pages/tehuacan-men.jsx";
import Femenil from "./pages/tehuacan-womens.jsx";
import Puebla from "./pages/puebla.jsx";
import Tepanco from "./pages/tepanco.jsx";
import SignIn from "./pages/sign-in.jsx";
import './bootstrap/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tehuacan-men" element={<Varonil />} />
        <Route path="/tehuacan-womens" element={<Femenil />} />
        <Route path="/puebla" element={<Puebla />} />
        <Route path="/tepanco" element={<Tepanco />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/control-panel-admin" element={<ControlPanelAdmin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;