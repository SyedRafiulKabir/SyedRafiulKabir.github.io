import { skillTiers } from '../../content/skills'
import { Section } from '../../shared/ui/Section'
import { Tag } from '../../shared/ui/Tag'
import { Card } from '../../shared/ui/Card'
import { Meter } from '../../shared/ui/Meter'
import styles from './HomePage.module.css'
import { LinkButton } from '../../shared/ui/LinkButton'
import { IconGitHub, IconLinkedIn, IconMail, IconPin } from '../../shared/ui/Icon'
import type { PortfolioData } from '../../types/portfolio'

export function HomePage({ data }: { data: PortfolioData }) {
  const { education, experience, profile, projects, skills } = data
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Intro">
        <div className={styles.heroLeft}>
          <div className={styles.badges}>
            <span className={styles.badge}>nopCommerce (Primary)</span>
            <span className={styles.badge}>AI-DLC &amp; Spec-Driven Dev</span>
            <span className={styles.badge}>.NET Core &amp; C#</span>
            <span className={styles.badge}>Optimizely CMS 11</span>
            <span className={styles.badge}>Enterprise Integrations</span>
          </div>

          <h1 className={styles.title}>
            Software Engineer (<span className={styles.em}>.NET Core</span> |{' '}
            <span className={styles.em}>nopCommerce</span> |{' '}
            <span className={styles.em}>AI-DLC</span>)
          </h1>

          <p className={styles.subtitle}>{profile.summary}</p>

          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <IconPin />
              {profile.location}
            </span>
          </div>

          <div className={styles.ctas}>
            <LinkButton href="#projects" variant="primary">
              View Projects
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              Contact Me
            </LinkButton>
          </div>

          <div className={styles.secondaryLinks}>
            <LinkButton href={profile.contact.linkedin} variant="ghost" target="_blank" rel="noreferrer">
              <IconLinkedIn />
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.contact.github} variant="ghost" target="_blank" rel="noreferrer">
              <IconGitHub />
              GitHub
            </LinkButton>
          </div>

        </div>

        <div className={styles.heroRight} aria-label="Profile photo">
          <div className={styles.avatarFrame}>
            <img
              className={styles.avatar}
              src={profile.photo.src}
              alt={profile.photo.alt}
              loading="eager"
            />
          </div>
        </div>
      </section>

      <Section
        id="highlights"
        title="Key highlights"
        subtitle="Core competencies across enterprise e-commerce, AI-driven development, and scalable .NET engineering."
      >
        <div className={styles.highlightsGrid}>
          <Card title="nopCommerce & E-Commerce Core">
            <p className={styles.cardText}>
              Primary specialization building high-performance plugins (4.60–4.90), custom view location expanders, model factories, and ERP/Xero/Wolt integrations.
            </p>
          </Card>
          <Card title="AI-DLC & Spec-Driven Velocity">
            <p className={styles.cardText}>
              Leading practitioner of AI-DLC (AI-Driven Software Development Life Cycle), guiding teams to adopt structured specifications, deep codebase context, and high-velocity workflows.
            </p>
          </Card>
          <Card title="Enterprise CMS (Optimizely / EPiServer)">
            <p className={styles.cardText}>
              Delivered enterprise CMS platform features for the Institute of Internal Auditors (IIA), including certification integrations, access gating, and async endpoints.
            </p>
          </Card>
          <Card title="Enterprise Integrations & Schedulers">
            <p className={styles.cardText}>
              Architected mission-critical integrations with Xero (OAuth2), Wolt Delivery APIs, Schneider bulk sync schedulers, and OData ERP data pipelines.
            </p>
          </Card>
          <Card title="Senior-Track Technical Ownership">
            <p className={styles.cardText}>
              Demonstrating senior-level readiness through end-to-end architectural ownership, SQL query profiling, Azure DevOps CI/CD maintenance, and fail-safe designs.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="strengths" title="Core strengths" subtitle="Full-spectrum engineering capability across e-commerce, AI-DLC enablement, and cloud backends.">
        <div className={styles.strengthGrid}>
          <Card title="nopCommerce & Enterprise E-Commerce">
            <ul className={styles.list}>
              <li>Custom plugin architecture across nopCommerce 4.60 to 4.90</li>
              <li>Custom model factories, view location expanders &amp; modular UI</li>
              <li>Elasticsearch catalog search &amp; bulk background product sync schedulers</li>
            </ul>
          </Card>
          <Card title="AI-DLC &amp; Spec-Driven Engineering (Team Catalyst)">
            <ul className={styles.list}>
              <li>Introducing &amp; scaling AI-DLC practices for teams transitioning to AI workflows</li>
              <li>Spec-Driven Development (SDD), prompt engineering &amp; context management</li>
              <li>AI-assisted architectural design, schema modeling &amp; code reviews</li>
            </ul>
          </Card>
          <Card title="Backend, CMS &amp; Cloud Infrastructure">
            <ul className={styles.list}>
              <li>ASP.NET Core, ASP.NET MVC, Clean Architecture, Entity Framework, LINQ</li>
              <li>EPiServer / Optimizely CMS 11 platform delivery &amp; access-control gating</li>
              <li>Azure App Service, Azure DevOps CI/CD pipelines, MS SQL Server, OracleDB</li>
            </ul>
          </Card>
        </div>

        <div className={styles.skillBlock}>
          <div className={styles.skillHeader}>
            <div>
              <div className={styles.skillTitle}>Technical skills</div>
              <div className={styles.skillSubtitle}>Bars show practical confidence by stack depth and daily usage.</div>
            </div>
            <div className={styles.legend}>
              {Object.entries(skillTiers).map(([tier, info]) => (
                <span key={tier} className={styles.legendItem}>
                  <span className={styles.legendSwatch} style={{ width: 10, height: 10 }} data-tier={tier} />
                  {info.label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.skillGrid}>
            {skills.map((s) => (
              <div key={s.name} className={styles.skillRow}>
                <div className={styles.skillName}>
                  <span>{s.name}</span>
                  {s.note ? <span className={styles.skillNote}>{s.note}</span> : null}
                </div>
                <Meter value={skillTiers[s.tier].meter} tier={s.tier} ariaLabel={`${s.name} — ${s.tier}`} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Focused on enterprise delivery, reliability, and outcomes.">
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={`${item.company}-${item.start}`} className={styles.timelineItem}>
              <div className={styles.timeRail} aria-hidden="true">
                <span className={styles.timeDot} />
                <span className={styles.timeLine} />
              </div>
              <div className={styles.timelineBody}>
                <div className={styles.timelineTop}>
                  <div className={styles.timelineTitle}>
                    <span className={styles.timelineRole}>{item.title}</span>
                    <span className={styles.timelineCompany}>{item.company}</span>
                  </div>
                  <div className={styles.timelineDates}>
                    {item.start} — {item.end}
                  </div>
                </div>
                <ul className={styles.list}>
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="A selection of real systems I’ve shipped and improved.">
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              right={
                <div className={styles.tagRow}>
                  {p.domainTags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              }
            >
              <div className={styles.techRow}>
                {p.tech.map((t) => (
                  <Tag key={t} tone="muted">
                    {t}
                  </Tag>
                ))}
              </div>
              <div className={styles.projectBody}>
                <p className={styles.projectLine}>
                  <strong>Problem:</strong> {p.problem}
                </p>
                <p className={styles.projectLine}>
                  <strong>Solution:</strong> {p.solution}
                </p>
                <p className={styles.projectLine}>
                  <strong>Impact:</strong> {p.impact}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className={styles.eduGrid}>
          {education.map((e) => (
            <Card key={e.institution} title={e.degree}>
              <div className={styles.eduMeta}>
                <span>{e.institution}</span>
                <span className={styles.dot} aria-hidden="true">
                  •
                </span>
                <span>{e.year}</span>
                {e.cgpa ? (
                  <>
                    <span className={styles.dot} aria-hidden="true">
                      •
                    </span>
                    <span>CGPA: {e.cgpa}</span>
                  </>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Fastest way to reach me is email.">
        <div className={styles.contactCard}>
          <div className={styles.contactLeft}>
            <div className={styles.contactTitle}>
              Ready to Deliver High-Impact &amp; Drive AI-DLC Adoption
            </div>
            <div className={styles.contactText}>
              Whether you need an engineer to scale your nopCommerce / Optimizely platform or guide your team into modern AI-DLC and spec-driven development, let's connect.
            </div>
          </div>
          <div className={styles.contactRight}>
            <LinkButton href={profile.contact.email} variant="primary">
              <IconMail />
              Email
            </LinkButton>
            <LinkButton href={profile.contact.linkedin} variant="secondary" target="_blank" rel="noreferrer">
              <IconLinkedIn />
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.contact.github} variant="ghost" target="_blank" rel="noreferrer">
              <IconGitHub />
              GitHub
            </LinkButton>
          </div>
        </div>
      </Section>
    </div>
  )
}
