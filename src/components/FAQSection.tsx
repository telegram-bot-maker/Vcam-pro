import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { SEO_FAQS } from "../data/seo-data";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-8" id="faqs">
      {/* Rich visual heading */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase font-mono">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>SEO FAQ Directory</span>
        </div>
        <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-950">
          Frequently Answered <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Camera Bypass</span> Queries
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Get detailed insights on how Vcam pro behaves as an app for fake video calls, setup methods, system safety policies, and facial verification bypass test scopes.
        </p>
      </div>

      {/* Accordion list */}
      <div className="max-w-3xl mx-auto space-y-4">
        {SEO_FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white border-blue-200 shadow-md shadow-blue-500/5"
                  : "bg-white/50 border-white/80 hover:bg-white/80 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-5 flex justify-between items-start gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex gap-3 items-start">
                  <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? "text-blue-600" : "text-slate-400"}`} />
                  <span className="font-semibold text-slate-900 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div className={`w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-50 border-blue-200 text-blue-600" : "text-slate-400"}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-50 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
