import { Shield, CheckCircle, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Payment protection',
    description: 'Funds are held securely until the buyer confirms delivery and verifies the product.',
  },
  {
    icon: CheckCircle,
    title: 'Verified delivery',
    description: 'Buyers can inspect and verify product authenticity before releasing payment.',
  },
  {
    icon: Lock,
    title: 'Seller guarantee',
    description: 'Sellers are guaranteed payment once delivery is confirmed. No payment defaults.',
  },
  {
    icon: Zap,
    title: 'Instant release',
    description: 'Quick and seamless payment release process once both parties are satisfied.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#86B0BD] mb-4">
            Built for trust
          </h2>
          <p className="text-[#86B0BD]/80 max-w-2xl mx-auto">
            Zemi protects both buyers and sellers, making online transactions safe and reliable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 bg-[#E2A16F]/10 rounded-2xl flex items-center justify-center">
                <feature.icon className="text-[#E2A16F]" size={24} />
              </div>
              <h3 className="text-[#86B0BD]">
                {feature.title}
              </h3>
              <p className="text-[#86B0BD]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
