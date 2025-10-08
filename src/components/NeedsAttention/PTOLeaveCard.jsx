import React from 'react';
import { CheckCircle, X, MoreHorizontal } from 'lucide-react';

export default function PTOLeaveCard({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {data.employee.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          {/* Info */}
          <div>
            <p className="font-semibold text-gray-900">{data.type}</p>
            <p className="text-sm text-gray-500">{data.employee}</p>
          </div>
        </div>
        
        {/* Menu */}
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      
      {/* Details */}
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-500">Periodo</span>
          <span className="font-medium text-gray-900">{data.period}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tipo</span>
          <span className="font-medium text-gray-900">{data.leaveType}</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <a href="https://github.com/Shirslock" className="text-sm text-blue-600 hover:underline font-medium">
          Ver Todo ({data.totalRequests})
        </a>
        <div className="flex space-x-2">
          <button 
            className="p-1.5 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            title="Approve"
          >
            <CheckCircle className="w-4 h-4 text-white" />
          </button>
          <button 
            className="p-1.5 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
            title="Reject"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}