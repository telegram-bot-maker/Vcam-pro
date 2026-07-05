import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, RefreshCw, Smartphone, ShieldCheck, CheckCircle2, Video, Send, Check, Eye } from "lucide-react";

// Mock media sources that the user can "inject" in the simulator
interface MediaSource {
  id: string;
  name: string;
  type: string;
  url: string;
  poster: string;
}

const MEDIA_SOURCES: MediaSource[] = [
  {
    id: "face-verify",
    name: "Live Face (QA Test Blinking Guide)",
    type: "Face Verification Bypass sequence",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=800&q=85",
    poster: "Blinks, nods, and smiles to satisfy system test suites."
  },
  {
    id: "beach",
    name: "Holiday Beach Video Loop",
    type: "Ideal for fake video calls",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=800&q=85",
    poster: "Pre-recorded relaxing sunny beach loop to surprise friends."
  },
  {
    id: "meeting",
    name: "Office Work Presentation Clip",
    type: "Fake live stream feed",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=85",
    poster: "Simulates a fully attended professional work setup presentation."
  }
];

export default function PhoneMockup() {
  const [activeMedia, setActiveMedia] = useState<MediaSource>(MEDIA_SOURCES[0]);
  const [activeTab, setActiveTab] = useState<"controller" | "whatsapp" | "verification">("controller");
  const [isServiceActive, setIsServiceActive] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [targetAppName, setTargetAppName] = useState<string>("WhatsApp");
  const [showFlashMessage, setShowFlashMessage] = useState<boolean>(false);

  useEffect(() => {
    if (showFlashMessage) {
      const timer = setTimeout(() => setShowFlashMessage(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showFlashMessage]);

  const handleMediaChange = (media: MediaSource) => {
    setActiveMedia(media);
    setShowFlashMessage(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="interactive-demo">
      {/* Left side: Interactive Controls */}
      <div className="lg:col-span-5 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase font-mono">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Interactive App Showcase</span>
        </div>
        
        <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-950 leading-tight">
          Test drive Vcam pro <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">virtual camera</span> live
        </h3>
        
        <p className="text-slate-600 leading-relaxed text-base">
          This simulated phone shows exactly how the Vcam pro floating controller hooks into active messaging applications. Switch media sources on the left and see them update instantly inside the WhatsApp mock call or Face verification window.
        </p>

        {/* Media Injector Source Selector */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            1. Select Video Feed to Inject
          </span>
          <div className="space-y-3">
            {MEDIA_SOURCES.map((source) => {
              const isSelected = activeMedia.id === source.id;
              return (
                <button
                  key={source.id}
                  onClick={() => handleMediaChange(source)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-blue-50/80 border-blue-400 shadow-md shadow-blue-500/5 translate-x-1"
                      : "bg-white/60 border-white hover:bg-white/90 hover:border-slate-200"
                  }`}
                >
                  <div className="flex gap-3.5 items-center">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                      <img 
                        src={source.url} 
                        alt={source.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{source.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{source.type}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 max-w-[120px] text-right hidden sm:block">
                    {isSelected ? "Currently Active" : "Inject this"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* App Target Toggles */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            2. Choose App Environment
          </span>
          <div className="flex gap-2">
            {[
              { id: "controller", label: "Vcam Controller Panel" },
              { id: "whatsapp", label: "WhatsApp Video Call" },
              { id: "verification", label: "Face Verification Bypass" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  if (tab.id === "whatsapp") setTargetAppName("WhatsApp");
                  if (tab.id === "verification") setTargetAppName("Face ID Verify");
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center border ${
                  activeTab === tab.id
                    ? "bg-slate-950 text-white border-slate-950 shadow-md"
                    : "bg-white/60 text-slate-600 border-white hover:bg-white/90"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Indicator Status Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-500/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isServiceActive ? "bg-emerald-400" : "bg-rose-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isServiceActive ? "bg-emerald-500" : "bg-rose-500"}`}></span>
            </span>
            <span className="font-mono font-medium text-slate-700">
              Vcam pro Status: {isServiceActive ? "ACTIVE HOOKING ENGINE" : "PAUSED"}
            </span>
          </div>
          <button
            onClick={() => setIsServiceActive(!isServiceActive)}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-colors ${
              isServiceActive 
                ? "bg-rose-100 text-rose-700 hover:bg-rose-200" 
                : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
            }`}
          >
            {isServiceActive ? "Pause Bypass" : "Resume Bypass"}
          </button>
        </div>
      </div>

      {/* Right side: Smartphone Frame Simulation (Apple liquid glass styling) */}
      <div className="lg:col-span-7 flex justify-center">
        <div className="relative w-full max-w-[340px] aspect-[9/18.5] bg-slate-950 rounded-[48px] p-3.5 shadow-2xl border-[5px] border-slate-800 ring-8 ring-white/40 backdrop-blur-xl">
          
          {/* Phone Top Notch / Speaker & Dynamic Island */}
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-2xl z-40 flex items-center justify-center">
            <div className="w-12 h-1 bg-neutral-800 rounded-full mb-1"></div>
            <div className="w-3.5 h-3.5 bg-neutral-900 rounded-full ml-4 border border-neutral-800"></div>
          </div>

          {/* Core Interactive Screen */}
          <div className="w-full h-full rounded-[38px] overflow-hidden bg-slate-900 relative flex flex-col font-sans select-none shadow-inner">
            
            {/* Status Bar */}
            <div className="h-9 px-6 flex justify-between items-center text-[10px] font-semibold text-white/90 z-20 pt-1.5 font-mono">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span className="px-1 py-0.2 rounded bg-blue-500/25 text-blue-400 text-[8px] font-bold border border-blue-500/20">5G</span>
                <span>ROOT</span>
              </div>
            </div>

            {/* Simulated Live Broadcast Overlay Alerts */}
            <AnimatePresence>
              {showFlashMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-10 left-4 right-4 z-50 p-2.5 rounded-xl bg-blue-600 text-white text-xs font-medium text-center shadow-lg border border-white/25 backdrop-blur-md flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Bypassed: Live inject active!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SCREEN VIEWPORT 1: CORE VCAM CONTROLLER MODULE */}
            {activeTab === "controller" && (
              <div className="flex-1 flex flex-col p-4 pt-6 text-slate-100 bg-slate-950 relative">
                <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold">Vcam pro Engine</h4>
                      <p className="text-[9px] text-slate-400">v4.2 - LSPosed Hook Active</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                    Hooked: OK
                  </span>
                </div>

                {/* Main Video Source File Slot inside Controller */}
                <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Current Injection Slot</span>
                  <div className="flex gap-2.5 items-center">
                    <img 
                      src={activeMedia.url} 
                      alt="Thumbnail" 
                      className="w-12 h-16 rounded-lg object-cover border border-white/10 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">{activeMedia.name}</p>
                      <p className="text-[9px] text-slate-400 truncate mt-0.5">Duration: Infinite Loop</p>
                      <p className="text-[10px] text-blue-400 font-semibold flex items-center gap-1 mt-1">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Ready to Inject</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Target App Switcher inside simulated UI */}
                <div className="mt-4 space-y-2">
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Camera Bypass Targets</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-blue-500/30 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-[10px] font-medium text-white">WhatsApp</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-blue-500/30 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-[10px] font-medium text-white">Telegram</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-1.5 opacity-50">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      <span className="text-[10px] font-medium text-slate-400">Snapchat</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-1.5 opacity-50">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      <span className="text-[10px] font-medium text-slate-400">Instagram</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Floating Controller Widget toggle */}
                <div className="mt-auto p-3 rounded-xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 text-center space-y-1.5">
                  <span className="text-[10px] text-blue-300 font-semibold">Floating overlay controller pad is active</span>
                  <p className="text-[8px] text-slate-400">Controls video files play and pause while on full-screen calls.</p>
                </div>
              </div>
            )}

            {/* SCREEN VIEWPORT 2: WHATSAPP VIDEO CALL MOCK */}
            {activeTab === "whatsapp" && (
              <div className="flex-1 flex flex-col bg-slate-900 relative">
                
                {/* Simulated Video feed (The actual injected Vcam pro feed!) */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={isServiceActive ? activeMedia.url : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=800&q=85"} 
                    alt="WhatsApp Active Feed" 
                    className="w-full h-full object-cover brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
                </div>

                {/* Floating Widget overlay (Vcam Control HUD) */}
                {isServiceActive && (
                  <div className="absolute top-20 right-3 z-30 w-16 bg-black/60 backdrop-blur-md rounded-2xl p-1.5 border border-white/25 flex flex-col items-center gap-2 shadow-lg">
                    <span className="text-[7px] text-blue-400 font-extrabold uppercase font-mono tracking-tighter leading-none text-center">
                      Vcam HUD
                    </span>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)} 
                      className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                    <button 
                      onClick={() => {
                        const idx = (MEDIA_SOURCES.indexOf(activeMedia) + 1) % MEDIA_SOURCES.length;
                        setActiveMedia(MEDIA_SOURCES[idx]);
                        setShowFlashMessage(true);
                      }} 
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center active:scale-95 cursor-pointer"
                      title="Next Video Source"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    <div className="w-full h-[1px] bg-white/10"></div>
                    <span className="text-[7px] text-green-400 font-bold uppercase tracking-wider text-center">Injected</span>
                  </div>
                )}

                {/* WhatsApp HUD Header */}
                <div className="relative z-10 p-4 pt-10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white/30">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80" 
                      alt="Incoming Caller Profile"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">WhatsApp Call with David</h4>
                    <p className="text-[9px] text-emerald-400 font-medium">
                      {isServiceActive ? "● Injected Virtual Feed Active" : "● Live real camera capture"}
                    </p>
                  </div>
                </div>

                {/* Small Mini Viewport (The User's Self View) */}
                <div className="absolute bottom-24 right-4 w-18 h-26 rounded-xl overflow-hidden border-2 border-white z-10 shadow-lg bg-slate-950">
                  <img 
                    src={isServiceActive ? activeMedia.url : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=200&q=80"} 
                    alt="Self camera feed"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-1 left-1 bg-black/40 text-[7px] text-white px-1 rounded">
                    {isServiceActive ? "Vcam Pro" : "Real Cam"}
                  </div>
                </div>

                {/* Call End/Action Buttons Panel */}
                <div className="mt-auto relative z-10 p-6 flex justify-center gap-6 pb-8">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white cursor-pointer shadow-md">
                    <svg className="w-5 h-5 fill-white rotate-[135deg]" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
                  </div>
                </div>

              </div>
            )}

            {/* SCREEN VIEWPORT 3: FACE VERIFICATION TEST */}
            {activeTab === "verification" && (
              <div className="flex-1 flex flex-col bg-slate-900 text-slate-100 p-4 pt-8 relative">
                
                {/* Face Mask scanner guidelines overlay */}
                <div className="absolute inset-x-4 top-20 bottom-24 rounded-2xl overflow-hidden border border-white/20 z-10 flex items-center justify-center bg-slate-950">
                  <img 
                    src={isServiceActive ? activeMedia.url : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=800&q=85"} 
                    alt="Scan feed" 
                    className="w-full h-full object-cover brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glowing camera scanning circle vector */}
                  <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-blue-500 animate-spin opacity-50"></div>
                  <div className="absolute w-40 h-40 rounded-full border border-blue-400 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full border-[3px] border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                  </div>

                  {/* Vcam verification success banner overlay */}
                  {isServiceActive && (
                    <div className="absolute bottom-4 left-3 right-3 p-2 bg-slate-900/90 backdrop-blur-sm rounded-xl border border-emerald-500/40 text-center">
                      <p className="text-[10px] text-emerald-400 font-extrabold flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>CAMERA BYPASS SECURE</span>
                      </p>
                      <p className="text-[8px] text-slate-400 mt-0.5">Injecting verified biometric stream</p>
                    </div>
                  )}
                </div>

                {/* Developer validation dashboard header */}
                <div className="relative z-20 text-center">
                  <span className="text-[9px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-500/30">
                    QA Testing Framework API
                  </span>
                  <h4 className="text-xs font-bold mt-1 text-white">Biometric Face Authentication</h4>
                </div>

                {/* Footer validation checkmarks status inside phone */}
                <div className="mt-auto relative z-20 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                    <span>Task sequence:</span>
                    <span className="text-blue-400">Step 3 of 4</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[9.5px]">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Spoof camera hardware interface: <strong className="text-white">SUCCESS</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9.5px]">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Inject pre-recorded bio sequence: <strong className="text-white">ACTIVE</strong></span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Bottom Screen Navigation Line (Android bar style) */}
            <div className="h-4 w-full flex justify-center items-end pb-1.5 z-20">
              <div className="w-24 h-1 bg-white/40 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
