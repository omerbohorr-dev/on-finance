import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Calculator } from './components/Calculator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DocumentsModal } from './components/DocumentsModal';

export default function App() {
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero onOpenDocuments={() => setIsDocsModalOpen(true)} />
        <Services />
        <Features />
        <Calculator />
        <Contact />
      </main>
      <Footer />
      <DocumentsModal 
        isOpen={isDocsModalOpen} 
        onClose={() => setIsDocsModalOpen(false)} 
      />
    </div>
  );
}