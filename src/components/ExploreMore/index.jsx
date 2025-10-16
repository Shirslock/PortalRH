import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import VacacionesCard from './VacacionesCard';
import GestionCard from './GestionCard';
import { vacacionesData, gestionData } from '../../data/exploreMoreData';

export default function ExploreMore() {
  const handleCardClick = (data) => {
    console.log('Navegando a:', data.route);
    alert(`Accediendo a: ${data.title}\nRuta: ${data.route}`);
  };

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Ver Mas</h2>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Sección Vacaciones */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-gray-800">Sección Vacaciones</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vacacionesData.map((item) => (
            <VacacionesCard 
              key={item.id} 
              data={item}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Sección Gestión */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-gray-800">Sección Gestión</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {gestionData.map((item) => (
            <GestionCard 
              key={item.id} 
              data={item}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}