import React from 'react';
import type { Collaborator } from '../ColaboradorFilterTypes/ColaboradorFilterTypes';
import './ColaboradorCard.css'; 

interface ColaboradorCardProps {
    collaborator: Collaborator;
    isExpanded?: boolean; // Para simular o card completo da imagem
}

const ColaboradorCard: React.FC<ColaboradorCardProps> = ({ collaborator, isExpanded = false }) => {
    
    // Simula a lógica de edição/expansão
    const showExpandedDetails = isExpanded || collaborator.collaboratorId === 'D6329878';

    // Formata o número do conselho com a sigla e o estado (simulação do estado)
    const councilInfo = collaborator.councilSigla !== 'Nenhuma' 
        ? `${collaborator.councilSigla} ${collaborator.councilNumber} / SP` 
        : 'N/A';

    return (
        <div className={`colaborador-card ${showExpandedDetails ? 'card-expanded' : ''}`}>
            <div className="card-header">
                <div className="info-group">
                    <span className="info-label">IDP:</span> {collaborator.collaboratorId} |
                    <span className="info-label gender-label">{collaborator.gender.substring(0, 4)}</span>
                </div>
                <button className="details-button">Detalhes</button>
            </div>

            <div className="card-body">
                <p className="collaborator-name-info">
                    <span role="img" aria-label="médico">🧑‍⚕️</span> {collaborator.firstName} {collaborator.lastName}
                </p>
                
                <p className="council-info">
                    <span role="img" aria-label="conselho">📄</span> {councilInfo}
                </p>

                <p className="obs-info">
                    Obs: {collaborator.specialty}
                </p>
            </div>
            
            {/* Expansão do Card (Detalhes de Contato) */}
            {showExpandedDetails && (
                <div className="card-expansion">
                    <p>📞 ({collaborator.ddd}) {collaborator.phoneNumber}</p>
                    <p className="idp-info">ID: {collaborator.collaboratorId}</p>
                    <p>📧 {collaborator.email}</p>
                    <p className="date-registered">Cadastrado em 07/06/2025</p>
                    <button className="edit-button">Editar</button>
                </div>
            )}
        </div>
    );
};

export default ColaboradorCard;