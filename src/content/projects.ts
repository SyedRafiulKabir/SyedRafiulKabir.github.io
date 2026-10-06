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
    title: 'IIA Web Platform — EPiServer/Optimizely CMS 11',
    workplace: 'Brain Station 23 PLC',
    domainTags: ['Optimizely CMS', 'Enterprise CMS', 'Azure DevOps'],
    tech: [
      'C#',
      'ASP.NET MVC',
      'EPiServer CMS 11',
      'MS SQL Server',
      'Entity Framework',
      'FluentMigrator',
      'Azure App Service',
      'Azure DevOps',
      'REST APIs',
      'Razor',
      'jQuery',
    ],
    problem:
      'The Institute of Internal Auditors (IIA) required robust backend features, certification integrations, and strict access gating on their enterprise CMS, along with resolving pipeline failures in an Agile environment.',
    solution:
      'Built backend CMS features including certification integrations and access-control gating, delivered accessibility enhancements and async API endpoints, and resolved Azure DevOps CI/CD and Azure App Service pipeline failures.',
    impact:
      'Strengthened platform reliability and code quality across CI/CD pipelines while ensuring secure and seamless certification access control for members.',
  },
  {
    title: 'Intelisale — nopCommerce Integration',
    workplace: 'Brain Station 23 PLC',
    domainTags: ['nopCommerce', 'Omnichannel', 'B2B Sales'],
    tech: ['ASP.NET Core', 'MVC / Razor', 'MS SQL Server', 'nopCommerce'],
    problem:
      'Digitalizing complex B2B sales processes required integrating Intelisale omnichannel platform with nopCommerce without degrading user responsiveness during heavy background calculations.',
    solution:
      'Engineered an integration between the Intelisale omnichannel platform and nopCommerce reflecting real-time inventory, logistics, and personalized shipping logic; re-engineered core services to run complex calculations asynchronously; developed adaptive synchronization logic.',
    impact:
      'Significantly improved real-time data reliability and latency while safeguarding front-end user experience during resource-heavy operations.',
  },
  {
    title: 'Action Website — nopCommerce E-Commerce',
    workplace: 'Brain Station 23 PLC',
    domainTags: ['nopCommerce', 'Integrations', 'Search'],
    tech: [
      'ASP.NET Core',
      'MS SQL Server',
      'Razor / MVC',
      'Xero OAuth2',
      'Schneider API',
      'Elasticsearch',
      'Schedulers',
    ],
    problem:
      'The e-commerce platform required stable accounting synchronization with Xero, fast product discovery across large catalogs, and automated supplier product updates.',
    solution:
      'Implemented Xero OAuth2 flow with database token persistence and dynamic admin "Connect" state; integrated Elasticsearch to replace default search with scheduled bulk product updates; built Schneider product sync schedulers and monthly order reporting with automated email delivery.',
    impact:
      'Delivered automated financial and supplier synchronization, drastically cut catalog search response times, and automated monthly reporting workflows.',
  },
  {
    title: 'AmTab — Design Resource Platform',
    workplace: 'Brain Station 23 PLC',
    domainTags: ['nopCommerce', 'Plugins', 'Performance'],
    tech: ['ASP.NET Core', 'MS SQL Server', 'Razor / MVC'],
    problem:
      'Architectural bottlenecks in custom modules and heavy design-resource rendering engines caused system instability and slow rendering.',
    solution:
      'Architected a scalable plugin workflow for adding new design resources without disrupting core logic, resolved architectural bottlenecks, and optimized cross-layer dependency flow and rendering pipelines for data-heavy design assets.',
    impact:
      'Improved system stability, enhanced maintainability with modular plugin architecture, and accelerated rendering performance for design-heavy assets.',
  },
  {
    title: 'Multitex ERP — HR & Payroll Module',
    workplace: 'MultiTech Systems',
    domainTags: ['ERP', 'HR & Payroll', 'Reporting'],
    tech: ['ASP.NET MVC', 'AngularJS', 'Oracle DB', 'RDLC'],
    problem:
      'Apparel and manufacturing operations faced slow manual HR and payroll processing, with difficulties aggregating complex multi-shift and statutory compliance data over historical records.',
    solution:
      'Developed the HR and Payroll module covering multi-shift calculations and statutory compliance; built RDLC reports and Oracle DB data-retrieval workflows aggregating large datasets; optimized SQL queries and API processing.',
    impact:
      'Reduced manual processing time by an estimated ~35% and enabled dependable, real-time enterprise reporting over historical workforce data.',
  },
  {
    title: 'Vehicle Tracking & FinTech Modules',
    workplace: 'Global Software Architects',
    domainTags: ['OpenAI API', 'FinTech', 'Clean Architecture'],
    tech: ['ASP.NET Core', 'Angular', 'OpenAI API', 'Kendo UI', 'Clean Architecture'],
    problem:
      'Logistics and financial processing operations required intelligent real-time vehicle telemetry parsing and enhanced security/performance for FinTech data flows.',
    solution:
      'Developed intelligent vehicle tracking applications integrating OpenAI APIs for automated insights; improved security and performance of FinTech modules; refactored legacy modules using .NET Core and Angular.',
    impact:
      'Enhanced system scalability, improved financial data processing reliability, and reduced manual overhead for fleet tracking operations.',
  },
]

