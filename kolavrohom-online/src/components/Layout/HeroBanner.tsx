import React from 'react';

interface HeroBannerProps {
  src: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ src }) => {
  return (
    <div>
      <img src={src} alt="Kol Avrohom Hero Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default HeroBanner; 