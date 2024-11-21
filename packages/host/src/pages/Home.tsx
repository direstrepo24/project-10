import React, { Suspense } from 'react';

const Button = React.lazy(() => import('shared/Button'));

export const Home = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Micro-Frontend Demo with Module Federation
      </h1>
      <p className="text-gray-600 mb-8">
        This is a demonstration of Micro-Frontend architecture using Vite Module Federation.
        Navigate through different modules using the navigation bar above.
      </p>
      <div className="space-x-4">
        <Suspense fallback={<div>Loading Button...</div>}>
          <Button onClick={() => console.log('Shared button clicked!')}>
            Shared Button
          </Button>
          <Button variant="secondary">
            Secondary Button
          </Button>
        </Suspense>
      </div>
    </div>
  );
};