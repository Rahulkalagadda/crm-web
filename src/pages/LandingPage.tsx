import React from 'react';
import { motion } from 'framer-motion';

export const LandingPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <header className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 mb-8"
        >
          <span className="material-symbols-outlined text-sm">auto_awesome</span>
          <span className="text-label-md font-label-md">New: AI-Powered Lead Scoring is here</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-h1 text-h1 text-5xl md:text-7xl mb-6 max-w-4xl mx-auto tracking-tight"
        >
          Close More Deals with <span className="text-primary-container">Smart Real Estate CRM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg"
        >
          Empower your team with precision lead management, automated pipelines, and deep performance analytics designed for high-velocity real estate firms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-button text-button text-lg shadow-xl shadow-indigo-500/30 hover:translate-y-[2px] transition-all">Start Free Trial</button>
          <button className="px-8 py-4 bg-white border border-outline-variant rounded-xl font-button text-button text-lg flex items-center gap-2 hover:bg-gray-50 transition-all">
            <span className="material-symbols-outlined">play_circle</span>
            Watch Demo
          </button>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden aspect-video">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl57M8jFuRP7s7GqmM9R0X2WTEXHKaKGKcHCw87qeDM40S_dsjMk2K1r3Y0ddeJQ3pqiwkAC29n0UZ_-39END7q15NyfrMYd5qyiJt4eEISw2nrDcTYmV-iv509LlS7G14rK73y51ZX6IjkKfzr0E1nSgHvLzkVbpKUSGwMEMUnB198m8vtLbInSsPAmIBj19_ZRMZvzy_SS34zIeQXhjxMTYYSUMWovvJZP9oFyu9es65dyJVtFcLZmEcv2LH8zaUhJl9PcWbkLA"
              alt="Dashboard"
            />
            {/* Floating Glass Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-10 right-10 p-6 glass-card bg-white/80 border border-white/40 rounded-xl shadow-xl w-64 text-left hidden lg:block"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Active Pipeline</span>
                <span className="material-symbols-outlined text-indigo-500">trending_up</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1, delay: 1 }} className="h-full bg-indigo-500"></motion.div>
                </div>
                <p className="text-xs text-gray-500">$4.2M in potential revenue this month</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* Social Proof */}
      <section className="py-12 bg-white/50 border-y border-gray-100 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-body-sm text-gray-400 font-semibold uppercase tracking-widest mb-8">Trusted by elite brokerages worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black text-gray-900">VANGUARD</span>
            <span className="text-2xl font-black text-gray-900">SKYLINE</span>
            <span className="text-2xl font-black text-gray-900">NEXUS RE</span>
            <span className="text-2xl font-black text-gray-900">PRISM</span>
            <span className="text-2xl font-black text-gray-900">ESTATE.CO</span>
          </div>
        </div>
      </section>

      {/* Core Features - Bento Grid */}
      <section className="py-24">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 text-4xl mb-4">Built for the Modern Real Estate Engine</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Streamline every stage of your workflow with tools that scale from solo agents to enterprise firms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Feature 1: Pipeline */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <span className="material-symbols-outlined text-3xl">view_kanban</span>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full">LIVE PREVIEW</span>
              </div>
              <h3 className="font-h3 text-h3 mb-3">Automated Pipelines</h3>
              <p className="font-body-md text-on-surface-variant mb-8 max-w-md">Drag-and-drop lead management with automated triggers. Never let a follow-up slip through the cracks again.</p>
              <div className="mt-auto rounded-xl overflow-hidden border border-gray-100">
                <img className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDs7Wm5WiS9fbSLol2iogLYuAWJvHlDTgPiWj2G-Jxmx5pJhNADGmTm_-mUJ3f_MQp-j9d_CCzYze1rTWeWWwSds0f0UtPffPTq_fOmXNh-JTt3JBkSGB7U5s-6X9B-AvzY4Ci9QY-J-Irnm8yBs6JQDRXmKF7v_JVcntHQptgtbIy2IgEH_ODjqfd-v2cYux_by3_aIUA_MajC7K5pXEvvSEowfAR8BlsNAltMMMRZ-Ep05oFmKEBFJnJ5eD-gSR5OXXaomXAy2k" alt="Pipeline" />
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Team Management */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-indigo-600 p-8 rounded-2xl border border-indigo-700 shadow-indigo-200 shadow-lg text-white transition-all duration-300">
            <div className="p-3 bg-white/10 rounded-xl w-fit mb-6">
              <span className="material-symbols-outlined text-3xl">group</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">Team Management</h3>
            <p className="font-body-md text-indigo-100 mb-6">Assign leads based on territory, performance, or availability. Monitor team KPI in real-time.</p>
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-gray-200 overflow-hidden"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAavN7nuNzEf5z0WKvgF-Ml1ayk7jSvt9Cc9993J8y8SiifPAm-JkCkgm5SVs_8O-j92CZYUXeAAQaVBXFkuw0GvsRgGEmDzxSJvx9KclAJrUal6YA9wypp7JTZp9Xh3hb7PrAg-RmT5Azkl65gtN1__VBAb7GPL5XpQjujMy-F8NY3Z4TRu8xoeHOcJZk5az1oitghGdEYJ62yDeCTAKK-n2d0qbPKokFttJD44X4uWz2FW3uKPZkHce7IlcCXH2KKPPNSiCaPkKU" alt="Avatar" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-gray-200 overflow-hidden"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4T-W1Xva4nQMIrVU1buaWpx1H54c9G24AOKs77tmUSuPTJGr2j4UltwwRpYEXQgzofPOefZGWDJVJTs_UDyr8-5hQ-Yhn0ZTz324ymEl6Xugr4kQxPzVgTNxzIvlNwYDD5i1WPWFWg2yFP1uubpmNSDMPXkjEsiVfy2JKBDDirFay2zw7hbX-PGMZMTdYEH1xnrudnNHSjE_cfCuzgRA9u-LGJATYaOQTLnN4PZyoHnx6vdWk80uD7ZorXKh5KwwqFr5Bn_xMe04" alt="Avatar" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-gray-200 overflow-hidden"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuACGjoYW-Qei1DQvAzUy2fTT-zbpleAT7RnRrIxh0_Pi09ZXDGOJoNFOtIXk9N35RPRdY9Zix-f5E41oHa_DSaSFDy115W6qXOkwlHb03YmEU8rrw5XlIXjJcy9wKQYMu64Db43WwZmvChnU3Chhh4MNNmugxwv915KlHvMDo7nR06SaGevaBQict2C1kVCb_T92Czz_kjYNyRdgku3bCvp2tXvuy936ojyt4RzF2GrBOulHdskxNpfnxkK_DsS0OUzN03wAt8ljXI" alt="Avatar" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-indigo-800 flex items-center justify-center text-xs font-bold">+12</div>
            </div>
          </motion.div>

          {/* Feature 3: CP Tracking */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-6">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">CP Tracking</h3>
            <p className="font-body-md text-on-surface-variant">Real-time property value tracking and geographic performance hotspots to optimize your listing strategy.</p>
          </motion.div>

          {/* Feature 4: Reports */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 bg-surface-container p-8 rounded-2xl border border-gray-200 overflow-hidden relative transition-all duration-300">
            <div className="relative z-10">
              <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl w-fit mb-6">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <h3 className="font-h3 text-h3 mb-3">Deep Analytics</h3>
              <p className="font-body-md text-on-surface-variant max-w-md">Advanced reporting that identifies your most profitable lead sources and highest converting agents.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 translate-x-10 translate-y-10">
              <div className="bg-white rounded-tl-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex gap-2 items-end h-32">
                  <div className="bg-indigo-200 w-full h-[30%] rounded-t"></div>
                  <div className="bg-indigo-400 w-full h-[60%] rounded-t"></div>
                  <div className="bg-indigo-600 w-full h-[90%] rounded-t"></div>
                  <div className="bg-indigo-300 w-full h-[50%] rounded-t"></div>
                  <div className="bg-indigo-500 w-full h-[75%] rounded-t"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="bg-indigo-600 rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="font-h1 text-white text-4xl md:text-6xl mb-8 tracking-tight">Ready to transform your business?</h2>
            <p className="text-indigo-100 font-body-lg text-lg mb-12 max-w-2xl mx-auto">Join over 10,000 top-performing agents using EstateFlow to drive results every day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:scale-105 transition-transform">Get Started Now</button>
              <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
