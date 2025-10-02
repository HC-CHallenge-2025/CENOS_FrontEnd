import React, { useState } from 'react';
//componentes de layout
import Sidebar from './components/SideBarMenuButton/Sidebar';
import MenuButton from './components/SideBarMenuButton/MenuButton';
import Header from './components/Header/Header';
import AuxHeader from './components/AuxHeader/AuxHeader';
import Footer from './components/Footer/Footer';

// Hooks e componentes do React Router DOM
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// lista de rotas primárias e todas as rotas
import { primaryRoutes, allRoutes } from './routes.ts';
// tipo das rotas
import type { RouteConfig } from './routes.ts'; 


// ------------------------------------------------------------------
// COMPONENTE INTERNO: AppLayout
// Responsável pela lógica condicional e renderização do layout.
// ------------------------------------------------------------------
const AppLayout: React.FC = () => {
    const location = useLocation(); 

    // Lógica da SIDEBAR
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Lógica de Layout Condicional: Busca na lista 'allRoutes' a rota que corresponde ao pathname
    const currentRoute = allRoutes.find(
        (route: RouteConfig) => location.pathname === `/${route.path}`
    );

    // O layout primário só deve ser renderizado se a rota tiver a flag 'isPrimaryLayout: true'
    const shouldRenderPrimaryLayout = currentRoute ? currentRoute.isPrimaryLayout : false;


    return (
        <>
            {/* 1. Botão de Menu (Visível em Mobile, Escondido em LG) */}
            {/* O componente MenuButton deve ser ajustado no seu próprio CSS para ocultar em telas grandes */}
            <MenuButton onClick={toggleSidebar} isOpen={isSidebarOpen} />
            
            {/* 2. Sidebar (Gerenciada pelo SideBar.css: position: fixed, transform) */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            
            {/* 3. CONTEÚDO PRINCIPAL (Header, Main e Footer) */}
            {/* A classe lg:ml-[250px] empurra o conteúdo para a direita em telas grandes, 
                dando espaço para a sidebar fixa. */}
            <div className="flex flex-col min-h-screen w-full transition-all duration-300 lg:ml-[250px]">

                {/* Header Dinâmico e AuxHeader */}
                {shouldRenderPrimaryLayout && (
                    <div className="flex flex-col">
                        <Header routeConfig={primaryRoutes} /> 
                        <AuxHeader routeConfig={primaryRoutes} />
                    </div>
                )}

                {/* Conteúdo Principal (Rotas) */}
                <main className="content-principal flex-grow">
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

                {/* Footer (Fixo na base) */}
                <Footer />
            </div>
        </>
    );
};


// ------------------------------------------------------------------
// COMPONENTE EXTERNO: App (O Root)
// ------------------------------------------------------------------
const App: React.FC = () => {
    return (
        // O app-container é o root. Usamos h-full para herdar altura do body/html.
        <div className="app-container h-full"> 
            <BrowserRouter>
                {/* O AppLayout contém toda a lógica e o layout */}
                <AppLayout />
            </BrowserRouter>
        </div>
    );
};

export default App;
