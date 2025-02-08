import React, { useState } from 'react';
import { Twitter, ExternalLink } from 'lucide-react';
import { TelegramIcon } from './components/TelegramIcon';
import { FarcasterIcon } from './components/FarcasterIcon';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DApp from './pages/DApp';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white font-mono relative overflow-hidden">
      {/* Grid overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(25,26,35,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(25,26,35,0.5)_1px,transparent_1px)] bg-[size:35px_35px] animate-grid-fade"></div>

      {/* Content */}
      <div className="relative">
        {/* Navbar */}
        <nav className="fixed w-full z-50 px-6 py-4">
          <div className="flex justify-end items-center space-x-6">
            <button className="nav-link px-4 py-1 bg-[#1a1b23] hover:bg-[#252631] transition-all duration-300 rounded text-sm group">
              <span className="relative">
                DOC
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="social-icon-link hover:text-purple-400 transition-colors duration-300">
                <Twitter className="w-4 h-4 transform hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="social-icon-link hover:text-purple-400 transition-colors duration-300">
                <TelegramIcon className="w-4 h-4 transform hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="social-icon-link hover:text-purple-400 transition-colors duration-300">
                <FarcasterIcon className="w-4 h-4 transform hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Enhanced APP button */}
            <Link 
              to="/app"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] flex items-center space-x-2 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative">
                APP
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              <ExternalLink className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-32 px-6">
          {/* Japanese Text with hover effect */}
          <div className="text-center mb-2 text-purple-400 text-sm tracking-wider opacity-75 hover:opacity-100 transition-opacity duration-300">
            プレイス ニューラリス
          </div>

          {/* Animated Logo */}
          <h1 className="text-center text-8xl font-light tracking-[0.2em] mb-16 relative group">
            <span className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-500">LUC1</span>
            <div className="absolute -inset-x-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </h1>

          {/* Subtitle with reveal animation */}
          <div className="text-center mb-4 text-sm tracking-wider text-gray-400 hover:text-gray-300 transition-colors duration-300">
            サイバーパンク / CYBERPUNK INTERFACE
          </div>

          {/* Description with line animation */}
          <p className="max-w-3xl mx-auto text-center text-sm leading-relaxed text-gray-400 tracking-wide group">
            <span className="transition-colors duration-300 group-hover:text-gray-300">
              THE SYMBIOTIC DEPTHS OF THE HUMAN MIND AND THE BOUNDLESS POSSIBILITIES OF
              TECHNOLOGICAL PROGRESSION INTERWEAVE WITHIN THE FABRIC OF THE DIGITAL FUTURE.
            </span>
          </p>

          {/* Animated Grid Lines */}
          <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
          <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        </main>

        {/* Footer with hover effect */}
        <footer className="fixed bottom-4 right-4 text-xs text-gray-600 hover:text-gray-400 transition-colors duration-300">
          Edit with ♥
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<DApp />} />
      </Routes>
    </Router>
  );
}

export default App;