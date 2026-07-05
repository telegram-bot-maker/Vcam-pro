import { AppPlan, AppFeature, FAQItem, VideoTutorial } from "../types";

export const APP_PLANS: AppPlan[] = [
  {
    id: "root-lsposed",
    name: "Vcam pro - Root LSPosed Module",
    tagline: "Native system hooks for absolute camera bypass, injecting videos directly at the hardware layer.",
    badge: "Maximum Performance",
    isPopular: true,
    priceText: "Available on Community",
    deviceRequirements: "Android 7.0+ (Root with Magisk/APatch & LSPosed Framework)",
    setupComplexity: "Moderate (Root Required)",
    features: [
      "Universal hardware-level camera bypass on any app",
      "Seamless face verification bypass in sandbox/test suites",
      "Zero-latency fake live stream injection to streaming software",
      "Direct hook into system camera service for absolute native quality",
      "Compatible with advanced anti-hook modules and mock-locators",
      "Permanent app activation key",
      "Includes premium support via private VIP chat"
    ],
    tutorialTitle: "LSPosed System Hook & Camera Bypass Complete Guide",
    tutorialId: "dQw4w9WgXcQ", // Template placeholder, users can configure in UI
    downloads: [
      {
        name: "Telegram",
        url: "https://t.me/kycVcam/6", // Professional placeholder matching CTA
        icon: "Send",
        membersCount: "12.4K Members",
        color: "bg-sky-500 hover:bg-sky-600"
      },
      {
        name: "Discord",
        url: "https://discord.gg/vcampro",
        icon: "MessageSquare",
        membersCount: "8.2K Online",
        color: "bg-indigo-500 hover:bg-indigo-600"
      }
    ]
  },
  {
    id: "non-root-sandbox",
    name: "Vcam pro - Non-Root Sandbox Package",
    tagline: "No root? No problem. Run Vcam pro inside our pre-configured ultra-secure virtual environment.",
    badge: "No Root Required",
    isPopular: false,
    priceText: "Includes Dual-Space Pack",
    deviceRequirements: "Android 7.0+ (Standard Phone, Non-Root Compatible)",
    setupComplexity: "Easy Sandbox Setup",
    features: [
      "Custom pre-configured Sandbox & Dual-Space cloner app",
      "Bypass cameras inside isolated WhatsApp & Telegram clones",
      "Run fake video calls securely without tampering with system files",
      "Ideal for users who cannot root or have banking apps on phone",
      "Includes automated backup tools for WhatsApp chat databases",
      "Step-by-step PDF & HD Video Setup Tutorial included",
      "Regular updates for the virtual sandbox environments"
    ],
    tutorialTitle: "How to run Vcam pro in Non-Root Sandbox Environment",
    tutorialId: "y9R-D6p1S2E",
    downloads: [
      {
        name: "Telegram",
        url: "https://t.me/kycVcam/6",
        icon: "Send",
        membersCount: "9.1K Members",
        color: "bg-sky-500 hover:bg-sky-600"
      },
      {
        name: "Discord",
        url: "https://discord.gg/vcampro",
        icon: "MessageSquare",
        membersCount: "8.2K Online",
        color: "bg-indigo-500 hover:bg-indigo-600"
      }
    ]
  }
];

export const APP_FEATURES: AppFeature[] = [
  {
    id: "virtual-camera-core",
    title: "Virtual Camera Core Hooking Engine",
    phraseHeading: "High Performance Virtual Camera Injection",
    description: "Replace your physical front or back camera feed with any MP4 video, picture, or screen capture instantly.",
    icon: "Camera",
    highlights: ["Smooth 1080p 60fps feed injection", "Aspect-ratio correction (stops stretching)", "Toggle between landscape and portrait feeds"]
  },
  {
    id: "camera-bypass-system",
    title: "System-Wide Camera Bypass Technology",
    phraseHeading: "Robust Camera Bypass to Prevent App Detection",
    description: "Our LSPosed framework hooks deep into Android's Camera2 API, making apps believe they are interacting with genuine hardware.",
    icon: "ShieldAlert",
    highlights: ["Tricks security checkers completely", "Masks mock-hardware hooks from safety detection", "Independent camera sensor spoofing"]
  },
  {
    id: "fake-video-call-whatsapp",
    title: "Fake Video Call Integration (WhatsApp & Telegram)",
    phraseHeading: "How to Make Fake Video Call on Social Media Apps",
    description: "Easily make WhatsApp, Telegram, Line, and Skype calls using any movie clip or stream recording as your live video feed.",
    icon: "Video",
    highlights: ["Works on incoming and outgoing video calls", "Synchronized high-fidelity audio injection", "Interactive controls overlaying standard calling UI"]
  },
  {
    id: "fake-live-stream-engine",
    title: "Fake Live Stream Creator",
    phraseHeading: "Professional Fake Live Stream Simulation",
    description: "Broadcast pre-recorded video directly to live stream apps (TikTok, Instagram, YouTube) masquerading as your phone's camera lens.",
    icon: "Radio",
    highlights: ["Loop videos seamlessly", "Bypass real-time verification banners", "Zero CPU heat generation during long broadcasts"]
  },
  {
    id: "face-verification-bypass-tech",
    title: "Face Verification Bypass Tool",
    phraseHeading: "Advanced Face Verification Bypass for Sandbox Testing",
    description: "Ideal for app developers testing face recognition software. Feed mock video frames directly into active face validation SDKs.",
    icon: "UserCheck",
    highlights: ["Accepts high-res custom frame arrays", "Simulates blinking, nodding, and speaking cues", "Used globally by mobile QA assurance testers"]
  },
  {
    id: "app-for-fake-video-call-pack",
    title: "Face Video Call App Optimizer",
    phraseHeading: "The Ideal App for Fake Video Call and Media Mocking",
    description: "Vcam pro provides a native interactive control pad that floats over other apps. Control play/pause/rewind on the fly during active calls.",
    icon: "Layers",
    highlights: ["Floating multi-action controller widget", "Fast media switcher without closing active apps", "Anti-leak safety switch (instantly shows real camera if clicked)"]
  }
];

