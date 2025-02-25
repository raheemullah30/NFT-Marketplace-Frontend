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
        image: "https://images.unsplash.com/photo-1639152201978-931fd2ec8083?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        name: "CryptoCollectible #2",
        description: "Limited edition collectible NFT.",
        price: "2.0",
        currency: "ETH",
        image: "https://images.pexels.com/photos/17483848/pexels-photo-17483848/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        name: "AI Visionary #3",
        description: "A cutting-edge AI-generated artwork.",
        price: "3.5",
        currency: "ETH",
        image: "https://images.pexels.com/photos/17484970/pexels-photo-17484970/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-technology-can-help-humans-learn-and-predict-patterns-in-biology-it-was-created-by-khyati-trehan-as-par.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 4,
        name: "Metaverse Visionary #4",
        description: "A rare item from the metaverse.",
        price: "3.8",
        currency: "ETH",
        image: "https://images.pexels.com/photos/18068768/pexels-photo-18068768/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-ethics-research-understanding-the-human-involvement-in-data-labelling-it-was-created-by-ariel-lu-as-part-of.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 5,
        name: "AI Future #5",
        description: "An exploration of future AI possibilities.",
        price: "4.0",
        currency: "ETH",
        image: "https://images.pexels.com/photos/18069365/pexels-photo-18069365/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-help-understand-ecosystems-and-identify-species-it-was-created-by-nidia-dias-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 6,
        name: "Metaverse Visionary #6",
        description: "A rare item from the metaverse.",
        price: "3.9",
        currency: "ETH",
        image: "https://images.pexels.com/photos/17484901/pexels-photo-17484901/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-boundaries-set-in-place-to-secure-safe-accountable-biotechnology-it-was-created-by-artist-khyati-treha.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 7,
        name: "AI Experience #7",
        description: "A visionary digital creation from AI.",
        price: "4.2",
        currency: "ETH",
        image: "https://images.pexels.com/photos/17497303/pexels-photo-17497303/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-the-benefits-and-flaws-of-large-language-models-it-was-created-by-tim-west-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 8,
        name: "AI Metaverse #8",
        description: "A glimpse into the metaverse, powered by AI.",
        price: "3.7",
        currency: "ETH",
        image: "https://images.pexels.com/photos/17485658/pexels-photo-17485658/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 9,
        name: "AI Collectible #9",
        description: "Limited edition collectible AI-powered NFT.",
        price: "2.5",
        currency: "ETH",
        image: "https://images.pexels.com/photos/17485608/pexels-photo-17485608/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-is-a-positive-imagining-of-humanities-future-with-ai-enabled-fusion-as-the-primary-energy-source-it-was-created-by-art.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      className="min-h-screen flex flex-col items-center justify-center bg-indigo-900 p-4 relative overflow-hidden"
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
          className="px-5 py-3 bg-indigo-900 text-white text-md rounded-lg shadow-lg border border-white hover:bg-indigo-200"
        >
          Back
        </motion.button>
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="px-5 py-3 bg-indigo-900 text-white text-md rounded-lg shadow-lg border border-white hover:bg-indigo-200 "
        >
           Home
        </motion.button>
      </div>

      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         Buy Exclusive NFTs
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
            <h2 className="text-2xl font-bold text-white-800">{nft.name}</h2>
            <p className="text-sm text-white-700">{nft.description}</p>
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
