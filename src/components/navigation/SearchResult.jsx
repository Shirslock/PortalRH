import React from 'react';
import { Briefcase } from 'lucide-react';

export default function SearchResult({ employee, onClick, isHighlighted }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left ${
        isHighlighted ? 'bg-blue-50' : ''
      }`}
    >
      {/* Avatar */}
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-semibold text-sm">
          {employee.avatar}
        </span>
      </div>

      {/* Información del empleado */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <p className="font-semibold text-gray-900 truncate">
            {employee.nombre}
          </p>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
            #{employee.legajo}
          </span>
        </div>
        
        <div className="flex items-center space-x-3 text-xs text-gray-600">
          <span className="flex items-center space-x-1">
            <Briefcase className="w-3 h-3" />
            <span className="truncate">{employee.puesto}</span>
          </span>
          <span className="text-gray-400">•</span>
          <span className="truncate">{employee.departamento}</span>
        </div>
      </div>

      {/* Indicador activo */}
      <div className="flex-shrink-0">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
    </button>
  );
}