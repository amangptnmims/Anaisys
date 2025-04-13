import React from 'react';

const MriBrain = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AnAI-MRI Brain Solution</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/images/mri-brain.jpg" alt="MRI Brain" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Neurological Disorder Detection</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Conditions Detected:</h3>
              <p>Stroke, tumors, MS, Alzheimer's, and 12+ other neurological conditions</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Clinical Validation:</h3>
              <p>Validated on 15,000+ scans across 8 healthcare systems</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Integration:</h3>
              <p>HL7/FHIR compatible, PACS integration available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MriBrain;