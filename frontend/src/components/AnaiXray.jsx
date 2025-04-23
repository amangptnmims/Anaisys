import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';
import Dropzone from 'react-dropzone';

const AnaiXray = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('studies');
  const [model, setModel] = useState(null);
  const canvasRef = useRef(null);
  const formData = state?.formData || {};

  // Load your ML model (replace with your actual model path)
  const loadModel = async () => {
    setIsLoading(true);
    try {
      const loadedModel = await tf.loadGraphModel('path/to/your/model.json');
      setModel(loadedModel);
    } catch (error) {
      console.error('Error loading model:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Process uploaded image
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsLoading(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = async () => {
        // Display image
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        setImage(img.src);

        // Run ML prediction if model is loaded
        if (model) {
          const tensor = tf.browser.fromPixels(img)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims();
          
          const predictions = await model.predict(tensor).data();
          processPredictions(predictions);
        }
      };
    };

    reader.readAsDataURL(file);
  };

  // Process and format ML predictions
  const processPredictions = (rawPredictions) => {
    // Replace with your actual class labels
    const CLASSES = [
      'Normal', 
      'Pneumonia', 
      'Tuberculosis', 
      'Lung Lesion', 
      'COVID-19'
    ];
    
    const results = CLASSES.map((className, index) => ({
      condition: className,
      confidence: (rawPredictions[index] * 100).toFixed(2) + '%',
      severity: getSeverityLevel(rawPredictions[index])
    })).sort((a, b) => parseFloat(b.confidence) - parseFloat(a.confidence));

    setPredictions(results);
    setIsLoading(false);
  };

  const getSeverityLevel = (confidence) => {
    if (confidence > 0.8) return 'High';
    if (confidence > 0.5) return 'Moderate';
    return 'Low';
  };

  // Load model on component mount
  React.useEffect(() => {
    loadModel();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white shadow-lg">
        <div className="p-4 border-b border-blue-700">
          <h1 className="text-xl font-bold">AnAI X-Ray</h1>
          <p className="text-sm text-blue-200">AI Diagnostic Platform</p>
        </div>
        <nav className="p-2">
          <button
            onClick={() => setActiveTab('studies')}
            className={`w-full text-left px-4 py-3 rounded-md mb-1 flex items-center ${activeTab === 'studies' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Patient Studies
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`w-full text-left px-4 py-3 rounded-md mb-1 flex items-center ${activeTab === 'upload' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Upload New
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {activeTab === 'studies' ? 'Patient Studies' : 'Upload New Study'}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-medium">
                    {formData.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="text-sm font-medium">{formData.name || 'User'}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {activeTab === 'studies' ? (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Patient Info */}
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{formData.name || 'New Patient'}</h3>
                    <p className="text-sm text-gray-500">
                      {formData.gender || 'Unknown'}, {formData.age || '--'} years • {formData.organization || 'No organization'}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    + New Study
                  </button>
                </div>
              </div>

              {/* Studies List */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Study Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI Findings</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-07-15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Chest X-Ray</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No acute findings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-blue-600 hover:text-blue-900">Report</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upload Panel */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-medium">Upload and Analyze</h3>
                </div>
                <div className="p-6">
                  <Dropzone onDrop={onDrop} accept="image/*" multiple={false}>
                    {({getRootProps, getInputProps}) => (
                      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition">
                        <input {...getInputProps()} />
                        {image ? (
                          <div className="relative">
                            <img src={image} alt="Uploaded" className="max-h-80 mx-auto" />
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setImage(null);
                                setPredictions([]);
                              }}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <>
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mt-2 text-sm text-gray-600">
                              Drag and drop a DICOM or JPEG image here, or click to select
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              Supports: .dcm, .jpeg, .png, .jpg
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </Dropzone>
                  <canvas ref={canvasRef} className="hidden" />
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-medium">AI Analysis Results</h3>
                </div>
                <div className="p-4">
                  {isLoading ? (
                    <div className="flex justify-center items-center h-40">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                  ) : predictions.length > 0 ? (
                    <div className="space-y-4">
                      {predictions.map((prediction, index) => (
                        <div key={index} className="p-3 rounded-md border" style={{
                          borderColor: getSeverityColor(prediction.severity),
                          backgroundColor: `${getSeverityColor(prediction.severity)}20`
                        }}>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{prediction.condition}</span>
                            <span className="text-sm font-semibold" style={{color: getSeverityColor(prediction.severity)}}>
                              {prediction.confidence}
                            </span>
                          </div>
                          <div className="mt-1">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="h-1.5 rounded-full" 
                                style={{
                                  width: prediction.confidence,
                                  backgroundColor: getSeverityColor(prediction.severity)
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>0%</span>
                              <span>100%</span>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center">
                            <span className="text-xs font-medium mr-2">Severity:</span>
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{
                              backgroundColor: `${getSeverityColor(prediction.severity)}30`,
                              color: getSeverityColor(prediction.severity)
                            }}>
                              {prediction.severity}
                            </span>
                          </div>
                        </div>
                      ))}
                      <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Generate Full Report
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="mt-2">No analysis results yet</p>
                      <p className="text-sm">Upload an image to get AI analysis</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Helper function for severity colors
function getSeverityColor(severity) {
  switch(severity) {
    case 'High': return '#EF4444'; // red
    case 'Moderate': return '#F59E0B'; // amber
    case 'Low': return '#10B981'; // green
    default: return '#3B82F6'; // blue
  }
}

export default AnaiXray;