import React from 'react';

const About: React.FC = () => {
    return (
    <>
            <header className="main-header">
                            
                            <div className="user-info">
                                <h1>Sobre</h1>
                                <p>Conheça um pouco mais sobrea a CENOS</p>
                            </div>
                            
                        
                            <div className="header-dynamic-text">
                                <p>Suas consultas e exames estão organizados aqui no Cenos!</p>
                            </div>
            </header>    

            
            <div className="min-h-screen bg-gray-50 p-6 sm:p-8 lg:p-12">

            {/* Título Principal */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-6 sm:mb-8 border-b-2 border-gray-200 pb-3">
                Sobre a Plataforma CENOS: Combate ao Absenteísmo
                </h1>

            {/* Seção Principal - Texto Revisado */}
                <section className="max-w-4xl mx-auto">
                
                {/* Parágrafo 1: Introdução e Objetivo Principal */}
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                    A plataforma <strong className="text-blue-600">CENOS</strong> (Centro de Notificações e Otimização de Serviços) é uma solução digital inovadora desenvolvida para otimizar o fluxo de agendamentos e, crucialmente, combater as altas taxas de absenteísmo nos tratamentos de reabilitação.
                </p>

                {/* Parágrafo 2: Impacto e Foco */}
                <p className="text-md sm:text-lg text-gray-600 leading-relaxed mb-8">
                    O objetivo principal da ferramenta é garantir a <strong className="text-green-600">continuidade e a eficácia</strong> do cuidado ao paciente, reduzindo o desperdício de recursos e maximizando o aproveitamento dos horários de atendimento no <strong className="text-red-500">IMREA</strong> e no <strong className="text-red-500">HCFMUSP</strong>.
                </p>

                {/* Lista de Funcionalidades */}
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
                    O que a ferramenta faz:
                </h2>
                <ul className="list-disc list-inside space-y-3 pl-2 text-gray-700">
                    <li className="text-md">
                    <strong className="text-green-700">Monitoramento Ativo:</strong> Fornece um painel de Análise Avançada para monitorar taxas de confirmação e faltas.
                    </li>
                    <li className="text-md">
                    <strong className="text-green-700">Comunicação Eficaz:</strong> Utiliza um sistema de notificações personalizado que alerta pacientes e tutores sobre agendamentos, diminuindo o esquecimento e aumentando a assiduidade.
                    </li>
                    <li className="text-md">
                    <strong className="text-green-700">Gestão Integrada:</strong> Unifica o cadastro de pacientes, colaboradores e a gestão de agendamentos em um único sistema.
                    </li>
                </ul>
                
                {/* Parceria */}
                <p className="mt-10 pt-4 text-sm text-gray-500 border-t border-gray-200">
                    Este projeto foi desenvolvido através de uma parceria estratégica entre os alunos da <strong className="text-orange-500">FIAP</strong>, o <strong className="text-red-500">IMREA</strong> e o <strong className="text-red-500">HCFMUSP</strong>.
                </p>
                </section>
            </div>
    </>
    );
};

export default About;