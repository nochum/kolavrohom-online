import React from 'react';
import { NavLink } from '../Navigation';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const menuItems = [
  { icon: '📖', to: '/', text: 'Daf Yomi' },
  { icon: '📞', to: '/phone', text: 'Listen by Phone' },
  { icon: 'ℹ️', to: '/about', text: 'About Us' },
  { icon: '❓', to: '/faqs', text: 'FAQs' },
  { icon: '✉️', to: '/contact', text: 'Contact Us' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // On desktop, always show if open; on mobile, show overlay and close button
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && <div className={styles.backdrop} onClick={onClose} aria-label="Close sidebar" tabIndex={-1} />}
      <aside
        className={isOpen ? `${styles.sidebar} ${styles.sidebarOpen}` : styles.sidebar}
        aria-label="Sidebar navigation"
        tabIndex={-1}
      >
        {/* Close button for mobile */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">×</button>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map(item => (
            <li key={item.to} style={{ margin: '1rem 0' }}>
              <NavLink to={item.to}>
                <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar; 