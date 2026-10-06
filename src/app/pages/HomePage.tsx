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
            <span className={styles.badge}>.NET</span>
            <span className={styles.badge}>Optimizely CMS</span>
            <span className={styles.badge}>nopCommerce</span>
          </div>

          <h1 className={styles.title}>
            Software Engineer (<span className={styles.em}>.NET</span> | <span className={styles.em}>Optimizely CMS</span> |{' '}
            <span className={styles.em}>nopCommerce</span>)
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
        subtitle="Enterprise strengths that map directly to real-world product delivery."
      >
        <div className={styles.highlightsGrid}>
          <Card title="3+ years in .NET ecosystem">
            <p className={styles.cardText}>
              Delivered scalable backend systems, enterprise integrations, and CMS/e-commerce platforms across distributed Agile teams.
            </p>
          </Card>
          <Card title="EPiServer / Optimizely CMS">
            <p className={styles.cardText}>
              Built certification integrations, access-control gating, accessibility enhancements, and async API endpoints on enterprise CMS platforms.
            </p>
          </Card>
          <Card title="nopCommerce plugin architecture">
            <p className={styles.cardText}>
              Developed high-performance plugins (4.60–4.90) with custom model factories and view location expanders powering enterprise platforms.
            </p>
          </Card>
          <Card title="Enterprise API integrations">
            <p className={styles.cardText}>
              Delivered OAuth2 (Xero), OData, Wolt Delivery, and Schneider API integrations connecting e-commerce, ERP, and accounting systems.
            </p>
          </Card>
          <Card title="Azure DevOps & SQL performance">
            <p className={styles.cardText}>
              Resolved Azure DevOps CI/CD and App Service pipeline failures while optimizing batch processing pipelines and SQL queries.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="strengths" title="Core strengths" subtitle="What you can rely on me for in large, real-world systems.">
        <div className={styles.strengthGrid}>
          <Card title="Backend engineering (.NET)">
            <ul className={styles.list}>
              <li>ASP.NET Core, ASP.NET MVC, Web API, Clean Architecture</li>
              <li>Batch processing pipelines & SQL query optimization</li>
              <li>Secure API design, token persistence, error handling</li>
            </ul>
          </Card>
          <Card title="CMS & E-Commerce">
            <ul className={styles.list}>
              <li>EPiServer / Optimizely CMS 11 enterprise platform delivery</li>
              <li>nopCommerce (4.60–4.90) custom plugins & architecture</li>
              <li>Elasticsearch catalog search & scheduled sync tasks</li>
            </ul>
          </Card>
          <Card title="Data, Cloud & Integrations">
            <ul className={styles.list}>
              <li>MS SQL Server, OracleDB, Entity Framework, FluentMigrator</li>
              <li>OAuth2 (Xero), OData, Wolt Delivery, Schneider APIs</li>
              <li>Azure App Service, Azure DevOps CI/CD pipelines, Git</li>
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
            <div className={styles.contactTitle}>Open to .NET, CMS, and E-commerce opportunities.</div>
            <div className={styles.contactText}>
              If you are hiring for backend-focused product teams, CMS/e-commerce platforms, or integration-heavy roles, feel free to reach out directly.
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

