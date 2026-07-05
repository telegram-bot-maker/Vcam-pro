import { useState } from "react";
import { motion } from "motion/react";
import { Info, Check, Play } from "lucide-react";

interface VideoTab {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  description: string;
  bullets: string[];
}

const VIDEO_TABS: VideoTab[] = [
  {
    id: "vcam-how-it-works",
    title: "1. How Vcam pro Virtual Camera Works",
    youtubeId: "QvHgWTztkZ0",
    duration: "Interactive Short",
    description: "Witness Vcam pro virtual camera in action! See how seamless the background virtual camera bypass and pre-recorded video injection operates on live camera feeds.",
    bullets: [
      "Direct system-wide camera bypass setup",
      "Simultaneous video injection with zero latency",
      "Bypassing real camera hardware on Android"
    ]
  },
  {
    id: "whatsapp-telegram-fake-call",
    title: "2. Fake Video Calls in WhatsApp, Telegram & Instagram",
    youtubeId: "WOpOzfkidDA",
    duration: "Social Bypass Guide",
    description: "Learn how to make fake video calls on WhatsApp, Telegram, and Instagram using Vcam pro. Simulate real-time interactions with custom pre-recorded videos perfectly.",
    bullets: [
      "Injecting high-quality video streams into live calls",
      "Simulate camera hardware on popular social apps",
      "Maintain active communication on Root and Non-Root devices"
    ]
  }
];

export default function VideoSection({ selectedVideoId }: { selectedVideoId?: string }) {
  const [activeTab, setActiveTab] = useState<VideoTab>(VIDEO_TABS[0]);

  // If a plan card requests a specific video tutorial, let's switch to it
  const handleSelectTab = (tab: VideoTab) => {
    setActiveTab(tab);
  };

  const currentYoutubeId = activeTab.youtubeId;

  return (
    <div className="space-y-8" id="tutorials">
      {/* Tab Selectors */}
      <div className="flex flex-col sm:flex-row gap-3">
        {VIDEO_TABS.map((tab) => {
          const isActive = activeTab.id === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleSelectTab(tab)}
              className={`flex-1 text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                  : "bg-white/60 text-slate-700 border-white hover:bg-white/90"
              }`}
            >
              <div>
                <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1 font-mono ${isActive ? "text-blue-200" : "text-blue-600"}`}>
                  {tab.duration}
                </span>
                <h4 className="font-display font-bold text-sm md:text-base leading-tight">
                  {tab.title}
                </h4>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 ${isActive ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}>
                <Play className="w-4 h-4 fill-current" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Video Presentation Player Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Lazy Loaded Video Container */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-video rounded-3xl bg-slate-950 overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-slate-100 group">
            
            <iframe
              className="w-full h-full border-0 absolute inset-0"
              src={`https://www.youtube.com/embed/${currentYoutubeId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>
        </div>

        {/* Video Description & Custom Link Modifier */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block">
              Active Video Guide
            </span>
            <h4 className="font-display font-extrabold text-xl md:text-2xl text-slate-950 mt-1">
              {activeTab.title}
            </h4>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {activeTab.description}
          </p>

          <ul className="space-y-2">
            {activeTab.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
