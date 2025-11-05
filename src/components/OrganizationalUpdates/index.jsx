import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import UpdateCard from './UpdateCard';
import TabButton from '../common/TabButton';
import { 
  organizationalUpdatesData, 
  organizationalTabsData 
} from '../../data/organizationalUpdatesData';

export default function OrganizationalUpdates() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="mb-8">
      {/* Header con título y navegación */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Organizational Updates
        </h2>
        
        {/* Tabs y navegación */}
        <div className="flex items-center space-x-2">
          {organizationalTabsData.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              count={tab.count}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
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
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {organizationalUpdatesData.map((item) => (
          <UpdateCard 
            key={item.id} 
            data={item}
          />
        ))}
      </div>
    </div>
  );
}