export interface PatientFilters {
    patientId: string;
    patientName: string; // Buscar por nome ou sobrenome
    scoreFilter: 'Todos' | 'Baixa' | 'Média' | 'Alta'; // Baixa (0-4), Média (5-7), Alta (8-10)
}