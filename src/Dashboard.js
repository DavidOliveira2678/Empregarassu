import React from "react";
import "./Dashboard.css";

export default function Dashboard({ nome }) {
  return (
    <div className="dashboard-container">

      {/* ==================== PARTE SUPERIOR (NAVBAR) ==================== */}
      <nav className="dashboard-topbar">
        <div className="topbar-logo">FAZ TEU NOME</div>

        <div className="topbar-links">
          <span>Início</span>
          <span>Meu Perfil</span>
          <span>Comunidade</span>
          <span>Ranking</span>
        </div>

        <div className="topbar-user">👤</div>
      </nav>

      {/* ==================== HEADER ==================== */}
      <div className="dashboard-header">
        <h2>Bem-vindo à sua jornada, {nome}</h2>
        <p>
          Chegou a hora de descobrir talentos, desenvolver habilidades que fazem
          a diferença e construir um futuro com impacto. O futuro começa agora,
          por isso Faz teu Nome!
        </p>

        <div className="progress-info">
          <div className="progress-box adjusted">
            <span>Total de Progresso</span>
            <span>20%</span>
          </div>

          <div className="progress-box adjusted">
            <span>Classificação</span>
            <span>45°</span>
          </div>
        </div>
      </div>

      {/* ==================== CONTEÚDO PRINCIPAL ==================== */}
      <div className="main-row">

        {/* ======== TRILHA DE APRENDIZAGEM ======== */}
        <div className="learning-path">
          <h3>Trilha de Apredizagem</h3>

          {/* === SOFT SKILLS === */}
          <div className="path-card">
            <span className="icon">🧠</span>
            <div>
              <h4>Soft Skills</h4>
              <p>Desenvolver inteligência emocional, liderança e empatia.</p>
              <div className="progress-bar green" style={{ width: "100%" }} />
            </div>
          </div>

          {/* === HABILIDADES TÉCNICAS – AGORA EM LARANJA === */}
          <div className="path-card">
            <span className="icon">💻</span>
            <div>
              <h4>Habilidades Técnicas</h4>
              <p>Dominar habilidades e ferramentas digitais.</p>

              <div className="progress-bar">
                <div className="progress orange" style={{ width: "60%" }}></div>
              </div>

            </div>
          </div>

          {/* === TRILHA DE CONHECIMENTO === */}
          <div className="path-card">
            <span className="icon">📘</span>
            <div>
              <h4>Trilha de Conhecimento</h4>
              <p>Aprimorar sua formação técnica e prática.</p>
              <div className="progress-bar gray" style={{ width: "30%" }} />
            </div>
          </div>
        </div>

        {/* ======== COLUNA DIREITA (CARDS) ======== */}
        <div className="side-column">

          {/* ======== CONQUISTAS ======== */}
          <div className="side-box">
            <h3>Conquistas</h3>

            <div className="conquista-item desbloqueado">
              <span className="icon">🚀</span>
              <div>
                <strong>Primeiro Passo</strong>
                <p>Desbloqueado</p>
              </div>
            </div>

            <div className="conquista-item desbloqueado">
              <span className="icon">⭐</span>
              <div>
                <strong>Modelo de Caminho</strong>
                <p>Desbloqueado</p>
              </div>
            </div>

            <div className="conquista-item bloqueado">
              <span className="icon">🎭</span>
              <div>
                <strong>Protagonista</strong>
                <p>Bloqueada</p>
              </div>
            </div>
          </div>

          {/* ======== EVENTOS ======== */}
          <div className="side-box">
            <h3>Próximos eventos</h3>

            <div className="evento-item">
              <strong>Roda de Conversa</strong>
              <p>Quinta, 14h</p>
            </div>

            <div className="evento-item">
              <strong>Workshop de Design</strong>
              <p>Sábado, 10h</p>
            </div>

            <div className="evento-item">
              <strong>Hackathon Pedagógico</strong>
              <p>15 de Novembro</p>
            </div>
          </div>

          {/* ======== DICA ======== */}
          <div className="side-box dica-container">
            <div className="dica-titulo">
              <span className="icone-lampada">💡</span>
              <h3>Dica</h3>
            </div>

            <p className="dica-texto">
              Complete todas as lições para desbloquear a área de criação do seu projeto vocacional.
            </p>
          </div>

        </div>
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className="dashboard-footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Faz Teu Nome</h4>
            <p>
              Uma plataforma feita para transformar o futuro dos estudantes através da
              tecnologia, trilhas e autodesenvolvimento.
            </p>
          </div>

          <div className="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li>Início</li>
              <li>Meu Perfil</li>
              <li>Trilhas</li>
              <li>Comunidade</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>Eventos</li>
              <li>Projetos</li>
              <li>Materiais</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Igarassu</h4>
            <p>Projeto educacional apoiado pela Secretaria de Educação.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Faz Teu Nome — Todos os direitos reservados.</span>

          <div className="footer-links">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Suporte</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
