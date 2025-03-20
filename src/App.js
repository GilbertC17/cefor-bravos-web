import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Team from "./pages/team.jsx";
import Notices from "./pages/notices.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <Router>
      <NavBar /> {}
      <div className="container"> {}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;