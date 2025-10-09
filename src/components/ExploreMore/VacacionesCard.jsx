import React from 'react';
import { 
  Inbox, 
  Calendar,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

// Mapeo de iconos
const iconMap = {
  Inbox,
  Calendar
};

export default function VacacionesCard({ data, onClick }) {
  const Icon = iconMap[data.icon];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="flex flex-col md:flex-row">
        {/* Lado izquierdo - Icono con gradiente */}
        <div className={`w-full md:w-2/5 bg-gradient-to-br ${data.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
          {/* Decoración de fondo */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
          </div>
          
          {/* Icono principal */}
          <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Icon className="w-24 h-24 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Lado derecho - Contenido */}
        <div className="flex-1 p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {data.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {data.description}
          </p>

          {/* Estadísticas */}
          <div className="flex items-center space-x-4 mb-6">
            {Object.entries(data.stats).map(([key, value], idx) => (
              <div key={idx} className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">
                  {value} {key}
                </span>
              </div>
            ))}
          </div>

          {/* Botón de acción */}
          <button
            onClick={() => onClick(data)}
            className={`w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r ${data.gradient} text-white rounded-lg hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg`}
          >
            <span>Acceder Ahora</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}