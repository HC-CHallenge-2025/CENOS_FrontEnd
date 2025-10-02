import React, { useState } from 'react';
//componentes de layout
import Sidebar from './components/SideBarMenuButton/Sidebar';
import MenuButton from './components/SideBarMenuButton/MenuButton';
import Header from './components/Header/Header';
import AuxHeader from './components/AuxHeader/AuxHeader';
import Footer from './components/Footer/Footer';

// Hooks e componentes do React Router DOM
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

//lista de rotas primárias e todas as rotas
import { primaryRoutes, allRoutes } from './routes.ts';
// tipo das rotas
import type { RouteConfig } from './routes.ts'; 


// Componente interno responsável por usar o useLocation() e definir a lógica condicional das páginas

const AppLayout: React.FC = () => {
    const location = useLocation(); 

    // Lógica da SIDEBAR
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Lógica de Layout Condicional: Busca na lista 'allRoutes' a rota que corresponde ao pathname
    const currentRoute = allRoutes.find(
        // importação do RouteConfig para usar como um tipo.
        (route: RouteConfig) => location.pathname === `/${route.path}`
    );

    // O layout primário só deve ser renderizado se a rota tiver a flag 'isPrimaryLayout: true'
    const shouldRenderPrimaryLayout = currentRoute ? currentRoute.isPrimaryLayout : false;


    return (
        <>
            <MenuButton onClick={toggleSidebar} isOpen={isSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            
            {/* 1. Header Condicional: Só renderiza se for uma rota primária */}
            {shouldRenderPrimaryLayout && <Header routeConfig={primaryRoutes} />} 

            {/* 2. AuxHeader Condicional: Só renderiza se for uma rota primária */}
            {shouldRenderPrimaryLayout && <AuxHeader routeConfig={primaryRoutes} />}

            {/* 3. Conteúdo Principal */}
            <main className="content-principal">
                <Routes>
                    {allRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={`/${route.path}`}
                            element={<route.element />}
                        />
                    ))}

                    {/* Rota padrão: redireciona */}
                    <Route
                        path="/"
                        element={<Navigate to="/home" replace />}
                    />
                </Routes>
            </main>

            {/* 4. Footer (Fixo) */}
            <Footer />
        </>
    );
};


// divisão externa para que o App foque apenas em englobar o AppLayout e exibir sendo um filho do BrowserRouter
const App: React.FC = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                {/* O componente AppLayout encapsula toda a lógica e o layout */}
                <AppLayout />
            </BrowserRouter>
        </div>
    );
};

export default App;