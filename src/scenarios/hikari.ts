import type { Scenario } from './types'

// 林 ひかり ─ 文系B4・マーケター志望・でもミーハー就活もしたい
// テーマ：軸があることと、迷わないことは別の話

export const hikariScenario: Scenario = {
  charId: 'hikari',
  startSceneId: 'hikari_oct_start',
  scenes: [

    // ── PHASE 1：10月 軸を持って就活をスタート ──

    {
      id: 'hikari_oct_start',
      location: 'university',
      narrations: [
        '大学3年生、10月。',
        'ひかりには、他の人より早く志望が決まっていた。',
        'マーケター。ずっとそう思ってきた。',
        'ゼミで消費者行動を研究し、SNS広告を趣味で分析する。',
        '軸はある。',
        'でも就活解禁のガイダンスで、隣の子に言われた。',
      ],
      dialogs: [
        {
          speaker: '友達（ゼミの同期）',
          line: 'ひかりって志望もう決まってるの？いいな。私まだ全然',
        },
        {
          speaker: 'ひかり',
          line: 'マーケターになりたいって3年間思ってたから',
        },
        {
          speaker: '友達',
          line: 'え、でもコンサルも受けてみたら？ひかりなら絶対受かると思うよ',
          inner: '',
        },
        {
          speaker: 'ひかり（心の声）',
          line: 'コンサル。…面白そう、とは思った。ちょっとだけ。',
        },
      ],
      choices: [
        {
          label: 'マーケター志望を揺るがず維持する',
          nextSceneId: 'hikari_focus_start',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 3 }],
        },
        {
          label: 'コンサルも少し調べてみる',
          nextSceneId: 'hikari_consult_curious',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -3 }],
        },
      ],
    },

    {
      id: 'hikari_focus_start',
      location: 'university',
      narrations: [
        'マーケター志望で進むことを改めて確認した。',
        '食品・化粧品・EC・IT。マーケターを採用している企業を調べた。',
        '「マーケター」という職種は、会社によって全然違うことがわかってきた。',
        'SNS担当・ブランド戦略・データ分析・広告運用。',
        '同じ「マーケター」でも、やることが違う。',
      ],
      choices: [
        {
          label: '「データ分析×広告」に絞って企業を探す',
          nextSceneId: 'hikari_research',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
        {
          label: 'まず幅広くエントリーして絞っていく',
          nextSceneId: 'hikari_research',
          effects: [{ key: 'axis', delta: 5 }, { key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'hikari_consult_curious',
      location: 'home',
      narrations: [
        'コンサルのことを調べた。',
        '「様々な業界のクライアントを支援する」',
        '「最も優秀な人材が集まる業界」',
        '「年収1000万を20代で」',
        '…面白そうだ。',
        '憧れる気持ちが生まれた。',
        'でもひかりは、手を止めた。',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: '「面白そう」と「やりたい」は違う。この区別が大事だと、どこかで聞いた。今の自分はどっちだ？',
        },
      ],
      choices: [
        {
          label: '「面白そうだけど」と気づいてマーケターに戻る',
          nextSceneId: 'hikari_focus_start',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: 'せっかくだから説明会だけ行ってみる',
          nextSceneId: 'hikari_consult_session',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -5 }],
        },
      ],
    },

    // ── PHASE 2：11〜12月 冬インターンと揺れ ──

    {
      id: 'hikari_research',
      location: 'home',
      narrations: [
        '10月後半。企業研究を深めた。',
        'マーケターとして成長できそうな会社のリストができた。',
        '食品大手2社、化粧品1社、IT系マーケティング会社3社。計6社。',
        'でも友達のLINEが来た。',
      ],
      dialogs: [
        {
          speaker: '友達',
          line: '外資コンサルの秋インターン受けてるんだけど、ひかりも受けてみない？',
        },
        {
          speaker: 'ひかり',
          line: 'コンサルは考えてないんだよね',
        },
        {
          speaker: '友達',
          line: '受けるだけ受けてみたらいいじゃん。就活の練習にもなるし',
          inner: '',
        },
        {
          speaker: 'ひかり（心の声）',
          line: '「練習」か。でも練習のつもりで受けて、なんかズレていきそうな気もする。',
        },
      ],
      choices: [
        {
          label: '「練習」として外資コンサルインターンを受ける',
          nextSceneId: 'hikari_consult_intern_apply',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -5 }],
        },
        {
          label: 'マーケター志望のインターンだけに集中する',
          nextSceneId: 'hikari_marketer_intern',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'hikari_consult_intern_apply',
      location: 'home',
      narrations: [
        '外資コンサルのインターン選考に応募した。',
        'ケース問題に取り組んだ。「フェルミ推定」「ケーススタディ」。',
        '初めてやる種類の問題だった。',
        '正直、面白かった。',
        'でも同時に「これ、マーケターとして生きる自分に必要か？」という疑問も生まれた。',
      ],
      choices: [
        {
          label: 'インターンに受かったら参加してみる',
          nextSceneId: 'hikari_consult_intern_result',
          effects: [{ key: 'stress', delta: 5 }, { key: 'axis', delta: -3 }],
        },
        {
          label: 'やっぱりやめる、辞退する',
          nextSceneId: 'hikari_marketer_intern',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'hikari_consult_intern_result',
      location: 'phone',
      narrations: [
        'インターン選考結果。',
        '通過した。',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: '通った。なんか複雑だ。嬉しいのか、困ったのか。',
        },
      ],
      choices: [
        {
          label: '参加する。せっかく通ったから',
          nextSceneId: 'hikari_consult_intern',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -8 }],
        },
        {
          label: '辞退する。本命じゃない',
          nextSceneId: 'hikari_marketer_intern',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'hikari_consult_intern',
      location: 'company',
      narrations: [
        '12月。外資コンサルのインターン。3日間。',
        '優秀な学生が集まっていた。早慶・東大・国際経験者。',
        '議論が速い。論点が鋭い。',
        'ひかりも食らいついた。マーケの知識で貢献できた部分もあった。',
        'でも最終日の夜、ひかりは自分に問いかけた。',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: '3日間面白かった。でも「これを仕事にしたい」とは思わなかった。一度も。マーケターとして広告やデータを触っていた方が、ずっと楽しかった気がする。',
        },
      ],
      choices: [
        {
          label: 'コンサル選考は続けない。マーケに戻る',
          nextSceneId: 'hikari_back_to_marketer',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
        {
          label: 'せっかくだから本選考も受けてみる',
          nextSceneId: 'hikari_consult_honsen',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -12 }],
        },
      ],
    },

    {
      id: 'hikari_marketer_intern',
      location: 'company',
      narrations: [
        '12月。食品メーカーのマーケティングインターン。2日間。',
        'SNS広告の効果測定の実習だった。',
        '実際のデータを触らせてもらった。',
        '「このCTRの差は、コピーのどこが影響しているか分析してください」',
        'ひかりは集中した。気づいたら2時間経っていた。',
      ],
      dialogs: [
        {
          speaker: 'マーケ担当者',
          line: '林さん、データの読み方が鋭いですね。どこで学んだんですか？',
          inner: '（この子、センスがある）',
        },
        {
          speaker: 'ひかり',
          line: '趣味でSNS広告のABテストを観察していました',
        },
        {
          speaker: 'マーケ担当者',
          line: '趣味で！それは本物ですね',
          inner: '',
        },
        {
          speaker: 'ひかり（心の声）',
          line: 'これだ。これが自分のやりたいことだ。',
        },
      ],
      choices: [
        {
          label: 'この実感を軸に、マーケター志望を固める',
          nextSceneId: 'hikari_back_to_marketer',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    {
      id: 'hikari_back_to_marketer',
      location: 'home',
      narrations: [
        '12月末。ひかりは改めてマーケター志望を確認した。',
        'コンサルに揺れた時間は、無駄じゃなかった。',
        '「面白そう」と「やりたい」の区別が、体でわかった。',
        'マーケターが、やりたいことだ。',
      ],
      choices: [
        {
          label: '本選考に向けて準備を始める',
          nextSceneId: 'hikari_jan_prep',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 3：1〜3月 ES・また揺れる ──

    {
      id: 'hikari_consult_honsen',
      location: 'home',
      narrations: [
        '1月。コンサルの本選考と、マーケター志望の準備を並行することになった。',
        '両方のESを書いた。',
        'コンサルのES：「問題を構造化して解決したい」',
        'マーケターのES：「人の気持ちをデータで読み解きたい」',
        '…全然違う自分が、2つの書類に出てきた。',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: 'どっちが本当の自分だ。両方が本当なのか。それとも、どっちかが嘘なのか。',
        },
      ],
      choices: [
        {
          label: 'コンサルを辞退してマーケに集中する',
          nextSceneId: 'hikari_back_to_marketer',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '両方続ける。どこかで決断する',
          nextSceneId: 'hikari_jan_prep',
          effects: [{ key: 'stress', delta: 15 }, { key: 'axis', delta: -8 }],
        },
      ],
    },

    {
      id: 'hikari_jan_prep',
      location: 'home',
      narrations: [
        '1月。ES作成。',
        '志望動機を書いた。',
        '「消費者行動の研究をしてきました。SNS広告のデータを趣味で分析してきました」',
        '本当のことだ。こういう文章は、自然と熱が入る。',
        'でも同時に、友達から連絡が来た。',
      ],
      dialogs: [
        {
          speaker: '別の友達',
          line: 'ひかり、総合職も受けてみた方がよくない？マーケだけだと狭いよ',
          inner: '',
        },
        {
          speaker: 'ひかり',
          line: 'マーケター職を受けてるんだけど…',
        },
        {
          speaker: '友達',
          line: '総合職で入って、後からマーケに異動するのもアリだと思うんだけどな',
        },
        {
          speaker: 'ひかり（心の声）',
          line: 'また揺れる。「狭い」という言葉が刺さる。でも「広げること」が正解なのかな。',
        },
      ],
      choices: [
        {
          label: '「マーケター職」に絞り続ける',
          nextSceneId: 'hikari_es_submit',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '総合職も一部エントリーしてみる',
          nextSceneId: 'hikari_sogoshoku_path',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -8 }],
        },
      ],
    },

    {
      id: 'hikari_sogoshoku_path',
      location: 'home',
      narrations: [
        '総合職でのエントリーを追加した。',
        '志望動機が書けなかった。',
        '「なぜ総合職か」という問いに、答えが出てこない。',
        '「広い選択肢を持ちたかったから」では、薄すぎる。',
        'ひかりは1週間後、総合職のエントリーを取り下げた。',
      ],
      choices: [
        {
          label: 'マーケター職に戻って集中する',
          nextSceneId: 'hikari_es_submit',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 4：3〜4月 書類選考・一次面接 ──

    {
      id: 'hikari_es_submit',
      location: 'home',
      narrations: [
        '2月末。8社にESを提出した。',
        '全社マーケター職採用。',
        '3月。結果：6社書類通過、2社不合格。',
        '通過率は高かった。',
        '「データ分析が趣味」という具体性が効いたのかもしれない。',
      ],
      choices: [
        {
          label: '一次面接へ向かう',
          nextSceneId: 'hikari_1st_interview',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'hikari_1st_interview',
      location: 'interview_room',
      narrations: [
        '4月。一次面接。食品メーカーA社。',
        '面接官は若い人事担当者。',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: '林さん、なぜマーケターを志望しているんですか？',
          inner: '（この質問、テンプレ答えが多い。何が出てくるか楽しみ）',
        },
        {
          speaker: 'ひかり',
          line: '大学でゼミで消費者行動を研究してきました。「なぜ人は買うのか」を数字と心理で分析することが好きで。趣味でSNS広告のABテストも観察していて、感情語を入れると3倍CTRが上がるケースを見つけた時は、本当に面白かったです',
        },
        {
          speaker: '面接官',
          line: '趣味でABテストを観察している、というのはどういう意味ですか？',
          inner: '（これは珍しい。もっと聞きたい）',
        },
        {
          speaker: 'ひかり',
          line: '同じ商品の広告でも、コピーが違うバージョンをスクリーンショットで集めて比較しています。エンゲージメントの差から「どの言葉が人の感情を動かすか」を分析するのが面白くて',
        },
        {
          speaker: '面接官',
          inner: '（この子、本物だ。採れる可能性が高い）',
          line: 'それをどう仕事に活かしたいですか？',
        },
      ],
      choices: [
        {
          label: '消費者インサイトとデータを組み合わせた施策設計を話す',
          nextSceneId: 'hikari_1st_good',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
        {
          label: '「まずは現場でブランドを理解したい」と話す',
          nextSceneId: 'hikari_1st_normal',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'hikari_1st_good',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: 'ひかり',
          line: '消費者の感情の動きを定量的に捉えて、それをコンテンツや広告の設計に反映させたいです。研究で学んだ消費者行動の理論と、データ分析のスキルを組み合わせることで、感覚ではなく根拠のあるマーケティングができると思っています',
        },
        {
          speaker: '面接官',
          inner: '（理論とデータ両方持っている。この子は採れる）',
          line: '最後に、なぜ弊社のマーケターを志望したか教えてください',
        },
        {
          speaker: 'ひかり',
          line: '御社の商品は、生活に根ざしています。人が「なぜこれを選ぶか」に、感情的な理由が深く絡む。そういう商品のマーケティングで自分のアプローチを試したいと思いました',
        },
      ],
      choices: [
        {
          label: '一次面接終了',
          nextSceneId: 'hikari_1st_result',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'hikari_1st_normal',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: 'ひかり',
          line: 'まずは現場でブランドの価値を理解することから始めたいです。その上で、デジタルマーケティングに自分のスキルを活かしたいと思っています',
        },
        {
          speaker: '面接官',
          inner: '（悪くないが、もう少し具体性が欲しかった）',
          line: 'なるほど。ありがとうございます',
        },
      ],
      choices: [
        {
          label: '一次面接終了',
          nextSceneId: 'hikari_1st_result',
          effects: [{ key: 'axis', delta: 3 }],
        },
      ],
    },

    {
      id: 'hikari_1st_result',
      location: 'home',
      narrations: [
        '4月中旬。6社の一次面接が続いた。',
        '結果：4社通過、2社不合格。',
        '通過した4社は、趣味のABテスト観察の話が出た面接だった。',
        '不合格の2社は、無難な答えで乗り切ろうとした面接だった。',
        'ひかりには、傾向が見えた。',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: '自分らしく話した方が通る。当たり前のことだけど、実際にやってみないとわからなかった。',
        },
      ],
      choices: [
        {
          label: '二次面接へ進む',
          nextSceneId: 'hikari_2nd_prep',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 5：5月 二次・最終面接と最後の揺れ ──

    {
      id: 'hikari_2nd_prep',
      location: 'home',
      narrations: [
        '5月。二次面接の準備。',
        'そのタイミングで、またSNSに流れてきた。',
        '「マーケターより、コンサルやPMの方がキャリアとして強い」',
        '「マーケターは専門職で潰しが効かない」',
        '読んで、少し揺れた。',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: '…また揺れてる。でも待って。この「揺れ」、今年何回目だ？10月にも、12月にも、1月にも揺れた。そして毎回、マーケターに戻ってきた。それって何かを意味しているんじゃないか。',
        },
      ],
      choices: [
        {
          label: '揺れるたびに戻ってきた事実を、軸の証明として受け取る',
          nextSceneId: 'hikari_realize',
          effects: [{ key: 'axis', delta: 20 }, { key: 'mental', delta: 10 }],
        },
        {
          label: '「潰しが効かない」という不安を一旦調べる',
          nextSceneId: 'hikari_waver_again',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -8 }],
        },
      ],
    },

    {
      id: 'hikari_realize',
      location: 'cafe',
      narrations: [
        'ノートに書いた。',
        '「10月：コンサルに揺れた → マーケターに戻った」',
        '「12月：コンサルインターンを受けた → 「やりたいじゃない」と気づいた」',
        '「1月：総合職に揺れた → 志望動機が書けなくて戻った」',
        '「5月：SNSに揺れた → 今ここにいる」',
        '毎回揺れた。でも毎回、マーケターという答えに戻ってきた。',
        'これが軸だ、とひかりは思った。',
        '軸があることと、迷わないことは違う。',
        '迷って、戻ってくることが、軸を確かめることなんだ。',
      ],
      choices: [
        {
          label: 'この確信を持って二次面接へ向かう',
          nextSceneId: 'hikari_2nd_interview',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    {
      id: 'hikari_waver_again',
      location: 'home',
      narrations: [
        '「マーケターは潰しが効かない」という記事を読んだ。',
        '「専門性が高い分、転職先が限られる」',
        '読めば読むほど不安になった。',
        '第一志望のマーケター選考の前日に、ひかりはフリーズした。',
        '「本当にマーケターでいいのか」',
      ],
      dialogs: [
        {
          speaker: 'ひかり（心の声）',
          line: '待って。私、何回この疑問を持った？そして何回マーケターに戻ってきた？それって…',
        },
      ],
      choices: [
        {
          label: 'すべての揺れを振り返って、自分の軸を確認する',
          nextSceneId: 'hikari_realize',
          effects: [{ key: 'axis', delta: 15 }],
        },
      ],
    },

    {
      id: 'hikari_2nd_interview',
      location: 'interview_room',
      narrations: ['二次面接。食品メーカーA社。面接官2名。'],
      dialogs: [
        {
          speaker: '面接官A',
          line: '林さん、就活を通じてマーケターという志望は変わりませんでしたか？',
          inner: '（この質問を敢えてしてみよう）',
        },
        {
          speaker: 'ひかり',
          line: '何度も揺れました。コンサルに興味を持ったこともあるし、総合職も考えました。でも、毎回マーケターに戻ってきました。それで気づいたんです。軸があることと迷わないことは違うって。迷って戻ってくることが、本当にやりたいことの証明なのかなと',
        },
        {
          speaker: '面接官B',
          inner: '（…これは深い自己認識だ）',
          line: 'なるほど。その「迷い」の中で、一番大きかった揺れは何でしたか？',
        },
        {
          speaker: 'ひかり',
          line: 'コンサルのインターンに参加したことです。3日間、面白いと感じました。でも「これを仕事にしたい」とは一度も思わなかった。マーケターとしてデータを触っていた時間の方が、ずっと充実していた。それが答えでした',
        },
        {
          speaker: '面接官A',
          inner: '（体験から出た言葉だ。これは本物だ）',
          line: '入社後に実現したいことを教えてください',
        },
        {
          speaker: 'ひかり',
          line: '消費者の感情の動きを、データで可視化する仕組みを作りたいです。「なぜこの商品を選んだか」をアンケートではなく、行動データから読み解く。御社の商品は生活に密着しているから、感情の動きが豊富にあると思っています',
        },
      ],
      choices: [
        {
          label: '二次面接終了',
          nextSceneId: 'hikari_2nd_result',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'hikari_2nd_result',
      location: 'home',
      narrations: [
        '5月末。',
        '4社の二次面接結果。',
        '3社最終へ。1社不合格。',
        '3社から最終の案内。',
        'ひかりは静かに喜んだ。',
      ],
      choices: [
        {
          label: '最終面接へ',
          nextSceneId: 'hikari_final_prep',
          effects: [{ key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 6：6月 最終面接 ──

    {
      id: 'hikari_final_prep',
      location: 'home',
      narrations: [
        '最終面接の前日。',
        'ひかりは就活手帳を開いた。',
        '10月から書き続けた記録。',
        'コンサルに揺れた日、インターンで実感した日、総合職に迷った日。',
        '全部書いてあった。',
        'この記録が、自分の答えだ。',
      ],
      choices: [
        {
          label: 'この記録を持って最終面接へ向かう',
          nextSceneId: 'hikari_final_interview',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'hikari_final_interview',
      location: 'interview_room',
      narrations: [
        '6月。第一志望、食品メーカーA社の最終面接。',
        '役員2名。',
        'ひかりは、落ち着いていた。',
      ],
      dialogs: [
        {
          speaker: '役員A',
          line: '林さん、弊社のマーケターとして、10年後にどういう存在でいたいですか？',
          inner: '（ビジョンを見たい）',
        },
        {
          speaker: 'ひかり',
          line: '「消費者の気持ちを、誰よりもデータで語れる人」でいたいです。感覚ではなく、証拠で話せるマーケター。御社の商品に関わるお客様の感情の動きを、他の誰よりも深く理解したいと思っています',
        },
        {
          speaker: '役員B',
          line: '就活を通じて、一番自分が変わったことを教えてください',
          inner: '（成長を見たい）',
        },
        {
          speaker: 'ひかり',
          line: '「軸があること」と「迷わないこと」は違うと気づいたことです。就活中に何度も揺れました。コンサル、総合職、いろいろ考えました。でも揺れるたびにマーケターに戻ってきた。その「戻ってくる」という事実が、自分の軸を教えてくれました',
        },
        {
          speaker: '役員A',
          inner: '（…これは採る。迷いを経た上での軸は、本物だ）',
          line: 'ありがとうございました。弊社での活躍を楽しみにしています',
        },
      ],
      choices: [
        {
          label: '面接を終える',
          nextSceneId: 'hikari_ending_a',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    // ── ENDING ──

    {
      id: 'hikari_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '軸のある人',
      narrations: [
        '6月第2週。内定の連絡が来た。',
        'ひかりは、少し泣いた。嬉しくて、でも安堵で。',
        '',
        '10月から6月まで、8ヶ月間。',
        'コンサルに揺れた。総合職に迷った。SNSの記事に不安になった。',
        '',
        'でも毎回、マーケターに戻ってきた。',
        '',
        '軸があることと、迷わないことは別の話だった。',
        '迷って、揺れて、それでも戻ってくることが、本当の軸を作った。',
        '',
        '来年4月から、ひかりはマーケターとして働く。',
        '「消費者の気持ちを、データで語れる人」になるために。',
      ],
      choices: [],
    },

    {
      id: 'hikari_ending_b',
      location: 'home',
      isEnding: true,
      endingId: 'B',
      endingTitle: '迷いが軸を作った',
      narrations: [
        '内定が2社から出た。',
        '第一志望のA社と、IT系マーケティング会社。',
        'ひかりはA社を選んだ。インターンで実感した会社だったから。',
        '',
        '就活を通じて、ひかりは何度も揺れた。',
        'でも揺れたことで、自分が本当に何をしたいかがはっきりした。',
        '',
        '迷いは、軸を壊すものじゃなかった。',
        '迷いは、軸を作るものだった。',
      ],
      choices: [],
    },
  ],
}
