import React, { useState } from 'react';
import { AudioPlayer } from '../components/AudioPlayer';
import { mishnahOrders, tractatesByOrder } from '../utils/talmudStructure';
import styles from './PageSelectionPage.module.css';

const AUDIO_BASE = 'https://dafcvwmmdhi2y.cloudfront.net/audio';

const PageSelectionPage: React.FC = () => {
  // Placeholder for future async data error/loading handling
  // const { data, loading, error, retry } = useCalendarData();
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const [selectedOrder, setSelectedOrder] = useState<string>('');
  const [selectedTractate, setSelectedTractate] = useState<string>('');
  const [selectedTractateObj, setSelectedTractateObj] = useState<any>(null);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [label, setLabel] = useState<string>('');

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(e.target.value);
    setSelectedTractate('');
    setSelectedTractateObj(null);
    setSelectedPage(1);
    setAudioUrl('');
    setLabel('');
  };

  const handleTractateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tractateEnglish = e.target.value;
    setSelectedTractate(tractateEnglish);
    setSelectedPage(1);
    setAudioUrl('');
    setLabel('');
    const tractateObj = tractatesByOrder[selectedOrder]?.find((t: any) => t.english === tractateEnglish);
    setSelectedTractateObj(tractateObj);
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const page = Number(e.target.value);
    setSelectedPage(page);
    if (selectedTractateObj) {
      const url = `${AUDIO_BASE}/${selectedTractateObj.english}/${page.toString().padStart(2, '0')}.mp3`;
      setAudioUrl(url);
      setLabel(`${selectedTractateObj.hebrew} דף ${page}`);
    }
  };

  return (
    <main>
      <div className={styles.card}>
        <div className={styles.heading}>Select a Daf</div>
        <div className={styles.formGroup}>
          <div style={{ flex: 1 }}>
            <label className={styles.label} htmlFor="order-select">Order (סדר)</label>
            <select
              id="order-select"
              className={styles.select}
              value={selectedOrder}
              onChange={handleOrderChange}
              aria-label="Select Order"
            >
              <option value="">Select Order</option>
              {mishnahOrders.map(order => (
                <option key={order.english} value={order.english}>{order.hebrew}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: 2 }}>
            <label className={styles.label} htmlFor="tractate-select">Tractate (מסכת)</label>
            <select
              id="tractate-select"
              className={styles.select}
              value={selectedTractate}
              onChange={handleTractateChange}
              aria-label="Select Tractate"
              disabled={!selectedOrder}
            >
              <option value="">Select Tractate</option>
              {selectedOrder && tractatesByOrder[selectedOrder]?.map((tractate: any) => (
                <option key={tractate.english} value={tractate.english}>{tractate.hebrew}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className={styles.label} htmlFor="page-select">Page (דף)</label>
            <select
              id="page-select"
              className={styles.select}
              value={selectedPage}
              onChange={handlePageChange}
              aria-label="Select Page"
              disabled={!selectedTractate || !selectedTractateObj}
            >
              {selectedTractate && selectedTractateObj && Array.from({ length: selectedTractateObj.pages }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>
        {audioUrl && label && (
          <AudioPlayer src={audioUrl} label={label} />
        )}
      </div>
    </main>
  );
};

export default PageSelectionPage; 