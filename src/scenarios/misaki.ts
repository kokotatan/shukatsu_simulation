import type { Scenario } from './types'

// 田中 美咲 ─ 地方国立B4・秋田出身
// テーマ：就活は平等じゃない

export const misakiScenario: Scenario = {
  charId: 'misaki',
  startSceneId: 'misaki_oct_start',
  scenes: [

    // ── PHASE 1：10月 自己分析・就活開始 ──

    {
      id: 'misaki_oct_start',
      location: 'home',
      narrations: [
        '大学3年生、10月。',
        '秋田の実家。窓の外は早くも雪がちらついている。',
        '就活解禁まであと5ヶ月。',
        'ガイダンスで「自己分析から始めよう」と言われた。',
        '美咲はノートを広げて、最初の問いと向き合った。',
        '「私は何がしたいんだろう」',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '周りはもう動き始めている。でも私には、東京への移動費を考えるだけで頭が重くなる。',
        },
      ],
      choices: [
        {
          label: '志望業界を絞り込む作業をする',
          sub: 'まず「何がしたいか」を明確にする',
          nextSceneId: 'misaki_selfanalysis',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '地元就職の求人も調べておく',
          sub: '選択肢を広げておく',
          nextSceneId: 'misaki_local_check',
          effects: [{ key: 'stress', delta: -5 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_selfanalysis',
      location: 'home',
      narrations: [
        'ノートに書き出した。好きなこと、得意なこと、嫌なこと。',
        '「物流」という言葉が頭に浮かんだ。',
        '秋田で育って、不便さを感じてきた。',
        '荷物が届くのが遅い。選べるものが少ない。',
        '東京との違いを、ずっと感じてきた。',
      ],
      dialogs: [
        {
          speaker: '美咲',
          line: '物流を変えたい。地方と都市の差を埋めたい。',
          inner: '大げさかな。でも、これが本当に思っていることだ。',
        },
      ],
      choices: [
        {
          label: '物流・インフラ系企業を調べ始める',
          nextSceneId: 'misaki_research',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_local_check',
      location: 'home',
      narrations: [
        '秋田の求人サイトを開いた。',
        '地元の中堅企業、農業関連、公務員。',
        '悪くない。でも何かが引っかかる。',
        '「東京に行けなかった人が選ぶもの」という偏見が、自分の中にあることに気づいた。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: 'その偏見、どこから来たんだろう。本当にそうか？',
        },
      ],
      choices: [
        {
          label: '東京志望を維持しつつ地元も並行して見る',
          nextSceneId: 'misaki_research',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: -3 }],
        },
      ],
    },

    {
      id: 'misaki_research',
      location: 'university',
      narrations: [
        '物流系の大手3社と、地域インフラ系の中堅企業をリストアップした。',
        '大手の採用ページを開いたら、「選考会場：東京・大阪・名古屋」と書いてあった。',
        '秋田から東京。新幹線で往復2万2千円。',
        '説明会だけで何回行くことになるんだろう。',
      ],
      dialogs: [
        {
          speaker: 'サークルの先輩（電話）',
          line: 'あ、美咲ちゃん就活どう？インターン申し込んだ？',
        },
        {
          speaker: '美咲',
          line: 'まだです。冬のやつ、考えてます',
          inner: '交通費のこと、正直に言えない。',
        },
        {
          speaker: '先輩',
          line: 'とりあえずたくさん行っておいた方がいいよ、経験になるから',
          inner: '',
        },
      ],
      choices: [
        {
          label: '冬インターンに応募する',
          sub: '交通費は後から考える',
          nextSceneId: 'misaki_winter_intern_apply',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: 5 }],
        },
        {
          label: 'オンラインインターンを中心に探す',
          sub: '交通費をかけずに経験を積む',
          nextSceneId: 'misaki_online_intern',
          effects: [{ key: 'stress', delta: -3 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    // ── PHASE 2：12月 インターン選考 ──

    {
      id: 'misaki_winter_intern_apply',
      location: 'home',
      narrations: [
        '11月。インターンのESを書き始めた。',
        '「学生時代に頑張ったこと」',
        '美咲には、派手なエピソードがない。',
        '地元の食堂でバイト。勉強。たまに友達と遊ぶ。',
        'それだけの3年間だった。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '「頑張ったこと」って何だろう。毎月の生活費を奨学金でやりくりしてきたこと、頑張ったことに入るのかな。',
        },
      ],
      choices: [
        {
          label: 'バイトでの経験を軸にESを書く',
          sub: '地道だけど、本当のことを書く',
          nextSceneId: 'misaki_intern_es_baito',
          effects: [{ key: 'axis', delta: 8 }],
        },
        {
          label: '物流への思いを前面に出して書く',
          sub: '経験より志望動機で勝負する',
          nextSceneId: 'misaki_intern_es_vision',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_intern_es_baito',
      location: 'home',
      narrations: [
        '食堂のバイトについて書いた。',
        '常連客との関係、地元の人の生活に触れたこと。',
        '「地域のインフラとしての飲食店を支えた」と書いたら、なんか大げさだった。消した。',
        '結局シンプルに、「お客様の満足のために動いた」と書いた。',
        'どこにでもある文章になった気がした。',
      ],
      choices: [
        {
          label: 'このまま提出する',
          nextSceneId: 'misaki_intern_result_normal',
          effects: [{ key: 'stress', delta: 3 }],
        },
        {
          label: 'もう一度書き直す',
          nextSceneId: 'misaki_intern_es_vision',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_intern_es_vision',
      location: 'home',
      narrations: [
        '視点を変えて書いた。',
        '「秋田で育ち、物流の不均等さを肌で感じてきた。その課題を、この業界から解決したい」',
        '正直な文章になった。',
        'これで落ちたとしても、後悔はしない気がした。',
      ],
      choices: [
        {
          label: '提出する',
          nextSceneId: 'misaki_intern_result_good',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_intern_result_good',
      location: 'phone',
      narrations: [
        '12月初旬。インターン選考通過のメールが来た。',
        '物流大手2社、どちらも通過した。',
        '嬉しかった。本当に嬉しかった。',
        'でもすぐに現実が来た。',
        '会場：東京。日程：2泊3日。',
        '交通費＋宿泊費で、おそらく5万円以上かかる。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '奨学金の月額が15万円。家賃・食費・光熱費で12万円くらい使う。残り3万円で交通費5万円は、無理だ。',
        },
      ],
      choices: [
        {
          label: '親に頼む',
          sub: '正直に事情を話す',
          nextSceneId: 'misaki_ask_parents',
          effects: [{ key: 'mental', delta: -8 }, { key: 'stress', delta: 10 }],
        },
        {
          label: 'バイトを増やして自力で工面する',
          sub: '頼みたくない',
          cost: 50000,
          nextSceneId: 'misaki_work_harder',
          effects: [{ key: 'stress', delta: 15 }, { key: 'mental', delta: -5 }],
        },
        {
          label: '1社だけ行く',
          sub: 'どちらかを諦める',
          cost: 25000,
          nextSceneId: 'misaki_intern_one',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_intern_result_normal',
      location: 'phone',
      narrations: [
        '1社通過、1社落ちた。',
        '通過した会社のインターン。会場は東京。',
      ],
      choices: [
        {
          label: '行く',
          cost: 25000,
          nextSceneId: 'misaki_intern_one',
          effects: [{ key: 'stress', delta: 8 }],
        },
        {
          label: 'オンライン参加できないか問い合わせる',
          nextSceneId: 'misaki_online_intern',
          effects: [{ key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_ask_parents',
      location: 'home',
      narrations: [
        '電話した。母が出た。',
      ],
      dialogs: [
        {
          speaker: '美咲',
          line: '就活のインターンが東京で…交通費と宿泊費で5万くらいかかるんだけど、少し援助してもらえないかな',
          inner: '言いたくなかった。でも、仕方ない。',
        },
        {
          speaker: '母',
          line: '…5万か。そうか、就活ってそんなにかかるんだね',
          inner: '',
        },
        {
          speaker: '美咲',
          line: 'うん。東京の子はこういうお金かかんないんだけど、私は毎回かかっちゃって',
        },
        {
          speaker: '母',
          line: 'わかった。出す。その代わり、ちゃんと行って来い',
        },
        {
          speaker: '美咲（心の声）',
          line: '「ちゃんと行って来い」。その言葉の重さが、胸に刺さった。',
        },
      ],
      choices: [
        {
          label: '両社のインターンに参加する',
          cost: 50000,
          nextSceneId: 'misaki_intern_both',
          effects: [{ key: 'mental', delta: -10 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_work_harder',
      location: 'university',
      narrations: [
        '12月、バイトを週5に増やした。',
        '授業・バイト・ES。睡眠が削れた。',
        '「就活に集中できない」という焦りが、じわじわと来た。',
      ],
      choices: [
        {
          label: 'それでもインターンに行く',
          nextSceneId: 'misaki_intern_one',
          effects: [{ key: 'stress', delta: 10 }, { key: 'mental', delta: -5 }],
        },
      ],
    },

    {
      id: 'misaki_online_intern',
      location: 'home',
      narrations: [
        'オンラインのインターンに参加した。',
        '画面越しに、東京の学生たちと同じグループになった。',
        '彼らの話す内容が、違う。OB訪問の話、複数のインターン掛け持ちの話。',
        '情報量が違う。行動量が違う。',
        'でも、美咲にできることをやった。',
        '発言の内容では負けないようにした。',
      ],
      choices: [
        {
          label: 'このままオンライン中心で就活を進める',
          nextSceneId: 'misaki_jan_planning',
          effects: [{ key: 'stress', delta: -5 }, { key: 'axis', delta: 5 }],
        },
        {
          label: '春からは対面選考に積極的に行く覚悟を決める',
          nextSceneId: 'misaki_jan_planning',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_intern_one',
      location: 'company',
      narrations: [
        '12月下旬。東京での3日間インターン。',
        '初日、オフィスのガラス張りのビルに圧倒された。',
        'グループワークで、東京・早慶の学生たちと同じテーブルになった。',
        '彼らの話し方、知っている情報、自信の量。',
        '美咲は内心、萎縮していた。',
      ],
      dialogs: [
        {
          speaker: 'グループメンバー（慶應男子）',
          line: 'ここの物流センター、前回のインターンでも来たんですよね。知り合いに現場社員がいて',
          inner: '',
        },
        {
          speaker: '美咲（心の声）',
          line: '前回のインターン。知り合いの社員。私は今日が初めてで、知り合いもいない。',
        },
      ],
      choices: [
        {
          label: '萎縮せず積極的に発言する',
          sub: '自分の視点で勝負する',
          nextSceneId: 'misaki_intern_active',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '黙って周りのやり方を学ぶ',
          sub: '情報収集に徹する',
          nextSceneId: 'misaki_intern_passive',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_intern_both',
      location: 'company',
      narrations: [
        '2社のインターンを駆け足でこなした。',
        '1社目の物流大手、2社目の中堅インフラ企業。',
        '中堅の方が、働いている人たちの顔が好きだと思った。',
        'でも大手の規模感は、夢があった。',
        '帰りの新幹線、5万円分の経験を胸に刻んだ。',
      ],
      choices: [
        {
          label: '大手を第一志望にする',
          nextSceneId: 'misaki_jan_planning',
          effects: [{ key: 'axis', delta: 8 }],
        },
        {
          label: '中堅企業も同等に志望する',
          nextSceneId: 'misaki_jan_planning',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'misaki_intern_active',
      location: 'company',
      narrations: [
        '地方の物流課題について、美咲は具体的なデータを出して発言した。',
        '「秋田では、翌日配送が当たり前じゃない。その格差を埋める仕組みが必要だと思います」',
        'グループが少し静かになった。',
        '慶應の彼が言った。「それ、知らなかった。確かに都市型の発想だけじゃ足りないですね」',
        '美咲は、初めてここにいていいと思えた。',
      ],
      choices: [
        {
          label: 'インターンの残りも積極的に動く',
          nextSceneId: 'misaki_intern_both',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'misaki_intern_passive',
      location: 'company',
      narrations: [
        '3日間、ほぼ聞き役だった。',
        '東京の学生の動き方は学べた。でも、自分を出せなかった。',
        '帰りの新幹線で、少し後悔した。',
      ],
      choices: [
        {
          label: '次は必ず発言する、と決める',
          nextSceneId: 'misaki_jan_planning',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    // ── PHASE 3：1〜2月 本選考準備 ──

    {
      id: 'misaki_jan_planning',
      location: 'home',
      narrations: [
        '1月。正月も実家で過ごしながら、志望企業リストを作った。',
        '第一志望グループ：大手物流3社。',
        '第二志望グループ：インフラ系中堅5社。',
        '滑り止め：地元の企業2社。',
        '計10社。東京の学生なら移動費ゼロ。美咲は最低でも20万円かかる計算だ。',
      ],
      dialogs: [
        {
          speaker: '父',
          line: '美咲、就活どうだ。東京行くのか？',
        },
        {
          speaker: '美咲',
          line: 'うん。大手の物流会社を受けたい',
        },
        {
          speaker: '父',
          line: 'そうか。…秋田に帰って来る気はないのか',
          inner: '',
        },
        {
          speaker: '美咲',
          line: '…今は、東京で頑張りたい',
          inner: '父の顔が少し曇った。その顔を見るのが、一番つらい。',
        },
      ],
      choices: [
        {
          label: '東京志望を貫く',
          nextSceneId: 'misaki_feb_ob',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: -5 }],
        },
        {
          label: '地元企業も真剣に検討する',
          nextSceneId: 'misaki_local_serious',
          effects: [{ key: 'stress', delta: -8 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_local_serious',
      location: 'home',
      narrations: [
        '地元の企業を調べ直した。',
        '秋田に本社を置く食品・農業関連の会社。',
        '給与は低い。でも地元の課題に直接向き合える仕事がある。',
        '東京に出ることが「正解」だと思い込んでいたけど、本当にそうか。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '物流の課題を解決したいなら、地元から動くという選択肢もある。でも、それは諦めじゃないか。いや、諦めじゃない…かもしれない。',
        },
      ],
      choices: [
        {
          label: '東京と地元、両方エントリーする',
          nextSceneId: 'misaki_feb_ob',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'misaki_feb_ob',
      location: 'online',
      narrations: [
        '2月。OB・OG訪問を試みた。',
        '大学のキャリアセンターに行ったら、「志望企業のOBが少ないです」と言われた。',
        '地方国立大学の悲しさだ。',
        'LinkedInで直接連絡を試みた。5人にメッセージを送って、返事は1人だった。',
      ],
      dialogs: [
        {
          speaker: 'OBの社員（オンライン）',
          line: '地方から来たんですね。うちは転勤が多いですよ、大丈夫ですか',
          inner: '（地方出身の子は、転勤で地元に帰れなくなることを嫌がることがある。確認しておこう）',
        },
        {
          speaker: '美咲',
          line: '転勤は全然大丈夫です。むしろいろんな地域で仕事がしたいです',
        },
        {
          speaker: 'OBの社員',
          line: 'それはいいですね。ちなみに選考、どんな準備してますか？',
          inner: '（正直で好感が持てる）',
        },
      ],
      choices: [
        {
          label: '正直に「交通費が大変で情報が少ない」と話す',
          nextSceneId: 'misaki_ob_honest',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '普通に志望動機と対策を話す',
          nextSceneId: 'misaki_feb_es',
          effects: [{ key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_ob_honest',
      location: 'online',
      narrations: [],
      dialogs: [
        {
          speaker: '美咲',
          line: '実は、東京まで来るたびに往復2万2千円かかって。情報も少なくて、正直かなり不利だと感じています',
        },
        {
          speaker: 'OBの社員',
          line: '…そうか。それは大変だな。',
          inner: '（この正直さは、うちの社風に合う気がする）',
        },
        {
          speaker: 'OBの社員',
          line: '一つアドバイスするなら、その「地方から来た」という事実を、弱みじゃなくて強みとして使ってみてください。実際に見てきたものが違う',
        },
        {
          speaker: '美咲（心の声）',
          line: 'そうか。弱みじゃなくて強み。頭ではわかっていたけど、人に言われて初めて腑に落ちた。',
        },
      ],
      choices: [
        {
          label: 'ESに地方視点を積極的に盛り込む',
          nextSceneId: 'misaki_feb_es',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    // ── PHASE 4：3月 合説・ES提出 ──

    {
      id: 'misaki_feb_es',
      location: 'home',
      narrations: [
        '2月後半。ESを書き始めた。',
        '「志望動機」「学生時代に頑張ったこと」「入社後にやりたいこと」',
        '地方の視点を軸に書いた。',
        '「秋田で育ち、物流の不均等さを当たり前として生きてきた。それを変えるために御社を志望します」',
        '自分の言葉で書けた気がした。',
      ],
      choices: [
        {
          label: 'ES提出。合説にも行く',
          cost: 22000,
          nextSceneId: 'misaki_march_jobfair',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: 3 }],
        },
        {
          label: 'ESを提出。合説はオンラインで代替',
          nextSceneId: 'misaki_es_results',
          effects: [{ key: 'stress', delta: 3 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_march_jobfair',
      location: 'job_fair',
      narrations: [
        '3月。東京ビッグサイト。合同説明会。',
        '秋田を朝5時に出た。新幹線の中でスーツを着た。',
        '会場に着いたら、もう人だらけだった。',
        '同じ大学の子は誰もいない。',
        '東京のブランド大学の子たちが、当たり前のようにここにいる。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '彼女たちは昨日の夜もここに来られる。私は今日のために2万円使った。それだけで、もう違う。',
        },
        {
          speaker: '企業ブースの社員',
          line: 'どちらからいらしたんですか？',
        },
        {
          speaker: '美咲',
          line: '秋田からです',
        },
        {
          speaker: '企業ブースの社員',
          line: 'わ、遠くからありがとうございます！',
          inner: '（地方から来てくれる学生は、本気度が違うことが多い）',
        },
      ],
      choices: [
        {
          label: '積極的にブースを回り情報収集する',
          nextSceneId: 'misaki_jobfair_active',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '第一志望の企業だけに絞って深く話す',
          nextSceneId: 'misaki_jobfair_focus',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: -3 }],
        },
      ],
    },

    {
      id: 'misaki_jobfair_active',
      location: 'job_fair',
      narrations: [
        '6社のブースを回った。',
        '足がパンパンになった。',
        '帰りの新幹線で、メモをまとめた。',
        'ここに来る価値はあった。',
        'でも、東京の子たちとの「情報格差」がまだ気になった。',
        '同じ土俵に立つだけで、コストが違いすぎる。',
      ],
      choices: [
        {
          label: '気持ちを切り替えてES仕上げに集中する',
          nextSceneId: 'misaki_es_results',
          effects: [{ key: 'mental', delta: 5 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_jobfair_focus',
      location: 'job_fair',
      narrations: [
        '第一志望の物流大手のブースで、30分話し込んだ。',
        '若手社員が「地方の物流ネットワーク強化が今の課題です」と言った。',
        '美咲は、自分の話をした。秋田での経験、感じてきた課題。',
        '社員の目が変わった。',
      ],
      dialogs: [
        {
          speaker: '若手社員',
          line: '名刺交換させてください。選考でお会いできることを楽しみにしています',
          inner: '（この子、本物だ。ぜひ選考で会いたい）',
        },
      ],
      choices: [
        {
          label: 'その社員の名刺を大切にしまう',
          nextSceneId: 'misaki_es_results',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    // ── PHASE 5：4月 書類選考・一次面接 ──

    {
      id: 'misaki_es_results',
      location: 'home',
      narrations: [
        '3月末。ESの結果が次々来た。',
        '物流大手A社：通過。',
        '物流大手B社：不合格。',
        '中堅インフラC社：通過。',
        '中堅D社：通過。',
        '大手E社：不合格。',
        '3社通過、2社落ちた。',
        '落ちた瞬間、少し泣いた。でも、3社ある。まだ続く。',
      ],
      choices: [
        {
          label: '一次面接の準備を始める',
          nextSceneId: 'misaki_interview_prep',
          effects: [{ key: 'mental', delta: 3 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_interview_prep',
      location: 'university',
      narrations: [
        '4月。一次面接が始まった。',
        '大学のキャリアセンターで面接練習をお願いした。',
        '「地方から来ている、という話は積極的にした方がいいですよ」とアドバイスをもらった。',
        '美咲は「弱みじゃなくて強み」というOBの言葉を思い出した。',
      ],
      choices: [
        {
          label: '第一志望A社の一次面接へ',
          cost: 22000,
          nextSceneId: 'misaki_1st_interview_A',
          effects: [{ key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_1st_interview_A',
      location: 'interview_room',
      narrations: [
        '物流大手A社、一次面接。',
        '面接官は30代の人事担当。',
        '緊張した。でも、ここまで来るのにかかったコストを思うと、緊張している場合じゃなかった。',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: '田中さん、秋田からいらしたんですね。まず自己紹介をお願いします',
          inner: '（地方からわざわざ来てくれた。本気度は感じる）',
        },
        {
          speaker: '美咲',
          line: '秋田県出身の田中美咲です。物流の課題を解決したいという思いから御社を志望しました。秋田で育ち、物流の地域格差を身近に感じてきたことが、このキャリアを目指すきっかけです',
        },
        {
          speaker: '面接官',
          line: '物流の地域格差、具体的にどういうことを感じてきたんですか？',
          inner: '（こういう具体的な出発点を持っている候補者は少ない）',
        },
      ],
      choices: [
        {
          label: '秋田での具体的な体験を話す',
          nextSceneId: 'misaki_1st_honest',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '一般的な物流課題の話をする',
          nextSceneId: 'misaki_1st_generic',
          effects: [{ key: 'axis', delta: 3 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_1st_honest',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '美咲',
          line: '地元のスーパーには、都市部で当たり前に売っているものが入ってこないことがあります。翌日配送も、秋田では珍しい。同じ日本に住んでいるのに、インフラの恩恵が違う。それを変えたいと思っています',
        },
        {
          speaker: '面接官',
          line: 'なるほど。それは御社のどの事業で解決できると思いますか？',
          inner: '（次の質問で深掘りしよう。この子は本物の動機を持っている）',
        },
        {
          speaker: '美咲',
          line: '御社の地域密着型の配送ネットワーク事業です。まず現場を知り、ゆくゆくは地方のラストワンマイル物流に携わりたいと思っています',
        },
      ],
      choices: [
        {
          label: '面接を続ける',
          nextSceneId: 'misaki_1st_result_good',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_1st_generic',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '美咲',
          line: 'EC市場の拡大に伴い、ラストワンマイルの配送コストが課題になっています。そこに御社のネットワークで貢献したいと思っています',
          inner: '当たり障りのない答えになってしまった。',
        },
        {
          speaker: '面接官',
          line: '田中さんが「地域格差を感じてきた」とおっしゃっていましたが、もう少し具体的に聞かせてもらえますか',
          inner: '（最初の発言が気になった。もう少し掘ってみよう）',
        },
      ],
      choices: [
        {
          label: '正直に秋田での体験を話す',
          nextSceneId: 'misaki_1st_honest',
          effects: [{ key: 'axis', delta: 8 }],
        },
      ],
    },

    {
      id: 'misaki_1st_result_good',
      location: 'phone',
      narrations: [
        '面接から3日後、通過の連絡が来た。',
        '同じ週に、中堅C社の一次も通過した。',
        'D社は落ちた。',
        '2社が二次に進んだ。',
        '美咲はまだ立っている。',
      ],
      choices: [
        {
          label: '二次面接の準備をする',
          nextSceneId: 'misaki_2nd_prep',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 6：5月 二次面接・葛藤 ──

    {
      id: 'misaki_2nd_prep',
      location: 'home',
      narrations: [
        '5月。二次面接。',
        '今度は、より深い質問が来ると聞いた。',
        '「キャリアビジョン」「5年後・10年後の自分」',
        '正直、具体的に描けていない。',
        'でも、嘘をつくのは違う。',
        '美咲は、自分が本当にどうしたいかを考えた。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '東京で働くということは、家賃が高くて、奨学金の返済もある。秋田の親に会いに帰るのも、新幹線代がかかる。それでも東京に行きたいのか。…うん、行きたい。でも、いつかは秋田に戻ることも考えている。それは弱さじゃない。',
        },
      ],
      choices: [
        {
          label: '「将来は秋田に貢献したい」という軸を前面に出す',
          nextSceneId: 'misaki_2nd_interview',
          effects: [{ key: 'axis', delta: 12 }],
        },
        {
          label: '東京でのキャリアを積むことに集中した答えを準備する',
          nextSceneId: 'misaki_2nd_interview',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_2nd_interview',
      location: 'interview_room',
      narrations: [
        '物流大手A社、二次面接。',
        '面接官は営業部の課長と、人事の部長。',
        '圧迫気味の質問が来た。',
      ],
      dialogs: [
        {
          speaker: '面接官（営業課長）',
          line: '田中さんは地方出身ということですが、東京配属になる可能性が高いです。慣れない環境でやっていける自信はありますか？',
          inner: '（地方出身者が環境変化で早期離職するケースがある。確認しておこう）',
        },
        {
          speaker: '美咲',
          line: 'はい。むしろ東京という環境に飛び込んでみたいという気持ちがあります。慣れない環境で揉まれることを、前向きに捉えています',
          inner: 'これは本当だ。怖いけど、本当だ。',
        },
        {
          speaker: '面接官（人事部長）',
          line: '秋田の大学を選んだ理由を教えてください',
          inner: '（地元の大学を選んだ背景に、経済的な理由があることが多い）',
        },
        {
          speaker: '美咲',
          line: '奨学金での進学のため、地元の国立大学を選びました。正直に言うと、東京の大学への進学は経済的に難しかったです',
          inner: '言えた。恥ずかしいことじゃない。',
        },
        {
          speaker: '面接官（人事部長）',
          line: '…ありがとうございます。それは、大学選びにどう影響しましたか？',
          inner: '（正直に言える子だ。これは誠実さとして評価できる）',
        },
      ],
      choices: [
        {
          label: '「だからこそ物流の格差が身近な問題として見えた」と続ける',
          nextSceneId: 'misaki_2nd_climax',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
        {
          label: '「それでも諦めずに東京を目指した」という話をする',
          nextSceneId: 'misaki_2nd_climax',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_2nd_climax',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '美咲',
          line: '大学を地元で選んだことで、東京との格差を肌で感じ続けました。就活でも、情報量や交通費の差を実感しています。でも、その経験があるから、物流の課題が抽象論じゃなくて、自分ごととして見えます。それを仕事にしたいんです',
        },
        {
          speaker: '面接官（人事部長）',
          inner: '（…これは本物だ。この子を採りたい）',
          line: '田中さん、最後に何か聞いておきたいことはありますか？',
        },
        {
          speaker: '美咲',
          line: '地方出身の社員が、地方の物流課題に直接関われる機会はありますか？',
        },
        {
          speaker: '面接官（営業課長）',
          line: 'ありますよ。地域戦略部というチームがあって、地方出身者が活躍しています',
          inner: '（このまま最終に上げよう）',
        },
      ],
      choices: [
        {
          label: '二次面接終了。結果を待つ',
          nextSceneId: 'misaki_2nd_result',
          effects: [{ key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'misaki_2nd_result',
      location: 'home',
      narrations: [
        '5月中旬。',
        'A社：最終面接に進む連絡が来た。',
        'C社も最終に進んだ。',
        '2社とも最終。信じられなかった。',
        '母に電話した。母は黙ってから、「よかったな」と言った。',
        '短い一言だったけど、美咲は声が出なかった。',
      ],
      choices: [
        {
          label: '最終面接の準備をする',
          nextSceneId: 'misaki_final_prep',
          effects: [{ key: 'mental', delta: 10 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    // ── PHASE 7：6月 最終面接 ──

    {
      id: 'misaki_final_prep',
      location: 'home',
      narrations: [
        '5月下旬。最終面接の準備。',
        '「役員面接では、意志の強さを見られる」とネットに書いてあった。',
        '美咲は自分に問いかけた。',
        '「入社後、本当に東京でやっていけるか」',
        '「いつか秋田に戻ることを望む自分は、正直に話すべきか」',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: 'どこまで正直に話すべきだろう。就活は「本音を隠す場所」なのか。でも、隠して入社したとして、ずっとその重さを抱えて働くのか。',
        },
      ],
      choices: [
        {
          label: '「将来は地元に貢献したい」という本音も含めて話す',
          nextSceneId: 'misaki_final_honest',
          effects: [{ key: 'axis', delta: 15 }],
        },
        {
          label: '「東京で長く働きたい」に絞って話す',
          sub: '無難な答えで乗り切る',
          nextSceneId: 'misaki_final_safe',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_final_honest',
      location: 'interview_room',
      narrations: [
        '6月。物流大手A社、最終面接。',
        '役員3名。重厚な部屋。',
        '秋田から来た、奨学金の学生が、ここにいる。',
      ],
      dialogs: [
        {
          speaker: '役員A',
          line: '田中さん、率直に聞きます。10年後、どこにいたいですか？',
          inner: '（この質問で本音が出る）',
        },
        {
          speaker: '美咲',
          line: '10年後は、御社で物流の地域課題に携わる専門家になっていたいと思っています。そして、いつかは秋田を含む地方の物流を、現場で変えることに関わりたいと考えています',
          inner: '全部言った。これが私の答えだ。',
        },
        {
          speaker: '役員B',
          line: '秋田に戻りたい、ということですか？',
          inner: '（転居不可と捉えるべきか、地方貢献として評価すべきか）',
        },
        {
          speaker: '美咲',
          line: '転勤は全く問題ありません。でも、自分の経験が最も活きる場所として、地方の物流課題に向き合える仕事を、御社でしたいと思っています',
        },
        {
          speaker: '役員A',
          inner: '（…この子は軸がある。しかも正直だ）',
          line: '最後に一つ。就活を通じて、最も大変だったことは何ですか？',
        },
        {
          speaker: '美咲',
          line: '交通費です。東京まで来るたびに2万2千円かかります。奨学金で生活しながら、毎回の選考に来るためのお金を工面することが、一番大変でした。でも、来てよかったと思っています。今、ここにいられているので',
        },
        {
          speaker: '役員B',
          inner: '（……この子を落とすことはできないな）',
          line: '（静かに）ありがとうございました。',
        },
      ],
      choices: [
        {
          label: '結果を待つ',
          offerCountDelta: 1,
          nextSceneId: (stats: import('@/types').GameStats) => (stats.stress >= 80 ? 'misaki_ending_c' : 'misaki_ending_a'),
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    {
      id: 'misaki_final_safe',
      location: 'interview_room',
      narrations: ['最終面接。無難に答えた。'],
      dialogs: [
        {
          speaker: '役員A',
          line: '田中さん、長く働いてもらえると思っていいですか？',
          inner: '（地方出身で、将来戻りたいのかどうかを聞きたいが、聞けない雰囲気だ）',
        },
        {
          speaker: '美咲',
          line: 'はい、東京でしっかりキャリアを積みたいと思っています',
          inner: '本音は少し違う。でも、これで乗り切る。',
        },
      ],
      choices: [
        {
          label: '結果を待つ',
          offerCountDelta: 1,
          nextSceneId: (stats: import('@/types').GameStats) => (stats.stress >= 80 ? 'misaki_ending_c' : 'misaki_ending_b'),
          effects: [{ key: 'stress', delta: 8 }],
        },
      ],
    },

    // ── ENDING ──

    {
      id: 'misaki_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '2万2千円の先に',
      narrations: [
        '6月第2週。',
        '知らない番号から電話が来た。',
        '「内定のご連絡です」',
        '美咲は電話を切ってから、しばらく動けなかった。',
        '窓の外は秋田の夕暮れ。田んぼに風が吹いていた。',
        '母に電話した。「受かった」と言ったら、母が泣いた。',
        '美咲も泣いた。',
        '',
        '東京まで何回来ただろう。',
        '交通費だけで30万円を超えた。',
        '奨学金と、親の援助と、バイトのお金で、ここまで来た。',
        '',
        '就活は平等じゃなかった。',
        'でも、美咲は諦めなかった。',
        '来年4月、美咲は東京で働く。',
        'いつか、秋田の物流を変えるために。',
      ],
      choices: [],
    },

    {
      id: 'misaki_ending_b',
      location: 'home',
      isEnding: true,
      endingId: 'B',
      endingTitle: '嘘のない場所へ',
      narrations: [
        '内定が出た。',
        '喜んだ。でも、最終面接での自分の言葉が引っかかった。',
        '「東京でしっかりキャリアを積みたい」',
        '嘘じゃない。でも、全部じゃない。',
        '',
        '入社してから、本音を出すタイミングはあるだろうか。',
        'わからない。でも、働きながら探していくしかない。',
        '',
        '来年4月、美咲は東京に出る。',
        '少しだけ、心に宿題が残ったまま。',
      ],
      choices: [],
    },

    {
      id: 'misaki_ending_c',
      location: 'home',
      isEnding: true,
      endingId: 'C',
      endingTitle: '秋田から始める',
      narrations: [
        'A社の最終面接で落ちた。',
        'C社の中堅インフラ企業から、内定が出た。',
        '勤務地：東京。給与：A社より低い。',
        '',
        'A社に落ちた夜、地元の企業のページを開いた。',
        '秋田に本社を置く、物流関連の中小企業。',
        '求人があった。給与はさらに低い。でも、課題は目の前にある。',
        '',
        '美咲はC社の内定を受諾した。',
        'そして同時に、「いつか秋田に戻る」という気持ちを、心にしまった。',
        '宿題にした。',
      ],
      choices: [],
    },
  ],
}
