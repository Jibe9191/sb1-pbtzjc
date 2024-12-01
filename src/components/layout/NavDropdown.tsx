import React from 'react';
import { Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavDropdownProps {
  isOpen: boolean;
}

export default function NavDropdown({ isOpen }: NavDropdownProps) {
  return (
    <div
      className={`absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 border border-gray-100 transform transition-all duration-200 ease-in-out ${
        isOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-2 invisible'
      }`}
    >
      <Link
        to="/vehicle-tracking"
        className="flex items-start px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group"
      >
        <div className="flex-shrink-0">
          <Navigation className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
            Vehicle Tracking
          </p>
          <p className="text-sm text-gray-500 group-hover:text-blue-500">
            Real-time GPS tracking and fleet management solutions
          </p>
        </div>
      </Link>
    </div>
  );
}