export const SEO_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Vcam pro and how does this virtual camera work?",
    answer: "Vcam pro is a professional-grade Android application that functions as a system-wide virtual camera. It intercepts the calls made by applications (like WhatsApp, Telegram, or testing suites) to your physical front or back camera, injecting a custom video file or photo instead. To applications, this looks like real, live camera sensor capture."
  },
  {
    id: "faq-2",
    category: "Bypass & Features",
    question: "How do I use Vcam pro for face verification bypass in test environments?",
    answer: "Our app is highly sought after by QA engineers for face verification bypass during software testing. By using a pre-recorded sequence of head movements (blinking, smiling, nodding) encoded in a high-resolution MP4, you can feed these prompts directly into the app. This demonstrates the camera bypass capabilities and checks the vulnerability limits of facial recognition systems."
  },
  {
    id: "faq-3",
    category: "Setup",
    question: "Does Vcam pro require root? How does the Non-Root Sandbox plan work?",
    answer: "Vcam pro natively works as an LSPosed module, which requires a rooted phone (via Magisk or APatch) with LSPosed framework installed. However, if your phone is not rooted, we offer a dedicated Non-Root Plan. This plan includes Vcam pro along with a pre-configured secure Sandbox Application (Dual-Space). By installing WhatsApp or Telegram inside this secure sandbox, our virtual camera can hook into those apps without modifying your entire phone operating system!"
  },
  {
    id: "faq-4",
    category: "Bypass & Features",
    question: "How to make fake video call in WhatsApp or Telegram using Vcam pro?",
    answer: "Making a fake video call is incredibly simple: 1. Launch Vcam pro. 2. Select the MP4 video file you want to play. 3. Select your target apps (e.g. WhatsApp, Telegram). 4. Turn on the virtual camera service. 5. Make an incoming or outgoing video call. The other person will see your selected video playing smoothly as if you are holding the camera!"
  },
  {
    id: "faq-5",
    category: "General",
    question: "Is this the best app for fake video call and mock live streams?",
    answer: "Yes, Vcam pro is widely regarded as the most stable Face video call app and virtual camera bypass engine on Android. Unlike basic apps that show watermarks or lag during high-definition streaming, Vcam pro optimizes video codecs at the hardware layer, ensuring a lag-free fake live stream or video conference."
  },
  {
    id: "faq-6",
    category: "Setup",
    question: "Which Android versions are supported by Vcam pro?",
    answer: "Vcam pro is compatible with any Android phone running Android 7.0 and up. It has been extensively tested on Android 10, 11, 12, 13, and 14, including major custom ROMs like LineageOS, MIUI, and OneUI."
  }
];

export const STEP_GUIDES = {
  root: [
    { step: "1", title: "Root & Magisk", desc: "Ensure your device is rooted with Magisk, KernelSU, or APatch on Android 7+." },
    { step: "2", title: "LSPosed Hook", desc: "Download and install the LSPosed framework manager. Make sure the zygote hook is active." },
    { step: "3", title: "Install APK", desc: "Install Vcam pro APK, enable the module inside LSPosed manager, and select your target apps." },
    { step: "4", title: "Inject Media", desc: "Open Vcam pro, select your high-res video source, and enjoy seamless camera bypass." }
  ],
  nonRoot: [
    { step: "1", title: "Install Sandbox", desc: "Download our pre-configured virtual space APK (provided in Telegram/Discord)." },
    { step: "2", title: "Clone Target Apps", desc: "Open the sandbox and clone WhatsApp, Telegram, or any Face video call app inside it." },
    { step: "3", title: "Activate Vcam", desc: "Launch Vcam pro inside the same sandbox space to bridge the virtual camera APIs." },
    { step: "4", title: "Call & Stream", desc: "Select video files and start making high-fidelity fake video calls without root privileges." }
  ]
};
