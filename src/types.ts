export interface MemoryItem {
  id: string; // Google Drive File ID
  key: string; // e.g. "1.1", "1.2"
  title: string;
  caption: string;
  date?: string;
  location?: string;
  group: number;
}

export interface MemoryGroup {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  items: MemoryItem[];
}

export interface LoveLetter {
  sender: string;
  recipient: string;
  subject: string;
  content: string[];
  signoff: string;
}
