import { education } from './education'
import { experience } from './experience'
import { profile } from './profile'
import { projects } from './projects'
import { skills } from './skills'
import type { PortfolioData } from '../types/portfolio'

// Helper to join paths correctly
const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const defaultPortfolioData: PortfolioData = {
  profile: {
    ...profile,
  },
  cv: {
    src: getAssetPath(import.meta.env.VITE_CV_FILE || 'cv.pdf'),
    fileName: import.meta.env.VITE_CV_DOWNLOAD_NAME || 'Syed-Rafiul-Kabir-CV.pdf',
  },
  education,
  experience,
  projects,
  skills,
  caseStudies: [],
  articles: [],
}