import type { Scenario } from './types'

// 田中 美咲 ─ 地方国立B4・秋田出身
// テーマ：就活は平等じゃない

export const misakiScenario: Scenario = {
  charId: 'misaki',
  startSceneId: 'misaki_start',
  scenes: [
    {
      id: 'misaki_start',
      location: 'home',
      narrations: [
        '2月。秋田の実家。',
        'リクナビのメール通知が、また一件増えた。',
        '「インターンシップ選考結果のお知らせ」',
        '開くのが怖い。',
      ],
      dialogs: [
        {
          speaker: '美咲',
          line: '…母さん、東京の説明会、また行ってもいいかな',
          inner: '新幹線代、また2万2千円。この前お願いしたばかりなのに。',
        },
        {
          speaker: '母',
          line: 'また行くの？先月も行ったじゃない',
        },
        {
          speaker: '美咲',
          line: 'うん…でも、ここだけは行かないと',
          inner: '「だけ」って言ったけど、もう3社目だ。',
        },
      ],
      choices: [
        {
          label: '「奨学金から出す」と言う',
          sub: '自分のお金だから、とにかく行く',
          cost: 22000,
          nextSceneId: 'misaki_train_alone',
          effects: [{ key: 'mental', delta: -5 }, { key: 'stress', delta: 8 }],
        },
        {
          label: '「この1回だけ」と頼む',
          sub: '正直に事情を話して頼む',
          cost: 22000,
          nextSceneId: 'misaki_train_guilt',
          effects: [{ key: 'mental', delta: -10 }, { key: 'stress', delta: 5 }],
        },
        {
          label: 'オンライン説明会で代替する',
          sub: 'お金をかけずに情報収集する',
          nextSceneId: 'misaki_online_info',
          effects: [{ key: 'axis', delta: 3 }, { key: 'money', delta: 0 }],
        },
      ],
    },

    {
      id: 'misaki_train_alone',
      location: 'train',
      narrations: [
        '新幹線の窓。雪原が流れていく。',
        '往復2万2千円。奨学金の月額の半分が、4時間で消える。',
        '隣の席の人はノートPCを開いている。',
        'Zoomの窓に、ビジネス書が映り込んでいる。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '東京の人は、この金額の感覚が違う。',
          inner: '交通費を気にせずに複数社受けられる。それだけで、もう差がある。',
        },
      ],
      choices: [
        {
          label: '車内でES作成に集中する',
          sub: '移動時間も無駄にしない',
          nextSceneId: 'misaki_jobfair',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '窓の外をぼんやり見る',
          sub: '頭を休める',
          nextSceneId: 'misaki_jobfair',
          effects: [{ key: 'stress', delta: -5 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_train_guilt',
      location: 'train',
      narrations: [
        '新幹線に乗りながら、胸の中にずっと何かが刺さっている。',
        '「1回だけ」と言ったけど、これで3回目だ。',
        '母は何も言わなかった。',
        'それがいちばんきつかった。',
      ],
      choices: [
        {
          label: '車内でES作成に集中する',
          nextSceneId: 'misaki_jobfair',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 3 }],
        },
        {
          label: '母にLINEを送る',
          sub: '「絶対に成果出して帰る」と伝える',
          nextSceneId: 'misaki_jobfair',
          effects: [{ key: 'mental', delta: 5 }, { key: 'stress', delta: -3 }],
        },
      ],
    },

    {
      id: 'misaki_online_info',
      location: 'home',
      narrations: [
        'オンライン合説。画面の向こうに、スーツを着た学生が並んでいる。',
        'チャット欄に質問が流れる。反応が早い。',
        '東京の子たちは、こういうのに慣れているのか。',
        '自分も書き込もうと思ったけど、タイミングを逃した。',
      ],
      dialogs: [
        {
          speaker: '人事（画面越し）',
          line: '何かご質問あれば、どうぞ！',
          inner: '（また東大早慶の子が質問してる。地方学生ってほぼ来ないな）',
        },
        {
          speaker: '美咲（心の声）',
          line: '聞きたいことはある。でも、声に出したら変かな。',
        },
      ],
      choices: [
        {
          label: 'チャットに質問を書き込む',
          sub: 'プレゼンスを出す',
          nextSceneId: 'misaki_jobfair',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '黙って最後まで聞く',
          sub: '情報収集に徹する',
          nextSceneId: 'misaki_jobfair',
          effects: [{ key: 'axis', delta: 2 }, { key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_jobfair',
      location: 'job_fair',
      narrations: [
        '合同説明会。東京ビッグサイト。',
        '人、人、人。',
        '周りのスーツの質が、なんか違う。値段が違う。',
        '美咲のスーツは、地元のイオンで買った1万5千円のやつ。',
      ],
      dialogs: [
        {
          speaker: '隣の学生',
          line: 'ねえ、あそこのブース並んでる？社員の方のOB訪問、セッティングしてもらえるって聞いたんだけど',
        },
        {
          speaker: '美咲',
          line: 'あ、そうなんですか…',
          inner: 'OB訪問。うちの大学、OB自体ほとんどいないんだよな。',
        },
      ],
      choices: [
        {
          label: '話しかけた学生と一緒に並ぶ',
          sub: 'OB訪問のチャンスに乗っかる',
          nextSceneId: 'misaki_network',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '別のブースを回る',
          sub: '自分のペースで情報収集する',
          nextSceneId: 'misaki_solo_booth',
          effects: [{ key: 'stress', delta: -5 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_network',
      location: 'job_fair',
      narrations: [
        '社員のOBと話した。',
        '「地方からわざわざ来たんですね、偉いですね」',
        'その一言が、ずっと引っかかっている。',
        '偉い。そういう話じゃない。',
      ],
      dialogs: [
        {
          speaker: '社員（OB）',
          line: '地方からって珍しいですね。弊社、関東圏の学生が多いんで',
          inner: '（正直、採用実績ない大学だよな。でも元気あっていいな）',
        },
        {
          speaker: '美咲',
          line: 'あの、実際のところ、地方の大学からだとやはり不利になりますか',
        },
        {
          speaker: '社員（OB）',
          line: '（少し間を置いて）…実力次第ですよ、もちろん',
          inner: '（正直には言えないよな。学歴フィルター、あることはある）',
        },
      ],
      choices: [
        {
          label: '素直に礼を言って次に進む',
          nextSceneId: 'misaki_interview_prep',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 3 }],
        },
        {
          label: '「実力で見てください」と言い切る',
          sub: '腹の中を決める',
          nextSceneId: 'misaki_interview_prep',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_solo_booth',
      location: 'job_fair',
      narrations: [
        '気になっていた中堅メーカーのブースに並んだ。',
        '人が少ない。でも話が聞けた。',
        '「地域に関係なく選考します」という一言が、素直に嬉しかった。',
      ],
      choices: [
        {
          label: 'そのままエントリーする',
          nextSceneId: 'misaki_interview_prep',
          effects: [{ key: 'mental', delta: 8 }, { key: 'axis', delta: 5 }],
        },
        {
          label: 'もう少し別の会社も見る',
          nextSceneId: 'misaki_interview_prep',
          effects: [{ key: 'axis', delta: 3 }, { key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'misaki_interview_prep',
      location: 'home',
      narrations: [
        '帰りの新幹線。疲れた。',
        '財布の残高が気になって、計算してしまった。',
        '交通費・宿泊費・スーツのクリーニング。',
        '今月だけで8万円を超えている。',
        '奨学金は月15万円。残り7万で1ヶ月。',
      ],
      choices: [
        {
          label: '受ける会社を絞る',
          sub: 'お金と体力の消耗を防ぐ',
          nextSceneId: 'misaki_interview_1',
          effects: [{ key: 'stress', delta: -10 }, { key: 'axis', delta: 5 }],
        },
        {
          label: 'とにかく数を受ける',
          sub: '打率より打席数で勝負する',
          cost: 30000,
          nextSceneId: 'misaki_interview_1',
          effects: [{ key: 'stress', delta: 15 }, { key: 'mental', delta: -5 }],
        },
        {
          label: '地元就職も視野に入れる',
          sub: '秋田の企業も調べてみる',
          nextSceneId: 'misaki_local_option',
          effects: [{ key: 'stress', delta: -15 }, { key: 'axis', delta: 8 }],
        },
      ],
    },

    {
      id: 'misaki_local_option',
      location: 'home',
      narrations: [
        '地元の求人を調べた。',
        '給与：月21万円。東京の求人より低い。でも、家賃が5万違う。',
        '実質的な手取りは…そんなに変わらないかもしれない。',
        '「地元に帰る」という選択肢が、急に重みを持ち始めた。',
      ],
      dialogs: [
        {
          speaker: '美咲（心の声）',
          line: '東京に出ることが「正解」だと、ずっと思っていた。でも、本当にそうか？',
        },
      ],
      choices: [
        {
          label: '地元企業にもエントリーする',
          sub: '東京と並行して受ける',
          nextSceneId: 'misaki_interview_1',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: -5 }],
        },
        {
          label: 'やっぱり東京にこだわる',
          sub: '秋田に戻る気はない',
          nextSceneId: 'misaki_interview_1',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_interview_1',
      location: 'interview_room',
      narrations: [
        '第一志望の一次面接。',
        '面接官は3人。全員スーツが綺麗だ。',
        '「では自己紹介からお願いします」',
      ],
      dialogs: [
        {
          speaker: '面接官A',
          line: '秋田からいらしたんですね。大変だったでしょう',
          inner: '（わざわざ来てくれてるのは好感。ただ、うちに来た理由が「地元に仕事がなかったから」だったらアウトだな）',
        },
        {
          speaker: '美咲',
          line: '遠いですが、この会社を受けたくて来ました。交通費のことは就活のコストだと割り切っています',
          inner: '嘘じゃない。でも「割り切れてる」かは、正直わからない。',
        },
        {
          speaker: '面接官B',
          line: 'なぜ地元の企業ではなく、東京を目指したんですか？',
          inner: '（地方から来る学生、この質問への答えで選考の行方が決まることが多い）',
        },
      ],
      choices: [
        {
          label: '「やりたいことが東京にしかなかった」と答える',
          sub: '軸があることを伝える',
          nextSceneId: 'misaki_interview_honest',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '「東京の規模感で仕事がしたかった」と答える',
          sub: '無難だが正直じゃない',
          nextSceneId: 'misaki_interview_safe',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 2 }],
        },
        {
          label: '「就活は平等じゃないと気づいたから、あえて難しい方を選んだ」と言う',
          sub: 'ぶっちゃける',
          danger: true,
          nextSceneId: 'misaki_interview_bold',
          effects: [{ key: 'axis', delta: 15 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_interview_honest',
      location: 'interview_room',
      narrations: ['面接官が少し前のめりになった。'],
      dialogs: [
        {
          speaker: '面接官A',
          line: 'やりたいこと、というのは？',
        },
        {
          speaker: '美咲',
          line: '地域格差のある物流をテクノロジーで変えたいと思っています。秋田に住んでいると、届かないものが多くて',
        },
        {
          speaker: '面接官A',
          inner: '（おっ、具体的だな。うちの物流事業部で活きそう）',
          line: '面白いですね。もう少し聞かせてください',
        },
      ],
      choices: [
        {
          label: '具体的なエピソードを話す',
          nextSceneId: 'misaki_result_good',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_interview_safe',
      location: 'interview_room',
      narrations: ['面接官は頷いたが、表情は変わらなかった。'],
      dialogs: [
        {
          speaker: '面接官B',
          inner: '（規模感…まあよく言う答えだな。もう少し深掘りしてみるか）',
          line: '規模感とは具体的にどういうことでしょうか',
        },
        {
          speaker: '美咲',
          line: 'え、あの…たとえば、より多くの人に影響できる仕事がしたくて…',
          inner: 'しまった、浅かった。',
        },
      ],
      choices: [
        {
          label: '正直に「もっと具体的に言うと…」と立て直す',
          nextSceneId: 'misaki_result_normal',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
        {
          label: 'しどろもどろになってしまう',
          nextSceneId: 'misaki_result_bad',
          effects: [{ key: 'stress', delta: 15 }, { key: 'mental', delta: -10 }],
        },
      ],
    },

    {
      id: 'misaki_interview_bold',
      location: 'interview_room',
      narrations: ['面接室に少し沈黙が流れた。'],
      dialogs: [
        {
          speaker: '面接官A',
          line: '…「平等じゃない」というのは、どういう意味ですか？',
          inner: '（これは…想定外の答えだ。怒るべきか、面白いと思うべきか）',
        },
        {
          speaker: '美咲',
          line: '東京に住んでいる人は、交通費をかけずに何十社も受けられます。私は一社来るごとに2万円かかります。それでも来ている。だから聞いてほしいんです',
        },
        {
          speaker: '面接官B',
          inner: '（…正直だな。そしてその正直さは、うちには合うかもしれない）',
          line: '（静かに）続けてください',
        },
      ],
      choices: [
        {
          label: '自分の志望動機を話す',
          nextSceneId: 'misaki_result_bold',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'misaki_result_good',
      location: 'phone',
      narrations: [
        '面接から1週間後。',
        '知らない番号から電話が来た。',
      ],
      dialogs: [
        {
          speaker: '人事',
          line: '田中さん、このたびは二次面接にご案内できることになりました',
        },
        {
          speaker: '美咲（心の声）',
          line: 'よかった。まだ続ける。',
        },
      ],
      choices: [
        {
          label: '二次面接に進む',
          nextSceneId: 'misaki_final',
          effects: [{ key: 'mental', delta: 10 }, { key: 'stress', delta: -5 }],
        },
      ],
    },

    {
      id: 'misaki_result_normal',
      location: 'phone',
      narrations: ['面接から1週間後。メールが来た。'],
      dialogs: [
        {
          speaker: '人事（メール）',
          line: '選考の結果、次の選考にご案内できることとなりました',
        },
      ],
      choices: [
        {
          label: '二次面接に進む',
          nextSceneId: 'misaki_final',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_result_bad',
      location: 'home',
      narrations: [
        '結果は不合格だった。',
        '2万2千円と、半日。それが消えた。',
        '泣いた。しばらく泣いた。',
        'でも、次がある。',
      ],
      onEnter: [{ key: 'stress', delta: 15 }, { key: 'mental', delta: -15 }],
      choices: [
        {
          label: '別の会社の面接に向かう',
          nextSceneId: 'misaki_final',
          effects: [{ key: 'axis', delta: 5 }],
        },
        {
          label: '少し休む',
          nextSceneId: 'misaki_final',
          effects: [{ key: 'mental', delta: 10 }, { key: 'stress', delta: -10 }],
        },
      ],
    },

    {
      id: 'misaki_result_bold',
      location: 'phone',
      narrations: ['3日後、人事から連絡が来た。'],
      dialogs: [
        {
          speaker: '人事',
          line: '田中さん、正直な方ですね。ぜひ次の選考にお越しください',
        },
        {
          speaker: '美咲（心の声）',
          line: '嘘をつかなくてよかった。',
        },
      ],
      choices: [
        {
          label: '二次面接に進む',
          nextSceneId: 'misaki_final',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    {
      id: 'misaki_final',
      location: 'interview_room',
      narrations: [
        '最終面接。',
        '役員が3人、向こうに座っている。',
        '交通費は今回も自腹だった。',
        '秋田から東京へ。3回目の新幹線。',
        'もう後には引けない。',
      ],
      dialogs: [
        {
          speaker: '役員A',
          line: '田中さん、もし内定が出たら、住む場所はどうするつもりですか？',
          inner: '（地方学生は内定後に辞退することが多い。リスクを確認したい）',
        },
        {
          speaker: '美咲',
          line: '東京に出ます。シェアハウスを調べています',
        },
      ],
      choices: [
        {
          label: '「故郷のことも仕事に繋げたい」と伝える',
          nextSceneId: 'misaki_ending_a',
          effects: [{ key: 'axis', delta: 10 }],
        },
        {
          label: '「東京で頑張ります」とシンプルに答える',
          nextSceneId: 'misaki_ending_b',
          effects: [{ key: 'mental', delta: 5 }],
        },
        {
          label: '「地元に帰ることも考えています」と正直に言う',
          danger: true,
          nextSceneId: 'misaki_ending_c',
          effects: [{ key: 'axis', delta: 15 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'misaki_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '地図を作る人',
      narrations: [
        '内定の電話が来た。',
        '涙が出た。母に電話したら、向こうも泣いていた。',
        '来年4月、美咲は東京で働く。',
        'でも忘れない。新幹線の窓から見た、秋田の雪原を。',
        '就活は平等じゃなかった。でも、美咲は来た。',
        '「就活はゲームだ。でもそのルール、誰が決めた？」',
        '美咲は、そのルールを変えるために働くことにした。',
      ],
      choices: [],
    },

    {
      id: 'misaki_ending_b',
      location: 'home',
      isEnding: true,
      endingId: 'B',
      endingTitle: '東京で生きる',
      narrations: [
        '内定が出た。',
        '嬉しい。でも不安の方が大きい。',
        '東京で家賃を払いながら、奨学金を返しながら、働いていけるのか。',
        '母は「頑張れ」と言った。',
        '美咲は「うん」と言った。',
      ],
      choices: [],
    },

    {
      id: 'misaki_ending_c',
      location: 'home',
      isEnding: true,
      endingId: 'C',
      endingTitle: '秋田で作る',
      narrations: [
        '最終面接で正直に言ったら、落ちた。',
        '予想通りだった。でも、後悔はない。',
        '美咲は地元の企業から内定をもらった。',
        '給料は東京より低い。でも、なぜか気持ちは軽い。',
        '「勝ち」の定義は、自分で決める。',
      ],
      choices: [],
    },
  ],
}
