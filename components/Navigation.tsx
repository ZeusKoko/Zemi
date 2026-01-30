import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-midnight/95 backdrop-blur-sm z-50 border-b border-brand-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img src="/zemi logo.png" alt="Zemi" className="h-8 brightness-0 invert" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#F8FAFC]/80 hover:text-[#22D3EE] transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-[#F8FAFC]/80 hover:text-[#22D3EE] transition-colors font-medium">
              How it works
            </a>
            <a href="#contact" className="text-[#F8FAFC]/80 hover:text-[#22D3EE] transition-colors font-medium">
              Contact
            </a>
            <Link to="/seller/dashboard" className="bg-[#7C3AED] text-[#F8FAFC] px-6 py-2 rounded-full hover:bg-[#6D28D9] transition-all shadow-lg shadow-[#7C3AED]/30 font-bold active:scale-95">
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#features" className="text-brand-white/80 hover:text-brand-cyan transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-brand-white/80 hover:text-brand-cyan transition-colors">
              How it works
            </a>
            <a href="#contact" className="text-brand-white/80 hover:text-brand-cyan transition-colors">
              Contact
            </a>
            <Link to="/seller/dashboard" className="bg-brand-purple text-brand-white px-6 py-2 rounded-full hover:bg-brand-purple/90 transition-colors text-center shadow-lg shadow-brand-purple/20">
              Get started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}