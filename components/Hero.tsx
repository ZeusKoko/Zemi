import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Decorative Background Elements - Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E2A16F]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#86B0BD]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#E2A16F]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#86B0BD]/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Enhanced Animated Badge with Subtle Pulse */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#86B0BD]/10 to-[#E2A16F]/10 text-[#86B0BD] px-4 py-2 rounded-full border border-[#86B0BD]/20 backdrop-blur-sm animate-pulse-subtle hover:border-[#E2A16F]/40 transition-all duration-300">
              <Shield size={16} className="animate-pulse" />
              <span className="font-medium">ZEMI protects both sellers and buyers</span>
            </div>
            
            {/* Gradient Text Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#86B0BD] via-[#E2A16F] to-[#86B0BD] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                no fraud, no delays,
              </span>
              <br />
              <span className="text-[#86B0BD]">just smooth payments.</span>
            </h1>

            {/* Subtitle/Description */}
            <p className="text-lg text-[#86B0BD]/80 max-w-lg leading-relaxed">
              Secure escrow platform for Kenyan online sellers. Get paid faster, reduce disputes, and build trust with your customers.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E2A16F] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#86B0BD]/70">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-[#E2A16F]" size={16} />
                <span className="text-sm text-[#86B0BD]/70">Instant Release</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[#86B0BD]" size={16} />
                <span className="text-sm text-[#86B0BD]/70">Zero Fraud</span>
              </div>
            </div>
            
            {/* Animated Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#E2A16F] text-white px-8 py-3 rounded-full hover:bg-[#E2A16F]/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E2A16F]/20 hover:shadow-xl hover:shadow-[#E2A16F]/30 hover:scale-105">
                <span>Start Selling Securely</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-[#86B0BD] text-[#86B0BD] px-8 py-3 rounded-full hover:bg-[#86B0BD]/5 transition-all duration-300 hover:scale-105 hover:border-[#E2A16F] hover:text-[#E2A16F]">
                See How It Works
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#86B0BD]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#86B0BD]/60">Transaction Status</span>
                    <span className="bg-[#E2A16F]/10 text-[#E2A16F] px-3 py-1 rounded-full">In Escrow</span>
                  </div>
                  
                  <div className="border-t border-[#D1D3D4]/30 pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#86B0BD]/60">Amount</span>
                      <span className="text-[#86B0BD]">KSh 12,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#86B0BD]/60">Delivery</span>
                      <span className="text-[#86B0BD]">Pending verification</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#86B0BD]/60">Protection</span>
                      <span className="text-[#E2A16F]">100% secure</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="bg-[#86B0BD]/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-[#E2A16F] rounded-full animate-pulse"></div>
                        <span className="text-[#86B0BD]">Awaiting buyer confirmation</span>
                      </div>
                      <div className="w-full bg-[#D1D3D4]/30 rounded-full h-2">
                        <div className="bg-[#E2A16F] h-2 rounded-full" style={{ width: '66%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}