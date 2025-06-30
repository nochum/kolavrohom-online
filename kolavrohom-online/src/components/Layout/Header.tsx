import React from 'react';
import { HeroBanner } from './index';
import { NavLink } from '../Navigation';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuClick: () => void;
}

const HERO_IMAGE = 'https://dafcvwmmdhi2y.cloudfront.net/images/kolavrohom-hero.jpg';

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <HeroBanner src={HERO_IMAGE} />
      </div>
      <nav className={styles.nav} aria-label="Main navigation">
        <button className={styles.menuIcon} onClick={onMenuClick} aria-label="Open menu">
          {/* MenuIcon is just an emoji here for now */}
          ☰
        </button>
        <div className={styles.navLinks}>
          <NavLink to="/">Daf Yomi</NavLink>
          <NavLink to="/select">Select a Daf</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header; 