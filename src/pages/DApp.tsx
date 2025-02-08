import React, { useState } from 'react';
import { ArrowLeftCircle } from 'lucide-react';

function DApp() {
  const [quantity, setQuantity] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('ETH');
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    investment: false,
    all: false,
  });

  // Constants for the sale
  const TOTAL_SUPPLY = 9999;
  const SOLD = 66;
  const PRICE_ETH = 0.5752;
  const PRICE_USD = 300;
  const PERCENTAGE_SOLD = ((SOLD / TOTAL_SUPPLY) * 100).toFixed(2);

  const handleAgreementChange = (key: keyof typeof agreements) => {
    if (key === 'all') {
      const newValue = !agreements.all;
      setAgreements({
        terms: newValue,
        privacy: newValue,
        investment: newValue,
        all: newValue,
      });
    } else {
      setAgreements(prev => {
        const newAgreements = {
          ...prev,
          [key]: !prev[key],
        };
        // Update 'all' checkbox based on other checkboxes
        newAgreements.all = newAgreements.terms && newAgreements.privacy && newAgreements.investment;
        return newAgreements;
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C12] text-white font-mono">
      {/* Grid overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(25,26,35,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(25,26,35,0.5)_1px,transparent_1px)] bg-[size:35px_35px] animate-grid-fade"></div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 px-6 py-4 bg-[#0B0C12]/80 backdrop-blur-md border-b border-purple-500/10">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <a href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeftCircle className="w-5 h-5" />
              <span>Back</span>
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Panel - Price and Progress */}
            <div className="relative bg-[#1A1B23] rounded-xl p-8 border border-purple-500/10">
              {/* Ongoing Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#7C3AED] rounded-full text-sm font-medium">
                  Ongoing
                </span>
              </div>

              {/* Unit Price */}
              <div className="mt-8 mb-8">
                <div className="text-gray-400 text-lg mb-2">Unit Price</div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2">
                      <svg viewBox="0 0 24 24" className="text-[#7C3AED]" fill="currentColor">
                        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
                      </svg>
                    </div>
                    <span className="text-4xl font-light">{PRICE_ETH}</span>
                    <span className="ml-2 text-gray-400">ETH</span>
                  </div>
                  <span className="text-gray-400">⇄</span>
                  <div className="flex items-center">
                    <span className="text-4xl font-light">{PRICE_USD}</span>
                    <span className="ml-2 text-gray-400">USDC</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative mt-12">
                <div className="h-2 bg-[#2D2D3D] rounded-full">
                  <div 
                    className="absolute h-2 bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] rounded-full"
                    style={{ width: `${PERCENTAGE_SOLD}%` }}
                  >
                    <div className="absolute -right-3 -top-1 w-4 h-4 bg-white rounded-full border-4 border-[#7C3AED]"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4 text-lg">
                  <div className="flex items-baseline">
                    <span className="text-white">{SOLD}</span>
                    <span className="text-gray-400 ml-1">/{TOTAL_SUPPLY} Sold</span>
                  </div>
                  <span className="text-white">{PERCENTAGE_SOLD}%</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Purchase Interface */}
            <div className="bg-[#1A1B23] rounded-xl p-8 border border-purple-500/10">
              {/* Network Selection */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-400">Network</span>
                <div className="flex items-center space-x-2">
                  <img src="https://cryptologos.cc/logos/base-base-logo.png" alt="Base Chain" className="w-5 h-5" />
                  <span>Base Chain</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <div className="text-gray-400 mb-3">Pay With</div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedPayment('ETH')}
                    className={`flex items-center space-x-2 p-4 rounded-lg border ${
                      selectedPayment === 'ETH'
                        ? 'bg-[#2D2D3D] border-[#7C3AED]'
                        : 'bg-[#1A1B23] border-gray-700'
                    }`}
                  >
                    <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="ETH" className="w-6 h-6" />
                    <span>ETH</span>
                    <span className="ml-auto">0.0000</span>
                  </button>
                  <button
                    onClick={() => setSelectedPayment('USDC')}
                    className={`flex items-center space-x-2 p-4 rounded-lg border ${
                      selectedPayment === 'USDC'
                        ? 'bg-[#2D2D3D] border-[#7C3AED]'
                        : 'bg-[#1A1B23] border-gray-700'
                    }`}
                  >
                    <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USDC" className="w-6 h-6" />
                    <span>USDC</span>
                    <span className="ml-auto">0.00</span>
                  </button>
                </div>
                <div className="text-sm text-[#7C3AED] mt-2 text-right">Bridge CARV from Base ↗</div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <div className="text-gray-400 mb-3">Quantity</div>
                <div className="flex items-center justify-between bg-[#2D2D3D] rounded-lg p-2">
                  <button
                    onClick={() => quantity > 1 && setQuantity(q => q - 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="text-2xl font-light">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total</span>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="ETH" className="w-5 h-5" />
                      <span className="text-2xl">{(PRICE_ETH * quantity).toFixed(4)}</span>
                      <span className="text-gray-400">ETH</span>
                    </div>
                    <div className="text-gray-400 text-sm">{(PRICE_USD * quantity).toFixed(2)} USD</div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-3 mb-8">
                {[
                  { key: 'terms', text: 'I have read, understand, and agree to the', link: 'Terms of Conditions' },
                  { key: 'privacy', text: 'I have read, understand, and agree to the', link: 'Privacy Policy' },
                  { key: 'investment', text: 'I have read, understand, and agree that CARV Verifier Nodes are', link: 'not investments' },
                  { key: 'all', text: 'I have read, understand, agree to all.' },
                ].map(({ key, text, link }) => (
                  <label key={key} className="flex items-start space-x-3 text-gray-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements[key as keyof typeof agreements]}
                      onChange={() => handleAgreementChange(key as keyof typeof agreements)}
                      className="mt-1 rounded border-gray-600 text-[#7C3AED] focus:ring-[#7C3AED]"
                    />
                    <span>
                      {text}
                      {link && (
                        <>
                          {' '}
                          <a href="#" className="text-white hover:text-[#7C3AED] underline">{link}</a>
                          .
                        </>
                      )}
                    </span>
                  </label>
                ))}
              </div>

              {/* Connect Wallet Button */}
              <button
                className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!agreements.all}
              >
                <img src="https://cryptologos.cc/logos/metamask-mm-logo.png" alt="MetaMask" className="w-6 h-6" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DApp;