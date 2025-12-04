import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <div className="home-header">
        <div className="logo">Faz Teu Nome</div>
        <div className="header-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/cadastro")}>Cadastro</button>
        </div>
      </div>

      {/* Main */}
      <div className="home-main">
        <h1>Explore as trilhas disponíveis</h1>
        <p className="home-subtitle">
          Construa seu próprio Projeto de Vida, desenvolva habilidades essenciais e conheça oportunidades reais através de um lugar feito pra você
        </p>

        <div className="trilhas-container">
          {/* Card 1 */}
          <div className="trilha-card">
            <div className="trilha-icon">💡</div>
            <h2>Trilha da Criatividade</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: "40%" }}></div>
            </div>
            <span>40% concluído</span>
          </div>

          {/* Card 2 */}
          <div className="trilha-card">
            <div className="trilha-icon">📚</div>
            <h2>Trilha do Conhecimento</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
            <span>70% concluído</span>
          </div>

          {/* Card 3 */}
          <div className="trilha-card">
            <div className="trilha-icon">🚀</div>
            <h2>Trilha da Aventura</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: "25%" }}></div>
            </div>
            <span>25% concluído</span>
          </div>
        </div>

        {/* Botão clicável para iniciar */}
   <button
  className="start-journey-btn"
  onClick={() => navigate("/dashboard")}
>
  Comece sua jornada agora
</button>


      </div>
    </div>
  );
}
