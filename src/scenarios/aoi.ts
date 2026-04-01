import type { Scenario } from './types'

export const aoiScenario: Scenario = {
  charId: 'aoi',
  startSceneId: 'aoi_oct_start',
  scenes: [
    // ────────────────────────────────────────────────
    // 10月：就活コミュニティとの出会い
    // ────────────────────────────────────────────────
    {
      id: 'aoi_oct_start',
      location: 'university',
      narrations: [
        '10月。慶應のキャンパスでは、もう就活の空気が漂い始めていた。',
        '桐島葵、経済学部4年。GPA3.8。英語は得意。バイトはカフェ。趣味は読書……。',
        'そんな自分を就活市場に「商品」として出す日が、近づいてきている。',
      ],
      dialogs: [
        {
          speaker: '同期の友人・里奈',
          line: '葵、就活コミュニティ入った？SlackのやつInvite送るね。すごい情報量で、先輩たちのES全部もらえるから。',
        },
        {
          speaker: '葵',
          line: 'え、そんなのあるの？',
          inner: '情報戦に乗り遅れたら終わる、という焦りがある。よくわからないけど入っておくか。',
        },
      ],
      choices: [
        {
          label: 'コミュニティに入る',
          sub: '「情報は武器」そう思って迷わず参加する',
          nextSceneId: 'aoi_oct_community',
          effects: [{ key: 'stress', delta: 5 }],
        },
        {
          label: '少し考える',
          sub: '「まず自分で考えてみよう」と保留する',
          nextSceneId: 'aoi_oct_community',
          effects: [{ key: 'axis', delta: 3 }],
        },
      ],
    },
    {
      id: 'aoi_oct_community',
      location: 'online',
      narrations: [
        'Slackに入った瞬間、チャンネルの数に圧倒された。',
        '「#外資コンサル対策」「#goldmansachs志望」「#マッキンゼー内定者に聞く」……。',
        '数百人が同じ空間で、同じ夢を語り合っていた。',
      ],
      dialogs: [
        {
          speaker: 'コミュニティの先輩・山口（3年前に内定）',
          line: 'みんな聞いて。就活は情報ゲーム。コンサルか外資金融、この二択が慶應生の正解ルート。年収1000万確定ルートだから。他は負け組。',
        },
        {
          speaker: '葵',
          line: '（コンサル……か）',
          inner: 'なんかすごい断定的だけど、先輩が言うなら正しいんだろうな。コンサルって何するんだっけ。',
        },
        {
          speaker: '里奈',
          line: '葵もコンサル狙うよね？私もう志望動機書き始めた。',
        },
      ],
      choices: [
        {
          label: '「そうだね、コンサル志望にする」',
          sub: '周りに流れるまま、コンサルを第一志望に設定する',
          nextSceneId: 'aoi_oct_decision',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -5 }],
        },
        {
          label: '「うーん、まだわかんない」',
          sub: '正直に答える。少し浮いた空気になる',
          nextSceneId: 'aoi_oct_decision',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: -5 }],
        },
      ],
    },
    {
      id: 'aoi_oct_decision',
      location: 'home',
      narrations: [
        '夜、部屋に帰ってきてPCを開く。',
        '画面には「コンサルティングファーム 志望動機 例文」と打ちかけた検索窓。',
        '――でも、なぜコンサル？',
        'その問いに、葵はまだ答えを持っていなかった。',
      ],
      dialogs: [
        {
          speaker: '葵（独り言）',
          line: 'コンサルって……問題解決、でしょ。ビジネスの課題を解決する……。なんかかっこいいよね。',
          inner: 'かっこいい、という理由で志望するのは浅い気がする。でもみんなそうじゃないの？',
        },
      ],
      choices: [
        {
          label: 'コンサルについてネットで調べる',
          sub: '「まず知識を入れよう」と情報収集を始める',
          nextSceneId: 'aoi_nov_start',
          effects: [{ key: 'axis', delta: 3 }],
        },
        {
          label: 'コミュニティのESを参考に志望動機を書き始める',
          sub: '先輩のESを見ながら自分のものを作り始める',
          nextSceneId: 'aoi_nov_start',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -3 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 11月：ケース対策の日々
    // ────────────────────────────────────────────────
    {
      id: 'aoi_nov_start',
      location: 'cafe',
      narrations: [
        '11月。コンサル志望者たちの朝は早い。',
        '葵は週3回、大学の友人たちとケース対策の集まりに参加していた。',
        'フェルミ推定。ビジネスケース。「日本のコンビニの市場規模を求めよ」。',
      ],
      dialogs: [
        {
          speaker: '里奈',
          line: '葵、フェルミうまいね。地頭いいじゃん。',
        },
        {
          speaker: '葵',
          line: 'ありがとう。でもなんか……これ、楽しいのかな、私。',
          inner: 'パズルを解いている感覚はある。でも「これをやって何になるんだろう」という問いが消えない。',
        },
        {
          speaker: '同期の男子・田辺',
          line: 'そんなこと考えてる場合じゃないよ。結果出してから考えな。',
        },
      ],
      choices: [
        {
          label: '「そうだね、まず実力つけよう」と割り切る',
          nextSceneId: 'aoi_nov_case',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -3 }],
        },
        {
          label: '違和感を抱えたまま、でも練習を続ける',
          nextSceneId: 'aoi_nov_case',
          effects: [{ key: 'mental', delta: -5 }, { key: 'axis', delta: 5 }],
        },
      ],
    },
    {
      id: 'aoi_nov_case',
      location: 'university',
      narrations: [
        'ケース対策の結果、葵の「解法の型」は磨かれていった。',
        '3C、MECE、ロジックツリー。言葉は増えた。',
        'でも「なぜコンサルか」への答えは、まだ空白のままだった。',
      ],
      dialogs: [
        {
          speaker: '山口先輩（Slackで）',
          line: '冬インターンの選考、もう始まってるよ。ESと1次面接。ケース練習は毎日やること。受かったやつだけが次のステージに行ける。',
        },
        {
          speaker: '葵',
          line: '……わかりました。',
          inner: 'ステージ、か。まるでゲームみたい。私は今、何のためにこのゲームをしているんだろう。',
        },
      ],
      choices: [
        {
          label: '冬インターンにESを出す',
          sub: 'コンサル系2社に応募する',
          nextSceneId: 'aoi_dec_intern_es',
          effects: [{ key: 'stress', delta: 8 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 12月：冬インターン
    // ────────────────────────────────────────────────
    {
      id: 'aoi_dec_intern_es',
      location: 'home',
      narrations: [
        '12月、冬インターンのES選考を通過した。',
        '念願の大手コンサルティングファームのインターン。',
        '葵は設定した目標に、着実に近づいていた。',
      ],
      choices: [
        {
          label: 'インターンに参加する',
          nextSceneId: 'aoi_dec_intern',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },
    {
      id: 'aoi_dec_intern',
      location: 'company',
      narrations: [
        '大手町のオフィス。ガラス張りの会議室。スーツの若者が20人。',
        '3日間のケースインターン。チームで「食品メーカーの海外展開戦略」を考える。',
        '葵のチームは優秀だった。資料もきれいにまとまった。',
        'でも、ふと社員の話を聞いていて、葵は思った。',
      ],
      dialogs: [
        {
          speaker: 'コンサルタントの社員・木村（30代）',
          line: '私たちの仕事は、クライアントの戦略立案から実行支援まで。毎日違うプロジェクト、毎日違う業界。エキサイティングでしょ？',
        },
        {
          speaker: '葵',
          line: '（……あれ）',
          inner: '「毎日違う業界」。ということは、一つの業界や会社に深く関わることはない？それって、私がやりたいことなのかな。',
        },
        {
          speaker: 'コンサルタントの社員・木村',
          line: 'コンサルって正直、レポート書いて終わりのことも多い。実行は全部クライアント任せ。でもそれがビジネスモデルだから。',
          inner: 'これがいやで辞める人、多いけどね。',
        },
      ],
      interviewerThought: '彼女、ちゃんと聞いてるな。でも何かひっかかってる顔してる。',
      choices: [
        {
          label: '「そういうものか」と飲み込む',
          sub: 'やっぱりコンサルを目指すと気持ちを固める',
          nextSceneId: 'aoi_dec_after_intern',
          effects: [{ key: 'axis', delta: -5 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '「思ってたのと違う」と素直に感じる',
          sub: 'でも、じゃあ何がしたいのかはわからない',
          nextSceneId: 'aoi_dec_after_intern',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: -5 }],
        },
      ],
    },
    {
      id: 'aoi_dec_after_intern',
      location: 'train',
      narrations: [
        'インターン帰り、電車の中。',
        '窓の外に都市の夜景が流れる。',
        '「思ってたのと違う」。その感覚が、ずっと頭の中にある。',
        '隣のボックス席では、同じインターンに参加した男子が友人に電話していた。',
      ],
      dialogs: [
        {
          speaker: '隣の男子（電話中）',
          line: '最高だったわ。コンサルやっぱかっこいい。絶対入りたい。ねえ、来年絶対二人で内定取ろうぜ。',
        },
        {
          speaker: '葵',
          line: '（……）',
          inner: '彼は迷ってない。私は、なぜ迷ってるんだろう。正直に言うと、かっこよかったけど、楽しかったかは別の話だった。',
        },
      ],
      choices: [
        {
          label: 'モヤモヤを無視して、ES作成に集中する',
          nextSceneId: 'aoi_jan_es',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -5 }],
        },
        {
          label: '「何がしたいのか」を少しだけ考えてみる',
          nextSceneId: 'aoi_jan_es',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: -3 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 1月：ES作成の苦悩
    // ────────────────────────────────────────────────
    {
      id: 'aoi_jan_es',
      location: 'home',
      narrations: [
        '1月。本選考のES提出が始まる。',
        '「志望動機」の欄、400字以内。',
        '葵は30分間、カーソルをブリンクさせたまま止まっていた。',
      ],
      dialogs: [
        {
          speaker: '葵（独り言）',
          line: 'なぜコンサルを志望するのか……。「課題解決」「成長環境」「優秀な人」……。これ全部、先輩のESにあった言葉だ。',
          inner: '私の言葉で書けない。それはつまり、私の動機がないってこと？',
        },
      ],
      choices: [
        {
          label: 'コミュニティの先輩のESを参考に「借りてくる」',
          sub: '危険な近道。でも時間がない',
          danger: true,
          nextSceneId: 'aoi_jan_copypaste',
          effects: [{ key: 'stress', delta: -5 }, { key: 'axis', delta: -10 }],
        },
        {
          label: '時間がかかっても自分の言葉で書く',
          sub: '「なぜコンサルなのか」を一から考える',
          nextSceneId: 'aoi_jan_selfwrite',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: 8 }],
        },
      ],
    },
    {
      id: 'aoi_jan_copypaste',
      location: 'home',
      narrations: [
        '先輩のESを開き、言葉を「借りた」。',
        '「貴社のグローバルな課題解決力と成長機会に魅力を感じ……」。',
        '30分で完成した。でも、送信ボタンを押す前に手が止まった。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: 'これ、私の文章じゃない。',
          inner: 'でも時間がないし、みんなやってるし。……みんなやってるかどうかなんて知らないけど。',
        },
      ],
      choices: [
        {
          label: 'そのまま送信する',
          sub: '「みんな似たり寄ったりのESを書いてる」と割り切る',
          nextSceneId: 'aoi_jan_es_done',
          effects: [{ key: 'axis', delta: -8 }, { key: 'stress', delta: -5 }],
        },
        {
          label: 'やっぱり自分の言葉に書き直す',
          nextSceneId: 'aoi_jan_selfwrite',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 5 }],
        },
      ],
    },
    {
      id: 'aoi_jan_selfwrite',
      location: 'home',
      narrations: [
        '深夜2時。葵はメモ帳に書き出していた。',
        '「コンサルで何がしたいか」ではなく「自分は今まで何に心が動いたか」を。',
        'ゼミで地方創生の論文を書いたとき。地元の商店街が廃れていくのを見ていたとき。',
        'あのとき、何か悔しかった気持ちがあった。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: 'あれ……私、地域経済に興味があったんだ。ずっと忘れてた。',
          inner: 'でもそれってコンサルと関係あるの？いや、あるかもしれない。中小企業の経営支援……そういうコンサルもあるんじゃないか。',
        },
      ],
      choices: [
        {
          label: '「地域中小企業支援」という軸でESを書く',
          sub: '大手コンサルには当てはまらないかもしれない',
          nextSceneId: 'aoi_jan_es_done',
          effects: [{ key: 'axis', delta: 12 }, { key: 'stress', delta: 8 }],
        },
        {
          label: '無難な「課題解決・成長環境」で書く',
          sub: 'リスクを避けて、通りやすいESを選ぶ',
          nextSceneId: 'aoi_jan_es_done',
          effects: [{ key: 'axis', delta: -5 }, { key: 'stress', delta: -3 }],
        },
      ],
    },
    {
      id: 'aoi_jan_es_done',
      location: 'home',
      narrations: [
        'ESを提出した。コンサル系5社。',
        'あとは結果を待つだけ。',
        'でも葵の中には、まだ答えの出ていない問いが残っていた。',
        '――私は、なぜコンサルに行きたいのか。',
      ],
      choices: [
        {
          label: '3月解禁を待つ',
          nextSceneId: 'aoi_mar_start',
          effects: [],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 3月：就活解禁、面接ラッシュ
    // ────────────────────────────────────────────────
    {
      id: 'aoi_mar_start',
      location: 'interview_room',
      narrations: [
        '3月1日。就活解禁。',
        '最初の面接は外資系コンサルの1次面接。東京・丸の内のオフィス。',
        '葵はスーツを着て、答えを用意してきた。',
        '「課題解決、成長、グローバル」。呪文のように繰り返して電車で来た。',
      ],
      dialogs: [
        {
          speaker: '面接官（40代、温和）',
          line: 'コンサルを志望する理由を教えてください。',
        },
        {
          speaker: '葵',
          line: '私は貴社の多様な課題解決力と、成長できる環境に魅力を感じ、志望しました。様々な業界のクライアントの課題を……',
          inner: '用意してきた答えを言っている。でもこれ、自分の言葉じゃない気がする。',
        },
        {
          speaker: '面接官',
          line: 'なるほど。では、コンサルで具体的に何をしたいですか？',
          inner: '定型文だな。でも1次だし、まあいいか。',
        },
      ],
      interviewerThought: '答えは整っているが、熱量がない。通過はさせるが、2次で詰める。',
      choices: [
        {
          label: '「業界問わずクライアントの課題を解決したい」と答える',
          nextSceneId: 'aoi_mar_first_pass',
          effects: [{ key: 'stress', delta: 5 }],
        },
        {
          label: '「地域の中小企業を支援したい」と正直に答える',
          nextSceneId: 'aoi_mar_first_pass',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 8 }],
        },
      ],
    },
    {
      id: 'aoi_mar_first_pass',
      location: 'phone',
      narrations: [
        '1次面接、通過。',
        '続けて2社目、3社目の1次面接も通過した。',
        'コミュニティのSlackには「葵さん無双じゃん」という声。',
        'でも葵は、何かがずれているような気がしていた。',
      ],
      dialogs: [
        {
          speaker: '里奈',
          line: '葵すごい！全部通過じゃん。コンサルの女神だ。',
        },
        {
          speaker: '葵',
          line: 'うん……ありがとう。',
          inner: '通過はしてる。でも面接のたびに「なぜコンサルか」の答えが微妙に違う。自分でもよくわかってない。',
        },
      ],
      choices: [
        {
          label: '2次面接の対策を始める',
          nextSceneId: 'aoi_apr_second',
          effects: [{ key: 'stress', delta: 5 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 4〜5月：面接の深掘りで崩れ始める
    // ────────────────────────────────────────────────
    {
      id: 'aoi_apr_second',
      location: 'interview_room',
      narrations: [
        '4月。2次面接が始まった。',
        '1次と違い、圧迫ではないが、深掘りが鋭い。',
      ],
      dialogs: [
        {
          speaker: '面接官（30代、鋭い目）',
          line: '先ほど「業界を問わず課題解決がしたい」とおっしゃいました。でも逆に言うと、どの業界でもいい、ということですよね？',
        },
        {
          speaker: '葵',
          line: 'あ、いえ、もちろん特に……。',
          inner: 'しまった。どの業界でもいい、に聞こえた。違う、私は……でも何が違うんだっけ。',
        },
        {
          speaker: '面接官',
          line: 'あなたが一番熱量を持って取り組めると思う分野って、どこですか？',
        },
        {
          speaker: '葵',
          line: '……（3秒の沈黙）……消費財、でしょうか。',
          inner: '咄嗟に出てきた答え。これ、本当にそう思ってる？',
        },
      ],
      interviewerThought: '軸がない。どこにでも行けるタイプ、つまり何も考えていない。通過は難しいな。',
      choices: [
        {
          label: '結果を待つ',
          nextSceneId: 'aoi_apr_rejection',
          effects: [{ key: 'stress', delta: 10 }],
        },
      ],
    },
    {
      id: 'aoi_apr_rejection',
      location: 'phone',
      narrations: [
        'お祈りメールが届いた。',
        '「誠に残念ながら、今回は内定を見送らせていただくこととなりました」。',
        '2社目も、3社目も。コンサル系、4社連続お祈り。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: '……。',
          inner: 'なんで落ちたんだろう。ES通過は全部したのに。面接、何がダメだったんだろう。',
        },
      ],
      choices: [
        {
          label: '面接の反省をしてみる',
          nextSceneId: 'aoi_may_reflection',
          effects: [{ key: 'mental', delta: -10 }, { key: 'stress', delta: 10 }],
        },
      ],
    },
    {
      id: 'aoi_may_reflection',
      location: 'home',
      narrations: [
        '5月。部屋に一人でいると、面接の場面がよみがえる。',
        '「あなたが一番熱量を持って取り組めると思う分野はどこですか？」',
        'あの質問に、今でも答えられない。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: 'コンサルで何がしたいのか……私、本当に答えを持ってなかったんだ。',
          inner: 'ケース対策は完璧だった。でもそれは道具を磨いただけで、何を作るかを考えていなかった。',
        },
      ],
      choices: [
        {
          label: 'もう一度「なぜコンサルか」を考える',
          nextSceneId: 'aoi_may_real_question',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: -5 }],
        },
        {
          label: '次の面接対策に集中する',
          sub: '考えすぎず、ひたすら練習で乗り切ろうとする',
          nextSceneId: 'aoi_may_last_interview',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -5 }],
        },
      ],
    },
    {
      id: 'aoi_may_real_question',
      location: 'home',
      narrations: [
        '葵はノートを開いた。',
        '「私はなぜコンサルに行きたいのか」ではなく、「私は何に心が動くのか」を書いた。',
        '……ゼミ論文。地方の商店街が廃れた話。祖父の工場が閉まったとき。',
        '大企業ではなく、地元の中小企業。支援したい。経営を、もっとうまくできるはずだという感覚。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: 'あ、そうか。私は「コンサル」がしたかったんじゃない。地域の会社を助けたかったんだ。',
          inner: 'それができるコンサルが、あるんじゃないか。大手じゃなくてもいい。自分の言葉で語れる場所を探そう。',
        },
      ],
      choices: [
        {
          label: '中小企業支援のコンサルを調べ始める',
          nextSceneId: 'aoi_may_last_interview',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }],
        },
      ],
    },
    {
      id: 'aoi_may_last_interview',
      location: 'interview_room',
      narrations: [
        '5月下旬。残っていたコンサル系最後の1社の最終面接。',
        '中堅だが地域企業支援に強みを持つコンサルティングファーム。',
        '面接官は50代の、静かな目をした女性だった。',
      ],
      dialogs: [
        {
          speaker: '面接官・田辺部長',
          line: '桐島さん、率直に聞きます。あなたは何がしたいですか？',
          inner: '今まで何十人もESを見てきた。でもこの子は何か、違う。揺れている。それが本物か確かめたい。',
        },
        {
          speaker: '葵',
          line: '（この人、本気で聞いている）',
          inner: 'これは本物の質問だ。用意した答えじゃなくて、本当のことを言わないといけない。',
        },
      ],
      interviewerThought: 'さあ、どう答える。ここが分かれ目だ。',
      choices: [
        {
          label: '「地域の中小企業の経営を支援したい」と、自分の言葉で話す',
          sub: '祖父の工場のことも話す。初めて「自分の志望動機」を語る',
          nextSceneId: 'aoi_may_pivot',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }, { key: 'stress', delta: -10 }],
        },
        {
          label: '「多様な課題解決力で御社に貢献したい」と答える',
          sub: 'また用意した言葉を使ってしまう',
          nextSceneId: 'aoi_jun_void_path',
          effects: [{ key: 'axis', delta: -8 }, { key: 'stress', delta: 5 }],
        },
      ],
    },
    {
      id: 'aoi_may_pivot',
      location: 'interview_room',
      narrations: [
        '葵は話した。祖父の工場が閉まったとき、何もできなかった悔しさ。',
        'ゼミで地方経済を調べるうちに芽生えた「誰かが支えていたら、違ったんじゃないか」という思い。',
        '大手でなくていい。自分の言葉で語れる仕事がしたい。',
      ],
      dialogs: [
        {
          speaker: '面接官・田辺部長',
          line: '……ありがとう。初めて、あなたのことが見えた気がします。',
          inner: '本物だ。経験は浅いけど、この子は本質を持っている。',
        },
        {
          speaker: '葵',
          line: '（……なんか、楽になった）',
          inner: 'ずっと怖かった。「コンサルらしい答え」を言わなきゃいけないって。でも本当のことを言ったら、面接官の目が変わった。',
        },
      ],
      choices: [
        {
          label: '結果を待つ',
          nextSceneId: 'aoi_jun_ending_branch',
          effects: [],
        },
      ],
    },
    {
      id: 'aoi_jun_void_path',
      location: 'interview_room',
      narrations: [
        'また、用意した言葉だった。',
        '面接官は静かにメモを取り、「ありがとうございました」と言った。',
        'その声に、温度がなかった。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: '（……また、同じだった）',
          inner: '自分の言葉で話せなかった。なぜ。怖かった？恥ずかしかった？',
        },
      ],
      choices: [
        {
          label: '結果を待つ',
          nextSceneId: 'aoi_jun_ending_branch',
          effects: [{ key: 'axis', delta: -10 }],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // 6月：エンディング分岐
    // ────────────────────────────────────────────────
    {
      id: 'aoi_jun_ending_branch',
      location: 'phone',
      narrations: [
        '6月。電話が来た。',
      ],
      choices: [
        {
          label: '（axis が高い場合のルート）→ 中小企業支援コンサルから内定',
          nextSceneId: 'aoi_ending_a',
          effects: [],
        },
        {
          label: '（axis が低い場合のルート）→ 大手コンサルから内定',
          nextSceneId: 'aoi_ending_b',
          effects: [],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // ENDING A: 自分の言葉で生きる
    // ────────────────────────────────────────────────
    {
      id: 'aoi_ending_a',
      location: 'home',
      narrations: [
        '「内定のご連絡です」という声に、葵は思わず涙が出た。',
        '大手じゃない。年収1000万確定ルートじゃない。',
        'でも初めて「自分の志望動機」で勝ち取った内定だった。',
        'Slackに書き込んだ。「内定しました。コンサルです。ありがとうございました」。',
        '里奈から「どこ？」とDMが来た。社名を言ったら「あ、そこ聞いたことない」と返ってきた。',
        'それで、ちょうどいいと思った。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: '私、コンサルで何がしたいか、やっと答えられる。',
          inner: 'ブランドじゃなかった。私がほしかったのは、自分の言葉で語れる仕事だった。',
        },
      ],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'aoi_ending_a_final',
          effects: [],
        },
      ],
    },
    {
      id: 'aoi_ending_a_final',
      location: 'home',
      narrations: [],
      isEnding: true,
      endingId: 'A',
      endingTitle: '自分の言葉を、見つけた',
      endingSummary: '葵は結局「コンサル」に行く。でも、その言葉の中身が変わった。ブランドへの憧れではなく、地域の中小企業を支えたいという自分の動機で。「コンサル」という言葉は同じでも、そこに込めたものは、もう誰かの言葉じゃなかった。',
      choices: [
        {
          label: 'もう一度プレイする',
          nextSceneId: 'aoi_oct_start',
          effects: [],
        },
      ],
    },

    // ────────────────────────────────────────────────
    // ENDING B: 「勝ち組」の空虚
    // ────────────────────────────────────────────────
    {
      id: 'aoi_ending_b',
      location: 'home',
      narrations: [
        '別の大手コンサルから内定が来た。',
        '誰もが知っている名前。コミュニティのSlackに書いたら、スタンプが100個ついた。',
        '「さすが葵さん」「勝ち組確定」「年収1000万ルート」。',
        '葵は画面を見ながら、何も感じなかった。',
        'ただ、ひとつだけわかったことがある。',
        '就活は終わった。でも「なぜここに行くのか」という問いは、まだ答えが出ていない。',
      ],
      dialogs: [
        {
          speaker: '葵',
          line: '……おめでとう、私。',
          inner: 'でも、私は何者になったんだろう。誰かの描いた「正解」の中に、入っただけじゃないのかな。',
        },
      ],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'aoi_ending_b_final',
          effects: [],
        },
      ],
    },
    {
      id: 'aoi_ending_b_final',
      location: 'home',
      narrations: [],
      isEnding: true,
      endingId: 'B',
      endingTitle: '正解の檻',
      endingSummary: '葵は「勝ち組」になった。でも、その言葉が誰かのものだったことに気づいてしまっている。内定先は一流。でも、自分の「なぜ」はまだ空白のままだ。就活は終わった。問いは続く。',
      choices: [
        {
          label: 'もう一度プレイする',
          nextSceneId: 'aoi_oct_start',
          effects: [],
        },
      ],
    },
  ],
}
