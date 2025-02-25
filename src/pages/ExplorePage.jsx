import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

function ExplorePage() {
  const navigate = useNavigate();
  const keywords = ["NFTs", "Blockchain", "Crypto", "Web3", "DeFi", "Metaverse"];
  const images = [
    "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    "https://cdn-icons-png.flaticon.com/512/7336/7336937.png",
    "https://cdn-icons-png.flaticon.com/512/9276/9276819.png",
    "https://cdn-icons-png.flaticon.com/512/9077/9077892.png",
    "https://cdn-icons-png.flaticon.com/512/9008/9008491.png",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-indigo-800 overflow-hidden">
      {/* Floating Blockchain Keywords & Stickers */}
      <div className="absolute inset-0 opacity-50">
        {keywords.map((word, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", rotate: 0, opacity: 0.5 }}
            animate={{ y: ["100vh", "-10vh"], rotate: [0, 360], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, ease: "linear" }}
            className="absolute text-white text-4xl font-bold"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          >
            {word}
          </motion.div>
        ))}

        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="icon"
            initial={{ y: "120vh", scale: 0.5, rotate: 0, opacity: 0.5 }}
            animate={{ y: ["120vh", "-10vh"], scale: [0.5, 1.2, 0.5], rotate: [0, 360], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-16 h-16"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Spinning Header */}
      <motion.h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        Explore the Future of NFTs 
      </motion.h1>

      {/* Extra Text Content */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-100 mb-6 text-center px-10"
      >
        Discover a world of digital ownership, creativity, and limitless possibilities. Start your journey in the NFT marketplace today! 
      </motion.p>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 p-10 bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl border border-white/20 text-center"
      >
        <p className="text-lg text-white mb-8">Choose an option below:</p>
        <div className="flex space-x-6">
          {/* Mint NFT Button */}
          <motion.button
            onClick={() => navigate("/mint")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 rounded-xl bg-indigo-900 text-white font-semibold shadow-lg transition-all duration-300 border border-white hover:border-gray-400 hover:bg-indigo-900"
          >
            Mint NFT
          </motion.button>

          {/* Sell NFT Button */}
          <motion.button
            onClick={() => navigate("/sell")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 rounded-xl bg-indigo-900 text-white font-semibold shadow-lg transition-all duration-300 border border-white hover:border-gray-400 hover:bg-indigo-800"
          >
            Sell NFT
          </motion.button>

          {/* Buy NFT Button */}
          <motion.button
            onClick={() => navigate("/buy")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 rounded-xl bg-indigo-900 text-white font-semibold shadow-lg transition-all duration-300 border border-white hover:border-gray-400 hover:bg-indigo-700"
          >
            Buy NFT
          </motion.button>
        </div>
      </motion.div>

      {/* 3D "Back" Button */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.2, rotateY: 20 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 px-8 py-4 rounded-full bg-indigo-900 text-white font-semibold shadow-lg transition-all duration-300 border border-white hover:border-gray-400 hover:bg-indigo-800"
      >
        Go Back
      </motion.button>
    </div>
  );
}

export default ExplorePage;
