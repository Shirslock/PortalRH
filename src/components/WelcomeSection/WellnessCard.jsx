import React from 'react';

export default function WellnessCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        {/* Icono */}
        <div className="w-24 h-24 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-5xl">{icon}</div>
        </div>
        
        {/* Texto */}
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-blue-100">{description}</p>
        </div>
      </div>
    </div>
  );
}