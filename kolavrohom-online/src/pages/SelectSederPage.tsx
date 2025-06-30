import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectSederPage: React.FC = () => {
  const navigate = useNavigate();
  const sederOptions = [
    'זרעים',
    'מועד', 
    'נשים',
    'נזיקין',
    'קדשים',
    'טהרות'
  ];
  const sederRoutes = [
    '/zeraim',
    '/moed',
    '/nashim',
    '/nezikin',
    '/kodashim',
    '/taharot'
  ];

  const mainStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#e7d2cc',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyle: React.CSSProperties = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minWidth: '400px',
    maxWidth: '600px'
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '2rem 2rem',
    backgroundColor: '#d6d3d1',
    border: '2px solid #57534e',
    color: '#1c1917',
    fontSize: '1.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    display: 'block',
    textAlign: 'center'
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#a8a29e';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#d6d3d1';
  };

  return (
    <main style={mainStyle}>
      <div style={containerStyle}>
        {sederOptions.map((seder, index) => (
          <button
            key={index}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(sederRoutes[index])}
          >
            {seder}
          </button>
        ))}
      </div>
    </main>
  );
};

export default SelectSederPage;