import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Missions from "./pages/Missions";

function App() {
  return (
    <div>
      <Header />
      <div className="sm:w-[80%] m-auto flex px-5">
        <Sidebar home="Home" mission="Missions" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
