import type { Scenario } from './types'

export const sakuraScenario: Scenario = {
  charId: 'sakura',
  startSceneId: 'sakura_oct_start',
  scenes: [
    // ─────────────────────────────────────────
    // 10月：就活開始
    // ─────────────────────────────────────────
    {
      id: 'sakura_oct_start',
      location: 'university',
      narrations: [
        '10月。早稲田の文化構想学部。',
        'さくらは、就活を「ゲーム」だと思っていた。',
        'ルールを把握して、正しく動けば、勝てる。',
        'そして「勝ち」とは何か、彼女にははっきりとした答えがあった。',
        '──大手企業に内定すること。',
      ],
      dialogs: [
        { speaker: 'さくら', line: '就活って要は、正しい動き方さえわかれば勝てるゲームだよね。', inner: '攻略法がある。絶対ある。' },
        { speaker: '友人・凛', line: 'えー、さくらってすごいね。私まだ何も考えてないや。' },
        { speaker: 'さくら', line: '早めに動いたほうがいいよ。冬インターンからが本番だから。' },
      ],
      choices: [
        {
          label: '就活攻略本を3冊まとめ買いする',
          sub: '「まず情報収集から」',
          nextSceneId: 'sakura_oct_research',
          effects: [{ key: 'axis', delta: 5 }, { key: 'money', delta: -4500 }],
        },
        {
          label: 'OB訪問の予約をいれる',
          sub: '「動くなら早いほうがいい」',
          nextSceneId: 'sakura_oct_ob',
          effects: [{ key: 'mental', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'sakura_oct_research',
      location: 'home',
      narrations: [
        '3冊まとめ買い。自己分析・ES対策・面接対策。',
        'さくらは付箋を貼りながら読み進めた。',
        '「やりたいこと」を書くページに差し掛かったとき、ペンが止まった。',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: 'やりたいこと……大手メーカーで働きたい、でいいか。', inner: 'でもなんでメーカーなんだろ。なんとなく安定してそう、だけか？' },
      ],
      choices: [
        {
          label: 'とりあえず「安定・高年収・ネームバリュー」と書いておく',
          sub: '後で考えればいい',
          nextSceneId: 'sakura_nov_senior',
          effects: [{ key: 'axis', delta: -5 }],
        },
        {
          label: 'もう少し自己分析を深めてみる',
          sub: '「なんのために働くのか」',
          nextSceneId: 'sakura_nov_senior',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'sakura_oct_ob',
      location: 'cafe',
      narrations: [
        '大手広告代理店に就職した先輩・真理奈さんと渋谷のカフェで会った。',
        '真理奈さんはワインレッドのジャケットを着ていて、なんとなく「勝者」という感じがした。',
      ],
      dialogs: [
        { speaker: '先輩・真理奈', line: 'さくらちゃんは早いね。うちの会社、狙ってるの？' },
        { speaker: 'さくら', line: 'はい。大手でしっかりしたところで働きたいと思っていて。', inner: '「しっかりしたところ」って、何が「しっかり」してるんだろう。なんとなく言った。' },
        { speaker: '先輩・真理奈', line: '正直、入ってからが大変だけどね。でもまあ、内定が出れば勝ちって感じはあるよ（笑）。' },
        { speaker: 'さくら', line: 'そうですよね。内定が目標です。', inner: '内定が目標。そうだ、それでいい。' },
      ],
      choices: [
        {
          label: '大手に絞って、冬インターンを徹底的に受ける計画を立てる',
          nextSceneId: 'sakura_nov_senior',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 11月〜12月：先輩の言葉と冬インターン
    // ─────────────────────────────────────────
    {
      id: 'sakura_nov_senior',
      location: 'university',
      narrations: [
        '11月。サークルの先輩・悠介さんが就活の話をしてくれた。',
        '悠介さんは去年、大手コンサルに内定していた。',
        '「就活で勝った人」の話を聞ける機会だ、とさくらは思った。',
      ],
      dialogs: [
        { speaker: '先輩・悠介', line: '内定したら終わりだから、気楽にやったほうがいいよ。どこでもいいって気持ちで受けると逆に受かるし。' },
        { speaker: 'さくら', line: 'そうなんですか？', inner: 'それでいいのか？「どこでもいい」って、それって本当に就活に勝ったって言えるのか？' },
        { speaker: '先輩・悠介', line: '考えすぎると沼るから。まあ、内定出たら勝ちだよ。それだけ。' },
      ],
      choices: [
        {
          label: '先輩の言葉を受け入れる。気楽にやろう',
          sub: '「内定が目標。それだけ」',
          nextSceneId: 'sakura_dec_intern',
          effects: [{ key: 'stress', delta: -10 }, { key: 'axis', delta: -5 }],
        },
        {
          label: '先輩の言葉に引っかかりを覚える',
          sub: '「なんか違う気がするけど……」',
          nextSceneId: 'sakura_dec_intern',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'sakura_dec_intern',
      location: 'company',
      narrations: [
        '12月。冬インターン本番。',
        '大手メーカー・商社・広告代理店。3社掛け持ちのスケジュール。',
        'グループワークでさくらはいつも中心にいた。',
        '「できる人」という空気をまとうのが、得意だった。',
      ],
      dialogs: [
        { speaker: '面接官', line: 'さくらさんはリーダーシップがありますね。本選考でもぜひ。', inner: '（雰囲気がいい。でも、この子が本当に何をやりたいのかはわからないな。）' },
        { speaker: 'さくら', line: 'ありがとうございます！ぜひよろしくお願いします！', inner: 'やった。これ、いける感じがする。' },
      ],
      choices: [
        {
          label: 'インターン評価を糧に、ES準備を加速させる',
          nextSceneId: 'sakura_jan_es',
          effects: [{ key: 'mental', delta: 10 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '少し立ち止まる。「この会社で何をしたいのか」を考えてみる',
          nextSceneId: 'sakura_jan_es',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 10 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 1月〜2月：ES提出・手応え
    // ─────────────────────────────────────────
    {
      id: 'sakura_jan_es',
      location: 'home',
      narrations: [
        '1月。ESを書く夜が続いた。',
        'ガクチカ、志望動機、自己PR。',
        '文章は得意だった。でも、書けば書くほど、どこか空洞な感じがした。',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: '「貴社の多角的な事業領域に魅力を感じ……」また同じ書き出し。', inner: '「魅力を感じ」って、本当に感じてるか？感じてるふりをしているだけじゃないか？' },
      ],
      choices: [
        {
          label: '書き方を工夫して、評価されそうな内容に仕上げる',
          sub: '「まず通過することが大事」',
          nextSceneId: 'sakura_feb_interview',
          effects: [{ key: 'mental', delta: 5 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '「本当に魅力を感じていること」を書こうとして、手が止まる',
          sub: '「……何が魅力なんだろう」',
          nextSceneId: 'sakura_feb_interview',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 15 }],
          danger: true,
        },
      ],
    },

    {
      id: 'sakura_feb_interview',
      location: 'interview_room',
      narrations: [
        '2月。一次面接が始まった。',
        'さくらは準備を重ねていた。想定問答集も完璧だった。',
        '「あとは演じるだけ」と思っていた。',
      ],
      dialogs: [
        { speaker: '面接官', line: '入社したら、どんな仕事をしたいですか？', inner: '（みんな同じ答えを用意してくる。この子はどうだ。）' },
        { speaker: 'さくら', line: 'マーケティング部門で、消費者との接点を作る仕事に携わりたいと考えています。', inner: 'これで合ってるはず。でも……「携わりたい」って、ちゃんと思ってるか？' },
        { speaker: '面接官', line: '具体的に、どんなことがしたいですか？', inner: '（ちょっと表面的だな。もう一回聞いてみよう。）' },
        { speaker: 'さくら', line: '……消費者インサイトを分析して、新しい価値提案を……', inner: 'あれ、なんか言葉が出てこない。覚えてきた言葉しか言えない。' },
      ],
      interviewerThought: 'ESは上手い。でも「自分の言葉」がない。よく練られているが、空洞な感じがする。通すけど、最終で詰まりそう。',
      choices: [
        {
          label: '面接を通過する。次に向けてさらに準備を重ねる',
          nextSceneId: 'sakura_mar_offer',
          effects: [{ key: 'mental', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 3月：内定の電話
    // ─────────────────────────────────────────
    {
      id: 'sakura_mar_offer',
      location: 'home',
      narrations: [
        '3月中旬。午後2時。',
        '知らない番号からの着信。',
        'さくらは画面を見た瞬間、「これだ」とわかった。',
      ],
      dialogs: [
        { speaker: '人事担当者', line: '高橋さくらさんでしょうか。この度は最終面接にお越しいただきありがとうございました。ぜひ、弊社にいらしていただければと……' },
        { speaker: 'さくら', line: 'あ、ありがとうございます！ぜひよろしくお願いいたします！', inner: 'やった。内定だ。やった。……やった？' },
      ],
      choices: [
        {
          label: '電話を切る',
          nextSceneId: 'sakura_mar_void',
          effects: [],
        },
      ],
    },

    {
      id: 'sakura_mar_void',
      location: 'home',
      narrations: [
        '電話が切れた。',
        'さくらはスマホを机に置いて、窓の外を見た。',
        '3月の午後の光。外を歩く人たち。',
        '「あれ。嬉しくない。」',
        'その感覚が、じわじわと広がっていった。',
        '嬉しくない、という自分に、さくらは困惑した。',
        'これだけ準備して、これだけ頑張って、なのに──',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: 'なんで？嬉しいはずなのに。……なんで何も感じないんだろう。', inner: '「勝った」はずなのに。この感覚って、なんだ？' },
      ],
      onEnter: [{ key: 'stress', delta: 10 }],
      choices: [
        {
          label: '気のせいだ。内定した。それで十分だ',
          sub: '違和感を振り払う',
          nextSceneId: 'sakura_mar_friends',
          effects: [{ key: 'axis', delta: -10 }],
        },
        {
          label: 'この感覚を、少しだけ正面から見てみる',
          sub: '「なんで嬉しくないんだろう……」',
          nextSceneId: 'sakura_mar_friends',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 3月下旬：友達の「おめでとう」
    // ─────────────────────────────────────────
    {
      id: 'sakura_mar_friends',
      location: 'cafe',
      narrations: [
        '内定の翌日。友人グループに報告すると、すぐに「お茶しようよ！」となった。',
        'カフェに集まった5人。',
        '「さすがさくら」という声が飛び交った。',
      ],
      dialogs: [
        { speaker: '友人・凛', line: 'えーーー！！もう内定！？さくらやばすぎじゃん！おめでとう！！！' },
        { speaker: '友人・美月', line: '早っ！もう就活終わりじゃん！羨ましい！！' },
        { speaker: 'さくら', line: 'ありがとう（笑）。まあ、うまくいったかな。', inner: 'うまくいった。うまくいったのに、なんでこんなに笑顔が重いんだろう。' },
        { speaker: '友人・凛', line: 'これで春から遊べるじゃん！旅行行こうよ！', },
        { speaker: 'さくら', line: 'そうだね、行こう行こう！', inner: '……本当にここでよかったのかな。みんなは「終わり」って言うけど、なんか、終わった気がしない。' },
      ],
      choices: [
        {
          label: '友人の言葉通りに「就活終了」として気持ちを切り替える',
          nextSceneId: 'sakura_apr_deadline',
          effects: [{ key: 'stress', delta: -10 }, { key: 'axis', delta: -10 }],
        },
        {
          label: 'うまく笑えない自分を自覚する',
          sub: '「みんなには言えないけど……」',
          nextSceneId: 'sakura_apr_deadline',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: 10 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 4月：承諾期限と「本当にここでいいのか」
    // ─────────────────────────────────────────
    {
      id: 'sakura_apr_deadline',
      location: 'home',
      narrations: [
        '4月上旬。人事からメールが届いた。',
        '「内定承諾の意思確認を、4月末日までにお願いします」',
        '画面を見ながら、さくらは「押せない」と思った。',
        'なぜかはわからない。ただ、押せなかった。',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: '……本当にここでいいの？', inner: '「いい」って何をもって言えばいい？年収？知名度？やりたいこと？やりたいことって何？' },
      ],
      onEnter: [{ key: 'stress', delta: 10 }],
      choices: [
        {
          label: '他の企業のことも調べてみる',
          sub: '「比較してからでも遅くない」',
          nextSceneId: 'sakura_apr_explore',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: 5 }],
        },
        {
          label: '人事に期限延長をお願いするメールを書く',
          sub: '「もう少し考えさせてほしい」',
          nextSceneId: 'sakura_apr_extension',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: 10 }],
        },
        {
          label: 'このまま承諾ボタンを押す',
          sub: '「考えても仕方ない」',
          danger: true,
          nextSceneId: 'sakura_ending_b_prep',
          effects: [{ key: 'stress', delta: -15 }, { key: 'axis', delta: -20 }],
        },
      ],
    },

    {
      id: 'sakura_apr_explore',
      location: 'home',
      narrations: [
        'マイナビ、リクナビ、OpenWork。',
        'さくらは、「大手」以外の企業をはじめて真剣に見た。',
        'ベンチャー、スタートアップ、NPO──',
        '自分が今まで画面すら開かなかったページたち。',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: 'これ、面白そうだな。……あれ？私、「面白そう」って思ったの、今が初めてかも。', inner: '大手だから面白いじゃなくて、仕事の中身で面白いって思ったのかもしれない。' },
      ],
      choices: [
        {
          label: '気になった企業の説明会を予約してみる',
          nextSceneId: 'sakura_may_reopen',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 10 }],
        },
        {
          label: 'やっぱり大手が安心。探索をやめる',
          nextSceneId: 'sakura_apr_extension',
          effects: [{ key: 'axis', delta: -5 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'sakura_apr_extension',
      location: 'phone',
      narrations: [
        '期限延長のお願い。人事担当者の声には、微妙な間があった。',
      ],
      dialogs: [
        { speaker: '人事担当者', line: '……わかりました。5月末まで待ちます。ただ、あまり長くはお待ちできないので、早めにご判断ください。', inner: '（こういう子は時々いる。悩んでいるのはわかるけど、こっちも調整が大変なんだよな。）' },
        { speaker: 'さくら', line: 'ありがとうございます。必ずご連絡します。', inner: '怒らせてしまったかな。でも……やっぱり、もう少し考えたい。' },
      ],
      onEnter: [{ key: 'stress', delta: 15 }],
      choices: [
        {
          label: 'もう一度、就活を再開する',
          nextSceneId: 'sakura_may_reopen',
          effects: [{ key: 'axis', delta: 10 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 5月：就活再開・自問
    // ─────────────────────────────────────────
    {
      id: 'sakura_may_reopen',
      location: 'university',
      narrations: [
        '5月。周りの友人たちはもう就活の話をしていない。',
        'さくらだけが、まだ動いている。',
        'ゼミで隣の席の子に「まだやってるの？」と聞かれた。',
      ],
      dialogs: [
        { speaker: 'ゼミの同期・彩花', line: 'さくら、内定あるのにまだ就活してるの？欲張りじゃない（笑）', },
        { speaker: 'さくら', line: 'いや、なんか……ちゃんと考えたくて。', inner: '欲張り、か。違う気がするけど、うまく説明できない。' },
        { speaker: 'ゼミの同期・彩花', line: 'まあ、あんまり欲張ると詰まるよ？内定あるなら承諾しといたほうが安心じゃん。', },
        { speaker: 'さくら', line: '……そうだね。', inner: 'そうかもしれない。でも「安心」のために働くって、それって何を「安心」したいんだろう。' },
      ],
      choices: [
        {
          label: '新しく受けている企業の面接に行く',
          nextSceneId: 'sakura_may_interview2',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: 5 }],
        },
        {
          label: '同期の言葉に流されかけ、承諾しようとする',
          nextSceneId: 'sakura_ending_b_prep',
          effects: [{ key: 'stress', delta: -10 }, { key: 'axis', delta: -15 }],
        },
      ],
    },

    {
      id: 'sakura_may_interview2',
      location: 'interview_room',
      narrations: [
        '5月中旬。ソーシャルビジネス系のベンチャー企業の面接。',
        '大手のそれとは全然違う雰囲気だった。',
        '面接というより、対話、に近かった。',
      ],
      dialogs: [
        { speaker: '面接官（代表）', line: 'さくらさんは、何のために働くんですか？', inner: '（正直な答えを聞きたい。うちに来るのが正解かどうかより、自分の言葉を持っているかどうか。）' },
        { speaker: 'さくら', line: '……正直に言うと、今それを考え直している最中です。大手内定があるのに、承諾できなくて。', inner: 'あ、こんなことを面接で言っていいのかわからないけど、なんか言ってしまった。' },
        { speaker: '面接官（代表）', line: 'それ、すごく大事なことだと思いますよ。「なんで承諾できないか」、もう少し話してみてもらえますか？', inner: '（この子は面白い。正直だ。）' },
        { speaker: 'さくら', line: '内定の電話を切ったとき、嬉しくなかったんです。準備して、頑張って、「勝った」はずなのに……何も感じなかった。', inner: 'この話、初めて誰かにした。' },
      ],
      interviewerThought: 'この子の「気づき」は本物だ。うちに来るかどうかより、ちゃんと自分と向き合えているかどうかが気になる。',
      choices: [
        {
          label: '「勝ちたかっただけで、何をしたいかは考えていなかった」と口にする',
          nextSceneId: 'sakura_may_realise',
          effects: [{ key: 'axis', delta: 15 }, { key: 'stress', delta: 10 }],
        },
        {
          label: '途中で話を軌道修正して、無難な志望動機に戻す',
          nextSceneId: 'sakura_jun_choice',
          effects: [{ key: 'axis', delta: -5 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 5月末：気づきのシーン
    // ─────────────────────────────────────────
    {
      id: 'sakura_may_realise',
      location: 'cafe',
      narrations: [
        '面接の帰り道。さくらはひとりでコーヒーを飲んだ。',
        '窓の外に、会社帰りらしい人たちが通っていく。',
        'あの人たちは、仕事が好きなのだろうか。好きじゃないのだろうか。',
        'どちらでもいいのだろうか。',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: '私、ずっと「勝ちたかっただけ」だったのかもしれない。', inner: '「どこに行くか」より「何をするか」を、一度も真剣に考えていなかった気がする。' },
        { speaker: 'さくら（独白）', line: '……でも、遅くないよね？', inner: 'まだ5月だ。まだ間に合う。でも、リスクはある。' },
      ],
      onEnter: [{ key: 'axis', delta: 10 }],
      choices: [
        {
          label: '「勝ちの定義を変える」ことを自分に許す',
          nextSceneId: 'sakura_jun_choice',
          effects: [{ key: 'axis', delta: 15 }, { key: 'stress', delta: 15 }],
        },
        {
          label: '気づきを感じながら、大手内定に戻る',
          sub: 'リスクは取れない',
          nextSceneId: 'sakura_ending_b_prep',
          effects: [{ key: 'axis', delta: -5 }, { key: 'stress', delta: -10 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // 6月：最後の選択
    // ─────────────────────────────────────────
    {
      id: 'sakura_jun_choice',
      location: 'home',
      narrations: [
        '6月。内定承諾の最終期限まで3日。',
        '机の上には、2枚の紙。',
        '一枚は大手メーカーの内定承諾書。',
        'もう一枚は、5月に面接を受けたベンチャー企業からの内定通知書。',
        'どちらに、名前を書くか。',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: '「勝ち」って何だろう。', inner: '10月に「大手内定が勝ち」と思っていた自分。でも今は、違う気がしている。' },
        { speaker: 'さくら（独白）', line: '「正しい選択」って、誰が決めるんだろう。', inner: 'リスクがある道でも、自分の言葉がある。そっちの方が「勝ち」な気がしてきた。' },
      ],
      choices: [
        {
          label: '大手メーカーの承諾書に名前を書く',
          sub: '「安定」を選ぶ',
          nextSceneId: 'sakura_ending_b_prep',
          effects: [{ key: 'stress', delta: -20 }, { key: 'axis', delta: -15 }],
        },
        {
          label: 'ベンチャーの内定を選び、大手を辞退する',
          sub: '「自分の言葉」を選ぶ',
          danger: true,
          nextSceneId: 'sakura_ending_a_prep',
          effects: [{ key: 'stress', delta: 20 }, { key: 'axis', delta: 25 }],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Ending A 準備シーン
    // ─────────────────────────────────────────
    {
      id: 'sakura_ending_a_prep',
      location: 'phone',
      narrations: [
        'さくらは大手メーカーの人事に電話をかけた。',
        '「辞退します」という言葉を口にする前、3秒、呼吸した。',
      ],
      dialogs: [
        { speaker: '人事担当者', line: '……そうですか。残念ですが、わかりました。お気持ちは尊重します。', inner: '（せっかく内定出したのに。でも、止める気もない。）' },
        { speaker: 'さくら', line: 'お時間をいただいたのに、申し訳ありませんでした。本当に、ありがとうございました。', inner: '怖い。でも不思議と、後悔はない。' },
      ],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'sakura_ending_a',
          effects: [],
        },
      ],
    },

    {
      id: 'sakura_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '「勝ち」の再定義',
      endingSummary: 'さくらは大手内定を辞退し、ソーシャルビジネスのベンチャーへ進んだ。リスクがある選択だった。でも初めて、「やりたいことがある」と思えた。就活で学んだのは「大手に入る方法」じゃなかった。「自分にとっての勝ちは何か」を問い続けることだった。',
      narrations: [
        '内定承諾の電話を切った夜。',
        'さくらは窓の外を見た。',
        '3月に大手内定の電話を切ったときと、同じ窓。同じ景色。',
        'でも今回は、違う感覚があった。',
        '嬉しい、という感情が、ちゃんとあった。',
        '「勝ち」の定義が変わった日の話を、いつか誰かにしたいと思った。',
      ],
      choices: [],
    },

    // ─────────────────────────────────────────
    // Ending B 準備シーン
    // ─────────────────────────────────────────
    {
      id: 'sakura_ending_b_prep',
      location: 'home',
      narrations: [
        '承諾ボタンの前で、さくらは少しだけ止まった。',
        '3月の窓の外の景色を、もう一度思い出した。',
        '「嬉しくない」という感覚。',
        'でも──',
      ],
      dialogs: [
        { speaker: 'さくら（独白）', line: 'これで、いい。', inner: 'あの虚無感は、ずっと続くのかもしれない。でも今は、これが「正解」だと思う。……思う、ことにする。' },
      ],
      choices: [
        {
          label: '承諾する',
          nextSceneId: 'sakura_ending_b',
          effects: [],
        },
      ],
    },

    {
      id: 'sakura_ending_b',
      location: 'home',
      isEnding: true,
      endingId: 'B',
      endingTitle: '選んだ「勝ち」の重さ',
      endingSummary: 'さくらは大手メーカーの内定を承諾した。正しい選択かもしれない。でも3月に感じたあの虚無感は、ずっと胸の中に残っている。それを見ないようにするのか、いつか向き合うのか。就活は終わったが、その問いは終わらなかった。',
      narrations: [
        '承諾ボタンを押した。',
        '画面に「ありがとうございます」の文字。',
        '就活、終わり。',
        'さくらはスマホを置いて、窓の外を見た。',
        '3月と同じ窓。同じ景色。',
        'あのときの「嬉しくない」という感覚が、まだどこかに残っていた。',
        '大手内定。「さすがさくら」。',
        'それが「勝ち」のはずだった。',
        'でも──その問いに、さくらはまだ答えを持っていなかった。',
      ],
      choices: [],
    },
  ],
}
