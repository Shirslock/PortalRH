import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import NeedsAttention from './components/NeedsAttention';
import OrganizationalUpdates from './components/OrganizationalUpdates';
import ExploreMore from './components/ExploreMore';

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
        
        {/* Fin de la aplicación */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-md p-8 text-center mt-8">
          <h2 className="text-3xl font-bold mb-2">
            Aca podemos seguir agregando mas secciones
          </h2>
          
        </div>
      </div>
    </div>
  );
}

export default App;