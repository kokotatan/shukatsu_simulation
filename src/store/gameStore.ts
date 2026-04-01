import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CharacterId, GameStats, EmotionState, GameRecord, EndingId } from '@/types'
import type { Scene, Scenario } from '@/scenarios/types'

type GamePhase = 'title' | 'select' | 'playing' | 'ending'

type GameState = {
  phase: GamePhase
  charId: CharacterId | null
  scenario: Scenario | null
  currentSceneId: string | null
  stats: GameStats
  emotion: EmotionState
  offerCount: number
  rejectCount: number
  history: string[]  // 訪問済みシーンID
  records: GameRecord[]

  // アクション
  startGame: (charId: CharacterId, scenario: Scenario, initialStats: GameStats) => void
  goToScene: (sceneId: string, statEffects?: Array<{ key: keyof GameStats; delta: number }>) => void
  applyStatEffects: (effects: Array<{ key: keyof GameStats; delta: number }>) => void
  addEmotion: (key: keyof EmotionState, amount: number) => void
  recordOffer: () => void
  recordReject: () => void
  setEnding: (endingId: EndingId, axisText: string) => void
  resetGame: () => void
  getScene: () => Scene | null
}

const defaultStats: GameStats = {
  stress: 0,
  mental: 100,
  axis: 50,
  money: 200000,
}

const defaultEmotion: EmotionState = {
  stress: 0,
  joy: 0,
  anxiety: 0,
  absurdity: 0,
  void: 0,
}

const clamp = (val: number, min = 0, max = 100) =>
  Math.max(min, Math.min(max, val))

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      phase: 'title',
      charId: null,
      scenario: null,
      currentSceneId: null,
      stats: { ...defaultStats },
      emotion: { ...defaultEmotion },
      offerCount: 0,
      rejectCount: 0,
      history: [],
      records: [],

      startGame: (charId, scenario, initialStats) => {
        set({
          phase: 'playing',
          charId,
          scenario,
          currentSceneId: scenario.startSceneId,
          stats: { ...initialStats },
          emotion: { ...defaultEmotion },
          offerCount: 0,
          rejectCount: 0,
          history: [scenario.startSceneId],
        })
      },

      goToScene: (sceneId, statEffects) => {
        const { history, stats } = get()
        let newStats = { ...stats }

        if (statEffects) {
          for (const effect of statEffects) {
            if (effect.key === 'money') {
              newStats.money = Math.max(0, newStats.money + effect.delta)
            } else {
              newStats[effect.key] = clamp(newStats[effect.key] + effect.delta)
            }
          }
        }

        set({
          currentSceneId: sceneId,
          stats: newStats,
          history: [...history, sceneId],
        })
      },

      applyStatEffects: (effects) => {
        const { stats } = get()
        const newStats = { ...stats }

        for (const effect of effects) {
          if (effect.key === 'money') {
            newStats.money = Math.max(0, newStats.money + effect.delta)
          } else {
            newStats[effect.key] = clamp(newStats[effect.key] + effect.delta)
          }
        }

        set({ stats: newStats })
      },

      addEmotion: (key, amount) => {
        const { emotion, stats } = get()
        const newEmotion = {
          ...emotion,
          [key]: emotion[key] + amount,
        }

        // 感情バーのゲームステータスへの微妙な連動
        const newStats = { ...stats }
        if (key === 'stress' && amount > 0) {
          newStats.stress = clamp(stats.stress + Math.floor(amount * 0.5))
          newStats.mental = clamp(stats.mental - Math.floor(amount * 0.3))
        } else if (key === 'joy' && amount > 0) {
          newStats.mental = clamp(stats.mental + Math.floor(amount * 0.3))
        }

        set({ emotion: newEmotion, stats: newStats })
      },

      recordOffer: () => {
        set((s) => ({ offerCount: s.offerCount + 1 }))
      },

      recordReject: () => {
        set((s) => ({ rejectCount: s.rejectCount + 1 }))
      },

      setEnding: (endingId, axisText) => {
        const { charId, offerCount, rejectCount, emotion, records } = get()
        if (!charId) return

        const newRecord: GameRecord = {
          charId,
          endingId,
          offerCount,
          rejectCount,
          finalAxis: axisText,
          emotionLog: { ...emotion },
          playedAt: new Date().toISOString(),
        }

        set({
          phase: 'ending',
          records: [...records, newRecord],
        })
      },

      resetGame: () => {
        set({
          phase: 'select',
          charId: null,
          scenario: null,
          currentSceneId: null,
          stats: { ...defaultStats },
          emotion: { ...defaultEmotion },
          offerCount: 0,
          rejectCount: 0,
          history: [],
        })
      },

      getScene: () => {
        const { scenario, currentSceneId } = get()
        if (!scenario || !currentSceneId) return null
        return scenario.scenes.find((s) => s.id === currentSceneId) ?? null
      },
    }),
    {
      name: 'shukatsu-rpg-save',
      partialize: (state) => ({ records: state.records }),
    }
  )
)
