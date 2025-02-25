import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const WalletOptions = ({ onSelect }) => {
  // Array of wallet options to display
  const wallets = useMemo(() => [
    {
      id: "metamask",
      name: "MetaMask",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
      detector: () => window.ethereum && window.ethereum.isMetaMask,
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      image: "https://www.coinbase.com/favicon.ico",
      detector: () => window.ethereum && window.ethereum.isCoinbaseWallet,
    },
    {
      id: "okx",
      name: "OKX Wallet",
      image: "https://www.okx.com/favicon.ico",
      detector: () =>
        window.okxwallet || (window.ethereum && window.ethereum.isOkxWallet),
    },
    {
      id: "bitget",
      name: "Bitget Wallet",
      image: "https://www.bitget.com/favicon.ico",
      detector: () => window.ethereum && window.ethereum.isBitget,
    },
  ], []);

  // Optimized handler using useCallback
  const handleSelect = useCallback(
    (walletId) => {
      const wallet = wallets.find((w) => w.id === walletId);
      if (!wallet) {
        alert("Wallet not found!");
        return;
      }

      // Check if the wallet is detected
      if (!wallet.detector()) {
        alert(`${wallet.name} is not installed or not detected.`);
        return;
      }

      // Pass the wallet ID to the parent component
      onSelect(walletId);
    },
    [onSelect, wallets]
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-white">Choose a Wallet</h2>
        <div className="grid grid-cols-2 gap-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => handleSelect(wallet.id)}
              className="flex flex-col items-center rounded bg-gray-700 p-4 transition duration-300 hover:bg-gray-600"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="mb-2 h-12 w-12 object-contain"
              />
              <span className="text-center text-white font-medium">
                {wallet.name}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={() => onSelect(null)}
          className="mt-4 w-full rounded bg-red-500 py-2 text-white transition duration-300 hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

WalletOptions.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default WalletOptions;
