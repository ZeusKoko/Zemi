import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div>
              <img src="/zemi logo.png" alt="Zemi" className="h-8" />
            </div>
            <p className="text-[#86B0BD]/70">
              Trust-based escrow platform for online sellers in Kenya.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[#86B0BD]">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">How it works</a></li>
              <li><a href="#" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[#86B0BD]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">About us</a></li>
              <li><a href="#" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[#86B0BD]">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[#86B0BD]/70">
                <Mail size={16} />
                <span>hello@zemi.co.ke</span>
              </li>
              <li className="flex items-center gap-2 text-[#86B0BD]/70">
                <Phone size={16} />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-[#86B0BD]/70">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#D1D3D4]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#86B0BD]/70">
            © 2025 Zemi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#86B0BD]/70 hover:text-[#E2A16F] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}