import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

import PropTypes from 'prop-types';

function BuyNFT() {
  const [nfts, setNfts] = useState([]);
  const navigate = useNavigate();

  // Motion values for 3D perspective effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 800], [15, -15]);
  const rotateY = useTransform(x, [0, 800], [-15, 15]);

  useEffect(() => {
    setNfts([
      {
        id: 1,
        name: "CryptoArt #1",
        description: "A unique digital art piece.",
        price: "1.5",
        currency: "ETH",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        name: "CryptoCollectible #2",
        description: "Limited edition collectible NFT.",
        price: "2.0",
        currency: "ETH",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 3,
        name: "Metaverse Item #3",
        description: "A rare item from the metaverse.",
        price: "3.2",
        currency: "ETH",
        image: "https://via.placeholder.com/300",
      },
    ]);
  }, []);

  // Floating Balls Background Component
  const FloatingBall = ({ x, y, delay, size, color }) => (
    <motion.div
      className="absolute rounded-full"
      style={{ width: size, height: size, backgroundColor: color }}
      initial={{ scale: 0, rotate: 0 }}
      animate={{ 
        scale: [0, 1, 0],
        x: [0, x * 2, 0],
        y: [0, y * 2, 0]
      }}
      transition={{
        duration: 10 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
  FloatingBall.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    delay: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  };


  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4 relative overflow-hidden"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      {/* Floating Balls Background */}
      {[...Array(10)].map((_, i) => (
        <FloatingBall
          key={i}
          x={Math.random() * 100 - 50}
          y={Math.random() * 100 - 50}
          delay={i * 2}
          size={Math.random() * 50 + 20}
          color={`rgba(144, 238, 144, ${Math.random() * 0.5 + 0.3})`} // Light green with random opacity
        />
      ))}

      {/* 🔙 Back & 🏠 Home Buttons */}
      <div className="absolute top-6 left-6 flex space-x-4 z-50">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="px-5 py-3 bg-white text-green-600 font-bold text-md rounded-lg shadow-lg border border-white hover:bg-green-200 transition-all duration-300"
        >
          ⬅ Back
        </motion.button>
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="px-5 py-3 bg-white text-green-600 font-bold text-md rounded-lg shadow-lg border border-white hover:bg-green-200 transition-all duration-300"
        >
          🏠 Home
        </motion.button>
      </div>

      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-green-800 mb-6 drop-shadow-lg z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🛒 Buy Exclusive NFTs
      </motion.h1>

      {/* NFT Cards with 3D Effect */}
      <motion.div 
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 relative z-10"
      >
        {nfts.map((nft) => (
          <motion.div
            key={nft.id}
            whileHover={{ scale: 1.05, rotateY: 10, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
            className="max-w-sm w-full p-6 border border-green-800/20 bg-green-100/50 backdrop-blur-xl rounded-xl shadow-lg transition-all duration-300"
          >
            <motion.img
              src={nft.image}
              alt={nft.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
              whileHover={{ scale: 1.1 }}
            />
            <h2 className="text-2xl font-bold text-green-800">{nft.name}</h2>
            <p className="text-sm text-green-700">{nft.description}</p>
            <p className="mt-2 text-lg font-semibold text-green-900">
              {nft.price} {nft.currency}
            </p>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0,255,0,0.7)" }}
              className="w-full mt-4 py-3 bg-green-600 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:bg-green-700"
            >
              Buy NFT
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BuyNFT;