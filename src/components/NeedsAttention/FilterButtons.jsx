import React, { useState } from 'react';
import IconButton from '../common/IconButton';
import { filterButtons } from '../../data/filterButtonsData';

export default function FilterButtons() {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {filterButtons.map((button) => (
        <IconButton
          key={button.id}
          icon={button.icon}
          label={button.label}
          count={button.count}
          color={button.color}
          active={activeFilter === button.id}
          onClick={() => setActiveFilter(activeFilter === button.id ? null : button.id)}
        />
      ))}
    </div>
  );
}