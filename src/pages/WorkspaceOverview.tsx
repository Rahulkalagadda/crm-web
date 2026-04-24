import React from 'react';
import { motion } from 'framer-motion';

export const WorkspaceOverview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 space-y-8"
    >
      {/* Dashboard Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-h1 text-h1 text-on-background">Workspace Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time performance metrics for Q4 2024</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold shadow-sm hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-colors">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Total Leads */}
        <div className="bg-white dark:bg-slate-900 p-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm shadow-indigo-500/5 hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
              <span className="material-symbols-outlined">group</span>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <p className="text-body-sm font-label-md text-on-surface-variant mb-1">Total Leads</p>
          <p className="text-h2 font-h2 text-on-background">2,842</p>
          <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1 }} className="h-full bg-indigo-500"></motion.div>
          </div>
        </div>

        {/* Active Deals */}
        <div className="bg-white dark:bg-slate-900 p-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm shadow-indigo-500/5 hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Active</span>
          </div>
          <p className="text-body-sm font-label-md text-on-surface-variant mb-1">Active Pipeline Value</p>
          <p className="text-h2 font-h2 text-on-background">$14.2M</p>
          <p className="text-xs text-gray-400 mt-2">Across 42 pending contracts</p>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white dark:bg-slate-900 p-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm shadow-indigo-500/5 hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
              <span className="material-symbols-outlined">auto_graph</span>
            </div>
            <div className="flex gap-1 items-end">
              <motion.span initial={{ height: 0 }} animate={{ height: "16px" }} transition={{ duration: 0.3 }} className="w-1.5 bg-amber-200 rounded-full"></motion.span>
              <motion.span initial={{ height: 0 }} animate={{ height: "24px" }} transition={{ duration: 0.5 }} className="w-1.5 bg-amber-300 rounded-full"></motion.span>
              <motion.span initial={{ height: 0 }} animate={{ height: "12px" }} transition={{ duration: 0.7 }} className="w-1.5 bg-amber-500 rounded-full"></motion.span>
            </div>
          </div>
          <p className="text-body-sm font-label-md text-on-surface-variant mb-1">Conversion Rate</p>
          <p className="text-h2 font-h2 text-on-background">3.82%</p>
          <p className="text-xs text-red-500 mt-2">↓ 0.4% from last month</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white dark:bg-slate-900 p-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm shadow-indigo-500/5 hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <span className="material-symbols-outlined">insights</span>
            </div>
          </div>
          <p className="text-body-sm font-label-md text-on-surface-variant mb-1">Total Revenue (YTD)</p>
          <p className="text-h2 font-h2 text-on-background">$2.48M</p>
          <p className="text-xs text-indigo-500 font-semibold mt-2">Target: $3.0M</p>
        </div>
      </div>

      {/* Visual Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Pipeline Distribution Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-h3 text-h3">Pipeline Distribution</h3>
            <select className="bg-gray-50 border-none text-xs font-semibold rounded-lg focus:ring-0 cursor-pointer">
              <option>All Agents</option>
              <option>Top Performers</option>
            </select>
          </div>
          <div className="flex items-end gap-4 h-64 px-4">
            {[
              { label: "New", height: "40%", val: 124, color: "bg-indigo-100 dark:bg-indigo-900/20" },
              { label: "Contacted", height: "65%", val: 182, color: "bg-indigo-200 dark:bg-indigo-800/40" },
              { label: "Qualified", height: "85%", val: 245, color: "bg-indigo-400 dark:bg-indigo-600" },
              { label: "Proposal", height: "50%", val: 156, color: "bg-indigo-600 dark:bg-indigo-500" },
              { label: "Closing", height: "30%", val: 92, color: "bg-emerald-500" }
            ].map((bar, i) => (
              <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: bar.height }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  className={`w-full ${bar.color} rounded-t-lg relative group flex items-end justify-center`}
                >
                  <div className="absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {bar.val}
                  </div>
                </motion.div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leads by Source Doughnut Chart */}
        <div className="bg-white dark:bg-slate-900 p-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="font-h3 text-h3 mb-6">Leads by Source</h3>
          <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle className="stroke-gray-100 dark:stroke-gray-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
              <motion.circle initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "45, 100" }} transition={{ duration: 1 }} className="stroke-indigo-600" cx="18" cy="18" fill="none" r="16" strokeLinecap="round" strokeWidth="3"></motion.circle>
              <motion.circle initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "25, 100" }} transition={{ duration: 1, delay: 0.2 }} className="stroke-emerald-500" cx="18" cy="18" fill="none" r="16" strokeDashoffset="-45" strokeLinecap="round" strokeWidth="3"></motion.circle>
              <motion.circle initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "15, 100" }} transition={{ duration: 1, delay: 0.4 }} className="stroke-amber-400" cx="18" cy="18" fill="none" r="16" strokeDashoffset="-70" strokeLinecap="round" strokeWidth="3"></motion.circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-h3 font-h3">2.8k</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase">Total</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></span>
                <span className="text-on-surface-variant">Zillow Premier</span>
              </div>
              <span className="font-bold">45%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                <span className="text-on-surface-variant">Organic Search</span>
              </div>
              <span className="font-bold">25%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                <span className="text-on-surface-variant">Referrals</span>
              </div>
              <span className="font-bold">15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Grid: Activities & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* Recent Activities */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="p-lg border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <h3 className="font-h3 text-h3">Recent Activities</h3>
            <button className="text-indigo-600 text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="divide-y divide-gray-50 dark:divide-gray-800">
            <div className="p-md flex gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-blue-500 text-xl">history_edu</span>
              </div>
              <div>
                <p className="text-sm"><span className="font-bold">Sarah Jenkins</span> signed the contract for <span className="font-semibold text-indigo-600">The Heights Penthouse</span></p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago • Automated Process</p>
              </div>
            </div>
            <div className="p-md flex gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-emerald-500 text-xl">person_add</span>
              </div>
              <div>
                <p className="text-sm"><span className="font-bold">New Lead:</span> Michael Chen added via Zillow integration</p>
                <p className="text-xs text-gray-400 mt-1">14 minutes ago • System</p>
              </div>
            </div>
            <div className="p-md flex gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-amber-500 text-xl">schedule</span>
              </div>
              <div>
                <p className="text-sm"><span className="font-bold">Property Tour</span> scheduled for 1422 Oak Street</p>
                <p className="text-xs text-gray-400 mt-1">1 hour ago • Agent: David K.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Performance Leaderboard */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="p-lg border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-h3 text-h3">Team Performance</h3>
          </div>
          <div className="p-lg">
            <table className="w-full">
              <thead>
                <tr className="text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <th className="pb-4">Agent</th>
                  <th className="pb-4">Closed Deals</th>
                  <th className="pb-4">Volume</th>
                  <th className="pb-4 text-right">Progress</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50 dark:border-gray-800">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqusbO2OL8Px-N44Gza44L-tF29hnnm8k8L9oAB2lp2jE0eD6ofRHcgYQAxBs9BYgFla8K4vdEl1bIhgy6pmYgX8dywpvgqu-ZGRanRM1a2TZxDJCvWJWeoujv7UAyXiHV2L5IknC_3tW5lSo5_WAxqLqpBCFAE3joMGL4tmLUE-qi7HS9pHyxL1xE6iWIe1IdvtJpDAigGPJqVb7BVhZWAPzrIMI_5S7PgfqGvggeNBNl-Q4zG4r7SSBOR5Yu9goBvVyifAhJ7hA" alt="Elena R." />
                      <span className="font-bold">Elena R.</span>
                    </div>
                  </td>
                  <td className="py-4 font-semibold">12</td>
                  <td className="py-4 font-semibold">$4.2M</td>
                  <td className="py-4">
                    <div className="flex items-center justify-end gap-3">
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full">
                        <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} className="h-full bg-indigo-500 rounded-full"></motion.div>
                      </div>
                      <span className="text-xs font-bold">90%</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-50 dark:border-gray-800">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDghJrq3sXv5aSfeIHPhNhY49SsYTHnFfv8GggAhQw-Z0FgxiNJBBhTbq6ixi86GMRlORDNAS7tmC8OgLq1A89ijmYp90V5SXvXXzF2ZOqfE-P1sjuKCId3q9Y7I5w7d6ngb04v-W9wjDikvCEQ5DZAw-fWRGsQ392mDgj-WMK33lSo3wPm1hug9MtEM-aUTOKVRus8D6XeO6WC2h5f8qgsyuGCPPeKH69i1LojYMM1YQDtN3hd8F-s7pzkZhLtjPTRLSxIDfDqwOk" alt="David K." />
                      <span className="font-bold">David K.</span>
                    </div>
                  </td>
                  <td className="py-4 font-semibold">8</td>
                  <td className="py-4 font-semibold">$2.8M</td>
                  <td className="py-4">
                    <div className="flex items-center justify-end gap-3">
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full">
                        <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} className="h-full bg-indigo-400 rounded-full"></motion.div>
                      </div>
                      <span className="text-xs font-bold">65%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6OJFXzTNstYD6QNQTVhewEHzbKmqB2k9X8GUEoOUJtboXu1Haan_RRPesXigK1dMQSQlVZNz7AHprEKB4tLJwk1ULMImdVPFSyGZey83Ht8uGT8qr8px6yqV8n8kK1Fj7oa5BBBDYWoq4RIh1KEgSS0Cq0a8uLfsce_fwTWmfTTnIOdivECgBOsYAQkZ-bIAKI0wU_VlfXb6obfMUzS3ZNhQW2KWe2GM9YYgEeBPlRAdqwOf0j82hSQ47BTQlPX9N2m4kbsDWdFQ" alt="Sarah J." />
                      <span className="font-bold">Sarah J.</span>
                    </div>
                  </td>
                  <td className="py-4 font-semibold">5</td>
                  <td className="py-4 font-semibold">$1.4M</td>
                  <td className="py-4">
                    <div className="flex items-center justify-end gap-3">
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full">
                        <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} className="h-full bg-amber-400 rounded-full"></motion.div>
                      </div>
                      <span className="text-xs font-bold">40%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
