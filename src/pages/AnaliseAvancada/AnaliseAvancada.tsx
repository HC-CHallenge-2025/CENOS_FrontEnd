import React from 'react';
import DashboardCard from '../../components/componentsAnaliseAvancada/dashboardCard/DashboardCard';
import './AnaliseAvancada.css'; // Importe os estilos da página


const CalendarIcon = () => <span>🗓️</span>;
const CheckIcon = () => <span>✅</span>;
const RedXIcon = () => <span>❌</span>;
const PeopleIcon = () => <span>🧑‍🤝‍🧑</span>;
const NoteIcon = () => <span>📝</span>;
const ChartIcon = () => <span>📊</span>;


const AnaliseAvancada: React.FC = () => {
    return (
        <div className="analise-avancada-page-container">
            
            {/* Header de Data (Fixo) */}
            <div className="dashboard-header">
                <h1 className="header-title">Hoje</h1>
                <p className="header-subtitle">12/12/2025 (08:00 às 18:00)</p>
            </div>
            
            {/* --- GRID DE CARDS --- */}
            <section className="dashboard-grid">
                
                {/* LINHA 1 */}
                <DashboardCard 
                    title="Agendamentos"
                    value="82"
                    subtitle="para hoje"
                    icon={<CalendarIcon />}
                    colorClass="blue" // Azul Claro
                />
                <DashboardCard 
                    title="Agendamentos confirmados"
                    value="78"
                    subtitle="para hoje"
                    icon={<CheckIcon />}
                    colorClass="green" // Verde Pastel
                />
                <DashboardCard 
                    title="Consultas On-line"
                    value="50"
                    subtitle="para hoje"
                    icon={<PeopleIcon />}
                    colorClass="purple" // Roxo Claro
                />
                <DashboardCard 
                    title="Exames"
                    value="24"
                    subtitle="para hoje"
                    icon={<NoteIcon />}
                    colorClass="purple-light" // Roxo Pastel (ou roxo, ajuste no CSS)
                />

                {/* LINHA 2 */}
                <DashboardCard 
                    title="Agendamentos não confirmados"
                    value="4"
                    subtitle="para hoje"
                    icon={<CalendarIcon />}
                    colorClass="orange" // Laranja
                />
                <DashboardCard 
                    title="Faltas"
                    value="2"
                    subtitle="em atendimentos confirmados"
                    icon={<RedXIcon />}
                    colorClass="red" // Vermelho
                />
                <DashboardCard 
                    title="Consultas Presenciais"
                    value="8"
                    subtitle="para hoje"
                    icon={<PeopleIcon />}
                    colorClass="green-light" // Verde Pastel
                />
                <DashboardCard 
                    title="Progressão"
                    value="80%"
                    subtitle="do dia"
                    icon={<ChartIcon />}
                    colorClass="blue-light" // Azul Pastel
                />
            </section>
        </div>
    );
};

export default AnaliseAvancada;