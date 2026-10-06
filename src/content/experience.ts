export type ExperienceItem = {
  company: string
  title: string
  start: string
  end: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Brain Station 23 PLC',
    title: 'Software Engineer I',
    start: 'Oct 2025',
    end: 'Present',
    highlights: [
      'Deliver backend features on an enterprise EPiServer/Optimizely CMS 11 platform, including certification integrations, access gating, accessibility enhancements, and async API endpoints.',
      'Resolve Azure DevOps CI/CD and Azure App Service pipeline failures, maintaining code quality within an Agile team.',
      'Develop high-performance plugins for nopCommerce (4.60–4.90) powering enterprise e-commerce platforms.',
      'Design and implement integrations with Xero Accounting (OAuth2), Wolt Delivery APIs, and ERP platforms via OData services.',
      'Improve data processing performance with batch processing pipelines and optimized SQL queries; architect modular UI and backend extensions using custom model factories and view location expanders.',
    ],
  },
  {
    company: 'MultiTech Systems',
    title: 'Junior Software Engineer',
    start: 'May 2025',
    end: 'Sep 2025',
    highlights: [
      'Developed HR and Payroll modules for an ERP system using ASP.NET MVC and AngularJS.',
      'Built RDLC reports over Oracle DB for workforce and financial data.',
      'Optimized SQL queries and API processing to improve backend performance.',
      'Implemented error-handling and fail-safe mechanisms to improve system stability.',
    ],
  },
  {
    company: 'Global Software Architects',
    title: 'Junior Software Engineer',
    start: 'Jun 2024',
    end: 'Apr 2025',
    highlights: [
      'Developed intelligent vehicle tracking applications integrating OpenAI APIs.',
      'Improved security and performance of FinTech modules used for financial data processing.',
      'Refactored legacy modules using .NET Core and Angular to enhance scalability and maintainability.',
    ],
  },
  {
    company: 'BizzNtek Ltd.',
    title: 'Junior Software Engineer (Intern, Oct–Dec 2023)',
    start: 'Oct 2023',
    end: 'May 2024',
    highlights: [
      'Contributed to the CRM module of a .NET Core hotel management system.',
      'Investigated and fixed defects in existing features, improving stability.',
    ],
  },
]
