import React from 'react';
import { motion } from 'framer-motion';

export const LeadDetails: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 max-w-7xl mx-auto w-full"
    >
      {/* Lead Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img className="w-24 h-24 rounded-2xl object-cover shadow-lg border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_fh9Z2xBIEFuFzX1Vav62_5ztq4L5BuLPMSNJVTr0ymF7U6hGDpomurfzaLbgyxHSbssHXQ-0KjZQ4rIaBrLJFQVixmiLRTopkR4zAu3cMbJ77B4ksjSKi8slbgYP7lu6iEoV12gu0LQEG26k1h4LHG5KDlAGsZur9tSmKocqU7TiC9krRGxQtNc86904nlY4HqV5H3jt5N2rhHJoBEghv83PRzQ39fAGHqlB2nETXSTVtBfIvJ-SQOQLe25GDddtjHoJ7i3037Q" alt="Julianne Smith" />
            <div className="absolute -bottom-2 -right-2 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-[10px] font-bold border border-emerald-200 uppercase tracking-tighter">Verified</div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-h1 text-on-surface">Julianne Smith</h2>
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Buyer</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant font-body-md">
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-indigo-500">payments</span> Budget: $1.2M</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-indigo-500">location_on</span> Los Angeles, CA</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg font-button text-on-surface flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-sm">history_edu</span> Log Activity
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg font-button text-on-surface flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-sm">person_add</span> Assign
          </button>
          <button className="px-6 py-2.5 bg-primary-container text-on-primary rounded-lg font-button flex items-center gap-2 shadow-md shadow-indigo-100 hover:opacity-90 active:scale-95 transition-all">
            Change Stage <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Activity/Details Column */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter">
          {/* Tabs */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm shadow-indigo-900/5">
            <div className="flex border-b border-gray-100 px-6">
              <button className="px-4 py-4 text-indigo-600 border-b-2 border-indigo-600 font-semibold text-sm">Overview</button>
              <button className="px-4 py-4 text-gray-400 hover:text-indigo-600 transition-colors font-semibold text-sm">Activities</button>
              <button className="px-4 py-4 text-gray-400 hover:text-indigo-600 transition-colors font-semibold text-sm flex items-center gap-2">Tasks <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded-full">4</span></button>
              <button className="px-4 py-4 text-gray-400 hover:text-indigo-600 transition-colors font-semibold text-sm">Documents</button>
            </div>
            {/* Tab Content: Overview */}
            <div className="p-8">
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Lead Source</p>
                  <p className="text-sm font-medium text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-400 text-lg">language</span> Zillow Premier Agent
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Interested Property</p>
                  <p className="text-sm font-medium text-indigo-600 hover:underline cursor-pointer">742 Evergreen Terrace, Beverly Hills</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Pre-Approval Status</p>
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded border border-emerald-100">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Verified $1.5M
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Expected Close Date</p>
                  <p className="text-sm font-medium text-on-surface">Oct 12, 2024</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-h3 text-on-surface mb-4">Internal Notes</h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-dashed border-gray-300">
                  <p className="text-sm text-on-surface-variant italic leading-relaxed">
                    "Julianne is looking for a home with at least 4 bedrooms and a dedicated home office. She prioritizes neighborhoods with high-rated school districts. She is currently renting in Santa Monica and is ready to move as soon as the right property hits the market."
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                    <img className="w-5 h-5 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy8SDxTb7pYYC9tV2nD6XLx7Ds2DVujAoTTbUgjTTTY6wedbD8NfNOhQ1FeRovdY0eYvs8Z5nlensRtEtoWppW53ARAgqWzc3PxBRL9aIbnjhm_DU2DoxEBoMzmjKj9oxj9edypEujqCD_P_kYiKxj9WLwLT_kCtLayHDkJZUNjarQNkHJNIsdasflENTa_VKZF7G8exw313wkZLRCvTV3_-57rr1NqBgXsPzNmpo2bkTr9Cp51m0VKCdYSIPhAD9dLXxqYrMKGJs" alt="Mark Spencer" />
                    <span>Added by Mark Spencer • 2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline/Activity Preview */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm shadow-indigo-900/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-h3 text-on-surface">Recent Activity</h3>
              <button className="text-indigo-600 text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100"></div>

              {/* Timeline Item */}
              <div className="relative flex gap-4 pl-10">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white ring-4 ring-indigo-50"></div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Outbound Call Completed</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Discussed floor plans for the Beverly Hills property. Lead is very interested in the open-concept kitchen.</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Today • 10:45 AM</p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="relative flex gap-4 pl-10">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white"></div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Email Sent: New Listing Alert</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Yesterday • 02:15 PM</p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="relative flex gap-4 pl-10">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-4 ring-emerald-50"></div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Stage Changed: Discovery → Qualified</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">3 days ago • 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel Column */}
        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          {/* Contact Quick Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm shadow-indigo-900/5">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 leading-none">Email Address</p>
                  <p className="text-sm font-medium mt-1">j.smith@realestatepro.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 leading-none">Phone Number</p>
                  <p className="text-sm font-medium mt-1">+1 (310) 555-0198</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <button className="py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors">Copy Info</button>
              <button className="py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors">Add Label</button>
            </div>
          </div>

          {/* Lead Score Bento */}
          <div className="bg-indigo-600 rounded-xl p-6 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Lead Engagement Score</h4>
                <span className="material-symbols-outlined text-indigo-200" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black">94</span>
                <span className="text-indigo-200 text-sm font-medium">/ 100</span>
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed">
                Highly active. Engaged with 12 listings and opened 80% of communication in the last 7 days.
              </p>
              <div className="mt-4 w-full h-1.5 bg-indigo-800/50 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ duration: 0.8 }} className="h-full bg-secondary-fixed"></motion.div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm shadow-indigo-900/5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Upcoming Tasks</h4>
              <button className="p-1 rounded-md hover:bg-gray-100"><span className="material-symbols-outlined text-gray-400 text-sm">add</span></button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                <div className="mt-1">
                  <span className="material-symbols-outlined text-orange-600 text-lg">schedule</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-orange-900">Follow up on pre-approval</p>
                  <p className="text-[11px] text-orange-700 mt-0.5">Due: Tomorrow, 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-75">
                <div className="mt-1">
                  <span className="material-symbols-outlined text-gray-400 text-lg">radio_button_unchecked</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 line-through">Send property brochure</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
