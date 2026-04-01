'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useGameStore } from '@/store/gameStore'

export default function TitlePage() {
  const records = useGameStore((s) => s.records)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* 背景グリッド */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-sm w-full">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <p className="text-cream-muted text-xs tracking-widest">Kotaro Design Lab. presents</p>
          <h1 className="text-2xl md:text-3xl text-gold font-dot leading-snug">
            #就活というゲーム
          </h1>
          <p className="text-cream-dim text-xs md:text-sm font-serif-jp leading-relaxed">
            就活はゲームだ。<br />
            でもそのルール、誰が決めた？
          </p>
        </motion.div>

        {/* ボーダーライン */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full h-px bg-bg-border"
        />

        {/* メニュー */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full space-y-2"
        >
          <Link href="/select" className="block">
            <button className="w-full border border-bg-border hover:border-gold hover:text-gold
                               text-cream py-3 px-4 text-sm transition-colors duration-150 font-dot text-left">
              ▶ はじめる
            </button>
          </Link>

          {records.length > 0 && (
            <Link href="/select" className="block">
              <button className="w-full border border-bg-border hover:border-cream-dim
                                 text-cream-muted py-3 px-4 text-sm transition-colors duration-150 font-dot text-left">
                ▶ また別のキャラで遊ぶ
                <span className="ml-2 text-xs text-cream-muted">（{records.length}回プレイ済み）</span>
              </button>
            </Link>
          )}
        </motion.div>

        {/* フッター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center space-y-1"
        >
          <p className="text-cream-muted text-xs">
            10人の就活生。それぞれの葛藤。
          </p>
          <p className="text-cream-muted text-xs opacity-50">
            プレイ時間目安：15〜20分 / キャラ
          </p>
        </motion.div>
      </div>
    </main>
  )
}
