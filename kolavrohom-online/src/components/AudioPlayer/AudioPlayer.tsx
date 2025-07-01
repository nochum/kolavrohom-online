import React, { useRef, useState, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
  src: string;
  label: string;
  onPlay?: () => void;
  onPause?: () => void;
  onTimeUpdate?: (time: number) => void;
  onClose?: () => void;
}

const speeds = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  src, 
  label, 
  onPlay, 
  onPause, 
  onTimeUpdate, 
  onClose 
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setReloadKey(k => k + 1);
  }, [src]);

  const handlePlay = () => {
    onPlay?.();
  };
  
  const handlePause = () => {
    onPause?.();
  };
  
  const handleTimeUpdate = () => {
    const time = audioRef.current?.currentTime || 0;
    onTimeUpdate?.(time);
  };
  
  const handleLoadedMetadata = () => {
    setLoading(false);
  };
  
  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };
  
  const handleFastForward = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration || 0;
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };
  
  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rate = Number(e.target.value);
    setPlaybackRate(rate);
  };
  
  const handleDownload = () => {
    window.open(src, '_blank');
  };
  
  const handleError = () => {
    setError('Audio failed to load. Please check your connection or try again.');
    setLoading(false);
  };
  
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    setReloadKey(k => k + 1);
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    onClose?.();
  };

  return (
    <div className={styles.audioPlayerCard}>
      <audio
        key={reloadKey}
        ref={audioRef}
        src={src}
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
        preload="auto"
        style={{ display: 'none' }}
      />
      
      {error ? (
        <div className={styles.errorContainer}>
          <div>{error}</div>
          <button className={styles.controlButton} onClick={handleRetry} aria-label="Retry loading audio">
            Retry
          </button>
        </div>
      ) : loading ? (
        <div className={styles.spinner} aria-label="Loading audio" />
      ) : (
        <>
          <div className={styles.trackInfo}>
            <div className={styles.trackTitle}>{label}</div>
          </div>
          
          <div className={styles.audioDiv}>
            <audio
              className={styles.nativeAudio}
              src={src}
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              onTimeUpdate={handleTimeUpdate}
              onRateChange={() => {
                if (audioRef.current) {
                  audioRef.current.playbackRate = playbackRate;
                }
              }}
            />
          </div>
          
          <div className={styles.playbackControls}>
            <button 
              className={styles.controlButton} 
              onClick={handleRewind} 
              aria-label="Rewind 10 seconds"
              title="Rewind 10 seconds"
            >
              <img src="https://dafcvwmmdhi2y.cloudfront.net/images/replay-10.png" alt="Replay 10s" />
            </button>
            
            <select 
              className={styles.playbackSelect} 
              value={playbackRate} 
              onChange={handleSpeedChange} 
              aria-label="Playback speed"
              title="Playback speed"
            >
              {speeds.map(s => (
                <option key={s} value={s}>{s}x</option>
              ))}
            </select>
            
            <button 
              className={styles.downloadButton} 
              onClick={handleDownload} 
              aria-label="Download MP3"
              title="Download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
            
            <button 
              className={styles.controlButton} 
              onClick={handleFastForward} 
              aria-label="Fast forward 10 seconds"
              title="Fast forward 10 seconds"
            >
              <img src="https://dafcvwmmdhi2y.cloudfront.net/images/forward-10.png" alt="Forward 10s" />
            </button>
          </div>
          
          <div className={styles.closeButton}>
            <button 
              className={styles.closeButtonInner} 
              onClick={handleClose}
              aria-label="Close audio player"
              title="Close"
            >
              ×
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;