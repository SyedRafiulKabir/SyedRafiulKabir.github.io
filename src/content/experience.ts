export type ExperienceItem = {
  company: string
  title: string
  start: string
  end: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Brain Station 23',
    title: 'Software Engineer I',
    start: 'Oct 2025',
    end: 'Present',
    highlights: [
      'Designed and delivered nopCommerce plugin and customization work across versions 4.60-4.90 for enterprise e-commerce platforms.',
      'Built ERP and accounting integrations using OData and OAuth2-based third-party APIs to streamline operational workflows.',
      'Optimized SQL-heavy and integration workflows to improve system responsiveness, reliability, and maintainability in production.',
    ],
  },
  {
    company: 'MultiTech Systems',
    title: 'Junior Software Engineer',
    start: 'Apr 2025',
    end: 'Sep 2025',
    highlights: [
      'Built and maintained core features in the Multitex ERP HR module, including attendance, payroll, and reporting workflows.',
      'Optimized Oracle-backed data processing and debugging workflows to improve reliability for business-critical operations.',
    ],
  },
  {
    company: 'Global Software Architects (GSA)',
    title: 'Junior Software Engineer',
    start: 'Jan 2024',
    end: 'Apr 2025',
    highlights: [
      'Delivered production features across ASP.NET Core and Angular applications for FinTech and logistics-focused products.',
      'Built secure APIs, maintainable backend modules, and enterprise admin interfaces following SOLID and clean architecture practices.',
    ],
  },
]
