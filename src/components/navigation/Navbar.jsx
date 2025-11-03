import React from 'react';
import { HelpCircle, Bell, Settings, User, Menu } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Left Section - Menu + Logo */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">RH</span>
              </div>
              <span className="text-lg font-semibold text-gray-800">Gestion RRHH</span>
            </div>
          </div>

          {/* Center - Search Bar */}
          <SearchBar />

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <HelpCircle className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full grid grid-cols-3 gap-0.5 p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Icon Menu Bar */}
        <div className="bg-blue-50 border-t border-blue-100">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center space-x-4">
            {[
              { icon: '🔍', label: 'Search' },
              { icon: '✏️', label: 'Edit' },
              { icon: '📄', label: 'Documents' },
              { icon: '💬', label: 'Messages' },
              { icon: '👥', label: 'People' },
              { icon: '📅', label: 'Calendar' },
              { icon: '💼', label: 'Work' },
              { icon: '✓', label: 'Tasks' },
              { icon: '⚙️', label: 'Settings' },
              { icon: '🎯', label: 'Goals' },
              { icon: '📊', label: 'Reports' }
            ].map((item, idx) => (
              <button 
                key={idx} 
                className="flex flex-col items-center p-2 hover:bg-blue-100 rounded-lg transition-colors"
                title={item.label}
              >
                <span className="text-2xl">{item.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}