import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Background Video with Blur & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.video
          src="https://cdn.pixabay.com/video/2022/01/06/103575-664409333_large.mp4"
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop "></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto text-center px-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          animate={{
            x: [0, 15, -15, 0],
            y: [0, 8, -8, 0],
            color: ["#ff5733", "#33ff57", "#3357ff", "#ff33a6"],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          Discover, Collect, and Sell Extraordinary NFTs
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          animate={{ y: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          The world’s largest digital marketplace for crypto collectibles and NFTs.
        </motion.p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={() => navigate("explore")}
            className="relative px-8 py-4 text-white font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center space-x-3 transform hover:scale-110 transition-all"
            whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaRocket className="text-xl" />
            <span>Explore NFT World</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
