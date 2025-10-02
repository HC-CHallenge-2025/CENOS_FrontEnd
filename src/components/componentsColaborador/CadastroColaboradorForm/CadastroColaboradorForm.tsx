import React from 'react';
import { useForm } from 'react-hook-form'; 

//import type { Patient } from '../../../data/patientTypes';

import './CadastroColaboradorForm.css'

// definindo dados e tipos

// DDDs (Lista reutilizada)
const DDDs = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19', 
    '21', '22', '24', '31', '41', '71', '81', '61', '51',
];

// Tipos de Gênero
const GENDERS = ['Masculino', 'Feminino', 'Outro'] as const;

// Siglas de Conselhos Profissionais
const COUNCIL_SIGLAS = ['Nenhuma', 'CRM', 'CRTR', 'CFM', 'CRP', 'COREN'] as const;

// Regex para validação
const REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_NUMBER: /^\d{4,5}-\d{4}$/,
    ID: /^[a-zA-Z0-9]+$/,
    // Validação simples para número de conselho (pode ser ajustada)
    COUNCIL_NUMBER: /^\d+$/, 
};

// Interface para o formulário de Colaborador
interface CollaboratorFormData {
    // Dados Obrigatórios
    collaboratorId: string;
    firstName: string;
    lastName: string;
    ddd: string;
    phoneNumber: string;
    email: string;
    gender: typeof GENDERS[number]; // Tipo estrito
    
    // Dados Profissionais
    councilSigla: typeof COUNCIL_SIGLAS[number]; // Tipo estrito
    councilNumber: string; // Tratado como string no input, mas deve ser numérico
    specialty: string; 
}

// Estado inicial do formulário
const initialFormState: CollaboratorFormData = {
    collaboratorId: '',
    firstName: '',
    lastName: '',
    ddd: DDDs[0], 
    phoneNumber: '',
    email: '',
    gender: GENDERS[0],
    councilSigla: COUNCIL_SIGLAS[0], 
    councilNumber: '',
    specialty: '',
};

// --- COMPONENTE PRINCIPAL ---

const CadastroColaboradorForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CollaboratorFormData>({
        defaultValues: initialFormState,
        mode: 'onBlur',
    });

    // Função executada ao enviar o formulário
    const onSubmit = (data: CollaboratorFormData) => {
        // Log dos dados para simular o envio à API
        console.log('Dados do Colaborador Válidos:', data);
        alert('Cadastro de Colaborador efetuado com sucesso!');
        // Aqui você faria a chamada de API
        // reset(); 
    };

    // Função para zerar todos os campos (botão Cancelar)
    const handleCancel = () => {
        if (window.confirm("Tem certeza que deseja limpar o formulário?")) {
            reset();
        }
    };

    // --- Componente de Campo Reutilizável (Adaptado) ---
    const InputField = ({ label, name, type = 'text', required = true, pattern, maxLength, placeholder, children }: {
        label: string;
        name: keyof CollaboratorFormData;
        type?: string;
        required?: boolean;
        pattern?: RegExp;
        maxLength?: number;
        placeholder?: string;
        children?: React.ReactNode;
    }) => {
        const error = errors[name]?.message;
        const isSelect = type === 'select';

        return (
            <div className="form-field">
                <label className="input-label" htmlFor={name}>{label}{required && '*'}</label>
                
                {/* Renderiza Select ou Input */}
                {isSelect ? children : (
                    <input
                        id={name}
                        type={type}
                        placeholder={placeholder || ''}
                        {...register(name, {
                            required: required ? "Este campo é obrigatório." : false,
                            maxLength: maxLength ? { value: maxLength, message: `Máximo de ${maxLength} caracteres.` } : undefined,
                            
                            
                            // O RHF usa o pattern se o campo for tratado como string
                            pattern: pattern 
                                ? { value: pattern, message: `O formato não é válido.` } 
                                : undefined,
                                
                            
                            validate: (value: string | null) => { 
                                // 1. Validação para o campo de NÚMERO DE CONSELHO
                                if (name === 'councilNumber' && value) {
                                    // Checa a REGEX: Deve conter apenas números.
                                    if (!REGEX.COUNCIL_NUMBER.test(value)) {
                                        return "Deve conter apenas números.";
                                    }
                                }
                                
                                // 2. Validação para o campo de TELEFONE (que também é um número, mas validado por regex de string)
                                if (name === 'phoneNumber' && value && !REGEX.PHONE_NUMBER.test(value)) {
                                    return "Formato deve ser XXXXX-XXXX.";
                                }
                                
                                return true;
                            }
                        })}
                        className={`input-text ${error ? 'input-error' : ''}`}
                    />
                )}
                
                {error && <p className="error-message">{error}</p>}
            </div>
        );
    };

    return (
        <div className="collaborator-registration-container">
            <h1 className="title-heading">
                <span role="img" aria-label="ícone médico">🩺</span> Cadastrar Colaborador
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="collaborator-form">
                
                <section className="collaborator-data-grid">
                    
                    {/* ID DO COLABORADOR */}
                    <InputField label="Identificador do colaborador" name="collaboratorId" pattern={REGEX.ID} placeholder="Ex: NEO123" />
                    
                    {/* EMAIL DO COLABORADOR */}
                    <InputField label="Email colaborador" name="email" pattern={REGEX.EMAIL} placeholder="nome.sobrenome@hospital.com" />
                    

                    {/* NOME */}
                    <InputField label="Nome colaborador" name="firstName" maxLength={50} placeholder="Ex: Maria" />
                    
                    {/* GÊNERO (SELECT) */}
                    <InputField label="Gênero" name="gender" type="select">
                        <select
                            id="gender"
                            {...register('gender', { required: "Selecione o Gênero." })}
                            className={`input-text ${errors.gender ? 'input-error' : ''}`}
                        >
                            {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                    </InputField>

                    {/* SOBRENOME */}
                    <InputField label="Sobrenome colaborador" name="lastName" maxLength={50} placeholder="Ex: Silva" />

                    {/* SIGLA CONSELHO (SELECT) */}
                    <InputField label="Sigla conselho profissional" name="councilSigla" type="select">
                        <select
                            id="councilSigla"
                            {...register('councilSigla', { required: "Selecione a Sigla." })}
                            className={`input-text ${errors.councilSigla ? 'input-error' : ''}`}
                        >
                            {COUNCIL_SIGLAS.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </InputField>

                    {/* DDD e TELEFONE */}
                    <div className="phone-group">
                        <InputField label="DDD" name="ddd" type="select">
                            <select
                                id="ddd"
                                {...register('ddd', { required: "Selecione o DDD." })}
                                className={`input-text ddd-select ${errors.ddd ? 'input-error' : ''}`}
                            >
                                {DDDs.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </InputField>
                        <InputField 
                            label="Número" 
                            name="phoneNumber" 
                            pattern={REGEX.PHONE_NUMBER} 
                            placeholder="Ex: 99999-9999" 
                            maxLength={10}
                        />
                    </div>
                    
                    {/* NÚMERO CONSELHO */}
                    <InputField label="número conselho profissional" name="councilNumber" type="number" pattern={REGEX.COUNCIL_NUMBER} placeholder="Somente números" />

                    {/* ESPECIALIDADE */}
                    <div className="full-width-field">
                        <InputField label="Especialidade" name="specialty" placeholder="Ex: Neurologista, Psicólogo" required={true} />
                    </div>

                </section>
                
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

export default CadastroColaboradorForm;