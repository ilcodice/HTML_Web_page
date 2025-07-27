import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";

const challenges = [
  {
    id: 145,
    title: "Two-sum",
    category: "Data structure",
    Difficulty: "Easy",
    status: "Completed",
    solutionRate: "45%",
  },
  {
    id: 146,
    title: "Fibonatci series",
    category: "Data structure",
    Difficulty: "Moderate",
    status: "Attempted",
    solutionRate: "45%",
  },
  {
    id: 147,
    title: "Skyline problem",
    category: "Data structure",
    Difficulty: "Moderate",
    status: "Pending",
    solutionRate: "45%",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return (
        <BsCheck2Circle
          className="text-green-600"
          title="Challenge completed successfully"
        />
      );
    case "Attempted":
      return (
        <LuFileSpreadsheet
          className="text-blue-800"
          title="Challenge was attempted but not solved"
        />
      );
    case "Pending":
      return (
        <FaRegHourglass
          className="text-orange-300"
          title="Challenge not attempted yet"
        />
      );
    default:
      return null;
  }
};

const getDifficultyBgClass = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500 text-green-800";
    case "Moderate":
      return "bg-yellow-400 text-yellow-800";
    case "Hard":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ChallengesList = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="overflow-x-auto max-h-[400px] overflow-y-scroll border rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Difficulty
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Solution Rate
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {challenges.map((challenge) => (
              <tr key={challenge.id}>
                <td className="flex px-4 py-2 text-xl">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(challenge.status)}
                  </div>
                </td>

                <td className=" px-4 py-2 text-sm">{challenge.title}</td>
                <td className="px-4 py-2 text-sm">{challenge.category}</td>

                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyBgClass(
                      challenge.Difficulty
                    )}`}
                  >
                    {challenge.Difficulty}
                  </span>
                </td>

                <td className="px-4 py-2 text-sm">{challenge.solutionRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChallengesList;
