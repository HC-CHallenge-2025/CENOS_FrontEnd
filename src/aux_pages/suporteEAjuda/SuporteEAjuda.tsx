import React from "react";
import ItemAjuda from "../../components/ajuda/ItemAjuda"; // Componente de item simples
import './SuporteEAjuda.css';

const FAQ_ITEMS = [
    // ... (Seus dados FAQ_ITEMS permanecem os mesmos)
    {
        question: 'Qual é o papel de um tutor?',
        answer: 'O tutor, além de ser seu contato de emergência, é responsável por te avisar dos prazos de confirmação de agendamentos, para que você não se esqueça e perca o prazo de confirmação.',
    },
    {
        question: 'Como confirmar um agendamento?',
        answer: 'Ao receber a notificação de confirmação de agendamento, entre no aplicativo Cenos e, na página principal, entre em "Minha Agenda" ou "Meus Agendamentos" e verifique o agendamento disponível para confirmação. Após identificar o agendamento e confirmar os dados, aperte em "confirmar" para finalizar.',
    },
    {
        question: 'E se eu perder o agendamento?',
        answer: 
        'É de extrema importância que você e seu tutor zelem pelo tratamento, assim como o HCFMUSP faz. Dessa forma, para que seu tratamento seja mais efetivo e o investimento público não seja desperdiçado, implementamos a avaliação de histórico do paciente. Faltar, não confirmar e cancelar geram notas que são atribuídas ao perfil. A instituição se reserva no direito do desligamento do tratamento em caso de avaliações ruins geradas por acúmulo de notas negativas.',
    },
    {
        question: 'Consulta presencial, remota ou exame, como identificar?',
        answer: 'Os tipos de agendamentos são: "consulta presencial", "consulta remota" e "exame". Em caso de consulta presencial e exames, nas informações de agendamento, você pode encontrar informações sobre o local, observações e profissional que fará o atendimento. Para consultas remotas, basta utilizar o link disponibilizado nas observações.',
    },
];


const SuporteEAjuda: React.FC = () =>{
    return (
        // Container principal com padding responsivo
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">
            
            {/* Título da Página (ESTE É O HEADER QUE DEVE APARECER) */}
            <header className="mb-8 pb-3 border-b border-gray-300">
                <h1 className="text-3xl font-bold text-blue-700">Central de Ajuda e Dúvidas Frequentes</h1>
                <p className="text-sm text-gray-500 mt-1">Soluções rápidas para as questões mais comuns sobre o seu agendamento e perfil.</p>
            </header>

            {/* Mapeamento dos Cards de Ajuda */}
            <section className="max-w-4xl mx-auto">
                {FAQ_ITEMS.map((item, index) => (
                    <ItemAjuda
                        key={index}
                        questionNumber={index + 1}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </section>
            
        </div> 
    );
};

export default SuporteEAjuda;