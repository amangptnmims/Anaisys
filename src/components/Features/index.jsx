import React from 'react';

const features = [
  {
    title: "Early Detection",
    description: "Detects anomalies in radiology scans at earlier stages with high precision."
  },
  {
    title: "Clinical Accuracy",
    description: "Proven accuracy on par with radiologists in multiple clinical validations."
  },
  {
    title: "Seamless Integration",
    description: "Easily integrates with existing hospital systems and workflows."
  }
];

const Features = () => {
  return (
    <section className="p-6 md:p-10 lg:p-20">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Our AI</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;