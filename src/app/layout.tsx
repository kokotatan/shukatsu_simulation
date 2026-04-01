import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '#就活というゲーム',
  description: '就活はゲームだ。でもそのルール、誰が決めた？',
  openGraph: {
    title: '#就活というゲーム',
    description: '就活はゲームだ。でもそのルール、誰が決めた？',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-bg text-cream font-dot antialiased scanlines">
        {children}
      </body>
    </html>
  )
}
