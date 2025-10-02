import React from 'react'; 
import { useForm } from 'react-hook-form'; 
import type { Patient } from '../../data/patientTypes';
import { MOCK_PATIENTS } from '../../data/mockPatients';
import './CadastroPacienteForm.css'

// --- DEFINIÇÕES DE DADOS E TIPOS ---

const DDDs = [
    '11', '21', '31', '71', '51', '41', '81', '61', '19', '47'
];

const GENDERS = ['Masculino', 'Feminino', 'Outro'] as const;

// Regex para validação (A REGEX DE DATA SERÁ REMOVIDA DA VALIDAÇÃO)
const REGEX = {
    // DATE: /^\d{4}-\d{2}-\d{2}$/, // <-- REMOVIDO DA VALIDAÇÃO
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_NUMBER: /^\d{4,5}-\d{4}$/,
    ID: /^[a-zA-Z0-9]+$/,
};

interface PatientFormData extends Omit<Patient, 'tutorId' | 'tutorName'> {
    tutorId: string | null;
    tutorName: string | null;
    
    hasTutor: boolean;
    tutorIdInput: string; 
    tutorNameDisplay: string; 
}

const initialFormState: PatientFormData = {
    patientId: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    ddd: DDDs[0], 
    phoneNumber: '',
    email: '',
    gender: GENDERS[0],
    socialName: '',
    score: 10,
    observation: '',
    hasTutor: false,
    tutorId: null, 
    tutorName: null, 
    tutorIdInput: '',
    tutorNameDisplay: '',
};

// --- COMPONENTE PRINCIPAL ---

const CadastroPacienteForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset, setValue } = useForm<PatientFormData>({
        defaultValues: initialFormState,
        mode: 'onBlur',
    });

    const hasTutor = watch('hasTutor');
    const tutorIdInputValue = watch('tutorIdInput');

    // --- LÓGICA DE BUSCA DE TUTOR USANDO MOCK_PATIENTS ---
    const searchTutor = () => {
        const tutorFound = MOCK_PATIENTS.find(
            p => p.patientId === tutorIdInputValue
        );

        if (!tutorFound) {
            setValue('tutorNameDisplay', 'Paciente não encontrado.');
            setValue('tutorId', null);
            setValue('tutorName', null);
            return;
        }

        if (tutorFound.tutorId !== null) {
            setValue('tutorNameDisplay', `ID encontrado, mas ${tutorFound.firstName} já possui um tutor.`);
            setValue('tutorId', null);
            setValue('tutorName', null);
            return;
        }

        setValue('tutorNameDisplay', `${tutorFound.firstName} ${tutorFound.lastName} (Elegível)`);
        setValue('tutorId', tutorFound.patientId);
        setValue('tutorName', `${tutorFound.firstName} ${tutorFound.lastName}`);
    };

    // Função executada ao enviar o formulário
    const onSubmit = (data: PatientFormData) => {
        if (data.hasTutor && !data.tutorId) { 
            alert('Erro: É necessário vincular um tutor válido para salvar.');
            return;
        }
        
        const finalData: Patient = {
            ...data,
            tutorId: data.hasTutor ? data.tutorId : null,
            tutorName: data.hasTutor ? data.tutorName : null,
        } as Patient;

        console.log('Dados Finais Prontos para API:', finalData);
        alert('Cadastro efetuado com sucesso (Verifique o console para os dados finais)');
    };

    // Função para zerar todos os campos (botão Cancelar)
    const handleCancel = () => {
        if (window.confirm("Tem certeza que deseja limpar o formulário?")) {
            reset();
            setValue('tutorIdInput', '');
            setValue('tutorNameDisplay', '');
            setValue('tutorId', null);
            setValue('tutorName', null);
        }
    };

    // --- Componente de Campo Reutilizável ---
    const InputField = ({ label, name, type = 'text', required = true, pattern, maxLength, placeholder, children }: {
        label: string;
        name: keyof PatientFormData;
        type?: string;
        required?: boolean;
        pattern?: RegExp;
        maxLength?: number;
        placeholder?: string;
        children?: React.ReactNode;
    }) => {
        const error = errors[name]?.message;

        if (type === 'select') {
            return (
                <div className="form-field">
                    <label className="input-label" htmlFor={name}>{label}{required && '*'}</label>
                    {children}
                    {error && <p className="error-message">{error}</p>}
                </div>
            );
        }

        return (
            <div className="form-field">
                <label className="input-label" htmlFor={name}>{label}{required && '*'}</label>
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder || ''}
                    {...register(name, {
                        required: required ? "Este campo é obrigatório." : false,
                        maxLength: maxLength ? { value: maxLength, message: `Máximo de ${maxLength} caracteres.` } : undefined,
                        pattern: pattern ? { value: pattern, message: `O formato não é válido.` } : undefined,
                        
                    })}
                    className={`input-text ${error ? 'input-error' : ''}`}
                />
                {error && <p className="error-message">{error}</p>}
            </div>
        );
    };

    return (
        <div className="patient-registration-container">
            <h1 className="title-heading">
                <span role="img" aria-label="ícone de paciente">👨‍⚕️</span> Cadastrar Paciente
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="patient-form">
                
                {/* --- 1ª PARTE: DADOS DO PACIENTE --- */}
                <section className="patient-data-grid">
                    
                    <InputField label="ID do paciente" name="patientId" pattern={REGEX.ID} placeholder="Ex: IMREA123" />
                    
                    <InputField label="DDD" name="ddd" type="select">
                        <select
                            id="ddd"
                            {...register('ddd', { required: "Selecione o DDD." })}
                            className={`input-text ${errors.ddd ? 'input-error' : ''}`}
                        >
                            {DDDs.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </InputField>
                    
                    <InputField label="Nome paciente" name="firstName" maxLength={50} placeholder="Ex: João" />
                    <InputField 
                        label="Número" 
                        name="phoneNumber" 
                        pattern={REGEX.PHONE_NUMBER} 
                        placeholder="Ex: 99999-9999" 
                        maxLength={10} 
                    />

                    <InputField label="Sobrenome do paciente" name="lastName" maxLength={50} placeholder="Ex: Silva" />
                    <InputField label="Email paciente" name="email" pattern={REGEX.EMAIL} placeholder="nome@exemplo.com" />

                    <InputField label="Data de nascimento" name="birthDate" type="date" />
                    <InputField label="Gênero" name="gender" type="select">
                        <select
                            id="gender"
                            {...register('gender', { required: "Selecione o Gênero." })}
                            className={`input-text ${errors.gender ? 'input-error' : ''}`}
                        >
                            {GENDERS.map(g => <option key={g} value={g}>{g}</option>)} 
                        </select>
                    </InputField>

                    <InputField label="Nome social" name="socialName" required={false} placeholder="Opcional" />
                    
                    {/* Campos de 'Nota' e 'Observação' (Padrão e Hidden) */}
                    <input type="hidden" {...register('score')} />
                    <input type="hidden" {...register('observation')} />
                </section>
                
                <hr className="divider" />

                {/* --- 2ª PARTE: VINCULAR TUTOR --- */}
                <section className="tutor-section">
                    <div className="tutor-header">
                        <h2>
                            <span role="img" aria-label="ícone de tutor">👥</span> Vincular Tutor
                        </h2>
                        {/* Switch para habilitar */}
                        <label className="switch">
                            <input
                                type="checkbox"
                                {...register('hasTutor')}
                                onChange={(e) => setValue('hasTutor', e.target.checked)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    {hasTutor && (
                        <div className="tutor-fields-grid">
                            
                            <InputField 
                                label="Buscar Identificador do paciente" 
                                name="tutorIdInput" 
                                required={hasTutor} 
                                placeholder="ID do Paciente Tutor" 
                            />
                            
                            <div className="form-field">
                                <label className="input-label" htmlFor="tutorNameDisplay">Nome paciente Tutor</label>
                                <div className="tutor-search-wrapper">
                                    <input
                                        id="tutorNameDisplay"
                                        type="text"
                                        placeholder="Nome do Tutor"
                                        readOnly
                                        className="input-text read-only"
                                        value={watch('tutorNameDisplay') || ''}
                                    />
                                    <button 
                                        type="button" 
                                        className="search-button"
                                        onClick={searchTutor} // Chama a função que busca em MOCK_PATIENTS
                                    >
                                        🔍
                                    </button>
                                </div>
                                {/* Exibe erro específico se o switch estiver ligado mas o ID não for válido */}
                                {(hasTutor && !watch('tutorId')) && 
                                    <p className="error-message">ID do tutor não vinculado ou inválido.</p>
                                }
                            </div>
                        </div>
                    )}
                </section>

                {/* --- BOTÕES DE AÇÃO --- */}
                <div className="action-buttons">
                    <button type="submit" className="save-button">
                        Salvar
                    </button>
                    <button type="button" onClick={handleCancel} className="cancel-button">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastroPacienteForm;