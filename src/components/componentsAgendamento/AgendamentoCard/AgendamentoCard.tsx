import React from 'react';
import type { Appointment } from '../../../data/appointmentTypes';
import './AgendamentoCard.css'; 

interface AgendamentoCardProps {
    appointment: Appointment;
}

// Lógica para cor condicional do STATUS
const getStatusClass = (status: Appointment['status']): string => {
    switch (status) {
        case 'Confirmado': return 'status-confirmado'; // Verde
        case 'Aguardando Confirmação': return 'status-aguardando'; // Amarelo/Laranja
        case 'Cancelado': return 'status-cancelado'; // Vermelho/Cinza
        default: return 'status-default';
    }
};

// Lógica para cor condicional do TIPO (Usando o padrão da imagem)
const getTypeClass = (type: Appointment['type']): string => {
    switch (type) {
        case 'On-line': return 'type-online'; // Verde Claro
        case 'Exame': return 'type-exame'; // Amarelo Claro
        case 'Presencial': return 'type-presencial'; // Azul Claro (se houver)
        default: return 'type-default';
    }
};

const AgendamentoCard: React.FC<AgendamentoCardProps> = ({ appointment }) => {
    
    const statusClass = getStatusClass(appointment.status);
    const typeClass = getTypeClass(appointment.type);
    
    // Simulação do nome do paciente/colaborador (Em um app real, faria um join com as IDs)
    const patientName = 'Paciente: ' + (appointment.patientId === 'P11' ? 'Ana Paula Macedo' : 'Luana P. Graça');
    const collaboratorName = 'Com: ' + (appointment.collaboratorId === 'D6632100' ? 'Tec Bruna B. Z.' : 'Psc Luana P. Graça');
    
    // Formata a data (simulação simples)
    const formattedDate = appointment.date.split('-').reverse().join('/'); // 2025-12-05 -> 05/12/2025

    return (
        <div className="agendamento-card">
            
            <div className="card-tags">
                <span className={`tag status-tag ${statusClass}`}>{appointment.status}</span>
                <span className={`tag type-tag ${typeClass}`}>{appointment.type}</span>
            </div>

            <button className="details-button">Detalhes</button>
            
            <div className="card-datetime">
                🗓️ {formattedDate} às {appointment.time}
            </div>

            <div className="card-info">
                <p className="patient-info">👤 {patientName}</p>
                <p className="collaborator-info">🩺 {collaboratorName}</p>
                <p className="local-info">📍 {appointment.local}</p>
            </div>
            
            <div className="card-description">
                {appointment.observations}
            </div>
            
        </div>
    );
};

export default AgendamentoCard;