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
    <section id="features" className="py-20 px-6 bg-brand-midnight/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-white mb-4">
            Built for trust
          </h2>
          <p className="text-brand-white/70 max-w-2xl mx-auto">
            Zemi protects both buyers and sellers, making online transactions safe and reliable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 group">
              <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                <feature.icon className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-brand-white">
                {feature.title}
              </h3>
              <p className="text-brand-white/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
