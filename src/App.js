import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Dashboard from "./Dashboard";
import RecuperarSenha from "./Recuperarsenha";

function App() {
  const usuarioLogado = true; 

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        
        <Route path="/home" element={<Home />} />
       
        <Route path="/cadastro" element={<Cadastro />} />
        
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />

        <Route 
          path="/dashboard" 
          element={usuarioLogado ? <Dashboard nome="Faz teu Nome" /> : <Navigate to="/" />} 
        />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
