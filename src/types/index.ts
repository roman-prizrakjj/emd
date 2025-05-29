import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  keywords?: string;
}

export interface ResearchFactor {
  id: string;
  emoji: string;
  title: string;
  content: string[];
}
