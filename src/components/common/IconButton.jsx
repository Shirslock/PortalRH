import React from 'react';
import { 
  Inbox, 
  CalendarClock, 
  UserPlus, 
  Award 
} from 'lucide-react';

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Inbox,
  CalendarClock,
  UserPlus,
  Award
};

export default function IconButton({ icon, label, count, color, active, onClick }) {
  const Icon = iconMap[icon];
  
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  const activeClasses = active 
    ? 'bg-blue-50 border-blue-500 text-blue-700' 
    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50';

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 border-2 rounded-lg transition-all ${activeClasses}`}
    >
      {/* Icono con color de fondo */}
      <div className={`${colorClasses[color]} p-1.5 rounded-md`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      
      {/* Texto */}
      <span className="font-medium">{label}</span>
      
      {/* Contador (badge) */}
      {count > 0 && (
        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
          {count}
        </span>
      )}
    </button>
  );
}