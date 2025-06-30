import React from 'react';

interface DafButtonProps {
  type: 'yesterday' | 'today' | 'tomorrow';
  label: React.ReactNode;
  onClick: () => void;
  highlighted?: boolean;
}

const DafButton: React.FC<DafButtonProps> = ({ type: _type, label, onClick, highlighted }) => {
  return (
    <button onClick={onClick} style={{ fontWeight: highlighted ? 'bold' : 'normal', width: '100%', padding: '1rem', fontSize: '1.1rem', borderRadius: 8, border: '1px solid #dbcdc0', background: '#f8f6f3', cursor: 'pointer' }}>
      {label}
    </button>
  );
};

export default DafButton; 