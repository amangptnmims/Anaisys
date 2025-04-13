import React from 'react';

const Insights = () => {
  const articles = [
    {
      title: "The Future of AI in Radiology",
      excerpt: "How deep learning is transforming medical imaging interpretation",
      date: "May 15, 2023"
    },
    {
      title: "Ethical Considerations for AI Diagnostics",
      excerpt: "Balancing automation with physician oversight",
      date: "April 2, 2023"
    },
    {
      title: "Case Study: Reducing False Positives",
      excerpt: "Our approach to improving specificity in lung nodule detection",
      date: "March 10, 2023"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Insights & Research</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{article.date}</div>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;