import { motion } from "motion/react";
import { Send, MessageSquare, ShieldAlert, Sparkles, HelpCircle, Check, Download } from "lucide-react";

export default function DownloadSection() {
  return (
    <div className="space-y-12 py-6" id="download">
      {/* Visual Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase font-mono">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>Vcam pro Official Release Channels</span>
        </div>
        <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-950">
          Ready to experience true <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">camera bypass</span>?
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Vcam pro is distributed exclusively through our official verified community platforms. Choose your preferred channel below to grab the latest APK package, setup guides, and virtual cloner environments instantly.
        </p>
      </div>

      {/* Large Call to Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Telegram Box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl p-8 bg-sky-500/10 border-2 border-sky-400/40 relative overflow-hidden flex flex-col justify-between group shadow-lg"
        >
          {/* Decorative giant icon */}
          <Send className="absolute right-0 bottom-0 w-44 h-44 text-sky-500/5 translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-500" />

          <div className="relative z-10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
              <Send className="w-7 h-7 fill-white" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-600 font-mono">Immediate Access</span>
              <h4 className="font-display font-extrabold text-2xl text-slate-950 mt-1">Get Vcam on Telegram</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Join our Telegram broadcast channel to get instant APK releases, fast mirror links, direct support files, and real-time updates.
              </p>
            </div>

            <ul className="space-y-2 pt-2 text-xs text-slate-600 font-semibold">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-500" />
                <span>12,400+ Active subscribers</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-500" />
                <span>Instant APK downloads directly on chat</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-500" />
                <span>Beta testing files and non-root virtual modules</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 relative z-10">
            <a
              href="https://t.me/kycVcam/6"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer group"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Download Vcam App via Telegram</span>
              <Download className="w-4 h-4 animate-bounce shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* Discord Box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl p-8 bg-indigo-500/10 border-2 border-indigo-400/40 relative overflow-hidden flex flex-col justify-between group shadow-lg"
        >
          {/* Decorative giant icon */}
          <MessageSquare className="absolute right-0 bottom-0 w-44 h-44 text-indigo-500/5 translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-500" />

          <div className="relative z-10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 font-mono">Community Support</span>
              <h4 className="font-display font-extrabold text-2xl text-slate-950 mt-1">Get Vcam on Discord</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Step into our Discord server to connect with 8,000+ Android developers, LSPosed power-users, and setup coordinators.
              </p>
            </div>

            <ul className="space-y-2 pt-2 text-xs text-slate-600 font-semibold">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-500" />
                <span>8,200+ Discord members online</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-500" />
                <span>Private VIP channels for premium setup help</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-500" />
                <span>Troubleshooting logs submission & bug tracker</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 relative z-10">
            <a
              href="https://discord.gg/vcampro"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="w-full py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all cursor-pointer group"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Download Vcam APK via Discord</span>
              <Download className="w-4 h-4 animate-bounce shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Safety / Compliance statement */}
      <div className="max-w-xl mx-auto p-4.5 rounded-2xl bg-slate-900/5 border border-slate-200/50 flex gap-3.5 items-start">
        <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-500 font-medium">
          <p className="font-bold text-slate-800">Secure APK Standard Verified</p>
          <p className="mt-0.5 leading-relaxed">
            All Vcam pro APK bundles uploaded to our Telegram and Discord networks are digitally signed and fully scanned using multiple VirusTotal security pipelines. No malware, no background telemetry.
          </p>
        </div>
      </div>
    </div>
  );
}
