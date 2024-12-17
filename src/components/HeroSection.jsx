import React from "react";
import { useNavigate } from "react-router-dom"; // For page navigation

function HeroSection() {
  const navigate = useNavigate();

  const handleCreateNFTClick = () => {
    // Navigate to the form page
    navigate("/create-nft");
  };

  return (
    <section className="relative bg-gray-900 py-16">
      {/* Background Video */}
      <video
        src="https://cdn.pixabay.com/video/2022/01/06/103575-664409333_large.mp4"
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>

      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Discover, Collect, and Sell Extraordinary NFTs
        </h1>
        <p className="text-lg text-white mb-8">
          The world’s largest digital marketplace for crypto collectibles and NFTs.
        </p>
        <div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-indigo-700">
            Explore
          </button>
          <button
            onClick={handleCreateNFTClick}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Create NFT
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
