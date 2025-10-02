import React from 'react';
import { APPOINTMENT_STATUS, APPOINTMENT_TYPES } from '../../../data/appointmentTypes';
import type { AppointmentFilters } from '../AppointmentFilterTypes/AppointmentFilterTypes';
import './FiltrosAgendamentos.css';

interface FiltrosAgendamentosProps {
    onFilterChange: (filters: AppointmentFilters) => void;
    currentFilters: AppointmentFilters;
}

// Opções de Data (Customizadas para o Header)
const DATE_OPTIONS = ['Hoje', 'Amanhã', 'Próximos 7 Dias'];

const FiltrosAgendamentos: React.FC<FiltrosAgendamentosProps> = ({ onFilterChange, currentFilters }) => {
    
    // Cria as listas para o Select, adicionando a opção 'Todos'
    const statusOptions = ['Todos', ...APPOINTMENT_STATUS];
    const typeOptions = ['Todos', ...APPOINTMENT_TYPES];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        onFilterChange({
            ...currentFilters,
            [name]: value,
        } as AppointmentFilters);
    };

    return (
        <div className="filters-container">
            <h2 className="filters-title">
                <span role="img" aria-label="filtro">Y</span> Filtros:
            </h2>
            
            {/* Filtro por Status */}
            <div className="filter-group">
                <select
                    name="statusFilter"
                    value={currentFilters.statusFilter}
                    onChange={handleChange}
                    className="filter-select"
                >
                    {statusOptions.map(option => (
                        <option key={option} value={option}>{option === 'Todos' ? 'Todos os status' : option}</option>
                    ))}
                </select>
            </div>
            
            {/* Filtro por Tipo */}
            <div className="filter-group">
                <select
                    name="typeFilter"
                    value={currentFilters.typeFilter}
                    onChange={handleChange}
                    className="filter-select"
                >
                    {typeOptions.map(option => (
                        <option key={option} value={option}>{option === 'Todos' ? 'Todos os tipos' : option}</option>
                    ))}
                </select>
            </div>
            
            {/* Filtro por Data */}
            <div className="filter-group">
                <select
                    name="dateFilter"
                    value={currentFilters.dateFilter}
                    onChange={handleChange}
                    className="filter-select"
                >
                    {DATE_OPTIONS.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FiltrosAgendamentos;