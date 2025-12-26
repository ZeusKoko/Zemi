import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FFF0DD]/95 backdrop-blur-sm z-50 border-b border-[#D1D3D4]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img src="/zemi logo.png" alt="Zemi" className="h-8" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#86B0BD] hover:text-[#E2A16F] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-[#86B0BD] hover:text-[#E2A16F] transition-colors">
              How it works
            </a>
            <a href="#contact" className="text-[#86B0BD] hover:text-[#E2A16F] transition-colors">
              Contact
            </a>
            <Link to="/seller/dashboard" className="bg-[#E2A16F] text-white px-6 py-2 rounded-full hover:bg-[#E2A16F]/90 transition-colors">
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#86B0BD]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#features" className="text-[#86B0BD] hover:text-[#E2A16F] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-[#86B0BD] hover:text-[#E2A16F] transition-colors">
              How it works
            </a>
            <a href="#contact" className="text-[#86B0BD] hover:text-[#E2A16F] transition-colors">
              Contact
            </a>
            <Link to="/seller/dashboard" className="bg-[#E2A16F] text-white px-6 py-2 rounded-full hover:bg-[#E2A16F]/90 transition-colors">
              Get started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}