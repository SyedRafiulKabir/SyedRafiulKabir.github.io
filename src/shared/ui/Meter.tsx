import styles from './Meter.module.css'
import type { SkillTier } from '../../content/skills'

export function Meter({ value, tier, ariaLabel }: { value: number; tier: SkillTier; ariaLabel: string }) {
  return (
    <div className={styles.track} role="img" aria-label={ariaLabel} data-tier={tier}>
      <div className={styles.fill} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  )
}

