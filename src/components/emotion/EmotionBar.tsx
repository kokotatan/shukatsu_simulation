'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import type { EmotionKey } from '@/types'

type EmotionButton = {
  key: EmotionKey
  emoji: string
  label: string
  color: string
}

const EMOTIONS: EmotionButton[] = [
  { key: 'stress',    emoji: '😤', label: 'ストレス',  color: '#e05050' },
  { key: 'joy',       emoji: '😊', label: 'うれしい', color: '#f0c040' },
  { key: 'anxiety',   emoji: '😰', label: '不安',     color: '#7080d0' },
  { key: 'absurdity', emoji: '😠', label: '理不尽',   color: '#e08030' },
  { key: 'void',      emoji: '😶', label: '空虚',     color: '#607080' },
]

// ブロックゲージの最大表示数
const MAX_BLOCKS = 10

type FloatEmoji = { id: number; emoji: string }

export default function EmotionBar() {
  const addEmotion = useGameStore((s) => s.addEmotion)
  const emotion = useGameStore((s) => s.emotion)
  const [floats, setFloats] = useState<FloatEmoji[]>([])
  const [nextId, setNextId] = useState(0)

  const handleClick = useCallback((btn: EmotionButton) => {
    addEmotion(btn.key, 1)
    const id = nextId
    setNextId((n) => n + 1)
    setFloats((f) => [...f, { id, emoji: btn.emoji }])
    setTimeout(() => setFloats((f) => f.filter((item) => item.id !== id)), 800)
  }, [addEmotion, nextId])

  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-1">
      {EMOTIONS.map((btn) => {
        const count = emotion[btn.key]
        const filled = Math.min(count, MAX_BLOCKS)
        const overflow = count > MAX_BLOCKS ? count - MAX_BLOCKS : 0

        return (
          <div key={btn.key} className="relative flex items-center gap-2">

            {/* フロートアニメーション */}
            <AnimatePresence>
              {floats
                .filter((f) => f.emoji === btn.emoji)
                .map((f) => (
                  <motion.span
                    key={f.id}
                    className="absolute right-0 text-base pointer-events-none"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -36, scale: 1.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    {f.emoji}
                  </motion.span>
                ))}
            </AnimatePresence>

            {/* ゲージ＋カウント（ボタンの左側） */}
            <div className="flex flex-col items-end gap-0.5">
              {/* ブロックゲージ */}
              <div className="flex gap-px">
                {Array.from({ length: MAX_BLOCKS }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-2"
                    animate={{
                      backgroundColor: i < filled ? btn.color : '#1e2428',
                      scale: i === filled - 1 && count > 0 ? [1, 1.3, 1] : 1,
                    }}
                    transition={{
                      backgroundColor: { duration: 0.15 },
                      scale: { duration: 0.2 },
                    }}
                  />
                ))}
              </div>

              {/* カウント数 */}
              <div className="flex items-baseline gap-1">
                {overflow > 0 && (
                  <motion.span
                    key={overflow}
                    className="text-xs font-dot"
                    style={{ color: btn.color }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    +{overflow}
                  </motion.span>
                )}
                <motion.span
                  className="text-xs font-dot tabular-nums"
                  style={{ color: count > 0 ? btn.color : '#1e2428' }}
                  animate={{ scale: count > 0 ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.15 }}
                  key={count}
                >
                  {count > 0 ? `×${count}` : '×0'}
                </motion.span>
              </div>
            </div>

            {/* ボタン本体 */}
            <button
              onClick={() => handleClick(btn)}
              className="flex items-center gap-1 px-2 py-1.5 border border-bg-border
                         bg-bg-card text-xs transition-all duration-100
                         active:scale-90 select-none w-24"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = btn.color
                e.currentTarget.style.color = btn.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = ''
                e.currentTarget.style.color = ''
              }}
              aria-label={`${btn.label}ボタン`}
            >
              <span className="text-sm leading-none">{btn.emoji}</span>
              <span className="text-cream-muted font-dot text-xs leading-tight">{btn.label}</span>
            </button>
          </div>
        )
      })}
    </div>
  )
}
