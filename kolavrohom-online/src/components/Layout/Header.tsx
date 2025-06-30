import React from 'react';
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
        <img 
          src={HERO_IMAGE} 
          alt="Kolavrohom hero" 
          className={styles.heroImage}
        />
      </div>
      <nav className={styles.nav} aria-label="Main navigation">
        <button className={styles.menuIcon} onClick={onMenuClick} aria-label="Open menu">
          ☰
        </button>
        <div className={styles.navLinks}>
          <NavLink to="/" className={styles.navLink}>Daf Yomi</NavLink>
          <NavLink to="/select" className={styles.navLink}>Select a Daf</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;