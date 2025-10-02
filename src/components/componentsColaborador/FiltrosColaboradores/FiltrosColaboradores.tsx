import React from 'react';
import type { CollaboratorFilters } from '../ColaboradorFilterTypes/ColaboradorFilterTypes';
import './FiltrosColaboradores.css'; // Importe o CSS para os filtros

interface FiltrosColaboradoresProps {
    onFilterChange: (filters: CollaboratorFilters) => void;
    currentFilters: CollaboratorFilters;
    siglaOptions: string[];
}

const FiltrosColaboradores: React.FC<FiltrosColaboradoresProps> = ({ onFilterChange, currentFilters, siglaOptions }) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        onFilterChange({
            ...currentFilters,
            [name]: value,
        } as CollaboratorFilters);
    };

    return (
        <div className="filters-container">
            <h2 className="filters-title">
                <span role="img" aria-label="filtro">Y</span> Filtros:
            </h2>
            
            {/* Filtro por ID Profissional */}
            <div className="filter-group">
                <input
                    type="text"
                    name="professionalId"
                    placeholder="IDP (ID Profissional)"
                    value={currentFilters.professionalId}
                    onChange={handleChange}
                    className="filter-input"
                />
                <span className="search-icon">🔍</span>
            </div>
            
            {/* Filtro por Nome */}
            <div className="filter-group">
                <input
                    type="text"
                    name="collaboratorName"
                    placeholder="Nome colaborador"
                    value={currentFilters.collaboratorName}
                    onChange={handleChange}
                    className="filter-input"
                />
                <span className="search-icon">🔍</span>
            </div>
            
            {/* Filtro por Tipo Colaborador (Sigla) */}
            <div className="filter-group select-group">
                <select
                    name="siglaFilter"
                    value={currentFilters.siglaFilter}
                    onChange={handleChange}
                    className="filter-select"
                >
                    <option value="Todos">Tipo Colaborador</option>
                    {siglaOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FiltrosColaboradores;