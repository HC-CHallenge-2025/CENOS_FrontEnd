import React from 'react';
import { useForm } from 'react-hook-form';
import type { Patient } from '../../../data/patientTypes';
import type { Collaborator } from '../../../components/componentsColaborador/ColaboradorFilterTypes/ColaboradorFilterTypes'; // Corrigi o caminho de importação (assumindo que types está na pasta data)
import { MOCK_PATIENTS } from '../../../data/mockPatients';
import { MOCK_COLLABORATORS } from '../../../data/mockCollaborators';
import { APPOINTMENT_TYPES, APPOINTMENT_STATUS } from '../../../data/appointmentTypes';
import type { Appointment, AppointmentFormData } from '../../../data/appointmentTypes';
import "./CadastroAgendamentoForm.css"

// --- DEFINIÇÕES DE DADOS E TIPOS ---

const REGEX = {
    TIME: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, // HH:MM (00:00 a 23:59)
    ID: /^[a-zA-Z0-9]+$/,
};

// LOCAIS de Atendimento (Exemplo para o Select)
const LOCALS = ['Unidade I - FMUSP', 'Unidade II - IMREA', 'Remoto (Via Link)'];

// Estado inicial do formulário
const initialFormState: AppointmentFormData = {
    patientIdInput: '',
    collaboratorIdInput: '',
    patientNameDisplay: '',
    collaboratorNameDisplay: '',
    tutorNameDisplay: null,
    
    date: '',
    time: '09:00',
    type: APPOINTMENT_TYPES[0],
    local: LOCALS[0],
    accessLink: '',
    observations: '',
    
    patientId: null,
    collaboratorId: null,
    status: APPOINTMENT_STATUS[0], // Padrão: 'Confirmado'
};

// --- COMPONENTE PRINCIPAL ---

const CadastroAgendamentoForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<AppointmentFormData>({
        defaultValues: initialFormState,
        mode: 'onBlur',
    });

    // Observa o ID do paciente e colaborador para a busca
    const patientIdInput = watch('patientIdInput');
    const collaboratorIdInput = watch('collaboratorIdInput');
    
    // --- LÓGICA DE BUSCA E VINCULAÇÃO ---

    const searchPatient = () => {
        const patientFound: Patient | undefined = MOCK_PATIENTS.find(
            p => p.patientId === patientIdInput
        );

        if (!patientFound) {
            setValue('patientNameDisplay', 'Paciente não encontrado.');
            setValue('patientId', null);
            setValue('tutorNameDisplay', null);
            return;
        }

        // 1. Vincula o Paciente
        setValue('patientNameDisplay', `${patientFound.firstName} ${patientFound.lastName}`);
        setValue('patientId', patientFound.patientId);

        // 2. Vincula o Tutor (exibe, se houver)
        if (patientFound.tutorName) {
            setValue('tutorNameDisplay', patientFound.tutorName);
        } else {
            setValue('tutorNameDisplay', 'Nenhum tutor cadastrado.');
        }
    };

    const searchCollaborator = () => {
        const collabFound: Collaborator | undefined = MOCK_COLLABORATORS.find(
            c => c.collaboratorId === collaboratorIdInput
        );

        if (!collabFound) {
            setValue('collaboratorNameDisplay', 'Colaborador não encontrado.');
            setValue('collaboratorId', null);
            return;
        }

        // Vincula o Colaborador
        setValue('collaboratorNameDisplay', `${collabFound.firstName} ${collabFound.lastName} (${collabFound.councilSigla})`);
        setValue('collaboratorId', collabFound.collaboratorId);
    };

    // --- SUBMISSÃO E VALIDAÇÃO FINAL ---

    const onSubmit = (data: AppointmentFormData) => {
        // Validação final de vinculação de IDs
        if (!data.patientId || !data.collaboratorId) {
            alert('Erro: É obrigatório vincular um Paciente e um Colaborador válidos antes de salvar.');
            return;
        }
        
        // Atribui um ID de agendamento e os dados finais
        const finalAppointment: Appointment = {
            appointmentId: `A-${Date.now()}`, 
            patientId: data.patientId as string,
            collaboratorId: data.collaboratorId as string,
            date: data.date,
            time: data.time,
            type: data.type,
            local: data.local,
            accessLink: data.accessLink || null,
            observations: data.observations,
            status: data.status,
            tutorName: data.tutorNameDisplay,
        } as Appointment; // Cast final para garantir que o tipo seja reconhecido

        console.log('Novo Agendamento Criado:', finalAppointment);
        alert('Agendamento cadastrado com sucesso!');
    };

    const handleCancel = () => {
        if (window.confirm("Deseja limpar o formulário?")) {
            reset();
            setValue('patientNameDisplay', '');
            setValue('collaboratorNameDisplay', '');
            setValue('tutorNameDisplay', null);
            setValue('patientId', null);
            setValue('collaboratorId', null);
        }
    };

    // --- Componente de Campo Reutilizável ---
    const InputField = ({ label, name, type = 'text', required = true, pattern, placeholder, children }: {
        label: string;
        name: keyof AppointmentFormData;
        type?: string;
        required?: boolean;
        pattern?: RegExp;
        placeholder?: string; // 🎯 CORRIGIDO: Adicionado placeholder à tipagem 🎯
        children?: React.ReactNode;
    }) => {
        const error = errors[name]?.message;

        // Propriedades comuns para register
        const registerOptions = {
            required: required ? "Este campo é obrigatório." : false,
            pattern: pattern ? { value: pattern, message: `O formato não é válido.` } : undefined,
        };

        // Renderiza Select
        if (type === 'select') {
            return (
                <div className="form-field">
                    <label className="input-label" htmlFor={name}>{label}{required && '*'}</label>
                    <select
                        {...register(name, registerOptions)}
                        className={`input-text ${error ? 'input-error' : ''}`}
                        id={name as string}
                    >
                        {children}
                    </select>
                    {error && <p className="error-message">{error}</p>}
                </div>
            );
        }

        // Propriedades comuns de input
        const inputProps = {
            ...register(name, registerOptions),
            className: `input-text ${error ? 'input-error' : ''}`,
            id: name,
        };

        // Renderiza Input com Botão de Busca
        const isSearchField = name === 'patientIdInput' || name === 'collaboratorIdInput';
        if (isSearchField) {
            return (
                <div className="form-field">
                    <label className="input-label" htmlFor={name}>{label}{required && '*'}</label>
                    <div className="input-search-wrapper">
                        <input type="text" {...inputProps} placeholder={placeholder} />
                        <button 
                            type="button" 
                            className="search-button"
                            onClick={name === 'patientIdInput' ? searchPatient : searchCollaborator}
                            disabled={!watch(name)}
                        >
                            🔍
                        </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                </div>
            );
        }

        // Renderiza Input padrão (Data, Hora, Link, etc.)
        return (
            <div className="form-field">
                <label className="input-label" htmlFor={name}>{label}{required && '*'}</label>
                <input type={type} {...inputProps} placeholder={placeholder} />
                {error && <p className="error-message">{error}</p>}
            </div>
        );
    };

    return (
        <div className="appointment-registration-container">
            <h1 className="title-heading">
                <span role="img" aria-label="calendário">🗓️</span> Cadastrar Agendamento
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="appointment-form">
                
                <section className="appointment-data-grid">
                    
                    {/* BUSCAR PACIENTE */}
                    <InputField label="Buscar paciente" name="patientIdInput" required={true} placeholder="ID do Paciente" />
                    
                    {/* TUTOR CADASTRADO (Display Read-Only) */}
                    <div className="form-field">
                        <label className="input-label">Tutor cadastrado</label>
                        <input type="text" readOnly className="input-text read-only" value={watch('tutorNameDisplay') || ''} />
                    </div>

                    {/* BUSCAR COLABORADOR */}
                    <InputField label="Buscar Dr/Tec" name="collaboratorIdInput" required={true} placeholder="ID do Colaborador" />
                    
                    {/* TIPO DE AGENDAMENTO (SELECT) */}
                    <InputField label="Tipo de agendamento" name="type" type="select">
                        {APPOINTMENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                    </InputField>

                    {/* DATA */}
                    <InputField label="Data" name="date" type="date" required={true} />
                    
                    {/* HORA */}
                    <InputField label="Hora" name="time" pattern={REGEX.TIME} type="time" required={true} />

                    {/* LOCAL */}
                    <InputField label="Local" name="local" type="select">
                        {LOCALS.map(local => <option key={local} value={local}>{local}</option>)}
                    </InputField>

                    {/* LINK DE ACESSO */}
                    <InputField 
                        label="Link de acesso/null" 
                        name="accessLink" 
                        required={false} 
                        placeholder="Opcional: URL ou Vazio" 
                    />
                    
                </section>
                
                {/* CAMPO DE OBSERVAÇÕES */}
                <div className="form-field full-width-field">
                    <label className="input-label" htmlFor="observations">Observações</label>
                    <textarea 
                        id="observations" 
                        {...register('observations')} 
                        rows={3} 
                        className="input-text textarea-field"
                    ></textarea>
                </div>
                
                {/* Campos Atribuídos (Hidden) */}
                <input type="hidden" {...register('status')} />
                <input type="hidden" {...register('patientId')} />
                <input type="hidden" {...register('collaboratorId')} />


                {/* --- BOTÕES DE AÇÃO --- */}
                <div className="action-buttons">
                    <button type="submit" className="save-button">
                        salvar
                    </button>
                    <button type="button" onClick={handleCancel} className="cancel-button">
                        cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastroAgendamentoForm;