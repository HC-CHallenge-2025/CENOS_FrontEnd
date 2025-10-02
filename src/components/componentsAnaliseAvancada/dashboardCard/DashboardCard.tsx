import React  from 'react';
import type { ReactNode }  from 'react';
import './DashboardCard.css'; // Importe os estilos aqui

interface DashboardCardProps {
    title: string;
    value: string;
    subtitle: string;
    // O ícone é passado como um componente React ou HTML puro
    icon: ReactNode; 
    // Cor da caixa e do texto (ex: 'green', 'blue', 'red')
    colorClass: 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'purple-light' |'green-light'|'blue-light'; 
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, subtitle, icon, colorClass }) => {
    return (
        <div className="dashboard-card">
            <div className="card-content">
                <p className="card-title">{title}</p>
                <div className="card-metrics">
                    <span className="card-value">{value}</span>
                </div>
                <p className="card-subtitle">{subtitle}</p>
            </div>
            
            {/* O ícone recebe a classe condicional para estilização */}
            <div className={`icon-container ${colorClass}`}>
                {icon}
            </div>
        </div>
    );
};

export default DashboardCard;