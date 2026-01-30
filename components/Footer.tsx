import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-midnight py-16 px-6 border-t border-brand-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div>
              <img src="/zemi logo.png" alt="Zemi" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-brand-white/60">
              Trust-based escrow platform for online sellers in Kenya.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-brand-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-brand-white/60 hover:text-brand-cyan transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-brand-white/60 hover:text-brand-cyan transition-colors">How it works</a></li>
              <li><a href="#" className="text-brand-white/60 hover:text-brand-cyan transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-brand-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-white/60 hover:text-brand-cyan transition-colors">About us</a></li>
              <li><a href="#" className="text-brand-white/60 hover:text-brand-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="text-brand-white/60 hover:text-brand-cyan transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-brand-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-brand-white/60">
                <Mail size={16} className="text-brand-cyan" />
                <span>hello@zemi.co.ke</span>
              </li>
              <li className="flex items-center gap-2 text-brand-white/60">
                <Phone size={16} className="text-brand-cyan" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-brand-white/60">
                <MapPin size={16} className="text-brand-cyan" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-white/60">
            © 2025 Zemi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-white/60 hover:text-brand-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-white/60 hover:text-brand-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}