'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TypeWriter from '@/components/ui/TypeWriter'
import StatBar from '@/components/ui/StatBar'
import { useGameStore } from '@/store/gameStore'
import type { Scene } from '@/scenarios/types'

const LOCATION_LABELS: Record<string, string> = {
  home: '自室',
  university: '大学',
  company: '企業',
  interview_room: '面接室',
  train: '電車',
  cafe: 'カフェ',
  phone: '電話',
  job_fair: '合説会場',
  online: 'オンライン',
  lab: '研究室',
  locker_room: 'ロッカー室',
}

type Props = {
  scene: Scene
  onChoice: (nextSceneId: string, effects: Scene['choices'][0]['effects'], cost?: number) => void
  charColor: string
}

export default function SceneView({ scene, onChoice, charColor }: Props) {
  const [narrationIndex, setNarrationIndex] = useState(0)
  const [showDialogs, setShowDialogs] = useState(false)
  const [showChoices, setShowChoices] = useState(false)
  const stats = useGameStore((s) => s.stats)

  // シーン切り替え時にリセット
  useEffect(() => {
    setNarrationIndex(0)
    setShowDialogs(false)
    setShowChoices(false)

    // narrations が空のシーンはすぐにダイアログ・選択肢を表示
    if (scene.narrations.length === 0) {
      setShowDialogs(true)
      setTimeout(() => setShowChoices(true), 200)
    }
  }, [scene.id, scene.narrations.length])

  const proceedAfterNarrations = useCallback(() => {
    if (scene.dialogs && scene.dialogs.length > 0) {
      setShowDialogs(true)
      setTimeout(() => setShowChoices(true), 400)
    } else {
      setTimeout(() => setShowChoices(true), 200)
    }
  }, [scene.dialogs])

  const handleNarrationComplete = useCallback(() => {
    if (narrationIndex < scene.narrations.length - 1) {
      setTimeout(() => setNarrationIndex((i) => i + 1), 350)
    } else {
      proceedAfterNarrations()
    }
  }, [narrationIndex, scene.narrations.length, proceedAfterNarrations])

  const skip = useCallback(() => {
    if (showChoices) return
    setNarrationIndex(scene.narrations.length > 0 ? scene.narrations.length - 1 : 0)
    setShowDialogs(true)
    setShowChoices(true)
  }, [showChoices, scene.narrations.length])

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ '--char-color': charColor } as React.CSSProperties}
    >
      {/* ヘッダー */}
      <header className="flex items-start justify-between px-4 pt-4 pb-2 border-b border-bg-border">
        <span className="text-xs text-cream-muted">
          [ {LOCATION_LABELS[scene.location] ?? scene.location} ]
        </span>
        <div className="flex flex-col gap-1 w-40">
          <StatBar label="スト" value={stats.stress} reverse color="#e05050" />
          <StatBar label="精神" value={stats.mental} />
          <StatBar label="軸" value={stats.axis} />
        </div>
      </header>

      {/* メインコンテンツ */}
      <main
        className="flex-1 flex flex-col px-4 md:px-8 max-w-2xl mx-auto w-full py-8 gap-6 cursor-pointer"
        onClick={skip}
      >
        {/* 表示済みナレーション（薄く） */}
        {scene.narrations.slice(0, narrationIndex).map((text, i) => (
          <p key={i} className="font-serif-jp text-sm md:text-base leading-loose text-cream-muted">
            {text}
          </p>
        ))}

        {/* 現在のナレーション（タイプライター） */}
        {scene.narrations.length > 0 && !showChoices && scene.narrations[narrationIndex] && (
          <p className="font-serif-jp text-cream text-sm md:text-base leading-loose">
            <TypeWriter
              key={`${scene.id}-${narrationIndex}`}
              text={scene.narrations[narrationIndex]}
              speed={35}
              onComplete={handleNarrationComplete}
            />
          </p>
        )}

        {/* 全ナレーション表示済み後に最後のナレーションをフル表示 */}
        {showChoices && scene.narrations.length > 0 && (
          <p className="font-serif-jp text-sm md:text-base leading-loose text-cream-muted">
            {scene.narrations[scene.narrations.length - 1]}
          </p>
        )}

        {/* ダイアログ */}
        <AnimatePresence>
          {showDialogs && scene.dialogs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {scene.dialogs.map((dialog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="border border-bg-border bg-bg-card p-3"
                >
                  <p className="text-xs font-dot mb-1" style={{ color: charColor }}>
                    {dialog.speaker}
                  </p>
                  <p className="font-serif-jp text-cream text-sm leading-relaxed">
                    「{dialog.line}」
                  </p>
                  {dialog.inner && (
                    <p className="text-xs text-cream-muted mt-1.5 font-dot">
                      ─ {dialog.inner}
                    </p>
                  )}
                </motion.div>
              ))}

              {scene.interviewerThought && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (scene.dialogs?.length ?? 0) * 0.12 + 0.2 }}
                  className="border border-dashed border-cream-muted/30 p-3"
                >
                  <p className="text-xs text-cream-muted font-dot">
                    <span className="text-gold">【面接官の本音】</span>
                    <br />
                    {scene.interviewerThought}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 選択肢 */}
        <AnimatePresence>
          {showChoices && scene.choices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 mt-2"
            >
              <p className="text-xs text-cream-muted mb-3">─ どうする？</p>
              {scene.choices.map((choice, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="w-full text-left px-4 py-3 border border-bg-border text-cream text-sm transition-colors duration-150 font-dot"
                  onClick={(e) => {
                    e.stopPropagation()
                    onChoice(choice.nextSceneId, choice.effects, choice.cost)
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = choice.danger ? '#e05050' : charColor
                    e.currentTarget.style.color = choice.danger ? '#e05050' : charColor
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.color = ''
                  }}
                >
                  ▶ {choice.label}
                  {choice.sub && (
                    <span className="block text-xs text-cream-muted mt-0.5">　{choice.sub}</span>
                  )}
                  {choice.cost && (
                    <span className="block text-xs text-emotion-absurdity mt-0.5">
                      　(-¥{choice.cost.toLocaleString()})
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {!showChoices && (
        <p className="text-center text-cream-muted text-xs pb-4 animate-blink">
          タップで進む
        </p>
      )}
    </div>
  )
}
