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
    padding: '1rem', // Reduced padding on mobile
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyle: React.CSSProperties = {
    width: '100%', // Changed from 50% to 100%
    maxWidth: '600px', // Keep max width for larger screens
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '0 1rem' // Add horizontal padding
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '1.5rem 1rem', // Reduced padding for mobile
    backgroundColor: '#d6d3d1',
    border: '2px solid #57534e',
    color: '#1c1917',
    fontSize: '1.5rem', // Slightly smaller font on mobile
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    display: 'block',
    textAlign: 'center',
    boxSizing: 'border-box' // Ensure padding doesn't add to width
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#a8a29e';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#d6d3d1';
  };

  // Media query styles for larger screens
  const mediaQueryStyle = `
    @media (min-width: 640px) {
      .seder-container {
        padding: 2rem !important;
      }
      .seder-button {
        padding: 2rem 2rem !important;
        font-size: 1.875rem !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyle}</style>
      <main style={mainStyle}>
        <div style={containerStyle} className="seder-container">
          {sederOptions.map((seder, index) => (
            <button
              key={index}
              style={buttonStyle}
              className="seder-button"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate(sederRoutes[index])}
            >
              {seder}
            </button>
          ))}
        </div>
      </main>
    </>
  );
};

export default SelectSederPage;