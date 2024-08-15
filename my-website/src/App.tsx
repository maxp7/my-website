import { BrowserRouter, Routes, Route} from "react-router-dom";
import './assets/OCRA.ttf';
import './assets/terminus.ttf';
import Home from "./components/Home";
import About from "./components/About";
import './App.css'
import Works from "./components/Works";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
