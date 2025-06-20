import React, { useEffect, useState } from "react";
import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import useFetchData from "@/hooks/useFetchData";

const Home = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const { isLoading, responseData, generatedImages, fetchData } = useFetchData<
    any,
    { prompt: string }
  >();

  const handleGenerateImage = async () => {
    fetchData("/api/generate-image", { prompt });
  };

  useEffect(() => {
    if (!isLoading) {
      setImageUrl(responseData?.message);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-gray-700 font-bold mb-2">
          Image Generation App
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-white text-black placeholder-gray-500"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            {isLoading ? "Loading" : "Generate Image"}
          </button>
        </div>
        {responseData?.message && (
          <ImageCard
            action={() => setImageUrl(imageUrl)}
            imageUrl={imageUrl}
            prompt={prompt}
          />
        )}
      </div>
      {generatedImages.length ? (
        <div>
          <h3 className="text-xl text-center mb-4">Generated Images</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border max-w-full md:max-w-[1100px] p-2 overflow-y-scroll h-96">
            {generatedImages?.map(({ imageUrl, prompt }: ImageProps, index) => (
              <ImageCard
                action={() => setImageUrl(imageUrl)}
                imageUrl={imageUrl}
                prompt={prompt}
                key={index}
                width="w-full"
                height="h-40"
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
