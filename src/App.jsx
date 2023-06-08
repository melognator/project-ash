import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Solicitudes from "./components/Solicitudes/Solicitudes";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<Layout><Formulario /></Layout>} />
        <Route path="/solicitudes" element={<Layout><Solicitudes /></Layout>} />
      </Routes>
    </main>
  );
}

export default App;
