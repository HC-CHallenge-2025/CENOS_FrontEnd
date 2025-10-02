import React, { useState, useMemo } from 'react';
import PacienteCard from '../../components/PacienteCard/PacienteCard';
import CadastroPacienteForm from '../../components/CadastroPacienteForm/CadastroPacienteForm'; // Importe o formulário
import FiltrosPacientes from '../../components/FiltrosPacientes/FiltrosPacientes';
import type { PatientFilters } from '../../components/PatientFilter/PatientFilter';
import { MOCK_PATIENTS } from '../../data/mockPatients';
import './Pacientes.css'; 

// Define os modos de visualização
type ViewMode = 'listagem' | 'cadastro';

const initialFilters: PatientFilters = {
    patientId: '',
    patientName: '',
    scoreFilter: 'Todos',
};

const Pacientes: React.FC = () => {
    // 🎯 Estado para controlar qual tela está ativa 🎯
    const [viewMode, setViewMode] = useState<ViewMode>('listagem'); 
    
    // Estado e lógica de filtros (mantidos)
    const [filters, setFilters] = useState<PatientFilters>(initialFilters);
    
    const filteredPatients = useMemo(() => {
        // ... (Sua lógica de filtragem de MOCK_PATIENTS) ...
        let results = MOCK_PATIENTS;
        const { patientId, patientName, scoreFilter } = filters;

        // 1. Filtrar por ID
        if (patientId) {
            results = results.filter(p => 
                p.patientId.toLowerCase().includes(patientId.toLowerCase())
            );
        }

        // 2. Filtrar por Nome
        if (patientName) {
            const search = patientName.toLowerCase();
            results = results.filter(p => 
                p.firstName.toLowerCase().includes(search) || 
                p.lastName.toLowerCase().includes(search)
            );
        }

        // 3. Filtrar por Avaliação (Score)
        if (scoreFilter !== 'Todos') {
            results = results.filter(p => {
                if (scoreFilter === 'Baixa') return p.score >= 0 && p.score <= 4;
                if (scoreFilter === 'Média') return p.score >= 5 && p.score <= 7;
                if (scoreFilter === 'Alta') return p.score >= 8 && p.score <= 10;
                return true;
            });
        }

        return results;
    }, [filters]);

    // Lógica para alternar entre listagem e cadastro
    const handleToggleView = () => {
        setViewMode(viewMode === 'listagem' ? 'cadastro' : 'listagem');
    };

    // --- RENDERIZAÇÃO CONDICIONAL ---
    if (viewMode === 'cadastro') {
        // 🎯 Modo Cadastro: Exibe APENAS o formulário 🎯
        return (
            <div className="patients-page-container">
                 {/* Botão de Voltar à Lista */}
                <button 
                    onClick={() => setViewMode('listagem')}
                    className="back-to-list-button"
                >
                    &larr; Voltar para a lista
                </button>
                <CadastroPacienteForm />
            </div>
        );
    }

    // Modo Listagem (viewMode === 'listagem')
    return (
        <div className="patients-page-container">
            {/* 1. Componente de Filtros */}
            <FiltrosPacientes onFilterChange={setFilters} currentFilters={filters} />
            
            <div className="patients-header-bar">
                <h1 className="page-title">
                    <span role="img" aria-label="pacientes">👥</span> Pacientes
                </h1>
                
                <div className="header-actions">
                    <button className="report-button">Baixar relatório</button>
                    {/* Botão Cadastrar: Alterna o estado de viewMode */}
                    <button 
                        onClick={handleToggleView}
                        className="cadastrar-button"
                    >
                        Cadastrar Novo
                    </button>
                    <button className="view-all-button">Ver todas</button>
                </div>
            </div>

            {/* 2. Container que exibirá os cartões */}
            <div className="patient-cards-grid">
                {filteredPatients.length > 0 ? (
                    filteredPatients.map(patient => (
                        <PacienteCard key={patient.patientId} patient={patient} />
                    ))
                ) : (
                    <p className="no-results">Nenhum paciente encontrado com os filtros aplicados.</p>
                )}
            </div>
        </div>
    );
};

export default Pacientes;