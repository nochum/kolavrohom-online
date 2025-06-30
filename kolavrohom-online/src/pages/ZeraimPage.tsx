import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/theme.module.css';

const ZeraimPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/select'); // Navigate back to SelectDafPage (assuming this is the correct route)
  };

  const handleTractateClick = (tractate: string) => {
    // Navigate to the specific tractate page
    navigate(`/select/zeraim/${tractate}`);
  };

  // Only Berachot tractate for Daf Yomi
  const zeraimTractates = [
    { name: 'ברכות', english: 'berakhot' }
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
        <h1 className={styles.pageTitle}>זרעים</h1>
      </div>

      <div className={styles.tractateList}>
        {zeraimTractates.map((tractate) => (
          <button
            key={tractate.english}
            className={styles.tractateButton}
            onClick={() => handleTractateClick(tractate.english)}
            style={{
              width: '50%',
              margin: '0 auto',
              display: 'block'
            }}
          >
            {tractate.name}
          </button>
        ))}
      </div>
    </main>
  );
};

export default ZeraimPage;