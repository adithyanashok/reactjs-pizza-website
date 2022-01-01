import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./Components/Pages/About";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Pages/Menu";
import Contact from "./Components/Pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
