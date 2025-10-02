import React, { useState, useMemo } from 'react';
import PacienteCard from '../PacienteCard/PacienteCard';
import { MOCK_PATIENTS } from '../../data/mockPatients'; // Seus dados
import FiltrosPacientes from '../FiltrosPacientes/FiltrosPacientes';
import type { PatientFilters } from '../PatientFilter/PatientFilter';
import './InfosPaciente.css'; 

// Estado inicial dos filtros
const initialFilters: PatientFilters = {
    patientId: '',
    patientName: '',
    scoreFilter: 'Todos',
};

const InfosPacientes: React.FC = () => {
    const [filters, setFilters] = useState<PatientFilters>(initialFilters);
    
    // --- LÓGICA DE FILTRAGEM ---
    const filteredPatients = useMemo(() => {
        let results = MOCK_PATIENTS;
        const { patientId, patientName, scoreFilter } = filters;

        // 1. Filtrar por ID (busca exata)
        if (patientId) {
            results = results.filter(p => 
                p.patientId.toLowerCase().includes(patientId.toLowerCase())
            );
        }

        // 2. Filtrar por Nome (busca em nome ou sobrenome)
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
    }, [filters]); // Recalcula sempre que os filtros mudam

    return (
        <div className="patients-page-container">
            {/* Componente de Filtros (Será criado abaixo) */}
            <FiltrosPacientes onFilterChange={setFilters} currentFilters={filters} />
            
            <div className="patients-header-bar">
                <h1 className="page-title">
                    <span role="img" aria-label="pacientes">👥</span> Pacientes
                </h1>
                
                <div className="header-actions">
                    <button className="report-button">Baixar relatório</button>
                    <button className="view-all-button">Ver todas</button>
                </div>
            </div>

            {/* Container que exibirá os cartões */}
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

export default InfosPacientes;