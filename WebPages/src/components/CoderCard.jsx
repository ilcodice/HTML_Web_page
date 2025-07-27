import React from 'react';

const CoderCard = ({ rank, firstName, lastName, avatarUrl, score }) => {
  // const rankIcons = ['🥇', '🥈', '🥉'];

  return (
    <div className="flex items-center p-4 bg-gray-300  rounded-lg shadow-md gap-4">
      {/* <div className="text-2xl">{rankIcons[rank - 1] || `${rank}.`}</div> */}
      <img
        src={avatarUrl}
        alt={`${firstName} ${lastName}`}
        className="w-12 h-12 rounded-full object-cover border border-gray-300"
      />
      <div className="flex-1">
        <div className="font-semibold text-gray-800 dark:text-white">
          {firstName} {lastName}
        </div>

      </div>        
      <div className="text-sm text-gray-500 dark:text-gray-400">
          Score: {score}
        </div>
    </div>
  );
};

export default CoderCard;
