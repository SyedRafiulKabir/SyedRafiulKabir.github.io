import type { ReactNode } from 'react'
import styles from './Tag.module.css'

export function Tag({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'muted' }) {
  return (
    <span className={[styles.base, tone === 'muted' ? styles.muted : styles.default].join(' ')}>
      {children}
    </span>
  )
}

