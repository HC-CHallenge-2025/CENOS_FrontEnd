import React from "react";
import  EquipeCenosCard from "../../components/componentsEquipeCenos/equipeCenosCard/EquipeCenos"; 

// Dados da Equipe (Adicionei o placeholder 'photoUrl' para satisfazer o DashboardCardProps)
const TEAM_MEMBERS = [
    {
        photoUrl: '/assets/team/gabriel.jpg', // Caminho simulado para a foto
        name: 'Gabriel Cedraz',
        rm: 'RM565911',
        classId: '1TDSA',
        githubUrl: 'https://github.com/austrolopithecus',
        linkedinUrl: 'https://www.linkedin.com/in/gabriel-cedraz-9b971a354',
    },
    {
        photoUrl: '/assets/team/henrique.jpg', // Caminho simulado para a foto
        name: 'Henrique Nogueira',
        rm: 'RM554684',
        classId: '1TDSR',
        githubUrl: 'https://github.com/Henriquenxb',
        linkedinUrl: 'https://www.linkedin.com/in/henrique-nogueira-xavier-de-barros-880a2a198',
    },
    {
        photoUrl: '/assets/team/samara.jpg', // Caminho simulado para a foto
        name: 'Samara Oliveira',
        rm: 'RM566133',
        classId: '1TDSR',
        githubUrl: 'https://github.com/sam28vil',
        linkedinUrl: 'https://www.linkedin.com/in/samara-vilela',
    },
];

const EquipeCenos: React.FC = () =>{
    return (
        // O container principal usa o fundo cinza muito claro e padding responsivo
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
                <header className="mb-8 pb-4 border-b border-gray-300">
                <h1 className="text-2xl font-bold text-gray-800">Conheça a Equipe Cenos</h1>
                <p className="text-sm text-gray-500">Desenvolvimento, tecnologia e reabilitação.</p>
            </header>

            {/* Grid de Cartões Responsivo */}
            {/* gap-8 = espaçamento grande | grid-cols-1 = 1 coluna em XS | sm:grid-cols-2 = 2 colunas em SM | md:grid-cols-3 = 3 colunas em MD */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {TEAM_MEMBERS.map((member) => (
                    <EquipeCenosCard
                        key={member.rm}
                        name={member.name}
                        rm={member.rm}
                        classId={member.classId}
                        githubUrl={member.githubUrl}
                        linkedinUrl={member.linkedinUrl}
                    />
                ))}
            </section>
            
            {/* O Footer (direitos autorais e cookies) é renderizado pelo App.tsx abaixo desta seção. */}
        </div>
        
    );
};

export default EquipeCenos;