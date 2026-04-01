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
  const [showChoices, setShowChoices] = useState(false)
  const [showThought, setShowThought] = useState(false)
  const stats = useGameStore((s) => s.stats)

  useEffect(() => {
    setNarrationIndex(0)
    setShowChoices(false)
    setShowThought(false)
  }, [scene.id])

  const handleNarrationComplete = useCallback(() => {
    if (narrationIndex < scene.narrations.length - 1) {
      // 次のナレーションへ少し待ってから進む
      setTimeout(() => setNarrationIndex((i) => i + 1), 400)
    } else if (scene.dialogs && scene.dialogs.length > 0) {
      setShowThought(true)
      setTimeout(() => setShowChoices(true), 300)
    } else {
      setTimeout(() => setShowChoices(true), 300)
    }
  }, [narrationIndex, scene.narrations.length, scene.dialogs])

  const skip = useCallback(() => {
    setNarrationIndex(scene.narrations.length - 1)
    setShowChoices(true)
  }, [scene.narrations.length])

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ '--char-color': charColor } as React.CSSProperties}
    >
      {/* ヘッダー：ロケーション + ステータス */}
      <header className="flex items-start justify-between px-4 pt-4 pb-2 border-b border-bg-border">
        <div>
          <span className="text-xs text-cream-muted">
            [ {LOCATION_LABELS[scene.location] ?? scene.location} ]
          </span>
        </div>
        <div className="flex flex-col gap-1 w-40">
          <StatBar label="スト" value={stats.stress} reverse color="#e05050" />
          <StatBar label="精神" value={stats.mental} />
          <StatBar label="軸" value={stats.axis} />
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex flex-col px-4 md:px-8 max-w-2xl mx-auto w-full py-8 gap-6">

        {/* ナレーション */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`narration-${narrationIndex}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2 cursor-pointer"
            onClick={skip}
          >
            {scene.narrations.slice(0, narrationIndex).map((text, i) => (
              <p key={i} className="font-serif-jp text-cream text-sm md:text-base leading-loose text-cream-dim">
                {text}
              </p>
            ))}
            {scene.narrations[narrationIndex] && (
              <p className="font-serif-jp text-cream text-sm md:text-base leading-loose">
                <TypeWriter
                  text={scene.narrations[narrationIndex]}
                  speed={35}
                  onComplete={handleNarrationComplete}
                />
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ダイアログ */}
        <AnimatePresence>
          {showThought && scene.dialogs && (
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
                  transition={{ delay: i * 0.15 }}
                  className="border border-bg-border bg-bg-card p-3"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="text-xs font-dot"
                      style={{ color: charColor }}
                    >
                      {dialog.speaker}
                    </span>
                  </div>
                  <p className="font-serif-jp text-cream text-sm leading-relaxed">
                    「{dialog.line}」
                  </p>
                  {dialog.inner && (
                    <p className="text-xs text-cream-muted mt-1.5 font-dot italic">
                      ─ {dialog.inner}
                    </p>
                  )}
                </motion.div>
              ))}

              {/* 面接官の本音 */}
              {scene.interviewerThought && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (scene.dialogs?.length ?? 0) * 0.15 + 0.3 }}
                  className="border border-dashed border-cream-muted/30 p-3 bg-bg"
                >
                  <p className="text-xs text-cream-muted font-dot">
                    <span className="text-gold text-xs">【面接官の本音】</span>
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 mt-4"
            >
              <p className="text-xs text-cream-muted mb-3">─ どうする？</p>
              {scene.choices.map((choice, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`choice-btn w-full text-left px-4 py-3 border border-bg-border
                              text-cream text-sm transition-colors duration-150
                              ${choice.danger ? 'hover:border-emotion-stress hover:text-emotion-stress' : ''}`}
                  onClick={() => onChoice(choice.nextSceneId, choice.effects, choice.cost)}
                  style={{
                    '--char-color': charColor,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    if (!choice.danger) {
                      e.currentTarget.style.borderColor = charColor
                      e.currentTarget.style.color = charColor
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.color = ''
                  }}
                >
                  <span className="font-dot">▶ {choice.label}</span>
                  {choice.sub && (
                    <span className="block text-xs text-cream-muted mt-0.5 font-dot">
                      　{choice.sub}
                    </span>
                  )}
                  {choice.cost && (
                    <span className="block text-xs text-emotion-absurdity mt-0.5 font-dot">
                      　(-¥{choice.cost.toLocaleString()})
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* スキップヒント */}
      {!showChoices && (
        <p className="text-center text-cream-muted text-xs pb-4 animate-blink">
          タップで進む
        </p>
      )}
    </div>
  )
}
