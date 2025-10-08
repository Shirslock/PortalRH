import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1 leading-tight">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500">{course.subtitle}</p>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      
      {/* Details */}
      <div className="text-sm text-gray-600 mb-4 space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-500">Modalidad</span>
          <span className="font-medium text-gray-900">{course.courseType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Duracion</span>
          <span className="font-medium text-gray-900">
            {course.duration || course.dueDate}
          </span>
        </div>
      </div>
      
      {/* Action Button */}
      <button className="w-full py-2 bg-white border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium">
        {course.buttonText}
      </button>
    </div>
  );
}