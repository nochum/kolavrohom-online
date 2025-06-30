import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tractatesByOrder, numberToHebrew } from '../utils/talmudStructure';
import { AudioPlayer } from '../components/AudioPlayer';
import styles from '../styles/theme.module.css';

const AUDIO_BASE = 'https://dafcvwmmdhi2y.cloudfront.net/audio';

const SelectDafPage: React.FC = () => {
  const { order, tractate } = useParams<{ order: string; tractate: string }>();
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  // Find the tractate object
  const tractateObj = order && tractate
    ? tractatesByOrder[order]?.find(t => t.english.toLowerCase() === tractate.toLowerCase())
    : undefined;

  if (!tractateObj) {
    return <main className={styles.pageContainer}><div>Tractate not found.</div></main>;
  }

  // Pages in Talmud start at daf 2
  const pageNumbers = Array.from({ length: tractateObj.pages }, (_, i) => i + 2);

  // Audio URL and label
  const audioUrl = selectedPage
    ? `${AUDIO_BASE}/${tractateObj.english}/${selectedPage.toString().padStart(2, '0')}.mp3`
    : '';
  const label = selectedPage
    ? `${tractateObj.hebrew} דף ${numberToHebrew(selectedPage)}`
    : '';

  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{tractateObj.hebrew}</h1>
        <h2 className={styles.pageSubtitle}>בחר דף</h2>
      </div>
      <div className={styles.tractateList} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {pageNumbers.map(page => (
          <button
            key={page}
            className={styles.tractateButton}
            style={{ minWidth: 60, margin: 4, fontSize: '1.2rem', fontWeight: selectedPage === page ? 'bold' : undefined }}
            onClick={() => setSelectedPage(page)}
            aria-label={`דף ${numberToHebrew(page)}`}
          >
            דף {numberToHebrew(page)}
          </button>
        ))}
      </div>
      {audioUrl && label && (
        <div style={{ marginTop: 32 }}>
          <AudioPlayer src={audioUrl} label={label} />
        </div>
      )}
    </main>
  );
};

export default SelectDafPage; 