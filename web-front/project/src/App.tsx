import React, { useState } from 'react';
import { BarChart3, TrendingUp, Brain } from 'lucide-react';
import CampaignAnalyzer from './components/CampaignAnalyzer';
import MarketingTrends from './components/MarketingTrends';
import SentimentAnalysis from './components/SentimentAnalysis';

function App() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const renderContent = () => {
    switch (selectedTool) {
      case 'analyzer':
        return <CampaignAnalyzer />;
      case 'trends':
        return <MarketingTrends />;
      case 'sentiment':
        return <SentimentAnalysis />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {!selectedTool ? (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background drops */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="animate-drop absolute bg-purple-500 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 30 + 10}px`,
                  height: `${Math.random() * 30 + 10}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              MarketMind AI
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
              <button
                onClick={() => setSelectedTool('analyzer')}
                className="transform hover:scale-105 transition-all p-6 rounded-xl bg-gradient-to-br from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 shadow-lg group"
              >
                <BarChart3 className="w-12 h-12 mx-auto mb-4 group-hover:text-purple-300" />
                <h2 className="text-xl font-semibold">Campaign Analyzer</h2>
              </button>

              <button
                onClick={() => setSelectedTool('trends')}
                className="transform hover:scale-105 transition-all p-6 rounded-xl bg-gradient-to-br from-pink-900 to-pink-700 hover:from-pink-800 hover:to-pink-600 shadow-lg group"
              >
                <TrendingUp className="w-12 h-12 mx-auto mb-4 group-hover:text-pink-300" />
                <h2 className="text-xl font-semibold">Marketing Trends</h2>
              </button>

              <button
                onClick={() => setSelectedTool('sentiment')}
                className="transform hover:scale-105 transition-all p-6 rounded-xl bg-gradient-to-br from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 shadow-lg group"
              >
                <Brain className="w-12 h-12 mx-auto mb-4 group-hover:text-indigo-300" />
                <h2 className="text-xl font-semibold">Sentiment Analysis</h2>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-6">
          <button
            onClick={() => setSelectedTool(null)}
            className="mb-6 px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 transition-colors"
          >
            ← Back to Home
          </button>
          {renderContent()}
        </div>
      )}
    </div>
  );
}

export default App;