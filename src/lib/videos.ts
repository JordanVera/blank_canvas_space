export type VideoItem = {
  id: number;
  title: string;
  type: "youtube" | "mp4";
  youtubeId?: string;
  src?: string;
  poster?: string;
};

export type EmbedItem = {
  id: number;
  title: string;
  type: string;
  url: string;
};

export const VIDEOS_DATA: VideoItem[] = [
  { id: 1, title: 'The Blank Canvas Space venue tour', type: 'youtube', youtubeId: 'h5ZZjFReNX8', poster: '/gallery/gallery-01.jpg' },
];

export const EMBEDS_DATA: EmbedItem[] = [
];