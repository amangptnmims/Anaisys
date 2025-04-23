import { useNavigate } from 'react-router-dom';

const XrayLung = () => {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/try-xray-form'); // Route to your form page
  };
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">AnAI-Xray Lung</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced AI-powered detection of pulmonary abnormalities from chest X-rays
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Features Column */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Detects 15+ pulmonary abnormalities with 94% accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">30-second analysis time per image</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Supports DICOM, JPEG, and PNG formats</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Radiologist-approved reports</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clinical Applications</h3>
            <p className="text-gray-700 mb-6">
              Our AI assists in early detection of pneumonia, tuberculosis, lung nodules, 
              pneumothorax, and other critical pulmonary conditions, helping clinicians 
              make faster, more accurate diagnoses.
            </p>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition duration-300">
              Request Clinical Demo
            </button>
          </div>
        </div>

        {/* Video Demo Column */}
        <div className="flex flex-col">
          <div className="bg-white p-6 rounded-xl shadow-md flex-1 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Live Demo</h3>
            <div className="flex-1 flex flex-col items-center justify-center mb-6">
              <video
                src="/v2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-lg w-full h-full max-w-xl object-contain"
              ></video>
            </div>
            <div className="text-center space-y-4">
            <button 
                onClick={handleTryNowClick}
                className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
              >
                Try AnAI-Xray Lung Now
              </button>
              <p className="text-sm text-gray-500">
                (Limited scale web application)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 bg-blue-50 p-6 md:p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-lg mb-2">1. Upload Image</h4>
            <p className="text-gray-600">Drag and drop your chest X-ray image in supported formats</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-lg mb-2">2. AI Analysis</h4>
            <p className="text-gray-600">Our algorithm processes the image in seconds</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-lg mb-2">3. View Results</h4>
            <p className="text-gray-600">Get detailed findings with highlighted areas of concern</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XrayLung;