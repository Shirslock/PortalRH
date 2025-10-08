import React from 'react';

export default function TabButton({ label, count, active, onClick }) {
  const activeClasses = active
    ? 'bg-blue-100 text-blue-700 font-semibold'
    : 'text-gray-600 hover:bg-gray-100';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors ${activeClasses}`}
    >
      {label} {count !== undefined && `(${count})`}
    </button>
  );
}