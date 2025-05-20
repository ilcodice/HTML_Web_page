import React from "react";
import Split from "react-split";
import ChallengeDescription from "./ChallengeDescription";
import Playground from "./Playground";

export default function Workspace() {
  return (
    <Split
      className="flex h-screen w-full"
      sizes={[50, 50]}         // Initial size percentage
      minSize={200}            // Minimum width of panels
      gutterSize={5}          // Space between panes
      direction="horizontal"   // Side-by-side split
    >
      <div className="bg-gray-300 p-4 overflow-auto">
        <ChallengeDescription />
      </div>
      <div className="bg-gray-100 p-4 overflow-auto">
        <Playground />
      </div>
    </Split>
  );
}