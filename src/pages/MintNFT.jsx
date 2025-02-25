import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaCube } from "react-icons/fa";
import React from "react";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles    

// Import your Ethereum provider
import Web3 from 'web3';

// Connect to local Ethereum node
const web3 = new Web3(
  new Web3.providers.HttpProvider("http://localhost:8545")
);

// Contract ABI and address
const contractAddress = "0x0000000000000000000000000000000000000000";
const abi = [
  //...
];

// Create a contract instance
const contract = new web3.eth.Contract(abi, contractAddress);


import PropTypes from 'prop-types';

function MintNFT() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("ETH");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // Motion values for 3D perspective effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 800], [15, -15]);
  const rotateY = useTransform(x, [0, 800], [-15, 15]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
    console.log("Name:", name);
    console.log("Description:", description);
    console.log("Price:", price);
    console.log("Currency:", currency);
    console.log("Image:", image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, price, currency, image });
  };

  // Floating Cubes Background Component
  const FloatingCube = ({ x, y, delay }) => (
    <motion.div
      className="absolute text-green-400/20"
      initial={{ scale: 0, rotate: 0 }}
      animate={{ 
        scale: [0, 1, 0],
        rotate: 360,
        x: [0, x * 2, 0],
        y: [0, y * 2, 0]
      }}
      transition={{
        duration: 10 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      <FaCube className="text-4xl" />
    </motion.div>
  );

  FloatingCube.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    delay: PropTypes.number.isRequired,
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      {/* Floating Cubes Background */}
      {[...Array(8)].map((_, i) => (
        <FloatingCube key={i} x={Math.random() * 100 - 50} y={Math.random() * 100 - 50} delay={i * 2} />
      ))}

      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0"
        animate={{ 
          background: [
            "linear-gradient(45deg, #f0fff4, #e6fffa, #ebf8ff, #f0fff4)",
            "linear-gradient(45deg, #e6fffa, #ebf8ff, #f0fff4, #e6fffa)",
            "linear-gradient(45deg, #ebf8ff, #f0fff4, #e6fffa, #ebf8ff)",
            "linear-gradient(45deg, #f0fff4, #e6fffa, #ebf8ff, #f0fff4)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Form Container with 3D Effect */}
      <motion.div 
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="max-w-sm w-full p-8 border border-green-400/30 bg-white/50 backdrop-blur-xl shadow-2xl rounded-2xl text-gray-800 z-10 relative overflow-hidden"
      >
        {/* Spinning Icons */}
        <motion.h1
          className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3 text-green-600"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <FaCube className="text-green-600" />
          </motion.div>
          Mint Your NFT 
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <FaCube className="text-green-600" />
          </motion.div>
        </motion.h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-2">
              Name
            </label>
            <motion.input
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.05 }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-white/70 border-2 border-green-400/30 rounded-lg text-gray-800 focus:outline-none focus:border-green-500 transition-all"
              placeholder="Enter NFT Name"
              required
            />
          </motion.div>

          {/* Description Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <motion.input
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.05 }}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-white/70 border-2 border-green-400/30 rounded-lg text-gray-800 focus:outline-none focus:border-green-500 transition-all"
              placeholder="Enter NFT Description"
              required
            />
          </motion.div>

          {/* Price Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-medium mb-2">
              Price (in {currency})
            </label>
            <motion.input
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.05 }}
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 bg-white/70 border-2 border-green-400/30 rounded-lg text-gray-800 focus:outline-none focus:border-green-500 transition-all"
              placeholder="Enter Price"
              required
            />
          </motion.div>

          {/* Currency Selection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <label className="block text-sm font-medium mb-2">
              Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-3 bg-white/70 border-2 border-green-400/30 rounded-lg text-gray-800 focus:outline-none focus:border-green-500 transition-all"
            >
              {["ETH", "DAI", "USDC", "BTC", "SOL", "BNB", "MATIC"].map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </motion.div>

          {/* Image Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <label className="block text-sm font-medium mb-2">
              Upload Image
            </label>
            <motion.input
              type="file"
              onChange={handleImageChange}
              className="w-full p-3 bg-white/70 border-2 border-green-400/30 rounded-lg text-gray-800 focus:outline-none focus:border-green-500 transition-all"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg relative overflow-hidden"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
               Mint NFT
            </div>
          </motion.button>
        </form>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute top-5 left-5 z-50 flex gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-green-400/30">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-green-600 hover:text-green-500 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <span className="text-xl">←</span>
          <span className="text-sm">Back</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-green-600 hover:text-green-500 flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <span className="text-xl">🏠</span>
          <span className="text-sm">Home</span>
        </motion.button>
      </div>
    </div>
  );
}

export default MintNFT;