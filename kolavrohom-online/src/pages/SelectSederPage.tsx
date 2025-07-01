import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/theme.module.css';

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
    backgroundColor: '#ebe3dc',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '0 1rem'
  };

  return (
    <>
      <main style={mainStyle}>
        <div style={containerStyle} className="seder-container">
          {sederOptions.map((seder, index) => (
            <button
              key={index}
              className={styles.button}
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