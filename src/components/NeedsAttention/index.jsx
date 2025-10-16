import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import TabNavigation from './TabNavigation';

import { tabsData, ptoLeaveData, coursesData } from '../../data/needsAttentionData';

export default function NeedsAttention() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="mb-8">
      {/* Título y navegación */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Necesidad de Atencion</h2>
        <TabNavigation 
          tabs={tabsData}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* Botones de filtro con iconos */}
      <FilterButtons />

      {/* Grid de Cards */}
      
    </div>
  );
}