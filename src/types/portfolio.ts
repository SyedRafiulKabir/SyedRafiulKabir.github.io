import type { EducationItem } from '../content/education'
import type { ExperienceItem } from '../content/experience'
import type { Profile } from '../content/profile'
import type { Project } from '../content/projects'
import type { Skill } from '../content/skills'

export type PortfolioData = {
  profile: ProfileEditable
  cv: {
    src: string
    fileName: string
    uploadedDataUrl?: string
  }
  skills: Skill[]
  experience: ExperienceItem[]
  projects: Project[]
  education: EducationItem[]
  caseStudies?: {
    title: string
    slug: string
    summary: string
  }[]
  articles?: {
    title: string
    slug: string
    summary: string
  }[]
}

export type ProfileEditable = Omit<Profile, 'photo'> & {
  photo: {
    src: string
    alt: string
  }
}

