import { Shield, Package, CheckCircle2 } from 'lucide-react';

export function ForBuyers() {
  const features = [
    {
      icon: Shield,
      title: 'Money Held Safely in Escrow',
      description: 'Pay via M-Pesa. We hold your money securely. **Seller** doesn\'t get paid until you **confirm delivery**.',
      bullets: [
        'Payment protected by licensed escrow',
        'Release payment only when satisfied',
      ],
      iconColor: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
    {
      icon: Package,
      title: 'Verified Delivery Tracking',
      description: 'Real-time tracking, verified riders, photo proof. **You always know where your order is.**',
      bullets: [
        'Live order status updates',
        'Photo proof at every stage',
      ],
      iconColor: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#E2A16F] text-[#030213] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            For Buyers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#030213] mb-4">
            Shop Online{' '}
            <span className="text-[#E2A16F]">Without Fear</span>
          </h2>
          <p className="text-lg text-[#86B0BD] max-w-3xl">
            Your money is protected until you receive your order. No scams, no fake products, no empty promises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-md bg-white/40 rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#E2A16F]/40"
              >
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={feature.iconColor} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#030213] mb-4 group-hover:text-[#E2A16F] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#86B0BD]/80 leading-relaxed mb-6">
                  {feature.description.split(/\*\*(.*?)\*\*/).map((part, i) => 
                    i % 2 === 1 ? (
                      <strong key={i} className="text-[#030213] font-semibold">{part}</strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#86B0BD] flex-shrink-0 mt-0.5 group-hover:text-[#E2A16F] transition-colors duration-300" size={20} />
                      <span className="text-[#86B0BD]/80">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

