export type Project = {
  title: string
  workplace: string
  domainTags: string[]
  tech: string[]
  problem: string
  solution: string
  impact: string
}

export const projects: Project[] = [
  {
    title: 'Action Enterprise E-Commerce Platform',
    workplace: 'Brain Station 23',
    domainTags: ['NopCommerce', 'Integrations', 'Search'],
    tech: [
      'ASP.NET Core',
      'MVC / Razor',
      'MS SQL',
      'Xero OAuth2',
      'Schneider API',
      'Elasticsearch',
      'Schedulers',
    ],
    problem:
      'The platform required stable financial and inventory integrations while handling heavy catalog synchronization and search performance issues.',
    solution:
      'Built OAuth2-based Xero connectivity, Schneider product sync schedulers, Elasticsearch-driven search, and SQL migration/reporting pipelines within nopCommerce.',
    impact:
      'Delivered a more reliable integration-driven commerce workflow with improved data consistency, faster product discovery, and smoother recurring operations.',
  },
  {
    title: 'Intelisale',
    workplace: 'Brain Station 23',
    domainTags: ['NopCommerce', 'Performance', 'Background Jobs'],
    tech: ['ASP.NET Core', 'MVC / Razor', 'MS SQL'],
    problem:
      'The e-commerce workflow experienced data delivery inconsistencies and unstable background processing under business-critical workloads.',
    solution:
      'Re-engineered core backend services, redesigned background job orchestration, and implemented adaptive business logic for external tool synchronization.',
    impact:
      'Improved platform stability for daily operations and enabled more dependable data flow across sales tooling and the commerce engine.',
  },
  {
    title: 'AmTab',
    workplace: 'Brain Station 23',
    domainTags: ['NopCommerce', 'Plugins', 'Performance'],
    tech: ['ASP.NET Core', 'MVC / Razor', 'MS SQL'],
    problem:
      'Custom module bottlenecks and heavy design-resource rendering were impacting maintainability and user-facing responsiveness.',
    solution:
      'Designed scalable plugin workflows, refactored dependency boundaries, and optimized rendering/data-loading behavior for resource-heavy modules.',
    impact:
      'Delivered a cleaner architecture with stronger runtime stability and more efficient handling of complex design-resource workloads.',
  },
  {
    title: 'Multitex ERP HR Module',
    workplace: 'MultiTech Systems',
    domainTags: ['ERP', 'HR Module', 'Reporting'],
    tech: ['ASP.NET', 'AngularJS', 'RDLC', 'Oracle DB'],
    problem:
      'HR and payroll operations required accurate multi-shift calculations and reliable reporting over large historical Oracle datasets.',
    solution:
      'Built payroll and attendance automation logic, designed RDLC reporting workflows, and optimized Oracle query/retrieval pipelines for enterprise reporting.',
    impact:
      'Enabled dependable HR processing and operational reporting for business teams while improving maintainability of critical ERP workflows.',
  },
  {
    title: 'MPU Financial Operations Platform',
    workplace: 'Global Software Architects (GSA)',
    domainTags: ['FinTech', 'Clean Architecture', 'Admin Dashboard'],
    tech: ['ASP.NET Core', 'ADO.NET', 'Angular', 'Kendo UI', 'Clean Architecture'],
    problem:
      'The platform needed secure, maintainable handling of sensitive financial operations with performant data access and clear operational visibility.',
    solution:
      'Built a clean-architecture ASP.NET Core backend, optimized ADO.NET transactional access paths, and delivered an Angular + Kendo admin dashboard.',
    impact:
      'Improved long-term maintainability and operational confidence for financial workflows through secure API boundaries and production-ready admin tooling.',
  },
  {
    title: 'Track Your Truck AI Assistant',
    workplace: 'Global Software Architects (GSA)',
    domainTags: ['AI-integrated', 'Real-time', 'Data processing'],
    tech: ['Node.js', 'Angular', 'OpenAI API', 'JSON processing'],
    problem:
      'Operations teams needed a faster way to interpret high-volume real-time truck telemetry without manually parsing raw system data.',
    solution:
      'Engineered a Node.js ingestion pipeline, integrated OpenAI for contextual summarization, and built an Angular conversational interface for fleet queries.',
    impact:
      'Delivered a practical AI-assisted operational experience that made live logistics data easier to consume and act on in day-to-day workflows.',
  },
]

