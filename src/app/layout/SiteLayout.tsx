import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './SiteLayout.module.css'
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from '../../shared/ui/Icon'
import { LinkButton } from '../../shared/ui/LinkButton'
import type { PortfolioData } from '../../types/portfolio'
import { useState } from 'react'

export function SiteLayout({
  children,
  data,
  isLoggedIn,
  onDownloadCv,
  onLogout,
}: {
  children: ReactNode
  data: PortfolioData
  isLoggedIn: boolean
  onDownloadCv: () => void
  onLogout: () => void
}) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'
  const { profile } = data

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brandWrap}>
          <button className={styles.brand} type="button" onClick={() => setMenuOpen((s) => !s)}>
            <div className={styles.mark} aria-hidden="true">
              <img className={styles.markImage} src={profile.photo.src} alt="" />
            </div>
            <div>
              <div className={styles.name}>{profile.name}</div>
              <div className={styles.role}>{profile.role}</div>
            </div>
          </button>
          <div className={[styles.menu, menuOpen ? styles.menuOpen : ''].join(' ')}>
            <Link className={styles.menuItem} to="/login" onClick={() => setMenuOpen(false)}>
              Edit
            </Link>
            {isLoggedIn ? (
              <button
                type="button"
                className={styles.menuItemButton}
                onClick={() => {
                  setMenuOpen(false)
                  onLogout()
                }}
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>

        {isHome ? (
          <nav className={styles.nav} aria-label="Primary">
            <a className={styles.navLink} href="#highlights">
              Highlights
            </a>
            <a className={styles.navLink} href="#strengths">
              Strengths
            </a>
            <a className={styles.navLink} href="#experience">
              Experience
            </a>
            <a className={styles.navLink} href="#projects">
              Projects
            </a>
            <a className={styles.navLink} href="#contact">
              Contact
            </a>
            <a className={styles.navLink} href="#insights">
              Insights
            </a>
          </nav>
        ) : (
          <div />
        )}

        <div className={styles.actions}>
          <button className={styles.downloadButton} type="button" onClick={onDownloadCv}>
            <IconDownload size={16} />
            Download CV
          </button>
          <LinkButton href={profile.contact.email} variant="primary">
            <IconMail />
            Email
          </LinkButton>
          <LinkButton href={profile.contact.linkedin} variant="ghost">
            <IconLinkedIn />
          </LinkButton>
          <LinkButton href={profile.contact.github} variant="ghost">
            <IconGitHub />
          </LinkButton>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <span className={styles.footerName}>{profile.name}</span>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
            <span className={styles.footerMeta}>{profile.location}</span>
          </div>
          <div className={styles.footerRight}>
            <a className={styles.footerLink} href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className={styles.footerLink} href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className={styles.footerLink} href={profile.contact.email}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

