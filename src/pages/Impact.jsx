import React from 'react';

const Impact = () => {
  const stats = [
    { value: "250K+", label: "Patients screened" },
    { value: "98%", label: "Clinical accuracy" },
    { value: "40%", label: "Faster diagnosis" },
    { value: "30+", label: "Countries using our AI" }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Impact</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Transforming Healthcare</h2>
          <p className="mb-6">
            Our AI solutions are making a measurable difference in patient outcomes and 
            healthcare efficiency worldwide.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src="/images/impact.jpg" alt="Healthcare Impact" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Impact;