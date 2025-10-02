import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { RouteConfig } from '../../routes.ts'; // Importa o tipo
import './AuxHeader.css';

interface AuxHeaderProps {
    routeConfig: RouteConfig[];
}

const AuxHeader: React.FC<AuxHeaderProps> = ({ routeConfig }) => {
    const location = useLocation();

    // Função para verificar se o botão atual está selecionado
    const isSelected = (path: string): boolean => {
        // Verifica se o caminho atual da URL inclui o caminho da rota.
        return location.pathname.startsWith(`/${path}`);
    };

    return (
        <div className="aux-header-container">
            {routeConfig.map((route) => (
                <Link
                    key={route.path}
                    to={`/${route.path}`}
                    // Aplica a classe 'selected' se a rota for a atual
                    className={`nav-button ${isSelected(route.path) ? 'selected' : ''}`}
                >
                    {route.title}
                </Link>
            ))}
        </div>
    );
};

export default AuxHeader;