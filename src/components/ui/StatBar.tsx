'use client'

import { motion } from 'framer-motion'

type Props = {
  label: string
  value: number
  max?: number
  color?: string
  reverse?: boolean  // 高いほど悪い場合（stress）
}

export default function StatBar({ label, value, max = 100, color, reverse }: Props) {
  const pct = Math.min(100, (value / max) * 100)
  const dangerZone = reverse ? pct > 70 : pct < 30

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-cream-muted w-10 shrink-0">{label}</span>
      <div className="flex-1 h-1 bg-bg-border overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            backgroundColor: dangerZone ? '#e05050' : color ?? 'var(--char-color)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
      </div>
      <span className="text-cream-muted w-8 text-right tabular-nums">
        {value}
      </span>
    </div>
  )
}
