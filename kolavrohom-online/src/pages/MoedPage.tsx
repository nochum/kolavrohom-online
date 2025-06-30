import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/theme.module.css';

const MoedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/select'); // Navigate back to SelectDafPage
  };

  const handleTractateClick = (tractate: string) => {
    // Navigate to the specific tractate page
    navigate(`/select/moed/${tractate}`);
  };

  // Tractates in the Moed order for Daf Yomi
  const moedTractates = [
    { name: 'שבת', english: 'shabbat' },
    { name: 'עירובין', english: 'eruvin' },
    { name: 'פסחים', english: 'pesachim' },
    { name: 'יומא', english: 'yoma' },
    { name: 'סוכה', english: 'sukkah' },
    { name: 'ביצה', english: 'beitzah' },
    { name: 'ראש השנה', english: 'rosh-hashanah' },
    { name: 'תענית', english: 'taanit' },
    { name: 'מגילה', english: 'megillah' },
    { name: 'מועד קטן', english: 'moed-katan' },
    { name: 'חגיגה', english: 'chagigah' }
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
        <h1 className={styles.pageTitle}>מועד</h1>
      </div>

      <div className={styles.tractateList}>
        {moedTractates.map((tractate) => (
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

export default MoedPage;