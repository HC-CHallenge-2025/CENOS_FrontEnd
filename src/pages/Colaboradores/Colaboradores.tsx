import React, { useState, useMemo } from 'react';
import { MOCK_COLLABORATORS } from '../../data/mockCollaborators';
import type { Collaborator, CollaboratorFilters } from '../../components/componentsColaborador/ColaboradorFilterTypes/ColaboradorFilterTypes'; 

import ColaboradorCard from '../../components/componentsColaborador/ColaboradorCard/ColaboradorCard';
import FiltrosColaboradores from '../../components/componentsColaborador/FiltrosColaboradores/FiltrosColaboradores';
import CadastroColaboradorForm from '../../components/componentsColaborador/CadastroColaboradorForm/CadastroColaboradorForm';

import './Colaboradores.css'; // Importe os estilos

// Definições de Estado e Tipos
type ViewMode = 'listagem' | 'cadastro';

const initialFilters: CollaboratorFilters = {
    professionalId: '',
    collaboratorName: '',
    siglaFilter: 'Todos', // O valor inicial deve ser um valor de controle como 'Todos'
};

const COUNCIL_SIGLAS_OPTIONS = ['CRM', 'CRTR', 'CFM', 'CRP', 'COREN', 'Nenhuma'];

const Colaboradores: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('listagem'); 
    const [filters, setFilters] = useState<CollaboratorFilters>(initialFilters);
    
    // --- LÓGICA DE FILTRAGEM ---
    const filteredCollaborators = useMemo(() => {
        
        let results: Collaborator[] = MOCK_COLLABORATORS as Collaborator[]; 
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
            // O TS precisa de garantias de que o siglaFilter é um dos literais válidos.
            // Para simplificar, comparamos o valor do filtro diretamente.
            results = results.filter(c => c.councilSigla === siglaFilter);
        }

        return results;
    }, [filters]);

    // --- RENDERIZAÇÃO CONDICIONAL ---

    // MODO CADASTRO: Retorna APENAS o formulário
    if (viewMode === 'cadastro') {
        return (
            <div className="collaborators-page-container">
                <button 
                    onClick={() => setViewMode('listagem')}
                    className="back-to-list-button"
                >
                    &larr; Voltar para a lista
                </button>
                <CadastroColaboradorForm />
            </div>
        );
    }
    
    // MODO LISTAGEM
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
                    {/* Botão Cadastrar Novo: Alterna o estado para 'cadastro' */}
                    <button 
                        onClick={() => setViewMode('cadastro')}
                        className="cadastrar-button"
                    >
                        Cadastrar Novo
                    </button>
                    <button className="view-all-button">Ver todas</button>
                </div>
            </div>

            {/* 2. Container que exibirá os cartões */}
            <div className="collaborator-cards-grid">
                {filteredCollaborators.length > 0 ? (
                    // O ColaboradorCard agora recebe o tipo Collaborator corretamente
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