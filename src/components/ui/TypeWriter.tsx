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
  const onCompleteRef = useRef(onComplete)

  // onComplete が変わっても interval をリセットしない
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        index++
        setDisplayed(text.slice(0, index))
      } else {
        clearInterval(interval)
        setDone(true)
        onCompleteRef.current?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed]) // onComplete を外してリセットを防ぐ

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="animate-blink text-gold">▮</span>}
    </span>
  )
}
