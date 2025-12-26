import { Shield, Truck, DollarSign, Smartphone, Users, CheckCircle } from 'lucide-react';

export function ForSellers() {
  const features = [
    {
      icon: Shield,
      title: 'No More "Send First" Risks',
      description: 'Customer pays upfront, escrow holds it. Ship confidently knowing **payment is guaranteed**.',
      iconColor: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
    {
      icon: Truck,
      title: 'Photo Proof Delivery',
      description: 'Rider takes photos at pickup & delivery. Zero **"package lost"** disputes ever again.',
      iconColor: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
    {
      icon: DollarSign,
      title: 'Instant M-Pesa Payout',
      description: 'Delivery confirmed? **Payment hits your M-Pesa instantly**. No waiting, no delays.',
      iconColor: 'text-[#86B0BD]',
      bgColor: 'bg-[#86B0BD]/10',
    },
    {
      icon: Smartphone,
      title: 'Perfect for High-Value Items',
      description: 'Selling phones, electronics, designer goods? **Buyers trust escrow** to pay upfront for premium products.',
      iconColor: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
    {
      icon: Users,
      title: 'Build Customer Confidence',
      description: 'Customers see escrow protection, they **buy without hesitation**. Close more sales instantly.',
      iconColor: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
    {
      icon: CheckCircle,
      title: 'Only 2.5% Fee',
      description: 'Just 2.5% of product value. **Worth every shilling** for complete peace of mind.',
      iconColor: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#FFF0DD] via-[#FFF8F0] to-[#FFF0DD]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#E2A16F] text-[#030213] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            For Sellers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#030213] mb-4">
            Stop Losing Money to{' '}
            <span className="text-[#d4183d]">Scams & Defaults</span>
          </h2>
          <p className="text-lg text-[#86B0BD] max-w-3xl">
            Get guaranteed payment for every order. Build customer trust. Grow your business without worry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-md bg-white/40 rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#E2A16F]/40"
              >
                <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={feature.iconColor} size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#030213] mb-3 group-hover:text-[#E2A16F] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#86B0BD]/80 leading-relaxed">
                  {feature.description.split(/\*\*(.*?)\*\*/).map((part, i) => 
                    i % 2 === 1 ? (
                      <strong key={i} className="text-[#030213] font-semibold">{part}</strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

