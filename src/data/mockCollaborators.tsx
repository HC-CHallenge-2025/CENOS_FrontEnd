import type { Collaborator } from '../components/componentsColaborador/ColaboradorFilterTypes/ColaboradorFilterTypes';

export const MOCK_COLLABORATORS: Collaborator[] = [
    {
        collaboratorId: 'D12533251', firstName: 'Pedro', lastName: 'Machado', email: 'pedro.m@hc.com',
        gender: 'Masculino', ddd: '11', phoneNumber: '98877-6655',
        councilSigla: 'CRM', councilNumber: '128745', specialty: 'Neurologista',
    },
    {
        collaboratorId: 'D6632100', firstName: 'Bruna', lastName: 'Zilensky', email: 'bruna.z@imrea.com',
        gender: 'Feminino', ddd: '31', phoneNumber: '97766-5544',
        councilSigla: 'CRTR', councilNumber: '459321', specialty: 'Técnico em Radiologia',
    },
    {
        collaboratorId: 'D2155512', firstName: 'Diogo', lastName: 'Blanco', email: 'diogo.b@hc.com',
        gender: 'Masculino', ddd: '21', phoneNumber: '96655-4433',
        councilSigla: 'CFM', councilNumber: '782634', specialty: 'Técnico em Ultrassom',
    },
    {
        collaboratorId: 'D74513652', firstName: 'Luana', lastName: 'Graça', email: 'luana.g@imrea.com',
        gender: 'Feminino', ddd: '11', phoneNumber: '95544-3322',
        councilSigla: 'CRP', councilNumber: '674209', specialty: 'Psicólogo',
    },
    {
        collaboratorId: 'D5364892', firstName: 'Vitor', lastName: 'Rodrigues', email: 'vitor.r@hospital.com',
        gender: 'Masculino', ddd: '12', phoneNumber: '94433-2211',
        councilSigla: 'CRM', councilNumber: '562830', specialty: 'Ortopedista',
    },
    {
        collaboratorId: 'D6329878', firstName: 'Victória', lastName: 'Lacerda', email: 'vicclacerda@email.com',
        gender: 'Feminino', ddd: '11', phoneNumber: '99813-2026',
        councilSigla: 'CRM', councilNumber: '239501', specialty: 'Otorrinolaringologista',
    },
];