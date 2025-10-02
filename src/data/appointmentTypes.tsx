// Tipos de Status e Agendamento (Enums)
export const APPOINTMENT_TYPES = ['Exame', 'On-line', 'Presencial'] as const;
export const APPOINTMENT_STATUS = ['Confirmado', 'Aguardando Confirmação', 'Cancelado'] as const;

export interface Appointment {
    // Dados de vinculação (IDs reais após a busca)
    appointmentId: string; // ID único do agendamento (será gerado)
    patientId: string;
    collaboratorId: string;
    
    // Dados do formulário
    date: string; // AAAA-MM-DD
    time: string; // HH:MM
    type: typeof APPOINTMENT_TYPES[number];
    local: string; // Ex: Sala 5, Unidade A
    accessLink: string | null; // Link ou null

    // Dados atribuídos
    status: typeof APPOINTMENT_STATUS[number]; // Padrão: Aguardando Confirmação
    observations: string;
    
    // Campo de exibição do Tutor (para interface, não para o banco)
    tutorName: string | null;
}

// Interface para o formulário (inclui os campos de busca)
export interface AppointmentFormData {
    // Campos de busca (input do usuário)
    patientIdInput: string;
    collaboratorIdInput: string;
    
    // Campos de exibição (após a busca)
    patientNameDisplay: string;
    collaboratorNameDisplay: string;
    tutorNameDisplay: string | null;
    
    // Campos do agendamento
    date: string;
    time: string;
    type: typeof APPOINTMENT_TYPES[number];
    local: string;
    accessLink: string; // Input de texto simples para link
    observations: string;
    
    // Campos necessários para o registro final
    patientId: string | null;
    collaboratorId: string | null;
    status: typeof APPOINTMENT_STATUS[number];
}