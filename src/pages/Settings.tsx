import React from 'react';
import { motion } from 'framer-motion';

export const Settings: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 max-w-7xl mx-auto w-full"
    >
      {/* Settings Header & Navigation */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-h1 text-h1 text-on-surface">Settings</h2>
            <p className="text-body-md text-on-surface-variant mt-1">Configure your workspace, pipelines, and team permissions.</p>
          </div>
          <button className="bg-primary text-white font-button text-button px-6 py-2.5 rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all">
            Save Changes
          </button>
        </div>
        <div className="flex gap-8 border-b border-gray-200">
          <button className="pb-4 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">Company</button>
          <button className="pb-4 text-sm font-bold text-indigo-600 border-b-2 border-indigo-600">Pipeline Setup</button>
          <button className="pb-4 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">Roles &amp; Permissions</button>
          <button className="pb-4 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">Billing</button>
        </div>
      </div>

      {/* Pipeline Setup Interface */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Pipeline List & Configuration */}
        <div className="col-span-8 space-y-md">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-h3 text-h3">Sales Pipeline Stages</h3>
            <button className="flex items-center gap-2 text-primary font-button text-sm hover:underline">
              <span className="material-symbols-outlined text-sm">add</span>
              Add New Stage
            </button>
          </div>

          {/* Drag & Drop Stages */}
          <div className="space-y-3">
            {/* Stage Item */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              transition={{ duration: 0.15 }}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-indigo-300 transition-all cursor-move group"
            >
              <span className="material-symbols-outlined text-gray-300 group-hover:text-indigo-400">drag_indicator</span>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-on-surface">Initial Contact</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Active</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">First touch with potential lead</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Automation</p>
                    <p className="text-xs font-semibold text-indigo-600">2 Rules Active</p>
                  </div>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-50 text-gray-400">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Stage Item */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              transition={{ duration: 0.15 }}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-indigo-300 transition-all cursor-move group"
            >
              <span className="material-symbols-outlined text-gray-300 group-hover:text-indigo-400">drag_indicator</span>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-on-surface">Property Viewing</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Active</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">Scheduled tour of inventory</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Automation</p>
                    <p className="text-xs font-semibold text-indigo-600">1 Rule Active</p>
                  </div>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-50 text-gray-400">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Stage Item (Active/Focused) */}
            <div className="bg-indigo-50 border-2 border-indigo-500 rounded-xl p-4 flex items-center gap-4 shadow-lg shadow-indigo-500/10 cursor-move">
              <span className="material-symbols-outlined text-indigo-500">drag_indicator</span>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-indigo-900">Offer Submitted</span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">Focused</span>
                  </div>
                  <p className="text-body-sm text-indigo-700/70">Legal offer paperwork initiated</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[10px] text-indigo-400 uppercase font-bold">Automation</p>
                    <p className="text-xs font-semibold text-indigo-600">4 Rules Active</p>
                  </div>
                  <button className="w-8 h-8 bg-indigo-600 text-white rounded-lg shadow-sm">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stage Item */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              transition={{ duration: 0.15 }}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-indigo-300 transition-all cursor-move group"
            >
              <span className="material-symbols-outlined text-gray-300 group-hover:text-indigo-400">drag_indicator</span>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-on-surface">Closing Underway</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Active</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">Escrow and final documentation</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Automation</p>
                    <p className="text-xs font-semibold text-gray-400">No Rules</p>
                  </div>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-50 text-gray-400">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Empty State Slot */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border-2 border-dashed border-gray-200 rounded-xl py-8 flex flex-col items-center justify-center text-gray-400 hover:border-indigo-200 hover:text-indigo-400 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl mb-2">add_circle</span>
              <span className="font-semibold text-sm">Add New Stage</span>
            </motion.div>
          </div>
        </div>

        {/* Automation Settings Sidebar (Glass Pane) */}
        <div className="col-span-4">
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-xl shadow-indigo-900/5">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-indigo-900">Automation: <span className="text-on-surface">Offer Submitted</span></h4>
              <span className="material-symbols-outlined text-indigo-500 cursor-pointer">info</span>
            </div>
            <div className="space-y-6">
              {/* Trigger Logic */}
              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 block mb-2 tracking-widest">Entry Trigger</label>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-indigo-500">bolt</span>
                  <span className="text-xs font-medium">When lead moves to this stage</span>
                </div>
              </div>

              {/* Rules List */}
              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 block mb-3 tracking-widest">Active Rules</label>
                <div className="space-y-3">
                  {/* Rule Card */}
                  <div className="p-3 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-indigo-600 text-lg">mail</span>
                        <span className="text-xs font-bold">Email Prospect</span>
                      </div>
                      <input defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" type="checkbox" />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2">Template: "Offer Confirmation - Luxury Tier"</p>
                  </div>

                  {/* Rule Card */}
                  <div className="p-3 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-500 text-lg">notifications_active</span>
                        <span className="text-xs font-bold">Notify Attorney</span>
                      </div>
                      <input defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" type="checkbox" />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2">Trigger internal Slack alert for legal team</p>
                  </div>

                  {/* Rule Card */}
                  <div className="p-3 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-500 text-lg">task_alt</span>
                        <span className="text-xs font-bold">Create Task</span>
                      </div>
                      <input className="rounded text-indigo-600 focus:ring-indigo-500" type="checkbox" />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2">Follow up on signature within 24h</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-xs border border-indigo-100 hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">add</span>
                Add Automation Rule
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
