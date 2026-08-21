import { useState } from 'react'
import type { PortfolioData } from '../../types/portfolio'
import styles from './AdminPage.module.css'
import { resetPortfolioData } from '../../shared/state/portfolioStore'
import type { SkillTier } from '../../content/skills'

const TIERS: SkillTier[] = ['Primary', 'Strong', 'Proficient', 'Familiar']

export function AdminPage({
  data,
  onSave,
}: {
  data: PortfolioData
  onSave: (next: PortfolioData) => void
}) {
  const [draft, setDraft] = useState<PortfolioData>(data)
  const [jsonOpen, setJsonOpen] = useState(false)
  const [jsonDraft, setJsonDraft] = useState(() => JSON.stringify(data, null, 2))
  const [sectionJsonOpen, setSectionJsonOpen] = useState<Record<string, boolean>>({})
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const syncAndSave = (next: PortfolioData, successText = 'Saved successfully.') => {
    setDraft(next)
    setJsonDraft(JSON.stringify(next, null, 2))
    onSave(next)
    setError('')
    setMessage(successText)
  }

  const handlePhotoUpload = (file?: File) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const image = typeof reader.result === 'string' ? reader.result : ''
      const updated: PortfolioData = {
        ...draft,
        profile: {
          ...draft.profile,
          photo: {
            ...draft.profile.photo,
            src: image,
          },
        },
      }
      syncAndSave(updated, 'Photo uploaded and saved.')
    }
    reader.readAsDataURL(file)
  }

  const handleCvUpload = (file?: File) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const uploadedDataUrl = typeof reader.result === 'string' ? reader.result : ''
      const updated: PortfolioData = {
        ...draft,
        cv: {
          ...draft.cv,
          uploadedDataUrl,
          fileName: file.name || draft.cv.fileName,
        },
      }
      syncAndSave(updated, 'CV uploaded and saved.')
    }
    reader.readAsDataURL(file)
  }

  const updateProfile = (key: keyof PortfolioData['profile'], value: string) => {
    const next: PortfolioData = {
      ...draft,
      profile: { ...draft.profile, [key]: value },
    }
    setDraft(next)
    setJsonDraft(JSON.stringify(next, null, 2))
  }

  const updateSectionFromJson = <K extends keyof PortfolioData>(key: K, raw: string) => {
    try {
      const parsed = JSON.parse(raw) as PortfolioData[K]
      const next = { ...draft, [key]: parsed }
      setDraft(next)
      setJsonDraft(JSON.stringify(next, null, 2))
      setError('')
    } catch {
      setError(`Invalid JSON for ${String(key)} section.`)
    }
  }

  const handleFullJsonSave = () => {
    try {
      const parsed = JSON.parse(jsonDraft) as PortfolioData
      syncAndSave(parsed)
    } catch {
      setError('Invalid full JSON. Please fix syntax and try again.')
      setMessage('')
    }
  }

  const handleSave = () => syncAndSave(draft)

  const handleReset = () => {
    resetPortfolioData()
    window.location.reload()
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.card}>
        <h1 className={styles.title}>Edit Portfolio</h1>
        <p className={styles.text}>Edit by form (default) or toggle JSON editors when needed.</p>

        <div className={styles.toolbar}>
          <button className={styles.buttonGhost} type="button" onClick={() => setJsonOpen((s) => !s)}>
            {jsonOpen ? 'Hide Full JSON' : 'Show Full JSON'}
          </button>
          <button className={styles.button} type="button" onClick={handleSave}>
            Save All Changes
          </button>
        </div>

        {jsonOpen ? (
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Full JSON</h2>
            <textarea className={styles.editor} value={jsonDraft} onChange={(e) => setJsonDraft(e.target.value)} />
            <div className={styles.row}>
              <button className={styles.button} type="button" onClick={handleFullJsonSave}>
                Save Full JSON
              </button>
            </div>
          </div>
        ) : null}

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Profile</h2>
            <button
              className={styles.linkButton}
              type="button"
              onClick={() => setSectionJsonOpen((s) => ({ ...s, profile: !s.profile }))}
            >
              {sectionJsonOpen.profile ? 'Hide JSON' : 'Show JSON'}
            </button>
          </div>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Name</span>
              <input value={draft.profile.name} onChange={(e) => updateProfile('name', e.target.value)} />
            </label>
            <label className={styles.field}>
              <span>Role</span>
              <input value={draft.profile.role} onChange={(e) => updateProfile('role', e.target.value)} />
            </label>
            <label className={styles.field}>
              <span>Location</span>
              <input value={draft.profile.location} onChange={(e) => updateProfile('location', e.target.value)} />
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input
                value={draft.profile.contact.email}
                onChange={(e) =>
                  setDraft((prev) => ({
                    ...prev,
                    profile: { ...prev.profile, contact: { ...prev.profile.contact, email: e.target.value } },
                  }))
                }
              />
            </label>
            <label className={styles.field}>
              <span>LinkedIn</span>
              <input
                value={draft.profile.contact.linkedin}
                onChange={(e) =>
                  setDraft((prev) => ({
                    ...prev,
                    profile: { ...prev.profile, contact: { ...prev.profile.contact, linkedin: e.target.value } },
                  }))
                }
              />
            </label>
            <label className={styles.field}>
              <span>GitHub</span>
              <input
                value={draft.profile.contact.github}
                onChange={(e) =>
                  setDraft((prev) => ({
                    ...prev,
                    profile: { ...prev.profile, contact: { ...prev.profile.contact, github: e.target.value } },
                  }))
                }
              />
            </label>
            <label className={[styles.field, styles.full].join(' ')}>
              <span>Summary</span>
              <textarea value={draft.profile.summary} onChange={(e) => updateProfile('summary', e.target.value)} />
            </label>
          </div>
          <div className={styles.uploadRow}>
            <label className={styles.uploadBox}>
              <span>Upload Photo</span>
              <small>Overrides `src/assets/shanto.png` in browser storage.</small>
              <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e.target.files?.[0])} />
            </label>
            <label className={styles.uploadBox}>
              <span>Upload CV PDF</span>
              <small>Overrides `src/assets/cv.pdf` for downloads.</small>
              <input type="file" accept="application/pdf" onChange={(e) => handleCvUpload(e.target.files?.[0])} />
            </label>
          </div>
          {sectionJsonOpen.profile ? (
            <textarea
              className={styles.editor}
              value={JSON.stringify(draft.profile, null, 2)}
              onChange={(e) => updateSectionFromJson('profile', e.target.value)}
            />
          ) : null}
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <button className={styles.linkButton} type="button" onClick={() => setSectionJsonOpen((s) => ({ ...s, skills: !s.skills }))}>
              {sectionJsonOpen.skills ? 'Hide JSON' : 'Show JSON'}
            </button>
          </div>
          {draft.skills.map((skill, i) => (
            <div key={`${skill.name}-${i}`} className={styles.itemCard}>
              <label className={styles.field}><span>Name</span><input value={skill.name} onChange={(e) => {
                const next = [...draft.skills]; next[i] = { ...next[i], name: e.target.value }; setDraft({ ...draft, skills: next }); setJsonDraft(JSON.stringify({ ...draft, skills: next }, null, 2))
              }} /></label>
              <label className={styles.field}><span>Tier</span><select value={skill.tier} onChange={(e) => {
                const next = [...draft.skills]; next[i] = { ...next[i], tier: e.target.value as SkillTier }; setDraft({ ...draft, skills: next }); setJsonDraft(JSON.stringify({ ...draft, skills: next }, null, 2))
              }}>{TIERS.map((tier) => <option key={tier} value={tier}>{tier}</option>)}</select></label>
              <label className={[styles.field, styles.full].join(' ')}><span>Note</span><input value={skill.note ?? ''} onChange={(e) => {
                const next = [...draft.skills]; next[i] = { ...next[i], note: e.target.value || undefined }; setDraft({ ...draft, skills: next }); setJsonDraft(JSON.stringify({ ...draft, skills: next }, null, 2))
              }} /></label>
            </div>
          ))}
          {sectionJsonOpen.skills ? (
            <textarea className={styles.editor} value={JSON.stringify(draft.skills, null, 2)} onChange={(e) => updateSectionFromJson('skills', e.target.value)} />
          ) : null}
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <button className={styles.linkButton} type="button" onClick={() => setSectionJsonOpen((s) => ({ ...s, experience: !s.experience }))}>
              {sectionJsonOpen.experience ? 'Hide JSON' : 'Show JSON'}
            </button>
          </div>
          {draft.experience.map((exp, i) => (
            <div key={`${exp.company}-${i}`} className={styles.itemCard}>
              <div className={styles.grid}>
                <label className={styles.field}><span>Company</span><input value={exp.company} onChange={(e) => {
                  const next = [...draft.experience]; next[i] = { ...next[i], company: e.target.value }; setDraft({ ...draft, experience: next }); setJsonDraft(JSON.stringify({ ...draft, experience: next }, null, 2))
                }} /></label>
                <label className={styles.field}><span>Title</span><input value={exp.title} onChange={(e) => {
                  const next = [...draft.experience]; next[i] = { ...next[i], title: e.target.value }; setDraft({ ...draft, experience: next }); setJsonDraft(JSON.stringify({ ...draft, experience: next }, null, 2))
                }} /></label>
                <label className={styles.field}><span>Start</span><input value={exp.start} onChange={(e) => {
                  const next = [...draft.experience]; next[i] = { ...next[i], start: e.target.value }; setDraft({ ...draft, experience: next }); setJsonDraft(JSON.stringify({ ...draft, experience: next }, null, 2))
                }} /></label>
                <label className={styles.field}><span>End</span><input value={exp.end} onChange={(e) => {
                  const next = [...draft.experience]; next[i] = { ...next[i], end: e.target.value }; setDraft({ ...draft, experience: next }); setJsonDraft(JSON.stringify({ ...draft, experience: next }, null, 2))
                }} /></label>
                <label className={[styles.field, styles.full].join(' ')}><span>Highlights (one per line)</span><textarea value={exp.highlights.join('\n')} onChange={(e) => {
                  const next = [...draft.experience]; next[i] = { ...next[i], highlights: e.target.value.split('\n').map((v) => v.trim()).filter(Boolean) }; setDraft({ ...draft, experience: next }); setJsonDraft(JSON.stringify({ ...draft, experience: next }, null, 2))
                }} /></label>
              </div>
            </div>
          ))}
          {sectionJsonOpen.experience ? (
            <textarea className={styles.editor} value={JSON.stringify(draft.experience, null, 2)} onChange={(e) => updateSectionFromJson('experience', e.target.value)} />
          ) : null}
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <button className={styles.linkButton} type="button" onClick={() => setSectionJsonOpen((s) => ({ ...s, projects: !s.projects }))}>
              {sectionJsonOpen.projects ? 'Hide JSON' : 'Show JSON'}
            </button>
          </div>
          {draft.projects.map((project, i) => (
            <div key={`${project.title}-${i}`} className={styles.itemCard}>
              <div className={styles.grid}>
                <label className={styles.field}><span>Title</span><input value={project.title} onChange={(e) => {
                  const next = [...draft.projects]; next[i] = { ...next[i], title: e.target.value }; setDraft({ ...draft, projects: next }); setJsonDraft(JSON.stringify({ ...draft, projects: next }, null, 2))
                }} /></label>
                <label className={styles.field}><span>Workplace (internal)</span><input value={project.workplace} onChange={(e) => {
                  const next = [...draft.projects]; next[i] = { ...next[i], workplace: e.target.value }; setDraft({ ...draft, projects: next }); setJsonDraft(JSON.stringify({ ...draft, projects: next }, null, 2))
                }} /></label>
                <label className={[styles.field, styles.full].join(' ')}><span>Tags (comma separated)</span><input value={project.domainTags.join(', ')} onChange={(e) => {
                  const next = [...draft.projects]; next[i] = { ...next[i], domainTags: e.target.value.split(',').map((v) => v.trim()).filter(Boolean) }; setDraft({ ...draft, projects: next }); setJsonDraft(JSON.stringify({ ...draft, projects: next }, null, 2))
                }} /></label>
                <label className={[styles.field, styles.full].join(' ')}><span>Tech (comma separated)</span><input value={project.tech.join(', ')} onChange={(e) => {
                  const next = [...draft.projects]; next[i] = { ...next[i], tech: e.target.value.split(',').map((v) => v.trim()).filter(Boolean) }; setDraft({ ...draft, projects: next }); setJsonDraft(JSON.stringify({ ...draft, projects: next }, null, 2))
                }} /></label>
                <label className={[styles.field, styles.full].join(' ')}><span>Problem</span><textarea value={project.problem} onChange={(e) => {
                  const next = [...draft.projects]; next[i] = { ...next[i], problem: e.target.value }; setDraft({ ...draft, projects: next }); setJsonDraft(JSON.stringify({ ...draft, projects: next }, null, 2))
                }} /></label>
                <label className={[styles.field, styles.full].join(' ')}><span>Solution</span><textarea value={project.solution} onChange={(e) => {
                  const next = [...draft.projects]; next[i] = { ...next[i], solution: e.target.value }; setDraft({ ...draft, projects: next }); setJsonDraft(JSON.stringify({ ...draft, projects: next }, null, 2))
                }} /></label>
                <label className={[styles.field, styles.full].join(' ')}><span>Impact</span><textarea value={project.impact} onChange={(e) => {
                  const next = [...draft.projects]; next[i] = { ...next[i], impact: e.target.value }; setDraft({ ...draft, projects: next }); setJsonDraft(JSON.stringify({ ...draft, projects: next }, null, 2))
                }} /></label>
              </div>
            </div>
          ))}
          {sectionJsonOpen.projects ? (
            <textarea className={styles.editor} value={JSON.stringify(draft.projects, null, 2)} onChange={(e) => updateSectionFromJson('projects', e.target.value)} />
          ) : null}
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <button className={styles.linkButton} type="button" onClick={() => setSectionJsonOpen((s) => ({ ...s, education: !s.education }))}>
              {sectionJsonOpen.education ? 'Hide JSON' : 'Show JSON'}
            </button>
          </div>
          {draft.education.map((edu, i) => (
            <div key={`${edu.institution}-${i}`} className={styles.itemCard}>
              <div className={styles.grid}>
                <label className={styles.field}><span>Degree</span><input value={edu.degree} onChange={(e) => {
                  const next = [...draft.education]; next[i] = { ...next[i], degree: e.target.value }; setDraft({ ...draft, education: next }); setJsonDraft(JSON.stringify({ ...draft, education: next }, null, 2))
                }} /></label>
                <label className={styles.field}><span>Institution</span><input value={edu.institution} onChange={(e) => {
                  const next = [...draft.education]; next[i] = { ...next[i], institution: e.target.value }; setDraft({ ...draft, education: next }); setJsonDraft(JSON.stringify({ ...draft, education: next }, null, 2))
                }} /></label>
                <label className={styles.field}><span>Year</span><input value={edu.year} onChange={(e) => {
                  const next = [...draft.education]; next[i] = { ...next[i], year: e.target.value }; setDraft({ ...draft, education: next }); setJsonDraft(JSON.stringify({ ...draft, education: next }, null, 2))
                }} /></label>
              </div>
            </div>
          ))}
          {sectionJsonOpen.education ? (
            <textarea className={styles.editor} value={JSON.stringify(draft.education, null, 2)} onChange={(e) => updateSectionFromJson('education', e.target.value)} />
          ) : null}
        </div>

        {error ? <div className={styles.error}>{error}</div> : null}
        {message ? <div className={styles.ok}>{message}</div> : null}

        <div className={styles.actions}>
          <button className={styles.buttonGhost} type="button" onClick={handleReset}>
            Reset to Defaults
          </button>
        </div>
      </div>
    </section>
  )
}

