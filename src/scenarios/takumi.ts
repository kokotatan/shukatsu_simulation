import type { Scenario } from './types'

export const takumiScenario: Scenario = {
  charId: 'takumi',
  startSceneId: 'takumi_oct_start',
  scenes: [
    // ────────────────────────────────────────────────
    // 10月：体育会の「正解ルート」
    // ────────────────────────────────────────────────
    {
      id: 'takumi_oct_start',
      location: 'university',
      narrations: [
        '10月。明治大学ラクロス部主将・村田拓海は、グラウンドから帰る途中だった。',
        '今年度全国大会ベスト16。50人のチームを2年間引っ張ってきた。',
        '就活は「次のゲーム」だ。そう思っていた。',
      ],
      dialogs: [
        {
          speaker: '体育会OB・安田（4年前に大手商社内定）',
          line: '拓海、就活そろそろ本腰入れろよ。体育会は最強だから。うちの代、書類通過率9割だったわ。ESのテンプレ送るから使え。',
        },
        {
          speaker: '拓海',
          line: '9割！？ありがとうございます、ぜひください。',
          inner: 'やばい、これは楽勝なんじゃないか。ラクロス部主将、全国大会。このスペック使わない手はない。',
        },
      ],
      choices: [
        {
          label: 'テンプレESを受け取る',
          sub: '「情報は使うものだ」。迷わず受け取る',
          nextSceneId: 'takumi_oct_template',
          effects: [{ key: 'stress', delta: -5 }, { key: 'axis', delta: -5 }],
        },
        {
          label: '「参考程度に見せてもらう」',
          sub: 'テンプレは参考程度に、自分で書こうと思う',
          nextSceneId: 'takumi_oct_template',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },
    {
      id: 'takumi_oct_template',
      location: 'home',
      narrations: [
        'テンプレESが届いた。A4に整然と並んだ文字列。',
        '「ガクチカ：ラクロス部主将として50名のチームをまとめ、全国大会出場を目指す中で〜」',
        '拓海は読んで、思った。これ、俺のことじゃないか。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: '「チームの方向性を統一するために、週1の個別面談を実施し……」あ、これ俺もやった。ほぼそのまま使えるじゃないか。',
          inner: 'なんか出来過ぎてる。でも事実は事実だし、言葉を借りるくらいいいだろう。',
        },
      ],
      choices: [
        {
          label: 'テンプレをベースにESを書き上げる',
          nextSceneId: 'takumi_nov_es_production',
          effects: [{ key: 'stress', delta: -5 }, { key: 'axis', delta: -8 }],
        },
        {
          label: 'テンプレを参考にしながら、自分のエピソードを掘り起こす',
          nextSceneId: 'takumi_nov_es_production',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 11月：書類量産、調子に乗る
    // ────────────────────────────────────────────────
    {
      id: 'takumi_nov_es_production',
      location: 'home',
      narrations: [
        '11月。ES量産期。',
        '「ガクチカ：ラクロス部主将として50名のチームをまとめ、全国大会出場を〜」',
        '拓海はコピーアンドペーストを繰り返した。会社名だけ変えて。',
        '大手商社、メガバンク、総合商社、メーカー。10社送った。',
        '結果：書類通過8社。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: 'やばい、マジで書類通過しまくってる。OBの言う通りだ。体育会無双。',
          inner: '正直、ES書くのに2時間しかかかってない。これは楽勝かもしれない。',
        },
        {
          speaker: '同じラクロス部の後輩',
          line: '先輩、どこ受けてるんですか？全部通ってるって聞きました。',
        },
        {
          speaker: '拓海',
          line: 'ははは、まあな。でも面接からが本番だから。',
          inner: '面接……そうだな。面接で何を話すかは、まあなんとかなるだろう。',
        },
      ],
      choices: [
        {
          label: 'OB訪問をして面接対策を聞く',
          nextSceneId: 'takumi_dec_ob',
          effects: [],
        },
        {
          label: '面接は自分のコミュ力で乗り切れると思っている',
          nextSceneId: 'takumi_dec_ob',
          effects: [{ key: 'axis', delta: -5 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 12月：OB訪問、深掘りの予兆
    // ────────────────────────────────────────────────
    {
      id: 'takumi_dec_ob',
      location: 'cafe',
      narrations: [
        '12月。OB訪問。安田先輩と渋谷のカフェ。',
      ],
      dialogs: [
        {
          speaker: '安田先輩',
          line: '拓海、面接で一番きついのは「深掘り」だ。「チームをまとめた」って言ったあとに、「具体的に何を変えたんですか」「その時のチームの問題点は？」ってすぐ来る。用意しておけ。',
        },
        {
          speaker: '拓海',
          line: '深掘り……ですか。具体的なエピソードってことですよね。えーと……』',
          inner: '「チームをまとめた」エピソード……。あるはずなんだけど、なんか出てこない。なんでだ？',
        },
        {
          speaker: '安田先輩',
          line: '「個別面談を週1やった」は全員言うから、もっと具体的に。「A選手とB選手がもめた時にどう解決したか」とか。ないか？',
        },
        {
          speaker: '拓海',
          line: 'もめた……あ、ありましたよ、夏の合宿で。',
          inner: 'あれは、俺が解決したんだっけ？副将の田中が間に入って話をまとめてたような……。俺は何してたんだ？',
        },
      ],
      choices: [
        {
          label: '「夏の合宿のエピソード」をそのまま使う準備をする',
          nextSceneId: 'takumi_dec_doubt',
          effects: [{ key: 'axis', delta: -3 }],
        },
        {
          label: 'エピソードを整理するために記憶を掘り返してみる',
          nextSceneId: 'takumi_dec_doubt',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },
    {
      id: 'takumi_dec_doubt',
      location: 'locker_room',
      narrations: [
        '部活の後。ロッカールームで一人になる。',
        '「主将として50人をまとめた」。何度もESに書いた言葉。',
        'でも、具体的に「何をまとめたか」を考えると、言葉が出てこない。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: '……俺、本当にチームをまとめてたのか？',
          inner: '実際は田中が動いてたし、3年の石井が問題をつぶしてたし、俺は……号令をかけてただけか？いや、それが主将の仕事だろう。でも「まとめた」って言うほどのことを、俺はやってたか？',
        },
      ],
      choices: [
        {
          label: '「まあ、主将だったのは事実だし」と考えるのをやめる',
          nextSceneId: 'takumi_jan_prep',
          effects: [{ key: 'axis', delta: -5 }, { key: 'stress', delta: -3 }],
        },
        {
          label: '「本当に俺がやったことは何か」を考え続ける',
          nextSceneId: 'takumi_jan_prep',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 8 }, { key: 'mental', delta: -5 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 1月：面接対策、答えが出ない
    // ────────────────────────────────────────────────
    {
      id: 'takumi_jan_prep',
      location: 'home',
      narrations: [
        '1月。友人と面接練習をした。',
        '「強みを教えてください」「リーダーシップがあります」。スムーズ。',
        '「チームワーク以外に、何か強みはありますか？」',
        '　',
        '5秒。',
      ],
      dialogs: [
        {
          speaker: '練習相手の友人・本田',
          line: '……拓海、止まってるぞ。',
        },
        {
          speaker: '拓海',
          line: 'あ、ごめん。えーと……。',
          inner: '何もない。本当に何もない。チームワーク以外に俺が言えることって何だ。ラクロスしかしてこなかった。バイトも短期のやつだけ。勉強はそこそこ。俺って、チームワーク以外、何者でもない？',
        },
        {
          speaker: '本田',
          line: '「継続力」とかは？毎日練習してたじゃん。',
        },
        {
          speaker: '拓海',
          line: '……それしかないか。',
          inner: '「継続力」。それって誰でも言えるんじゃないか。',
        },
      ],
      choices: [
        {
          label: '「継続力」を強みとして準備する',
          nextSceneId: 'takumi_mar_first',
          effects: [{ key: 'axis', delta: -3 }],
        },
        {
          label: '「本当の強みは何か」をもっと突き詰める',
          nextSceneId: 'takumi_jan_dig',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 5 }],
        },
      ],
    },
    {
      id: 'takumi_jan_dig',
      location: 'home',
      narrations: [
        '深夜。拓海はラクロス部の練習日誌を引っ張り出した。',
        '2年分のノート。試合の記録。選手の名前。怪我の記録。もめ事の記録。',
        '「夏合宿、2日目。Aチームにモチベーションの差。主将として話を聞いた。でも解決策はわからなかった。田中に相談した」。',
        '自分の字で書いてある。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: '……田中に相談した、か。',
          inner: '俺は答えを出せなかった。でも「誰かに聞いて解決しようとした」。それは……「まとめた」とは違うけど、「諦めなかった」ってことじゃないか。',
        },
      ],
      choices: [
        {
          label: '「諦めなかった主将」という角度でエピソードを整理する',
          nextSceneId: 'takumi_mar_first',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 3月：最初の面接、テンプレで乗り切るが
    // ────────────────────────────────────────────────
    {
      id: 'takumi_mar_first',
      location: 'interview_room',
      narrations: [
        '3月。解禁初日。大手メーカーの1次面接。',
        '圧迫でも何でもない、和やかな雰囲気の2人面接。',
        '拓海は得意の笑顔で入室した。',
      ],
      dialogs: [
        {
          speaker: '面接官（30代、穏やか）',
          line: 'ガクチカを教えてください。',
        },
        {
          speaker: '拓海',
          line: 'はい。私はラクロス部で主将を務め、50名のチームをまとめてきました。チームの方向性を統一するために、週1で個別面談を実施し……',
          inner: '完璧。流暢に言えてる。練習通り。',
        },
        {
          speaker: '面接官',
          line: '（メモを取りながら）なるほど。ありがとうございます。',
          inner: 'よく整理されてる。体育会はみんなこのパターンだな。通過は通過だが……。',
        },
      ],
      interviewerThought: '流暢すぎて少し気になる。でも1次だし、通過させよう。2次でちゃんと見る。',
      choices: [
        {
          label: '面接が終わり、手応えを感じる',
          nextSceneId: 'takumi_mar_pass',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },
    {
      id: 'takumi_mar_pass',
      location: 'phone',
      narrations: [
        '1次通過。また通過。また通過。',
        '3月中に5社通過。調子が戻ってきた。',
        'でも4社目の2次面接で、違う空気に当たった。',
      ],
      choices: [
        {
          label: '2次面接へ',
          nextSceneId: 'takumi_apr_second',
          effects: [{ key: 'stress', delta: 5 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 4月：2次面接で崩れる
    // ────────────────────────────────────────────────
    {
      id: 'takumi_apr_second',
      location: 'interview_room',
      narrations: [
        '4月。総合商社の2次面接。',
        '若い面接官、30代前半。目が鋭い。',
      ],
      dialogs: [
        {
          speaker: '面接官・中島',
          line: 'ガクチカ、聞かせてください。',
        },
        {
          speaker: '拓海',
          line: 'はい。ラクロス部で主将を務め、50名のチームをまとめてきました。チームの方向性を……',
        },
        {
          speaker: '面接官・中島',
          line: 'ちょっと待ってください。「チームをまとめた」って言いましたけど、具体的にどう変えたんですか？まとめる前のチームの問題点は何でしたか？',
        },
        {
          speaker: '拓海',
          line: 'えーと……チーム内のコミュニケーション不足が課題で……。',
          inner: 'まずい。「コミュニケーション不足」って何だ。何が具体的に不足してたんだ？',
        },
        {
          speaker: '面接官・中島',
          line: 'コミュニケーション不足の原因は？',
          inner: '詰まってる。よくあるパターン。でも本当のことを話せる人が見たい。',
        },
        {
          speaker: '拓海',
          line: '……練習への意識の差、でしょうか。',
          inner: 'これも曖昧だ。本当のことを言えていない。',
        },
      ],
      interviewerThought: 'テンプレを丸暗記しているだけだ。本人が何を考えてきたかが全く見えない。これは厳しい。',
      choices: [
        {
          label: '面接官の追及に答えようとするが、詰まってしまう',
          nextSceneId: 'takumi_apr_rejection',
          effects: [{ key: 'stress', delta: 15 }, { key: 'mental', delta: -10 }],
        },
      ],
    },
    {
      id: 'takumi_apr_rejection',
      location: 'train',
      narrations: [
        'お祈りメールが届いた。帰りの電車の中で。',
        '「今後のご活躍をお祈り申し上げます」。',
        '拓海は電車のポールを握りながら、画面を見つめた。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: '……「具体的にどう変えたか」、答えられなかった。',
          inner: 'あの質問がずっと頭から離れない。「チームの何が問題だったんですか」。本当のことを言えなかった。いや、本当のことが何か、わかってなかった。',
        },
      ],
      choices: [
        {
          label: '次の面接の対策を強化する',
          nextSceneId: 'takumi_may_crisis',
          effects: [{ key: 'stress', delta: 5 }],
        },
        {
          label: '「本当に自分がラクロスで学んだこと」を考え直す',
          nextSceneId: 'takumi_may_crisis',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: -5 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 5月：本質と向き合う
    // ────────────────────────────────────────────────
    {
      id: 'takumi_may_crisis',
      location: 'home',
      narrations: [
        '5月。深掘りされる面接が続いた。',
        '毎回、同じ壁にぶつかる。',
        '「具体的に何をしたんですか」「チームの何が変わりましたか」「あなたが主体的に動いたことは何ですか」。',
        '拓海は答えのたびに、どこかうそをついているような気がしていた。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: '俺、本当にチームをまとめてたのか……。',
          inner: '副将の田中が実務を動かしてた。俺は「主将」という役割だったけど、チームが動いてたのは田中のおかげじゃないか。俺がいなくても同じだったんじゃないか。',
        },
      ],
      choices: [
        {
          label: '「主将という肩書きを使い続けるしかない」と割り切る',
          nextSceneId: 'takumi_may_last_interview',
          effects: [{ key: 'axis', delta: -8 }, { key: 'stress', delta: -5 }],
        },
        {
          label: '「本当にあの試合で何があったか」を正直に振り返る',
          nextSceneId: 'takumi_may_real_story',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: -8 }],
        },
      ],
    },
    {
      id: 'takumi_may_real_story',
      location: 'home',
      narrations: [
        '拓海は思い出した。大学3年の秋、全国大会予選。',
        'チームが崩壊しかけた試合がある。',
        '前半で5点差をつけられ、ハーフタイムに選手が泣き出した。',
        '副将の田中が怒鳴った。エースの石井が黙った。',
        '拓海は何もできなかった。15分間、ずっとピッチの外で立っていた。',
        'でも最後に、拓海は言った。',
        '「これ、後悔したくない。今まで通りやろう。それだけだ」。',
        'チームは後半を戦い、2点差まで追い上げた。勝てなかった。',
        'でも、全員が最後まで走った。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: 'あの試合……俺が「まとめた」わけじゃない。でも俺が黙ってたら、誰かが消えてた。',
          inner: '「まとめた」じゃない。「残った」んだ。あの場から逃げなかっただけかもしれない。でもそれが、俺がやったことだ。',
        },
      ],
      choices: [
        {
          label: '「崩壊しかけた試合に残った」その話を面接でしてみる',
          nextSceneId: 'takumi_may_last_interview',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }],
        },
      ],
    },
    {
      id: 'takumi_may_last_interview',
      location: 'interview_room',
      narrations: [
        '5月末。最終面接が残っている企業が2社。',
        '片方は大手商社。もう一方は中堅のBtoB企業。',
        '大手商社の最終面接官は、50代のベテランだった。',
      ],
      dialogs: [
        {
          speaker: '面接官・山田部長',
          line: 'ガクチカを教えてください。',
        },
        {
          speaker: '拓海',
          line: 'はい。ラクロス部主将の話をしたいと思います。ただ「まとめた」という話ではなくて、チームが崩壊しかけたある試合のことを話させてください。',
          inner: 'テンプレじゃない話をする。初めてだ。怖い。でもこれが本当のことだ。',
        },
      ],
      interviewerThought: '珍しい入り方だな。聞いてみよう。',
      choices: [
        {
          label: '崩壊しかけた試合の話を、自分の言葉で話す',
          sub: '「まとめた」ではなく「逃げなかった」という話',
          nextSceneId: 'takumi_may_turning_point',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
        {
          label: 'やっぱり「チームをまとめた」の話に戻る',
          sub: '怖くなって、安全な方へ逃げる',
          nextSceneId: 'takumi_jun_void_path',
          effects: [{ key: 'axis', delta: -8 }, { key: 'stress', delta: 5 }],
        },
      ],
    },
    {
      id: 'takumi_may_turning_point',
      location: 'interview_room',
      narrations: [
        '拓海はあの試合の話をした。',
        '崩壊しかけたチーム。泣いた選手。沈黙したエース。',
        '「俺はまとめたわけじゃない。何もできなかった。でも逃げなかった」。',
        '面接官は途中から、メモを取るのをやめた。',
        'ただ拓海の顔を見ていた。',
      ],
      dialogs: [
        {
          speaker: '面接官・山田部長',
          line: 'その試合、負けたんですよね？',
        },
        {
          speaker: '拓海',
          line: 'はい。2点差で負けました。でも全員、最後まで走りました。',
        },
        {
          speaker: '面接官・山田部長',
          line: '……そういう話が聞きたかった。',
          inner: '勝った話ではない。崩れそうなときに何をしたか。それが人間の本質だ。この子には、何かある。',
        },
      ],
      choices: [
        {
          label: '結果を待つ',
          nextSceneId: 'takumi_jun_ending_branch',
          effects: [],
        },
      ],
    },
    {
      id: 'takumi_jun_void_path',
      location: 'interview_room',
      narrations: [
        'また「チームをまとめた」の話をした。',
        '面接官は丁寧に聞いていた。',
        'でも拓海には、何かが違うとわかった。',
        '本当のことを話せなかった。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: '（……また、テンプレだった）',
          inner: '面接官の目が、途中から遠くなった。俺の話を、本当には聞いていなかった。',
        },
      ],
      choices: [
        {
          label: '結果を待つ',
          nextSceneId: 'takumi_jun_ending_branch',
          effects: [{ key: 'axis', delta: -10 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 6月：エンディング分岐
    // ────────────────────────────────────────────────
    {
      id: 'takumi_jun_ending_branch',
      location: 'phone',
      narrations: [
        '6月。電話が来た。',
      ],
      choices: [
        {
          label: '電話に出る',
          offerCountDelta: 1,
          nextSceneId: (stats: import('@/types').GameStats) => (stats.axis >= 60 ? 'takumi_ending_a' : 'takumi_ending_b'),
          effects: [],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // ENDING A: 自分の言葉を持つ
    // ────────────────────────────────────────────────
    {
      id: 'takumi_ending_a',
      location: 'home',
      narrations: [
        '「内定を出したいと思います」。電話口の声に、拓海は息が止まった。',
        '大手ではない。でも、あの面接官が聞いてくれた会社だ。',
        'ラクロス部の後輩にLINEした。「内定した」。',
        '「先輩、どこですか？」と聞かれた。社名を答えた。「聞いたことない」と返ってきた。',
        '拓海は笑った。別にいい。',
        '俺には、あの試合の話がある。自分の言葉で話せる話が、ある。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: 'あの試合、負けてよかったかもしれない。',
          inner: '「勝った話」しかなかったら、俺はずっとテンプレを使い続けてた。崩壊しかけたあの15分が、俺を俺にしてくれた。',
        },
      ],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'takumi_ending_a_final',
          effects: [],
        },
      ],
    },
    {
      id: 'takumi_ending_a_final',
      location: 'home',
      narrations: [],
      isEnding: true,
      endingId: 'A',
      endingTitle: 'あの試合の話',
      endingSummary: '拓海は「部活で培ったもの」を語り続けた。でも最後に語ったのはテンプレではなかった。崩壊しかけたチームの中で、逃げなかった自分の話。「まとめた」ではなく「残った」という、誰にもコピーされていない一枚の事実。それが、内定に変わった。',
      choices: [
        {
          label: 'もう一度プレイする',
          nextSceneId: 'takumi_oct_start',
          effects: [],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // ENDING B: テンプレの勝者
    // ────────────────────────────────────────────────
    {
      id: 'takumi_ending_b',
      location: 'home',
      narrations: [
        '大手商社から内定が届いた。',
        'OBに報告すると「さすが体育会！」と飲み会を開いてくれた。',
        '後輩からは「すごい先輩」と言われた。',
        '内定者懇親会。同期は全員、体育会かコンサル出身だった。',
        '自己紹介で拓海は言った。「ラクロス部主将やってました」。',
        '「おー！」と盛り上がった。',
        'それで、終わった。',
      ],
      dialogs: [
        {
          speaker: '拓海',
          line: '俺、何者なんだろう。',
          inner: '就活に勝った。でも何に勝ったんだ。「ラクロス部主将」という肩書きに勝ったのか、俺が勝ったのか。わからない。',
        },
      ],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'takumi_ending_b_final',
          effects: [],
        },
      ],
    },
    {
      id: 'takumi_ending_b_final',
      location: 'home',
      narrations: [],
      isEnding: true,
      endingId: 'B',
      endingTitle: 'テンプレの勝者',
      endingSummary: '拓海は「体育会テンプレ」で内定を取った。大手企業。周りからは「さすが」と言われた。でも入社式の朝、鏡の前に立ったとき、「俺って何者なんだろう」という問いがよみがえった。就活が終わっても、その問いだけは解決されないままだ。',
      choices: [
        {
          label: 'もう一度プレイする',
          nextSceneId: 'takumi_oct_start',
          effects: [],
        },
      ],
    },
  ],
}
