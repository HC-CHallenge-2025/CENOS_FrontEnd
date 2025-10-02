import type { Appointment } from './appointmentTypes';

export const MOCK_APPOINTMENTS: Appointment[] = [
    {
        appointmentId: 'A1001', patientId: 'P11', collaboratorId: 'D74513652', tutorName: 'Ana Silva',
        date: '2025-12-05', time: '08:00', type: 'On-line', local: 'Chamada de vídeo',
        accessLink: 'http://meet.online/agendamento1001', status: 'Confirmado',
        observations: 'Atendimento psicológico - suporte emocional pós-AVC',
    },
    {
        appointmentId: 'A1002', patientId: 'P12', collaboratorId: 'D6632100', tutorName: 'Bruno Santos',
        date: '2025-12-05', time: '09:00', type: 'On-line', local: 'Chamada de vídeo',
        accessLink: 'http://meet.online/agendamento1002', status: 'Confirmado',
        observations: 'Primeira consulta online - análise de perfil',
    },
    {
        appointmentId: 'A1003', patientId: 'P13', collaboratorId: 'D12533251', tutorName: 'Carla Oliveira',
        date: '2025-12-05', time: '08:00', type: 'Presencial', local: 'Hospital das Clínicas',
        accessLink: null, status: 'Confirmado',
        observations: 'Fisioterapeuta - tratamento pós-cirurgia',
    },
    {
        appointmentId: 'A1004', patientId: 'P14', collaboratorId: 'D6329878', tutorName: 'Daniel Souza',
        date: '2025-12-05', time: '08:00', type: 'Exame', local: 'Hospital das Clínicas',
        accessLink: null, status: 'Confirmado',
        observations: 'Exame - eletrocardiograma (ECG)',
    },
    {
        appointmentId: 'A1005', patientId: 'P15', collaboratorId: 'D5364892', tutorName: 'Elisa Ferreira',
        date: '2025-12-22', time: '09:00', type: 'Exame', local: 'Hospital das Clínicas',
        accessLink: null, status: 'Aguardando Confirmação',
        observations: 'Exame de sangue',
    },
    {
        appointmentId: 'A1006', patientId: 'P16', collaboratorId: 'D6632100', tutorName: 'Fábio Almeida',
        date: '2025-12-22', time: '09:00', type: 'Presencial', local: 'Hospital das Clínicas',
        accessLink: null, status: 'Cancelado',
        observations: 'Consulta Bucomaxilo',
    },
];