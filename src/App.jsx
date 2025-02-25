import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPages from './pages/landingpages';
import MintNFT from './pages/MintNFT';
import BuyNFT from './pages/BuyNFT';
import SellNFT from './pages/SellNFT';
import ExplorePage from './pages/ExplorePage';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/mint" element={<MintNFT />} />
        <Route path="/sell" element={<SellNFT />} />
        <Route path="/buy" element={<BuyNFT />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Router>
  );
}

export default App;