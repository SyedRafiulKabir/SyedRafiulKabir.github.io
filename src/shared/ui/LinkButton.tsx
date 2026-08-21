import type { AnchorHTMLAttributes } from 'react'
import styles from './LinkButton.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
}

export function LinkButton({ variant = 'ghost', className, children, ...rest }: LinkButtonProps) {
  const cls = [styles.base, styles[variant], className].filter(Boolean).join(' ')
  return (
    <a className={cls} {...rest}>
      <span className={styles.inner}>{children}</span>
    </a>
  )
}

