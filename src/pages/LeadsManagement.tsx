import React from 'react';
import { motion } from 'framer-motion';

export const LeadsManagement: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 space-y-6 max-w-7xl mx-auto"
    >
      {/* Page Header & Bulk Actions */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-h2 text-on-surface">Lead Management</h2>
          <p className="text-gray-500 font-body-md">Manage and track your high-intent prospects</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">file_download</span>
            Export
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-xl text-sm font-semibold shadow-md shadow-indigo-500/20"
          >
            <span className="material-symbols-outlined text-sm">person_add</span>
            Bulk Import
          </motion.button>
        </div>
      </div>

      {/* Advanced Filter Bar */}
      <div className="grid grid-cols-5 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">Source</label>
          <select className="w-full border-gray-100 bg-gray-50/50 rounded-xl text-sm focus:ring-indigo-500/20 focus:border-indigo-500">
            <option>All Sources</option>
            <option>Zillow</option>
            <option>Direct Referral</option>
            <option>Facebook Ads</option>
            <option>Website</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">Stage</label>
          <select className="w-full border-gray-100 bg-gray-50/50 rounded-xl text-sm focus:ring-indigo-500/20 focus:border-indigo-500">
            <option>All Stages</option>
            <option>New Lead</option>
            <option>Nurturing</option>
            <option>Qualified</option>
            <option>In Contract</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">Assigned To</label>
          <select className="w-full border-gray-100 bg-gray-50/50 rounded-xl text-sm focus:ring-indigo-500/20 focus:border-indigo-500">
            <option>All Agents</option>
            <option>Sarah Jenkins</option>
            <option>Michael Chen</option>
            <option>Marcus Miller</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">Date Created</label>
          <select className="w-full border-gray-100 bg-gray-50/50 rounded-xl text-sm focus:ring-indigo-500/20 focus:border-indigo-500">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Today</option>
            <option>Custom Range</option>
          </select>
        </div>
        <div className="flex items-end pb-0.5">
          <button className="w-full flex items-center justify-center gap-2 py-2.5 text-indigo-600 bg-indigo-50 rounded-xl text-sm font-semibold hover:bg-indigo-100 transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            More Filters
          </button>
        </div>
      </div>

      {/* Data Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <input className="rounded text-indigo-600 focus:ring-indigo-500/20 cursor-pointer" type="checkbox" />
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Lead Name</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Contact Info</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Source</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Stage</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Assigned To</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Last Activity</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {/* Row 1 */}
            <motion.tr whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }} transition={{ duration: 0.15 }} className="group">
              <td className="px-6 py-4">
                <input className="rounded text-indigo-600 focus:ring-indigo-500/20 cursor-pointer" type="checkbox" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">JS</div>
                  <div>
                    <div className="font-semibold text-gray-900 cursor-pointer group-hover:text-indigo-600 transition-colors">Julianne Smith</div>
                    <div className="text-xs text-gray-400">Buyer • $1.2M Budget</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">(555) 012-3456</div>
                <div className="text-[11px] text-gray-400">julianne.s@example.com</div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider">Zillow</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[11px] font-bold">QUALIFIED</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3WYun0K8eTIuSqprZA6C1ipIPe6Ul4bEgp-pcy1_ly8UlZFwUWS7LQOnH_W9ofu9KGOOjvUj_cpvsu2vQjUpT87TlNROc6tJn_foiEIgBIDCTuMSjLUc-6clLlh23GhjRbdPM-ojwoXYWqZmxiQCTNjka3aQw6PTM51feINJi_vnCR317J2TUPqkmzmsqlWM2hRq5HtuexZ8K_M1PmAxyliFOGOuShc0zEBxgP0vqwxD1Wv4G1sPvC2NmEE5qkJssaxdmUvvIjdc" alt="Sarah J." />
                  <span className="text-sm text-gray-600">Sarah J.</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">2 hours ago</div>
                <div className="text-[11px] text-gray-400">Viewed Listing #442</div>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="p-1.5 text-gray-300 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </motion.tr>

            {/* Row 2 */}
            <motion.tr whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }} transition={{ duration: 0.15 }} className="group">
              <td className="px-6 py-4">
                <input className="rounded text-indigo-600 focus:ring-indigo-500/20 cursor-pointer" type="checkbox" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">RM</div>
                  <div>
                    <div className="font-semibold text-gray-900 cursor-pointer group-hover:text-indigo-600 transition-colors">Robert Miller</div>
                    <div className="text-xs text-gray-400">Investor • Portfolio Mgmt</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">(555) 987-6543</div>
                <div className="text-[11px] text-gray-400">robert.m@corp.com</div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider">Referral</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">NURTURING</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVAiLaKzXG9ZvRoKyegEagwh_2BIgoAC08fkFSBPWILc2r85CNH_2Y0mTgUO1syLgz9yCkz21OQGU4tI4GkMz04lK4phGHi_HgI6PETgtXqQpfNcgJ2IAfEF_c7ihFTX52IwFtZsUIBWOm5u9mkATm5HjiDUIN9iksOY_BuWBcz87IpAhrQC0hSsRohbxfm_Dj1C1nTX-bj7XHiMuLlT5OleV7eX-eLf1KLglxpojr2sZpBNV_2y2yd43LsJsTvGDHGTgeW7zyD4Q" alt="Marcus M." />
                  <span className="text-sm text-gray-600">Marcus M.</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">Yesterday</div>
                <div className="text-[11px] text-gray-400">Sent Market Report</div>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="p-1.5 text-gray-300 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </motion.tr>

            {/* Row 3 */}
            <motion.tr whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }} transition={{ duration: 0.15 }} className="group">
              <td className="px-6 py-4">
                <input className="rounded text-indigo-600 focus:ring-indigo-500/20 cursor-pointer" type="checkbox" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm">ET</div>
                  <div>
                    <div className="font-semibold text-gray-900 cursor-pointer group-hover:text-indigo-600 transition-colors">Emily Thompson</div>
                    <div className="text-xs text-gray-400">Seller • Luxury Condo</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">(555) 234-5678</div>
                <div className="text-[11px] text-gray-400">emily.t@web.me</div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider">Website</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-full text-[11px] font-bold">NEW LEAD</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-gray-400">person</span>
                  </div>
                  <span className="text-sm text-gray-400 italic">Unassigned</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">5 mins ago</div>
                <div className="text-[11px] text-indigo-600 font-bold">New Form Entry</div>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="p-1.5 text-gray-300 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </motion.tr>

            {/* Row 4 */}
            <motion.tr whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }} transition={{ duration: 0.15 }} className="group">
              <td className="px-6 py-4">
                <input className="rounded text-indigo-600 focus:ring-indigo-500/20 cursor-pointer" type="checkbox" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">DK</div>
                  <div>
                    <div className="font-semibold text-gray-900 cursor-pointer group-hover:text-indigo-600 transition-colors">David Kim</div>
                    <div className="text-xs text-gray-400">Buyer • Commercial Office</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">(555) 345-6789</div>
                <div className="text-[11px] text-gray-400">d.kim@invest.com</div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider">Facebook</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">IN CONTRACT</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1neY1BPq6InUgkSRR4O3qF9SwA1YrzFXNKwfQlDkiaBtRMG3-koTXIkMUCQSLbUQSljKzAjtMaJzS4DVE5-lEvOUuJzHciqD7edVu4pN4dmWZMMD5E7xHvTOu5DQ5_vsRK5wEvi9yzFySNt-B6ok157LE5AxSnNJ4YntBxN5bZBQ4KuaKventlvmoJLe3dXJf2OGb1PUShPRd5Quk222ZNWUK344Gu7i2ODhRhuW4kZCrMtsb7rik5c9icE5VwkktJ4pXs8s-l80" alt="Michael C." />
                  <span className="text-sm text-gray-600">Michael C.</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">3 days ago</div>
                <div className="text-[11px] text-gray-400">DocuSign Completed</div>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="p-1.5 text-gray-300 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </motion.tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing <span className="font-bold text-gray-900">1-4</span> of <span className="font-bold text-gray-900">128</span> leads</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-gray-400 hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-sm leading-none">chevron_left</span>
            </button>
            <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm font-bold">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-white transition-colors text-sm">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-white transition-colors text-sm">3</button>
            <span className="px-2 text-gray-400 self-center">...</span>
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-white transition-colors text-sm">32</button>
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-sm leading-none">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
