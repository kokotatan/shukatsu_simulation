import type { Scenario } from './types'

// 西村 大輝 ─ 理系M1・スタートアップ経験あり・大手で勝負したい
// テーマ：スタートアップ経験者が大手を選ぶことへの、周囲の理解のなさ

export const daikiScenario: Scenario = {
  charId: 'daiki',
  startSceneId: 'daiki_start',
  scenes: [
    {
      id: 'daiki_start',
      location: 'university',
      narrations: [
        '大輝のESは、書くことに困らない。',
        '学部時代のスタートアップ。プロダクト開発・営業・採用まで経験した。',
        'でも志望先は大手メーカー。周りには理解されない。',
      ],
      dialogs: [
        {
          speaker: '同期（就活仲間）',
          line: 'え、スタートアップ経験あるのに、なんで大手行くの？もったいなくない？',
          inner: '（いや、本当に意味わからん。せっかくの経験が死ぬやろ）',
        },
        {
          speaker: '大輝',
          line: 'スケールしたプロダクトで勝負してみたいんだよ。大きいフィールドがあっていい',
          inner: '何度目だろう、この説明。',
        },
      ],
      choices: [
        {
          label: '「なぜ大手か」の説明を磨いておく',
          sub: '面接でも聞かれると想定する',
          nextSceneId: 'daiki_prep_answer',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '「なんでスタートアップに戻らないの？」に慣れていく',
          sub: 'この質問はどこでも来る',
          nextSceneId: 'daiki_interview_1',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'daiki_prep_answer',
      location: 'cafe',
      narrations: [
        '大輝は紙に書いた。「なぜ大手か」',
        '・100万人以上が使うプロダクトに携わりたい',
        '・スタートアップで学んだスピード感を、大企業に持ち込みたい',
        '・リソースが揃った環境で「技術の深さ」を追求したい',
        'どれも本当のことだ。でも面接官には刺さるのか？',
      ],
      choices: [
        {
          label: '面接に臨む',
          nextSceneId: 'daiki_interview_1',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'daiki_interview_1',
      location: 'interview_room',
      narrations: ['一次面接。'],
      dialogs: [
        {
          speaker: '面接官',
          line: '経歴を拝見しました。スタートアップでかなりの経験をされていますね',
          inner: '（これは即戦力になる。でも、なんで大手に来るんだろう。何か問題があったのか？）',
        },
        {
          speaker: '大輝',
          line: 'はい。プロダクト開発から採用まで幅広く経験させてもらいました',
        },
        {
          speaker: '面接官',
          line: 'なぜ弊社のような大手企業を志望されているんですか？スタートアップの方が合ってそうですが',
          inner: '（この質問、必ず聞かないといけない。うちに本気で来たいのか確認したい）',
        },
      ],
      choices: [
        {
          label: '「スケールしたプロダクトで勝負したい」と伝える',
          nextSceneId: 'daiki_honest_answer',
          effects: [{ key: 'axis', delta: 8 }],
        },
        {
          label: '「スタートアップで限界を感じました」と言う',
          sub: '嘘だが、印象が良さそう',
          danger: true,
          nextSceneId: 'daiki_lie_answer',
          effects: [{ key: 'stress', delta: 12 }, { key: 'axis', delta: -10 }],
        },
        {
          label: '逆に「なぜ大手はスタートアップ経験を敬遠するんですか？」と聞く',
          danger: true,
          nextSceneId: 'daiki_counter_question',
          effects: [{ key: 'axis', delta: 15 }, { key: 'stress', delta: 8 }],
        },
      ],
    },

    {
      id: 'daiki_honest_answer',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '大輝',
          line: 'スタートアップは0→1が得意な場所です。私はその経験を活かして、1→100の部分、つまり大きな組織で規模を作る側に挑戦したいんです。御社のプロダクトは国内シェアで圧倒的で、そのフィールドで勝負したい',
        },
        {
          speaker: '面接官',
          line: 'なるほど。でも大手の文化に慣れるのは時間がかかりますよ、特に決裁のスピードが',
          inner: '（正直な答えだ。スタートアップ上がりのギャップで辞める人も多いが、この人はどうだろう）',
        },
        {
          speaker: '大輝',
          line: 'それは正直、覚悟しています。でも、それも経験だと思っています',
        },
      ],
      choices: [
        {
          label: '面接を続ける',
          nextSceneId: 'daiki_second_question',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'daiki_lie_answer',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '大輝',
          line: 'スタートアップでは成長に限界を感じました。安定した環境で専門性を磨きたいと思っています',
          inner: '嘘だ。全然限界じゃなかった。ただ、大きいフィールドが見たかっただけ。',
        },
        {
          speaker: '面接官',
          line: '限界とは、具体的にどんな点でしょうか？',
          inner: '（なんか…本音じゃないな。もう少し掘ってみよう）',
        },
        {
          speaker: '大輝',
          line: '…えっと、リソース面とか、組織的な成長とか…',
        },
        {
          speaker: '面接官',
          inner: '（ふわっとした答えだな。これは信頼できるか？）',
          line: 'なるほど。',
        },
      ],
      choices: [
        {
          label: '正直に言い直す',
          nextSceneId: 'daiki_honest_answer',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 5 }],
        },
        {
          label: 'そのまま続ける',
          nextSceneId: 'daiki_second_question',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -5 }],
        },
      ],
    },

    {
      id: 'daiki_counter_question',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '大輝',
          line: '少し逆に聞いてもいいですか。スタートアップ経験者を採用する際、大手企業はどういう点を懸念することが多いんでしょうか',
        },
        {
          speaker: '面接官',
          line: '…（予想外の質問に少し驚いた顔）えっと、文化的なフィット感ですかね',
          inner: '（攻めてくるな。でも、嫌いじゃない。自分を分かっていない人間ではなさそうだ）',
        },
        {
          speaker: '大輝',
          line: 'そうですよね。私もそれは想定していて、だからこそ大手の中でどう動くかのイメージを持って来ています',
        },
      ],
      choices: [
        {
          label: '具体的なイメージを話す',
          nextSceneId: 'daiki_second_question',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'daiki_second_question',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '面接官',
          line: 'スタートアップ経験の中で、失敗したことって何かありますか？',
          inner: '（ここを聞くと本音が出る。成功話ばかりの候補者は信用しにくい）',
        },
        {
          speaker: '大輝',
          line: '採用を担当した時、スキルだけで採用してしまった人が3ヶ月で辞めました。カルチャーフィットを見ていなかった失敗です',
          inner: 'これは本当の話。今でもそのことが頭に残っている。',
        },
        {
          speaker: '面接官',
          inner: '（具体的だ。こういう人は信用できる）',
          line: 'そこから何を学びましたか？',
        },
      ],
      choices: [
        {
          label: '「スキルより文化適合を先に見るようになった」と話す',
          nextSceneId: 'daiki_ending_a',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '「スピード感と誠実さのバランスを学んだ」と話す',
          nextSceneId: 'daiki_ending_b',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'daiki_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '大きいフィールドへ',
      narrations: [
        '内定が出た。',
        '「スタートアップに戻らないの？」という質問は、もうどうでもよくなった。',
        '大輝は自分の答えを持っている。',
        'なぜ大手か。それは、大きいフィールドで失敗するためだ。',
        'スタートアップで学んだことを、もっとでかい場所でぶつけてみたかった。',
        'それだけだ。',
      ],
      choices: [],
    },

    {
      id: 'daiki_ending_b',
      location: 'home',
      isEnding: true,
      endingId: 'B',
      endingTitle: '自分の言葉で',
      narrations: [
        '内定が出た。',
        '「なんでスタートアップに戻らないの？」と就活中に30回は聞かれた気がする。',
        'その度に同じ説明をしてきた。',
        'でも今はもう、疲れていない。',
        'その質問に答える度に、自分の軸がはっきりしてきたから。',
      ],
      choices: [],
    },
  ],
}
