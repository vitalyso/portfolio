export type PortfolioItem = {
  id: string;
  order: number;
  url?: string;
  title: string;
  content: string;
  summary: string;
  skills: string[];
  scope: string[];
  details: string[];
  images: string[];
  cover?: string;
  logo?: string;
};
