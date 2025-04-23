import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TryXrayForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    natureOfWork: '',
    otherNatureOfWork: '',
    useCase: ''
  });
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'natureOfWork') {
      setShowOtherInput(value === 'Other');
      if (value !== 'Other') {
        setFormData(prev => ({ ...prev, otherNatureOfWork: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.natureOfWork || 
          (formData.natureOfWork === 'Other' && !formData.otherNatureOfWork)) {
        throw new Error('Please fill in all required fields');
      }

      // Prepare submission data
      const submissionData = {
        ...formData,
        natureOfWork: formData.natureOfWork === 'Other' 
          ? formData.otherNatureOfWork 
          : formData.natureOfWork,
        timestamp: new Date().toISOString()
      };
      delete submissionData.otherNatureOfWork;

      // Simulate API call
      console.log('Form data submitted:', submissionData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to diagnostic platform with form data
      navigate('/anai-xray', { state: { formData: submissionData } });
      
    } catch (error) {
      console.error('Submission error:', error);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Access AnAI-Xray Lung</h2>
            <p className="mt-2 text-gray-600">
              Please fill out this form to get started with our demo
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization/Hospital
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="natureOfWork" className="block text-sm font-medium text-gray-700">
                Nature of Work <span className="text-red-500">*</span>
              </label>
              <select
                id="natureOfWork"
                name="natureOfWork"
                value={formData.natureOfWork}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Radiology">Radiology</option>
                <option value="Pulmonology">Pulmonology</option>
                <option value="General Practice">General Practice</option>
                <option value="Research">Research Analyst</option>
                <option value="Other">Other (please specify)</option>
              </select>
              
              {showOtherInput && (
                <div className="mt-2">
                  <label htmlFor="otherNatureOfWork" className="block text-sm font-medium text-gray-700">
                    Please specify <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="otherNatureOfWork"
                    name="otherNatureOfWork"
                    value={formData.otherNatureOfWork}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required={showOtherInput}
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-gray-700">
                Intended Use Case
              </label>
              <textarea
                id="useCase"
                name="useCase"
                rows={3}
                value={formData.useCase}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe how you plan to use this tool..."
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                disabled={isSubmitting}
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Redirecting...
                  </>
                ) : (
                  'Access Diagnostic Platform'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TryXrayForm;