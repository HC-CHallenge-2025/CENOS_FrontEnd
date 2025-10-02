import React from "react";
import './PontosDeAtendimentoEContato.css';


const PontosDeAtendimentoEContato: React.FC = () =>{
        return (
            <>
                <header className="main-header">
                    
                    <div className="user-info">
                        <h1>Pontos de atendimento e contato</h1>
                        <p>Conheça os locais para atendimento</p>
                    </div>
                    
                
                    <div className="header-dynamic-text">
                        <p>Suas consultas e exames estão organizados aqui no Cenos!</p>
                    </div>
                </header>

                <div className="page-content">
                    <h2>Conteúdo para Pontos de atendimento</h2>
                    {/* Seu Dashboard e filtros viriam aqui */}
                    <p>Este é o conteúdo principal da rota /pontos-de-atendimento.</p>
                </div>
            </>
    );
}

export default PontosDeAtendimentoEContato;