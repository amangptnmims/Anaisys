import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our AI Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Link 
          to="/products/xray-lung" 
          className="p-6 border rounded-lg hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">AnAI-Xray Lung</h2>
          <p>Advanced pulmonary analysis with 98.2% accuracy</p>
        </Link>
        <Link 
          to="/products/ct-lung" 
          className="p-6 border rounded-lg hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">AnAI-CT Lung</h2>
          <p>Early detection of lung nodules and cancer</p>
        </Link>
        <Link 
          to="/products/mri-brain" 
          className="p-6 border rounded-lg hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">AnAI-MRI Brain</h2>
          <p>Neurological disorder detection and analysis</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;