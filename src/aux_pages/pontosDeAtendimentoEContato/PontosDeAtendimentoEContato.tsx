import React from "react";




// Dados de contato
const CONTACT_INFO = [
    {
    name: 'ICHC - Instituto Central do Hospital das Clínicas',
    address: 'Av. Dr. Enéas de Carvalho Aguiar, 255 - Cerqueira César, São Paulo - SP',
    phone: '(11) 2661-0000',
    details: 'Responsável pelo atendimento de alta complexidade e gestão central.',
    },
    {
    name: 'IMREA - Instituto de Medicina Física e Reabilitação',
    address: 'Rua Dr. Ovídio Pires de Campos, 777 - Cerqueira César, São Paulo - SP',
    phone: '(11) 3218-2000',
    details: 'Focado em tratamento, ensino e pesquisa na área de reabilitação.',
    },
];


const PontosDeAtendimentoEContato: React.FC = () =>{
        return (
            <>
                <header className="main-header">
                    
                    <div className="user-info">
                        <h1>Pontos de atendimento e contato</h1>
                        <p>Conheça os locais para atendimento</p>
                    </div>
                    
                
                    <div className="header-dynamic-text">
                        <p>Suas consultas e exames estão organizados aqui no Cenos!</p>
                    </div>
                </header>

                <div className="page-content">
                    <h2>Conteúdo para Pontos de atendimento</h2>
                    {/* Seu Dashboard e filtros viriam aqui */}
                    <p>Este é o conteúdo principal da rota /pontos-de-atendimento.</p>
                </div>

                <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">


        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {CONTACT_INFO.map((unit, index) => (
            <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition duration-300 hover:shadow-lg"
            >
                {/* Nome da Unidade */}
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 border-b pb-2 border-green-200">
                {unit.name}
                </h2>

                {/* Endereço */}
                <p className="text-md text-gray-700 mb-2">
                <strong className="text-green-600">Endereço:</strong> {unit.address}
                </p>

                {/* Telefone */}
                <p className="text-md text-gray-700 mb-4">
                <strong className="text-green-600">Telefone:</strong> <a href={`tel:${unit.phone.replace(/\D/g, '')}`} className="text-blue-500 hover:underline">{unit.phone}</a>
                </p>

                {/* Detalhes/Descrição */}
                <p className="text-sm text-gray-500 italic">
                {unit.details}
                </p>
            </div>
            ))}

        </section>
    </div>
            </>
    );
}

export default PontosDeAtendimentoEContato;