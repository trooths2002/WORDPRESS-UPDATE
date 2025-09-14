export interface WordPressContent {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export interface AudioContent {
  id: number;
  title: string;
  duration: string;
  format: string;
  fileUrl?: string;
  description?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  adminEmail: string;
  version: string;
}

export interface DocumentationFile {
  name: string;
  path: string;
  description: string;
  size: string;
}

export interface LaunchPackage {
  wordpressExport: string;
  documentation: DocumentationFile[];
  previewSite: boolean;
  status: 'ready' | 'in-progress' | 'needs-review';
}