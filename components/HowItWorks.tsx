import { ShoppingCart, CreditCard, Package, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Buyer places order',
    description: 'Customer finds your product and places an order through Zemi.',
  },
  {
    icon: CreditCard,
    title: 'Payment held in escrow',
    description: 'Buyer pays, and Zemi securely holds the funds until delivery is confirmed.',
  },
  {
    icon: Package,
    title: 'You deliver the product',
    description: 'Ship the product to the buyer. They receive and verify the item.',
  },
  {
    icon: CheckCircle,
    title: 'Payment released',
    description: 'Once the buyer confirms, payment is instantly released to you.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#FFF0DD]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#86B0BD] mb-4">
            How it works
          </h2>
          <p className="text-[#86B0BD]/80 max-w-2xl mx-auto">
            Simple, secure, and transparent. Get started in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 space-y-4 h-full">
                <div className="w-12 h-12 bg-[#86B0BD]/10 rounded-2xl flex items-center justify-center">
                  <step.icon className="text-[#86B0BD]" size={24} />
                </div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#E2A16F] rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                
                <h3 className="text-[#86B0BD]">
                  {step.title}
                </h3>
                <p className="text-[#86B0BD]/70">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#D1D3D4]/30"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-[#E2A16F] text-white px-8 py-3 rounded-full hover:bg-[#E2A16F]/90 transition-colors">
            Get started now
          </button>
        </div>
      </div>
    </section>
  );
}
