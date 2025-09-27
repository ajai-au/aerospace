import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { Gallery } from './components/pages/Gallery';
import { FAQ } from './components/pages/FAQ';
import { Contact } from './components/pages/Contact';
import { News } from './components/pages/News';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'gallery':
        return <Gallery />;
      case 'news':
        return <News />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="overflow-hidden">
          {renderCurrentPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;