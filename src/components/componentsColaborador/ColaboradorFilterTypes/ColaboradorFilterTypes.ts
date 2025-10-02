// Usamos a interface base do formulário (que se torna o nosso tipo de modelo)
export interface Collaborator {
    collaboratorId: string;
    firstName: string;
    lastName: string;
    ddd: string;
    phoneNumber: string;
    email: string;
    gender: 'Masculino' | 'Feminino' | 'Outro';
    councilSigla: 'Nenhuma' | 'CRM' | 'CRTR' | 'CFM' | 'CRP' | 'COREN';
    councilNumber: string;
    specialty: string; 
}

// Tipo para os filtros
export interface CollaboratorFilters {
    professionalId: string;
    collaboratorName: string;
    siglaFilter: 'Todos' | Collaborator['councilSigla']; 
}