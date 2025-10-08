import React from 'react';
import ActionButtons from './ActionButtons';
import WellnessCard from './WellnessCard';
import { actionButtonsRow1, actionButtonsRow2, wellnessData } from '../../data/welcomeData';

export default function WelcomeSection() {
  // Función para obtener el saludo según la hora
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Buenos dias';
    if (hour >= 12 && hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  return (
    <div className="mb-8">
      {/* Título de bienvenida */}
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">
        {getGreeting()}, Cristian
      </h1>
      
      {/* Botones de acciones */}
      <ActionButtons 
        row1={actionButtonsRow1} 
        row2={actionButtonsRow2} 
      />
      
      {/* Card de Wellness */}
      <WellnessCard 
        icon={wellnessData.icon}
        title={wellnessData.title}
        description={wellnessData.description}
      />
    </div>
  );
}