import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import components
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Artefacts from "./pages/Artefacts";
import People from "./pages/People";
import Places from "./pages/Places";
import Person from "./pages/Person";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/artefacts" element={<Artefacts />} />
          <Route path="/people" element={<People />} />
          <Route path="/about" element={<About />} />
          <Route path="/people/:id" element={<Person />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
