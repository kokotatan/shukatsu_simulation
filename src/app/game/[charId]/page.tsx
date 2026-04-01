'use client'

import { use, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { getCharacter } from '@/data/characters'
import SceneView from '@/components/game/SceneView'
import EmotionBar from '@/components/emotion/EmotionBar'
import type { StatEffect } from '@/scenarios/types'

export default function GamePage({ params }: { params: Promise<{ charId: string }> }) {
  const { charId: charIdParam } = use(params)
  const router = useRouter()
  const {
    charId,
    scenario,
    getScene,
    goToScene,
    applyStatEffects,
    setEnding,
    phase,
  } = useGameStore()

  const char = getCharacter(charIdParam)
  const scene = getScene()

  // ゲームが初期化されていない場合はリダイレクト（ending中は除く）
  useEffect(() => {
    if (!charId || charId !== charIdParam || (phase !== 'playing' && phase !== 'ending')) {
      router.replace('/select')
    }
  }, [charId, charIdParam, phase, router])

  // シーン進入時の自動エフェクト
  useEffect(() => {
    if (scene?.onEnter) {
      applyStatEffects(scene.onEnter)
    }
  }, [scene?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  // エンディングシーン検知 → setEnding → 3秒後に遷移
  useEffect(() => {
    if (!scene?.isEnding || !scene?.endingId) return
    setEnding(scene.endingId, scene.endingTitle ?? '')
    const timer = setTimeout(() => {
      router.push(`/ending/${charIdParam}`)
    }, 3500)
    return () => clearTimeout(timer)
  }, [scene?.id, scene?.isEnding, scene?.endingId]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!char || !scenario || !scene) return null

  const handleChoice = (
    nextSceneId: string,
    effects: StatEffect[],
    cost?: number
  ) => {
    const allEffects: StatEffect[] = [...effects]
    if (cost) allEffects.push({ key: 'money', delta: -cost })
    goToScene(nextSceneId, allEffects)
  }

  return (
    <div className={`char-${charIdParam}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {scene.isEnding ? (
            // エンディング演出
            <div className="min-h-screen flex flex-col items-center justify-center px-4 gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center space-y-6 max-w-md w-full"
              >
                <p className="text-cream-muted text-xs tracking-widest">
                  ENDING {scene.endingId}
                </p>
                <h2 className="text-xl font-dot" style={{ color: char.themeColor }}>
                  {scene.endingTitle}
                </h2>
                <div className="space-y-4 text-left">
                  {scene.narrations.map((text, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.5 }}
                      className="font-serif-jp text-cream text-sm leading-loose"
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + scene.narrations.length * 0.5 + 0.5 }}
                className="text-cream-muted text-xs animate-blink"
              >
                結果画面へ…
              </motion.p>
            </div>
          ) : (
            <SceneView
              scene={scene}
              onChoice={handleChoice}
              charColor={char.themeColor}
              charPortrait={char.portrait}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <EmotionBar />
    </div>
  )
}
