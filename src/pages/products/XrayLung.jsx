const XrayLung = () => {
    return (
      <div className="container mx-auto p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">AnAI-Xray Lung</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Detects 15+ pulmonary abnormalities</li>
              <li>98.2% accuracy in clinical trials</li>
              <li>30-second analysis time</li>
              <li>DICOM and JPEG support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Clinical Applications</h3>
            <p className="mb-4">
              Our AI helps radiologists detect pneumonia, tuberculosis, lung nodules, 
              and other pulmonary conditions at their earliest stages.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default XrayLung;