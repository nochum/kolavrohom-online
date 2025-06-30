import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Sidebar } from './components/Layout';
import ErrorBoundary from './components/Layout/ErrorBoundary';
import HomePage from './pages/HomePage';
import SelectSederPage from './pages/SelectSederPage';
import TractateListPage from './pages/TractateListPage';
import PageSelectionPage from './pages/PageSelectionPage';
import PhonePage from './pages/PhonePage';
import AboutPage from './pages/AboutPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';
import styles from './styles/theme.module.css';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => setSidebarOpen(open => !open);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <div className={styles.appRoot}>
      <ErrorBoundary>
        <Router>
          <Header onMenuClick={handleMenuClick} />
          <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
          <main className={styles.mainContent}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/select" element={<SelectSederPage />} />
              <Route path="/select/:order" element={<TractateListPage />} />
              <Route path="/select/:order/:tractate" element={<PageSelectionPage />} />
              <Route path="/phone" element={<PhonePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App; 