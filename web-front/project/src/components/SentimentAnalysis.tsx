import React, { useState } from 'react';
import { Brain, TrendingUp, MessageCircle } from 'lucide-react';

const SentimentAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | {
    sentiment: string;
    score: number;
    keywords: string[];
  }>(null);

  const handleAnalyze = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setResults({
        sentiment: "Positive",
        score: 0.85,
        keywords: ["innovative", "sustainable", "user-friendly", "efficient"]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        AI Market Sentiment Analysis
      </h1>
      
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
        <form onSubmit={handleAnalyze} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Social Media Platform</label>
            <select className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none">
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Keywords or Hashtags</label>
            <input
              type="text"
              placeholder="#sustainability #tech"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Time Period</label>
            <select className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none">
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all font-semibold flex items-center justify-center space-x-2"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <Brain className="w-5 h-5" />
                <span>Analyze Sentiment</span>
              </>
            )}
          </button>
        </form>
        
        {results && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <h3 className="font-medium">Sentiment</h3>
                </div>
                <p className="text-2xl font-bold text-green-400">{results.sentiment}</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-pink-400" />
                  <h3 className="font-medium">Confidence Score</h3>
                </div>
                <p className="text-2xl font-bold">{(results.score * 100).toFixed(1)}%</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-medium">Key Terms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.keywords.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysis;