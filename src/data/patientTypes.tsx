export interface Patient {
    patientId: string;
    firstName: string;
    lastName: string;
    birthDate: string; 
    ddd: string;
    phoneNumber: string; 
    email: string;
    gender: 'Masculino' | 'Feminino' | 'Outro';
    socialName: string;
    score: number; // Nota de 0 a 10
    observation: string;
    tutorId: string | null; // ID do paciente que é o tutor
    tutorName: string | null;
}