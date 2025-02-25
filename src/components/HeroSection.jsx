import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEthereum, FaBitcoin, FaGlobe, FaCube, FaRocket } from "react-icons/fa";

function HeroSection() {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState(null);
  
  const icons = [
    { id: "ethereum", icon: <FaEthereum />, color: "text-blue-500", desc: "Ethereum - A blockchain for smart contracts", position: { top: "10%", left: "5%" } },
    { id: "bitcoin", icon: <FaBitcoin />, color: "text-yellow-500", desc: "Bitcoin - The first decentralized cryptocurrency", position: { top: "10%", right: "5%" } },
    { id: "globe", icon: <FaGlobe />, color: "text-green-400", desc: "Global NFTs - Worldwide digital assets", position: { bottom: "10%", left: "5%" } },
    { id: "cube", icon: <FaCube />, color: "text-red-400", desc: "3D NFTs - Virtual assets in the metaverse", position: { bottom: "10%", right: "5%" } },
  ];

  return (
    <section className="relative bg-gray-900 py-16 overflow-hidden">
      {/* Video Background with Blur & Overlay */}
      <motion.video
        src="https://cdn.pixabay.com/video/2022/01/06/103575-664409333_large.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80 blur-sm"
      ></motion.video>

      {/* Spinning Icons with Click Effect */}
      {icons.map(({ id, icon, color, desc, position }) => (
        <motion.div
          key={id}
          className={`absolute text-6xl cursor-pointer ${color}`}
          style={{ ...position, position: "absolute" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          onClick={() => setSelectedIcon(selectedIcon === id ? null : id)}
          whileTap={{ scale: 1.5 }}
        >
          {icon}
          {selectedIcon === id && (
            <motion.div
              className="absolute bg-black text-white text-sm p-2 rounded-md mt-2 w-max"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {desc}
            </motion.div>
          )}
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto text-center">
        {/* Animated Heading with Continuous Zig-Zag Movement & Color Change */}
        <motion.h1
          className="text-5xl font-extrabold mb-4 drop-shadow-lg"
          animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0], color: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          Discover, Collect, and Sell Extraordinary NFTs
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          className="text-lg text-white mb-8"
          animate={{ y: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          The world’s largest digital marketplace for crypto collectibles and NFTs.
        </motion.p>

        <div className="flex justify-center space-x-4">
          {/* 3D Button with Icon */}
          <motion.button
            onClick={() => navigate("explore")}
            className="relative px-8 py-4 text-white font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-2xl flex items-center space-x-3 transform hover:scale-110 transition-all"
            whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaRocket className="text-white text-xl" />
            <span>Explore NFT World</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
