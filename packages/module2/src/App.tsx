import React, { Suspense } from 'react';
import { LayoutGrid } from 'lucide-react';
import './index.css';

// @ts-ignore
const Button = React.lazy(() => import('shared/Button'));

function App() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]">
      <div className="flex items-center mb-6">
        <LayoutGrid className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Module 2</h2>
      </div>
      <p className="text-gray-600 mb-6">
        This is Module 2, another independent module using shared components and styling.
      </p>
      <Suspense fallback={
        <div className="animate-pulse bg-gray-200 h-10 w-32 rounded-xl"></div>
      }>
        <Button variant="secondary" onClick={() => alert('Module 2 button clicked!')}>
          Module 2 Action
        </Button>
      </Suspense>
    </div>
  );
}

export default App;