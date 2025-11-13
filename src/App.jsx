import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import { sectionsData } from './data/sectionsData';
import './styles/App.css';

function App() {
  const handleNavigation = (link) => {
    alert(`Navigating to: ${link}\n\nIn your actual implementation, this will redirect to the respective application.`);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <Hero onNavigate={handleNavigation} />
      {sectionsData.map((section, index) => (
        <Section 
          key={section.id} 
          section={section} 
          index={index} 
          onNavigate={handleNavigation} 
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;