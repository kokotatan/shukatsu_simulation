import type { LocationId, StatKey, EndingId, CharacterId } from '@/types'

export type StatEffect = {
  key: StatKey
  delta: number
}

export type Dialog = {
  speaker: string
  line: string
  inner?: string    // このセリフを言いながら心の中で思っていること
}

export type Choice = {
  label: string
  sub?: string
  danger?: boolean
  cost?: number          // 金額コスト（moneyから引かれる）
  nextSceneId: string
  effects: StatEffect[]
}

export type Scene = {
  id: string
  location: LocationId
  narrations: string[]   // 空配列 [] も可
  dialogs?: Dialog[]
  interviewerThought?: string  // 面接官の本音（プレイヤーには見える、キャラには見えない）
  choices: Choice[]
  onEnter?: StatEffect[]       // シーン進入時の自動効果
  isEnding?: boolean
  endingId?: EndingId
  endingTitle?: string
  endingSummary?: string
}

export type Scenario = {
  charId: CharacterId
  scenes: Scene[]
  startSceneId: string
}
