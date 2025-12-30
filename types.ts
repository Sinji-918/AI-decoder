
export type Channel = 'xiaohongshu' | 'private_traffic' | 'official_blog';

// Expanded with internal types for the new viral poster screens
export type PosterVariantType = 'intro' | 'roast' | 'background' | 'radar' | 'strategy' | 'rank_list' | 'analysis_detail' | 'upload' | 'dashboard';
export type ViralVariantType = 'viral_tags' | 'viral_warning' | 'viral_question' | 'viral_rank' | 'viral_features' | 'viral_comparison' | 'viral_contrast';

export interface Copywriting {
  title: string;
  content: string;
  hashtags: string[];
}

export interface PosterConfig {
  type: PosterVariantType | ViralVariantType; // Updated to accept both
  headline: string;
  subheadline: string;
  colorTheme: string; // Gradient class or background color class
  floatingBadge?: {
    top?: string;
    bottom?: string;
  };
  // New optional props for viral styles
  tags?: string[];
  accentColor?: string;
}

export interface ChannelData {
  id: Channel;
  name: string;
  copyOptions: Copywriting[]; 
}

export type PosterCategory = 'official' | 'viral';

export interface PosterTemplate {
    id: string;
    category: PosterCategory;
    name: string;
    config: PosterConfig;
}
