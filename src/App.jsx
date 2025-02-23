import React from "react";

const TestTailwind = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        {/* Text Color Example */}
        <h1 className="text-red-500 text-3xl font-bold mb-4">This is red text</h1>

        {/* Background Color Example */}
        <div className="bg-blue-500 text-white p-4 rounded-md mb-4">This div has a blue background</div>

        {/* Border Color Example */}
        <div className="border-4 border-green-500 p-4 mb-4">This div has a green border</div>

        {/* Padding, Margin, and Other Styles */}
        <p className="p-6 m-4 text-lg font-semibold text-gray-800">This is a paragraph with padding and margin, and gray text.</p>

        {/* Hover and Transition Example */}
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-purple-800">Hover Me</button>
        <button className="bg-amber-500 cursor-grab ml-4 rounded-2xl p-2">Custom by Henok</button>
      </div>
    </div>
  );
};

export default TestTailwind;
