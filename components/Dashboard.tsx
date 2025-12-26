import { FileText, Clock, CheckCircle, DollarSign, TrendingUp, Users, Package, Settings, AlertCircle, Plus, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const metrics = [
    {
      icon: FileText,
      title: 'Total Orders',
      value: '0',
      subtitle: 'All time',
      bgColor: 'bg-[#E2A16F]/10',
      iconColor: 'text-[#E2A16F]',
    },
    {
      icon: Clock,
      title: 'Pending',
      value: '0',
      subtitle: 'Active orders',
      bgColor: 'bg-[#E2A16F]/10',
      iconColor: 'text-[#E2A16F]',
    },
    {
      icon: CheckCircle,
      title: 'Completed',
      value: '0',
      subtitle: '0.0% success rate',
      bgColor: 'bg-[#86B0BD]/10',
      iconColor: 'text-[#86B0BD]',
    },
    {
      icon: DollarSign,
      title: 'Revenue',
      value: 'KSh 0.00',
      subtitle: 'Total earnings',
      bgColor: 'bg-[#86B0BD]/10',
      iconColor: 'text-[#86B0BD]',
      valueColor: 'text-[#86B0BD]',
    },
    {
      icon: TrendingUp,
      title: 'Avg Order Value',
      value: 'KSh 0.00',
      subtitle: 'Per transaction',
      bgColor: 'bg-[#86B0BD]/10',
      iconColor: 'text-[#86B0BD]',
    },
    {
      icon: Users,
      title: 'Active Riders',
      value: '0',
      subtitle: 'Delivery partners',
      bgColor: 'bg-[#D1D3D4]/10',
      iconColor: 'text-[#86B0BD]',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0DD] via-[#FFF8F0] to-[#FFF0DD] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <div className="mb-6">
          <Link to="/" className="inline-block mb-4">
            <img src="/zemi logo.png" alt="Zemi" className="h-8" />
          </Link>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#030213] mb-2">zeupreme collections</h1>
              <p className="text-[#86B0BD]">Manage orders and track performance</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-4 py-2 text-sm text-[#86B0BD] hover:text-[#E2A16F] transition-colors backdrop-blur-sm bg-white/30 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <Settings size={16} />
                  <span>Profile Settings</span>
                </div>
              </button>
              <button className="px-4 py-2 text-sm text-[#86B0BD] hover:text-[#E2A16F] transition-colors backdrop-blur-sm bg-white/30 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>Disputes</span>
                </div>
              </button>
              <button className="px-4 py-2 text-sm text-[#86B0BD] hover:text-[#E2A16F] transition-colors backdrop-blur-sm bg-white/30 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>Manage Riders (0)</span>
                </div>
              </button>
              <button className="px-6 py-2 text-sm font-semibold text-white bg-[#E2A16F] hover:bg-[#E2A16F]/90 transition-colors rounded-lg shadow-lg shadow-[#E2A16F]/20 flex items-center gap-2">
                <Plus size={18} />
                <span>Create Order</span>
              </button>
              <button className="px-4 py-2 text-sm text-[#86B0BD] hover:text-[#E2A16F] transition-colors backdrop-blur-sm bg-white/30 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-md bg-white/40 rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${metric.bgColor} p-3 rounded-xl`}>
                    <Icon className={metric.iconColor} size={24} />
                  </div>
                </div>
                <h3 className="text-sm text-[#86B0BD]/70 mb-1">{metric.title}</h3>
                <p className={`text-2xl font-bold ${metric.valueColor || 'text-[#030213]'} mb-1`}>
                  {metric.value}
                </p>
                <p className="text-xs text-[#86B0BD]/60">{metric.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Orders Section */}
        <div className="backdrop-blur-md bg-white/40 rounded-2xl p-8 border border-white/30 shadow-lg">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#030213] mb-2">Recent Orders</h2>
            <p className="text-sm text-[#86B0BD]">View and manage your order history</p>
          </div>
          
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 p-6 rounded-full bg-[#86B0BD]/10 backdrop-blur-sm">
              <Package className="text-[#86B0BD]" size={48} />
            </div>
            <h3 className="text-lg font-semibold text-[#030213] mb-2">No orders yet</h3>
            <p className="text-sm text-[#86B0BD]/70 mb-6">Create your first order to get started!</p>
            <button className="px-6 py-3 text-sm font-semibold text-white bg-[#E2A16F] hover:bg-[#E2A16F]/90 transition-colors rounded-lg shadow-lg shadow-[#E2A16F]/20 flex items-center gap-2">
              <Plus size={18} />
              <span>Create Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

