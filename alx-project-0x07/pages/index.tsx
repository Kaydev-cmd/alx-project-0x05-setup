import React, { useState } from "react";

const Home = () => {
  const handleGenerateImage = async () => {
    console.log("Generating Images");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>
      </div>
    </div>
  );
};

export default Home;
