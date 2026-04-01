'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
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
  onChoice: (
    nextSceneId: string | ((stats: import('@/types').GameStats) => string), 
    effects: Scene['choices'][0]['effects'], 
    cost?: number,
    offerCountDelta?: number,
    rejectCountDelta?: number
  ) => void
  charColor: string
  charPortrait?: string
}

export default function SceneView({ scene, onChoice, charColor, charPortrait }: Props) {
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
            <div className="space-y-4">
              {scene.dialogs.map((dialog, i) => {
                // ポートレートの決定
                let portraitSrc = dialog.portrait
                if (!portraitSrc) {
                  const s = dialog.speaker
                  if (s === '面接官' || s.includes('人事') || s.includes('代表') || s.includes('社員')) {
                    portraitSrc = '/assets/portraits/interviewer.png'
                  } else if (
                    s === '美咲' || s === '翔太' || s === '葵' || s === '拓海' || 
                    s === '健太' || s === '蓮' || s === 'さくら' || s === '優斗' || 
                    s === '大輝' || s === 'ひかり' || s === '自分'
                  ) {
                    portraitSrc = charPortrait
                  }
                }

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12 }}
                    className="border-4 border-white bg-black p-4 flex gap-4 min-h-[120px]"
                  >
                    {portraitSrc && (
                      <div className="flex-shrink-0 w-20 h-20 border-2 border-white relative overflow-hidden bg-black">
                        <Image
                          src={portraitSrc}
                          alt={dialog.speaker}
                          fill
                          className="object-cover"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </div>
                    )}
                    <div className="flex-1 space-y-1">
                      <p className="text-[10px] font-dot text-white/60 tracking-widest uppercase">
                        {dialog.speaker}
                      </p>
                      <p className="font-serif-jp text-white text-sm md:text-base leading-relaxed">
                        「{dialog.line}」
                      </p>
                      {dialog.inner && (
                        <p className="text-xs text-gold mt-2 font-dot italic">
                          （{dialog.inner}）
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              })}

              {scene.interviewerThought && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (scene.dialogs?.length ?? 0) * 0.12 + 0.2 }}
                  className="border-2 border-dashed border-red-500/50 p-3 bg-red-950/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                  <p className="text-xs text-red-400 font-dot">
                    <span className="font-bold text-red-500">【面接官の本音】</span>
                    <br />
                    {scene.interviewerThought}
                  </p>
                </motion.div>
              )}
            </div>
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
                  className="w-full text-left px-4 py-4 border-2 border-white bg-black text-white text-sm transition-all duration-150 font-dot group relative"
                  onClick={(e) => {
                    e.stopPropagation()
                    onChoice(choice.nextSceneId, choice.effects, choice.cost, choice.offerCountDelta, choice.rejectCountDelta)
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 text-lg leading-none mt-[-2px]">
                      ❤
                    </span>
                    <div className="flex-1">
                      <p className="group-hover:text-gold transition-colors">
                        {choice.label}
                      </p>
                      {choice.sub && (
                        <span className="block text-[10px] text-white/50 mt-1 font-serif-jp italic">
                          {choice.sub}
                        </span>
                      )}
                      {choice.cost && (
                        <span className="block text-[10px] text-red-400 mt-1 font-dot">
                          Consumed: ¥{choice.cost.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
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
