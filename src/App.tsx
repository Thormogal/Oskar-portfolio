import React, { useState } from 'react';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectList from './components/ProjectList';
import ContactSection from './components/ContactSection';

import './index.css';

function App() {
  // 👉 startsida = 'about'
  const [activeSection, setActiveSection] = useState<string>('about');

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
        return <AboutSection />;
    }
  };

  return (
    <div className="container">
      <NavBar setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}

export default App;