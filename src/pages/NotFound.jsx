import { Link } from "react-router-dom";
import { Home } from "lucide-react";

/**
 * NotFound Page
 * Fallback for unknown routes.
 */
const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-9xl font-black text-navy-100 select-none">404</h1>

      <div className="-mt-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          The path you are looking for doesn't exist or has been moved. Let's
          get you back on track.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-forest-600 text-white rounded-lg font-semibold hover:bg-forest-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
