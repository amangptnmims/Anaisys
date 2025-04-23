import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="mb-6">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Your request has been submitted successfully. You should now have access to our diagnostic platform.
        </p>
        <div className="space-y-3">
          <Link 
            to="/" 
            className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Return Home
          </Link>
          <a
            href="https://app.qure.ai/patients"
            className="block px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Go to Diagnostic Platform
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;