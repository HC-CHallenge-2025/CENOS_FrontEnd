import React from 'react';
import type { PatientFilters } from '../PatientFilter/PatientFilter';
import './FiltrosPacientes.css';

interface FiltrosPacientesProps {
    onFilterChange: (filters: PatientFilters) => void;
    currentFilters: PatientFilters;
}

const scoreOptions = ['Todos', 'Baixa', 'Média', 'Alta'] as const;

const FiltrosPacientes: React.FC<FiltrosPacientesProps> = ({ onFilterChange, currentFilters }) => {
    
    // Handler genérico para atualizar o estado de filtro no componente pai
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        onFilterChange({
            ...currentFilters,
            [name]: value,
        } as PatientFilters); // O cast é necessário devido à natureza dinâmica do name/value
    };

    return (
        <div className="filters-container">
            <h2 className="filters-title">
                <span role="img" aria-label="filtro">Y</span> Filtros:
            </h2>
            
            {/* Filtro por ID */}
            <div className="filter-group">
                <input
                    type="text"
                    name="patientId"
                    placeholder="ID paciente"
                    value={currentFilters.patientId}
                    onChange={handleChange}
                    className="filter-input"
                />
                <span className="search-icon">🔍</span>
            </div>
            
            {/* Filtro por Nome */}
            <div className="filter-group">
                <input
                    type="text"
                    name="patientName"
                    placeholder="Nome paciente"
                    value={currentFilters.patientName}
                    onChange={handleChange}
                    className="filter-input"
                />
                <span className="search-icon">🔍</span>
            </div>
            
            {/* Filtro por Avaliação (Select) */}
            <div className="filter-group select-group">
                <select
                    name="scoreFilter"
                    value={currentFilters.scoreFilter}
                    onChange={handleChange}
                    className="filter-select"
                >
                    {scoreOptions.map(option => (
                        <option key={option} value={option}>{option === 'Todos' ? 'Avaliação' : option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FiltrosPacientes;