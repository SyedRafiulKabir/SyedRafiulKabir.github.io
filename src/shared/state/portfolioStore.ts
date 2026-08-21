import { defaultPortfolioData } from '../../content/portfolioData'
import type { PortfolioData } from '../../types/portfolio'

const PORTFOLIO_DATA_KEY = 'portfolio-data-v1'
const AUTH_KEY = 'portfolio-auth-v1'

export function loadPortfolioData(): PortfolioData {
  const raw = localStorage.getItem(PORTFOLIO_DATA_KEY)
  if (!raw) return defaultPortfolioData
  try {
    const parsed = JSON.parse(raw) as Partial<PortfolioData>
    return {
      ...defaultPortfolioData,
      ...parsed,
      profile: {
        ...defaultPortfolioData.profile,
        ...parsed.profile,
        contact: {
          ...defaultPortfolioData.profile.contact,
          ...parsed.profile?.contact,
        },
        photo: {
          ...defaultPortfolioData.profile.photo,
          ...parsed.profile?.photo,
        },
      },
      cv: { ...defaultPortfolioData.cv, ...parsed.cv },
      skills: parsed.skills ?? defaultPortfolioData.skills,
      experience: parsed.experience ?? defaultPortfolioData.experience,
      projects: parsed.projects ?? defaultPortfolioData.projects,
      education: parsed.education ?? defaultPortfolioData.education,
    }
  } catch {
    return defaultPortfolioData
  }
}

export function savePortfolioData(data: PortfolioData) {
  localStorage.setItem(PORTFOLIO_DATA_KEY, JSON.stringify(data))
}

export function resetPortfolioData() {
  localStorage.removeItem(PORTFOLIO_DATA_KEY)
}

export function isAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === 'true'
}

export function setAuthenticated(value: boolean) {
  sessionStorage.setItem(AUTH_KEY, value ? 'true' : 'false')
}

