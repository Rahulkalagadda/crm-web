import React from 'react';
import { motion } from 'framer-motion';

export const EmployeeManagement: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 max-w-7xl mx-auto space-y-8"
    >
      {/* Page Header & Action */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-h1 text-h1 text-on-background">Employee Management</h1>
          <p className="font-body-md text-gray-500 mt-1">Monitor team performance, roles, and administrative capacity.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-button px-6 py-2.5 rounded-xl shadow-lg shadow-indigo-500/20 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">person_add</span>
          <span>Add Employee</span>
        </button>
      </div>

      {/* Bento Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1 md:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm shadow-indigo-900/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <span className="material-symbols-outlined text-8xl">groups</span>
          </div>
          <div className="relative z-10">
            <p className="text-gray-500 text-label-md uppercase tracking-wider mb-2">Total Team Capacity</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-on-background">84%</span>
              <span className="text-secondary text-sm font-semibold flex items-center">
                <span className="material-symbols-outlined text-xs">trending_up</span> 12%
              </span>
            </div>
            <div className="mt-6 w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "84%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-indigo-600 h-full rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]"
              />
            </div>
            <p className="mt-4 text-body-sm text-gray-400">Current active workload across 24 managed employees.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm shadow-indigo-900/5 flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-label-md uppercase tracking-wider mb-1">Average Conversion</p>
            <h3 className="text-2xl font-bold text-on-background">18.4%</h3>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex -space-x-2">
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLhojYxbuR-I57zZ9G0bfN6pwiHEdhtrT71LB36F8rWDg3sbQlfuR0drgEsuSnZKVXhcXanOVOn3mrl7ArMNqOdUw98KFhTnIX7uIVoNoJux3Hz1nW5ZhJvr0ExDoeiokAk7X3U2TzZS2PrBEjzj_kaTHlDSVO2sJH97yPCaD_3kY33P9hJ9aou9zfN2WVaTOOwVeptljZFTboPbI7HKmyJ2-_i7hougjtv9xLQH9oO7coH9ZutQRA9aj28mURP69oR0Tvhpc4ElQ" alt="Team" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT03wxjYAxSClNqpXHHvhG5BW5_zdQ3UgxVg70JnDrHuKxAUdDDX0ISBFRMnS1SB9YPQj4fz464bRhJj5GZwc2siR3oq2jVd1Stn2rDeL1fbIWxOVVVRBkyEUj8yAUqye0XpLlT0iG6VtG3raygzwugNw2N_dzLRcV15YyyAKoqVwX2PAeM3fnxil9jwKmN7y4_ywKBl3nA8_oD43vFMkLFrTfprTXLRV_UJrxtaEJfx-VBMamwInN_GTSpBzW-wWldyQs-3sTivA" alt="Team" />
              <div className="w-6 h-6 rounded-full bg-indigo-50 border-2 border-white flex items-center justify-center text-[8px] font-bold text-indigo-600">+12</div>
            </div>
            <span className="text-body-sm text-gray-500">Above industry avg.</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm shadow-indigo-900/5 flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-label-md uppercase tracking-wider mb-1">Active Leads</p>
            <h3 className="text-2xl font-bold text-on-background">1,248</h3>
          </div>
          <div className="mt-4 h-12 flex items-end gap-1">
            <motion.div initial={{ height: 0 }} animate={{ height: "50%" }} className="w-full bg-indigo-100 rounded-sm" />
            <motion.div initial={{ height: 0 }} animate={{ height: "75%" }} transition={{ delay: 0.1 }} className="w-full bg-indigo-200 rounded-sm" />
            <motion.div initial={{ height: 0 }} animate={{ height: "50%" }} transition={{ delay: 0.2 }} className="w-full bg-indigo-300 rounded-sm" />
            <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ delay: 0.3 }} className="w-full bg-indigo-600 rounded-sm" />
            <motion.div initial={{ height: 0 }} animate={{ height: "66%" }} transition={{ delay: 0.4 }} className="w-full bg-indigo-200 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm shadow-indigo-900/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-h3 text-h3 text-on-background">Team Directory</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100">
                <th className="px-6 py-4 font-semibold text-gray-400 text-label-md tracking-wider">NAME</th>
                <th className="px-6 py-4 font-semibold text-gray-400 text-label-md tracking-wider">ROLE</th>
                <th className="px-6 py-4 font-semibold text-gray-400 text-label-md tracking-wider">LEADS HANDLED</th>
                <th className="px-6 py-4 font-semibold text-gray-400 text-label-md tracking-wider">CONVERSION RATE</th>
                <th className="px-6 py-4 font-semibold text-gray-400 text-label-md tracking-wider">STATUS</th>
                <th className="px-6 py-4 font-semibold text-gray-400 text-label-md tracking-wider text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {/* Row 1 */}
              <tr className="hover:bg-indigo-50/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover grayscale-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFczRQdNCFQkO-l8CSivER222nUcWS9QEFhzvGODxmZ-rdiriTaM1ynq46r31aE-9X3cjwKPugQiy33M1oAQ4ETTao4dUh6291CDIlJarM-mkFaclLHGy-E0K9ItcjF309DM4Xb85t4RFjJCiq9nza2vs3RQ9lKk3lNzzbrniFyzjoA3xPmFUmweMb5sDYCPk0jYMbKygYNddgAL7lJLa9K_SGqIqRI-fHnY18DvP8qLFteb5SYgXZcy4D67fV2IXM4g2uvGAnq24" alt="Employee" />
                    <div>
                      <p className="font-semibold text-on-background">Elena Rodriguez</p>
                      <p className="text-xs text-gray-400">elena.r@estateflow.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full text-xs font-bold border border-indigo-100">Manager</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-on-background">142</span>
                    <span className="text-[10px] text-gray-400">/ 150 cap</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-[24%]"></div>
                    </div>
                    <span className="font-semibold text-secondary">24.2%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-xs font-medium text-gray-600">Active</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:text-indigo-600 transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-indigo-50/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover grayscale-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnnyvEbPtlo4GyDqI6bAtT29WAOXMrtpNqnncCa9UDAv_3MYycVCuBFHc6I33-1-G488P6i2veNVJpYPs6-Vy_1GREHppfEcEnBRPJXc9gpKnAAxdr6gRpYr8MPpTqeR6i3lxm-zLePi1dujIpUQRP0O9zfaQW2x3HCf4fTVicYvShv8eWbd6l4YCNIJrh3-ycukYvBRg_RoFBcCPpoceVwugZ0iu1ttW4qm1BLuse0GXmqSzfR37kvkEdfarlg8-p1ISPCSEtAC8" alt="Employee" />
                    <div>
                      <p className="font-semibold text-on-background">Jameson Vane</p>
                      <p className="text-xs text-gray-400">j.vane@estateflow.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full text-xs font-bold border border-gray-100">Employee</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-on-background">84</span>
                    <span className="text-[10px] text-gray-400">/ 120 cap</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[16%]"></div>
                    </div>
                    <span className="font-semibold text-on-background">16.8%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-xs font-medium text-gray-600">Active</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:text-indigo-600 transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-indigo-50/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover grayscale-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT1fPwxuyRTSpeHFWdsjAEXAFrnGrbGMNz7tNy3rHU2YVcKktQifTeOj2psMcY7K1VS6rPGCqBmv-LScIT6Gmmb6tBb4gUpMUoZxsVm0-m5G31CYJbhI93mcCwTx93pHIh3Rn7MOCp5XApU99_OkSB4EjcUet346E6iQfCzgDklivay_8Fdg6PQ_x5u9vO5hgShiP-DgO12CNJeJhAHCEqPk7Ng48sAbb_Qdpj8k-F4Hqym3ZbmffgBU4fJsX65UwVzU43SHKYGRA" alt="Employee" />
                    <div>
                      <p className="font-semibold text-on-background">Sarah Jenkins</p>
                      <p className="text-xs text-gray-400">s.jenkins@estateflow.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full text-xs font-bold border border-gray-100">Employee</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-on-background">112</span>
                    <span className="text-[10px] text-gray-400">/ 120 cap</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[19%]"></div>
                    </div>
                    <span className="font-semibold text-on-background">19.1%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="text-xs font-medium text-gray-600">On Break</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:text-indigo-600 transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-50 bg-white flex items-center justify-between">
          <p className="text-body-sm text-gray-500">Showing 3 of 24 employees</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">Previous</button>
            <button className="px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-md text-xs font-bold text-indigo-700">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
