import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
// Import all page components
import ProductsPage from './pages/ProductsPage';
import XrayLung from './pages/products/XrayLung';
import CtLung from './pages/products/CtLung';
import MriBrain from './pages/products/MriBrain';
import Impact from './pages/Impact';
import Evidence from './pages/Evidence';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <Header />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          
          {/* Products Routes */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/xray-lung" element={<XrayLung />} />
          <Route path="/products/ct-lung" element={<CtLung />} />
          <Route path="/products/mri-brain" element={<MriBrain />} />
          
          {/* Other Routes */}
          <Route path="/impact" element={<Impact />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;