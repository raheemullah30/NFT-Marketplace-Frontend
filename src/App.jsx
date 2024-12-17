import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import CreateNFT from './components/CreateNFT'; // Import CreateNFT component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/create-nft" element={<CreateNFT />} /> {/* Add new route */}
      </Routes>
    </Router>
  );
}

export default App;
