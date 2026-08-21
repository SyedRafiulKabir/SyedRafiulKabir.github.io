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
  { name: 'ASP.NET Core', tier: 'Primary' },
  { name: '.NET / C#', tier: 'Primary' },
  { name: 'Entity Framework', tier: 'Strong' },
  { name: 'MS SQL Server', tier: 'Primary' },
  { name: 'Angular / AngularJS', tier: 'Strong' },
  { name: 'Kendo UI', tier: 'Proficient' },
  { name: 'Oracle Database', tier: 'Strong' },
  { name: 'RDLC Reports', tier: 'Proficient' },
  { name: 'Microsoft Azure', tier: 'Proficient' },
  { name: 'Elasticsearch', tier: 'Proficient' },
  { name: 'OAuth2 / API Integrations', tier: 'Proficient' },
  { name: 'Node.js', tier: 'Proficient' },
  { name: 'React', tier: 'Familiar' },
  { name: 'Git', tier: 'Strong' },
]
