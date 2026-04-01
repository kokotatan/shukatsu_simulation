import type { Scenario } from './types'

// 林 ひかり ─ 文系B4・マーケター志望・でもミーハー就活もしたい
// テーマ：軸があることと、迷わないことは別の話

export const hikariScenario: Scenario = {
  charId: 'hikari',
  startSceneId: 'hikari_start',
  scenes: [
    {
      id: 'hikari_start',
      location: 'university',
      narrations: [
        '3月。ひかりの志望はマーケター。',
        '3年間ずっとそう思ってきた。',
        'SNS広告の分析が好きで、ゼミでも消費者行動を研究している。',
        '軸は、ある。',
        'でも今日、友達から一言言われた。',
      ],
      dialogs: [
        {
          speaker: '友達',
          line: '外資コンサル受けてみないの？ひかりなら絶対受かると思うんだけど',
        },
        {
          speaker: 'ひかり',
          line: 'え、コンサルは考えてなかったんだけど…',
          inner: '面白そう、とは思った。ちょっと気になる。',
        },
        {
          speaker: '友達',
          line: 'でも受けるだけ受けてみたら？就活の経験にもなるし',
        },
        {
          speaker: 'ひかり（心の声）',
          line: '「経験」か。まあ、そうとも言える。でもなんか…違う気もする。',
        },
      ],
      choices: [
        {
          label: 'コンサルも受けてみる',
          sub: '経験になると割り切って',
          nextSceneId: 'hikari_consult_path',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -5 }],
        },
        {
          label: 'マーケター一本に絞る',
          sub: '軸を守る',
          nextSceneId: 'hikari_focus_path',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
        {
          label: 'とりあえず説明会だけ行ってみる',
          sub: '決断は後回し',
          nextSceneId: 'hikari_info_session',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -3 }],
        },
      ],
    },

    {
      id: 'hikari_consult_path',
      location: 'company',
      narrations: [
        'コンサルのES。',
        'ケース問題。フェルミ推定。',
        '初めて見る種類の問題だった。',
        '「日本のコンビニの市場規模を推定せよ」',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: 'これ、マーケティングと全然違う。でも面白くはある。',
        },
      ],
      choices: [
        {
          label: 'ケース対策の本を買って本気で準備する',
          cost: 3000,
          nextSceneId: 'hikari_consult_interview',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: -8 }],
        },
        {
          label: 'そこまで本気になれない。やっぱりやめる',
          nextSceneId: 'hikari_focus_path',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'hikari_consult_interview',
      location: 'interview_room',
      narrations: ['コンサルの一次選考。グループディスカッション。'],
      dialogs: [
        {
          speaker: '面接官',
          line: '「コンビニ業界の10年後を分析して、新規事業を提案してください」',
          inner: '（このグループ、発言量に差が出てる。リードできる人材を探している）',
        },
        {
          speaker: 'ひかり',
          line: '（少し考えてから）まずデータで現状を整理して、その上で…',
          inner: 'あ、これマーケの考え方だ。でも、それを使っていいのかな。',
        },
      ],
      choices: [
        {
          label: 'マーケの知識で積極的にリードする',
          nextSceneId: 'hikari_consult_result',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '周りの意見を聞きながら着いていく',
          nextSceneId: 'hikari_consult_fail',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -5 }],
        },
      ],
    },

    {
      id: 'hikari_consult_result',
      location: 'phone',
      narrations: ['数日後、コンサルから連絡が来た。'],
      dialogs: [
        {
          speaker: '人事',
          line: '林さん、次の選考にご案内できることとなりました',
        },
        {
          speaker: 'ひかり（心の声）',
          line: '…通った。でも、なんか素直に喜べない。なんでだろう。',
        },
      ],
      choices: [
        {
          label: 'コンサルの選考を続ける',
          nextSceneId: 'hikari_axis_crisis',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -10 }],
        },
        {
          label: '正直自分に合わないと思い、辞退する',
          nextSceneId: 'hikari_focus_path',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'hikari_consult_fail',
      location: 'home',
      narrations: ['コンサルは落ちた。'],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: '…落ちた。でもなんか、ほっとしている自分がいる。なんでだろう。',
        },
      ],
      choices: [
        {
          label: '気持ちに素直にマーケターに絞る',
          nextSceneId: 'hikari_focus_path',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'hikari_info_session',
      location: 'company',
      narrations: [
        'コンサルの説明会に行った。',
        '会場は圧倒されるくらい綺麗なオフィスだった。',
        '「年収1000万を25歳で」という言葉が、スライドに出た。',
      ],
      dialogs: [
        {
          speaker: '社員（登壇者）',
          line: 'コンサルは、あらゆる業界のクライアントを支援できる。それが面白さです',
        },
        {
          speaker: 'ひかり（心の声）',
          line: '面白そうだ。でも…これって「面白そう」と「やりたい」は違う？',
        },
      ],
      choices: [
        {
          label: 'コンサルを本格的に受けることにする',
          nextSceneId: 'hikari_consult_path',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -5 }],
        },
        {
          label: '「面白そう」止まりだと気づいてやめる',
          nextSceneId: 'hikari_focus_path',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'hikari_focus_path',
      location: 'university',
      narrations: [
        'マーケターの求人を絞り込んだ。',
        '食品メーカー・化粧品・IT・EC。',
        '全部「マーケター」を募集している。でも仕事の中身は全然違う。',
        'ひかりは志望理由を書き始めた。',
      ],
      choices: [
        {
          label: '「消費者行動の研究をしてきたから」と書く',
          nextSceneId: 'hikari_interview_1',
          effects: [{ key: 'axis', delta: 8 }],
        },
        {
          label: '「SNS広告の分析が好きだから」と書く',
          nextSceneId: 'hikari_interview_1',
          effects: [{ key: 'axis', delta: 6 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'hikari_axis_crisis',
      location: 'cafe',
      narrations: [
        'コンサルの二次面接の前日。',
        'ひかりは急にわからなくなった。',
        '「私、コンサルで何がしたいんだっけ？」',
        '友達に「受けてみたら」と言われて、受けて、通って。',
        'でも志望動機を書こうとすると、手が止まる。',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: 'マーケターになりたかったのに。いつの間に軸が揺れてた？',
        },
      ],
      choices: [
        {
          label: '二次面接をキャンセルして、マーケに戻る',
          nextSceneId: 'hikari_focus_path',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
        {
          label: '「ここまで来たから」と受け続ける',
          nextSceneId: 'hikari_ending_c',
          effects: [{ key: 'stress', delta: 20 }, { key: 'axis', delta: -15 }],
        },
      ],
    },

    {
      id: 'hikari_interview_1',
      location: 'interview_room',
      narrations: ['マーケター採用の面接。'],
      dialogs: [
        {
          speaker: '面接官',
          line: 'なぜマーケターを志望しているんですか？',
          inner: '（この質問、みんな同じ答えが来る。何か違う答えが出てくるか見てみよう）',
        },
        {
          speaker: 'ひかり',
          line: '大学のゼミで消費者行動を研究してきました。「なぜ人は買うのか」を数字と心理で分析することが好きで、それを仕事にしたいと思っています',
        },
        {
          speaker: '面接官',
          line: '具体的にどういう分析をしてきましたか？',
          inner: '（この子は、ちゃんと自分の言葉で話している。面白い）',
        },
      ],
      choices: [
        {
          label: 'ゼミの研究内容を具体的に話す',
          nextSceneId: 'hikari_deep_talk',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '趣味のSNS分析の話をする',
          nextSceneId: 'hikari_hobby_talk',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'hikari_deep_talk',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: 'ひかり',
          line: 'コロナ禍での食品購買行動の変化を分析しました。「安心・安全」への訴求が購買を左右することをデータで示せた時は、すごく面白かったです',
        },
        {
          speaker: '面接官',
          line: 'それをどうマーケティングに活かせると思いますか？',
          inner: '（研究から実務への接続が見える。この子は採れるかもしれない）',
        },
      ],
      choices: [
        {
          label: '具体的に答える',
          nextSceneId: 'hikari_ending_a',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'hikari_hobby_talk',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: 'ひかり',
          line: '個人的にもSNS広告のABテストを趣味で分析していて、どのコピーがCTRに影響するかを追っています。最近だと、感情語を入れると3倍くらい変わるケースを見つけました',
        },
        {
          speaker: '面接官',
          line: 'え、趣味でやってるんですか。面白い',
          inner: '（仕事と趣味の境界がない。これは本物だ）',
        },
      ],
      choices: [
        {
          label: '自分の分析事例をもっと話す',
          nextSceneId: 'hikari_ending_a',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'hikari_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '軸のある人',
      narrations: [
        '内定が出た。',
        '食品メーカーのマーケター職。',
        'ひかりは喜んだ。今度は素直に。',
        '途中でコンサルに揺らいだこともあった。',
        'でも揺らいだからこそ、「やっぱりマーケターだ」という確信が固まった。',
        '軸があることと、迷わないことは別の話。',
        '迷って、戻って来た軸は、もう揺れない。',
      ],
      choices: [],
    },

    {
      id: 'hikari_ending_c',
      location: 'home',
      isEnding: true,
      endingId: 'C',
      endingTitle: 'コンパスなしの旅',
      narrations: [
        'コンサルの二次面接を受けた。',
        '「なぜコンサルを？」という質問に、答えられなかった。',
        '落ちた。',
        'マーケターの選考も、軸がぶれて面接でうまく話せなかった。',
        'いくつか落ちた。',
        'ひかりは3月末に、改めてノートを開いた。',
        '「私が、本当にやりたいことは何だったっけ」',
        '最初のページに、3年前の自分の字があった。',
        '「マーケターになりたい」',
      ],
      choices: [],
    },
  ],
}
