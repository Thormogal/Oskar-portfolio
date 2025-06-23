import React from 'react';
import './NavBar.css';

interface NavBarProps {
    setActiveSection: (section: string) => void;
  }
  
  const NavBar = ({ setActiveSection }: NavBarProps) => {
    const openPDF = () => {
      window.open('/assets/Oskar_Lovstrand_CV.pdf', '_blank');
    };
  
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li><button onClick={() => setActiveSection('about')}>About me</button></li>
          <li><button onClick={openPDF}>CV</button></li>
          <li><button onClick={() => setActiveSection('projects')}>Projects</button></li>
          <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  
