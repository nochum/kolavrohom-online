import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/theme.module.css';

const NezikinPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/select'); // Navigate back to SelectDafPage
  };

  const handleTractateClick = (tractate: string) => {
    // Navigate to the specific tractate page
    navigate(`/select/nezikin/${tractate}`);
  };

  // Tractates in the Nezikin order for Daf Yomi
  const nezikinTractates = [
    { name: 'בבא קמא', english: 'bava-kamma' },
    { name: 'בבא מציעא', english: 'bava-metzia' },
    { name: 'בבא בתרא', english: 'bava-batra' },
    { name: 'סנהדרין', english: 'sanhedrin' },
    { name: 'מכות', english: 'makkot' },
    { name: 'שבועות', english: 'shevuot' },
    { name: 'עבודה זרה', english: 'avodah-zarah' },
    { name: 'הוריות', english: 'horayot' }
  ];

  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <button 
          className={styles.backButton}
          onClick={handleBackClick}
          aria-label="חזור"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className={styles.pageTitle}>נזיקין</h1>
      </div>

      <div className={styles.tractateList}>
        {nezikinTractates.map((tractate) => (
          <button
            key={tractate.english}
            className={styles.tractateButton}
            onClick={() => handleTractateClick(tractate.english)}
            style={{
              width: '90%',
              margin: '8px auto',
              display: 'block',
              padding: '16px',
              textAlign: 'center'
            }}
          >
            {tractate.name}
          </button>
        ))}
      </div>
    </main>
  );
};

export default NezikinPage;