import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SideNavBar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/workspace-overview' },
    { name: 'Leads', icon: 'group', path: '/leads-management' },
    { name: 'Pipeline', icon: 'view_kanban', path: '/pipeline' },
    { name: 'Analytics', icon: 'analytics', path: '/reports-analytics' },
    { name: 'Properties', icon: 'domain', path: '/channel-partners' },
    { name: 'Settings', icon: 'settings', path: '/settings' },
  ];

  return (
    <motion.aside
      className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 dark:border-gray-800 bg-white/90 glass-sidebar z-50 flex flex-col p-4 space-y-2 font-['Inter'] text-sm font-semibold tracking-wide"
    >
      <div className="flex items-center gap-3 px-4 py-6">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
        </div>
        <div>
          <h1 className="text-lg font-black text-indigo-600 dark:text-indigo-400 leading-none">EstateFlow</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Elite CRM</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-150 cursor-pointer ${
                isActive
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  {item.icon}
                </span>
                <span className="text-sm">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-button py-2.5 rounded-xl shadow-lg shadow-indigo-200 hover:opacity-90 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">add</span>
          New Lead
        </button>
      </div>

      <div className="mt-auto pt-4 space-y-1">
        <NavLink
          to="/help"
          className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
        >
          <span className="material-symbols-outlined text-base">help</span>
          Help Center
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
        >
          <span className="material-symbols-outlined text-base">logout</span>
          Log Out
        </NavLink>
      </div>
    </motion.aside>
  );
};
