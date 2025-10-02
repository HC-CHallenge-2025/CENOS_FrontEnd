import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import "./SideBar.css";

const LogoIcon = () => <span style={{fontSize: '2.5rem', color: '#00AAAA'}}>C+</span>;
const HomeIcon = () => <span style={{marginRight: '10px'}}>🏠</span>;
const AgendaIcon = () => <span style={{marginRight: '10px'}}>🗓️</span>;
const PatientIcon = () => <span style={{marginRight: '10px'}}>🧑‍⚕️</span>;
const CollabIcon = () => <span style={{marginRight: '10px'}}>🩺</span>;
const InfoIcon = () => <span style={{marginRight: '10px'}}>❓</span>;
const LogoutIcon = () => <span style={{marginRight: '10px'}}>➡️</span>;
const BackIcon = () => <span style={{fontWeight: '900'}}>&lt;</span>;


interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const location = useLocation(); 
    
    const isLinkActive = (path: string): boolean => {
        return location.pathname.startsWith(path);
    };

    // 🎯 NOVO HANDLER: Impede que o clique na barra se propague para o overlay.
    const handleSidebarClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            {/* O Overlay AGORA É RESPONSÁVEL POR FECHAR O MENU QUANDO CLICADO FORA */}
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

            <div 
                className='menuSideBar' 
                onClick={handleSidebarClick} // 🎯 APLICAÇÃO CRUCIAL AQUI 🎯
            >

                <div className='headerSideBar'>
                    {/* Botão de Retorno (Seta para a Esquerda) */}
                    <button className="close-btn" onClick={onClose} aria-label="Fechar Menu">
                        <BackIcon /> 
                    </button>
                    <div className='logo-info'>
                        <LogoIcon />
                        <div className='logo-text'>
                            <span className='logo-name'>Cenos</span>
                            <span className='logo-subtitle'>IMREA - HC</span>
                        </div>
                    </div>
                </div>

                {/* ... GRUPOS DE NAVEGAÇÃO ... (Omitido para brevidade) */}
                <div className='sub-menuGroup'>
                    <p className='subTitleSideBar'>NAVEGAÇÃO</p>
                    <nav className='subMenu-nav'> 
                        <ul className='sideBar-ul'> 
                            {/* Início / Análise Avançada */}
                            <li className={`menuSideBar-li ${isLinkActive('/analise-avancada') ? 'active' : ''}`}> 
                                <Link to="/home" onClick={onClose}>
                                    <HomeIcon /> Início
                                </Link>
                            </li> 
                            {/* Agendamentos */}
                            <li className={`menuSideBar-li ${isLinkActive('/agendamentos') ? 'active' : ''}`}> 
                                <Link to="/agendamentos" onClick={onClose}>
                                    <AgendaIcon /> Agendamentos
                                </Link>
                            </li> 
                            {/* Pacientes */}
                            <li className={`menuSideBar-li ${isLinkActive('/pacientes') ? 'active' : ''}`}> 
                                <Link to="/pacientes" onClick={onClose}>
                                    <PatientIcon /> Pacientes
                                </Link>
                            </li> 
                            {/* Colaboradores / Médicos/Terapeutas */}
                            <li className={`menuSideBar-li ${isLinkActive('/colaboradores') ? 'active' : ''}`}> 
                                <Link to="/colaboradores" onClick={onClose}>
                                    <CollabIcon /> Médicos/Terapeutas
                                </Link>
                            </li>                            
                        </ul>
                    </nav>
                </div>
                
                <div className='sub-menuGroup'>
                    <p className='subTitleSideBar'>INFORMAÇÕES</p>
                    <nav className='subMenu-nav'>
                        <ul className='sideBar-ul'>
                            <li className={`menuSideBar-li ${isLinkActive('/suporte-e-ajuda') ? 'active' : ''}`}> 
                                <Link to="/suporte-e-ajuda" onClick={onClose}>
                                    <InfoIcon /> Ajuda
                                </Link>
                            </li>
                        </ul> 
                    </nav>
                </div>

                {/* --- FOOTER DA SIDEBAR --- */}
                <div className='footerSideBar'>
                    <div className='user-profile'>
                        <div className='user-avatar'>P</div>
                        <div className='user-info'>
                            <h3>Paulo André Gomes</h3>
                            <span>Administrador</span>
                        </div>
                    </div>

                    <div className='logoutButton-div'>
                        <button className='logoutButton'>
                            <LogoutIcon />
                            <span>Sair</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
