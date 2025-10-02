import React from 'react';
import CadastroPacienteForm from '../../components/CadastroPacienteForm/CadastroPacienteForm'; // Importe o formulário
import './Pacientes.css'; // Use o CSS da seção de Pacientes

const CadastroPaciente: React.FC = () => {
    return (
        <div className="cadastro-page-container">
            {/* O formulário será exibido aqui */}
            <CadastroPacienteForm />
        </div>
    );
};

export default CadastroPaciente;