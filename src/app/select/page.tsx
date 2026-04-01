'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { characters } from '@/data/characters'
import { useGameStore } from '@/store/gameStore'
import type { Character } from '@/types'

export default function SelectPage() {
  const router = useRouter()
  const startGame = useGameStore((s) => s.startGame)
  const [selected, setSelected] = useState<Character | null>(null)

  const handleStart = async (char: Character) => {
    // シナリオを動的インポート
    const scenarioMap: Record<string, () => Promise<{ default?: unknown; [key: string]: unknown }>> = {
      misaki: () => import('@/scenarios/misaki').then(m => ({ misakiScenario: m.misakiScenario })),
      shota:  () => import('@/scenarios/shota').then(m => ({ shotaScenario: m.shotaScenario })),
      daiki:  () => import('@/scenarios/daiki').then(m => ({ daikiScenario: m.daikiScenario })),
      hikari: () => import('@/scenarios/hikari').then(m => ({ hikariScenario: m.hikariScenario })),
    }

    const keys: Record<string, string> = {
      misaki: 'misakiScenario',
      shota: 'shotaScenario',
      daiki: 'daikiScenario',
      hikari: 'hikariScenario',
    }

    const loader = scenarioMap[char.id]
    if (!loader) {
      alert('このキャラのシナリオは準備中です。')
      return
    }

    const mod = await loader()
    const scenario = mod[keys[char.id]]

    if (!scenario) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    startGame(char.id, scenario as any, char.initialStats)
    router.push(`/game/${char.id}`)
  }

  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        {/* ヘッダー */}
        <div className="text-center space-y-2">
          <h2 className="text-gold font-dot text-lg">─ キャラクターを選ぶ ─</h2>
          <p className="text-cream-muted text-xs font-serif-jp">誰の就活を追体験しますか？</p>
        </div>

        {/* キャラ一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {characters.map((char, i) => {
            const isAvailable = ['misaki', 'shota', 'daiki', 'hikari'].includes(char.id)
            return (
              <motion.button
                key={char.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => isAvailable && setSelected(char)}
                className={`text-left border p-4 transition-colors duration-150 relative
                  ${selected?.id === char.id ? 'border-current' : 'border-bg-border'}
                  ${!isAvailable ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-current'}`}
                style={{
                  '--char-color': char.themeColor,
                  borderColor: selected?.id === char.id ? char.themeColor : undefined,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (isAvailable) e.currentTarget.style.borderColor = char.themeColor
                }}
                onMouseLeave={(e) => {
                  if (selected?.id !== char.id) e.currentTarget.style.borderColor = ''
                }}
                disabled={!isAvailable}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-dot text-sm" style={{ color: isAvailable ? char.themeColor : undefined }}>
                      {char.name}
                    </p>
                    <p className="text-cream-muted text-xs mt-0.5">{char.nameKana}</p>
                  </div>
                  <span className="text-cream-muted text-xs">{char.faculty}</span>
                </div>
                <p className="text-cream-dim text-xs mt-2 font-serif-jp leading-relaxed line-clamp-2">
                  {char.tagline}
                </p>
                {!isAvailable && (
                  <span className="absolute top-2 right-2 text-xs text-cream-muted border border-bg-border px-1">
                    準備中
                  </span>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* 選択中キャラ詳細 */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="border border-bg-border bg-bg-card p-6 space-y-4"
              style={{ borderColor: selected.themeColor + '60' }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-dot text-base" style={{ color: selected.themeColor }}>
                    {selected.name}
                  </h3>
                  <p className="text-cream-muted text-xs mt-1">
                    {selected.university} / {selected.faculty}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-cream-muted">初期資金</p>
                  <p className="font-dot text-sm text-gold">
                    ¥{selected.initialStats.money.toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="font-serif-jp text-cream-dim text-sm leading-relaxed">
                {selected.description}
              </p>

              <div className="pt-1">
                <p className="text-xs text-cream-muted mb-1">テーマ</p>
                <p className="text-xs font-dot" style={{ color: selected.themeColor }}>
                  「{selected.theme}」
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-bg-border text-cream-muted px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleStart(selected)}
                className="w-full border py-3 font-dot text-sm transition-colors duration-150"
                style={{
                  borderColor: selected.themeColor,
                  color: selected.themeColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = selected.themeColor + '20'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = ''
                }}
              >
                ▶ {selected.name} の就活を始める
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}
