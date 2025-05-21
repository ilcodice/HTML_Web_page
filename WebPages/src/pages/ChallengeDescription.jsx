import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const challenges = [
  {
    id: 123,
    title: "Two-sum",
    description: `
### Problem Statement:
Given an array of integers \`nums\` and an integer \`target\`, return
indices of the two numbers such that they add up to \`target\`. You
may assume that each input would have exactly one solution, and you
may not use the same element twice. You can return the answer in any
order.

### Example:
Input: \`nums = [2,7,11,15]\`, \`target = 9\`  
Output: \`[0,1]\`  
Explanation: \`nums[0] + nums[1] = 2 + 7 = 9\`, so the answer is
\`[0,1]\`.

### Constraints:
- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Only one valid answer exists.

### Approach:
A brute force approach involves iterating through the array and
checking every pair of elements to see if their sum equals the
target. However, this approach would have a time complexity of
O(n^2). A more efficient approach involves using a hash table (or
dictionary in Python) to store the indices of the elements as we
iterate through the array. This way, we can check if the complement
of the current element (target - current element) exists in the hash
table in constant time, reducing the time complexity to O(n).
`,
    difficulty: "Easy",
    category: "arrays",
    status: "Completed",
    tests: [
      {
        id: 1,
        inputText: `[1, 2, 3]`,
        outputText: `6`,
      },
      {
        id: "test_2",
        inputText: `[2, 3]`,
        outputText: `5`,
      },
    ],
  },
];

export default function ChallengeViewer() {
  const [selectedChallenge] = useState(challenges[0]); // just one for now

  return (
    <div style={{ maxWidth: 800, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1>{selectedChallenge.title}</h1>
      <p>
        <strong>Difficulty:</strong> {selectedChallenge.difficulty} |{" "}
        <strong>Category:</strong> {selectedChallenge.category} |{" "}
        <strong>Status:</strong> {selectedChallenge.status}
      </p>
      <h2>Description</h2>
      <p>{challenges.description}</p>
      <MarkdownPreview source={selectedChallenge.description} />
      <h2>Tests</h2>
      <ul>
        {selectedChallenge.tests.map((test) => (
          <li key={test.id}>
            <strong>Input:</strong> <code>{test.inputText}</code> |{" "}
            <strong>Output:</strong> <code>{test.outputText}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
