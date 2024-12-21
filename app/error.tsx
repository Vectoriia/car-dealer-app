'use client';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Error</h1>
      <p className="mb-6 text-lg">Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;