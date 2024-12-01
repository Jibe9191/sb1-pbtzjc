import React, { useState, useCallback } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import NavDropdown from './NavDropdown';

export default function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  
  const handleMouseEnter = useCallback(() => {
    setIsSolutionsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsSolutionsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://dynamix.telimatix.com/files/Logo_3.svg"
                alt="Telimatix"
                className="h-7"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                aria-expanded={isSolutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isSolutionsOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <NavDropdown isOpen={isSolutionsOpen} />
            </div>

            <Link 
              to="/#features" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
            <Button variant="secondary" size="sm">Book Demo</Button>
            <Button variant="primary" size="sm">Sign In</Button>
          </div>

          <div className="md:hidden">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}