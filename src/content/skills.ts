export type SkillTier = 'Primary' | 'Strong' | 'Proficient' | 'Familiar'

export type Skill = {
  name: string
  tier: SkillTier
  note?: string
}

export const skillTiers: Record<SkillTier, { label: string; meter: number }> =
  {
    Primary: { label: 'Primary stack', meter: 92 },
    Strong: { label: 'Strong', meter: 80 },
    Proficient: { label: 'Proficient', meter: 68 },
    Familiar: { label: 'Familiar', meter: 52 },
  }

export const skills: Skill[] = [
  { name: 'nopCommerce (4.60–4.90) & E-Commerce', tier: 'Primary' },
  { name: 'AI-DLC & Spec-Driven Development (SDD)', tier: 'Primary' },
  { name: 'ASP.NET Core / C# Backend', tier: 'Primary' },
  { name: 'EPiServer / Optimizely CMS 11', tier: 'Primary' },
  { name: 'Enterprise Integrations (OAuth2, OData, REST)', tier: 'Primary' },
  { name: 'MS SQL Server & Query Optimization', tier: 'Primary' },
  { name: 'Entity Framework & LINQ', tier: 'Primary' },
  { name: 'Context Engineering & AI Workflows', tier: 'Strong' },
  { name: 'Clean Architecture & Modular Plugins', tier: 'Strong' },
  { name: 'Azure App Service & Azure DevOps (CI/CD)', tier: 'Strong' },
  { name: 'Angular / AngularJS', tier: 'Strong' },
  { name: 'Oracle Database & Reporting', tier: 'Strong' },
  { name: 'Elasticsearch Catalog Search', tier: 'Proficient' },
  { name: 'FluentMigrator & Batch Pipelines', tier: 'Proficient' },
  { name: 'Kendo UI, jQuery & Razor', tier: 'Proficient' },
  { name: 'Git & GitHub / GitLab', tier: 'Strong' },
  { name: 'React', tier: 'Familiar' },
]
