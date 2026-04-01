'use client'

import { use, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useGameStore } from '@/store/gameStore'
import { getCharacter } from '@/data/characters'

const EMOTION_LABELS = {
  stress:    { emoji: '😤', label: 'ストレス' },
  joy:       { emoji: '😊', label: 'うれしい' },
  anxiety:   { emoji: '😰', label: '不安' },
  absurdity: { emoji: '😠', label: '理不尽' },
  void:      { emoji: '😶', label: '空虚' },
}

export default function EndingPage({ params }: { params: Promise<{ charId: string }> }) {
  const { charId: charIdParam } = use(params)
  const router = useRouter()
  const { records, phase, resetGame } = useGameStore()
  const char = getCharacter(charIdParam)

  const latestRecord = [...records]
    .reverse()
    .find((r) => r.charId === charIdParam)

  useEffect(() => {
    // 少し待ってからチェック（ストアの反映を待つ）
    const timer = setTimeout(() => {
      if (phase !== 'ending' || !latestRecord) {
        router.replace('/')
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [phase, latestRecord, router])

  if (!char || !latestRecord) return null

  const topEmotion = Object.entries(latestRecord.emotionLog).sort(
    ([, a], [, b]) => b - a
  )[0]

  const shareText = `【${char.name}の就活記録】
ENDING ${latestRecord.endingId}「${latestRecord.finalAxis}」
内定: ${latestRecord.offerCount}社 / お祈り: ${latestRecord.rejectCount}社
一番感じた気持ち: ${EMOTION_LABELS[topEmotion[0] as keyof typeof EMOTION_LABELS]?.emoji ?? ''} ${EMOTION_LABELS[topEmotion[0] as keyof typeof EMOTION_LABELS]?.label ?? ''}

#就活というゲーム #就活RPG`

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm space-y-6"
      >
        {/* エンディングカード */}
        <div
          className="border bg-bg-card p-6 space-y-5"
          style={{ borderColor: char.themeColor + '80' }}
        >
          {/* タイトル */}
          <div className="space-y-1">
            <p className="text-cream-muted text-xs tracking-widest">
              ENDING {latestRecord.endingId}
            </p>
            <h2 className="font-dot text-lg" style={{ color: char.themeColor }}>
              {latestRecord.finalAxis}
            </h2>
            <p className="text-cream-muted text-xs font-serif-jp">{char.name} の就活</p>
          </div>

          <div className="h-px bg-bg-border" />

          {/* 戦績 */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center border border-bg-border p-3">
              <p className="text-2xl font-dot" style={{ color: char.themeColor }}>
                {latestRecord.offerCount}
              </p>
              <p className="text-xs text-cream-muted mt-1">内定</p>
            </div>
            <div className="text-center border border-bg-border p-3">
              <p className="text-2xl font-dot text-cream-muted">
                {latestRecord.rejectCount}
              </p>
              <p className="text-xs text-cream-muted mt-1">お祈り</p>
            </div>
          </div>

          {/* 感情ログ */}
          <div>
            <p className="text-xs text-cream-muted mb-2">感情ログ</p>
            <div className="space-y-1.5">
              {Object.entries(latestRecord.emotionLog).map(([key, val]) => {
                const info = EMOTION_LABELS[key as keyof typeof EMOTION_LABELS]
                if (!info || val === 0) return null
                const max = Math.max(...Object.values(latestRecord.emotionLog), 1)
                return (
                  <div key={key} className="flex items-center gap-2 text-xs">
                    <span className="w-4">{info.emoji}</span>
                    <span className="text-cream-muted w-12">{info.label}</span>
                    <div className="flex-1 h-0.5 bg-bg-border">
                      <div
                        className="h-full"
                        style={{
                          width: `${(val / max) * 100}%`,
                          backgroundColor: char.themeColor,
                        }}
                      />
                    </div>
                    <span className="text-cream-muted tabular-nums w-4 text-right">{val}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ボタン群 */}
        <div className="space-y-2">
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-bg-border hover:border-gold hover:text-gold
                       text-cream py-3 px-4 text-sm font-dot text-center transition-colors"
          >
            ▶ Xでシェアする
          </a>
          <button
            onClick={() => {
              resetGame()
              router.push('/select')
            }}
            className="w-full border border-bg-border hover:border-cream-dim
                       text-cream-muted py-3 px-4 text-sm font-dot text-left transition-colors"
          >
            ▶ 別のキャラで遊ぶ
          </button>
          <Link href="/" className="block">
            <button
              className="w-full border border-bg-border hover:border-cream-muted
                         text-cream-muted py-3 px-4 text-sm font-dot text-left transition-colors"
            >
              ▶ タイトルへ戻る
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  )
}
