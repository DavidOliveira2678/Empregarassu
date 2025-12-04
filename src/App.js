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

        {/* ---> LOGIN (PRIMEIRA TELA) <--- */}
        <Route path="/" element={<Login />} />

        {/* Home vem DEPOIS do login */}
        <Route path="/home" element={<Home />} />

        {/* Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Recuperar senha */}
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />

        {/* Dashboard → só acessa se estiver logado */}
        <Route 
          path="/dashboard" 
          element={usuarioLogado ? <Dashboard nome="Faz teu Nome" /> : <Navigate to="/" />} 
        />

        {/* Qualquer rota inexistente → volta para login */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
