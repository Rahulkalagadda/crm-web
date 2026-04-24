import React from 'react';
import { motion } from 'framer-motion';

export const Pipeline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 flex-1 overflow-x-auto flex flex-col h-[calc(100vh-3.5rem)]"
    >
      <div className="flex items-center justify-between mb-8 shrink-0">
        <div>
          <h1 className="font-h1 text-h1 text-on-background">Sales Pipeline</h1>
          <p className="text-body-md text-on-surface-variant">Manage your high-value lead lifecycle and deal velocity.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filters
          </button>
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Q4 2024
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-6 flex-1 pb-8 items-start overflow-x-auto overflow-y-hidden">

        {/* Column: New */}
        <div className="w-[300px] shrink-0 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span className="font-semibold text-sm">New</span>
              <span className="bg-indigo-50 text-indigo-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">2</span>
            </div>
            <p className="text-xs font-bold text-gray-400">$1.2M</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileDrag={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm shadow-indigo-500/5 group hover:border-indigo-300 transition-colors cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-sm">Jonathan Meyers</h4>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-500 cursor-move">drag_indicator</span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-xs text-gray-500">Penthouse at Sky Tower</p>
              <p className="text-sm font-bold text-indigo-600">$450,000</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfoVCnPQ1c-8gTa6pZpUn0dmOYqSuyJnla42EJKQZ80m9AZtW9tLMWdgbRcOlPbzGH1Yrq7jyVX7Unn1LR2CypB4PUlEfwrNEQ1Ss4DdAfFMOk_4U2MJLw6Dv0HeSja8H68LUuBDRANlpYTCfmAQq8NNTrq_HMPXGVMgD-oODSbadXQPxDXTjwwvJSTAzq5k9C6f5GHaVhQy4TnFC-3vAYCH8lRkbFF4BWHijCajQwh7EiLHDTlR5zYQBfbCkDVp7VmQQHUy77VgQ" alt="Agent" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Sarah K.</span>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600">
                  <span className="material-symbols-outlined text-sm">call</span>
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileDrag={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm shadow-indigo-500/5 group hover:border-indigo-300 transition-colors cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-sm">Elena Rodriguez</h4>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-500 cursor-move">drag_indicator</span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-xs text-gray-500">Modern Villa Estate</p>
              <p className="text-sm font-bold text-indigo-600">$750,000</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhjsQABfwkGKYajeQipZHHGOj8m5cKdwrllaof9RBkVtiCOwclhOdiOgmxZo_hDg8AhER3fvUBDHUAfT5dkVEFKtO0LAZo3V4Ci1CpkT76IU3sA_dPejRs7kBPYrFkcoRvNBLLZsSU-A11Q5nvWCfExZ5_SH94gdEMm9D9I07lzzCRNz8eEiZXC49QYQmaDYTg9z3KaNSDkm6W_xiPnxERXVhOxDaMRiYgSltNwVCwZ9CAmPkzWBBcxXhWv9rGwqTo86-qBsztwbA" alt="Agent" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Marcus V.</span>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600">
                  <span className="material-symbols-outlined text-sm">call</span>
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </button>
              </div>
            </div>
          </motion.div>

          <button className="w-full py-3 border border-dashed border-gray-200 rounded-xl text-xs font-bold text-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-xs">add</span> Add Card
          </button>
        </div>

        {/* Column: Contacted */}
        <div className="w-[300px] shrink-0 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              <span className="font-semibold text-sm">Contacted</span>
              <span className="bg-orange-50 text-orange-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">1</span>
            </div>
            <p className="text-xs font-bold text-gray-400">$2.8M</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileDrag={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm shadow-indigo-500/5 group hover:border-indigo-300 transition-colors cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-sm">Arthur Winston</h4>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-500 cursor-move">drag_indicator</span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-xs text-gray-500">Waterfront Mansion</p>
              <p className="text-sm font-bold text-indigo-600">$2,800,000</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNBCE1hjsYaRuzjpyX7FmTjgD0bazQvxyCDSx_1rMDOxHk3fndpuohZSlahSSJUm_muIS3j1TTvrHrAfaqoPOnkvU3XjjEzaQjJfnRmNhaNbrTGqIL2D4b11y0CQXwkiknN5-HMqwdku5OJ4FgxswVhVnfYOoqSOv41X6uFYxKgo4sR-FqEuMihHyfRCcrxPVsk26YysqrChQQHbld1LOsfgHo3S86aAdgLf-B03_bGNBg7ioIgN5Q1S86WSM3btULhhe3TkgimDA" alt="Agent" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Alex S.</span>
              </div>
              <div className="flex gap-1">
                <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded font-bold self-center">Follow up</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column: Site Visit */}
        <div className="w-[300px] shrink-0 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-semibold text-sm">Site Visit</span>
              <span className="bg-emerald-50 text-emerald-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">1</span>
            </div>
            <p className="text-xs font-bold text-gray-400">$4.2M</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileDrag={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm shadow-indigo-500/5 group hover:border-indigo-300 transition-colors cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-sm">Global Tech Inc.</h4>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-500 cursor-move">drag_indicator</span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-xs text-gray-500">Silicon Park HQ</p>
              <p className="text-sm font-bold text-indigo-600">$4,250,000</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoxswz0hxCtrV4Pf20dJzTRVcqGOAiT8fnLRebvBVfgURhb6z2t_PPWubfeC_ZI3Zz51BmBLOdb-kAwMYtzZlQAjKkYt--CqI8mnjfNs7mH_04_Ray18-emmtL3guSNgCZKtQUVLvBXXwzAjeqijtFhNX1L0NqEhoKAJew7JDwM8QFWYY-1bK07X46X8JH0bEKuZD9Bc46tHWBltnSRXCSIaaFX3G4vSdi24fIu2lxkLO4FH85RFP9M6SssmC0nm_8JEv2nl3xyEU" alt="Agent" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Sarah K.</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="material-symbols-outlined text-emerald-500 text-xs">check_circle</span>
                <span className="text-[10px] font-bold text-emerald-600">Scheduled</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column: Negotiation */}
        <div className="w-[300px] shrink-0 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span className="font-semibold text-sm">Negotiation</span>
              <span className="bg-red-50 text-red-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">1</span>
            </div>
            <p className="text-xs font-bold text-gray-400">$8.4M</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileDrag={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm shadow-indigo-500/5 group hover:border-indigo-300 transition-colors cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-sm">The Sterling Group</h4>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-500 cursor-move">drag_indicator</span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-xs text-gray-500">Retail Portfolio A</p>
              <p className="text-sm font-bold text-indigo-600">$8,400,000</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV3YJ6Nbis82Dy3yYYwvqCsBgn3GukzVS_Ov9OONqE-qG-W2gLgx4HSc3G-VIvQB9JJ4p2Ui5mfTPTRZhDGQIdiBW0uGVxkEsx5sbnbsJ829EtETJ2EesxuqAOZwWbT0XrOqvQ1YM3T-VwGwSW7qkgttMbB22X3iYjn2lO6BuXMmuq1Uzj5TclF25XySB1kmEekSWClxxvsTy6XuI0RzQ51taczZ5K7GxqzQW8vyZI7DgEUX6Uim4eJ4kZWzTIF-1AQxTa6r2H-ZM" alt="Agent" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Alex S.</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-red-600">Critical</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column: Closed */}
        <div className="w-[300px] shrink-0 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              <span className="font-semibold text-sm">Closed</span>
              <span className="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">12</span>
            </div>
            <p className="text-xs font-bold text-gray-400">$24.5M</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm shadow-indigo-500/5 opacity-70 group hover:opacity-100 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-sm">Linda Chen</h4>
              <span className="material-symbols-outlined text-gray-300">verified</span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-xs text-gray-500">Luxury Loft 402</p>
              <p className="text-sm font-bold text-gray-400 line-through">$890,000</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="w-6 h-6 rounded-full border border-white grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvUTYWso30f8KyRuwjHfzDy3gkSfQxxLOOf3ub-fNRdGLSnd48XYcqLQFuk7j2F7SlKA_3-QuUWimETaRtJ97TnHKzF-HhSWjUKJZDWeWTaaTHVVRkPfrPA4-KPsggczpaXP9jBUjX6bZK3OmOC6WvPCjj0vRHB-7QIcDq8oDZM_tt3WWATJR0l1EI8Ae-bL40IkIqc19YElGDiHtVrtd9rqla-uoUWNSJecAU4f3Nl988_MnPFSi-SKgtKb5SjZYJmweF-gsuBpY" alt="Agent" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Marcus V.</span>
              </div>
              <span className="text-[10px] font-bold text-gray-400">Nov 12</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* FAB for quick lead entry */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary-container text-white rounded-full shadow-lg shadow-indigo-500/40 flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-2xl">person_add</span>
      </button>
    </motion.div>
  );
};
