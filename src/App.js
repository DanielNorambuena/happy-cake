import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Contacto from "./Views/Contacto";
import NotFound from "./Views/NotFound";
import Barra from "./Components/Barra";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;