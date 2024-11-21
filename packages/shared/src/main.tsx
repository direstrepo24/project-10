import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Button } from './components/Button';

const App = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shared Components Preview</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-2xl shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]">
          <h2 className="text-lg font-semibold mb-2">Primary Button</h2>
          <Button onClick={() => alert('Primary clicked')}>Primary Button</Button>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]">
          <h2 className="text-lg font-semibold mb-2">Secondary Button</h2>
          <Button variant="secondary" onClick={() => alert('Secondary clicked')}>
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);