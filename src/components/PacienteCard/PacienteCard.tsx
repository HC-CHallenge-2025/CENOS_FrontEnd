import React from 'react';
import type { Patient } from '../../data/patientTypes';
import './PacienteCard.css'; // Importe os estilos

interface PatientCardProps {
    patient: Patient;
}

const PacienteCard: React.FC<PatientCardProps> = ({ patient }) => {
    // Lógica para determinar a cor da nota (Score)
    const getScoreClass = (score: number): string => {
        if (score <= 4) return 'score-baixa'; // Ex: Vermelho (0-4)
        if (score <= 7) return 'score-media'; // Ex: Laranja (5-7)
        return 'score-alta'; // Ex: Verde (8-10)
    };

    const scoreClass = getScoreClass(patient.score);

    // Lógica para exibir informações de contato apenas se disponíveis
    const hasContactInfo = patient.phoneNumber && patient.email;
    const isEditing = patient.patientId === 'P6329874'; // Simulação do card Editado

    return (
        <div className={`patient-card ${isEditing ? 'card-expanded' : ''}`}>
            <div className="card-header">
                <div className="info-group">
                    <span className="info-label">ID:</span> {patient.patientId} |
                    <span className="info-label gender-label">{patient.gender.substring(0, 4)}</span>
                </div>
                <div className={`patient-score ${scoreClass}`}>
                    Nota: {patient.score.toString().padStart(2, '0')}
                </div>
            </div>

            <div className="card-body">
                <p className="patient-name-info">
                    <span role="img" aria-label="paciente">👤</span> Paciente: {patient.firstName} {patient.lastName}
                </p>
                {patient.tutorName && (
                    <p className="tutor-name-info">
                        <span role="img" aria-label="tutor">👥</span> Tutor: {patient.tutorName}
                    </p>
                )}
                <p className="obs-info">
                    Obs: {patient.observation || 'Nenhuma observação registrada.'}
                </p>
            </div>
            
            <div className="card-actions">
                <button className="details-button">Detalhes</button>
                {isEditing && (
                    <button className="edit-button">Editar</button>
                )}
            </div>

            {/* Expansão do Card (como no exemplo do P6329874 na imagem) */}
            {hasContactInfo && isEditing && (
                <div className="card-expansion">
                    <p>📞 ({patient.ddd}) {patient.phoneNumber}</p>
                    <p>📧 {patient.email}</p>
                    <p className="date-registered">Cadastrado em 07/06/2025</p>
                </div>
            )}
        </div>
    );
};

export default PacienteCard;

// Você precisará criar o arquivo 'PacienteCard.css' com os estilos de layout.