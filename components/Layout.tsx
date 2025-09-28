
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-navy text-slate dark:text-light-slate font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
