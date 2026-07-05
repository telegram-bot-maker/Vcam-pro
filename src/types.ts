export interface DownloadChannel {
  name: "Telegram" | "Discord";
  url: string;
  icon: string;
  membersCount?: string;
  color: string;
}

export interface AppPlan {
  id: "root-lsposed" | "non-root-sandbox";
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  priceText: string;
  deviceRequirements: string;
  setupComplexity: "Simple Setup" | "Moderate (Root Required)" | "Easy Sandbox Setup";
  features: string[];
  tutorialTitle: string;
  tutorialId: string;
  downloads: DownloadChannel[];
}

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  phraseHeading: string; // The specific keyword phrase demanded
  icon: string;
  highlights: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Setup" | "Bypass & Features";
}

export interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  category: "Bypass Setup" | "App Walkthrough" | "Social Integration";
}
