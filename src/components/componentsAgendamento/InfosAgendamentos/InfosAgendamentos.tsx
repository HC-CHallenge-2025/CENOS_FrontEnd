import React, { useState, useMemo } from 'react';
import AgendamentoCard from '.././AgendamentoCard/AgendamentoCard';
import FiltrosAgendamentos from '../FiltrosAgendamentos/FiltrosAgendamentos';
import { MOCK_APPOINTMENTS } from '../../../data/mockAppointments';
import type { AppointmentFilters } from '../AppointmentFilterTypes/AppointmentFilterTypes';
import './Agendamentos.css'; 
import "./InfosAgendamentos.css"

const initialFilters: AppointmentFilters = {
    statusFilter: 'Todos',
    typeFilter: 'Todos',
    dateFilter: 'Hoje',
};

const InfosAgendamentos: React.FC = () => {
    const [filters, setFilters] = useState<AppointmentFilters>(initialFilters);
    
    // --- LÓGICA DE FILTRAGEM ---
    const filteredAppointments = useMemo(() => {
        let results = MOCK_APPOINTMENTS;
        const { statusFilter, typeFilter, dateFilter } = filters;
        
        // --- 1. FILTRO POR STATUS ---
        if (statusFilter !== 'Todos') {
            results = results.filter(a => a.status === statusFilter);
        }

        // --- 2. FILTRO POR TIPO ---
        if (typeFilter !== 'Todos') {
            results = results.filter(a => a.type === typeFilter);
        }

        // --- 3. FILTRO POR DATA (SIMPLIFICADO) ---
        // Aqui a lógica real de data seria complexa, faremos uma simulação.
        // O MOCK DATA usa '2025-12-05' e '2025-12-22'
        const todayMock = '2025-12-05'; 
        
        if (dateFilter === 'Hoje') {
            results = results.filter(a => a.date === todayMock);
        }
        // Nota: A lógica de 'Amanhã' e 'Próximos 7 Dias' seria implementada com bibliotecas de data como date-fns ou moment.js

        return results;
    }, [filters]);

    return (
        <div className="appointments-page-container">
            
            {/* 1. Componente de Filtros */}
            <FiltrosAgendamentos onFilterChange={setFilters} currentFilters={filters} />
            
            {/* Header com Data Centralizada */}
            <div className="appointment-date-header">
                <h2>Hoje</h2>
                <p className="date-time">13/12/2025 (08:00 às 18:00)</p>
            </div>
            
            <div className="appointments-list-header">
                <h1>🗓️ Próximos Agendamentos</h1>
                <div className="header-actions">
                    <button className="report-button">Baixar relatório</button>
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

export default InfosAgendamentos;