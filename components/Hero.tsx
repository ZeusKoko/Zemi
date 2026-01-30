import { useState } from 'react';
import { ArrowRight, Shield, Zap, Lock, CheckCircle, Loader2, Copy, Check } from 'lucide-react';

export function Hero() {
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'success'>('form');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !phone) return;
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
    }, 3000);
  };

  const copyLink = () => {
    const link = `https://zemi.co.ke/escrow/tr_${Math.random().toString(36).substr(2, 9)}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-[#C7D3C1]">
      {/* Solid Background - No floating shapes per user request */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Enhanced Animated Badge with Subtle Pulse */}
            <div className="inline-flex items-center gap-2 bg-white/40 text-[#2D3A2D] px-4 py-2 rounded-full border border-[#2D3A2D]/10 backdrop-blur-sm animate-pulse-subtle hover:border-[#7C3AED]/30 transition-all duration-300">
              <Shield size={16} className="text-[#7C3AED]" />
              <span className="font-semibold">ZEMI protects both sellers and buyers</span>
            </div>

            {/* Gradient Text Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span
                className="bg-gradient-to-r from-[#2D3A2D] via-[#7C3AED] to-[#2D3A2D] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]"
                style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
              >
                no fraud, no delays,
              </span>
              <br />
              <span className="text-[#2D3A2D]">just smooth payments.</span>
            </h1>

            {/* Subtitle/Description */}
            <p className="text-lg text-[#2D3A2D]/80 max-w-lg leading-relaxed font-medium">
              Secure escrow platform for Kenyan online sellers. Get paid faster, reduce disputes, and build trust with your customers.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 py-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full shadow-[0_0_8px_#7C3AED]"></div>
                <span className="text-sm text-[#2D3A2D]/70 font-bold uppercase tracking-wider">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-[#7C3AED]" size={18} />
                <span className="text-sm text-[#2D3A2D]/70 font-bold uppercase tracking-wider">Instant Release</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[#2D3A2D]/60" size={18} />
                <span className="text-sm text-[#2D3A2D]/70 font-bold uppercase tracking-wider">Zero Fraud</span>
              </div>
            </div>

            {/* Animated Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#7C3AED] text-[#F8FAFC] px-8 py-3 rounded-full hover:bg-[#6D28D9] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#7C3AED]/30 hover:shadow-xl hover:shadow-[#7C3AED]/50 hover:scale-105 active:scale-95 font-bold">
                <span>Start Selling Securely</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-full hover:bg-[#7C3AED] hover:text-[#F8FAFC] transition-all duration-300 hover:scale-105 font-bold shadow-md">
                See How It Works
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#22D3EE]/10 rounded-3xl blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-50"></div>
            <div className="relative bg-white/70 rounded-3xl p-8 backdrop-blur-xl border border-white shadow-2xl min-h-[400px] flex flex-col justify-center">
              {paymentStep === 'form' && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="text-center">
                    <h3 className="text-2xl font-extrabold text-[#2D3A2D] mb-2">Secure Your Payment</h3>
                    <p className="text-[#2D3A2D]/60 text-sm font-medium">Enter details to initiate escrow protection</p>
                  </div>

                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2D3A2D]/80">Amount (KSh)</label>
                      <input
                        type="number"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g. 12500"
                        className="w-full bg-white border border-[#2D3A2D]/10 rounded-xl px-4 py-3 text-[#2D3A2D] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 transition-all shadow-inner"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2D3A2D]/80">M-Pesa Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0700 000 000"
                        className="w-full bg-white border border-[#2D3A2D]/10 rounded-xl px-4 py-3 text-[#2D3A2D] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 transition-all shadow-inner"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2D3A2D]/80">Email Address <span className="text-[#2D3A2D]/40 font-normal">(Optional)</span></label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-white border border-[#2D3A2D]/10 rounded-xl px-4 py-3 text-[#2D3A2D] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 transition-all shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#7C3AED] text-[#F8FAFC] py-4 rounded-xl font-bold hover:bg-[#6D28D9] transition-all shadow-lg shadow-[#7C3AED]/20 active:scale-[0.98]"
                    >
                      Pay via M-Pesa
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-2 text-[#2D3A2D]/40 text-xs font-bold">
                    <Shield size={12} className="text-[#7C3AED]" />
                    <span>Locked in escrow until you verify delivery</span>
                  </div>
                </div>
              )}

              {paymentStep === 'processing' && (
                <div className="text-center space-y-6 animate-in zoom-in duration-500">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#7C3AED]/20 rounded-full blur-xl animate-pulse"></div>
                    <Loader2 className="w-16 h-16 text-[#7C3AED] animate-spin relative z-10 mx-auto" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-[#2D3A2D]">Initiating STK Push...</h3>
                    <p className="text-[#2D3A2D]/60 font-medium">Please check your phone and enter your PIN to authorize the transaction.</p>
                  </div>
                  <div className="bg-[#2D3A2D]/5 rounded-xl p-4 border border-[#2D3A2D]/10 max-w-[280px] mx-auto shadow-sm">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-[#2D3A2D]/60 font-bold">Merchant</span>
                      <span className="text-[#2D3A2D] font-black">ZEMI ESCROW</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#2D3A2D]/60 font-bold">Amount</span>
                      <span className="text-[#2D3A2D] font-black">KSh {amount}</span>
                    </div>
                  </div>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="text-center space-y-6 animate-in zoom-in duration-500">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#7C3AED]/30 rounded-full blur-xl scale-150"></div>
                    <div className="w-20 h-20 bg-[#7C3AED] rounded-full flex items-center justify-center relative z-10 mx-auto shadow-[0_0_20px_#7C3AED]">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-[#2D3A2D]">Payment Secured!</h3>
                    <p className="text-[#2D3A2D]/60 font-medium">Funds are now held in Zemi's secure escrow vault.</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-bold text-[#2D3A2D]/80">Share this link with your seller:</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white border border-[#2D3A2D]/10 rounded-xl px-4 py-3 text-[#7C3AED] text-sm overflow-hidden text-ellipsis whitespace-nowrap font-mono font-bold shadow-inner">
                        zemi.co.ke/escrow/tr_{Math.random().toString(36).substr(2, 6)}
                      </div>
                      <button
                        onClick={copyLink}
                        className="bg-[#7C3AED] p-3 rounded-xl text-white hover:bg-[#6D28D9] transition-all group relative shadow-lg shadow-[#7C3AED]/20"
                      >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setPaymentStep('form')}
                    className="text-[#2D3A2D]/60 text-sm hover:text-[#7C3AED] transition-colors underline underline-offset-4 font-bold"
                  >
                    Start another transaction
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}