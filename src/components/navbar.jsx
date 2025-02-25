import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";
import WalletOptions from "./WalletOptions";

function Navbar() {
  const [account, setAccount] = useState(null);
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [logoTransform, setLogoTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  // Wallet detection functions
  const walletDetectors = {
    metamask: () => window.ethereum && window.ethereum.isMetaMask,
    coinbase: () => window.ethereum && window.ethereum.isCoinbaseWallet,
    okx: () =>
      window.okxwallet || (window.ethereum && window.ethereum.isOkxWallet),
    bitget: () => window.ethereum && window.ethereum.isBitget,
  };

  // 🛠 Updated handleWalletSelect for ethers v6
  const handleWalletSelect = async (walletId) => {
    setShowWalletOptions(false);

    if (!window.ethereum) {
      alert("No Ethereum provider detected. Please install a wallet.");
      return;
    }

    if (!walletDetectors[walletId]?.()) {
      alert(`${walletId.charAt(0).toUpperCase() + walletId.slice(1)} wallet not detected!`);
      return;
    }

    setLoading(true);

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAccount = await signer.getAddress();

      const network = await provider.getNetwork();
      if (network.chainId !== BigInt(1)) {
        alert("Please connect to the Ethereum Mainnet.");
        setLoading(false);
        return;
      }

      setAccount(userAccount);
      console.log(`Connected ${walletId} account:`, userAccount);
    } catch (error) {
      console.error("Failed to connect:", error);
      alert("Error connecting to wallet: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 50);
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hidden: { y: "-100%", opacity: 0, rotateX: 15, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const handleLogoMouseMove = (e) => {
    if (isAnimating) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setLogoTransform({ rotateX: -((y - height / 2) / height) * 20, rotateY: ((x - width / 2) / width) * 20 });
  };

  const handleLogoMouseLeave = () => {
    setLogoTransform({ rotateX: 0, rotateY: 0 });
  };

  const logoVariants = {
    resting: { scale: 1, rotate: 0, transition: { duration: 0.3 } },
    animating: {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: {
        scale: { repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" },
        rotate: { repeat: Infinity, repeatType: "loop", duration: 2, ease: "linear" },
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={isHidden ? "hidden" : "visible"}
      initial="visible"
      className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${
        isSticky ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
      style={{ padding: isSticky ? "10px" : "20px" }}
    >
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo with 3D tilt and animation */}
        <motion.div
          className="cursor-pointer select-none"
          onMouseMove={handleLogoMouseMove}
          onMouseLeave={handleLogoMouseLeave}
          style={!isAnimating ? { transform: `rotateX(${logoTransform.rotateX}deg) rotateY(${logoTransform.rotateY}deg)` } : {}}
        >
          <motion.div
            onClick={() => setIsAnimating((prev) => !prev)}
            animate={isAnimating ? "animating" : "resting"}
            variants={logoVariants}
            whileHover={!isAnimating ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
          >
            <div className="text-3xl font-bold">
              NFT<span className="text-indigo-400">Market</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Marketplace", "Features", "About"].map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <a href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="hover:text-indigo-400 transition duration-300">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Connect Wallet Button */}
        <motion.button
          onClick={() => setShowWalletOptions(true)}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-500 transition duration-300"
          disabled={loading}
        >
          {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : loading ? "Connecting..." : "Connect Wallet"}
        </motion.button>
      </div>

      {/* Wallet Options Modal */}
      {showWalletOptions && <WalletOptions onSelect={handleWalletSelect} />}
    </motion.nav>
  );
}

export default Navbar;
