import React from 'react';
import CoderCard from './CoderCard';

const coders = [
  { firstName: 'Alice', lastName: 'Johnson', avatar: 'https://i.pravatar.cc/150?img=1', score: 350 },
  { firstName: 'Bob', lastName: 'Smith', avatar: 'https://i.pravatar.cc/150?img=2', score: 320 },
  { firstName: 'Emily', lastName: 'Davis', avatar: 'https://i.pravatar.cc/150?img=5', score: 290 },
  { firstName: 'Michael', lastName: 'Brown', avatar: 'https://i.pravatar.cc/150?img=4', score: 270 }
];

const TopKCodersList = () => (
  <div className="max-w-2xl bg-gray-200 mx-auto p-4 space-y-4">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Top 4 Coders</h2>
    {coders.map((coder, index) => (
      <CoderCard
        key={index}
        rank={index + 1}
        firstName={coder.firstName}
        lastName={coder.lastName}
        avatarUrl={coder.avatar}
        score={coder.score}
      />
    ))}
  </div>
);

export default TopKCodersList;
