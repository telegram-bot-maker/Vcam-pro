import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles, Smartphone, Eye, Video, Layers, ShieldCheck, RefreshCw } from "lucide-react";

interface ScreenshotItem {
  id: number;
  src: string;
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
  mockupDetails: {
    title: string;
    status: string;
    color: string;
    elements: string[];
  };
}

export default function ScreenshotGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const screenshots: ScreenshotItem[] = [
    {
      id: 1,
      src: "/Screenshot.jpg",
      tag: "Main Panel",
      title: "Control Dashboard",
      description: "Activate camera mock injection, monitor device connection state, and configure default system media profiles easily.",
      icon: <Smartphone className="w-5 h-5 text-blue-500" />,
      mockupDetails: {
        title: "Vcam pro Active Dashboard",
        status: "LSPosed Hook: Connected",
        color: "from-blue-600 to-indigo-600",
        elements: [
          "✓ Virtual Driver Injector: ENABLED",
          "✓ System Camera 0 & 1 Patched",
          "✓ Native Codec Acceleration (H.264)",
          "✓ Active Profile: 1080p Stream Loop"
        ]
      }
    },
    {
      id: 2,
      src: "/Screenshot_2.jpg",
      tag: "Floating HUD",
      title: "Real-time Overlay Controller",
      description: "Our floating overlay widget lets you play, pause, loop, and hot-swap video feeds directly on top of Telegram, WhatsApp, or Chrome.",
      icon: <Video className="w-5 h-5 text-emerald-500" />,
      mockupDetails: {
        title: "Floating Action overlay",
        status: "Target: WhatsApp Live Call",
        color: "from-emerald-600 to-teal-600",
        elements: [
          "⏸ Video Stream: Paused on Frame 45",
          "🔁 Loop Feed: Enabled (Infinite)",
          "🔄 Hot-Swap Video (Select from storage)",
          "⌥ Transparency: 80% | Size: Standard"
        ]
      }
    },
    {
      id: 3,
      src: "/Screenshot_3.jpg",
      tag: "Face Bypass",
      title: "Liveness Verification Bypass",
      description: "Successfully bypass static facial recognition, live selfie tasks, and third-party KYC checks with synchronous pre-recorded feeds.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
      mockupDetails: {
        title: "Liveness Check Bypass",
        status: "State: Match Success (99.8%)",
        color: "from-purple-600 to-pink-600",
        elements: [
          "✓ Static Frame Injection: Active",
          "✓ Face Mesh Emulation: Synced",
          "✓ Anti-spoofing Sensor Mock: Enabled",
          "✓ Success Rate: 99.8% (Instant Audit)"
        ]
      }
    },
    {
      id: 4,
      src: "/Screenshot_4.jpg",
      tag: "Dual Sandbox",
      title: "Non-Root Sandbox Space",
      description: "Use Vcam pro on any non-rooted Android device. Runs smoothly inside our pre-configured, lightning-fast virtual dual-space environment.",
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      mockupDetails: {
        title: "Virtual Sandbox Mode",
        status: "Isolated Sandbox: Ready",
        color: "from-amber-600 to-orange-600",
        elements: [
          "✓ Android Dual-Space Sandbox Active",
          "✓ Pre-cloned Targets: WhatsApp | Discord",
          "✓ Zero Root Permissions Required",
          "✓ Secure Encrypted Workspace"
        ]
      }
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Enable arrow key navigation on focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Slide transition configurations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <div 
      className="space-y-10 py-4" 
      id="screenshots"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase font-mono">
          <Eye className="w-3.5 h-3.5 text-blue-500" />
          <span>Interactive App Walkthrough</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-950">
          Explore the <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vcam pro</span> Interface
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto font-medium">
          Take an interactive look at the real app screenshot interfaces. Drag or swipe left/right, or use the indicator arrows to browse Vcam pro features.
        </p>
      </div>

      {/* Main Interactive Carousel container */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        
        {/* SWIPE HINT OVERLAY */}
        <div className="absolute top-[-30px] right-4 flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono select-none">
          <RefreshCw className="w-3 h-3 animate-spin text-blue-500" />
          <span>Swipe Left / Right to Browse</span>
        </div>

        {/* Carousel Body */}
        <div className="bg-white/40 border border-white/80 backdrop-blur-md rounded-[32px] p-6 md:p-10 shadow-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[420px]">
            
            {/* LEFT SIDE: Visual Content (Phone Frame / Screenshot / Fallback mockup) */}
            <div className="md:col-span-5 flex items-center justify-center relative w-full px-2">
              {/* Mobile-only Left Navigation Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-4 z-20 md:hidden p-3 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md hover:bg-slate-50 active:scale-90 text-slate-700 transition-all cursor-pointer shadow-md flex items-center justify-center"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="relative w-[240px] h-[460px] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-[6px] border-slate-900 flex flex-col overflow-hidden group">
                
                {/* Speaker & Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-28 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-800 rounded-full mb-1"></div>
                </div>

                {/* Content Container */}
                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-900 flex flex-col z-10 select-none">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.4}
                      onDragEnd={(e, info) => {
                        if (info.offset.x < -50) {
                          handleNext();
                        } else if (info.offset.x > 50) {
                          handlePrev();
                        }
                      }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-between cursor-grab active:cursor-grabbing"
                    >
                      {/* Check if image has failed or is empty placeholder */}
                      {!imageErrors[screenshots[currentIndex].id] ? (
                        <img 
                          src={screenshots[currentIndex].src} 
                          alt={screenshots[currentIndex].title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          onError={() => handleImageError(screenshots[currentIndex].id)}
                        />
                      ) : (
                        /* GORGEOUS DESIGNED SYSTEM MOCKUP FALLBACK */
                        <div className={`w-full h-full bg-gradient-to-br ${screenshots[currentIndex].mockupDetails.color} p-5 pt-10 text-white flex flex-col justify-between relative`}>
                          
                          {/* Inner Glowing Grid Accent */}
                          <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none"></div>

                          {/* Top Info Bar */}
                          <div className="space-y-1 relative z-10 border-b border-white/20 pb-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-extrabold tracking-widest font-mono uppercase bg-white/20 px-2 py-0.5 rounded-full">
                                {screenshots[currentIndex].tag}
                              </span>
                              <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                              </div>
                            </div>
                            <h5 className="text-xs font-black tracking-tight mt-1.5">
                              {screenshots[currentIndex].mockupDetails.title}
                            </h5>
                            <span className="text-[8px] font-mono text-white/80 block mt-0.5">
                              {screenshots[currentIndex].mockupDetails.status}
                            </span>
                          </div>

                          {/* Center Screen Simulator Graphics */}
                          <div className="flex-1 flex flex-col justify-center py-4 space-y-3 relative z-10">
                            {/* Simulator Graphic */}
                            <div className="bg-black/20 rounded-xl p-3 border border-white/10 space-y-2.5">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center animate-pulse shrink-0">
                                  {screenshots[currentIndex].icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="h-2 w-1/2 bg-white/30 rounded"></div>
                                  <div className="h-1.5 w-1/3 bg-white/20 rounded mt-1"></div>
                                </div>
                              </div>
                              <div className="space-y-1.5">
                                <div className="h-1 bg-white/10 rounded w-full"></div>
                                <div className="h-1 bg-white/10 rounded w-5/6"></div>
                                <div className="h-1 bg-white/10 rounded w-4/6"></div>
                              </div>
                            </div>

                            {/* Features list bullet points inside phone */}
                            <div className="space-y-1">
                              {screenshots[currentIndex].mockupDetails.elements.map((el, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-[9px] font-bold text-white/95">
                                  <span className="text-white/80">✦</span>
                                  <span className="truncate">{el}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom Control Simulation */}
                          <div className="border-t border-white/10 pt-2 text-[8px] text-center font-mono text-white/50 relative z-10 flex justify-between items-center">
                            <span>Vcam System Core v3.5</span>
                            <span className="text-emerald-300 animate-pulse">● SECURE</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Hand swipe animation overlay shown on hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <motion.div 
                    animate={{
                      x: [-15, 15, -15],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "easeInOut"
                    }}
                    className="flex flex-col items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white filter drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2M12 11c0 1.105.895 2 2 2s2-.895 2-2m-4 0h4m-4 4h4m-4 4h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 11a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0012 7H9a1 1 0 00-.894.553L7.382 9H4a1 1 0 100 2v7a2 2 0 002 2h10a2 2 0 002-2v-7z" />
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-wider mt-2 bg-black/60 px-2 py-1 rounded">Swipe Screen</span>
                  </motion.div>
                </div>

              </div>

              {/* Mobile-only Right Navigation Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-4 z-20 md:hidden p-3 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md hover:bg-slate-50 active:scale-90 text-slate-700 transition-all cursor-pointer shadow-md flex items-center justify-center"
                title="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* RIGHT SIDE: Text Info and Switcher */}
            <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[10px] font-extrabold font-mono tracking-widest text-blue-700 bg-blue-50 border border-blue-100 rounded-md uppercase">
                      {screenshots[currentIndex].tag}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold">Screenshot {currentIndex + 1} of 4</span>
                  </div>

                  <h3 className="font-display font-black text-2xl md:text-3xl text-slate-950 flex items-center gap-2.5">
                    {screenshots[currentIndex].icon}
                    <span>{screenshots[currentIndex].title}</span>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {screenshots[currentIndex].description}
                  </p>

                  <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 md:p-5 mt-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                      <span>App Interface Highlights & Functions:</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-600">
                      {screenshots[currentIndex].mockupDetails.elements.map((el, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>{el.replace("✓ ", "").replace("✓", "")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === idx ? "w-8 bg-blue-600" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Left / Right Arrow buttons (hidden on mobile, shown on desktop) */}
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-95 text-slate-700 transition-all cursor-pointer shadow-sm"
                    title="Previous Slide (Left Arrow)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-95 text-slate-700 transition-all cursor-pointer shadow-sm"
                    title="Next Slide (Right Arrow)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
