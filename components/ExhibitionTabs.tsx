
import React from 'react';
import { ExhibitionStatus } from '../types';

interface ExhibitionTabsProps {
  currentStatus: ExhibitionStatus;
  onStatusChange: (status: ExhibitionStatus) => void;
}

const ExhibitionTabs: React.FC<ExhibitionTabsProps> = ({ currentStatus, onStatusChange }) => {
  const tabs: { label: string; value: ExhibitionStatus }[] = [
    { label: 'Current', value: 'current' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Past', value: 'past' },
  ];

  return (
    <div className="exhibition-tabs-container mb-16 flex justify-center border-b border-gray-100">
      <div className="flex gap-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onStatusChange(tab.value)}
            className={`
              pb-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 relative
              ${currentStatus === tab.value 
                ? 'text-black font-medium' 
                : 'text-gray-400 hover:text-black'
              }
            `}
          >
            {tab.label}
            {currentStatus === tab.value && (
              <span className="absolute bottom-0 left-0 w-full h-px bg-black animate-[scale-x_0.3s_ease-out]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionTabs;
