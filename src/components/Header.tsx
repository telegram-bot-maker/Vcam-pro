import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Camera, Send, MessageSquare } from "lucide-react";

export default function Header() {
  const [logoSrc, setLogoSrc] = useState(() => {
    try {
      return localStorage.getItem("vcam-logo-preference") || "/logo.png";
    } catch {
      return "/logo.png";
    }
  });

  const toggleLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextLogo = logoSrc === "/logo.png" ? "/logo2.jpg" : "/logo.png";
    setLogoSrc(nextLogo);
    try {
      localStorage.setItem("vcam-logo-preference", nextLogo);
      window.dispatchEvent(new CustomEvent("vcam-logo-changed", { detail: nextLogo }));
    } catch (err) {
      console.error(err);
    }
  };

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
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-md border-b border-white/60 px-4 py-3 md:py-4 transition-all overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Subtle Header Background Watermarks */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] select-none flex justify-center items-center gap-24 md:gap-48">
          <img src="/logo.png" alt="" className="w-10 h-10 object-contain filter blur-[0.5px]" />
          <img src="/logo2.jpg" alt="" className="w-10 h-10 object-contain rounded-md filter blur-[0.5px]" />
        </div>

        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex items-center gap-2.5 cursor-pointer group relative z-10"
          id="brand-logo"
        >
          <div className="relative flex items-center justify-center w-[40.8865px] h-[40.8865px] rounded-xl bg-white/80 overflow-hidden shadow-md shadow-blue-500/5 group-hover:scale-105 transition-transform duration-300 border border-slate-200">
            <img 
              src={logoSrc} 
              alt="Vcam pro logo" 
              className="w-[40.8865px] h-[40.8865px] object-contain p-1"
              onError={(e) => {
                // Fallback to beautiful default badge if logo image fails or is empty
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const iconContainer = e.currentTarget.parentElement;
                if (iconContainer) {
                  iconContainer.className = "relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20";
                  const fallbackSpan = document.createElement("span");
                  fallbackSpan.className = "text-white text-xs font-bold font-display";
                  fallbackSpan.innerText = "VC";
                  iconContainer.appendChild(fallbackSpan);
                }
              }}
            />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-lg tracking-tight text-slate-950">Vcam</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-display font-extrabold text-lg">pro</span>
              <button
                onClick={toggleLogo}
                className="ml-1.5 px-2 py-0.5 text-[9px] font-mono font-bold tracking-tight rounded-md border bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all flex items-center gap-1 active:scale-95 shadow-sm shrink-0"
                title="Toggle between Pro Logo (logo.png) and Classic (logo2.jpg) old logo"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${logoSrc === "/logo.png" ? "bg-blue-500" : "bg-amber-500 animate-pulse"}`}></span>
                <span>{logoSrc === "/logo.png" ? "New Logo" : "Classic Logo"}</span>
              </button>
            </div>
            <p className="text-[10px] font-medium tracking-wider text-blue-600/80 uppercase font-mono leading-none">Virtual Camera Bypass</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 relative z-10">
          <button 
            onClick={() => scrollToSection("features")} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
            id="nav-features"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("interactive-demo")} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
            id="nav-demo"
          >
            Interactive Demo
          </button>
          <button 
            onClick={() => scrollToSection("tutorials")} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
            id="nav-tutorials"
          >
            Video Guides
          </button>
          <button 
            onClick={() => scrollToSection("plans")} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
            id="nav-plans"
          >
            Plans
          </button>
          <button 
            onClick={() => scrollToSection("faqs")} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
            id="nav-faqs"
          >
            FAQs
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 relative z-10">
          <a
            href="https://t.me/kycVcam/6"
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-50 text-sky-700 border border-sky-100 hover:bg-sky-100 transition-all shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram Channel</span>
          </a>
          <button
            onClick={() => scrollToSection("download")}
            className="glass-button-primary px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold shadow-sm cursor-pointer"
            id="header-cta-get"
          >
            Get App Now
          </button>
        </div>
      </div>
    </motion.header>
  );
}
