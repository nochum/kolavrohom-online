import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/theme.module.css';

const NashimPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/select'); // Navigate back to SelectDafPage
  };

  const handleTractateClick = (tractate: string) => {
    // Navigate to the specific tractate page
    navigate(`/select/nashim/${tractate}`);
  };

  // Tractates in the Nashim order for Daf Yomi
  const nashimTractates = [
    { name: 'יבמות', english: 'yevamot' },
    { name: 'כתובות', english: 'ketubot' },
    { name: 'נדרים', english: 'nedarim' },
    { name: 'נזיר', english: 'nazir' },
    { name: 'סוטה', english: 'sotah' },
    { name: 'גיטין', english: 'gittin' },
    { name: 'קידושין', english: 'kiddushin' }
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
        <h1 className={styles.pageTitle}>נשים</h1>
      </div>

      <div className={styles.tractateList}>
        {nashimTractates.map((tractate) => (
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

export default NashimPage;