import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import NeedsAttention from './components/NeedsAttention';

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
        
        {/* Placeholder para siguientes secciones */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Needs Attention ✓
          </h2>
          <p className="text-gray-600">
            Siguiente paso: Organizational Updates
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;