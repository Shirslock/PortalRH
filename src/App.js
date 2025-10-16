import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import NeedsAttention from './components/NeedsAttention';
import OrganizationalUpdates from './components/OrganizationalUpdates';
import ExploreMore from './components/ExploreMore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sección de Bienvenida */}
        <WelcomeSection />
        
        {/* Sección Needs Attention */}
        <NeedsAttention />
        
        {/* Sección Organizational Updates */}
        <OrganizationalUpdates />
        
        {/* Sección Explore More */}
        <ExploreMore />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;