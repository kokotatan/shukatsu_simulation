'use client'

import { useState, useEffect, useRef } from 'react'

type Props = {
  text: string
  speed?: number
  onComplete?: () => void
  className?: string
}

export default function TypeWriter({ text, speed = 40, onComplete, className }: Props) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)
  const textRef = useRef(text)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    indexRef.current = 0
    textRef.current = text

    const interval = setInterval(() => {
      if (indexRef.current < textRef.current.length) {
        const next = textRef.current.slice(0, indexRef.current + 1)
        setDisplayed(next)
        indexRef.current++
      } else {
        clearInterval(interval)
        setDone(true)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, onComplete])

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="animate-blink text-gold">▮</span>
      )}
    </span>
  )
}
