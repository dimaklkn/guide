import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import components
import Navbar from "./components/Navbar";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Artefacts from "./pages/Artefacts";
import People from "./pages/People";
import Places from "./pages/Places";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/artefacts" element={<Artefacts />} />
        <Route path="/people" element={<People />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
