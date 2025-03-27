import React, { useState } from 'react';

const CampaignAnalyzer = () => {
  const [result, setResult] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const productType = (form.elements.namedItem('productType') as HTMLInputElement).value.toLowerCase();
    
    let strategy = "";
    if (productType.includes("cosmetic")) {
      strategy = "📢 Social Media Ads, Influencers, and YouTube tutorials.";
    } else if (productType.includes("electronics")) {
      strategy = "📢 Tech Reviews, Amazon Ads, Google Ads.";
    } else {
      strategy = "📢 SEO, Social Media, and Influencer Marketing.";
    }
    
    setResult(strategy);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        AI Campaign Analyzer
      </h1>
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          />
          <input
            type="text"
            name="productType"
            placeholder="Product Type"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          />
          <textarea
            name="features"
            placeholder="Key Features"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all h-32"
          />
          <input
            type="text"
            name="audience"
            placeholder="Target Audience"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          />
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all font-semibold"
          >
            Analyze
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 rounded-lg bg-gray-800 animate-fade-in">
            <p className="text-lg">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignAnalyzer;