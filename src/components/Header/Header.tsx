// src/components/Header/Header.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import type { RouteConfig } from '../../routes';
import './Header.css';

interface HeaderProps {
    routeConfig: RouteConfig[];
}

const Header: React.FC<HeaderProps> = ({ routeConfig }) => {
    const location = useLocation();

    // Encontra a configuração de rota que corresponde à URL atual
    const currentRoute = routeConfig.find(route => 
        location.pathname.includes(route.path)
    );

    // Define o texto final. Usa o texto da rota, ou um padrão se não encontrar
    const dynamicText = currentRoute 
        ? currentRoute.headerText 
        : 'Bem-vindo! Selecione uma opção abaixo.'; 

    return (
        <header className="main-header">
            {/* Parte fixa do header */}
            <div className="user-info">
                <h1>Olá, Paulo!</h1>
                <p>Administrador - IMREA-HC</p>
            </div>
            
            <div className="header-dynamic-text">
                <p>{dynamicText}</p>
            </div>
        </header>
    );
};

export default Header;