import React from 'react';
import { motion } from 'framer-motion';

export const ReportsAnalytics: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8"
    >
      <header className="mb-8">
        <h1 className="font-h1 text-h1 text-on-surface">Reports &amp; Analytics</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Performance overview for Q4 2024</p>
      </header>

      {/* KPI Bento Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm shadow-indigo-500/5">
          <div className="flex justify-between items-start mb-4">
            <span className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <span className="material-symbols-outlined">payments</span>
            </span>
            <span className="text-secondary font-semibold flex items-center text-xs">
              <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
              12.5%
            </span>
          </div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Revenue</h4>
          <p className="text-2xl font-bold text-on-surface">$4.28M</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm shadow-indigo-500/5">
          <div className="flex justify-between items-start mb-4">
            <span className="p-2 bg-secondary-container/20 rounded-lg text-secondary">
              <span className="material-symbols-outlined">handshake</span>
            </span>
            <span className="text-secondary font-semibold flex items-center text-xs">
              <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
              8.2%
            </span>
          </div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Closed Deals</h4>
          <p className="text-2xl font-bold text-on-surface">142</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm shadow-indigo-500/5">
          <div className="flex justify-between items-start mb-4">
            <span className="p-2 bg-tertiary-fixed/30 rounded-lg text-tertiary">
              <span className="material-symbols-outlined">group_add</span>
            </span>
            <span className="text-error font-semibold flex items-center text-xs">
              <span className="material-symbols-outlined text-xs mr-1">trending_down</span>
              3.1%
            </span>
          </div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">New Leads</h4>
          <p className="text-2xl font-bold text-on-surface">892</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm shadow-indigo-500/5">
          <div className="flex justify-between items-start mb-4">
            <span className="p-2 bg-error-container/40 rounded-lg text-error">
              <span className="material-symbols-outlined">speed</span>
            </span>
            <span className="text-secondary font-semibold flex items-center text-xs">
              <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
              21.4%
            </span>
          </div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Conversion Rate</h4>
          <p className="text-2xl font-bold text-on-surface">15.9%</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Revenue Forecast Chart Area */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-h3 text-h3">Revenue Forecast</h3>
              <p className="text-body-sm text-gray-500">Projected income vs. historical performance</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-md">Weekly</button>
              <button className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-50 rounded-md transition-colors">Monthly</button>
            </div>
          </div>
          {/* Visualizing the Area Chart with CSS Gradients/Shapes */}
          <div className="h-64 relative flex items-end gap-1">
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              <div className="border-t border-gray-100 w-full h-0"></div>
              <div className="border-t border-gray-100 w-full h-0"></div>
              <div className="border-t border-gray-100 w-full h-0"></div>
              <div className="border-t border-gray-100 w-full h-0"></div>
            </div>
            {[
              { height: "40%", solid: true },
              { height: "55%", solid: true },
              { height: "45%", solid: true },
              { height: "65%", solid: true },
              { height: "85%", solid: true },
              { height: "70%", solid: true },
              { height: "95%", solid: true },
              { height: "60%", solid: false },
              { height: "75%", solid: false },
              { height: "80%", solid: false },
            ].map((bar, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: bar.height }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className={`flex-1 rounded-t-sm relative group ${
                  bar.solid
                    ? "bg-gradient-to-t from-indigo-500/20 to-indigo-500"
                    : "bg-gradient-to-t from-indigo-100 to-indigo-200 border-2 border-dashed border-indigo-300"
                }`}
              >
                {i === 0 && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Nov 1</div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <span>Oct 2024</span>
            <span>Nov 2024</span>
            <span>Dec 2024 (Forecast)</span>
          </div>
        </div>

        {/* Lead Source Breakdown */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="font-h3 text-h3 mb-1">Lead Sources</h3>
          <p className="text-body-sm text-gray-500 mb-8">Performance per channel</p>
          <div className="flex justify-center mb-8">
            <div className="relative h-48 w-48 rounded-full border-[20px] border-indigo-600 flex items-center justify-center">
              <div className="absolute inset-[-20px] rounded-full border-[20px] border-secondary border-l-transparent border-b-transparent rotate-45"></div>
              <div className="absolute inset-[-20px] rounded-full border-[20px] border-tertiary border-l-transparent border-r-transparent border-t-transparent -rotate-12"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">892</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Total</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                <span className="text-sm font-medium">Digital Ads</span>
              </div>
              <span className="text-sm font-bold">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="text-sm font-medium">Referrals</span>
              </div>
              <span className="text-sm font-bold">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                <span className="text-sm font-medium">Organic</span>
              </div>
              <span className="text-sm font-bold">25%</span>
            </div>
          </div>
        </div>

        {/* Conversion Funnel Section */}
        <div className="col-span-12 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="mb-10">
            <h3 className="font-h3 text-h3">Sales Conversion Funnel</h3>
            <p className="text-body-sm text-gray-500">End-to-end performance tracking from acquisition to close</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-center group transition-all hover:bg-indigo-100">
              <p className="text-indigo-600 font-bold text-lg mb-1">892</p>
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Leads</p>
              <div className="mt-4 h-1.5 bg-indigo-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="bg-indigo-600 h-full"></motion.div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center text-gray-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>

            <div className="flex-1 w-full bg-surface-container rounded-xl p-6 text-center group transition-all hover:bg-surface-container-high">
              <p className="text-on-surface font-bold text-lg mb-1">512</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Contacted</p>
              <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "57%" }} transition={{ duration: 1, delay: 0.2 }} className="bg-indigo-500 h-full"></motion.div>
              </div>
              <p className="mt-2 text-[10px] text-secondary font-bold">57% Yield</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-gray-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>

            <div className="flex-1 w-full bg-surface-container rounded-xl p-6 text-center group transition-all hover:bg-surface-container-high">
              <p className="text-on-surface font-bold text-lg mb-1">284</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Site Visit</p>
              <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "55%" }} transition={{ duration: 1, delay: 0.4 }} className="bg-indigo-400 h-full"></motion.div>
              </div>
              <p className="mt-2 text-[10px] text-secondary font-bold">55% Yield</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-gray-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>

            <div className="flex-1 w-full bg-surface-container rounded-xl p-6 text-center group transition-all hover:bg-surface-container-high">
              <p className="text-on-surface font-bold text-lg mb-1">198</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Negotiation</p>
              <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 1, delay: 0.6 }} className="bg-indigo-300 h-full"></motion.div>
              </div>
              <p className="mt-2 text-[10px] text-secondary font-bold">70% Yield</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-gray-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>

            <div className="flex-1 w-full bg-secondary-container/10 border border-secondary-container/30 rounded-xl p-6 text-center group transition-all hover:bg-secondary-container/20">
              <p className="text-secondary font-bold text-lg mb-1">142</p>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest">Closed</p>
              <div className="mt-4 h-1.5 bg-secondary-fixed/30 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ duration: 1, delay: 0.8 }} className="bg-secondary h-full"></motion.div>
              </div>
              <p className="mt-2 text-[10px] text-secondary font-bold">72% Yield</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
