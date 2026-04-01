import type { Scenario } from './types'

// 山本 蓮 ─ 東京大学 工学系研究科M2
// テーマ：研究者としての誇りと社会への接続

export const renScenario: Scenario = {
  charId: 'ren',
  startSceneId: 'ren_oct_start',
  scenes: [

    // ── 前史：10月〜2月（ナレーションのみ）──

    {
      id: 'ren_oct_start',
      location: 'lab',
      narrations: [
        'M2の10月。',
        '実験室の蛍光灯の下、蓮はノートパソコンに向かっていた。',
        '論文の締め切りまであと2ヶ月。データを積み上げ、考察を書き足す。',
        '就活解禁、という文字をどこかで見た気がしたが、手を止めなかった。',
        '研究の方が面白かった。それだけのことだった。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '就活は、あとで何とかなる。今は研究を終わらせないといけない。',
        },
      ],
      choices: [
        {
          label: 'そのまま研究を続ける',
          sub: '就活はいつでも始められる',
          nextSceneId: 'ren_winter_skip',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_winter_skip',
      location: 'lab',
      narrations: [
        '11月。12月。1月。2月。',
        'ゼミ発表。論文の修正。教授との議論。',
        '研究室に泊まった夜が何回あっただろう。',
        '同期の田口が「内定もらった」と言っていたのを、うっすら覚えている。',
        '「おめでとう」と言ったはずだ。',
        '気づいたら、3月になっていた。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '……3月？',
        },
      ],
      choices: [
        {
          label: '次のシーンへ',
          nextSceneId: 'ren_mar_panic',
          effects: [{ key: 'stress', delta: 15 }],
        },
      ],
    },

    // ── PHASE 1：3月 突然の就活開始 ──

    {
      id: 'ren_mar_panic',
      location: 'lab',
      narrations: [
        '3月某日。',
        '何の気なしにスマホのニュースを流し見していたら、記事が目に入った。',
        '「大手メーカー、3月から本選考開始」',
        '蓮はスマホを閉じて、また開いた。',
        '就活情報サイトのアプリを開いた。',
        '登録していた企業の締め切りが、今日だった。',
      ],
      dialogs: [
        {
          speaker: '蓮',
          line: '……あ。ESの締め切り、今日じゃん。',
          inner: '走れ。今すぐ走れ。',
        },
      ],
      choices: [
        {
          label: '今すぐESを書き始める',
          nextSceneId: 'ren_mar_es_rush',
          effects: [{ key: 'stress', delta: 15 }, { key: 'mental', delta: -5 }],
        },
        {
          label: '締め切りを確認してから落ち着いて対応する',
          nextSceneId: 'ren_mar_deadline_check',
          effects: [{ key: 'stress', delta: 8 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'ren_mar_deadline_check',
      location: 'lab',
      narrations: [
        'スマホで各社の締め切りを整理した。',
        '今日が締め切りの会社：2社。',
        '今週が締め切りの会社：3社。',
        '来月が締め切りの会社：まだあった。',
        '壊滅的ではない。でも、M2の3月から始めるのはどう考えても遅すぎた。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '同期はもう内定を持っている。俺は今からスタートラインに立とうとしている。',
        },
      ],
      choices: [
        {
          label: '今日締め切りの企業のESを急いで書く',
          nextSceneId: 'ren_mar_es_rush',
          effects: [{ key: 'stress', delta: 10 }, { key: 'mental', delta: -3 }],
        },
        {
          label: '今日の締め切りは諦め、来週以降の企業に集中する',
          nextSceneId: 'ren_mar_es_calm',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_mar_es_rush',
      location: 'home',
      narrations: [
        '帰宅してパソコンを開く。21時。',
        '締め切りは23時59分。',
        '「学生時代に力を入れたこと」欄。',
        '研究、当然研究だ。',
        'だが「研究成果」をどう言葉にすればいい？',
        '論文のアブストラクトをそのままコピペしたら、当然ダメだろう。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '「ナノ材料の表面処理による電気特性の向上に関する研究」……これを人事に説明するには、どうするんだ。',
        },
      ],
      choices: [
        {
          label: '専門用語を使わず「問題解決プロセス」として書く',
          nextSceneId: 'ren_mar_es_reframe',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 8 }],
        },
        {
          label: '専門性をそのまま書いて理解してもらう企業を選ぶ',
          nextSceneId: 'ren_mar_es_specialist',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_mar_es_calm',
      location: 'lab',
      narrations: [
        '落ち着いて戦略を立てた。',
        'R&D部門のある大手メーカー、技術コンサル、シンクタンク。',
        '自分の研究が活かせる場所を探した。',
        '調べるうちに、「研究職」と「技術職（生産技術・開発）」の違いが見えてきた。',
        'どちらを目指すかで、話すべきことも変わる。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '俺が研究室でやってきたこと。それをどう「仕事の言葉」に変えるかが問題だ。',
        },
      ],
      choices: [
        {
          label: '「問題解決のプロセス」として研究を言語化する',
          nextSceneId: 'ren_mar_es_reframe',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_mar_es_reframe',
      location: 'home',
      narrations: [
        '「課題設定→仮説立案→実験→分析→改善」',
        '研究のプロセスを分解して書いた。',
        '専門用語は最小限に。伝えたいのは「何をしたか」ではなく「どう考えたか」だ。',
        '書き終えて読み返した。研究者としての自分とは違う言葉だった。',
        'でも嘘ではない。これも自分だ。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: 'この言語化が正しいかどうかわからない。でも、研究と仕事の橋渡しをしなければならないのは確かだ。',
        },
      ],
      choices: [
        {
          label: 'ESを提出する',
          nextSceneId: 'ren_mar_professor',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_mar_es_specialist',
      location: 'home',
      narrations: [
        '専門性をそのまま書いた。論文に近い文体になった。',
        'わかる人にはわかる。わからない人には届かない。',
        'それでいい、と思いながら送信した。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '俺の研究の価値がわかる会社に行きたい。それだけだ。',
        },
      ],
      choices: [
        {
          label: '次は教授に相談する',
          nextSceneId: 'ren_mar_professor',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    // ── PHASE 2：3月中旬 教授との対話 ──

    {
      id: 'ren_mar_professor',
      location: 'lab',
      narrations: [
        '3月中旬。教授に声をかけられた。',
        '「山本、就活始めたのか」',
        'うわさは早い。蓮は小さくうなずいた。',
      ],
      dialogs: [
        {
          speaker: '教授',
          line: '就活するのか？博士に行くんじゃなかったのか。はっきりしろ。',
          inner: undefined,
        },
        {
          speaker: '蓮',
          line: '……正直、まだわかりません。',
          inner: 'はっきりしたいのは俺も同じだ。どちらが本当の自分かわからないから困っている。',
        },
      ],
      interviewerThought: 'コイツは優秀だ。博士に進んでくれれば研究室にとって大きい。就職されるのは困る。でも、本人の意志を無視するわけにもいかない。',
      choices: [
        {
          label: '「研究が好きですが、社会に出ることも考えたくて」と答える',
          nextSceneId: 'ren_mar_prof_honest',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 8 }],
        },
        {
          label: '「就職します」と言い切る',
          nextSceneId: 'ren_mar_prof_declare',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 10 }, { key: 'mental', delta: -5 }],
        },
      ],
    },

    {
      id: 'ren_mar_prof_honest',
      location: 'lab',
      narrations: [
        '教授は少し黙った。',
        '「社会に出ること、か」',
        '声に感情は乗っていなかった。でも蓮は、圧力を感じた。',
      ],
      dialogs: [
        {
          speaker: '教授',
          line: 'お前が博士に来たら、うちの研究は続けられる。それはわかっているか。',
        },
        {
          speaker: '蓮（心の声）',
          line: 'わかってる。だから決められないんだ。俺がいなくなったら、あの研究が止まるかもしれない。でも、それは俺の責任なのか？',
        },
      ],
      choices: [
        {
          speaker: '蓮',
          label: '「少し時間をください」と答える',
          nextSceneId: 'ren_apr_es_writing',
          effects: [{ key: 'stress', delta: 10 }, { key: 'mental', delta: 3 }],
        },
        {
          label: '「その研究を社会に繋げる仕事を探しています」と答える',
          nextSceneId: 'ren_apr_es_writing',
          effects: [{ key: 'axis', delta: 15 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_mar_prof_declare',
      location: 'lab',
      narrations: [
        '「就職します」',
        '言い切った瞬間、教授の表情が変わった。',
        '部屋の温度が1度下がった気がした。',
        '「そうか」',
        'それだけだった。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '言い切ったのに、なんでこんなに不安なんだ。これが自分の本当の答えなのか、まだわからない。',
        },
      ],
      choices: [
        {
          label: 'ESを書き続ける',
          nextSceneId: 'ren_apr_es_writing',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: 5 }],
        },
      ],
    },

    // ── PHASE 3：4月 ES完成と面接準備 ──

    {
      id: 'ren_apr_es_writing',
      location: 'home',
      narrations: [
        '4月。本格的にESと向き合う。',
        '「研究者と社会人の違い」という問いが、どの企業のフォームにも潜んでいた。',
        '形は違えど、問われていることは同じだ。',
        '「あなたは研究室の外でも機能しますか？」',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '論文を書くことと、製品を作ることは違う。それはわかっている。でも、どう違うのかを言語化できるか？',
        },
      ],
      choices: [
        {
          label: '「仮説検証のサイクルを速くする仕事がしたい」と方向性を定める',
          nextSceneId: 'ren_apr_axis_found',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
        {
          label: '「研究を活かせる場を探している」という抽象的な答えにとどまる',
          nextSceneId: 'ren_apr_axis_vague',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 8 }],
        },
      ],
    },

    {
      id: 'ren_apr_axis_found',
      location: 'home',
      narrations: [
        '「研究の本質は、答えのない問いに向き合い続けることだと思っています。」',
        '「ビジネスにはその問い自体を設計できる環境がある。それに魅かれています。」',
        '書いた。読み返した。',
        '初めて、就活の文章として「自分の言葉」だと思えるものが書けた気がした。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '研究者として恥ずかしくない答えが、就活でも通じるかもしれない。',
        },
      ],
      choices: [
        {
          label: 'このESで面接に臨む',
          nextSceneId: 'ren_may_interview',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_apr_axis_vague',
      location: 'home',
      narrations: [
        '「研究経験を活かし、社会課題の解決に貢献したいと考えています。」',
        '書いた。どこかで見た文章だった。',
        '自分の言葉じゃない感じがした。でも今はこれで出すしかない。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '面接で詳しく話せばいいか。……でも、面接で何を話せばいいんだ。',
        },
      ],
      choices: [
        {
          label: '面接の準備を始める',
          nextSceneId: 'ren_may_interview',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: 3 }],
        },
      ],
    },

    // ── PHASE 4：5月 面接の正念場 ──

    {
      id: 'ren_may_interview',
      location: 'interview_room',
      narrations: [
        '5月。大手メーカーR&D部門の面接。',
        '30代の研究開発マネージャーが対面に座っていた。',
        '「山本さん、率直に聞きます。」',
        '「研究と仕事の違い、わかっていますか？」',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: '研究室では失敗も学びです。でもビジネスでは、失敗はコストです。その違いを理解していますか？',
        },
        {
          speaker: '蓮（心の声）',
          line: 'この質問、ずっと怖かった。正直に答えるべきか、うまく答えるべきか。',
        },
      ],
      interviewerThought: '東大の工学系か。頭はいいはずだ。でも研究者特有の「理想主義」が抜けていない学生が多い。こいつはどうだ。',
      choices: [
        {
          label: '「……正直、まだ途中です」と答える',
          nextSceneId: 'ren_may_interview_honest',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '模範解答を言う「研究は独自性、ビジネスは再現性が重要だと理解しています」',
          nextSceneId: 'ren_may_interview_polished',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -5 }],
        },
      ],
    },

    {
      id: 'ren_may_interview_honest',
      location: 'interview_room',
      narrations: [
        '「……正直、まだ途中です。」',
        '少し間があった。',
        '「研究では、答えが出なくても価値があります。でも、ビジネスでそれが通じるかどうかは、まだわかっていません。」',
        '「ただ、それを理解したいから、ここにいます」',
        '面接官が少し表情を変えた。',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: '正直ですね。それは悪くない。では、その「途中」の部分を、うちでどう埋めるつもりですか？',
        },
        {
          speaker: '蓮（心の声）',
          line: '追い詰められてるのか、認められているのか、わからない。でも会話が始まった気がする。',
        },
      ],
      interviewerThought: '「まだ途中です」か。珍しい答えだ。東大の優秀な学生ほど、完璧な答えを出そうとする。こいつは違う。使えるかもしれない。',
      choices: [
        {
          label: '「現場で仮説を試し続けることが、その答えだと思っています」と続ける',
          nextSceneId: 'ren_may_interview_dialogue',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'ren_may_interview_polished',
      location: 'interview_room',
      narrations: [
        '「研究は独自性、ビジネスは再現性が重要だと理解しています。」',
        '完璧な答えだ。面接対策本に書いてある通りだ。',
        '面接官が小さくうなずいた。',
        '「そうですね。では次の質問に」',
        '会話が、どこか薄いまま進んでいった。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '正しい答えを言った。でも、俺じゃない気がした。',
        },
      ],
      interviewerThought: '悪くない答えだ。でも、どこかで聞いたような内容でもある。この学生の研究者としての本音を聞いてみたかったが。',
      choices: [
        {
          label: '面接を終える',
          nextSceneId: 'ren_may_results',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -3 }],
        },
      ],
    },

    {
      id: 'ren_may_interview_dialogue',
      location: 'interview_room',
      narrations: [
        '「現場で仮説を試し続けることが、その答えだと思っています。」',
        '「研究室では仮説が外れてもやり直せます。ビジネスでは速さが求められる。」',
        '「その速さの中で、研究者の思考が邪魔になる場面も出てくると思います。それでも続けたい。」',
        '面接官が少し前のめりになった。',
        '「続けたいというのは、なぜですか？」',
        '本当の面接が始まった気がした。',
      ],
      dialogs: [
        {
          speaker: '蓮',
          line: '研究は好きです。でも研究室の中だけで完結することへの焦りが、ずっとあります。社会の中で、俺の研究が何かを変えるところを見たい。',
          inner: '初めて言葉にできた気がする。これが本当のことだ。',
        },
      ],
      interviewerThought: '来た。これが聞きたかった。研究者としての誇りと、社会への欲求が両立している。珍しい。',
      choices: [
        {
          label: '面接を終える。手応えを感じながら研究室に戻る',
          nextSceneId: 'ren_may_results',
          effects: [{ key: 'mental', delta: 15 }, { key: 'axis', delta: 10 }],
        },
      ],
    },

    // ── PHASE 5：5〜6月 研究室で考え直す ──

    {
      id: 'ren_may_results',
      location: 'lab',
      narrations: [
        '5月下旬。選考結果が届き始める。',
        '通過している企業もあった。落ちた企業もあった。',
        '研究室に戻って、蓮はしばらく実験台の前に座った。',
        '就活をしながら、「なぜ就職したいのか」という問いがまだ答えを待っていた。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '研究が好きだ。でも研究だけしていていいのか、という焦りも本物だ。どちらも本当なのに、どちらかを選ばないといけない。',
        },
      ],
      choices: [
        {
          label: '就職の方向で最終選考に進む',
          nextSceneId: 'ren_jun_final_job',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '教授に博士進学の相談をしてみる',
          nextSceneId: 'ren_jun_phd_talk',
          effects: [{ key: 'stress', delta: 8 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'ren_jun_phd_talk',
      location: 'lab',
      narrations: [
        '教授の研究室を訪ねた。',
        '「博士のことを、もう一度考えてみたくて」',
        '教授は少し表情を緩めた。',
      ],
      dialogs: [
        {
          speaker: '教授',
          line: 'お前なら3年で論文が書ける。アカデミアの道も残っている。就活なんていつでもできる。',
        },
        {
          speaker: '蓮（心の声）',
          line: '「いつでもできる」。それは本当か？M2でもギリギリだったのに、D3になって就活できるのか？それとも、これは圧力なのか。',
        },
      ],
      interviewerThought: 'こいつが博士に来てくれれば、3年は研究が続けられる。ずるいと思いつつも、言ってしまった。',
      choices: [
        {
          label: '「博士進学にします」と決める',
          nextSceneId: 'ren_ending_b_bridge',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: 5 }],
        },
        {
          label: '「やはり就職します」と伝える',
          nextSceneId: 'ren_jun_final_job',
          effects: [{ key: 'axis', delta: 10 }, { key: 'stress', delta: 10 }],
        },
        {
          label: '「まだ決められていません」と正直に言う',
          nextSceneId: 'ren_jun_undecided',
          effects: [{ key: 'stress', delta: 15 }, { key: 'mental', delta: -5 }],
        },
      ],
    },

    {
      id: 'ren_jun_undecided',
      location: 'lab',
      narrations: [
        '「まだ決められていません」',
        '教授は少し間を置いてから言った。',
        '「6月末までに答えを出せ」',
        'それだけだった。',
        'デッドラインができた。',
        '自由の幅が、突然狭くなった気がした。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '6月末。就活の最終選考も、6月中にある。タイミングが重なっている。最悪の場合、どちらも間に合わない。',
        },
      ],
      choices: [
        {
          label: 'やはり就職の選考を続ける',
          nextSceneId: 'ren_jun_final_job',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: 5 }],
        },
        {
          label: '就活をやめて博士進学を選ぶ',
          nextSceneId: 'ren_ending_b_bridge',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: -5 }],
        },
        {
          label: 'どちらも中途半端になってしまう',
          danger: true,
          nextSceneId: 'ren_ending_c_bridge',
          effects: [{ key: 'stress', delta: 20 }, { key: 'mental', delta: -15 }],
        },
      ],
    },

    // ── PHASE 6：6月 最終選考 ──

    {
      id: 'ren_jun_final_job',
      location: 'interview_room',
      narrations: [
        '6月。R&D部門の最終面接。',
        '役員と事業部長が並んでいた。',
        '「山本さん、最後に聞かせてください。」',
        '「なぜ研究者の道ではなく、ビジネスの道を選んだのですか？」',
      ],
      dialogs: [
        {
          speaker: '役員',
          line: '東大の工学系を出た人間が就職を選ぶ理由、正直に教えてください。',
        },
        {
          speaker: '蓮（心の声）',
          line: '正直に、か。じゃあ正直に言おう。',
        },
      ],
      interviewerThought: '博士に行かずに来た理由を聞きたい。逃げてきたのか、選んできたのか。それで全然違う。',
      choices: [
        {
          label: '「研究は手段だと気づいたから」と答える',
          nextSceneId: 'ren_ending_a_bridge',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }],
        },
        {
          label: '「研究者の誇りを持ちながら、社会と繋がりたかった」と答える',
          nextSceneId: 'ren_ending_a_bridge',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'ren_ending_a_bridge',
      location: 'interview_room',
      narrations: [
        '「研究は、自分にとって手段だったのかもしれません。」',
        '「何かを理解したい、解決したい。そのための道具として、研究手法を使ってきた。」',
        '「だとすれば、その手段を活かす場所は、研究室だけではない。」',
        '蓮は初めて、自分が就職を選んだ理由を言葉にできた気がした。',
        '面接官たちが、静かに聞いていた。',
      ],
      dialogs: [],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'ren_ending_a',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'ren_ending_b_bridge',
      location: 'lab',
      narrations: [
        '博士進学を決めた。',
        '就活のアプリを閉じた。',
        '教授に「お世話になります」とメールを送った。',
        '研究室に戻ると、実験機器の音が聞こえた。',
        'いつもの音だ。',
        'これが自分の選んだ場所だ、と思おうとした。',
        '……でも、これが本当に自分の意志なのか、まだわからなかった。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '研究者として生きる。それは本当にやりたいことなのか。就活から逃げただけなのか。3年後の自分が、答えを知っているはずだ。',
        },
      ],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'ren_ending_b',
          effects: [{ key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'ren_ending_c_bridge',
      location: 'home',
      narrations: [
        '6月末。就活の最終選考の結果待ち。',
        '教授への返答もまだ保留にしていた。',
        'どちらも答えを出せないまま、時間が過ぎていった。',
        '企業からの連絡が来た。',
        '「誠に残念ながら、今回は選考を見送らせていただきます」',
        '教授からもメールが来た。「来年に話しましょう」',
        '両方から、静かに距離を置かれた。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: 'どちらも中途半端だった。就活も、博士進学の意思表示も。来年、もう一度やり直すしかない。',
        },
      ],
      choices: [
        {
          label: 'エンディングへ',
          nextSceneId: 'ren_ending_c',
          effects: [{ key: 'stress', delta: 10 }, { key: 'mental', delta: -5 }],
        },
      ],
    },

    // ── ENDINGS ──

    {
      id: 'ren_ending_a',
      location: 'company',
      narrations: [
        '6月下旬。内定の電話がかかってきた。',
        'R&D部門。技術開発職。',
        '研究を続けながら、社会と繋がる仕事。',
        '蓮は電話を切って、研究室の窓から外を見た。',
        'キャンパスに、夕日が落ちていた。',
        '「研究は手段だったのかもしれない」',
        'その言葉が、不思議と誇りを傷つけなかった。',
        '手段を磨いてきた6年間は、本物だった。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '研究者の誇りを持ったまま、社会に出ることにした。それが正解かどうかは、まだわからない。でも、自分で選んだ。',
        },
      ],
      isEnding: true,
      endingId: 'A',
      endingTitle: '研究は手段だった',
      endingSummary: '出遅れながらも、研究者としての誇りを社会に接続する言葉を見つけた。「研究は手段だったのかもしれない」という気づきが、新しい扉を開いた。',
      choices: [],
    },

    {
      id: 'ren_ending_b',
      location: 'lab',
      narrations: [
        '7月。研究室に戻った蓮は、実験を再開した。',
        '「博士に進学します」という報告を、教授は嬉しそうに受け取った。',
        '論文の続きを書きながら、蓮はときどき考えた。',
        '就活をしていた数ヶ月間に感じた、社会への欲求。',
        'あれは本物だったのか、逃げだったのか。',
        '研究室の蛍光灯が、今日もちかちかしていた。',
        '3年後の自分だけが、答えを知っているはずだ。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '研究者として生きることを選んだ。でも、それが本当に自分の意志かどうかは、正直まだわからない。',
        },
      ],
      isEnding: true,
      endingId: 'B',
      endingTitle: '研究者として生きる、たぶん',
      endingSummary: '博士進学を選んだ。研究は続けられる。でも「これが本当に自分の選択か」という問いには、まだ答えが出ていない。',
      choices: [],
    },

    {
      id: 'ren_ending_c',
      location: 'home',
      narrations: [
        '6月が終わった。',
        '就職も、博士進学も、どちらも決まらなかった。',
        '来年、もう一度やり直す。',
        'M3という選択肢はない。修士は2年だ。つまり、もう一度就活するか、博士に進学するかしかない。',
        'ベッドに横になって、天井を見た。',
        '「気づいたら3月になっていた」',
        'あの感覚が、また戻ってきていた。',
      ],
      dialogs: [
        {
          speaker: '蓮（心の声）',
          line: '同じ失敗を繰り返した。でも今回は、「何もしなかった」わけじゃない。迷って、動いて、間に合わなかった。それは去年と違う。',
        },
      ],
      isEnding: true,
      endingId: 'C',
      endingTitle: '来年、やり直す',
      endingSummary: '出遅れたまま、就活も博士進学も決まらなかった。敗北だ。でも、迷いながら動いた記録だけが残った。',
      choices: [],
    },

  ],
}
