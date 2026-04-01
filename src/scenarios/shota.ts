import type { Scenario } from './types'

// 橘 翔太 ─ 理系M1・活動量だけ多い系
// テーマ：経験の量と深さは別物

export const shotaScenario: Scenario = {
  charId: 'shota',
  startSceneId: 'shota_oct_start',
  scenes: [

    // ── PHASE 1：10月 活動を積み重ねる ──

    {
      id: 'shota_oct_start',
      location: 'university',
      narrations: [
        '大学3年生、10月。',
        '翔太のスマホのカレンダーは、予定でぎっしりだ。',
        '学祭実行委員の打ち合わせ、ハッカソンのキックオフ、インターンの説明会。',
        '「お前ほど活動してる人、いないよな」と友達に言われた。',
        '翔太は笑って「まあな」と答えた。',
        'でも、内心では少し違和感があった。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: '活動してる。してるけど、なんか…手応えが薄い。いつも誰かについていってる気がする。',
        },
      ],
      choices: [
        {
          label: 'とにかく活動を増やし続ける',
          sub: '量で圧倒する',
          nextSceneId: 'shota_more_activities',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -3 }],
        },
        {
          label: '一つの活動を深めることを意識する',
          sub: '量より質に転換する',
          nextSceneId: 'shota_depth_attempt',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'shota_more_activities',
      location: 'university',
      narrations: [
        '11月。ボランティアにも参加した。',
        '12月。ハッカソンで3位に入賞した。',
        'でも正直に言うと、アイデアは渡辺くんが出した。',
        '翔太はそのアイデアの実装とプレゼンをやった。',
        '「橘がいたから入賞できた」と言われた。',
        '嬉しかった。でも何かが引っかかった。',
      ],
      choices: [
        {
          label: 'このままペースを上げる',
          nextSceneId: 'shota_winter_intern',
          effects: [{ key: 'stress', delta: 8 }, { key: 'axis', delta: -5 }],
        },
        {
          label: 'なぜ引っかかるのか考える',
          nextSceneId: 'shota_self_doubt',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 3 }],
        },
      ],
    },

    {
      id: 'shota_depth_attempt',
      location: 'university',
      narrations: [
        '学祭実行委員の仕事に集中してみた。',
        '委員長のやり方を見ていた。',
        '「翔太、このタスクお願い」という指示が来る。',
        '翔太はそれをこなした。上手にこなした。',
        'でも、自分から「こうしよう」と言い出せたことは、ほとんどなかった。',
      ],
      choices: [
        {
          label: '「補佐が得意」と割り切る',
          nextSceneId: 'shota_winter_intern',
          effects: [{ key: 'axis', delta: -5 }, { key: 'stress', delta: -3 }],
        },
        {
          label: 'なぜ自分から動けないのか向き合う',
          nextSceneId: 'shota_self_doubt',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_self_doubt',
      location: 'cafe',
      narrations: [
        '深夜のカフェ。一人で考えた。',
        '「なぜ引っ張れないのか」',
        '怖いのかもしれない。',
        '提案して失敗するのが怖い。',
        '誰かについていれば、失敗したときの言い訳ができる。',
        'そういうことか、と気づいた。',
        '気づいて、少し楽になった。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: 'じゃあ、自分から動くことを、一回だけ試してみるか。',
        },
      ],
      choices: [
        {
          label: 'インターンで自分から動くことを意識する',
          nextSceneId: 'shota_winter_intern',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 2：冬インターン ──

    {
      id: 'shota_winter_intern',
      location: 'company',
      narrations: [
        '12月。IT系ベンチャーの冬インターン。3日間。',
        '「新機能の企画を考えてプレゼンしてください」というお題だった。',
        '5人のグループ。',
        '1日目の夜、グループのチャットで企画案が出始めた。',
        'Aさんが「こういうのどう？」と出してきた。',
        '面白かった。翔太は「いいと思います！」と打った。',
        'その瞬間、また気づいた。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: 'また乗っかった。今日こそ自分から出すつもりだったのに。',
        },
      ],
      choices: [
        {
          label: '「さらにこういう観点も加えられませんか」と追加提案する',
          nextSceneId: 'shota_intern_initiative',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
        {
          label: 'Aさんの案を一緒に磨く役割に回る',
          nextSceneId: 'shota_intern_support',
          effects: [{ key: 'axis', delta: 3 }, { key: 'stress', delta: -3 }],
        },
      ],
    },

    {
      id: 'shota_intern_initiative',
      location: 'company',
      narrations: [
        '「ユーザーの感情ログを取れると面白いと思います。使っているときの感情の変化を可視化する機能を追加したらどうでしょう」',
        '翔太がそう書いた。',
        'しばらく間があった。',
        'Aさんが「面白い！それ入れましょう」と返信した。',
        '翔太は、少しだけ自分を取り戻した気がした。',
      ],
      choices: [
        {
          label: 'プレゼン本番でもリードする',
          nextSceneId: 'shota_intern_present',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'shota_intern_support',
      location: 'company',
      narrations: [
        'Aさんの企画を支える形で動いた。',
        'プレゼン資料の作成、データ収集。',
        '最後のプレゼン、Aさんが話した。',
        '社員に「よくできていましたよ」と言われた。',
        '翔太は「ありがとうございます」と言いながら、また何かが引っかかった。',
      ],
      choices: [
        {
          label: 'このまま本選考に向けて動く',
          nextSceneId: 'shota_jan_selfanalysis',
          effects: [{ key: 'axis', delta: -3 }, { key: 'stress', delta: 3 }],
        },
      ],
    },

    {
      id: 'shota_intern_present',
      location: 'company',
      narrations: [
        'プレゼン本番。翔太がリードして話した。',
        '「感情ログ機能」の部分を、自分の言葉で説明した。',
        '社員から「その機能のアイデア、誰が考えたんですか？」と聞かれた。',
        '翔太は「私が提案しました」と答えた。',
        '初めて、そう言えた。',
      ],
      choices: [
        {
          label: '1月の自己分析に向かう',
          nextSceneId: 'shota_jan_selfanalysis',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    // ── PHASE 3：1月 自己分析の壁 ──

    {
      id: 'shota_jan_selfanalysis',
      location: 'home',
      narrations: [
        '1月。ES作成のための自己分析。',
        '活動リストを書き出した。',
        '学祭実行委員・ハッカソン3位・インターン2社・ボランティア3回・ゼミ発表。',
        'すごい量だ。',
        '次の問い。「その活動で、あなたが主体的にやったことは何ですか？」',
        '翔太の手が止まった。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: '学祭は先輩の指示で動いた。ハッカソンは渡辺くんのアイデアに乗った。インターン1社目は上司の指示通り。ボランティアは事務局スケジュール通り。インターン2社目で初めて自分から提案した。…1個だ。12個の活動で、自分で動かしたのは実質1個だ。',
        },
      ],
      choices: [
        {
          label: 'その1個を深く掘り下げる',
          nextSceneId: 'shota_one_truth',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '全部「主体的だった」ことにして書く',
          danger: true,
          nextSceneId: 'shota_lie_path',
          effects: [{ key: 'stress', delta: 12 }, { key: 'axis', delta: -10 }],
        },
        {
          label: '「補佐役として貢献した」という軸で書く',
          nextSceneId: 'shota_support_axis',
          effects: [{ key: 'axis', delta: 8 }, { key: 'stress', delta: -3 }],
        },
      ],
    },

    {
      id: 'shota_one_truth',
      location: 'home',
      narrations: [
        'インターン2社目での感情ログ提案。',
        'それだけを深く書いた。',
        '「なぜその提案ができたか」「何を考えていたか」「結果どうなったか」',
        '3行だったものが、1000字になった。',
        '書いていたら、自分が何を大切にしているかが見えてきた。',
        '「使う人の感情を見たい」「数字の裏にある気持ちを可視化したい」',
        'それが自分の軸だったのかもしれない。',
      ],
      choices: [
        {
          label: 'ESをこの軸で書き上げる',
          nextSceneId: 'shota_es_submit',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'shota_lie_path',
      location: 'home',
      narrations: [
        '全部「主体的に動いた」と書いた。',
        '嘘じゃない…ような気もする。',
        '全部に関わったのは本当だし。',
        'でも書きながら、違和感が蓄積していった。',
        'これで面接官に深掘りされたら、答えられない。',
      ],
      choices: [
        {
          label: '面接でうまく誤魔化す自信がある',
          nextSceneId: 'shota_es_submit',
          effects: [{ key: 'stress', delta: 10 }, { key: 'axis', delta: -5 }],
        },
        {
          label: 'やっぱり正直に書き直す',
          nextSceneId: 'shota_one_truth',
          effects: [{ key: 'axis', delta: 10 }],
        },
      ],
    },

    {
      id: 'shota_support_axis',
      location: 'home',
      narrations: [
        '「サポーターとしての貢献」を軸にした。',
        '「チームの目標達成を支えることに徹してきた」と書いた。',
        '嘘じゃない。でも、どこかで「それって弱みじゃないか」という声が聞こえた。',
      ],
      choices: [
        {
          label: 'この方向で書いて提出する',
          nextSceneId: 'shota_es_submit',
          effects: [{ key: 'axis', delta: 5 }],
        },
        {
          label: 'もう一つの軸（1個の主体的な経験）も加える',
          nextSceneId: 'shota_one_truth',
          effects: [{ key: 'axis', delta: 8 }],
        },
      ],
    },

    // ── PHASE 4：3〜4月 書類選考・一次面接 ──

    {
      id: 'shota_es_submit',
      location: 'university',
      narrations: [
        '3月。ESを10社に提出した。',
        '結果：7社通過、3社不合格。',
        '通過率は悪くない。',
        '「活動量の多さが評価されたのかも」と翔太は思った。',
        'でも本当に試されるのは面接だ。',
      ],
      choices: [
        {
          label: '一次面接の練習をしっかりやる',
          nextSceneId: 'shota_interview_prep',
          effects: [{ key: 'mental', delta: 5 }, { key: 'axis', delta: 3 }],
        },
        {
          label: '準備より数をこなすことを優先する',
          nextSceneId: 'shota_1st_interview',
          effects: [{ key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_interview_prep',
      location: 'university',
      narrations: [
        'キャリアセンターで模擬面接をしてもらった。',
        '「ハッカソンで入賞されたんですね。どんなアイデアでしたか？」',
        '翔太は答えた。するとすぐに次の質問が来た。',
        '「そのアイデア、翔太さんが考えたんですか？」',
        '…止まった。',
      ],
      dialogs: [
        {
          speaker: 'キャリアセンターの職員',
          line: '正直に言いますね。今の話、「チームが考えた」って言った方がいいですよ。面接官はすぐ気づきます',
        },
        {
          speaker: '翔太',
          line: '…はい',
          inner: 'わかってた。でも言われると刺さる。',
        },
      ],
      choices: [
        {
          label: '正直路線で面接に臨む',
          nextSceneId: 'shota_1st_interview',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_1st_interview',
      location: 'interview_room',
      narrations: [
        '4月。一次面接が始まった。',
        '大手IT企業。面接官は一人。',
        '「では、ESに書かれているハッカソンの話を聞かせてください」',
      ],
      dialogs: [
        {
          speaker: '面接官',
          line: 'チームで3位入賞とのことですが、橘さんはどんな役割でしたか？',
          inner: '（活動量は多い。でも、一個一個が薄い印象がある。実際を確認しよう）',
        },
        {
          speaker: '翔太',
          line: '実装とプレゼン資料の担当でした。アイデア自体はチームのメンバーが主に出してくれて、私はそれを形にする役割でした',
          inner: '言えた。正直に言えた。',
        },
        {
          speaker: '面接官',
          line: 'なるほど。その実装で、難しかったことを教えてください',
          inner: '（正直に言えた。実装力があれば評価できる）',
        },
        {
          speaker: '翔太',
          line: 'APIの繋ぎ込みで詰まりました。ドキュメントが少ないAPIで、Stack Overflowとソースコードを読みながら2日かけて解決しました',
        },
        {
          speaker: '面接官',
          line: '自分で調べて解決できた、ということですね。それは大事なことです',
          inner: '（実装力はある。問題はここを自分で動かしたかどうかだが、正直さは好感が持てる）',
        },
      ],
      choices: [
        {
          label: 'インターンでの「感情ログ提案」の話を追加する',
          nextSceneId: 'shota_1st_add_story',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
        {
          label: 'このまま面接を続ける',
          nextSceneId: 'shota_1st_continue',
          effects: [{ key: 'axis', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_1st_add_story',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '翔太',
          line: '別の話になりますが、インターンで初めて自分からアイデアを出した経験があります。「感情ログ機能」を提案して、それがチームに採用されてプロダクトに実装されました。その時に初めて「自分がやった」と言える仕事ができたと感じました',
        },
        {
          speaker: '面接官',
          line: 'それは、なぜそのタイミングで提案できたんですか？',
          inner: '（面白い。自己認識ができている）',
        },
        {
          speaker: '翔太',
          line: '今まで怖かったんだと思います。提案して否定されることが。でも、チームの雰囲気があったかくて、「出してみよう」と思えました',
        },
      ],
      choices: [
        {
          label: '一次面接終了。結果を待つ',
          nextSceneId: 'shota_1st_result',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'shota_1st_continue',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '面接官',
          line: '橘さん、正直に聞きます。これだけ活動してきて、自分で「これは俺がやった」と言えることって、どれくらいありますか？',
          inner: '（核心を突いてみよう）',
        },
        {
          speaker: '翔太',
          line: '…（少し間があった）正直に言うと、少ないです。ほとんどは誰かについていきました',
          inner: '言えた。これが本当のことだ。',
        },
        {
          speaker: '面接官',
          line: 'それ、わかって言ってるのはすごいことですよ',
          inner: '（自己認識がある。これは伸びる素材かもしれない）',
        },
      ],
      choices: [
        {
          label: '一次面接終了。結果を待つ',
          nextSceneId: 'shota_1st_result',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_1st_result',
      location: 'phone',
      narrations: [
        '4月下旬。',
        '7社中4社が一次通過。3社が不合格。',
        '不合格の3社は、活動の薄さを突かれた感じがした面接だった。',
        '通過した4社は、正直に話せた面接だった。',
        '翔太は、ひとつのことを確認した。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: '正直に話した方が、通った。それは偶然じゃないかもしれない。',
        },
      ],
      choices: [
        {
          label: '二次面接へ進む',
          nextSceneId: 'shota_2nd_prep',
          effects: [{ key: 'axis', delta: 8 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 5：5月 二次・最終面接 ──

    {
      id: 'shota_2nd_prep',
      location: 'cafe',
      narrations: [
        '5月。二次面接の準備をしていた。',
        '「なぜうちを志望するのか」「入社後に何をしたいか」',
        '今まで考えていなかった問いだった。',
        '活動をこなすことに精一杯で、「将来何がしたいか」を真剣に考えたことがなかった。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: 'インターンで「感情を可視化したい」と思った。あれが、今の自分に一番近い答えかもしれない。ユーザーの気持ちを技術で見えるようにすること。それがやりたいことか。',
        },
      ],
      choices: [
        {
          label: '「感情データ×技術」という軸で志望動機を固める',
          nextSceneId: 'shota_2nd_interview',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
        {
          label: 'まだ決まっていないが、正直にそのまま話す',
          nextSceneId: 'shota_2nd_interview_honest',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_2nd_interview',
      location: 'interview_room',
      narrations: ['二次面接。面接官2名。'],
      dialogs: [
        {
          speaker: '面接官A',
          line: '橘さん、なぜ弊社を志望しているんですか？',
          inner: '（一次では正直な人だった。二次でも本音が出るか見たい）',
        },
        {
          speaker: '翔太',
          line: '御社のプロダクトは、ユーザーの行動データを深く分析していると説明会で聞きました。私はインターンで「感情を可視化する」という体験をして以来、人の気持ちを数字として見えるようにする仕事に興味を持っています。御社でそれが実現できると思いました',
        },
        {
          speaker: '面接官B',
          line: 'それは具体的にどんな形で実現したいですか？',
          inner: '（軸がある。掘ってみよう）',
        },
        {
          speaker: '翔太',
          line: '正直、まだ具体的なビジョンはありません。でも、最初は現場で泥臭くデータを触り、ユーザーの行動の意味を読み解く力をつけたいと思っています',
        },
        {
          speaker: '面接官A',
          inner: '（謙虚だ。そして正直だ。これは採りたい）',
          line: 'それは正直でいいですね。では最後に、自分の弱みを教えてください',
        },
      ],
      choices: [
        {
          label: '「自分から動くことへの怖れ」を正直に話す',
          nextSceneId: 'shota_2nd_weakness',
          effects: [{ key: 'axis', delta: 12 }, { key: 'mental', delta: 5 }],
        },
        {
          label: '無難な弱みを言う',
          nextSceneId: 'shota_2nd_safe',
          effects: [{ key: 'axis', delta: 3 }, { key: 'stress', delta: 5 }],
        },
      ],
    },

    {
      id: 'shota_2nd_interview_honest',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '面接官A',
          line: '橘さん、志望動機を教えてください',
        },
        {
          speaker: '翔太',
          line: '正直に言うと、まだ「これがやりたい」という一本の軸はありません。ただ、インターンで自分から初めてアイデアを出した経験から、ユーザーの感情と技術を繋ぐ仕事に興味を持ち始めています。御社でその興味を育てたいと思っています',
        },
        {
          speaker: '面接官B',
          inner: '（これは正直すぎる答えだ。評価が難しい。でも誠実さは感じる）',
          line: 'わかりました。では、その興味のきっかけになったインターンの話を聞かせてください',
        },
      ],
      choices: [
        {
          label: '感情ログの話を丁寧に話す',
          nextSceneId: 'shota_2nd_weakness',
          effects: [{ key: 'axis', delta: 10 }],
        },
      ],
    },

    {
      id: 'shota_2nd_weakness',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '翔太',
          line: '弱みは、主体的に動くことへの恐れです。就活をしてきて、自分がいかに「誰かについていく」ことで動いてきたかに気づきました。失敗が怖くて、引っ張られる側にいることで安心していた。インターンで初めてそこを抜け出した経験をして、今はそれを課題として意識しています',
        },
        {
          speaker: '面接官A',
          inner: '（この自己認識の深さ、珍しい。即戦力ではないが、伸びる。採りたい）',
          line: '…それは、よく気づきましたね。ありがとうございます',
        },
      ],
      choices: [
        {
          label: '二次面接終了。結果を待つ',
          nextSceneId: 'shota_2nd_result',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'shota_2nd_safe',
      location: 'interview_room',
      narrations: [],
      dialogs: [
        {
          speaker: '翔太',
          line: '完璧主義なところです。細部にこだわりすぎることがあります',
          inner: 'よく聞くやつ。でも本当のことじゃない。',
        },
        {
          speaker: '面接官B',
          inner: '（…テンプレだな。本音じゃない感じがする）',
          line: 'なるほど。ありがとうございました',
        },
      ],
      choices: [
        {
          label: '結果を待つ',
          nextSceneId: 'shota_2nd_result',
          effects: [{ key: 'stress', delta: 8 }],
        },
      ],
    },

    {
      id: 'shota_2nd_result',
      location: 'home',
      narrations: [
        '5月中旬。',
        '4社の二次面接結果が出た。',
        '2社通過、2社不合格。',
        '通過した2社は、正直に弱みを話した面接だった。',
        '不合格の2社は、無難な答えを並べた面接だった。',
        '偶然かもしれない。でも翔太には、そうは思えなかった。',
      ],
      choices: [
        {
          label: '最終面接へ進む',
          nextSceneId: 'shota_final_prep',
          effects: [{ key: 'axis', delta: 5 }, { key: 'mental', delta: 5 }],
        },
      ],
    },

    // ── PHASE 6：6月 最終面接 ──

    {
      id: 'shota_final_prep',
      location: 'cafe',
      narrations: [
        '5月末。最終面接の前日。',
        '翔太はノートを開いた。',
        '「自分がやったこと」を一覧にした。',
        '正直に数えると、12個の活動で自分が主体的に動いたのは2〜3個だった。',
        '「それで十分か？」という問いに、翔太は向き合った。',
      ],
      dialogs: [
        {
          speaker: '翔太（心の声）',
          line: '十分じゃないかもしれない。でも、それが俺の今の現実だ。それを認めた上で、これからどうするかを話せるか。',
        },
      ],
      choices: [
        {
          label: '「これからどうするか」を軸に最終面接へ',
          nextSceneId: 'shota_final_interview',
          effects: [{ key: 'axis', delta: 15 }, { key: 'mental', delta: 8 }],
        },
      ],
    },

    {
      id: 'shota_final_interview',
      location: 'interview_room',
      narrations: [
        '最終面接。役員2名。',
        '正直に話す。それだけ決めて入室した。',
      ],
      dialogs: [
        {
          speaker: '役員A',
          line: '橘さん、率直に聞きます。これだけ多くの活動をしてきて、自信はありますか？',
          inner: '（この子のESを見ると、量は多い。でも深さが気になる）',
        },
        {
          speaker: '翔太',
          line: '自信というより、反省が多いです。活動の量は多かったですが、ほとんどの場面で誰かについていくことで動いてきたと気づきました。でも、その気づきがあるから、入社後は意識的に変えられると思っています',
        },
        {
          speaker: '役員B',
          line: 'それは、どのタイミングで気づいたんですか？',
          inner: '（自己認識が深い。これは珍しい候補者だ）',
        },
        {
          speaker: '翔太',
          line: '就活の自己分析の中でです。ESを書いていて、「自分が動かしたことって何だ？」と問い続けたら、ほとんどないことに気づきました。最初は怖かったです。でも、気づいたことで初めてスタートラインに立てた気がしました',
        },
        {
          speaker: '役員A',
          inner: '（…これは採る。この正直さと自己認識の深さは、本物だ）',
          line: '最後に、入社してやりたいことを教えてください',
        },
        {
          speaker: '翔太',
          line: 'ユーザーの感情データを扱う仕事に興味があります。技術を使って人の気持ちを可視化すること。インターンで初めてそのアイデアを自分から出したとき、初めて「やった」と思えた。その感覚を、仕事で育てたいです',
        },
      ],
      choices: [
        {
          label: '面接を終える',
          nextSceneId: 'shota_ending_a',
          effects: [{ key: 'axis', delta: 10 }, { key: 'mental', delta: 10 }],
        },
      ],
    },

    // ── ENDING ──

    {
      id: 'shota_ending_a',
      location: 'home',
      isEnding: true,
      endingId: 'A',
      endingTitle: '深さを知った日',
      narrations: [
        '6月第1週。内定の連絡が来た。',
        '翔太は少しだけ泣いた。理由は自分でもよくわからなかった。',
        '',
        '12個の活動。大半は誰かの後ろにいた。',
        'それでも就活を通じて、初めて自分に正直になれた。',
        '',
        '就活が終わって、翔太はノートに書いた。',
        '「経験の量と深さは別物だ」',
        '「でも、浅さに気づいたなら、次は深くなれる」',
        '',
        '翔太の就活は、深さを知ることから始まった。',
      ],
      choices: [],
    },

    {
      id: 'shota_ending_b',
      location: 'home',
      isEnding: true,
      endingId: 'B',
      endingTitle: '1個の本物',
      narrations: [
        '2社から内定が出た。',
        '翔太は、感情ログの提案を評価してくれた会社を選んだ。',
        '',
        '12個の活動の中の、たった1個の主体的な経験。',
        'それが、翔太の就活を救った。',
        '',
        '量じゃなかった。',
        '1個の本物が、あればよかった。',
      ],
      choices: [],
    },
  ],
}
