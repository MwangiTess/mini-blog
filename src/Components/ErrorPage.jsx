import { Link,  } from "react-router-dom";

const ErrorPage = () => {
 
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Oops!</h1>
        <p className="text-gray-700 text-3xl">
          Error 404 Page Not Found
        </p>
        <p className="text-gray-700 italic">
          Sorry, an unexpected error has occurred.
        </p>
        <Link to="/"> Go back to home page</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
