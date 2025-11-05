import React from 'react';
import { 
  BarChart3, 
  Briefcase,
  ArrowRight,
  ExternalLink  // ← AGREGAR
} from 'lucide-react';

// Mapeo de iconos
const iconMap = {
  BarChart3,
  Briefcase
};

export default function GestionCard({ data }) {
  const Icon = iconMap[data.icon];

  // Función para manejar el click
  const handleClick = () => {
    if (data.externalLink) {
      // Abrir en nueva pestaña
      window.open(data.externalLink, '_blank', 'noopener,noreferrer');
    } else {
      console.log('Navegando a:', data.route);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Header compacto con gradiente */}
      <div className={`relative bg-gradient-to-r ${data.gradient} p-6`}>
        {/* Badge flotante */}
        {data.badge && (
          <div className="absolute top-3 right-3 bg-white bg-opacity-90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {data.badge}
          </div>
        )}
        
        {/* Icono */}
        <div className="flex items-center justify-between">
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {data.title}
        </h3>
        <p className="text-sm text-gray-600 mb-5 leading-relaxed min-h-[3rem]">
          {data.description}
        </p>

        {/* Botón de acción compacto */}
        <button
          onClick={handleClick}
          className="w-full flex items-center justify-center space-x-2 py-2.5 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 font-semibold group"
        >
          <span>Ver más</span>
          <div className="flex items-center space-x-1">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            {data.externalLink && (
              <ExternalLink className="w-3 h-3 opacity-70" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}