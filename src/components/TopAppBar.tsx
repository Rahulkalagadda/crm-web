import React from 'react';

export const TopAppBar: React.FC = () => {
  return (
    <header className="sticky top-0 w-full z-40 bg-white/70 backdrop-blur-xl dark:bg-slate-900/70 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center h-14 px-8">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-indigo-500/20 rounded-lg group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-indigo-500 transition-colors">search</span>
          <input
            className="w-full bg-gray-50 dark:bg-gray-800/50 border-none rounded-lg py-1.5 pl-10 pr-4 text-sm focus:ring-0 focus:outline-none placeholder:text-gray-400"
            placeholder="Search properties, leads, or agents..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
          <button className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
            <span className="material-symbols-outlined">apps</span>
          </button>
        </div>

        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-white leading-none">Alexander Wright</p>
            <p className="text-xs text-gray-400">Principal Owner</p>
          </div>
          <img
            alt="User Profile"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-50 dark:ring-indigo-900"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAjDXpM01BaK49tx0VqA0WbGyf5NtK8nUyKdcVoD7pbTgZsM01Vwt73zeSY0nmLxVB0MAYf4AzDutYa4O3u9K5RHeli28j_BIEweTMjtWWt3VL7dyWiaHr_htmRUZCn8Z84ek2P212tZ41HU56ZknIo4SCAfz9LtxIE-EBkxUYBduuYFOFMb1dOb2pN2Ki1DVZMAg7ztVpESMWFJUwNAZrro5sJbe60oq_JGSRBX4pnlqzAb_XZa--MmXOTuAq1SLPFmjcsBjvfHM"
          />
        </div>
      </div>
    </header>
  );
};
