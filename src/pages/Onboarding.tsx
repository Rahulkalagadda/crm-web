import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-stretch bg-background w-full">
      {/* Left Side: Visual/Branding */}
      <div className="hidden lg:flex w-5/12 bg-primary-container relative flex-col justify-between p-xl overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVp44HmRgzYerx138nVFW_MH3hkeTIiFknumah7C6TfBrSwMV_cs1WIx4AqwYCpLSL4Ss6hB19OBDegiR5ZOkvswW8zrX6xNZg7GMxcFkUYj4_RGwEdeXiihsAn8ZR3axs_gI6WWc2wdXA6EHZlUb7kuTBJG3YVMzMf3rolpFbNFy7Q8wUz8hfhoLZyViTUe1SizPcwVdcb1H0D-ZJir9EgpSrnwzbNisvlqq49g7iOFdEZbSqvtp_-C5JnlNwxQCdAuCifY43TO0"
            alt="Architecture"
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-sm mb-2xl">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
            </div>
            <span className="text-xl font-h1 font-extrabold text-white tracking-tight">EstateFlow</span>
          </div>
          <h1 className="text-h1 font-h1 text-white mb-lg max-w-md">Precision. Performance. Prestige.</h1>
          <p className="text-body-lg text-on-primary-container max-w-sm opacity-90">
            Join the elite circle of real estate professionals. Let's configure your workspace for high-velocity growth.
          </p>
        </div>

        <div className="relative z-10 mt-auto">
          <div className="p-lg bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <p className="text-body-sm text-white/80 mb-sm">CURRENT PHASE</p>
            <div className="space-y-md">
              <div className="flex items-center gap-md">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#006c49]"></span>
                <span className="text-label-md text-white">System Architecture Setup</span>
              </div>
              <div className="flex items-center gap-md opacity-40">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="text-label-md text-white">Data Migration</span>
              </div>
              <div className="flex items-center gap-md opacity-40">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="text-label-md text-white">Global Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Stepper Content */}
      <div className="flex-1 flex flex-col bg-surface min-h-screen">
        {/* Progress Header */}
        <div className="h-2 w-full bg-surface-container flex">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1 }}
            className="h-full bg-primary-container"
          ></motion.div>
        </div>

        <div className="max-w-2xl mx-auto w-full px-xl py-2xl flex-1 flex flex-col">
          {/* Stepper Navigation */}
          <nav className="flex justify-between items-center mb-2xl">
            <div className="flex items-center gap-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-xs font-bold">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
              <span className="text-label-md text-on-surface-variant hidden md:block">Company</span>
            </div>
            <div className="h-px bg-outline-variant flex-1 mx-md"></div>

            <div className="flex items-center gap-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-xs font-bold">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
              <span className="text-label-md text-on-surface-variant hidden md:block">Profile</span>
            </div>
            <div className="h-px bg-outline-variant flex-1 mx-md"></div>

            <div className="flex items-center gap-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-white text-xs font-bold ring-4 ring-primary-container/20">
                3
              </div>
              <span className="text-label-md text-primary font-bold hidden md:block">Pipeline</span>
            </div>
            <div className="h-px bg-outline-variant flex-1 mx-md"></div>

            <div className="flex items-center gap-sm opacity-50">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-bold">
                4
              </div>
              <span className="text-label-md text-on-surface-variant hidden md:block">Team</span>
            </div>
          </nav>

          {/* Current Step Content: Step 3 (Setup Pipeline Stages) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-xl"
          >
            <header className="space-y-xs">
              <h2 className="text-h2 font-h2 text-on-surface">Setup Pipeline Stages</h2>
              <p className="text-body-md text-on-surface-variant">Define the workflow for your property deals. Drag to reorder or click to edit names.</p>
            </header>

            {/* Interactive Pipeline Editor */}
            <div className="space-y-md">
              {[
                { name: "New Lead", label: "Initial", desc: "First point of contact with potential client" },
                { name: "Property Qualification", label: null, desc: "Reviewing property details and budget alignment" },
                { name: "Negotiation & Contract", label: null, desc: "Back-and-forth offers and legal review" },
                { name: "Closing", label: "Final", desc: "Finalizing sale and handing over keys" },
              ].map((stage, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01 }}
                  className="group bg-surface-container-lowest border border-outline-variant p-md rounded-xl shadow-sm flex items-center gap-md hover:border-primary-container transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-outline cursor-grab">drag_indicator</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <input
                        className="bg-transparent border-none p-0 focus:ring-0 font-button text-on-surface w-full"
                        type="text"
                        defaultValue={stage.name}
                      />
                      {stage.label === "Initial" && (
                        <span className="bg-secondary-container/20 text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{stage.label}</span>
                      )}
                      {stage.label === "Final" && (
                        <span className="bg-on-primary-fixed/10 text-on-primary-fixed text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{stage.label}</span>
                      )}
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{stage.desc}</p>
                  </div>
                  {!stage.label && (
                    <button className="opacity-0 group-hover:opacity-100 text-error p-1 transition-opacity">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Add Stage Button */}
              <button className="w-full py-md border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant hover:border-primary-container hover:text-primary transition-all flex items-center justify-center gap-sm group">
                <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
                <span className="text-button">Add New Stage</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-xl border-t border-outline-variant">
              <button className="px-lg py-md text-on-surface-variant hover:text-on-surface font-button transition-colors flex items-center gap-sm">
                <span className="material-symbols-outlined">arrow_back</span>
                Back
              </button>
              <div className="flex gap-md">
                <button onClick={() => navigate('/workspace-overview')} className="px-lg py-md text-on-surface-variant hover:text-on-surface font-button transition-colors">
                  Skip for now
                </button>
                <button onClick={() => navigate('/workspace-overview')} className="bg-primary-container text-white px-xl py-md rounded-lg font-button shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Continue to Team Setup
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Section */}
        <footer className="bg-surface-container-low py-lg px-xl mt-auto">
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
            <div className="flex items-center gap-md">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73fGiQFD1Mp8HHBtbHq18eDA7to89apDeTPhgiDCv0tNjZmWxDrzzNg_PEdzkSbynloA83OP4fjf5ToTYuivaP7ayZOfIjr0HsnU-M_sIOg6SG4Ij6nFSvMF3sINqRT9PcgEySBtV_umitXe_wPQEBWkDZvYYiNrlucEFqar4zPEild8rEqBkVGD60oAecrR3jSUjw8A5k3PtBDiGNSN4Y6HWpjT5X43BA-pVm5koWSd1253MR01pWGhve-x-87z-4JwXWtKd2_c"
                alt="Sarah"
              />
              <div>
                <p className="text-body-sm font-semibold text-on-surface">Need help setting up?</p>
                <p className="text-body-sm text-on-surface-variant">Chat with Sarah, your EstateFlow guide.</p>
              </div>
            </div>
            <div className="flex gap-xl">
              <a className="text-body-sm text-on-surface-variant hover:text-primary underline" href="#">Privacy Policy</a>
              <a className="text-body-sm text-on-surface-variant hover:text-primary underline" href="#">Documentation</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
