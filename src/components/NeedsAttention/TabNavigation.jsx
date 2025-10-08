import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TabButton from '../common/TabButton';

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex items-center space-x-2">
      {/* Tabs */}
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          label={tab.label}
          count={tab.count}
          active={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
      
      {/* Botones de navegación */}
      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}