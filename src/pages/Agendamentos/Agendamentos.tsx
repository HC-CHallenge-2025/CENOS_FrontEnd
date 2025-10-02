import React, { useState, useMemo } from 'react';
import AgendamentoCard from '../../components/componentsAgendamento/AgendamentoCard/AgendamentoCard'
import FiltrosAgendamentos from '../../components/componentsAgendamento/FiltrosAgendamentos/FiltrosAgendamentos';
import { MOCK_APPOINTMENTS } from '../../data/mockAppointments';
import type { AppointmentFilters } from '../../components/componentsAgendamento/AppointmentFilterTypes/AppointmentFilterTypes';
import './Agendamentos.css'; 
import CadastroAgendamentoForm from '../../components/componentsAgendamento/CadastroAgendamentoForm/CadastroAgendamentoForm'


// Definições de Estado e Tipos
type ViewMode = 'listagem' | 'cadastro'; // O tipo agora será usado

const initialFilters: AppointmentFilters = {
    statusFilter: 'Todos',
    typeFilter: 'Todos',
    dateFilter: 'Hoje',
};

const Agendamentos: React.FC = () => {
    // 🎯 CORRIGIDO: O estado agora está sendo usado na renderização condicional
    const [viewMode, setViewMode] = useState<ViewMode>('listagem'); 
    const [filters, setFilters] = useState<AppointmentFilters>(initialFilters);
    
    // --- LÓGICA DE FILTRAGEM ---
    const filteredAppointments = useMemo(() => {
        let results = MOCK_APPOINTMENTS;
        const { statusFilter, typeFilter, dateFilter } = filters;
        
        if (statusFilter !== 'Todos') {
            results = results.filter(a => a.status === statusFilter);
        }
        if (typeFilter !== 'Todos') {
            results = results.filter(a => a.type === typeFilter);
        }

        const todayMock = '2025-12-05'; 
        if (dateFilter === 'Hoje') {
            results = results.filter(a => a.date === todayMock);
        }

        return results;
    }, [filters]);

    // --- RENDERIZAÇÃO CONDICIONAL PRINCIPAL ---

    // 🎯 MODO CADASTRO: Retorna APENAS o formulário e o botão Voltar 🎯
    if (viewMode === 'cadastro') {
        return (
            <div className="appointments-page-container">
                <button 
                    onClick={() => setViewMode('listagem')}
                    className="back-to-list-button"
                >
                    &larr; Voltar para a lista
                </button>
                <CadastroAgendamentoForm />
            </div>
        );
    }
    
    // MODO LISTAGEM (viewMode === 'listagem')
    return (
        <div className="appointments-page-container">
            
            {/* 1. Componente de Filtros */}
            <FiltrosAgendamentos onFilterChange={setFilters} currentFilters={filters} />
            
            {/* Header com Data Centralizada (Conforme a Imagem) */}
            <div className="appointment-date-header">
                <h2>Hoje</h2>
                <p className="date-time">13/12/2025 (08:00 às 18:00)</p>
            </div>
            
            <div className="appointments-list-header">
                <h1>🗓️ Próximos Agendamentos</h1>
                <div className="header-actions">
                    <button className="report-button">Baixar relatório</button>
                    {/* Botão Cadastrar Novo: Usa setViewMode para mudar a tela */}
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
            <div className="appointment-cards-grid">
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map(appointment => (
                        <AgendamentoCard key={appointment.appointmentId} appointment={appointment} />
                    ))
                ) : (
                    <p className="no-results">Nenhum agendamento encontrado com os filtros aplicados.</p>
                )}
            </div>
        </div>
    );
};

export default Agendamentos;