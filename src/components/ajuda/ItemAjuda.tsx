import React from 'react';

interface ItemAjudaEstaticaProps {
    questionNumber: number;
    question: string;
    answer: string;
}

const ItemAjudaEstatica: React.FC<ItemAjudaEstaticaProps> = ({ questionNumber, question, answer }) => {
    return (
    // Card estilizado e responsivo com Tailwind
    <div className="border border-gray-200 rounded-xl shadow-md mb-6 p-5 sm:p-6 bg-white">
    
      {/* Pergunta (Visível sempre) */}
        <div className="w-full flex justify-between items-start">
        <span className="text-lg sm:text-xl font-bold text-gray-800 pr-4">
        {questionNumber} - {question}
        </span>
        {/* Ícone de Informação (para referência visual) */}
        <span className="text-blue-500 text-2xl font-light leading-none">+</span>
        </div>

      {/* Resposta (Conteúdo) */}
        <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
            {answer}
        </p>
        </div>
    </div>
    );
};

export default ItemAjudaEstatica;