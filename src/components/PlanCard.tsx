import { motion } from "motion/react";
import { Send, MessageSquare, Shield, Check, Info, Smartphone, HelpCircle, Download } from "lucide-react";
import { AppPlan } from "../types";

interface PlanCardProps {
  key?: any;
  plan: AppPlan;
  onSelectTutorial: (youtubeId: string) => void;
}

export default function PlanCard({ plan, onSelectTutorial }: PlanCardProps) {
  const isRoot = plan.id === "root-lsposed";

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 h-full ${
        plan.isPopular
          ? "bg-white/80 border-2 border-blue-500 shadow-xl shadow-blue-500/5 ring-4 ring-blue-500/10"
          : "bg-white/50 border border-white/80 shadow-md"
      }`}
    >
      {/* Popular badge */}
      {plan.badge && (
        <span className={`absolute -top-3.5 left-6 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow ${
          isRoot 
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" 
            : "bg-slate-900 text-white"
        }`}>
          {plan.badge}
        </span>
      )}

      <div>
        {/* Header */}
        <div className="space-y-2 mt-2">
          <h4 className="font-display font-bold text-xl md:text-2xl text-slate-950 leading-tight">
            {plan.name}
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            {plan.tagline}
          </p>
        </div>

        {/* Pricing tag placeholder */}
        <div className="my-6 py-4 px-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-mono">Channel Access Plan</span>
            <span className="font-display font-extrabold text-lg text-slate-950">{plan.priceText}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-mono">Platform</span>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
              Android 7.0+
            </span>
          </div>
        </div>

        {/* Requirements warning banner */}
        <div className={`p-4 rounded-xl text-xs mb-6 flex gap-2.5 items-start ${
          isRoot ? "bg-amber-50 text-amber-800 border border-amber-200/50" : "bg-emerald-50 text-emerald-800 border border-emerald-200/50"
        }`}>
          {isRoot ? (
            <Shield className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
          ) : (
            <Smartphone className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
          )}
          <div>
            <p className="font-semibold text-[11px] uppercase tracking-wider font-mono">Device Requirement</p>
            <p className="mt-0.5 leading-relaxed font-medium">{plan.deviceRequirements}</p>
          </div>
        </div>

        {/* Bullet features */}
        <div className="space-y-3 mb-8">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-mono">What's Included</span>
          <ul className="space-y-3">
            {plan.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-100">
        {/* Watch Tutorial shortcut */}
        <button
          onClick={() => onSelectTutorial(plan.tutorialId)}
          className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-slate-200/60 cursor-pointer"
        >
          <HelpCircle className="w-4 h-4 text-blue-500" />
          <span>Watch {isRoot ? "LSPosed" : "Sandbox"} Tutorial</span>
        </button>

        {/* CTA Download buttons: Telegram & Discord */}
        <div className="space-y-2">
          <span className="text-[9px] uppercase font-extrabold tracking-widest text-center block text-slate-400 font-mono">
            Direct APK & Package Download Channels:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {plan.downloads.map((dl, idx) => (
              <a
                key={idx}
                href={dl.url}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className={`flex flex-col items-center justify-center py-3.5 px-2.5 rounded-xl text-white transition-all text-center ${dl.color} shadow-sm cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group`}
              >
                <div className="flex items-center gap-1.5 mb-1.5 justify-center">
                  {dl.name === "Telegram" ? (
                    <Send className="w-4 h-4 fill-white" />
                  ) : (
                    <MessageSquare className="w-4 h-4" />
                  )}
                  <Download className="w-3.5 h-3.5 animate-bounce" />
                </div>
                <span className="text-xs font-bold leading-tight">Download via {dl.name}</span>
                <span className="text-[8px] opacity-90 font-mono mt-1 leading-none">{dl.membersCount || "Free APK"}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
