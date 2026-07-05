import { useState, useEffect } from "react";
import { Camera, Send, MessageSquare, ChevronRight, Check } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoSrc, setLogoSrc] = useState(() => {
    try {
      return localStorage.getItem("vcam-logo-preference") || "/logo.png";
    } catch {
      return "/logo.png";
    }
  });

  useEffect(() => {
    const handleLogoChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setLogoSrc(customEvent.detail);
    };
    window.addEventListener("vcam-logo-changed", handleLogoChange);
    return () => {
      window.removeEventListener("vcam-logo-changed", handleLogoChange);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative w-full bg-slate-900 text-slate-400 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      {/* Background glow overlay */}
      <div className="absolute top-0 left-1/4 w-96 h-96 radial-glow-3 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 overflow-hidden shadow-md border border-white/10">
                <img 
                  src={logoSrc} 
                  alt="Vcam pro logo" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const iconContainer = e.currentTarget.parentElement;
                    if (iconContainer) {
                      iconContainer.className = "relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md";
                      const fallbackSpan = document.createElement("span");
                      fallbackSpan.className = "text-white text-xs font-bold font-display";
                      fallbackSpan.innerText = "VC";
                      iconContainer.appendChild(fallbackSpan);
                    }
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-display font-bold text-lg tracking-tight text-white">Vcam</span>
                  <span className="text-blue-500 font-display font-extrabold text-lg">pro</span>
                </div>
                <p className="text-[10px] font-medium tracking-wider text-blue-400 uppercase font-mono">Virtual Camera Bypass</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              The premier Android virtual camera app designed for system-wide camera bypass, high-resolution fake video calls, and testing facial verification modules.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://t.me/kycVcam/6" 
                target="_blank" 
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                title="Telegram Support"
              >
                <Send className="w-4 h-4" />
              </a>
              <a 
                href="https://discord.gg/vcampro" 
                target="_blank" 
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                title="Discord Community"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm tracking-wide uppercase mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -ml-3.5 group-hover:ml-0" />
                  <span>Key Features</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("interactive-demo")} className="hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -ml-3.5 group-hover:ml-0" />
                  <span>Interactive Simulator</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tutorials")} className="hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -ml-3.5 group-hover:ml-0" />
                  <span>YouTube Video Guides</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("plans")} className="hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -ml-3.5 group-hover:ml-0" />
                  <span>Plans & Guides</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faqs")} className="hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -ml-3.5 group-hover:ml-0" />
                  <span>FAQ Section</span>
                </button>
              </li>
            </ul>
          </div>

          {/* SEO Focus Anchor keywords list */}
          <div className="md:col-span-2">
            <h4 className="text-white font-display font-semibold text-sm tracking-wide uppercase mb-4">SEO Index & Use Cases</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>Vcam pro</strong> core virtual camera framework</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>Deep <strong>virtual camera</strong> hooks (Android 7.0+)</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>Secure <strong>camera bypass</strong> LSPosed module</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>WhatsApp & Telegram <strong>fake video call</strong></span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>HD quality <strong>fake live stream</strong> injection</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>Developer <strong>face verification bypass</strong> module</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>The best mobile <strong>Face video call app</strong> replacement</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>Feature-rich <strong>app for fake video call</strong> control</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 text-[11px] leading-relaxed">
              <strong>Security & Disclaimer:</strong> Vcam pro is created for software evaluation, developer API mocking, QA app verification, and technical presentations. Users are solely responsible for ensuring compliance with third-party service policies and local legal frameworks.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} Vcam pro app. All Rights Reserved. Not affiliated with WhatsApp Inc., Telegram FZ-LLC, or Meta Platforms.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span>Netlify Optimised Deployment Build</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>SEO Ranked #1 Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
