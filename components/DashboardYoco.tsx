import { LayoutDashboard, ShoppingBag, CreditCard, Settings, TrendingUp, AlertCircle, CheckCircle, Clock, Package, Users, BarChart3, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function DashboardYoco() {
  const [activeNav, setActiveNav] = useState('Hub');

  const navItems = [
    { id: 'Hub', icon: LayoutDashboard, label: 'Hub' },
    { id: 'Orders', icon: ShoppingBag, label: 'Orders' },
    { id: 'Payments', icon: CreditCard, label: 'Payments' },
    { id: 'Settings', icon: Settings, label: 'Settings' },
  ];

  const mostVisited = [
    {
      title: 'Recent Orders',
      content: '12 Active orders',
      icon: ShoppingBag,
      color: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
    {
      title: 'Active Disputes',
      content: '2 Pending resolution',
      icon: AlertCircle,
      color: 'text-[#E2A16F]',
      bgColor: 'bg-[#E2A16F]/10',
    },
    {
      title: 'Pending Payments',
      content: '8 Awaiting release',
      icon: Clock,
      color: 'text-[#86B0BD]',
      bgColor: 'bg-[#86B0BD]/10',
    },
    {
      title: 'Completed Orders',
      content: '156 Last month',
      icon: CheckCircle,
      color: 'text-[#86B0BD]',
      bgColor: 'bg-[#86B0BD]/10',
    },
  ];

  // Mock weekly revenue data
  const weeklyRevenue = [
    { day: 'M', amount: 0 },
    { day: 'T', amount: 0 },
    { day: 'W', amount: 0 },
    { day: 'T', amount: 0 },
    { day: 'F', amount: 0 },
    { day: 'S', amount: 0 },
    { day: 'S', amount: 0 },
  ];

  const maxRevenue = Math.max(...weeklyRevenue.map(r => r.amount), 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0DD] via-[#FFF8F0] to-[#FFF0DD] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#86B0BD]/20 via-[#E2A16F]/10 to-[#86B0BD]/20 backdrop-blur-md border-r border-white/30 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/20">
          <Link to="/">
            <img src="/zemi logo.png" alt="Zemi" className="h-8" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-white/40 backdrop-blur-sm text-[#030213] shadow-md'
                    : 'text-[#86B0BD] hover:bg-white/20 hover:text-[#E2A16F]'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-white/20 space-y-2">
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E2A16F] to-[#86B0BD] flex items-center justify-center text-white font-semibold text-sm">
              ZC
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#030213] truncate">zeupreme collections</p>
              <p className="text-xs text-[#86B0BD] truncate">Seller Account</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#86B0BD] to-[#E2A16F] flex items-center justify-center text-white font-semibold text-sm">
              ZM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#030213] truncate">Zemi Manager</p>
              <p className="text-xs text-[#86B0BD] truncate">Support Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#030213] mb-2">Hub</h1>
            <p className="text-[#86B0BD]">Overview of your Zemi seller account</p>
          </div>

          {/* Most Visited Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#030213] mb-4">Most visited</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mostVisited.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="backdrop-blur-md bg-white/40 rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <div className={`${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={item.color} size={24} />
                    </div>
                    <h3 className="text-sm font-medium text-[#86B0BD]/70 mb-1">{item.title}</h3>
                    <p className="text-lg font-semibold text-[#030213]">{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reports Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#030213]">Reports</h2>
              <button className="text-sm text-[#86B0BD] hover:text-[#E2A16F] transition-colors flex items-center gap-1">
                View all
                <TrendingUp size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Revenue Overview */}
              <div className="lg:col-span-2 backdrop-blur-md bg-white/40 rounded-xl p-6 border border-white/30 shadow-lg">
                <h3 className="text-sm font-medium text-[#86B0BD]/70 mb-4">Revenue Overview</h3>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-[#030213]">KSh 0.00</span>
                    <span className="text-sm text-[#86B0BD]">Last week</span>
                  </div>
                  <div className="flex items-end gap-1 h-24">
                    {weeklyRevenue.map((day, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-[#E2A16F] to-[#86B0BD] rounded-t transition-all duration-300 hover:opacity-80"
                          style={{
                            height: `${(day.amount / maxRevenue) * 100}%`,
                            minHeight: day.amount === 0 ? '4px' : '0',
                          }}
                        />
                        <span className="text-xs text-[#86B0BD]/60">{day.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#86B0BD]/70">Total Revenue</span>
                    <span className="font-semibold text-[#030213]">KSh 0.00</span>
                  </div>
                </div>
              </div>

              {/* Order Analytics */}
              <div className="backdrop-blur-md bg-white/40 rounded-xl p-6 border border-white/30 shadow-lg">
                <h3 className="text-sm font-medium text-[#86B0BD]/70 mb-4">Order Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#86B0BD]/10 flex items-center justify-center">
                      <Package className="text-[#86B0BD]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#86B0BD]/60">Total Orders</p>
                      <p className="text-lg font-semibold text-[#030213]">0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E2A16F]/10 flex items-center justify-center">
                      <CheckCircle className="text-[#E2A16F]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#86B0BD]/60">Success Rate</p>
                      <p className="text-lg font-semibold text-[#030213]">0.0%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rider Performance */}
              <div className="backdrop-blur-md bg-white/40 rounded-xl p-6 border border-white/30 shadow-lg">
                <h3 className="text-sm font-medium text-[#86B0BD]/70 mb-4">Rider Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#86B0BD]/10 flex items-center justify-center">
                      <Users className="text-[#86B0BD]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#86B0BD]/60">Active Riders</p>
                      <p className="text-lg font-semibold text-[#030213]">0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E2A16F]/10 flex items-center justify-center">
                      <BarChart3 className="text-[#E2A16F]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#86B0BD]/60">Avg Delivery Time</p>
                      <p className="text-lg font-semibold text-[#030213]">--</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

