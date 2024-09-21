
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page not found</h2>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist or an error occurred.</p>
        <Link to="/" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
