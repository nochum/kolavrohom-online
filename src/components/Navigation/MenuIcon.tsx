import React from 'react';

interface MenuIconProps {
  onClick?: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="Open menu">
      {/* TODO: Add icon SVG or emoji */}
      ☰
    </button>
  );
};

export default MenuIcon; 