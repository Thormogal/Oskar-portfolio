import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import CVSection from './components/CVSection';
import ProjectList from './components/ProjectList';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectList />;
      case 'contact':
        return <ContactSection />;
      case 'cv':
        return null;
      default:
        return <Header />;
    }
  };
  

  return (
    <div className="container">
      <NavBar setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
