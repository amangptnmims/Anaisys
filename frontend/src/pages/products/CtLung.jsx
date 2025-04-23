import React from 'react';

const CtLung = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AnAI-CT Lung Solution</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Comprehensive CT Analysis</h2>
          <p className="mb-4">
            Our AI-powered CT lung analysis detects early-stage lung cancer, pulmonary nodules, 
            and other thoracic abnormalities with unprecedented accuracy.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Key Benefits:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>95% sensitivity for nodules ≥4mm</li>
              <li>Automated lung segmentation</li>
              <li>Quantitative analysis dashboard</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="/images/ct-lung.jpg" alt="CT Lung" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default CtLung;