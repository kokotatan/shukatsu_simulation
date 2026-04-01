import type { Scenario } from './types'

// 橘 翔太 ─ 理系M1・活動量だけ多い系
// テーマ：経験の量と深さは別物

export const shotaScenario: Scenario = {
  charId: 'shota',
  startSceneId: 'shota_start',
  scenes: [
    {
      id: 'shota_start',
      location: 'university',
      narrations: [
        '3月。面接解禁。',
        '翔太はESを仕上げながら、過去の活動を並べていた。',
        '学祭実行委員・ハッカソン・インターン2社・ボランティア3回・ゼミ発表。',
        '数えたら12個ある。',
        '友達に見せたら「すごいな」と言われた。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: 'これだけあれば、自己PRには困らないはずだ。',
        },
      ],
      choices: [
        {
          label: 'ESに12個の活動を全部書く',
          sub: 'とにかく多く見せる',
          nextSceneId: 'shota_es_many',
          effects: [{ key: 'stress', delta: 3 }, { key: 'axis', delta: -3 }],
        },
        {
          label: '一番インパクトがある活動だけを深掘りする',
          sub: '量より質で勝負する',
          nextSceneId: 'shota_es_depth',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'shota_es_many',
      location: 'university',
      narrations: [
        'ESを書き終えた。活動が多すぎて、一つ一つが3行になってしまった。',
        'なんか薄い。',
        'でも数は多い。これでいこう。',
      ],
      choices: [
        {
          label: 'そのまま提出する',
          nextSceneId: 'shota_interview_1',
          effects: [{ key: 'stress', delta: 3 }, { key: 'axis', delta: -5 }],
        },
        {
          label: 'やっぱり絞り込む',
          nextSceneId: 'shota_es_depth',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_es_depth',
      location: 'university',
      narrations: [
        'どの活動を書くか考えた。',
        'ハッカソン。でも…正直、アイデアは他の人が出した。',
        'インターン。でも…指示されたことをやっただけだ。',
        '学祭。でも…実行委員と言っても、いつも誰かの補佐だった。',
        '翔太の手が止まった。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: '…俺、何もしてないじゃないか。',
        },
      ],
      choices: [
        {
          label: '少し誇張して「主体的にやった」と書く',
          danger: true,
          nextSceneId: 'shota_lie_path',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -8 }],
        },
        {
          label: '「補佐をした」と正直に書いて、そこから学んだことを深める',
          nextSceneId: 'shota_honest_path',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_lie_path',
      location: 'university',
      narrations: [
        '「主体的にプロジェクトをリード」と書いた。',
        '嘘じゃない…ような気もする。',
        '少し引っ張っただけ、だから。',
      ],
      choices: [
        {
          label: '面接に臨む',
          nextSceneId: 'shota_interview_1',
          effects: [{ key: 'stress', delta: 8 }],
        },
      ],
    },

    {
      id: 'shota_honest_path',
      location: 'university',
      narrations: [
        '「サポートとして参加し、実行力の高い人の動き方を間近で学んだ」と書いた。',
        '弱く見えるかもしれない。でも、嘘じゃない。',
      ],
      choices: [
        {
          label: '面接に臨む',
          nextSceneId: 'shota_interview_1',
          effects: [{ key: 'axis', delta: 3 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'shota_interview_1',
      location: 'interview_room',
      narrations: [
        '一次面接。',
        '面接官は30代の若い男性。',
        '「翔太さん、ESを拝見しました。色々な活動をされていますね」',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: '例えばこのハッカソン、あなたはチームの中でどんな役割でしたか？',
          inner: '（活動の数が多い割に、一個一個が薄い。実際どこまでやったのか確認したい）',
        },
        {
          speaker: '翔太',
          line: 'えっと、アイデア出しとプレゼン担当でした',
          inner: 'アイデアは主に渡辺くんが出した。俺はそれに乗っかったんだよな。',
        },
        {
          speaker: '面接官',
          line: 'そのアイデア、具体的にどんな発想から来たんですか？あなたが提案した部分は？',
          inner: '（そこを聞きたかった。誰でも「参加した」とは言える）',
        },
      ],
      choices: [
        {
          label: '「チームで出し合いました」と答える',
          sub: '正直に言う',
          nextSceneId: 'shota_interview_honest',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '少し盛って「自分が〇〇を提案した」と答える',
          danger: true,
          nextSceneId: 'shota_interview_caught',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: -10 }],
        },
        {
          label: '「それより私が学んだのは…」と話を切り替える',
          nextSceneId: 'shota_interview_pivot',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'shota_interview_honest',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '翔太',
          line: '正直に言うと、アイデアはチームメンバーが中心で出してくれました。私は実装とプレゼンの資料まとめを担当しました',
        },
        {
          speaker: '面接官',
          line: 'ありがとうございます。その実装で、特に苦労したことは？',
          inner: '（正直に言えた。これは悪くない。実装力があるならそっちで評価できる）',
        },
        {
          speaker: '翔太',
          line: 'APIの繋ぎ込みで詰まって、結局徹夜になりました。チームに迷惑をかけましたが、最終的には動かせました',
        },
      ],
      choices: [
        {
          label: 'そのまま面接を続ける',
          nextSceneId: 'shota_deep_question',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_interview_caught',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '翔太',
          line: '自分がUIのアイデアを出しました。ユーザー目線で…',
        },
        {
          speaker: '面接官',
          line: 'なるほど。ちなみにそのUIのどの部分を具体的に？',
          inner: '（深掘りしてみよう。ちょっとふわっとした答えだった）',
        },
        {
          speaker: '翔太',
          line: '…えっと、配色とか、レイアウトとか…',
          inner: 'やばい。これ渡辺くんが決めたやつだ。',
        },
        {
          speaker: '面接官',
          line: '（静かに）そうですか。',
          inner: '（あ、この子、盛ってるな。次の質問で確認しよう）',
        },
      ],
      choices: [
        {
          label: '「すみません、少し言い過ぎました」と正直に言い直す',
          nextSceneId: 'shota_interview_recovery',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 5 }],
        },
        {
          label: 'そのまま押し通す',
          nextSceneId: 'shota_interview_fail',
          effects: [{ key: 'stress', delta: 20 }, { key: 'axis', delta: -15 }],
        },
      ],
    },

    {
      id: 'shota_interview_recovery',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '翔太',
          line: 'すみません、正確には私はサポートで、アイデア出しはチームメンバーが主体でした。私が自分でやったのは実装部分です',
        },
        {
          speaker: '面接官',
          inner: '（言い直せる誠実さはある。これは評価できる。ただ、何をしたかがまだ薄い）',
          line: 'わかりました。その実装、もう少し教えてもらえますか',
        },
      ],
      choices: [
        {
          label: '実装の具体的な話をする',
          nextSceneId: 'shota_deep_question',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_interview_fail',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '面接官',
          line: 'ちなみに、使ったツールは何ですか？',
          inner: '（ここで答えられなければ確定だな）',
        },
        {
          speaker: '翔太',
          line: '…えっと、Figmaとか…',
        },
        {
          speaker: '面接官',
          line: '（少し間を置いて）ありがとうございました。',
          inner: '（うん、やっぱりやってない。次の人呼ぼう）',
        },
      ],
      onEnter: [{ key: 'stress', delta: 20 }],
      choices: [
        {
          label: '反省して次に臨む',
          nextSceneId: 'shota_reflection',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: -10 }],
        },
      ],
    },

    {
      id: 'shota_interview_pivot',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '翔太',
          line: 'アイデア出しより、私がそこで学んだのは「チームで進める難しさ」です。自分の意見を持ちながら、全体の方向性を見失わないこと',
          inner: 'これは本当のことだ。言い訳じゃない、はず。',
        },
        {
          speaker: '面接官',
          line: '（少し間を置いて）で、あなたが実際にやったことは何ですか？',
          inner: '（逃げた。ちゃんと聞こう）',
        },
      ],
      choices: [
        {
          label: '正直に「補佐役でした」と言う',
          nextSceneId: 'shota_interview_honest',
          effects: [{ key: 'axis', delta: 8 }],
        },
        {
          label: 'また話を広げようとする',
          nextSceneId: 'shota_interview_fail',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: -10 }],
        },
      ],
    },

    {
      id: 'shota_deep_question',
      location: 'interview_room',
      narrations: ['面接官が少し表情を変えた。'],
      dialogs: [
        {
          speaker: '面接官',
          line: '翔太さん、あなたが今まで「自分で」判断して動いた経験って、正直どれくらいありますか？',
          inner: '（核心を聞こう。活動量はある。でも全部、誰かについていっただけじゃないか）',
        },
        {
          speaker: '翔太',
          line: '……',
          inner: '長い沈黙。12個の活動が頭を流れた。学祭は先輩の指示で動いた。ハッカソンは渡辺くんが引っ張った。インターンは上司の指示通りにやった。ボランティアは事務局のスケジュール通りに動いた。俺は…ずっと誰かの後ろにいた。',
        },
      ],
      choices: [
        {
          label: '「正直、自分で引っ張った経験は少ないです」と言う',
          sub: 'そこから気づいたことを話す',
          nextSceneId: 'shota_ending_a',
          effects: [{ key: 'axis', delta: 20 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '「インターンでの〇〇はそうだったと思います」と絞り出す',
          nextSceneId: 'shota_ending_b',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '「全部自分で動いてきました」と言い張る',
          danger: true,
          nextSceneId: 'shota_ending_d',
          effects: [{ key: 'stress', delta: 20 }, { key: 'axis', delta: -20 }],
        },
      ],
    },

    {
      id: 'shota_reflection',
      location: 'cafe',
      narrations: [
        '不合格の通知が来た。',
        'カフェで、翔太は自分の過去の活動を一枚の紙に書き出した。',
        '全部書き終えて、一つ一つに問いかけた。',
        '「これ、俺が動かした？それとも、誰かについていっただけ？」',
        '正直に答えていったら、「自分で動かした」と言えるのはほぼ0だった。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: '経験の量と深さは別物だった。俺は、浅いまま広げていただけだった。',
        },
      ],
      choices: [
        {
          label: '次の面接に向けて向き合い直す',
          nextSceneId: 'shota_deep_question',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_ending_a',
      location: 'interview_room',
      isEnding: true,
      endingId: 'A',
      endingTitle: '深さを知った日',
      narrations: [
        '「正直、ほとんど誰かの後ろにいました」',
        '面接室に、静寂が流れた。',
        '面接官はゆっくりとペンを置いた。',
        '「正直に言えましたね」',
        '内定は、出なかった。でも面接官は最後にこう言った。',
        '「翔太さん、気づいたなら次はそこから始められますよ」',
        '翔太は別の会社で内定をもらった。活動の数より、その一言を面接で話したことで。',
        '経験の量と深さは別物だ。でも、気づけた人間は、次の深さに向かえる。',
      ],
      choices: [],
    },

    {
      id: 'shota_ending_b',
      location: 'home',
      isEnding: true,
      endingId: 'B',
      endingTitle: '一個の本物',
      narrations: [
        'インターンでの一件を、翔太はなんとか話せた。',
        '「あの時だけは、自分で判断した」',
        '内定が出た。あの一個の経験が、ちゃんと伝わった。',
        '12個より、1個の本物の方が強かった。',
      ],
      choices: [],
    },

    {
      id: 'shota_ending_d',
      location: 'home',
      isEnding: true,
      endingId: 'D',
      endingTitle: 'ハリボテの王国',
      narrations: [
        '「全部自分で動きました」と言い張った。',
        '面接官は最後まで無表情だった。',
        '不合格のメールが翌日来た。',
        '翔太は次の面接の準備をしながら、同じESを使い回した。',
        '活動は12個。でもその重さは、まだ変わっていない。',
      ],
      choices: [],
    },
  ],
}
