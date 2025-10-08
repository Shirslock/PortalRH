import React from 'react';

export default function Button({ children, onClick, variant = 'primary' }) {
  const variants = {
    primary: 'px-4 py-2 bg-white border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors',
    icon: 'p-2 bg-white border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors'
  };

  return (
    <button 
      onClick={onClick}
      className={variants[variant]}
    >
      {children}
    </button>
  );
}