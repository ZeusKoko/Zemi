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
    <div className="min-h-screen bg-[#0F172A] flex text-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E293B]/40 backdrop-blur-xl border-r border-[#F8FAFC]/5 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#F8FAFC]/10">
          <Link to="/">
            <img src="/zemi logo.png" alt="Zemi" className="h-8 brightness-0 invert" />
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-[#9DC08B] text-[#0F172A] shadow-lg shadow-[#9DC08B]/20'
                  : 'text-[#F8FAFC]/60 hover:bg-[#F8FAFC]/5 hover:text-[#9DC08B]'
                  }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-[#F8FAFC]/10 space-y-2">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-[#F8FAFC]/5 transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9DC08B] to-[#22D3EE] flex items-center justify-center text-[#0F172A] font-bold text-sm">
              ZC
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#F8FAFC] truncate">zeupreme collections</p>
              <p className="text-xs text-[#F8FAFC]/40 truncate">Seller Account</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-[#F8FAFC]/5 transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#9DC08B] flex items-center justify-center text-[#0F172A] font-bold text-sm">
              ZM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#F8FAFC] truncate">Zemi Manager</p>
              <p className="text-xs text-[#F8FAFC]/40 truncate">Support Account</p>
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
            <h2 className="text-xl font-bold text-[#F8FAFC] mb-4">Most visited</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mostVisited.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-[#1E293B]/40 rounded-2xl p-6 border border-[#F8FAFC]/5 shadow-xl hover:shadow-[#9DC08B]/5 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors bg-[#9DC08B]/10 group-hover:bg-[#9DC08B]/20`}>
                      <Icon className="text-[#9DC08B]" size={24} />
                    </div>
                    <h3 className="text-sm font-medium text-[#F8FAFC]/40 mb-1">{item.title}</h3>
                    <p className="text-lg font-bold text-[#F8FAFC]">{item.content}</p>
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
              <div className="lg:col-span-2 backdrop-blur-xl bg-[#1E293B]/40 rounded-2xl p-6 border border-[#F8FAFC]/5 shadow-xl">
                <h3 className="text-sm font-medium text-[#F8FAFC]/40 mb-4">Revenue Overview</h3>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#F8FAFC]">KSh 0.00</span>
                    <span className="text-sm text-[#F8FAFC]/40">Last week</span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {weeklyRevenue.map((day, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-gradient-to-t from-[#9DC08B] to-[#22D3EE] rounded-t-lg transition-all duration-300 hover:brightness-110 shadow-[0_0_10px_rgba(157,192,139,0.2)]"
                          style={{
                            height: `${(day.amount / maxRevenue) * 100}%`,
                            minHeight: day.amount === 0 ? '6px' : '0',
                          }}
                        />
                        <span className="text-xs font-medium text-[#F8FAFC]/20">{day.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-[#F8FAFC]/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#F8FAFC]/40">Total Revenue</span>
                    <span className="font-bold text-[#F8FAFC]">KSh 0.00</span>
                  </div>
                </div>
              </div>

              {/* Order Analytics */}
              <div className="backdrop-blur-xl bg-[#1E293B]/40 rounded-2xl p-6 border border-[#F8FAFC]/5 shadow-xl">
                <h3 className="text-sm font-medium text-[#F8FAFC]/40 mb-4">Order Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#9DC08B]/10 flex items-center justify-center transition-colors group-hover:bg-[#9DC08B]/20">
                      <Package className="text-[#9DC08B]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#F8FAFC]/40">Total Orders</p>
                      <p className="text-lg font-bold text-[#F8FAFC]">0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center transition-colors group-hover:bg-[#22D3EE]/20">
                      <CheckCircle className="text-[#22D3EE]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#F8FAFC]/40">Success Rate</p>
                      <p className="text-lg font-bold text-[#F8FAFC]">0.0%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rider Performance */}
              <div className="backdrop-blur-xl bg-[#1E293B]/40 rounded-2xl p-6 border border-[#F8FAFC]/5 shadow-xl">
                <h3 className="text-sm font-medium text-[#F8FAFC]/40 mb-4">Rider Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#9DC08B]/10 flex items-center justify-center transition-colors group-hover:bg-[#9DC08B]/20">
                      <Users className="text-[#9DC08B]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#F8FAFC]/40">Active Riders</p>
                      <p className="text-lg font-bold text-[#F8FAFC]">0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center transition-colors group-hover:bg-[#22D3EE]/20">
                      <BarChart3 className="text-[#22D3EE]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#F8FAFC]/40">Avg Delivery Time</p>
                      <p className="text-lg font-bold text-[#F8FAFC]">--</p>
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

