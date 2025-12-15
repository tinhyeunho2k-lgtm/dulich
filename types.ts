export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string; // Placeholder or thumbnail
  promptContext: string | string[]; // Cập nhật: Có thể là 1 chuỗi hoặc danh sách nhiều kịch bản
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
export type UploadMode = 'solo' | 'couple';