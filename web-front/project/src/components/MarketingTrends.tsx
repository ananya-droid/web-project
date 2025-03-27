import React from 'react';
import { TrendingUp, Users, Globe, ShoppingBag } from 'lucide-react';

const MarketingTrends = () => {
  const trends = [
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "AI-Driven Personalization",
      description: "Leveraging artificial intelligence for personalized customer experiences and targeted marketing campaigns."
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Influencer Marketing 2.0",
      description: "Evolution of influencer partnerships with focus on authentic, long-term relationships and micro-influencers."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: "Sustainable Marketing",
      description: "Growing emphasis on eco-friendly practices and sustainable brand messaging."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-purple-400" />,
      title: "Social Commerce",
      description: "Integration of shopping features directly into social media platforms."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Marketing Trends 2025
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-800 rounded-lg">{trend.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                <p className="text-gray-400">{trend.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingTrends;