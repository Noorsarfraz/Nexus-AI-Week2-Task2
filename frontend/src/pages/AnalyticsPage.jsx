import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#030712] dark-transition text-slate-200 flex">
      
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900/90 border-r border-slate-800 transition-all duration-300 flex flex-col justify-between p-4 sticky top-0 h-screen z-20 backdrop-blur-xl card-container`}>
        <div className="space-y-8">
          {/* Brand Logo */}
          <div className="flex items-center justify-between px-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-600/30">
                N
              </div>
              {sidebarOpen && <span className="text-xl font-black text-white title-text tracking-wide">NexusAI</span>}
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { path: '/dashboard', label: 'Dashboard', icon: '📊' },
              { path: '/analytics', label: 'Analytics & Reports', icon: '📈' },
              { path: '/models', label: 'AI Models Hub', icon: '🤖' },
              { path: '/api-keys', label: 'API Keys & Tokens', icon: '🔑' },
              { path: '/profile', label: 'Profile', icon: '👤' },
              { path: '/settings', label: 'Settings', icon: '⚙️' },
              { path: '/billing', label: 'Billing', icon: '💳' },
            ].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {sidebarOpen && <span className="text-sm">{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / Toggle */}
        <div className="space-y-3 pt-4 border-t border-slate-800/60">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white text-xs rounded-xl transition cursor-pointer border border-slate-700/50"
          >
            {sidebarOpen ? '◀ Collapse' : '▶'}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics & Reports</h1>
            <p className="text-sm text-slate-400">Monitor your cluster traffic, server performance, and response latency.</p>
          </div>
          <Link to="/dashboard" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm rounded-xl transition border border-slate-700">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <p className="text-sm text-slate-400">Total API Requests</p>
            <h3 className="text-3xl font-black text-white">142,850</h3>
            <span className="text-xs text-emerald-400 font-medium">+14% from last month</span>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <p className="text-sm text-slate-400">Average Latency</p>
            <h3 className="text-3xl font-black text-white">42ms</h3>
            <span className="text-xs text-emerald-400 font-medium">Optimal performance</span>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <p className="text-sm text-slate-400">Error Rate</p>
            <h3 className="text-3xl font-black text-white">0.02%</h3>
            <span className="text-xs text-emerald-400 font-medium">Stable cluster</span>
          </div>
        </div>
      </main>

    </div>
  );
}