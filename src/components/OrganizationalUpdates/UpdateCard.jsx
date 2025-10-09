import React from 'react';
import { 
  Network, 
  UserPlus, 
  RefreshCw, 
  Search, 
  Award,
  ArrowRight 
} from 'lucide-react';

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Network,
  UserPlus,
  RefreshCw,
  Search,
  Award
};

export default function UpdateCard({ data, onClick }) {
  const Icon = iconMap[data.icon];

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Header con gradiente e icono */}
      <div className={`h-32 bg-gradient-to-br ${data.gradient} flex items-center justify-center relative overflow-hidden`}>
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
        
        {/* Icono principal */}
        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
          {data.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {data.description}
        </p>

        {/* Botón de acción */}
        <button 
          onClick={() => onClick(data)}
          className="w-full flex items-center justify-center space-x-2 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium group-hover:shadow-md"
        >
          <span>Acceder</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}