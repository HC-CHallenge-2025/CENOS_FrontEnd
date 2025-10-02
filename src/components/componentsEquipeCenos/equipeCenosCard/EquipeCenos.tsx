import React from 'react';
import { Link } from 'react-router-dom';

const GitHubIcon = () => <span className="w-6 h-6 inline-block">🐙</span>;
const LinkedInIcon = () => <span className="w-6 h-6 inline-block">🔗</span>;

interface EquipeCenosCardProps {
    name: string;
    rm: string;
    classId: string; // Turma (ex: 1TDSA)
    githubUrl: string;
    linkedinUrl: string;
}

const EquipeCenosCard: React.FC<EquipeCenosCardProps> = ({  name, rm, classId, githubUrl, linkedinUrl }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">

            
            {/* Nome e Detalhes */}
            <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">{name}</h2>
            <p className="text-sm text-gray-600 mb-1">RM: {rm}</p>
            <p className="text-xs text-gray-500 mb-4">{classId}</p>

            {/* Links de Redes (SVGs substituídos) */}
            <div className="flex space-x-4">
            
                {/* Link GitHub */}
                <Link 
                    to={{ pathname: githubUrl }} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-gray-900 transition duration-150"
                    aria-label={`Perfil do GitHub de ${name}`}
                >
                    <GitHubIcon />
                </Link>
                
                {/* Link LinkedIn */}
                <Link 
                    to={{ pathname: linkedinUrl }} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 hover:text-blue-800 transition duration-150"
                    aria-label={`Perfil do LinkedIn de ${name}`}
                >
                    <LinkedInIcon />
                </Link>

            </div>
        </div>
    );
};

export default EquipeCenosCard;