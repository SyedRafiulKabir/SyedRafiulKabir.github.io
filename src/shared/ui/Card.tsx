import type { ReactNode } from 'react'
import styles from './Card.module.css'

export function Card({
  title,
  right,
  children,
}: {
  title: string
  right?: ReactNode
  children: ReactNode
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        {right ? <div className={styles.right}>{right}</div> : null}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

