// 共通型定義

export type CharacterId =
  | 'misaki'
  | 'shota'
  | 'aoi'
  | 'takumi'
  | 'kenta'
  | 'ren'
  | 'sakura'
  | 'yuto'
  | 'daiki'
  | 'hikari'

export type LocationId =
  | 'home'
  | 'university'
  | 'company'
  | 'interview_room'
  | 'train'
  | 'cafe'
  | 'phone'
  | 'job_fair'
  | 'online'
  | 'lab'
  | 'locker_room'

export type EmotionKey = 'stress' | 'joy' | 'anxiety' | 'absurdity' | 'void'

export type StatKey = 'stress' | 'mental' | 'axis' | 'money'

export type EndingId = 'A' | 'B' | 'C' | 'D'

export type GameStats = {
  stress: number   // 0-100 高いほどやばい
  mental: number   // 0-100 高いほど安定
  axis: number     // 0-100 高いほど自分の軸がある
  money: number    // 残高（円）
}

export type Character = {
  id: CharacterId
  name: string
  nameKana: string
  age: number
  university: string
  faculty: string
  tagline: string
  description: string
  themeColor: string
  initialStats: GameStats
  tags: string[]
  theme: string
  portrait?: string
}

export type EmotionState = {
  stress: number
  joy: number
  anxiety: number
  absurdity: number
  void: number
}

export type GameRecord = {
  charId: CharacterId
  endingId: EndingId
  offerCount: number
  rejectCount: number
  finalAxis: string
  emotionLog: EmotionState
  playedAt: string
}
