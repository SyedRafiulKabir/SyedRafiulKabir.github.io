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
  { name: 'ASP.NET Core / C#', tier: 'Primary' },
  { name: 'EPiServer / Optimizely CMS 11', tier: 'Primary' },
  { name: 'nopCommerce (4.60–4.90)', tier: 'Primary' },
  { name: 'MS SQL Server', tier: 'Primary' },
  { name: 'Entity Framework & LINQ', tier: 'Primary' },
  { name: 'Clean Architecture & REST APIs', tier: 'Strong' },
  { name: 'OAuth2 & Integrations (Xero, Wolt, OData)', tier: 'Strong' },
  { name: 'Azure & Azure DevOps (CI/CD)', tier: 'Strong' },
  { name: 'Angular / AngularJS', tier: 'Strong' },
  { name: 'Oracle Database', tier: 'Strong' },
  { name: 'Elasticsearch', tier: 'Proficient' },
  { name: 'FluentMigrator & RDLC Reports', tier: 'Proficient' },
  { name: 'Kendo UI, jQuery & Razor', tier: 'Proficient' },
  { name: 'Git & GitHub / GitLab', tier: 'Strong' },
  { name: 'React', tier: 'Familiar' },
]
