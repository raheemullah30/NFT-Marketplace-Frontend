import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-indigo-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              </svg>
              <span className="text-2xl font-bold text-indigo-500">
                NFTMarket
              </span>
            </a>
            <p className="text-gray-400 mt-4 text-sm">
              Discover, collect, and sell extraordinary NFTs. Join our community
              of artists and collectors.
            </p>
          </div>

          {/* Marketplace Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/explore"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/collections"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/trending"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Trending NFTs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/faq"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/help-center"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/guides"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest NFT updates straight to your inbox.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-500 px-4 py-2 rounded-full text-white hover:bg-indigo-600 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} NFTMarket. All rights reserved.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://twitter.com"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 19c7.7 0 12-6.3 12-12v-.5c.8-.6 1.5-1.4 2-2.3-.7.3-1.5.5-2.3.6a4 4 0 001.7-2.2 7.9 7.9 0 01-2.5 1 4 4 0 00-6.8 3.7 11.2 11.2 0 01-8-4 4 4 0 001.3 5.3A4 4 0 012 9.5v.1a4 4 0 003.2 3.9c-.6.2-1.2.2-1.8.1a4 4 0 003.7 2.7A8 8 0 012 17.3a11.3 11.3 0 006 1.8" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition duration-300"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H7v4h2v12h5V12h3.6l.4-4h-4V6.3c0-.8.2-1.3 1.3-1.3H17V1h-3.4c-3.7 0-4.6 1.8-4.6 4.7V8z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition duration-300"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.6 3.2C17.3 3 6.7 3 4.4 3.2c-2.1.2-3.8 1.8-4 4-.3 2.5-.3 7.8 0 10.4.2 2.2 1.9 3.8 4 4 2.3.2 12.9.2 15.2 0 2.1-.2 3.8-1.8 4-4 .3-2.5.3-7.8 0-10.4-.2-2.2-1.9-3.8-4-4zm-9.6 12V9l6 3-6 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
