import React, { useRef, useState, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
  src: string;
  label: string;
  onPlay?: () => void;
  onPause?: () => void;
  onTimeUpdate?: (time: number) => void;
}

const speeds = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, label, onPlay, onPause, onTimeUpdate }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.volume = volume;
    }
  }, [playbackRate, volume]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setReloadKey(k => k + 1); // force audio reload
  }, [src]);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay?.();
  };
  const handlePause = () => {
    setIsPlaying(false);
    onPause?.();
  };
  const handleTimeUpdate = () => {
    const time = audioRef.current?.currentTime || 0;
    setCurrentTime(time);
    onTimeUpdate?.(time);
  };
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
    setLoading(false);
  };
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };
  const handleFastForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };
  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rate = Number(e.target.value);
    setPlaybackRate(rate);
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
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

  // Format time as mm:ss
  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.audioPlayerCard}>
      <div className={styles.label}>{label}</div>
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
        <div style={{ textAlign: 'center', color: '#b00020', margin: '1.5rem 0' }}>
          <div>{error}</div>
          <button className={styles.button} onClick={handleRetry} aria-label="Retry loading audio">Retry</button>
        </div>
      ) : loading ? (
        <div className={styles.spinner} aria-label="Loading audio" />
      ) : (
        <div className={styles.controls}>
          <button className={styles.button} onClick={handleRewind} aria-label="Rewind 10 seconds">⏪ 10s</button>
          <button
            className={styles.button}
            onClick={() => {
              if (audioRef.current) {
                if (isPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play();
                }
              }
            }}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶️'}
          </button>
          <button className={styles.button} onClick={handleFastForward} aria-label="Fast forward 10 seconds">10s ⏩</button>
          <input
            className={styles.range}
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Seek"
          />
          <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
          <select className={styles.select} value={playbackRate} onChange={handleSpeedChange} aria-label="Playback speed">
            {speeds.map(s => (
              <option key={s} value={s}>{s}x</option>
            ))}
          </select>
          <button className={styles.button} onClick={handleDownload} aria-label="Download MP3">⬇️</button>
          <input
            className={styles.range}
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume"
          />
        </div>
      )}
    </div>
  );
};

export default AudioPlayer; 