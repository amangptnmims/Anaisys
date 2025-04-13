import React from 'react';

const Evidence = () => {
  const studies = [
    {
      title: "Multicenter Clinical Validation",
      journal: "Radiology AI Journal",
      findings: "Demonstrated 98.2% accuracy across 5,000 cases"
    },
    {
      title: "Early Lung Cancer Detection",
      journal: "Journal of Thoracic Imaging",
      findings: "40% improvement in early-stage detection"
    },
    {
      title: "Workflow Efficiency Study",
      journal: "Healthcare Informatics",
      findings: "Reduced radiologist workload by 35%"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Clinical Evidence</h1>
      <div className="space-y-6">
        {studies.map((study, index) => (
          <div key={index} className="border p-6 rounded-lg hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{study.title}</h2>
            <p className="text-blue-600 mb-2">{study.journal}</p>
            <p>{study.findings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evidence;