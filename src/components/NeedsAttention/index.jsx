import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import TabNavigation from './TabNavigation';
import PTOLeaveCard from './PTOLeaveCard';
import CourseCard from './CourseCard';
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* PTO Leave Card */}
        <PTOLeaveCard data={ptoLeaveData} />
        
        {/* Course Cards */}
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}