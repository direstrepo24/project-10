import React from 'react';
import { Link } from 'react-router-dom';
import { Boxes } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Boxes className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">MF Demo</span>
            </div>
            <div className="flex space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/module1">Module 1</NavLink>
              <NavLink to="/module2">Module 2</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 transition-colors duration-200"
  >
    {children}
  </Link>
);