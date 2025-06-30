import React from 'react';

interface DafButtonProps {
  type: 'yesterday' | 'today' | 'tomorrow';
  label: string;
  onClick: () => void;
  highlighted?: boolean;
}

const DafButton: React.FC<DafButtonProps> = ({ type, label, onClick, highlighted }) => {
  return (
    <button onClick={onClick} style={{ fontWeight: highlighted ? 'bold' : 'normal' }}>
      {label}
    </button>
  );
};

export default DafButton; 