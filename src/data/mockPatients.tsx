import type { Patient } from './patientTypes';

// Pacientes base

export const MOCK_PATIENTS: Patient[] = [

    {
        patientId: 'P01', firstName: 'Ana', lastName: 'Silva', birthDate: '1985-04-12', 
        ddd: '11', phoneNumber: '98765-4321', email: 'ana.silva@exemplo.com', 
        gender: 'Feminino', socialName: 'Dra. Ana', score: 10, observation: 'Observação Padrão',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P02', firstName: 'Bruno', lastName: 'Santos', birthDate: '1990-08-25', 
        ddd: '21', phoneNumber: '99876-5432', email: 'bruno.santos@exemplo.com', 
        gender: 'Masculino', socialName: '', score: 10, observation: 'Retorno agendado em dez/25.',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P03', firstName: 'Carla', lastName: 'Oliveira', birthDate: '2001-01-05', 
        ddd: '31', phoneNumber: '98765-1234', email: 'carla.o@email.com', 
        gender: 'Feminino', socialName: '', score: 10, observation: 'Tratamento em curso.',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P04', firstName: 'Daniel', lastName: 'Souza', birthDate: '1975-11-30', 
        ddd: '19', phoneNumber: '98765-5678', email: 'daniel.s@mail.com', 
        gender: 'Masculino', socialName: 'Sr. D', score: 10, observation: 'Necessário acompanhamento nutricional.',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P05', firstName: 'Elisa', lastName: 'Ferreira', birthDate: '1998-06-18', 
        ddd: '41', phoneNumber: '98888-7777', email: 'elisa.f@web.com', 
        gender: 'Feminino', socialName: '', score: 10, observation: 'Obs preenchida no sistema.',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P06', firstName: 'Fábio', lastName: 'Almeida', birthDate: '1965-02-01', 
        ddd: '71', phoneNumber: '99123-4567', email: 'fabio.a@net.com', 
        gender: 'Masculino', socialName: 'Dr. Fábio', score: 10, observation: 'Histórico de alergias. Cuidado!',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P07', firstName: 'Gabriela', lastName: 'Lima', birthDate: '2005-12-10', 
        ddd: '81', phoneNumber: '98765-0000', email: 'gabi.lima@info.com', 
        gender: 'Feminino', socialName: '', score: 10, observation: 'Sempre confirmar presença.',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P08', firstName: 'Hugo', lastName: 'Gomes', birthDate: '1988-09-09', 
        ddd: '61', phoneNumber: '98765-9999', email: 'hugo.gomes@br.com', 
        gender: 'Masculino', socialName: '', score: 10, observation: 'Protocolo de reabilitação iniciado.',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P09', firstName: 'Irene', lastName: 'Pereira', birthDate: '1995-03-20', 
        ddd: '51', phoneNumber: '99999-1111', email: 'irene.p@online.com', 
        gender: 'Feminino', socialName: 'I. P.', score: 10, observation: 'Exames OK.',
        tutorId: null, tutorName: null,
    },
    {
        patientId: 'P10', firstName: 'Júlio', lastName: 'Mendes', birthDate: '1970-07-07', 
        ddd: '47', phoneNumber: '98888-2222', email: 'julio.m@test.com', 
        gender: 'Masculino', socialName: '', score: 10, observation: 'Paciente HC FMUSP.',
        tutorId: null, tutorName: null,
    },

    //  PACIENTES COM TUTORES Base com tutores
    {
        patientId: 'P11', firstName: 'Karen', lastName: 'Rocha', birthDate: '2010-02-14', 
        ddd: '11', phoneNumber: '99000-1111', email: 'karen.r@filha.com', 
        gender: 'Feminino', socialName: '', score: 9, observation: 'Tratamento em fase inicial.',
        tutorId: 'P01', tutorName: 'Ana Silva',
    },
    {
        patientId: 'P12', firstName: 'Leo', lastName: 'Costa', birthDate: '2015-10-22', 
        ddd: '21', phoneNumber: '99100-2222', email: 'leo.costa@filho.com', 
        gender: 'Masculino', socialName: 'Leozinho', score: 7, observation: 'Aguardando exames laboratoriais.',
        tutorId: 'P02', tutorName: 'Bruno Santos',
    },
    {
        patientId: 'P13', firstName: 'Mia', lastName: 'Nunes', birthDate: '2020-03-03', 
        ddd: '31', phoneNumber: '99200-3333', email: 'mia.n@jovem.com', 
        gender: 'Feminino', socialName: '', score: 5, observation: 'Baixa assiduidade em consultas.',
        tutorId: 'P03', tutorName: 'Carla Oliveira',
    },
    {
        patientId: 'P14', firstName: 'Nícolas', lastName: 'Martins', birthDate: '2012-07-07', 
        ddd: '19', phoneNumber: '99300-4444', email: 'nic.m@escola.com', 
        gender: 'Masculino', socialName: '', score: 9, observation: 'Transferido de outra unidade.',
        tutorId: 'P04', tutorName: 'Daniel Souza',
    },
    {
        patientId: 'P15', firstName: 'Olívia', lastName: 'Ribeiro', birthDate: '2018-05-19', 
        ddd: '41', phoneNumber: '99400-5555', email: 'olivia.r@familia.com', 
        gender: 'Feminino', socialName: 'Oli', score: 3, observation: 'Pendência na documentação.',
        tutorId: 'P05', tutorName: 'Elisa Ferreira',
    },
    {
        patientId: 'P16', firstName: 'Pedro', lastName: 'Cunha', birthDate: '2008-01-28', 
        ddd: '71', phoneNumber: '99500-6666', email: 'pedro.c@web.com', 
        gender: 'Masculino', socialName: '', score: 8, observation: 'Precisa de acompanhante na próxima sessão.',
        tutorId: 'P06', tutorName: 'Fábio Almeida',
    },
    {
        patientId: 'P17', firstName: 'Quênia', lastName: 'Neves', birthDate: '2014-11-02', 
        ddd: '81', phoneNumber: '99600-7777', email: 'kenia.n@info.com', 
        gender: 'Feminino', socialName: '', score: 7, observation: 'Reavaliar plano de tratamento.',
        tutorId: 'P07', tutorName: 'Gabriela Lima',
    },
    {
        patientId: 'P18', firstName: 'Raul', lastName: 'Ramos', birthDate: '2016-04-06', 
        ddd: '61', phoneNumber: '99700-8888', email: 'raul.r@exemplo.com', 
        gender: 'Masculino', socialName: 'Raulzinho', score: 4, observation: 'Contato frequente com o tutor.',
        tutorId: 'P08', tutorName: 'Hugo Gomes',
    },
    {
        patientId: 'P19', firstName: 'Sônia', lastName: 'Tavares', birthDate: '2000-10-15', 
        ddd: '51', phoneNumber: '99800-9999', email: 'sonia.t@email.com', 
        gender: 'Feminino', socialName: 'Sô', score: 6, observation: 'Observação sem relevância.',
        tutorId: 'P09', tutorName: 'Irene Pereira',
    },
    {
        patientId: 'P20', firstName: 'Tadeu', lastName: 'Vieira', birthDate: '2003-07-29', 
        ddd: '47', phoneNumber: '99900-0000', email: 'tadeu.v@test.com', 
        gender: 'Masculino', socialName: '', score: 10, observation: 'Paciente nota 10.',
        tutorId: 'P10', tutorName: 'Júlio Mendes',
    },
];