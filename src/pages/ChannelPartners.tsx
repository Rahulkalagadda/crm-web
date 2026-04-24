import React from 'react';
import { motion } from 'framer-motion';

export const ChannelPartners: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 space-y-8 max-w-7xl mx-auto"
    >
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">Channel Partners</h2>
          <p className="text-body-md text-on-surface-variant">Manage and monitor high-velocity agency relationships and commission structures.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg font-button text-button hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-white rounded-lg font-button text-button hover:opacity-90 transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm">handshake</span>
            Add Partner
          </button>
        </div>
      </div>

      {/* Top Performing Cards (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Partner 1 */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-indigo-600">military_tech</span>
          </div>
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-1">
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-wider">Top Performer</span>
              <h3 className="font-h3 text-h3">Skyline Realty Group</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-tighter font-semibold">Total Revenue</p>
              <p className="text-xl font-bold text-indigo-600">$4.2M</p>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-tighter font-semibold">Leads</p>
              <p className="text-xl font-bold text-on-surface">128</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPwLU5jjwItoBO14P1DiA1D0VE1o21_TKEdImVDHFgyADKCgUFzmckFNXyQ-wyX7c3hWw-QonxHA5F8kCTveZMavcuQZPHIT6ekwpNE9PixS8mjXK0U32w_U9MblvmgwzO0ueb7RbUpH04bXDHvrdGdMaAo3CzC7WeOkvPRJcHt2lyif4VUjkq_eQYrvRODHu-ci3z0VhnBa8O6QHttX1IxkO2P9yIE8xRcGkLLbfG8PZ-o-PyqtgRjiDylj-k-fwqdexPK33wuXg" alt="Marcus Thorne" />
            </div>
            <span className="text-xs font-medium text-on-surface-variant">Primary: Marcus Thorne</span>
          </div>
        </motion.div>

        {/* Metrics Summary */}
        <div className="bg-indigo-600 p-6 rounded-xl border border-indigo-700 shadow-lg text-white flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-100 opacity-80">Aggregate Channel Revenue</p>
            <h3 className="text-3xl font-black mt-1">$12.8M</h3>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-semibold text-indigo-100">Performance vs Target</span>
              <span className="text-xs font-bold text-secondary-fixed">+14.2%</span>
            </div>
            <div className="w-full bg-indigo-800 rounded-full h-1.5 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1 }} className="bg-secondary-fixed h-full rounded-full"></motion.div>
            </div>
          </div>
        </div>

        {/* Top Partner 2 */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-indigo-600">rocket_launch</span>
          </div>
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-1">
              <span className="px-2 py-0.5 bg-tertiary-container text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Fastest Growth</span>
              <h3 className="font-h3 text-h3">Vanguard Estates</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-tighter font-semibold">Total Revenue</p>
              <p className="text-xl font-bold text-indigo-600">$2.1M</p>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-tighter font-semibold">Leads</p>
              <p className="text-xl font-bold text-on-surface">84</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3eTKqtnMmyic0cgHiBK1iqOc6Dqmi2wYdVvl4H8gREplFlVDfnVU5qUqytX2koYTTZkMzAKw99j5s-fb5FeKl5eUG_0v6E-2R8XOAQqWUEVi__vo9jjcQccqrYt8KvhljXo9JydWNiSfyCP6TtruODBwciv--RFmSRr8XxH2HicZ3l9aLWJD7tHCaqZjp5UQ7PIE-hHAE6CTm7ArVrIo--wJ297Cdk321OnXHwE6pxuNrojmzopckVYPURDeabMHZCSzuWNkt9Xc" alt="Elena Rodriguez" />
            </div>
            <span className="text-xs font-medium text-on-surface-variant">Primary: Elena Rodriguez</span>
          </div>
        </motion.div>
      </div>

      {/* Partners List View */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="px-3 py-1.5 bg-surface-container text-primary font-semibold text-sm rounded-md">All Partners</button>
            <button className="px-3 py-1.5 text-on-surface-variant hover:text-primary font-semibold text-sm transition-colors">By Performance</button>
            <button className="px-3 py-1.5 text-on-surface-variant hover:text-primary font-semibold text-sm transition-colors">By Region</button>
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium cursor-pointer hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm">cloud_download</span>
            Export CSV
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Agency Name</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Primary Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Commission %</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-center">Leads Generated</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Revenue Attributed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                      <span className="material-symbols-outlined">apartment</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Skyline Realty Group</div>
                      <div className="text-xs text-on-surface-variant">New York, NY</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Marcus Thorne</span>
                    <span className="text-xs text-gray-400">m.thorne@skyline.re</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-surface-container rounded-md text-xs font-bold text-indigo-700">3.5%</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-semibold">128</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-bold">$4,210,000</span>
                    <span className="text-[10px] text-secondary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">trending_up</span>
                      12% YoY
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                      <span className="material-symbols-outlined">apartment</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Vanguard Estates</div>
                      <div className="text-xs text-on-surface-variant">London, UK</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Elena Rodriguez</span>
                    <span className="text-xs text-gray-400">elena.r@vanguard.com</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-surface-container rounded-md text-xs font-bold text-indigo-700">4.0%</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-semibold">84</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-bold">$2,145,000</span>
                    <span className="text-[10px] text-secondary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">trending_up</span>
                      24% YoY
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                      <span className="material-symbols-outlined">apartment</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Summit Partners</div>
                      <div className="text-xs text-on-surface-variant">Miami, FL</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">David Chen</span>
                    <span className="text-xs text-gray-400">dchen@summit.re</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-surface-container rounded-md text-xs font-bold text-indigo-700">3.2%</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-semibold">62</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-bold">$1,890,000</span>
                    <span className="text-[10px] text-error font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">trending_down</span>
                      -3% YoY
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                      <span className="material-symbols-outlined">apartment</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Meridian Global</div>
                      <div className="text-xs text-on-surface-variant">Dubai, UAE</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Sara Al-Maktoum</span>
                    <span className="text-xs text-gray-400">sara@meridianglobal.ae</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-surface-container rounded-md text-xs font-bold text-indigo-700">5.0%</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-semibold">142</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-bold">$3,560,000</span>
                    <span className="text-[10px] text-secondary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">trending_up</span>
                      8% YoY
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-medium text-on-surface-variant">Showing 4 of 24 partners</span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded border border-gray-200 text-gray-400 hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="p-1.5 rounded border border-gray-200 text-gray-400 hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Regional Distribution (Visual Summary Add-on) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-h3 text-h3">Regional Leads</h3>
            <span className="material-symbols-outlined text-gray-400">more_horiz</span>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>North America</span>
                <span>42%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "42%" }} transition={{ duration: 1 }} className="bg-indigo-600 h-full"></motion.div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Europe</span>
                <span>28%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "28%" }} transition={{ duration: 1, delay: 0.1 }} className="bg-indigo-400 h-full"></motion.div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Middle East</span>
                <span>18%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "18%" }} transition={{ duration: 1, delay: 0.2 }} className="bg-indigo-300 h-full"></motion.div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Asia Pacific</span>
                <span>12%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "12%" }} transition={{ duration: 1, delay: 0.3 }} className="bg-indigo-200 h-full"></motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          </div>
          <div>
            <h4 className="font-h3 text-h3">High Commission Incentive</h4>
            <p className="text-sm text-on-surface-variant mt-1 max-w-xs">Partners exceeding $5M in annual attribution qualify for the Platinum Tier (5.5% commission).</p>
          </div>
          <button className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary-container hover:text-white hover:border-transparent transition-all">View Eligibility</button>
        </div>
      </div>
    </motion.div>
  );
};
