import React from 'react';
import Layout from '../components/layout';
import HeroSection from "../components/HeroSection";
import NFTGrid from "../components/NFTGrid";

function LandingPages() {
  return (
    <Layout>
      <HeroSection />
      <NFTGrid />
    </Layout>
  );
}

export default LandingPages;
