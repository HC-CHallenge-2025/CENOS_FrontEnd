import React, { useState, useMemo } from 'react';
import ColaboradorCard from '../ColaboradorCard/ColaboradorCard';
import FiltrosColaboradores from '../FiltrosColaboradores/FiltrosColaboradores';
import { MOCK_COLLABORATORS } from '../../../data/mockCollaborators';
import type { CollaboratorFilters } from '../ColaboradorFilterTypes/ColaboradorFilterTypes';
import './Colaboradores.css'; 

const initialFilters: CollaboratorFilters = {
    professionalId: '',
    collaboratorName: '',
    siglaFilter: 'Todos',
};

// Opções de filtro de sigla
const COUNCIL_SIGLAS_OPTIONS = ['CRM', 'CRTR', 'CFM', 'CRP', 'COREN', 'Nenhuma'];

const Colaboradores: React.FC = () => {
    const [filters, setFilters] = useState<CollaboratorFilters>(initialFilters);
    
    // --- LÓGICA DE FILTRAGEM ---
    const filteredCollaborators = useMemo(() => {
        let results = MOCK_COLLABORATORS;
        const { professionalId, collaboratorName, siglaFilter } = filters;

        // 1. Filtrar por ID Profissional
        if (professionalId) {
            results = results.filter(c => 
                c.collaboratorId.toLowerCase().includes(professionalId.toLowerCase())
            );
        }

        // 2. Filtrar por Nome
        if (collaboratorName) {
            const search = collaboratorName.toLowerCase();
            results = results.filter(c => 
                c.firstName.toLowerCase().includes(search) || 
                c.lastName.toLowerCase().includes(search)
            );
        }

        // 3. Filtrar por Sigla (Tipo Colaborador)
        if (siglaFilter !== 'Todos') {
            results = results.filter(c => c.councilSigla === siglaFilter);
        }

        return results;
    }, [filters]);

    return (
        <div className="collaborators-page-container">
            {/* 1. Componente de Filtros */}
            <FiltrosColaboradores 
                onFilterChange={setFilters} 
                currentFilters={filters} 
                siglaOptions={COUNCIL_SIGLAS_OPTIONS}
            />
            
            <div className="collaborators-header-bar">
                <h1 className="page-title">
                    <span role="img" aria-label="colaborador">🩺</span> Colaborador
                </h1>
                
                <div className="header-actions">
                    <button className="report-button">Baixar relatório</button>
                    <button className="view-all-button">Ver todas</button>
                </div>
            </div>

            {/* 2. Container que exibirá os cartões */}
            <div className="collaborator-cards-grid">
                {filteredCollaborators.length > 0 ? (
                    filteredCollaborators.map(collaborator => (
                        <ColaboradorCard key={collaborator.collaboratorId} collaborator={collaborator} />
                    ))
                ) : (
                    <p className="no-results">Nenhum colaborador encontrado com os filtros aplicados.</p>
                )}
            </div>
        </div>
    );
};

export default Colaboradores;