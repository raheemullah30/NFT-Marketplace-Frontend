import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletOptions from "./WalletOptions";

function Navbar() {
  const [account, setAccount] = useState(null); // To store connected wallet address
  const [showWalletOptions, setShowWalletOptions] = useState(false); // To show wallet modal
  const [searchQuery, setSearchQuery] = useState(""); // To handle search input
  const [isSticky, setIsSticky] = useState(false); // To handle sticky navbar effect

  // Function to handle wallet selection
  const handleWalletSelect = async (walletId) => {
    setShowWalletOptions(false);

    if (walletId === "metamask") {
      if (window.ethereum) {
        try {
          // Connect to MetaMask using ethers.js
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []); // Request wallet access
          const signer = provider.getSigner();
          const userAccount = await signer.getAddress();

          setAccount(userAccount); // Update state with wallet address
          console.log("Connected account:", userAccount);
        } catch (error) {
          console.error("Failed to connect MetaMask:", error);
          alert("Error connecting to MetaMask: " + error.message);
        }
      } else {
        alert("MetaMask is not installed. Please install it to connect your wallet.");
      }
    } else {
      alert(`${walletId} integration not yet implemented.`);
    }
  };

  // Scroll event to handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) { // When scroll position is greater than 50px, make navbar sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isSticky ? "fixed top-0 left-0 w-full z-50" : ""}`}
      style={{
        paddingTop: isSticky ? "10px" : "20px", // Adjust padding when sticky
        paddingBottom: isSticky ? "10px" : "20px", // Adjust padding when sticky
      }}
    >
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          NFT<span className="text-indigo-400">Market</span>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search NFTs..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          />
          <button
            className="absolute right-2 top-2 text-indigo-500 hover:text-indigo-700 transition duration-300 transform hover:scale-110"
            onClick={() => alert(`Searching for: ${searchQuery}`)}
          >
            {/* Tailwind CSS Search Icon using SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="/"
              className="text-white hover:text-indigo-400 transition duration-300 transform hover:scale-110"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#marketplace"
              className="text-white hover:text-indigo-400 transition duration-300 transform hover:scale-110"
            >
              Marketplace
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white hover:text-indigo-400 transition duration-300 transform hover:scale-110"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-indigo-400 transition duration-300 transform hover:scale-110"
            >
              About
            </a>
          </li>
        </ul>

        {/* Wallet Button */}
        <button
          onClick={() => setShowWalletOptions(true)} // Show wallet modal
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-110"
        >
          {account
            ? `${account.substring(0, 6)}...${account.substring(38)}`
            : "Connect Wallet"}
        </button>
      </div>

      {/* Wallet Options Modal */}
      {showWalletOptions && <WalletOptions onSelect={handleWalletSelect} />}
    </nav>
  );
}

export default Navbar;
