import { useState } from "react";
import { motion } from "motion/react";
import { 
  Camera, 
  Send, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Check, 
  Cpu, 
  Download, 
  Terminal, 
  Video, 
  UserCheck 
} from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GlassContainer from "./components/GlassContainer";
import PhoneMockup from "./components/PhoneMockup";
import PlanCard from "./components/PlanCard";
import VideoSection from "./components/VideoSection";
import FAQSection from "./components/FAQSection";
import DownloadSection from "./components/DownloadSection";
import ScreenshotGallery from "./components/ScreenshotGallery";

import { APP_PLANS, APP_FEATURES, STEP_GUIDES } from "./data/seo-data";

export default function App() {
  const [selectedVideoId, setSelectedVideoId] = useState<string>("dQw4w9WgXcQ");
  const [activeStepTab, setActiveStepTab] = useState<"root" | "nonRoot">("root");

  const handleSelectTutorial = (youtubeId: string) => {
    setSelectedVideoId(youtubeId);
    const videoEl = document.getElementById("tutorials");
    if (videoEl) {
      videoEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans grid-background overflow-x-hidden pb-0 selection:bg-blue-600 selection:text-white">
      
      {/* BACKGROUND GLOW BUBBLES - Sourced for depth and liquidity */}
      <div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[5%] w-[45vw] h-[45vw] rounded-full radial-glow-1 opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full radial-glow-2 opacity-80"></div>
        <div className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] rounded-full radial-glow-3 opacity-90"></div>
      </div>

      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-24 md:space-y-36">
        
        {/* BRAND LOGOS INTRO & DOWNLOAD HERO PILL */}
        <section className="relative z-20 pt-4 max-w-4xl mx-auto">
          <GlassContainer className="p-6 md:p-8" delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
              
              {/* Logos Side-by-Side Presentation */}
              <div className="flex items-center gap-4 md:gap-6">
                {/* Logo 1 */}
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative w-[105px] h-[105px] rounded-2xl bg-white p-2 border border-slate-200/80 shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src="/logo.png" 
                      alt="Vcam Pro Classic Logo" 
                      className="w-[105px] h-[105px] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-blue-600 text-[9px] text-white font-mono uppercase font-bold tracking-wider whitespace-nowrap shadow">
                    Edition A
                  </span>
                </div>

                {/* Connection Line/Indicator */}
                <div className="text-slate-300 font-display font-light text-xl md:text-2xl px-1">
                  &amp;
                </div>

                {/* Logo 2 */}
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative w-[100px] h-[100px] rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src="/logo2.jpg" 
                      alt="Vcam Pro Dual Space Logo" 
                      className="w-[100px] h-[100px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-600 text-[9px] text-white font-mono uppercase font-bold tracking-wider whitespace-nowrap shadow">
                    Edition B
                  </span>
                </div>
              </div>

              {/* Title & Download CTA */}
              <div className="flex-1 text-center md:text-left space-y-2">
                <h2 className="font-display font-extrabold text-xl md:text-2xl text-slate-950 tracking-tight leading-snug">
                  Dual-Architecture Editions
                </h2>
                <p className="text-xs text-slate-600 font-medium max-w-md leading-relaxed">
                  Get the official <strong className="text-blue-600">Vcam pro</strong> packages. Supporting native framework camera injection and sandboxed dual-space emulator systems.
                </p>
              </div>

              {/* Download Button */}
              <div className="w-full md:w-auto shrink-0">
                <a
                  href="https://t.me/kycVcam/6"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 border border-blue-500/10 flex items-center justify-center gap-2 group cursor-pointer transition-all active:scale-95 text-center"
                >
                  <Send className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform fill-white" />
                  <span>Download Vcam pro APK</span>
                </a>
              </div>

            </div>
          </GlassContainer>
        </section>

        {/* Side background watermarks for Main */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          {/* Logo 1 - Left watermark midway down */}
          <div className="absolute top-[30%] -left-[12%] w-[450px] h-[450px] opacity-[0.05] md:opacity-[0.06] blur-[2px]">
            <img src="/logo.png" alt="" className="w-full h-full object-contain filter saturate-50" />
          </div>
          {/* Logo 2 - Right watermark midway down */}
          <div className="absolute top-[52%] -right-[12%] w-[450px] h-[450px] opacity-[0.05] md:opacity-[0.06] blur-[2px] rounded-full overflow-hidden">
            <img src="/logo2.jpg" alt="" className="w-full h-full object-cover filter saturate-50" />
          </div>
          {/* Logo 1 - Right watermark further down */}
          <div className="absolute top-[75%] -right-[10%] w-[400px] h-[400px] opacity-[0.04] md:opacity-[0.05] blur-[2px]">
            <img src="/logo.png" alt="" className="w-full h-full object-contain filter saturate-50" />
          </div>
          {/* Logo 2 - Left watermark further down */}
          <div className="absolute top-[90%] -left-[10%] w-[400px] h-[400px] opacity-[0.04] md:opacity-[0.05] blur-[2px] rounded-full overflow-hidden">
            <img src="/logo2.jpg" alt="" className="w-full h-full object-cover filter saturate-50" />
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-4 md:pt-10 space-y-10" id="hero">
          {/* Absolute floating logo backgrounds inside Hero section */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
            {/* Floating Logo 1 */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
                rotate: [15, 25, 15]
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut"
              }}
              className="absolute top-[2%] -left-[8%] md:-left-[4%] w-56 h-56 md:w-72 md:h-72 opacity-[0.07] md:opacity-[0.09] blur-[0.5px]"
            >
              <img src="/logo.png" alt="" className="w-full h-full object-contain filter saturate-75" />
            </motion.div>

            {/* Floating Logo 2 */}
            <motion.div
              animate={{
                y: [12, -12, 12],
                rotate: [-15, -25, -15]
              }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: "easeInOut"
              }}
              className="absolute bottom-[5%] -right-[8%] md:-right-[4%] w-56 h-56 md:w-72 md:h-72 opacity-[0.07] md:opacity-[0.09] blur-[0.5px]"
            >
              <img src="/logo2.jpg" alt="" className="w-full h-full object-contain rounded-[40px] filter saturate-75" />
            </motion.div>
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
            
            {/* Tagline Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 border border-white/80 text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              <span>Ranked #1 Android Media Injection Tool</span>
            </motion.div>

            {/* Main SEO-rich Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.1]"
            >
              The Premier <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vcam pro</span> App for <span className="underline decoration-blue-500/30 decoration-8 underline-offset-4">Virtual Camera</span> Bypass & Media Mocking
            </motion.h1>

            {/* Keyword-Rich Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Bypass physical cameras, stream pre-recorded video, and easily make a <strong className="text-slate-950">fake video call</strong> on WhatsApp & Telegram. Perform real-time <strong className="text-slate-950">camera bypass</strong> and <strong className="text-slate-950">face verification bypass</strong> on Android 7.0+ with absolute stability.
            </motion.p>

            {/* Action buttons with quick spec stats */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => scrollToSection("download")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold glass-button-primary shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Vcam pro Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection("interactive-demo")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold glass-button-secondary border shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Interactive Emulator</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </button>
            </motion.div>

            {/* Mini quick-facts line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-500" />
                <span>Any Android (Android 7.0+)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-500" />
                <span>LSPosed (Root Plan) Supported</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-500" />
                <span>Dual Sandbox (Non-Root) Available</span>
              </span>
            </motion.div>

          </div>


        </section>

        {/* SCREENSHOTS WALKTHROUGH CAROUSEL SECTION */}
        <section>
          <ScreenshotGallery />
        </section>

        {/* HIGH PERFORMANCE VIDEO SECTION */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase font-mono">
              <Terminal className="w-3.5 h-3.5 text-blue-500" />
              <span>Verified Video Tutorials</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950">
              Watch <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vcam pro</span> in Action
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unlock the secrets of camera bypass. Review how our virtual camera layers inject pristine pre-recorded feeds into WhatsApp and Telegram calls flawlessly.
            </p>
          </div>

          <GlassContainer>
            <VideoSection selectedVideoId={selectedVideoId} />
          </GlassContainer>
        </section>

        {/* INTERACTIVE PHONE EMULATOR SIMULATOR SECTION */}
        <section className="space-y-12" id="interactive-demo">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-950">
              The Best <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Face Video Call App</span> & Media Injector
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide a floating multi-action overlay widget that sits comfortably over active WhatsApp or Telegram streams. Play, loop, pause, and hot-swap your injection files instantly.
            </p>
          </div>

          <GlassContainer>
            <PhoneMockup />
          </GlassContainer>
        </section>

        {/* SEO FEATURES GRID SECTION */}
        <section className="space-y-12" id="features">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase font-mono">
              <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
              <span>Unrivalled Capabilities</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950">
              Powerful <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Camera Bypass</span> Features built for Vcam pro
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Discover why Vcam pro is the absolute gold standard for developers, system testers, and creators looking for a premium app for fake video calls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_FEATURES.map((feat) => {
              // Map icon string to Lucide React component
              let IconComponent = Camera;
              if (feat.icon === "ShieldAlert") IconComponent = ShieldCheck;
              if (feat.icon === "Video") IconComponent = Video;
              if (feat.icon === "Radio") IconComponent = Cpu;
              if (feat.icon === "UserCheck") IconComponent = UserCheck;
              if (feat.icon === "Layers") IconComponent = Terminal;

              return (
                <div 
                  key={feat.id} 
                  className="rounded-3xl p-6 md:p-8 bg-white/40 border border-white/80 backdrop-blur-md shadow-sm space-y-4 hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-blue-600 font-mono block">
                        {feat.phraseHeading}
                      </span>
                      <h4 className="font-display font-extrabold text-lg text-slate-950 mt-1 leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-4 border-t border-slate-100/60 text-[11px] text-slate-700 font-semibold">
                    {feat.highlights.map((high, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* PLANS & INSTALLATION SECTION */}
        <section className="space-y-16" id="plans">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase font-mono">
              <Download className="w-3.5 h-3.5 text-blue-500" />
              <span>Easy Setup Configurations</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950">
              Select Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Virtual Camera</span> Plan
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We offer two highly optimized plans. Rooted developers can utilize the raw power of the LSPosed module, while standard users can access Vcam pro via our custom secure Dual-Space Sandbox bundle.
            </p>
          </div>

          {/* Two Plan Cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {APP_PLANS.map((plan) => (
              <PlanCard 
                key={plan.id} 
                plan={plan} 
                onSelectTutorial={handleSelectTutorial} 
              />
            ))}
          </div>

          {/* STEP BY STEP SETUP GUIDE TABS */}
          <div className="max-w-4xl mx-auto pt-10">
            <div className="rounded-3xl p-6 md:p-8 bg-white/40 border border-white/80 backdrop-blur-md space-y-8">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-950">
                    Step-by-Step Installation Guides
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Choose your setup method to review exact operational procedures.
                  </p>
                </div>
                
                {/* Tab buttons */}
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveStepTab("root")}
                    className={`flex-1 sm:flex-initial text-xs font-bold py-2 px-4 rounded-xl cursor-pointer transition-all ${
                      activeStepTab === "root"
                        ? "bg-blue-600 text-white shadow"
                        : "bg-white/60 text-slate-700 hover:bg-white"
                    }`}
                  >
                    Root / LSPosed Guide
                  </button>
                  <button
                    onClick={() => setActiveStepTab("nonRoot")}
                    className={`flex-1 sm:flex-initial text-xs font-bold py-2 px-4 rounded-xl cursor-pointer transition-all ${
                      activeStepTab === "nonRoot"
                        ? "bg-blue-600 text-white shadow"
                        : "bg-white/60 text-slate-700 hover:bg-white"
                    }`}
                  >
                    Non-Root Sandbox Guide
                  </button>
                </div>
              </div>

              {/* Steps timeline list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {(activeStepTab === "root" ? STEP_GUIDES.root : STEP_GUIDES.nonRoot).map((stepObj) => (
                  <div key={stepObj.step} className="relative space-y-2.5">
                    {/* Circle badge */}
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-display font-black text-sm">
                      {stepObj.step}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-950 text-sm">{stepObj.title}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-medium">
                        {stepObj.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Liquid Glass Showcase Card: Quick overview of Root vs Non-Root options */}
        <section>
          <GlassContainer className="max-w-4xl mx-auto" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600">
                  <Cpu className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-slate-950">
                  LSPosed Module with Sandbox Backports
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Vcam pro is historically built as an <strong className="text-slate-950">LSPosed module</strong> requiring rooted access to inject media at the framework level. However, to support standard user phones, we have packaged a unique, completely isolated virtual environment module so you can use this virtual camera tool on non-rooted phones with simple configurations!
                </p>
              </div>

              <div className="bg-white/40 p-5 rounded-2xl border border-white/60 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Select Your Configuration:
                </h4>
                
                <div className="space-y-2.5">
                  <div className="p-3 bg-white/70 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Plan A: Vcam pro Only (Rooted)</span>
                      <span className="text-[10px] text-slate-500 font-medium">For rooted phones using Magisk/LSPosed</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 uppercase tracking-wider font-mono">Module</span>
                  </div>
                  <div className="p-3 bg-white/70 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Plan B: Dual Space Pack (Non-Root)</span>
                      <span className="text-[10px] text-slate-500 font-medium">Runs in virtual backup sandboxes</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 uppercase tracking-wider font-mono">Sandbox</span>
                  </div>
                </div>

                <button 
                  onClick={() => scrollToSection("plans")}
                  className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Compare Plans & Guides</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </GlassContainer>
        </section>

        {/* SEO RICH FAQ SECTION */}
        <section>
          <FAQSection />
        </section>

        {/* DOWNLOADING AND CALL TO ACTIONS SECTION */}
        <section>
          <DownloadSection />
        </section>

      </main>

      <Footer />
    </div>
  );
}
