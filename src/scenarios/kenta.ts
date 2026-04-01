import type { Scenario } from './types'

// 鈴木 健太 ─ 法政大学 法学部B4
// テーマ：「普通の学生」が就活市場で何者かになろうとする話

export const kentaScenario: Scenario = {
  charId: 'kenta',
  startSceneId: 'kenta_oct_start',
  scenes: [

    // ── PHASE 1：10月 ES作成・ガクチカの壁 ──

    {
      id: 'kenta_oct_start',
      location: 'home',
      narrations: [
        '大学3年生、10月。',
        '法政大学の狭い部屋。机の上にはノートパソコンが開いている。',
        '就活情報サイトの会員登録完了。',
        '最初の課題：エントリーシートの「学生時代に力を入れたこと」欄。',
        '健太はフォームの空白を、しばらくのあいだ眺めていた。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '……何、書くんだこれ。',
        },
      ],
      choices: [
        {
          label: 'バイトのことを書いてみる',
          sub: '居酒屋接客3年間。とりあえず書き出す',
          nextSceneId: 'kenta_es_baito_start',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
        {
          label: 'まず「ガクチカ 書き方 例文」で検索する',
          sub: '他の人がどう書いているか見てみよう',
          nextSceneId: 'kenta_search_examples',
          effects: [{ key: 'stress', delta: 8 }, { key: 'mental', delta: -3 }],
        },
      ],
    },

    {
      id: 'kenta_es_baito_start',
      location: 'home',
      narrations: [
        '入力フォームに、少しずつ文字を打ち込んでいく。',
        '「バイト（居酒屋接客 / 3年間継続）」',
        'カーソルが点滅する。続きが出てこない。',
        '3年間。毎週3〜4回、夜の10時まで働いた。',
        'でも「頑張った」と言えるほど何かを成し遂げたわけじゃない。',
        'ただ続けた、それだけだ。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '「継続力があります」って書いていいのかな。嘘じゃないけど、なんか弱い気がする。',
        },
      ],
      choices: [
        {
          label: '「チームワークを学んだ」と書く',
          sub: 'よく見るフレーズ。少し盛り気味かもしれない',
          nextSceneId: 'kenta_es_cheat',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -5 }],
        },
        {
          label: 'とりあえず「続けた事実」だけ書いて友達に相談する',
          sub: 'まずは誰かに話してみる',
          nextSceneId: 'kenta_friend_talk',
          effects: [{ key: 'mental', delta: 5 }, { key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'kenta_search_examples',
      location: 'home',
      narrations: [
        'ブラウザに「ガクチカ 書き方 例文」と打ち込む。',
        '検索結果：NPO立ち上げ・スタートアップでのインターン・海外ボランティア。',
        '「面接官が唸った実例集」というタイトルが目に入る。',
        '読み進めるほど、静かな焦りが積み上がっていく。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: 'みんな何かやってるんだな……。俺、3年間居酒屋でバイトしてたんだけど。',
        },
      ],
      choices: [
        {
          label: '例文を参考に「少し盛って」書いてみる',
          sub: '嘘ではないが、実態よりカッコよく見せる',
          nextSceneId: 'kenta_es_cheat',
          effects: [{ key: 'stress', delta: 12 }, { key: 'axis', delta: -8 }],
        },
        {
          label: 'バイトのことをそのまま書くことにする',
          sub: '地味でも本当のことを書く',
          nextSceneId: 'kenta_es_baito_start',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'kenta_es_cheat',
      location: 'home',
      narrations: [
        '「スタッフ同士の連携を強化し、ピーク時のオペレーション効率を改善した」',
        '書いた。打ち込んだ。一応、嘘ではない。',
        'でも何か違う。自分の言葉じゃない感じがする。',
        '送信ボタンの前で、少し止まった。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: 'もし入社してから「あの時のこと詳しく教えて」って言われたら、どうするんだろう。',
        },
      ],
      choices: [
        {
          label: 'このまま送信する',
          sub: '他の人もやってる。問題ないはず',
          nextSceneId: 'kenta_nov_worry',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: -10 }, { key: 'mental', delta: -5 }],
        },
        {
          label: 'やっぱり書き直す。正直に書こう',
          sub: '盛ることへの気持ち悪さが拭えない',
          nextSceneId: 'kenta_honest_decision',
          effects: [{ key: 'axis', delta: 12 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'kenta_friend_talk',
      location: 'university',
      narrations: [
        '大学のキャンパス。昼休み、ゼミの友達の田村に声をかけた。',
        '「ガクチカ何書く予定？」',
        '軽い気持ちで聞いたつもりだった。',
      ],
      dialogs: [
        {
          speaker: '田村',
          line: '俺？NPOで途上国の教育支援を2年間やってた話を書くよ。あと学祭の代表もやったし。',
          inner: undefined,
        },
        {
          speaker: '健太',
          line: 'あ、そっか……いいな。',
          inner: '完全に死んだ。俺、何もしてない。',
        },
      ],
      choices: [
        {
          label: '「バイトしかないんだけど」と正直に打ち明ける',
          nextSceneId: 'kenta_friend_advice',
          effects: [{ key: 'mental', delta: 3 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '「そっかー」と話を切り上げて帰る',
          nextSceneId: 'kenta_nov_worry',
          effects: [{ key: 'stress', delta: 10 }, { key: 'mental', delta: -8 }],
        },
      ],
    },

    {
      id: 'kenta_friend_advice',
      location: 'university',
      narrations: [
        '「バイトしかないんだよ、俺。3年間ずっと居酒屋」',
        '田村は少し考えてから言った。',
      ],
      dialogs: [
        {
          speaker: '田村',
          line: '3年間って、それはそれで普通にすごくない？俺、バイト3ヶ月で辞めたよ。',
        },
        {
          speaker: '健太（心の声）',
          line: '慰められてるのか、本当にそう思ってるのか、わからない。',
        },
      ],
      choices: [
        {
          label: '「続けたことを正直に書いてみる」と決める',
          nextSceneId: 'kenta_honest_decision',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 2：11月 盛る誘惑と正直の選択 ──

    {
      id: 'kenta_nov_worry',
      location: 'home',
      narrations: [
        '11月。提出したESの返事はまだ来ない。',
        '夜、ベッドに横になりながら天井を見ていた。',
        'もし入社後に「あのESのこと詳しく話して」と言われたら。',
        '自分が書いたことを、自分の言葉で説明できるだろうか。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '嘘で入社して、嘘の自分を演じ続けるのは……たぶん無理だ。',
        },
      ],
      choices: [
        {
          label: '書き直すことを決意する',
          sub: '次のESからは本当のことを書こう',
          nextSceneId: 'kenta_honest_decision',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: -5 }],
        },
        {
          label: 'もう少しこのまま様子を見る',
          sub: '書類が通れば悩まなくていいかもしれない',
          nextSceneId: 'kenta_dec_jobfair',
          effects: [{ key: 'stress', delta: 8 }],
        },
      ],
    },

    {
      id: 'kenta_honest_decision',
      location: 'home',
      narrations: [
        'キーボードの前に座り直した。',
        'さっきの文章を全部消した。',
        '「バイト（居酒屋接客 / 3年間継続）」',
        '続きを打つ。ゆっくりと、自分の言葉で。',
        '「特別なことはしていません。ただ、3年間同じ場所に立ち続けました。」',
        '画面を見つめる。地味だ。でも、これは本当のことだ。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: 'これで落ちたら、しょうがない。少なくとも自分のことを書いた。',
        },
      ],
      choices: [
        {
          label: 'このESを送信する',
          nextSceneId: 'kenta_dec_jobfair',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    // ── PHASE 3：12月 合同説明会の洗礼 ──

    {
      id: 'kenta_dec_jobfair',
      location: 'job_fair',
      narrations: [
        '12月、都内の大規模合同説明会。',
        'ビッグサイトのような会場に、スーツ姿の学生が溢れていた。',
        '健太は入り口で配られたパンフレットを受け取り、人の波に飲み込まれた。',
      ],
      dialogs: [
        {
          speaker: '隣にいた学生',
          line: '去年スタートアップを共同創業して、今は年商2000万なんですよね。就活は選社する感じで。',
        },
        {
          speaker: '健太（心の声）',
          line: '……選社、ね。俺は選んでもらえるかどうかの段階なんですが。',
        },
      ],
      choices: [
        {
          label: '気にせず企業ブースを回る',
          nextSceneId: 'kenta_dec_booth',
          effects: [{ key: 'mental', delta: 3 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '圧倒されてトイレに逃げる',
          sub: '少し休憩が必要だ',
          nextSceneId: 'kenta_dec_toilet',
          effects: [{ key: 'stress', delta: 10 }, { key: 'mental', delta: -5 }],
        },
      ],
    },

    {
      id: 'kenta_dec_toilet',
      location: 'home',
      narrations: [
        '会場のトイレ。個室の扉を閉めた。',
        'スマホを開いて、何を見るでもなくスクロールする。',
        'SNSのタイムラインには同期の就活報告が流れていた。',
        '「本選考4社エントリー完了！」「外コン面接通過！」',
        '健太はスマホをポケットにしまって、深呼吸した。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '俺には俺のペースがある。そう言い聞かせるのも、もう何回目だろう。',
        },
      ],
      choices: [
        {
          label: '気持ちを切り替えてブースに戻る',
          nextSceneId: 'kenta_dec_booth',
          effects: [{ key: 'mental', delta: 8 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'kenta_dec_booth',
      location: 'job_fair',
      narrations: [
        '食品メーカーのブースで話を聞いた。',
        '担当者は穏やかで、製品の話を楽しそうにしていた。',
        '「うちは派手な話よりも、地道にものを作り続けている会社です」',
        'その言葉が、何かに引っかかった。',
      ],
      dialogs: [
        {
          speaker: '採用担当者',
          line: 'うちで活躍しているのは、特別な経験を持っている人より、地に足がついている人が多いんですよ。',
        },
        {
          speaker: '健太（心の声）',
          line: '地に足がついている、か。俺のことかどうかはわからないけど。',
        },
      ],
      choices: [
        {
          label: 'ここにエントリーすることにする',
          nextSceneId: 'kenta_jan_es_writing',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
        {
          label: 'もっとブースを見てから決める',
          nextSceneId: 'kenta_jan_es_writing',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    // ── PHASE 4：1月 正直なESを磨く ──

    {
      id: 'kenta_jan_es_writing',
      location: 'home',
      narrations: [
        '1月。本選考のESに向き合う日々。',
        'ガクチカの欄に、健太は今度こそ自分の言葉で書いた。',
        '「居酒屋でのアルバイトを3年間続けました。」',
        '「特別なエピソードはありません。ただ、欠勤せず、逃げずに立ち続けました。」',
        '「それが今の自分の軸です。」',
        '読み返した。地味だ。でも嘘はない。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: 'これで受かるかどうかはわからない。でもこれが俺だ。',
        },
      ],
      choices: [
        {
          label: '複数の企業にこのESを提出する',
          nextSceneId: 'kenta_mar_results',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 5：3月 書類選考の結果 ──

    {
      id: 'kenta_mar_results',
      location: 'home',
      narrations: [
        '3月。選考結果が届き始める。',
        'お祈りメールが続いた。',
        'でも不思議と、嘘を書いていた時より心は落ち着いていた。',
        '「私どもは〜誠に残念ながら〜」',
        '既視感のある文面を閉じる。また次だ。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '落ちたのは普通に悔しい。でも自分のことを書いたんだから、しょうがないとも思える。変な話だ。',
        },
      ],
      choices: [
        {
          label: '落ち込まずエントリーを続ける',
          nextSceneId: 'kenta_mar_pass',
          effects: [{ key: 'mental', delta: 5 }, { key: 'stress', delta: 5 }],
        },
        {
          label: 'ES内容を見直してみる',
          nextSceneId: 'kenta_mar_revision',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 8 }],
        },
      ],
    },

    {
      id: 'kenta_mar_revision',
      location: 'home',
      narrations: [
        '書いたESを読み直してみた。',
        '正直に書いている、それは間違いない。',
        'でも「続けた理由」がまだ薄い気がする。',
        'なぜ3年間続けられたのか。',
        '……考えてみると、答えが出なかった。',
        '「なんとなく」かもしれない。それが怖かった。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '「なんとなく続けた」が本当のことだとしたら、それを書く意味ってあるんだろうか。',
        },
      ],
      choices: [
        {
          label: '「なんとなく」でも続いた事実に向き合う',
          nextSceneId: 'kenta_mar_pass',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '「なんとなく」を認めたくなくて、理由を作り上げる',
          nextSceneId: 'kenta_mar_fake_reason',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -5 }],
        },
      ],
    },

    {
      id: 'kenta_mar_fake_reason',
      location: 'home',
      narrations: [
        '「お客様の笑顔のために働き続けることに使命感を感じていたため」',
        '書いた。読み返した。',
        '……嘘だ。そんなこと思ったことない。',
        'バックスペースキーを、ゆっくりと押した。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: 'ダメだ。また同じところに戻ってきた。',
        },
      ],
      choices: [
        {
          label: '「なんとなく続いた」を正直に書く',
          nextSceneId: 'kenta_mar_pass',
          effects: [{ key: 'axis', delta: 12 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'kenta_mar_pass',
      location: 'home',
      narrations: [
        '3月下旬。書類通過のメールが届いた。',
        '食品メーカー1社、中堅の商社1社。',
        '2社。少ない。でも、通った。',
        '健太は画面を何度も見直してしまった。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: 'このESで通ったってことは……俺のことを読んでくれた人がいたってことだ。',
        },
      ],
      choices: [
        {
          label: '面接の準備を始める',
          nextSceneId: 'kenta_apr_interview_prep',
          effects: [{ key: 'mental', delta: 10 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    // ── PHASE 6：4〜5月 面接の本番 ──

    {
      id: 'kenta_apr_interview_prep',
      location: 'home',
      narrations: [
        '4月。面接の練習をしようとした。',
        '鏡の前に立って「バイトを3年間続けました」と言ってみる。',
        '続きが出てこない。「だから何？」という問いに答えられる気がしなかった。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '面接官に「なぜ続けられたんですか？」って聞かれたら、俺は何て答えればいいんだ。',
        },
      ],
      choices: [
        {
          label: '「なんとなく続いた」という事実と真剣に向き合ってみる',
          nextSceneId: 'kenta_apr_self_dig',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '模範解答を用意して暗記する',
          nextSceneId: 'kenta_apr_memorize',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -5 }],
        },
      ],
    },

    {
      id: 'kenta_apr_self_dig',
      location: 'home',
      narrations: [
        'ノートに書き出してみた。',
        'なぜ続けられたか。3年間の記憶を引っ張り出す。',
        '――常連のおじさんが「また来たよ」と言ってくれた夜。',
        '――忙しい金曜日、先輩と一緒に乗り切った達成感。',
        '――仕込みをしながら聞いた、マスターの話。',
        '「居心地が良かった」のかもしれない。続けたのではなく、続いたのかもしれない。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '「続けた」じゃなくて「続いた」か。それを正直に言えるかな、面接で。',
        },
      ],
      choices: [
        {
          label: '「続いた」を正直に話す覚悟を決める',
          nextSceneId: 'kenta_may_interview',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'kenta_apr_memorize',
      location: 'home',
      narrations: [
        '「チームワークの大切さを学び、継続力を身につけました」',
        '何度も声に出して練習した。',
        'でも自分の声が、どこか空虚に聞こえた。',
        '面接前夜、健太は枕に顔を埋めた。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: 'これ、俺の話じゃない気がする。どうしよう。',
        },
      ],
      choices: [
        {
          label: '当日、本音で話すことにする',
          nextSceneId: 'kenta_may_interview',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'kenta_may_interview',
      location: 'interview_room',
      narrations: [
        '5月。食品メーカーの一次面接。',
        '白い部屋。面接官は40代くらいの男性、一人。',
        '「鈴木さん、学生時代に力を入れたことを教えてください」',
        '準備した言葉が喉に詰まった。',
        '少し間があった。',
        '健太は息を吸って、話し始めた。',
      ],
      dialogs: [
        {
          speaker: '健太',
          line: '特別なことはしていませんが、3年間同じ居酒屋で働き続けました。正直に言うと、「頑張った」というより「続いた」という感じです。',
          inner: '言ってしまった。これで終わりかもしれない。',
        },
        {
          speaker: '面接官',
          line: 'ほう。続いた、というのはどういう意味ですか？',
        },
      ],
      interviewerThought: '珍しい言い方をする学生だな。お世辞でも「頑張りました」と言えばいいのに。正直なのか、準備不足なのか。もう少し聞いてみよう。',
      choices: [
        {
          label: '「辞める理由がなかった、ということかもしれません」と答える',
          nextSceneId: 'kenta_may_interview_honest',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '慌てて取り繕う「いえ、主体的に続けました」',
          danger: true,
          nextSceneId: 'kenta_may_interview_cover',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: -10 }],
        },
      ],
    },

    {
      id: 'kenta_may_interview_cover',
      location: 'interview_room',
      narrations: [
        '「いえ、主体的に続けました。チームワークの向上に貢献し……」',
        '言葉が滑っていく。面接官の表情が少し変わった気がした。',
        '面接官は次の質問に進んだ。',
        '会話が、どこかかみ合っていなかった。',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: '……なるほど。それでは志望動機を教えてください。',
        },
        {
          speaker: '健太（心の声）',
          line: 'あ、もう終わった。さっきの正直な話に戻りたかった。',
        },
      ],
      interviewerThought: '典型的な答えに戻ってしまった。最初の「続いた」という言葉の方が面白かったのに。',
      choices: [
        {
          label: '面接を終える。結果を待つ',
          nextSceneId: 'kenta_may_results',
          effects: [{ key: 'stress', delta: 10 }, { key: 'mental', delta: -8 }],
        },
      ],
    },

    {
      id: 'kenta_may_interview_honest',
      location: 'interview_room',
      narrations: [
        '「辞める理由がなかったんだと思います。居心地が良かった。」',
        '「それは逃げかもしれませんが、嫌なことから逃げなかったのも事実で。」',
        '「……正直、まだ言語化できていないんですが、それが今の自分の基盤だと思っています」',
        '面接官が少し前のめりになった。',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: 'それ、すごいと思いますよ。3年間続くバイトって、意外に少ないんです。',
          inner: undefined,
        },
        {
          speaker: '健太（心の声）',
          line: 'お世辞かな。でも、なんか嬉しい。この人と話しているのが、ちょっと楽しかった。',
        },
      ],
      interviewerThought: 'こういう学生は久しぶりだ。飾らない。等身大で話せる。うちの現場に合うかもしれない。',
      choices: [
        {
          label: '面接を終える。手応えを感じながら帰る',
          nextSceneId: 'kenta_may_results',
          effects: [{ key: 'mental', delta: 15 }, { key: 'axis', delta: 10 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'kenta_may_results',
      location: 'home',
      narrations: [
        '5月下旬。選考結果が届く。',
        '通過した企業、落ちた企業。',
        '結果はさておき、健太の中に何か変化が起きていた。',
        '自分のことを人に話すのが、少し怖くなくなっていた。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '「普通の学生です」って言うの、恥ずかしいと思っていたけど。なんか、違う気がしてきた。',
        },
      ],
      choices: [
        {
          label: '最終選考に向けて準備する',
          nextSceneId: 'kenta_jun_final',
          effects: [{ key: 'mental', delta: 8 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    // ── PHASE 7：6月 最終選考・エンディング分岐 ──

    {
      id: 'kenta_jun_final',
      location: 'interview_room',
      narrations: [
        '6月。食品メーカーの最終面接。',
        '役員3名が並んでいた。',
        '「鈴木さん、最後に。なぜ就職するんですか？」',
        '想定外の質問だった。',
      ],
      dialogs: [
        {
          speaker: '役員',
          line: 'あなたが「普通の学生だ」と自分で言っていたのをESで読みました。その普通さを、うちでどう活かしますか？',
        },
        {
          speaker: '健太（心の声）',
          line: '読んでくれたんだ。ESを。俺の、あの正直な文章を。',
        },
      ],
      interviewerThought: 'このESが気になって最終まで残した。どう答えるか見ておきたい。',
      choices: [
        {
          label: '「普通さの中に、本当のことがあると気づいたからです」と答える',
          nextSceneId: 'kenta_ending_a_bridge',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }],
        },
        {
          label: '「何者でもない自分のまま、それを証明したいからです」と答える',
          nextSceneId: 'kenta_ending_b_bridge',
          effects: [{ key: 'mental', delta: 8 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'kenta_ending_a_bridge',
      location: 'interview_room',
      narrations: [
        '「普通さの中に、本当のことがあると気づいたからです」',
        '「バイトを3年間続けた。それだけのことですが、それを正直に話すことが、この就活で一番難しいことでした」',
        '役員たちが、少し黙った。',
        'やがて面接が終わった。',
        '廊下を歩きながら、健太は思った。',
        '結果がどうあれ、今日は自分のことを話せた気がする。',
      ],
      dialogs: [],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'kenta_ending_a',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'kenta_ending_b_bridge',
      location: 'interview_room',
      narrations: [
        '「何者でもない自分のまま、それを証明したいからです」',
        '「就活を通じて、普通であることを隠さなくなりました。それが変化といえば変化です」',
        '役員の一人が小さくうなずいた。',
        '面接が終わった。',
        '電車の中で、健太はぼんやりと窓の外を見ていた。',
        '何者かになりたかった。でも、何者でもない自分でいることへの抵抗が、少し薄れていた。',
      ],
      dialogs: [],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'kenta_ending_b',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── ENDINGS ──

    {
      id: 'kenta_ending_a',
      location: 'home',
      narrations: [
        '6月中旬。内定の電話がかかってきた。',
        '食品メーカー。',
        '健太は電話を切ったあと、しばらく部屋の真ん中に立ち尽くしていた。',
        '3年間続けた居酒屋バイト。',
        '「特別なことは何もない」と思っていたあの日々の中に、本当のことがあった。',
        '盛らなかった。嘘をつかなかった。',
        'それだけのことが、こんなに長く心に引っかかっていたなんて、思わなかった。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '普通だって良かったんだ。……いや、普通だったから良かったのかもしれない。',
        },
      ],
      isEnding: true,
      endingId: 'A',
      endingTitle: '普通の中にある、本当のこと',
      endingSummary: '嘘をつかなかった3年間分の事実が、最後に自分を助けた。「普通」は、誇るものではないかもしれない。でもそれは本物だった。',
      choices: [],
    },

    {
      id: 'kenta_ending_b',
      location: 'train',
      narrations: [
        '6月下旬。別の中堅企業から内定をもらった。',
        '大きくはないが、悪くない会社だ。',
        '電車の中で、内定通知メールを見ながら健太は思った。',
        '就活で「何者か」になれたかどうかはわからない。',
        '最後まで、ただのバイト経験しかない普通の学生だったかもしれない。',
        'でも、自分のことを誰かに話した。正直に、何度も。',
        'それが一番の収穫だったと思う。就活が終わった今。',
      ],
      dialogs: [
        {
          speaker: '健太（心の声）',
          line: '何者でもないまま、就活が終わった。でも、何者でもない自分のことを、ちゃんと話せた。それで十分かもしれない。',
        },
      ],
      isEnding: true,
      endingId: 'B',
      endingTitle: '何者でもないまま、終わる',
      endingSummary: '内定はとれた。「何者か」にはなれなかったかもしれない。でも自分のことを誰かに語れた、という感覚だけが残った。',
      choices: [],
    },

  ],
}
