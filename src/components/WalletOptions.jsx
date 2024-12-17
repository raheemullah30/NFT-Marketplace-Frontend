import React from "react";

function WalletOptions({ onSelect }) {
  const wallets = [
    { id: "metamask", name: "MetaMask", image: "https://metamask.io/assets/icon.svg" },
    { id: "okx", name: "OKX Wallet", image: "https://www.okx.com/favicon.ico" },
    { id: "bitget", name: "Bitget Wallet", image: "https://www.bitget.com/favicon.ico" },
    { id: "coinbase", name: "Coinbase Wallet", image: "https://www.coinbase.com/favicon.ico" },
  ];

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-white">Choose a wallet</h2>
        <div className="grid grid-cols-2 gap-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow hover:bg-gray-700"
              onClick={() => onSelect(wallet.id)} // Pass wallet ID to parent
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-12 h-12 mb-2"
              />
              <span className="text-white font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>
        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => onSelect(null)} // Close modal without selection
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default WalletOptions;
