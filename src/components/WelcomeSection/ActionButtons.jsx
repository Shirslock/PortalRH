import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import Button from '../common/Button';

export default function ActionButtons({ row1, row2 }) {
  return (
    <div className="mb-6">
      {/* Primera fila de botones */}
      <div className="flex flex-wrap gap-3 mb-4">
        {row1.map((label, idx) => (
          <Button key={idx}>
            {label}
          </Button>
        ))}
      </div>
      
      {/* Segunda fila de botones */}
      <div className="flex flex-wrap gap-3">
        {row2.map((label, idx) => (
          <Button key={idx}>
            {label}
          </Button>
        ))}
        {/* Botón con solo icono */}
        <Button variant="icon">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}