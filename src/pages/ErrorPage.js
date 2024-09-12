import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-black-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">Oops! Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-block mt-6 px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
