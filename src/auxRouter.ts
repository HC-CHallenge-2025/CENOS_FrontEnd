import EquipeCenos from "./aux_pages/equipeCenos/EquipeCenos";
import Login from "./aux_pages/login/login";
import PontosDeAtendimentoEContato from "./aux_pages/pontosDeAtendimentoEContato/PontosDeAtendimentoEContato";
import SuporteEAjuda from "./aux_pages/suporteEAjuda/SuporteEAjuda";

export type AuxRouteConfig = {
    path: string;
    title: string;
    headerText: string;
    element: React.FC;
};

// Mapeamento das rotas e textos necessários (Erro Fast Refresh Resolvido)
// O 'export const' permite que outros arquivos importem esta constante.
export const auxRouteConfig: AuxRouteConfig[] = [
    {
        path: 'equipe-cenos',
        title: 'Equipe Cenos',
        headerText: 'Suas consultas e exames estão organizados aqui no Cenos!',
        element: EquipeCenos,
    },
    {
        path: 'pontos-de-atendimento',
        title: 'Pontos de Atendimento',
        headerText: 'Suas consultas e exames estão organizados aqui no Cenos!',
        element: PontosDeAtendimentoEContato,
    },
    {
        path: 'ajuda',
        title: 'Ajuda',
        headerText: 'Suas consultas e exames estão organizados aqui no Cenos!',
        element: SuporteEAjuda,
    },
    {
        path: 'login',
        title: 'Login',
        headerText: 'loginCenos',
        element: Login,
    },

];

export default auxRouteConfig;