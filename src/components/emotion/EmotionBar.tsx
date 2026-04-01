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
  { key: 'stress',    emoji: '😤', label: 'ストレス！',  color: '#e05050' },
  { key: 'joy',       emoji: '😊', label: 'うれしい！', color: '#f0c040' },
  { key: 'anxiety',   emoji: '😰', label: '不安…',     color: '#7080d0' },
  { key: 'absurdity', emoji: '😠', label: '理不尽',     color: '#e08030' },
  { key: 'void',      emoji: '😶', label: '空虚',       color: '#607080' },
]

type FloatEmoji = {
  id: number
  emoji: string
  x: number
}

export default function EmotionBar() {
  const addEmotion = useGameStore((s) => s.addEmotion)
  const emotion = useGameStore((s) => s.emotion)
  const [floats, setFloats] = useState<FloatEmoji[]>([])
  const [nextId, setNextId] = useState(0)

  const handleClick = useCallback((btn: EmotionButton) => {
    addEmotion(btn.key, 1)
    const id = nextId
    setNextId((n) => n + 1)
    const x = Math.random() * 40 - 20
    setFloats((f) => [...f, { id, emoji: btn.emoji, x }])
    setTimeout(() => {
      setFloats((f) => f.filter((item) => item.id !== id))
    }, 700)
  }, [addEmotion, nextId])

  // 感情値の合計でバーの太さを表現（最大50ずつ）
  const getBarWidth = (key: EmotionKey) => {
    const val = emotion[key]
    return Math.min(100, (val / 50) * 100)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-1.5">
      {EMOTIONS.map((btn) => (
        <div key={btn.key} className="relative flex items-center gap-2">
          {/* バー */}
          <div className="hidden sm:block w-16 h-0.5 bg-bg-border overflow-hidden">
            <motion.div
              className="h-full"
              style={{ backgroundColor: btn.color }}
              animate={{ width: `${getBarWidth(btn.key)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          {/* フロートアニメーション */}
          <AnimatePresence>
            {floats
              .filter((f) => f.emoji === btn.emoji)
              .map((f) => (
                <motion.span
                  key={f.id}
                  className="absolute right-10 text-lg pointer-events-none"
                  initial={{ opacity: 1, y: 0, x: f.x }}
                  animate={{ opacity: 0, y: -40, scale: 1.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {f.emoji}
                </motion.span>
              ))}
          </AnimatePresence>

          {/* ボタン */}
          <button
            onClick={() => handleClick(btn)}
            className="flex items-center gap-1.5 px-2 py-1.5 border border-bg-border
                       bg-bg-card hover:border-current text-xs transition-colors
                       active:scale-95 select-none min-w-[90px] sm:min-w-[auto]"
            style={{
              '--hover-color': btn.color,
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = btn.color
              e.currentTarget.style.color = btn.color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = ''
              e.currentTarget.style.color = ''
            }}
            aria-label={btn.label}
          >
            <span className="text-base leading-none">{btn.emoji}</span>
            <span className="text-cream-muted">{btn.label}</span>
          </button>
        </div>
      ))}
    </div>
  )
}
