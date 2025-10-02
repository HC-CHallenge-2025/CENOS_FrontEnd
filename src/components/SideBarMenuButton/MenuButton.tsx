import React from 'react';

interface MenuButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, isOpen }) => {
    return (
    <button className="menu-button" onClick={onClick}>
        {isOpen ? 'Fechar' : 'Abrir'} Menu
    </button>
    );
};

export default MenuButton;