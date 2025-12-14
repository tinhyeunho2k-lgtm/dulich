export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string; // Placeholder or thumbnail
  promptContext: string; // Specific context for the AI
  isBeach?: boolean; // Nếu true, AI sẽ tự động thay trang phục thành đồ biển
}

export interface Country {
  id: string;
  name: string;
  flag: string; // Emoji flag or icon url
  imageCover: string; // Representative image for the country
  destinations: Destination[];
}

export enum AppStep {
  UPLOAD = 'UPLOAD',
  SELECT_DESTINATION = 'SELECT_DESTINATION',
  PROCESSING = 'PROCESSING',
  RESULT = 'RESULT',
}

export interface GeneratedImage {
  imageUrl: string;
  promptUsed: string;
}

export type ModelMode = 'quality' | 'fast';