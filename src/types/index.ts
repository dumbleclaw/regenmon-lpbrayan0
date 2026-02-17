export interface RegenmonStats {
  felicidad: number;
  energia: number;
  hambre: number;
}

export interface RegenmonData {
  name: string;
  type: 'Semilla' | 'Gota' | 'Chispa';
  sprite: string;
  level: number;
  xp: number;
  stats: RegenmonStats;
  coins: number;
  lastUpdated: number;
  memories: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}