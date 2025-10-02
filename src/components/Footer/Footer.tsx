import React from 'react';
import './Footer.css'; // Importe o arquivo CSS que criamos
import { Link } from 'react-router-dom';


// NOTA: Se você tiver definido estas constantes em 'src/images.ts' ou similar, ajuste a importação.
import logoHC from '../images/LogoHC.png';
import logoIMREA from '../images/LogoIMREA.png'; // Caminho ajustado para um exemplo

const Footer: React.FC = () => {
    return (
    <footer>
        <section className="footer-content">
        <div className="footer-logos">
            {/* Logo HC */}
            <a href="https://www.hc.fm.usp.br/" target="_blank" rel="noopener noreferrer">
            <img src={logoHC} alt="Logo Hospital das Clínicas FMUSP" />
            </a>
            {/* Logo IMREA */}
            <a href="https://www.imrea.hc.fm.usp.br/" target="_blank" rel="noopener noreferrer">
            <img src={logoIMREA} alt="Logo Instituto de Medicina Física e Reabilitação" />
            </a>
        </div>

        <div className="footer-links">
            {/* Rotas Auxiliares (AuxRouterConfig) */}
            {/* Caminhos definidos no routes.ts: /pontos-de-atendimento, /suporte-e-ajuda, /equipe-cenos */}
            <Link to="/home">Home</Link>
            <Link to="/pontos-de-atendimento">Pontos de atendimento e contatos</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/suporte-e-ajuda">Ajuda</Link>
            <Link to="/equipe-cenos">Conheça a Equipe Cenos</Link>
            
        </div>
        </section>

        <div className="footer-bottom">
        <p>
            Rede de Reabilitação Lucy Montoro &amp; HCFmusp Copyright ©2025, Todos os direitos reservados
        </p>
        <a href="#" className="cookie-button">Definições de cookies</a>
        </div>
    </footer>
    );
};

export default Footer;