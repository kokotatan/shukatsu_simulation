import type { Scenario } from './types'

// 西村 大輝 ─ 理系M1・スタートアップ経験あり・大手で勝負したい
// テーマ：スタートアップ経験者が大手を選ぶことへの、周囲の理解のなさ

export const daikiScenario: Scenario = {
  charId: 'daiki',
  startSceneId: 'daiki_oct_start',
  scenes: [

    // ── PHASE 1：10月 大手を目指すと決める ──

    {
      id: 'daiki_oct_start',
      location: 'university',
      narrations: [
        '大学院1年生、10月。',
        '大輝は、学部時代に2年間スタートアップで働いた。',
        'プロダクト開発・営業・採用。ゼロからチームを作ることも経験した。',
        '充実していた。でも、大輝には引っかかるものがあった。',
        '「もっと大きいフィールドで試したい」',
      ],
      dialogs: [
        {
          speaker: '同期（スタートアップ仲間）',
          line: '大輝、卒業したらそのまま起業するの？それともスタートアップに残る？',
        },
        {
          speaker: '大輝',
          line: '大手に行こうと思ってる',
        },
        {
          speaker: '同期',
          line: 'え？なんで？スタートアップ経験あるのに、大手って…逆行しない？',
          inner: '',
        },
        {
          speaker: '大輝（心の声）',
          line: 'これ、何十回聞かれるんだろう。',
        },
      ],
      choices: [
        {
          label: '「大きいフィールドで試したい」と説明する',
          nextSceneId: 'daiki_explain_choice',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '「理由はいろいろある」と曖昧にする',
          nextSceneId: 'daiki_vague_start',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -3 }],
        },
      ],
    },

    {
      id: 'daiki_explain_choice',
      location: 'university',
      narrations: [],
      dialogs: [
        {
          speaker: '大輝',
          line: 'スタートアップで0→1は経験した。次は1→100、つまりスケールする仕組みを作る側に挑戦したい。大手にはそのフィールドがある',
        },
        {
          speaker: '同期',
          line: '…まあ、大輝がそう決めたなら。でも大手の文化、合わないんじゃないの？',
          inner: '',
        },
        {
          speaker: '大輝（心の声）',
          line: '「合わない」。その言葉が刺さる。でも、試もしてないのに決めつけるな、と思う。',
        },
      ],
      choices: [
        {
          label: '大手のエントリーシートを書き始める',
          nextSceneId: 'daiki_es_start',
          effects: [{ key: 'axis', delta: 8 }],
        },
      ],
    },

    {
      id: 'daiki_vague_start',
      location: 'university',
      narrations: [
        '曖昧に答えることが続いた。',
        'でも、毎回曖昧にすることに、じわじわと疲れていった。',
        '「なぜ大手か」を言語化できないまま就活を始めると、面接で刺さる。',
        '大輝は、自分の答えを作ることにした。',
      ],
      choices: [
        {
          label: '「なぜ大手か」を言語化する',
          nextSceneId: 'daiki_explain_choice',
          effects: [{ key: 'axis', delta: 10 }],
        },
      ],
    },

    // ── PHASE 2：11〜12月 ESと周囲の反応 ──

    {
      id: 'daiki_es_start',
      location: 'home',
      narrations: [
        '11月。大手企業のESを書き始めた。',
        '「学生時代に頑張ったこと」',
        '大輝には書くことがありすぎた。でも、どれを書くかで悩んだ。',
        '「スタートアップで活躍した経験」を書くと、「なぜ大手に？」という疑問が生まれる。',
        'でも、それ以外に書けることはない。',
      ],
      choices: [
        {
          label: 'スタートアップ経験をそのまま書く。疑問は面接で答える',
          nextSceneId: 'daiki_es_honest',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: 'スタートアップのことは控えめにして「学習意欲」を前面に出す',
          nextSceneId: 'daiki_es_toned',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -3 }],
        },
      ],
    },

    {
      id: 'daiki_es_honest',
      location: 'home',
      narrations: [
        'スタートアップでの経験を丁寧に書いた。',
        'プロダクト開発で感じた「スケールの壁」。',
        '100万ユーザーを超えると、スタートアップの仕組みでは限界がある。',
        'その壁を大手のリソースで乗り越えたい、という動機。',
        '自分の言葉で書けた。',
      ],
      choices: [
        {
          label: '10社に提出する',
          nextSceneId: 'daiki_es_result',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'daiki_es_toned',
      location: 'home',
      narrations: [
        '控えめに書いたES。なんか薄い。',
        '自分の一番の経験を隠した文章は、読んでいて空虚だった。',
      ],
      choices: [
        {
          label: 'やっぱり正直に書き直す',
          nextSceneId: 'daiki_es_honest',
          effects: [{ key: 'axis', delta: 8 }],
        },
        {
          label: 'このまま出す',
          nextSceneId: 'daiki_es_result',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -5 }],
        },
      ],
    },

    {
      id: 'daiki_es_result',
      location: 'phone',
      narrations: [
        '12月。ES結果。',
        '10社中8社通過。',
        '「スタートアップ経験」がESで評価されたのかもしれない。',
        '面接では、この経験をどう説明するかが勝負になる。',
      ],
      choices: [
        {
          label: '冬インターンに参加しながら準備する',
          nextSceneId: 'daiki_winter',
          effects: [{ key: 'mental', delta: 5 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    // ── PHASE 3：1〜3月 繰り返される「なぜ大手?」 ──

    {
      id: 'daiki_winter',
      location: 'company',
      narrations: [
        '12月。大手メーカーの冬インターン。',
        '初日のグループワーク。自己紹介で「スタートアップ経験あり」と言ったら、周りが少しざわついた。',
      ],
      dialogs: [
        {
          speaker: 'インターン参加者',
          line: 'え、スタートアップ経験あるのに大手のインターン来てるんですか？',
        },
        {
          speaker: '大輝',
          line: 'スケールしたプロダクトを作りたくて',
          inner: 'また聞かれた。',
        },
        {
          speaker: '参加者',
          line: 'なるほど…でも大手って意思決定遅くないですか？',
        },
        {
          speaker: '大輝（心の声）',
          line: 'それを体験しに来てるんだよ。遅くても、そこで何かを学べると思って来てる。',
        },
      ],
      choices: [
        {
          label: '大手の文化を積極的に観察する',
          nextSceneId: 'daiki_intern_observation',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: 'スタートアップとの違いに苛立ちを感じる',
          nextSceneId: 'daiki_intern_frustrated',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -3 }],
        },
      ],
    },

    {
      id: 'daiki_intern_observation',
      location: 'company',
      narrations: [
        '3日間のインターン。',
        '意思決定のプロセスが、スタートアップと全然違った。',
        '1つの施策を決めるのに、複数の部署の合意が必要だった。',
        '遅い。でも、その分リスクが少ない。',
        '大輝は、大手の「なぜそうなっているか」を考えながら観察した。',
      ],
      dialogs: [
        {
          speaker: '大輝（心の声）',
          line: 'スタートアップのスピードとは違う。でも、これは「遅い」じゃなくて「慎重」なのかもしれない。100万人に影響するプロダクトなら、そうあるべき場面もある。',
        },
      ],
      choices: [
        {
          label: '理解が深まった。面接では前向きに話せる',
          nextSceneId: 'daiki_jan_questions',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'daiki_intern_frustrated',
      location: 'company',
      narrations: [
        '3日間。正直、イライラした。',
        '会議が長い。決裁が遅い。形式的な確認が多い。',
        '「これ、スタートアップなら1時間で決まるのに」と何度も思った。',
      ],
      dialogs: [
        {
          speaker: '大輝（心の声）',
          line: 'でも、イライラしてるだけじゃ面接では話せない。なぜこうなっているかを考えないと。',
        },
      ],
      choices: [
        {
          label: '大手の文化を「理解しようとする姿勢」に切り替える',
          nextSceneId: 'daiki_jan_questions',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'daiki_jan_questions',
      location: 'home',
      narrations: [
        '1月。面接対策。',
        '「なぜ大手か？」という質問への答えを磨いた。',
        '「なぜスタートアップに戻らないの？」',
        '「大手の文化に合わないんじゃないか？」',
        '「スタートアップでできることを、なぜ大手でやりたいの？」',
        '全部、答えを準備した。',
          '準備しながら気づいた。これだけ準備が必要な質問を、毎回聞かれる。',
        'それは自分が「ズレた選択をしている」と思われているからだ。',
        'でも、大輝は自分の選択を正しいと信じている。',
      ],
      dialogs: [
        {
          speaker: '大輝（心の声）',
          line: '「なぜ大手か」という質問に答え続けることが、就活だ。それでいい。答えは、ある。',
        },
      ],
      choices: [
        {
          label: '3月の本選考に向けて準備を仕上げる',
          nextSceneId: 'daiki_march_start',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 4：3〜4月 一次面接 ──

    {
      id: 'daiki_march_start',
      location: 'university',
      narrations: [
        '3月。本選考が始まった。',
        '1社目の一次面接。大手総合電機メーカー。',
      ],
      choices: [
        {
          label: '一次面接へ向かう',
          nextSceneId: 'daiki_1st_interview',
          effects: [{ key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'daiki_1st_interview',
      location: 'interview_room',
      narrations: ['一次面接。'],
      dialogs: [
        {
          speaker: '面接官',
          line: '西村さん、スタートアップでかなりの経験を積まれていますね。なぜ弊社のような大手を志望しているんですか？',
          inner: '（この子、なぜここに来るんだろう。確認したい）',
        },
        {
          speaker: '大輝',
          line: 'スタートアップで0→1のプロダクト開発を経験しました。次は1→100、つまり大規模なユーザーベースでスケールするプロダクトを作る側に挑戦したいと思っています。御社のフィールドでそれができると考えています',
        },
        {
          speaker: '面接官',
          line: 'スタートアップに戻る選択肢はなかったんですか？',
          inner: '（本音を確認したい）',
        },
      ],
      choices: [
        {
          label: '「大手でなければできないことがある」と正直に話す',
          nextSceneId: 'daiki_1st_honest',
          effects: [{ key: 'axis', delta: 10 }],
        },
        {
          label: '「大手の安定性を求めている」と言う',
          danger: true,
          nextSceneId: 'daiki_1st_safe',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -8 }],
        },
        {
          label: '逆に「大手はスタートアップ経験者をどう見ますか？」と聞く',
          nextSceneId: 'daiki_1st_counter',
          effects: [{ key: 'axis', delta: 12 }, { key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'daiki_1st_honest',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '大輝',
          line: 'スタートアップに戻る選択肢は今も魅力的です。ただ、100万人以上が使うプロダクトに携わる経験は、スタートアップでは得られない。そのスケールで失敗してみたい、というのが正直な動機です',
        },
        {
          speaker: '面接官',
          line: '「スケールで失敗してみたい」、という言い方は珍しいですね',
          inner: '（失敗前提で考えている。これは成熟しているな）',
        },
        {
          speaker: '大輝',
          line: 'スタートアップでは失敗しても影響が限定的でした。大きな組織での判断ミスの重さを、身をもって学びたいと思っています',
        },
        {
          speaker: '面接官',
          inner: '（この子は本物だ）',
          line: '他に聞いておきたいことはありますか？',
        },
      ],
      choices: [
        {
          label: '一次面接終了',
          nextSceneId: 'daiki_1st_result',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'daiki_1st_safe',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '大輝',
          line: '研究を続けながらの就活で、安定した環境で長期的に働きたいという気持ちがあります',
          inner: '嘘だ。全然違う。なんでこんなこと言った。',
        },
        {
          speaker: '面接官',
          line: 'スタートアップで経験を積んできた方が安定志向というのは、少し意外ですね',
          inner: '（本音じゃない感じがする。深掘りしよう）',
        },
        {
          speaker: '大輝',
          line: '…えっと、研究との両立で…',
          inner: 'しまった。答えが続かない。',
        },
      ],
      choices: [
        {
          label: '「すみません、正直に言い直します」と切り替える',
          nextSceneId: 'daiki_1st_honest',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 5 }],
        },
        {
          label: 'このまま続ける',
          nextSceneId: 'daiki_1st_result',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: -10 }],
        },
      ],
    },

    {
      id: 'daiki_1st_counter',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '大輝',
          line: '少し逆に聞いていいですか。御社はスタートアップ経験者を採用する際に、どんな点を懸念しますか？',
        },
        {
          speaker: '面接官',
          line: '…（少し驚いた顔）正直に言うと、文化的なフィット感ですかね。意思決定のスピードに対するストレスを心配することがあります',
          inner: '（この子、攻めてきた。でも、嫌いじゃない）',
        },
        {
          speaker: '大輝',
          line: 'その点は把握しています。冬のインターンで大手の意思決定プロセスを体験してきました。「遅い」ではなく「慎重」だと理解しています。大規模ユーザーへの影響を考えると、そうあるべき場面がある',
        },
        {
          speaker: '面接官',
          inner: '（準備している。これは採れる候補者だ）',
          line: 'わかりました。それは頼もしいですね',
        },
      ],
      choices: [
        {
          label: '一次面接終了',
          nextSceneId: 'daiki_1st_result',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'daiki_1st_result',
      location: 'home',
      narrations: [
        '4月。各社の一次面接が続いた。',
        '毎回、「なぜ大手か？」という質問が来た。',
        '5回目あたりから、大輝はこの質問に慣れた。',
        'いや、慣れたというより、答えが洗練されていった。',
        '8社中6社が一次通過。',
      ],
      dialogs: [
        {
          speaker: '大輝（心の声）',
          line: '「なぜ大手か」という質問に答え続けることで、自分の答えがどんどん深くなっている。理解されなかった選択が、少しずつ説明できるようになってきた。',
        },
      ],
      choices: [
        {
          label: '二次面接へ進む',
          nextSceneId: 'daiki_2nd_prep',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 5：5月 二次・最終面接 ──

    {
      id: 'daiki_2nd_prep',
      location: 'lab',
      narrations: [
        '5月。二次面接の準備と研究の両立で、忙しかった。',
        '指導教員に相談したら、「就活より研究に集中しろ」と言われた。',
        '大輝は、「すみません、でも就活を続けます」と言った。',
        '教員は何も言わなかった。',
      ],
      choices: [
        {
          label: '研究と就活の両立を続ける',
          nextSceneId: 'daiki_2nd_interview',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'daiki_2nd_interview',
      location: 'interview_room',
      narrations: ['二次面接。面接官2名。'],
      dialogs: [
        {
          speaker: '面接官A',
          line: '西村さん、スタートアップで採用もされていたんですね。その経験から、うちのような大手の組織をどう見ていますか？',
          inner: '（厳しい質問をしてみよう。本音が出るか確認したい）',
        },
        {
          speaker: '大輝',
          line: 'スタートアップで採用をしていた時、スキルだけで採用してカルチャーフィットを見なかった人が3ヶ月で辞めました。その失敗から、組織文化の重要性を学びました。御社のような大手では、カルチャーを維持しながらスケールする仕組みが必要で、それは私が経験した課題と直結しています',
        },
        {
          speaker: '面接官B',
          line: '逆に、スタートアップで得た感覚がうちで役立つとしたら、どんな場面ですか？',
          inner: '（具体的に聞いてみよう）',
        },
        {
          speaker: '大輝',
          line: '意思決定の前に「なぜこれをやるのか」を問う習慣です。スタートアップでは、リソースが少ないから「なぜ」を問わないと動けない。大手では「前例があるから」で動けてしまう場面もある。そこに自分の視点を持ち込めると思っています',
        },
        {
          speaker: '面接官A',
          inner: '（核心をついている。この子は採りたい）',
          line: '最後に、弊社でなければいけない理由を聞かせてください',
        },
        {
          speaker: '大輝',
          line: '御社の○○事業は、国内シェアで圧倒的です。その規模でプロダクト判断に関わることで、自分の判断が実際にどれだけの人に影響するかを体験したい。スタートアップでは数万人が限界でした。御社なら数百万人のフィールドがある',
        },
      ],
      choices: [
        {
          label: '二次面接終了',
          nextSceneId: 'daiki_2nd_result',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'daiki_2nd_result',
      location: 'home',
      narrations: [
        '5月末。二次結果。',
        '6社中4社が最終へ。',
        '4社から最終面接の案内が来た。',
        '教授に「やっと就活終わりそうです」と報告したら、',
        '「まだ終わってないだろ」と言われた。',
        '大輝は笑った。',
      ],
      choices: [
        {
          label: '最終面接へ',
          nextSceneId: 'daiki_final_interview',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 6：6月 最終面接 ──

    {
      id: 'daiki_final_interview',
      location: 'interview_room',
      narrations: [
        '6月。第一志望の最終面接。役員3名。',
        '大輝は落ち着いていた。',
        '「なぜ大手か」への答えは、もう完成していた。',
      ],
      dialogs: [
        {
          speaker: '役員A',
          line: '西村さん、スタートアップで十分な経験を積んでいますね。正直、なぜ弊社なんですか？',
          inner: '（最終確認だ）',
        },
        {
          speaker: '大輝',
          line: 'スタートアップで0→1は経験しました。でも、1→100の失敗はしていない。御社の規模でプロダクトの意思決定に関わり、その重さを体験したい。スタートアップでは学べないことが、ここにあります',
        },
        {
          speaker: '役員B',
          line: '入社後、スタートアップに戻りたいと思う可能性はありますか？',
          inner: '（早期離職リスクの確認）',
        },
        {
          speaker: '大輝',
          line: 'あると思います。正直に言うと。ただ、今は大手でしかできない経験を積むことに集中したい。それが終わったとき、何を選ぶかはそのときの自分が決めると思っています',
          inner: 'これが本音だ。嘘はつかない。',
        },
        {
          speaker: '役員A',
          inner: '（…正直だ。早期離職リスクはあるが、この誠実さは信頼できる。採る価値がある）',
          line: '最後に、うちに来て一番したいことを教えてください',
        },
        {
          speaker: '大輝',
          line: '御社の主力プロダクトで、ユーザーデータに基づいた意思決定の仕組みを作ることです。スタートアップで経験した「感覚で動く」から「データで動く」への転換を、大きい組織でやってみたい',
        },
        {
          speaker: '役員B',
          inner: '（これは採る）',
          line: 'ありがとうございました',
        },
      ],
      choices: [
        {
          label: '面接を終える',
          offerCountDelta: 1,
          nextSceneId: (stats: import('@/types').GameStats) => (stats.axis >= 60 && stats.mental >= 50 ? 'daiki_ending_a' : 'daiki_ending_b'),
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    // ── ENDING ──

    {
      id: 'daiki_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '大きいフィールドへ',
      narrations: [
        '6月第2週。内定の連絡が来た。',
        '「なぜスタートアップに戻らないの？」という質問を、就活中に何十回受けただろう。',
        '',
        '大輝は、その質問に答えるたびに、自分の答えが洗練されていった。',
        '理解されないことが、逆に自分の軸を鍛えた。',
        '',
        '来年4月から、大輝は大手のフィールドに立つ。',
        '1→100の失敗をするために。',
        'その失敗から、次のものを作るために。',
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
        '内定が2社から出た。',
        '大輝は第一志望を選んだ。',
        '',
        '「なんでスタートアップに戻らないの？」という質問への答えは、就活を通じてどんどん深くなった。',
        '最初は一言だった答えが、最終面接では3分間語れるようになっていた。',
        '',
        '理解されないことを、説明し続けることが、自分の言葉を作った。',
      ],
      choices: [],
    },
  ],
}
