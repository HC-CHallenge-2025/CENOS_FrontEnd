import React from 'react';
// Rotas Principais
import AnaliseAvancada from './pages/AnaliseAvancada/AnaliseAvancada';
import Agendamentos from './pages/Agendamentos/Agendamentos';
import Pacientes from './pages/Pacientes/Pacientes';
import Colaboradores from './pages/Colaboradores/Colaboradores';

// Rotas Auxiliares (Links do Footer)
import EquipeCenos from "./aux_pages/equipeCenos/EquipeCenos";
import PontosDeAtendimentoEContato from "./aux_pages/pontosDeAtendimentoEContato/PontosDeAtendimentoEContato";
import ItemAjudaEstatica from "./aux_pages/suporteEAjuda/SuporteEAjuda";
import About from './aux_pages/about/About';

// Unificando o tipo de rota mas diferenciando internamente através de uma flag

export type RouteConfig = {
    path: string;
    title: string;
    headerText: string;
    element: React.FC;
    // Usando a flag 'isPrimaryLayout' para controle de layout (exibição de header e auxheader)
    isPrimaryLayout: boolean; 
};

// Setando rotas
// Rotas Primárias (Botões do AuxHeader que vão alterar o header e os botões/cartões do auxHeader)
export const primaryRoutes: RouteConfig[] = [
    {
        path: 'home',
        title: 'Análise avançada',
        headerText: 'Análise avançada: dados filtrados para uma análise mais precisa',
        element: AnaliseAvancada,
        isPrimaryLayout: true,//  exibe o layout completo
    },
    {
        path: 'agendamentos',
        title: 'Agendamentos',
        headerText: 'Agendamentos: cadastre e busque agendamentos',
        element: Agendamentos,
        isPrimaryLayout: true,//  exibe o layout completo
    },
    {
        path: 'pacientes',
        title: 'Pacientes',
        headerText: 'Pacientes: cadastre e busque os pacientes',
        element: Pacientes,
        isPrimaryLayout: true,//  exibe o layout completo
    },
    {
        path: 'colaboradores',
        title: 'Colaboradores',
        headerText: 'Colaboradores: cadastre e busque por colaboradores',
        element: Colaboradores,
        isPrimaryLayout: true,//  exibe o layout completo
    }
];

// Rotas Auxiliares (Links do Footer que desabilitarão a reenderização do header e auxheader)
export const auxiliaryRoutes: RouteConfig[] = [
    {
        path: 'equipe-cenos',
        title: 'Conheça a Equipe Cenos',
        headerText: 'Conheça a equipe responsável pelo desenvolvimento do aplicativo',
        element: EquipeCenos,
        isPrimaryLayout: false, // Não exibe o layout completo
    },
    {
        path: 'pontos-de-atendimento',
        title: 'Pontos de atendimento e contatos',
        headerText: 'Encontre nossos pontos de atendimento e informações de contato',
        element: PontosDeAtendimentoEContato,
        isPrimaryLayout: false, // Não exibe o layout completo
    },
    {
        path: 'about', 
        title: 'Sobre', 
        headerText: 'Informações sobre o projeto CENOS',
        element: About,
        isPrimaryLayout: false,
    },
    {
        path: 'suporte-e-ajuda', 
        title: 'Suporte e Ajuda',
        headerText: 'Tire suas dúvidas e encontre ajuda para navegar na plataforma',
        element: ItemAjudaEstatica,
        isPrimaryLayout: false, // Não exibe o layout completo
    },
];

// Combinação de todas as rotas para o uso no <Routes> principal do App.tsx
export const allRoutes: RouteConfig[] = [
    ...primaryRoutes,
    ...auxiliaryRoutes,
];

