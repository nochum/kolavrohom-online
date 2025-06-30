import React, { useState } from 'react';
import { useCalendarData } from '../hooks/useCalendarData';
import { useDafNavigation } from '../hooks/useDafNavigation';
import { DafButton } from '../components/UI';
import { AudioPlayer } from '../components/AudioPlayer';
import styles from './HomePage.module.css';

const AUDIO_BASE = 'https://dafcvwmmdhi2y.cloudfront.net/audio';

const HomePage: React.FC = () => {
  const { data, loading, error, retry } = useCalendarData();
  const nav = useDafNavigation(data);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [currentLabel, setCurrentLabel] = useState<string | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error || !data) return (
    <div style={{ textAlign: 'center', color: '#b00020', margin: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>{error || 'Error loading calendar data.'}</div>
      <button onClick={retry} style={{ background: '#dbcdc0', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontSize: '1rem', cursor: 'pointer' }} aria-label="Retry">Retry</button>
    </div>
  );

  const yesterday = nav.getYesterdayDaf();
  const today = nav.getTodayDaf();
  const tomorrow = nav.getTomorrowDaf();

  const playAudio = (daf?: { daf: string; label: string }) => {
    if (!daf) return;
    setCurrentAudio(`${AUDIO_BASE}${daf.daf}`);
    setCurrentLabel(daf.label);
  };

  return (
    <main>
      <div className={styles.heading}>Daf Yomi Audio</div>
      <div className={styles.buttonGroup} role="group" aria-label="Daf navigation">
        <div className={styles.buttonWrapper}>
          <DafButton
            type="yesterday"
            label={<><span className={styles.buttonLabel}>Yesterday's Daf</span><br />{yesterday?.label || 'Yesterday'}</>}
            onClick={() => playAudio(yesterday)}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <DafButton
            type="today"
            label={<><span className={styles.buttonLabel}>Today's Daf</span><br />{today?.label || 'Today'}</>}
            onClick={() => playAudio(today)}
            highlighted
          />
        </div>
        <div className={styles.buttonWrapper}>
          <DafButton
            type="tomorrow"
            label={<><span className={styles.buttonLabel}>Tomorrow's Daf</span><br />{tomorrow?.label || 'Tomorrow'}</>}
            onClick={() => playAudio(tomorrow)}
          />
        </div>
      </div>
      {currentAudio && currentLabel && (
        <AudioPlayer src={currentAudio} label={currentLabel} />
      )}
    </main>
  );
};

export default HomePage; 